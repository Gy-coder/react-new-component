import React from 'react';

export interface FormValue {
  [K: string]: any;
}

interface Prop {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: React.ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
}

const Form: React.FC<Prop> = (props) => {
  const { value, fields, buttons, onSubmit, onChange } = props;
  const formData = value;
  const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = { ...formData, [name]: value };
    onChange(newFormValue);
  };
  return (
    <form onSubmit={onsubmit}>
      {fields.map((f, index) => {
        return (
          <div key={index}>
            {f.label}
            <input
              type={f.input.type}
              value={value[f.name]}
              onChange={(e) => onInputChange(f.name, e.target.value)}
            />
          </div>
        );
      })}
      <div>{buttons}</div>
    </form>
  );
};

export default Form;
