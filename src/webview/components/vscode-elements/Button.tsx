import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  secondary?: boolean;
  disabled?: boolean;
  icon?: string;
  iconAfter?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  secondary,
  disabled,
  icon,
  iconAfter,
  ...props
}) => {
  return (
    <vscode-button
      {...props}
      secondary={secondary}
      disabled={disabled}
      icon={icon}
      icon-after={iconAfter}
    >
      {children}
    </vscode-button>
  );
};
