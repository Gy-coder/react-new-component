import React, { useState } from 'react';
import Dialog, { alert } from '../../components/Dialog/Dialog';
import Button from '../../components/Button/Button';

const DialogPage = () => {
  const [x, setX] = useState(false);
  const buttons = [<Button level="main">OK</Button>, <Button>Close</Button>];
  return (
    <div>
      <button onClick={() => setX(!x)}>button</button>
      <Dialog
        visible={x}
        onClose={() => {
          setX(false);
        }}
        buttons={buttons.map((button, index) => {
          return React.cloneElement(button, { key: index });
        })}
      >
        Dialog
      </Dialog>
      <button onClick={() => alert('我是alert')}>button</button>
    </div>
  );
};

export default DialogPage;
