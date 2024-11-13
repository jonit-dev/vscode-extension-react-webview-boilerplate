import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  disabled,
  onChange,
  children,
  ...props
}) => {
  const handleChange = (event: CustomEvent) => {
    onChange?.(event.detail.checked);
  };

  return (
    <vscode-checkbox
      {...props}
      checked={checked}
      disabled={disabled}
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
