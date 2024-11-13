import React from 'react';
import { BadgeDemo } from './components/demos/BadgeDemo';
import { ButtonDemo } from './components/demos/ButtonDemo';
import { CheckboxDemo } from './components/demos/CheckboxDemo';
import { CollapsibleDemo } from './components/demos/CollapsibleDemo';
import { DividerDemo } from './components/demos/DividerDemo';
import { FormDemo } from './components/demos/FormDemo';
import { IconDemo } from './components/demos/IconDemo';
import { LabelDemo } from './components/demos/LabelDemo';
import { MultiSelectDemo } from './components/demos/MultiSelectDemo';
import { ProgressRingDemo } from './components/demos/ProgressRingDemo';
import { RadioDemo } from './components/demos/RadioDemo';
import { ScrollableDemo } from './components/demos/ScrollableDemo';
import { SelectDemo } from './components/demos/SelectDemo';
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

        <TabHeader>Dividers</TabHeader>
        <TabPanel>
          <DividerDemo />
        </TabPanel>

        <TabHeader>Forms</TabHeader>
        <TabPanel>
          <FormDemo />
        </TabPanel>

        <TabHeader>Icons</TabHeader>
        <TabPanel>
          <IconDemo />
        </TabPanel>

        <TabHeader>Labels</TabHeader>
        <TabPanel>
          <LabelDemo />
        </TabPanel>

        <TabHeader>MultiSelect</TabHeader>
        <TabPanel>
          <MultiSelectDemo />
        </TabPanel>

        <TabHeader>Progress Ring</TabHeader>
        <TabPanel>
          <ProgressRingDemo />
        </TabPanel>

        <TabHeader>Radio</TabHeader>
        <TabPanel>
          <RadioDemo />
        </TabPanel>

        <TabHeader>Scrollable</TabHeader>
        <TabPanel>
          <ScrollableDemo />
        </TabPanel>

        <TabHeader>SingleSelect</TabHeader>
        <TabPanel>
          <SelectDemo />
        </TabPanel>

        <TabHeader>Tabs</TabHeader>
        <TabPanel>
          <TabsDemo />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default App;
