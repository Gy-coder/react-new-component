import React from 'react';
import '../../lib/importAll';
import './icon.scss';
import classnames from '../../lib/classnames';

interface IconProps extends React.SVGAttributes<SVGAElement> {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name, className, ...rest } = props;
  return (
    // @ts-ignore
    <svg className={classnames('g-icon', className)} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
