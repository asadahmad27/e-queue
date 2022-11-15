import React from 'react';
import { Props } from '../components/icon';

const Edit = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 14 14'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2 6.2L6.2 2L14 9.8V14H9.8L2 6.2ZM12 11.8V10.3L6.4 4.7L5 6.2L10.6 11.8H12ZM5.5 1.3L4.8 0.6C4 -0.2 2.7 -0.2 2 0.6L0.6 2C-0.2 2.8 -0.2 4 0.6 4.8L1.3 5.5L5.5 1.3Z' />
    </svg>
  );
};

export default Edit;
