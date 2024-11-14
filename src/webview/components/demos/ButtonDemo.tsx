import React from "react";
import { Button } from "../vscode-elements/Button";

export const ButtonDemo: React.FC = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          maxWidth: "300px",
        }}
      >
        <Button id="button-1">Button</Button>
        <Button id="button-2" secondary>
          Secondary button
        </Button>
        <Button id="button-3" disabled>
          Disabled button
        </Button>
        <Button id="button-4" icon="account" iconAfter="chevron-right">
          Icons
        </Button>
      </div>
    </div>
  );
};
