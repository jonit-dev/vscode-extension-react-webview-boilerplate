import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  className,
  style,
  ...props
}) => {
  return (
    <span
      {...props}
      className={`codicon codicon-${name} ${className || ''}`}
      style={{
        fontSize: size ? `${size}px` : undefined,
        ...style
      }}
    />
  );
};
