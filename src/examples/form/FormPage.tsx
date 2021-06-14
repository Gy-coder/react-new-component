import React, { useState } from 'react';
import Form, { FormValue } from '../../components/Form/Form';
import Validator, { FormRule } from '../../components/Form/Validator';

const FormPage = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);

  const onSubmit = () => {
    const rules: FormRule[] = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true },
    ];
    const errors = Validator(formData, rules);
    console.log('errors:', errors);
  };
  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        onSubmit={onSubmit}
        onChange={(newValue) => {
          setFormData(newValue);
        }}
        buttons={
          <>
            <button type={'submit'}>提交</button>
            <button>返回</button>
          </>
        }
      />
    </div>
  );
};

export default FormPage;
