import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './Toast.scss';

interface Props {
  visible: boolean;
  autoClose?: boolean;
  autoCloseDelay?: number;
  closeButton?: { text: ReactNode; callback?: Function };
}

const Toast: React.FC<Props> = (props) => {
  const {
    children,
    autoClose = false,
    autoCloseDelay = 3,
    closeButton,
  } = props;
  const [visible, setVisible] = useState(props.visible);
  const toast = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  useEffect(() => {
    execAutoClose();
    updateStyle();
  });
  const close = () => {
    setVisible(false);
    unmountWrapper();
    closeButton && closeButton.callback && closeButton.callback();
  };
  const execAutoClose = () => {
    let id: NodeJS.Timer;
    if (autoClose) {
      id = setTimeout(() => {
        close();
      }, autoCloseDelay * 1000);
    }
    return () => {
      id && clearTimeout(id);
    };
  };
  const updateStyle = () => {
    if (line.current) {
      line.current.style.height = `${
        toast.current?.getBoundingClientRect().height
      }px`;
    }
  };
  const unmountWrapper = () => {
    const div = document.getElementById('g-toast-wrapper');
    div && ReactDOM.unmountComponentAtNode(div);
    div && div.remove();
  };
  const onClickCloseButton = () => {
    close();
    closeButton && closeButton.callback && closeButton.callback();
  };
  const content = visible ? (
    <div className="g-toast" ref={toast}>
      {children}
      {closeButton && (
        <>
          <div className="line" ref={line} />
          <div onClick={() => onClickCloseButton()} className="g-toast-close">
            {closeButton.text}
          </div>
        </>
      )}
    </div>
  ) : null;
  return content;
};

export default Toast;

export const showToast = (
  message: ReactNode,
  object?: Omit<Props, 'visible'>
) => {
  const component = (
    <Toast visible {...object}>
      {message}
    </Toast>
  );
  console.log(component);
  const div = document.createElement('div');
  div.id = 'g-toast-wrapper';
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
