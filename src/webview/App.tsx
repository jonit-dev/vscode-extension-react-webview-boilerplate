import React from 'react';
import { BadgeDemo } from './components/demos/BadgeDemo';
import { ButtonDemo } from './components/demos/ButtonDemo';
import { CheckboxDemo } from './components/demos/CheckboxDemo';
import { CollapsibleDemo } from './components/demos/CollapsibleDemo';
import { IconDemo } from './components/demos/IconDemo';
import { TabsDemo } from './components/demos/TabsDemo';
import { TabHeader, TabPanel, Tabs } from './components/vscode-elements/Tabs';
import { useVSCodeElements } from './hooks/useVSCodeElements';

const App: React.FC = () => {
  useVSCodeElements();

  return (
    <div className='app-container' style={{ padding: '20px' }}>
      <h1>VSCode Webview React Components</h1>

      <Tabs>
        <TabHeader>Buttons</TabHeader>
        <TabPanel>
          <ButtonDemo />
        </TabPanel>

        <TabHeader>Badges</TabHeader>
        <TabPanel>
          <BadgeDemo />
        </TabPanel>

        <TabHeader>Checkboxes</TabHeader>
        <TabPanel>
          <CheckboxDemo />
        </TabPanel>

        <TabHeader>Collapsibles</TabHeader>
        <TabPanel>
          <CollapsibleDemo />
        </TabPanel>

        <TabHeader>Tabs</TabHeader>
        <TabPanel>
          <TabsDemo />
        </TabPanel>

        <TabHeader>Icons</TabHeader>
        <TabPanel>
          <IconDemo />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
