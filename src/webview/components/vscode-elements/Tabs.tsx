import React from 'react';
import '../../types/vscode-elements.d.ts';

interface ITabsProps extends React.HTMLAttributes<HTMLElement> {
  selectedIndex?: number;
  panel?: boolean;
}

interface ITabHeaderProps extends React.HTMLAttributes<HTMLElement> {
  slot?: 'header';
}

interface ITabPanelProps extends React.HTMLAttributes<HTMLElement> { }

export const TabHeader: React.FC<ITabHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <vscode-tab-header slot="header" {...props}>
      {children}
    </vscode-tab-header>
  );
};

export const TabPanel: React.FC<ITabPanelProps> = ({
  children,
  ...props
}) => {
  return (
    <vscode-tab-panel {...props}>
      {children}
    </vscode-tab-panel>
  );
};

export const Tabs: React.FC<ITabsProps> = ({
  children,
  selectedIndex = 0,
  panel,
  ...props
}) => {
  const handleTabSelect = (event: CustomEvent) => {
    // Forward the vsc-tabs-select event
    const customEvent = new CustomEvent('vsc-tabs-select', {
      detail: event.detail,
      bubbles: true,
      composed: true
    });
    event.target?.dispatchEvent(customEvent);
  };

  return (
    <vscode-tabs
      {...props}
      selected-index={selectedIndex}
      panel={panel}
      onVscTabsSelect={handleTabSelect}
    >
      {children}
    </vscode-tabs>
  );
};
