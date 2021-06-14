import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import useDidMountEffect from '../../hooks/useDidMountEffect';

const InputPage = () => {
  const [n, setN] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setN(e.target.value);
  };
  useDidMountEffect(() => {
    console.log(n);
  }, [n]);
  return (
    <>
      <h1>例子1</h1>
      <div>
        <Input value={n} onChange={onChange} />
      </div>
      <h1>disabled</h1>
      <div>
        <Input disabled />
      </div>
      <h1>readonly</h1>
      <div>
        <Input readOnly />
      </div>
      <h1>error</h1>
      <div>
        <Input error="姓名不能少于两个字" />
      </div>
    </>
  );
};

export default InputPage;
