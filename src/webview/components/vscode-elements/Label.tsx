import React from "react";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
}

export const Label: React.FC<ILabelProps> = ({
  children,
  required,
  disabled,
  ...props
}) => {
  return (
    <vscode-label {...props} required={required} disabled={disabled}>
      {children}
      {required && <span className="required-indicator">*</span>}
    </vscode-label>
  );
};
