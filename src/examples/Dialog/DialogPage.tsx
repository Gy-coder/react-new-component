import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from '../../components/Dialog/Dialog';
import Button from '../../components/Button/Button';

const DialogPage = () => {
  const [x, setX] = useState(false);
  const buttons = [<Button level="main">OK</Button>, <Button>Close</Button>];
  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <Button level="main" onClick={() => close()}>
          close
        </Button>
      </h1>
    );
  };
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
      <button
        onClick={() =>
          confirm(
            '我是confirm',
            () => {
              console.log('you click success');
            },
            () => {
              console.log('you click fail');
            }
          )
        }
      >
        confirm
      </button>
      <button onClick={() => openModal()}>modal</button>
    </div>
  );
};

export default DialogPage;
