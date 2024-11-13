import React from 'react';

interface MultiSelectProps {
  children: React.ReactNode;
  value?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  children,
  value = [],
  disabled,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <vscode-multi-select
      {...props}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(event: CustomEvent) => {
        const selectedValues = event.detail.value.split(',').filter(Boolean);
        onChange?.(selectedValues);
      }}
    >
      {children}
    </vscode-multi-select>
  );
};

interface OptionProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export const MultiSelectOption: React.FC<OptionProps> = ({
  children,
  value,
  disabled,
  ...props
}) => {
  return (
    <vscode-option
      {...props}
      value={value}
      disabled={disabled}
    >
      {children}
    </vscode-option>
  );
};
