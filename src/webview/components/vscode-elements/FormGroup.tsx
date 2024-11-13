import React from 'react';

interface FormGroupProps {
  children: React.ReactNode;
  horizontal?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  horizontal,
  ...props
}) => {
  return (
    <vscode-form-group
      {...props}
      horizontal={horizontal}
    >
      {children}
    </vscode-form-group>
  );
};
