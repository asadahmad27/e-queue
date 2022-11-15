import React, { forwardRef, useMemo } from "react";
import { isNil } from "remeda";
import { collapse } from "@growthops/ext-ts";

type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "transparent"
  | "header";

type Outline = "primary" | "secondary" | "tertiary";

type Size = "small" | "regular" | "large";

type IconAlignment = "left" | "right";

type Icon = {
  svg: React.ElementType;
  alignment?: IconAlignment;
  className?: string;
};

type BaseButtonProps = {
  label: string;
  className?: string;
  variant: Variant;
  Outline?: Outline;
  size?: Size;
  icon?: Icon;
  image?: string;
};

type SemanticButtonProps = BaseButtonProps &
  React.ComponentPropsWithoutRef<"button">;

type LinkButtonProps = BaseButtonProps & React.ComponentPropsWithoutRef<"a">;

const baseClasses =
  "text-heading-h5 inline-flex items-center justify-center h-12 rounded-lg leading-none transition-all ease-in-out duration-300";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-black text-white hover:text-primary-black hover:bg-white font-bold ",
  secondary:
    "bg-white hover:bg-primary-black hover:text-white text-primary-black font-bold",
  tertiary: "bg-functional-peach hover:bg-white text-primary-red font-medium",
  quaternary: "bg-primary-red hover:bg-primary-black  text-white font-bold",
  transparent:
    "bg-transparent text-white hover:text-primary-black hover:bg-white font-bold border border-white ",
  header: "bg-white text-primary-black font-bold ",
};

const sizeClasses: Record<Size, string> = {
  large: "w-full  space-x-3",
  regular: "px-6 py-3  space-x-3",
  small: "px-6 py-3  space-x-2",
};

const iconClasses: Record<Size, string> = {
  large: "w-7",
  regular: "w-5",
  small: "w-4",
};

const generateIcon = (
  icon: Icon | undefined,
  alignment: IconAlignment,
  classes: string,
  alignmentAdjustmentClasses: string
) => {
  if (!isNil(icon) && (icon?.alignment ?? "left") === alignment) {
    return (
      <icon.svg className={collapse([classes, alignmentAdjustmentClasses])} />
    );
  }
};

const useClasses = (
  variant: Variant,
  size: Size,
  className: string | undefined,
  icon: Icon | undefined
) =>
  useMemo(
    () => ({
      root: collapse([
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className ?? "",
      ]),
      icon: collapse([iconClasses[size], icon?.className ?? ""]),
    }),
    [variant, size, className, icon?.className]
  );

const useIcons = (icon: Icon | undefined, classes: string) =>
  useMemo(
    () => ({
      left: generateIcon(icon, "left", classes, "-ml-2"), // -ml-* here to visually weight the icon appropriately.
      right: generateIcon(icon, "right", classes, "!-mr-2"), // !-mr-* here to visually weight the icon appropriately.
    }),
    [icon, classes]
  );

const Semantic = ({
  label,
  variant = "primary",
  size = "regular",
  className,
  icon,
  image,
  ...intrinsicButtonProps
}: SemanticButtonProps): JSX.Element => {
  const classes = useClasses(variant, size, className, icon);
  const icons = useIcons(icon, classes.icon);

  return (
    <button className={classes.root} {...intrinsicButtonProps}>
      {image && <img src={image} alt="" />}
      {icons.left}
      <span>{label}</span>
      {icons.right}
    </button>
  );
};

const Link = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      label,
      variant = "primary",
      size = "regular",
      className,
      icon,
      ...intrinsicAnchorProps
    }: LinkButtonProps,
    ref
  ): JSX.Element => {
    const classes = useClasses(variant, size, className, icon);
    const icons = useIcons(icon, classes.icon);

    return (
      <a
        ref={ref}
        className={classes.root}
        {...intrinsicAnchorProps}
        rel="noreferrer"
      >
        {icons.left}
        <span>{label}</span>
        {icons.right}
      </a>
    );
  }
);

const Button = {
  Semantic,
  Link,
};

export default Button;

export type {
  Variant,
  Size,
  IconAlignment,
  Icon,
  BaseButtonProps,
  SemanticButtonProps,
  LinkButtonProps,
};
