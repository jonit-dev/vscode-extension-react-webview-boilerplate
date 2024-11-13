import React from 'react';

interface CollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  open?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
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
