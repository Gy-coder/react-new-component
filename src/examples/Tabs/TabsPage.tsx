import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import TabsItem from '../../components/Tabs/TabsItem';
import Icon from '../../components/icon/icon';

const TabsPage = () => {
  return (
    <Tabs onChange={(selected) => console.log(selected)}>
      <TabsItem title="体育">体育</TabsItem>
      <TabsItem title="财经">财经</TabsItem>
      <TabsItem title="美食栏目">美食</TabsItem>
    </Tabs>
  );
};

export default TabsPage;
