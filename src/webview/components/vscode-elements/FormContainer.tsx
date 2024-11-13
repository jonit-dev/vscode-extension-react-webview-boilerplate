import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  title,
  description,
  ...props
}) => {
  return (
    <vscode-form-container
      {...props}
      title={title}
      description={description}
    >
      {children}
    </vscode-form-container>
  );
};
