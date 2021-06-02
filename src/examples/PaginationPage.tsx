import React, { useState } from 'react';
import Pagination from '../components/pagination/Pagination';

const PaginationPage: React.FC = () => {
  const [p, setP] = useState(1);
  return (
    <>
      <div>当前是第{p}页</div>
      <Pagination
        totalPage={50}
        defaultPage={p}
        onChange={(page) => setP(page)}
      />
      <Pagination totalPage={5} />
    </>
  );
};

export default PaginationPage;
