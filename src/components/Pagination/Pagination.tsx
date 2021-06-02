import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import classnames from 'classnames';
import usePages from './usePages';
import Icon from '../Icon/icon';

interface PaginationProps {
  totalPage: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPage, onChange, defaultPage = 1 } = props;
  const [curPage, setCurPage] = useState(defaultPage);
  const { pages } = usePages(totalPage, curPage);
  const onClickPage = (page: number) => {
    if (page >= 1 && page <= totalPage) setCurPage(page);
  };
  useEffect(() => {
    if (onChange) onChange(curPage);
  }, [curPage]);
  return (
    <div className="g-pagination">
      <span
        className={classnames('g-pagination-nav', {
          disabled: curPage === 1,
        })}
        onClick={() => {
          onClickPage(curPage - 1);
        }}
      >
        <Icon name="i-left" />
      </span>
      {pages.map((item, i) => {
        return item === '···' ? (
          <span className="g-pagination-separator" key={i}>
            <Icon name="i-dot" />
          </span>
        ) : (
          <span
            className={classnames('g-pagination-item', {
              active: item === curPage,
            })}
            key={i}
            onClick={() => {
              onClickPage(item);
            }}
          >
            {item}
          </span>
        );
      })}
      <span
        className={classnames('g-pagination-nav', {
          disabled: curPage === totalPage,
        })}
        onClick={() => {
          onClickPage(curPage + 1);
        }}
      >
        <Icon name="i-right" />
      </span>
    </div>
  );
};

export default Pagination;
