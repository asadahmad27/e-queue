import React, { useMemo } from 'react';
import { isNil } from 'remeda';
import { collapse } from '@growthops/ext-ts';
import { Heading } from '../../components';

type Variant = 'search' | 'text-area' | 'field';
type IconAlignment = 'left' | 'right';
type Size = 'small' | 'regular' | 'large';

type Icon = {
  svg: React.ElementType;
  alignment?: IconAlignment;
  className?: string;
  onShow?: () => void;
  clickable?: boolean;
  isHeader?: boolean;
};

type FormFieldInputProps = {
  variant: Variant;
  label: string;
  helpText?: string;
  error?: string;
  className?: string;
  icon?: Icon;
  size?: Size;
  islabel?: boolean;
  isHeader?: boolean;
  action?: JSX.Element;
};

type FormFieldProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  children: (
    baseClasses: string,
    action: JSX.Element | undefined,
    icons: {
      left: JSX.Element | undefined;
      right: JSX.Element | undefined;
    }
  ) => JSX.Element;
} & FormFieldInputProps;

const iconClasses: Record<Size, string> = {
  large: 'w-7',
  regular: 'w-5',
  small: 'w-4',
};

const generateMetaText = (
  text: string | undefined,
  additionalClasses: string
) =>
  !isNil(text) && (
    <div
      className={collapse([
        'flex mt-2 items-center space-x-1',
        additionalClasses,
      ])}
    >
      <span className={`block text-base leading-6`}>{text}</span>
    </div>
  );

const baseClasses = `
	focus:outline-none
	w-full
	rounded-lg
  appearance-none
`;

const getBaseClasses = (variant: Variant, isHeader: boolean) => {
  switch (variant) {
    case 'search':
      return `${baseClasses} border border-primary-black ${
        isHeader
          ? 'py-2 bg-transparent text-white placeholder:text-white'
          : 'py-4 px-5 text-primary-black'
      }`;
    case 'text-area':
      return `${baseClasses} text-primary-black border border-[#E8E8E8] leading-regular placeholder:text-secondary-gray-800  bg-white  p-4 font-normal text-lg `;
    case 'field':
      return `${baseClasses} text-primary-black leading-6 placeholder:text-secondary-gray-800  bg-secondary-gray-100  py-3 px-4 font-normal text-base `;
    default:
      return `${baseClasses} text-primary-black`;
  }
};

const getErrorClasses = (error: string | undefined) =>
  isNil(error) ? 'border-true-gray-300' : 'border-red-300';

const getDisabledClasses = (disabled: boolean | undefined) =>
  disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white';

const generateIcon = (
  icon: Icon | undefined,
  alignment: IconAlignment,
  classes: string,
  alignmentAdjustmentClasses: string
) => {
  if (!isNil(icon) && (icon?.alignment ?? 'left') === alignment) {
    return (
      <icon.svg
        onClick={icon?.clickable ? icon?.onShow : null}
        className={collapse([
          classes,
          alignmentAdjustmentClasses,
          'cursor-pointer',
        ])}
      />
    );
  }
};

const useIcons = (
  icon: Icon | undefined,
  classes: string,
  isHeader: boolean | undefined
) =>
  useMemo(
    () => ({
      left: generateIcon(
        icon,
        'left',
        classes,
        `-ml-2 absolute  ${
          isHeader
            ? 'left-[22px] top-[11px] text-white'
            : 'left-[20px] top-[20px]'
        }`
      ), // !-ml-* here to visually weight the icon appropriately.
      right: generateIcon(
        icon,
        'right',
        classes,
        `!-mr-2 absolute top-4 right-7`
      ), // !-mr-* here to visually weight the icon appropriately.
    }),
    [icon, classes, isHeader]
  );

const FormField = ({
  className,
  label,
  isRequired,
  isDisabled,
  helpText,
  error,
  variant,
  children,
  icon,
  size = 'regular',
  action,
  islabel = false,
  isHeader = false,
}: FormFieldProps) => {
  const useClasses = (icon: Icon | undefined, size: Size) =>
    useMemo(
      () => ({
        icon: collapse([iconClasses[size], icon?.className ?? '']),
      }),
      [size, icon?.className]
    );
  const classes = useClasses(icon, size);
  const icons = useIcons(icon, classes.icon, icon?.isHeader);

  const smartLabel = useMemo(
    () => `${label} ${isRequired ? '*' : ''}`.trim(),
    [label, isRequired]
  );

  const fieldClasses = useMemo(
    () =>
      collapse([
        icon?.alignment === 'left' ? 'pl-[45px]' : '',
        getErrorClasses(error),
        getDisabledClasses(isDisabled),
        getBaseClasses(variant, isHeader),
      ]),
    [error, isDisabled, variant, icon?.alignment, isHeader]
  );

  return (
    <div className={className}>
      {islabel && (
        <Heading
          variant='heading-three'
          element='h3'
          label={smartLabel}
          className='mb-4'
        />
      )}

      {children(fieldClasses, action, icons)}
      {generateMetaText(helpText, 'text-secondary-gray-800')}
      {generateMetaText(error, 'text-red-500')}
    </div>
  );
};

export default FormField;

export type { FormFieldInputProps, FormFieldProps };
