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
                      errors[f.name][0]
                    ) : (
                      errors[f.name].join(' ')
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
