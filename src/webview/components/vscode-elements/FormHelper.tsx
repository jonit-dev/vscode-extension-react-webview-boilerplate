import React from 'react';

type Severity = 'error' | 'warning' | 'info';

interface IFormHelperProps {
  children: React.ReactNode;
  severity?: Severity;
}

export const FormHelper: React.FC<IFormHelperProps> = ({
  children,
  severity,
  ...props
}) => {
  return (
    <vscode-form-helper
      {...props}
      severity={severity}
    >
      {children}
    </vscode-form-helper>
  );
};
