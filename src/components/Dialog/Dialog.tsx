import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './Dialog.scss';
import Icon from '../Icon/icon';
import Button from '../Button/Button';

interface Props {
  visible: boolean;
  title?: string;
  className?: string;
  buttons?: ReactElement[];
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const Dialog: React.FC<Props> = (props) => {
  const {
    visible,
    title = '提示',
    children,
    className,
    buttons,
    onClose,
    closeOnClickMask = true,
  } = props;
  const classes = classnames('g-dialog', className);
  const onClickClose = (e: React.MouseEvent) => {
    onClose(e);
  };
  const onClickMask = (e: React.MouseEvent) => {
    closeOnClickMask && onClickClose(e);
  };
  const content = visible ? (
    <>
      <div className="g-dialog-mask" onClick={onClickMask} />
      <div className={classes}>
        <div className="g-dialog-close" onClick={onClickClose}>
          <Icon name="i-close" />
        </div>
        <header className="g-dialog-header">{title}</header>
        <main className="g-dialog-content">{children}</main>
        {buttons && buttons.length > 0 && (
          <footer className="g-dialog-footer">{buttons}</footer>
        )}
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(content, document.body);
};

export default Dialog;

export const modal = (
  content: ReactNode,
  buttons?: ReactElement[],
  afterClose?: () => void,
  title?: string
) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible
      title={title}
      onClose={() => {
        onClose();
        afterClose && afterClose();
      }}
      buttons={buttons}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return onClose;
};

export const alert = (content: ReactNode, title?: string) => {
  const close = modal(
    content,
    [
      <Button level="main" key={1} onClick={() => close()}>
        OK
      </Button>,
    ],
    () => {},
    title
  );
};

export const confirm = (
  content: ReactNode,
  success?: Function,
  fail?: Function,
  title?: string
) => {
  const onSuccess = () => {
    close();
    success && success();
  };
  const onFail = () => {
    close();
    fail && fail();
  };
  const buttons = [
    <Button level={'main'} key={1} onClick={onSuccess}>
      确认
    </Button>,
    <Button key={2} onClick={onFail}>
      取消
    </Button>,
  ];
  const close = modal('我是confirm', buttons, onFail, title);
};
