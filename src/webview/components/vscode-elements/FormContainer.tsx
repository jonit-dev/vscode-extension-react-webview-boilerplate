import React from 'react';

interface IFormContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const FormContainer: React.FC<IFormContainerProps> = ({
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
