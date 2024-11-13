import React from 'react';

interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  selectedIndex?: number;
  panel?: boolean;
}

interface TabHeaderProps extends React.HTMLAttributes<HTMLElement> {
  slot?: 'header';
}

interface TabPanelProps extends React.HTMLAttributes<HTMLElement> { }

export const TabHeader: React.FC<TabHeaderProps> = ({
  children,
  ...props
}) => {
  return (
    <vscode-tab-header slot="header" {...props}>
      {children}
    </vscode-tab-header>
  );
};

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  ...props
}) => {
  return (
    <vscode-tab-panel {...props}>
      {children}
    </vscode-tab-panel>
  );
};

export const Tabs: React.FC<TabsProps> = ({
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
