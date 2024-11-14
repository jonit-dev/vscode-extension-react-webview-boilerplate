import React from "react";
import { Badge } from "../vscode-elements/Badge";
import { TabHeader, TabPanel, Tabs } from "../vscode-elements/Tabs";

export const TabsDemo: React.FC = () => {
  return (
    <div>
      <h2>Basic Tabs</h2>
      <Tabs selectedIndex={1}>
        <TabHeader>Lorem</TabHeader>
        <TabPanel>
          <p>Lorem ipsum dolor...</p>
        </TabPanel>

        <TabHeader>
          Ipsum
          <Badge variant="counter" slot="content-after">
            2
          </Badge>
        </TabHeader>
        <TabPanel>
          <p>Aliquam malesuada rhoncus nulla...</p>
        </TabPanel>

        <TabHeader>Dolor</TabHeader>
        <TabPanel>
          <p>Nulla facilisi. Vivamus...</p>
        </TabPanel>
      </Tabs>

      <h2>Panel Mode</h2>
      <Tabs selectedIndex={1} panel className="panel-example">
        <vscode-icon
          label="Maximize Panel Size"
          title="Maximize Panel Size"
          name="chevron-up"
          slot="addons"
          action-icon
        />
        <vscode-icon
          label="Close Panel"
          title="Close Panel"
          name="close"
          slot="addons"
          action-icon
        />

        <TabHeader>
          Output
          <Badge variant="counter" slot="content-after">
            2
          </Badge>
        </TabHeader>
        <TabPanel>
          <vscode-scrollable>
            <pre>
              2022-11-06 11:17:37.568 [info] Validating found git in: C:\Program
              Files\Git\cmd\git.exe ...
            </pre>
          </vscode-scrollable>
        </TabPanel>

        <TabHeader>Terminal</TabHeader>
        <TabPanel>
          <pre>Web Dev Server started...</pre>
        </TabPanel>
      </Tabs>
    </div>
  );
};
