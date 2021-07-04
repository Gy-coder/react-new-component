import React from 'react';
import classnames from 'classnames';
import './Dialog.scss';
import Icon from '../Icon/icon';
import Button from '../Button/Button';

interface Props {
  visible: boolean;
  className?: string;
}

const Dialog: React.FC<Props> = (props) => {
  const { visible, children, className } = props;
  const classes = classnames('g-dialog', className);
  return visible ? (
    <>
      <div className="g-dialog-mask" />
      <div className={classes}>
        <div className="g-dialog-close">
          <Icon name="i-close" />
        </div>
        <header className="g-dialog-header">提示</header>
        <main className="g-dialog-content">{children}</main>
        <footer className="g-dialog-footer">
          <Button level="main">OK</Button>
          <Button>Close</Button>
        </footer>
      </div>
    </>
  ) : null;
};

export default Dialog;
