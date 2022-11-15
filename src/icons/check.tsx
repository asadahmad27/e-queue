import React from 'react';
import { Props } from '../components/icon';

const Check = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='10' r='9' />
      <path d='M6 10L9 13L14 7' />
    </svg>
  );
};

export default Check;
