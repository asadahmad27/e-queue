import React from 'react';

const Loader = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='lds-default'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
