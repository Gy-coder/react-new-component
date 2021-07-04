import React, { useState } from 'react';
import Dialog from '../../components/Dialog/Dialog';

const DialogPage = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <button onClick={() => setX(!x)}>button</button>
      <Dialog visible={x}>Dialog</Dialog>
    </div>
  );
};

export default DialogPage;
