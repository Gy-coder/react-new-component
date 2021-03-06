import React from 'react';
import Button from '../../components/Button/Button';

const ButtonPage: React.FC = () => {
  return (
    <>
      <h1>例子1</h1>
      <div>
        <Button onClick={() => console.log('你好')}>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
      </div>
      <h1>例子2 支持大小</h1>
      <div>
        <div>
          <Button size="big">大大大</Button>
          <Button>普普通</Button>
          <Button size="small">小小小</Button>
        </div>
        <div>
          <Button theme="link" size="big">
            大大大
          </Button>
          <Button theme="link">普普通</Button>
          <Button size="small" theme="link">
            小小小
          </Button>
        </div>
        <div>
          <Button size="big" theme="text">
            大大大
          </Button>
          <Button theme="text">普普通</Button>
          <Button size="small" theme="text">
            小小小
          </Button>
        </div>
      </div>
      <h1>例子3 支持level</h1>
      <div>
        <div>
          <Button level="main">主要按钮</Button>
          <Button>普通按钮</Button>
          <Button level="danger">危险按钮</Button>
        </div>
        <div>
          <Button theme="link" level="main">
            主要链接按钮
          </Button>
          <Button theme="link">普通链接按钮</Button>
          <Button theme="link" level="danger">
            危险链接按钮
          </Button>
        </div>
        <div>
          <Button theme="text" level="main">
            主要文字按钮
          </Button>
          <Button theme="text">普通文字按钮</Button>
          <Button theme="text" level="danger">
            危险文字按钮
          </Button>
        </div>
      </div>
      <h1>disabled</h1>
      <div>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>
          禁用链接按钮
        </Button>
        <Button theme="text" disabled>
          禁用按钮
        </Button>
      </div>
      <h1>loading</h1>
      <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
      </div>
    </>
  );
};

export default ButtonPage;
