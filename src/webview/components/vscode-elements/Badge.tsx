import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'counter' | 'status';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <vscode-badge
      {...props}
      variant={variant}
    >
      {children}
    </vscode-badge>
  );
};
