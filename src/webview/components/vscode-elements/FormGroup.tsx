import React from 'react';

type FormGroupVariant = 'horizontal' | 'vertical' | 'settings-group';

interface FormGroupProps {
  children: React.ReactNode;
  variant?: FormGroupVariant;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  variant = 'horizontal',
  ...props
}) => {
  return (
    <vscode-form-group
      {...props}
      variant={variant}
    >
      {children}
    </vscode-form-group>
  );
};
