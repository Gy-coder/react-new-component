import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import TopNav from './TopNav';

interface IntroduceProps {
  xlink: string;
  title: string;
  content: string;
}

const Introduce: React.FC<IntroduceProps> = (props) => {
  const { xlink, title, content } = props;
  return (
    <li>
      <svg>
        <use xlinkHref={xlink} />
      </svg>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
};

const Home = () => {
  return (
    <>
      <div className="topNavAndBanner">
        <TopNav />
        <div className="banner">
          <h1>UI</h1>
          <h2>一个厉害的UI</h2>
          <p className="actions">
            <a href="https://github.com">github</a>
            <Link to="/doc">开始</Link>
          </p>
        </div>
      </div>
      <div className="features">
        <ul>
          <Introduce
            xlink="#i-React"
            title="基于React"
            content="使用了React Function Component编写"
          />
          <Introduce
            xlink="#i-ts"
            title="基于TypeScript"
            content="源码采用TypeScript书写（非严格检查）"
          />
          <Introduce
            xlink="#i-light"
            title="代码易读"
            content="每个组件的源代码都极其简洁"
          />
        </ul>
      </div>
    </>
  );
};

export default Home;
