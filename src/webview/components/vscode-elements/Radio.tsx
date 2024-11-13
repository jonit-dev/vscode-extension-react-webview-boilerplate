import React from 'react';

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  onChange?: (checked: boolean) => void;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  disabled,
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <vscode-radio
      {...props}
      checked={checked}
      disabled={disabled}
      value={value}
      label={label}
      onChange={(event: CustomEvent) => onChange?.(event.detail.checked)}
    >
      {children}
    </vscode-radio>
  );
};

interface RadioGroupProps {
  children: React.ReactNode;
  value?: string;
  disabled?: boolean;
  variant?: 'vertical' | 'horizontal';
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  disabled,
  variant = 'vertical',
  onChange,
  ...props
}) => {
  return (
    <vscode-radio-group
      {...props}
      value={value}
      disabled={disabled}
      variant={variant}
      onChange={(event: CustomEvent) => onChange?.(event.detail.value)}
    >
      {children}
    </vscode-radio-group>
  );
};
