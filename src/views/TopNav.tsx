import React from 'react';
import { Link } from 'react-router-dom';
import './topnav.scss';

const TopNav: React.FC = () => {
  return (
    <div className="topnav">
      <div className="logo">
        <Link to="/">
          <svg style={{ fill: '#f3a740', height: 32, width: 32 }}>
            <use xlinkHref="#i-moon" />
          </svg>
        </Link>
      </div>
      <ul className="menu">
        <li>菜单1</li>
      </ul>
    </div>
  );
};

export default TopNav;
