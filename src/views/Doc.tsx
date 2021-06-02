import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  NavLink,
  Redirect,
} from 'react-router-dom';
// @ts-ignore
import ReactMarkdown from 'react-markdown';
import TopNav from './TopNav';
import './doc.scss';
import Intro from '../markdown/introduce.md';
import Install from '../markdown/install.md';
import GetStarted from '../markdown/get-started.md';
import IconPage from '../examples/Icon/IconPage';
import FormPage from '../examples/form/FormPage';
import PaginationPage from '../examples/PaginationPage';

const Doc: React.FC = () => {
  return (
    <div className="layout">
      <TopNav />
      <div className="content">
        <aside>
          <h2>开发指南</h2>
          <ol>
            <li>
              <NavLink to="/doc/introduce">介绍</NavLink>
            </li>
            <li>
              <NavLink to="/doc/install">安装</NavLink>
            </li>
            <li>
              <NavLink to="/doc/get-started">开始使用</NavLink>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <NavLink to="/doc/icon">Icon 组件</NavLink>
            </li>
            <li>
              <NavLink to="/doc/form">Form 组件</NavLink>
            </li>
            <li>
              <NavLink to="/doc/pagination">Pagination 组件</NavLink>
            </li>
          </ol>
        </aside>
        <main>
          <Switch>
            <Route path="/doc/introduce">
              <ReactMarkdown className="markdown-body" children={Intro} />
            </Route>
            <Route path="/doc/install">
              <ReactMarkdown className="markdown-body" children={Install} />
            </Route>
            <Route path="/doc/get-started">
              <ReactMarkdown className="markdown-body" children={GetStarted} />
            </Route>
            <Route path="/doc/icon" component={IconPage} />
            <Route path="/doc/form" component={FormPage} />
            <Route path="/doc/pagination" component={PaginationPage} />
            <Redirect to="/doc/introduce" />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Doc;
