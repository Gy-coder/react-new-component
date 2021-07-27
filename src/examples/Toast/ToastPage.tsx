import React, { useState } from 'react';
import Toast, { showToast } from '../../components/Toast/Toast';

const ToastPage = () => {
  return (
    <div>
      <button
        onClick={() =>
          showToast(
            '我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message我是 message 完',
            {
              closeButton: { text: '知道了' },
            }
          )
        }
      >
        button
      </button>
    </div>
  );
};

export default ToastPage;
