export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "white"
  | "success";
export type Size =
  | "extra-small"
  | "small"
  | "regular"
  | "medium"
  | "large"
  | "xSmall";
export interface SvgProps {
  variant: Variant;
  size: Size;
  isStroke?: boolean;
  className?: string;
  hasHover?: boolean;
  onClick?: any;
}

export interface SvgProp {
  classes: {
    fill: string;
  };
}
