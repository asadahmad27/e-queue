import React from 'react';
import { Props } from '../components/icon';

const CircleChecked = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='10' r='9' />
      <path d='M6 10L9 13L14 7' />
    </svg>
  );
};

export default CircleChecked;
