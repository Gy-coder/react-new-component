import React, { useState } from 'react';
import Form, { FormValue } from '../../components/Form/Form';
import Validator, { FormRule, noError } from '../../components/Form/Validator';
import Button from '../../components/Button/Button';

const usernames = ['frank', 'jack', 'alice', 'bob'];
const checkUserName = (
  username: string,
  successed: Function,
  fail: Function
) => {
  setTimeout(() => {
    if (usernames.indexOf(username) < 0) {
      successed();
    } else {
      fail();
    }
  }, 3000);
};

const FormPage = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    const rules: FormRule[] = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      {
        key: 'username',
        validator: {
          name: 'unique',
          validate(username: string) {
            console.log('有人调用validate');
            return new Promise((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          },
        },
      },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
      if (noError(errors)) {
        // TODO
      }
    });
  };
  return (
    <div>
      {JSON.stringify(errors)}
      <Form
        value={formData}
        fields={fields}
        onSubmit={onSubmit}
        onChange={(newValue) => {
          setFormData(newValue);
        }}
        errors={errors}
        buttons={
          <>
            <Button type={'submit'} level="main">
              提交
            </Button>
            <Button>返回</Button>
          </>
        }
      />
    </div>
  );
};

export default FormPage;
