import React, { useState } from 'react';
import Form, { FormValue } from '../../components/form/Form';

const FormPage = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '123',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  const onSubmit = () => {
    console.log(formData);
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
