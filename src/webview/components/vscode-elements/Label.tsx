import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  disabled?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  disabled,
  ...props
}) => {
  return (
    <vscode-label
      {...props}
      required={required}
      disabled={disabled}
    >
      {children}
      {required && <span className="required-indicator">*</span>}
    </vscode-label>
  );
};
