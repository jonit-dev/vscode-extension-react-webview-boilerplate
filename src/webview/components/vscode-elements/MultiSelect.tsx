import React from "react";

interface IMultiSelectProps {
  children: React.ReactNode;
  value?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string[]) => void;
}

export const MultiSelect: React.FC<IMultiSelectProps> = ({
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
        const selectedValues = event.detail.value.split(",").filter(Boolean);
        onChange?.(selectedValues);
      }}
    >
      {children}
    </vscode-multi-select>
  );
};

interface IOptionProps {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export const MultiSelectOption: React.FC<IOptionProps> = ({
  children,
  value,
  disabled,
  ...props
}) => {
  return (
    <vscode-option {...props} value={value} disabled={disabled}>
      {children}
    </vscode-option>
  );
};
