import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './Dialog.scss';
import Icon from '../Icon/icon';

interface Props {
  visible: boolean;
  className?: string;
  buttons?: ReactElement[];
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
}

const Dialog: React.FC<Props> = (props) => {
  const {
    visible,
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
        <header className="g-dialog-header">提示</header>
        <main className="g-dialog-content">{children}</main>
        <footer className="g-dialog-footer">{buttons}</footer>
      </div>
    </>
  ) : null;
  return ReactDOM.createPortal(content, document.body);
};

export default Dialog;

export const alert = (content: ReactNode) => {
  const component = (
    <Dialog
      visible
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};
