import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface ILinkWrapperProps {
  to: string;
  children: React.ReactNode;
}

export const LinkWrapper: React.FC<ILinkWrapperProps> = ({ to, children }) => {
  return (
    <RouterLink to={to} className="link">
      {children}
    </RouterLink>
  );
};
