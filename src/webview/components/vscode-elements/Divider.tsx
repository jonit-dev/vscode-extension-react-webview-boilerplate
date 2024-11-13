import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <vscode-divider
      {...props}
      orientation={orientation}
    />
  );
};
