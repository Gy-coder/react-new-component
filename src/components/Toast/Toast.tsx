import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Toast.scss';

interface Props {}

const Toast: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="g-toast">{children}</div>;
};

export default Toast;

export const showToast = (message: ReactNode) => {
  const component = <Toast>{message}</Toast>;
  console.log(component);
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
