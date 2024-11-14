import React, { useEffect, useRef } from "react";

interface IVSCodeCheckboxElement extends HTMLElement {
  indeterminate: boolean;
  checked: boolean;
  disabled: boolean;
  value: string;
  label: string;
}

interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLElement>, "onChange"> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  value?: string;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  label,
  checked,
  disabled,
  indeterminate,
  value,
  onChange,
  children,
  ...props
}) => {
  const checkboxRef = useRef<IVSCodeCheckboxElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate ?? false;
    }
  }, [indeterminate]);

  return (
    <vscode-checkbox
      ref={checkboxRef}
      {...props}
      checked={checked}
      disabled={disabled}
      value={value}
      label={label}
      onChange={(event: CustomEvent) => onChange?.(event.detail.checked)}
    >
      {children}
    </vscode-checkbox>
  );
};

interface ICheckboxGroupProps {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "vertical" | "horizontal";
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  children,
  disabled,
  variant = "horizontal",
  ...props
}) => {
  return (
    <vscode-checkbox-group {...props} disabled={disabled} variant={variant}>
      {children}
    </vscode-checkbox-group>
  );
};
