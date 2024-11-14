import React from 'react';

interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
  secondary?: boolean;
  disabled?: boolean;
  icon?: string;
  iconAfter?: string;
}

export const Button: React.FC<IButtonProps> = ({
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
