import React, { useMemo } from 'react';
import { SvgProps } from '../types/svg-props';
import { collapse } from '@growthops/ext-ts';
import { colorGenerator, sizeGenerator, strokeGenerator } from '../utils';

const PlayCircled = ({ variant, size, isStroke = false }: SvgProps) => {
  const classes = useMemo(
    () => ({
      fill: collapse([
        isStroke ? strokeGenerator(variant) : colorGenerator(variant),
        sizeGenerator(size),
      ]),
    }),
    [variant, size, isStroke]
  );
  return (
    <svg
      className={classes.fill}
      viewBox='0 0 56 56'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M28 50.9091C40.6523 50.9091 50.9091 40.6523 50.9091 28C50.9091 15.3477 40.6523 5.09091 28 5.09091C15.3477 5.09091 5.09091 15.3477 5.09091 28C5.09091 40.6523 15.3477 50.9091 28 50.9091ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z'
      />
      <path d='M38.1818 28L22.9091 39.0221V16.9779L38.1818 28Z' />
    </svg>
  );
};

export default PlayCircled;
