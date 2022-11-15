import React, { forwardRef } from 'react';
import { collapse } from '@growthops/ext-ts';
import { FormField } from './utility';
import type { FormFieldInputProps } from './utility/form-field';

type InputProps = FormFieldInputProps & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helpText,
      variant,
      icon,
      action,
      islabel,
      isHeader,
      ...intrinsicInputProps
    }: InputProps,
    ref
  ) => (
    <FormField
      {...{
        className,
        label,
        helpText,
        error,
        variant,
        icon,
        action,
        islabel,
        isHeader,
      }}
      isRequired={intrinsicInputProps.required}
      isDisabled={intrinsicInputProps.disabled}
    >
      {(baseClasses, action, icons) => (
        <div className='relative overflow-hidden'>
          {icons?.left}

          <input
            ref={ref}
            className={collapse(baseClasses)}
            {...intrinsicInputProps}
          />
          {icons?.right}
          {action}
        </div>
      )}
    </FormField>
  )
);

export default Input;

export type { InputProps };
