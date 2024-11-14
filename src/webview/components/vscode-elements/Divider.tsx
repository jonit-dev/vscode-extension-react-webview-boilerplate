import React from 'react';

interface IDividerProps {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<IDividerProps> = ({
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
