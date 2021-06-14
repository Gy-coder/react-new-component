import React from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';
import Footer from '../../components/Layout/Footer';
import Sider from '../../components/Layout/Sider';

const LayoutPage = () => {
  return (
    <div>
      <h1>First Example</h1>
      <Layout style={{ height: 500 }}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      <h2>Second Examle</h2>
      <Layout style={{ height: 500 }}>
        <Header>header</Header>
        <Layout>
          <Sider>sider</Sider>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h2>3rd Example</h2>
      <Layout style={{ height: 500 }}>
        <Header>header</Header>
        <Layout>
          <Content>content</Content>
          <Sider>sider</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      <h2>4th Example</h2>
      <Layout style={{ height: 500 }}>
        <Sider>sider</Sider>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutPage;
