import React from 'react';

interface ProgressRingProps {
  size?: number;
  indeterminate?: boolean;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
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
