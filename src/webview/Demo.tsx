import { BadgeDemo } from "@components/demos/BadgeDemo";
import { ButtonDemo } from "@components/demos/ButtonDemo";
import { CheckboxDemo } from "@components/demos/CheckboxDemo";
import { CollapsibleDemo } from "@components/demos/CollapsibleDemo";
import { DividerDemo } from "@components/demos/DividerDemo";
import { FormDemo } from "@components/demos/FormDemo";
import { IconDemo } from "@components/demos/IconDemo";
import { LabelDemo } from "@components/demos/LabelDemo";
import { ProgressRingDemo } from "@components/demos/ProgressRingDemo";
import { RadioDemo } from "@components/demos/RadioDemo";
import { ScrollableDemo } from "@components/demos/ScrollableDemo";
import { SelectsDemo } from "@components/demos/SelectsDemo";
import { TableDemo } from "@components/demos/TableDemo";
import { TabsDemo } from "@components/demos/TabsDemo";
import { TextareaDemo } from "@components/demos/TextareaDemo";
import { LinkWrapper } from "@components/LinkWrapper";
import { TabHeader, TabPanel, Tabs } from "@components/vscode-elements/Tabs";
import React from "react";

export const Demo: React.FC = () => {
  return (
    <div className="app-container" style={{ padding: "20px" }}>
      <h1>VSCode Webview React Components</h1>
      <LinkWrapper to="/example-route">
        Go to Example Route
      </LinkWrapper>

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

        <TabHeader>Selects</TabHeader>
        <TabPanel>
          <SelectsDemo />
        </TabPanel>

        <TabHeader>Tabs</TabHeader>
        <TabPanel>
          <TabsDemo />
        </TabPanel>

        <TabHeader>Table</TabHeader>
        <TabPanel>
          <TableDemo />
        </TabPanel>

        <TabHeader>Textarea</TabHeader>
        <TabPanel>
          <TextareaDemo />
        </TabPanel>
      </Tabs>
    </div>
  );
};
