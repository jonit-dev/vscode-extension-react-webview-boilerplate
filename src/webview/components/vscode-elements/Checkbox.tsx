import React, { useEffect, useRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  value?: string;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled,
  indeterminate,
  value,
  onChange,
  children,
  ...props
}) => {
  const checkboxRef = useRef<any>(null);

  useEffect(() => {
    if (checkboxRef.current && indeterminate !== undefined) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (event: CustomEvent) => {
    onChange?.(event.detail.checked);
  };

  return (
    <vscode-checkbox
      ref={checkboxRef}
      {...props}
      checked={checked}
      disabled={disabled}
      value={value}
      label={label}
      onChange={handleChange as any}
    >
      {children}
    </vscode-checkbox>
  );
};

interface CheckboxGroupProps {
  children: React.ReactNode;
  disabled?: boolean;
  vertical?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  disabled,
  vertical,
  ...props
}) => {
  return (
    <vscode-checkbox-group
      {...props}
      disabled={disabled}
      vertical={vertical}
    >
      {children}
    </vscode-checkbox-group>
  );
};
