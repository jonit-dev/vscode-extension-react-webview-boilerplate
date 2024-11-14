import React from "react";
import { Divider } from "../vscode-elements/Divider";

export const DividerDemo: React.FC = () => {
  return (
    <div>
      <h2>Basic Examples</h2>

      <div>
        <p>Content above horizontal divider</p>
        <Divider />
        <p>Content below horizontal divider</p>
      </div>

      <h2>Vertical Divider</h2>
      <div style={{ display: "flex", height: "50px", alignItems: "center" }}>
        <span>Left content</span>
        <Divider orientation="vertical" />
        <span>Right content</span>
      </div>
    </div>
  );
};
