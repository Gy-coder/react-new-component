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
}

const Form: React.FC<Prop> = (props) => {
  const { value, fields, buttons, onSubmit, onChange, errors } = props;
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
      <table>
        {fields.map((f, index) => {
          return (
            <tr className={classnames('g-form-row')} key={index}>
              <td>
                <span className="g-form-label"> {f.label}</span>
              </td>
              <td>
                <Input
                  type={f.input.type}
                  value={value[f.name]}
                  onChange={(e) => onInputChange(f.name, e.target.value)}
                />
                <div>{errors[f.name]}</div>
              </td>
            </tr>
          );
        })}
      </table>
      <div>{buttons}</div>
    </form>
  );
};

export default Form;
