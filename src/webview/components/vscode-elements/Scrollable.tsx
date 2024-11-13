import React from 'react';

interface ScrollableProps {
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal' | 'both';
  height?: string | number;
  maxHeight?: string | number;
}

export const Scrollable: React.FC<ScrollableProps> = ({
  children,
  orientation = 'vertical',
  height,
  maxHeight,
  ...props
}) => {
  const style = {
    height: typeof height === 'number' ? `${height}px` : height,
    maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
  };

  return (
    <vscode-scrollable
      {...props}
      orientation={orientation}
      style={style}
    >
      {children}
    </vscode-scrollable>
  );
};
