import React from 'react';

interface ICollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  open?: boolean;
}

export const Collapsible: React.FC<ICollapsibleProps> = ({
  children,
  title,
  description,
  open,
  ...props
}) => {
  return (
    <vscode-collapsible
      {...props}
      title={title}
      description={description}
      open={open}
    >
      {children}
    </vscode-collapsible>
  );
};
