import React, { useMemo } from 'react';
import { collapse } from '@growthops/ext-ts';

type RegionProps = {
  children: boolean | JSX.Element | Array<boolean | JSX.Element>;
  className?: string;
  hasBottomMargin?: boolean;
  hasBanner?: boolean;
  hasTopMargin?: boolean;
  isSmall?: boolean;
};

const Region = ({
  children,
  className = '',
  hasBottomMargin = false,
  hasBanner = false,
  hasTopMargin = false,
  isSmall = false,
}: RegionProps) => {
  const classes = useMemo(
    () => ({
      root: collapse([
        hasBottomMargin
          ? 'mb-[60px] md:mb-40'
          : hasBanner
          ? 'mb-10 md:mb-[100px]'
          : isSmall
          ? 'mb-10 sm:mb-[60px]'
          : '',
        hasTopMargin ? ' mt-10 sm:mt-[100px] mb-5 sm:mb-[60px]' : '',
        className,
      ]),
    }),
    [hasBottomMargin, className, hasBanner, hasTopMargin, isSmall]
  );

  return <section className={classes.root}>{children}</section>;
};

export default Region;

export type { RegionProps };
