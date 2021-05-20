import React from 'react';
import '../../lib/importAll';
import './icon.scss';

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { name } = props;
  return (
    <svg className="g-icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
