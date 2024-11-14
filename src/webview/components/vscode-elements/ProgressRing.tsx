import React from 'react';

interface IProgressRingProps {
  size?: number;
  indeterminate?: boolean;
}

export const ProgressRing: React.FC<IProgressRingProps> = ({
  size = 16,
  indeterminate = true,
  ...props
}) => {
  return (
    <vscode-progress-ring
      {...props}
      size={size}
      indeterminate={indeterminate}
    />
  );
};
