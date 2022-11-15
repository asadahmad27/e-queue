import React, { useMemo } from "react";
import { SvgProps } from "../types/svg-props";
import { collapse } from "@growthops/ext-ts";
import { colorGenerator, sizeGenerator, strokeGenerator } from "../utils";

interface EmojiProps {
  Component: React.FC<Props>;
}

type IconProps = SvgProps & EmojiProps;

export type Props = {
  classes: {
    fill: string;
  };
};
const Icon = ({
  Component,
  isStroke = false,
  variant,
  size,
  className = "",
  hasHover = false,
  onClick,
}: IconProps) => {
  const classes = useMemo(
    () => ({
      fill: collapse([
        isStroke ? strokeGenerator(variant) : colorGenerator(variant),
        sizeGenerator(size),
        className,
      ]),
      hoverEffect:
        "hover:cursor-pointer hover:bg-secondary-gray-300 p-2 rounded-full transition-all ease-in-out duration-500",
    }),
    [variant, size, isStroke, className]
  );
  return (
    <div className={hasHover ? classes.hoverEffect : ""} onClick={onClick}>
      <Component classes={classes} />
    </div>
  );
};

export default Icon;
