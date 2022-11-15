import React from 'react';
import { Props } from '../components/icon';

const Search = ({ classes }: Props) => {
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='8' cy='8' r='7' strokeWidth='2' />
      <path
        d='M16.7992 16.8002L13.1992 13.2002'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default Search;
