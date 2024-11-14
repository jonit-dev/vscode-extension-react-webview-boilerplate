import React from "react";

interface IBadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "counter" | "activity-bar-counter";
}

export const Badge: React.FC<IBadgeProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <vscode-badge {...props} variant={variant}>
      {children}
    </vscode-badge>
  );
};
