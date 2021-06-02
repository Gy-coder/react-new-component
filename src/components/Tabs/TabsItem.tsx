import React, { ReactElement, ReactNode } from 'react';

interface TabsItemProps extends Partial<ReactElement<HTMLElement>> {
  title: ReactNode;
}

const TabsItem: React.FC<TabsItemProps> = (props) => {
  const { children, title, ...rest } = props;
  return (
    <div className="g-tabs-item" {...rest}>
      {children}
    </div>
  );
};

export default TabsItem;
