import React from 'react';
import Toast, { showToast } from '../../components/Toast/Toast';

const ToastPage = () => {
  return (
    <div>
      <button onClick={() => showToast('我是 message')}>button</button>
    </div>
  );
};

export default ToastPage;
