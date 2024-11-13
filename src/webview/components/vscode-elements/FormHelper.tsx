import React from 'react';

type Severity = 'error' | 'warning' | 'info';

interface FormHelperProps {
  children: React.ReactNode;
  severity?: Severity;
}

export const FormHelper: React.FC<FormHelperProps> = ({
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
