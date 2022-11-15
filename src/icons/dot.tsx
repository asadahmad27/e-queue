import React from 'react';
import { Props } from '../components/icon';

const Dot = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 4 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='2' cy='2' r='2' />
      <circle cx='2' cy='8' r='2' />
      <circle cx='2' cy='14' r='2' />
    </svg>
  );
};

export default Dot;
