import React from 'react';
import { Props } from '../components/icon';

const CircleCross = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='10' r='9' />
      <path d='M7 13L13 7' />
      <path d='M13 13L7 7' />
    </svg>
  );
};

export default CircleCross;
