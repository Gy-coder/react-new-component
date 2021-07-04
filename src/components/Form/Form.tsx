import React from 'react';
import classnames from 'classnames';
import './Form.scss';
import Input from '../Input/Input';

export interface FormValue {
  [K: string]: any;
}

interface Prop {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: React.ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
  errorsDisplayMode?: 'first' | 'all';
  transformError?: (message: string) => string;
}

const Form: React.FC<Prop> = (props) => {
  const {
    value,
    fields,
    buttons,
    onSubmit,
    onChange,
    errors,
    errorsDisplayMode = 'first',
    transformError,
  } = props;
  const formData = value;
  const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = { ...formData, [name]: value };
    onChange(newFormValue);
  };
  const transform = (message: string) => {
    console.log('innermessage', message);
    const map: any = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
    };
    if (transformError) {
      console.log(transformError(message));
    }
    return (
      (transformError && transformError(message)) || map[message] || '未知错误'
    );
  };
  return (
    <form onSubmit={onsubmit}>
      <table>
        <tbody>
          {fields.map((f) => (
            <tr className={classnames('g-form-tr')} key={f.name}>
              <td className="g-form-td">
                <span className="g-form-label">{f.label}</span>
              </td>
              <td className="g-form-td">
                <Input
                  className="g-form-input"
                  type={f.input.type}
                  value={formData[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div className="g-form-error">
                  {errors[f.name] ? (
                    errorsDisplayMode === 'first' ? (
                      transform(errors[f.name][0])
                    ) : (
                      errors[f.name].map((error) => {
                        return transform(error).join();
                      })
                    )
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          <tr className="g-form-tr">
            <td className="g-form-td" />
            <td className="g-form-td">{buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
