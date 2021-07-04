import { FormValue } from './Form';

/**
 * 辅助函数
 */

function flat(arr: Array<any>) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      result.push(...arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function fromEntries(array: Array<[string, string[]]>) {
  const result: { [key: string]: string[] } = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}

export interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: {
    name: string;
    validate: (data: any) => Promise<void>;
  };
}

type FormRules = Array<FormRule>;

interface OneError {
  message: string;
  promise?: Promise<any>;
}

function isEmpty(value: any) {
  return value === null || value === undefined || value === '';
}

export function noError(errors: any) {
  return Object.keys(errors).length === 0;
}

const Validator = (
  formValue: FormValue,
  rules: FormRules,
  callback: (errors: any) => void
): void => {
  const errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.forEach((rule) => {
    const value = formValue[rule.key];
    if (rule.validator) {
      const promise = rule.validator.validate(value);
      addError(rule.key, { message: rule.validator.name, promise });
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, { message: 'required' });
    }
    if (rule.minLength && !isEmpty(value) && value!.length < rule.minLength) {
      addError(rule.key, { message: 'minLength' });
    }
    if (rule.maxLength && !isEmpty(value) && value!.length > rule.maxLength) {
      addError(rule.key, { message: 'maxLength' });
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, { message: 'pattern' });
    }
  });
  const promiseList = flat(Object.values(errors))
    .filter((item) => item.promise)
    .map((item) => item.promise);
  Promise.all(promiseList).finally(() => {
    const newErrors = fromEntries(
      Object.keys(errors).map((key) => {
        return [key, errors[key].map((item: OneError) => item.message)];
      })
    );
    callback(newErrors);
  });
  return errors;
};

export default Validator;
