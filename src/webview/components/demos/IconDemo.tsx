import React from "react";
import { Icon } from "../vscode-elements/Icon";

export const IconDemo: React.FC = () => {
  return (
    <div className="demo-container">
      <h2>Icons</h2>
      <div className="demo-grid" style={{ gap: "20px" }}>
        <div>
          <h3>Default Size</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Icon name="account" />
            <Icon name="add" />
            <Icon name="archive" />
            <Icon name="bell" />
            <Icon name="check" />
          </div>
        </div>
        <div>
          <h3>Size 32px</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Icon name="account" size={32} />
            <Icon name="add" size={32} />
            <Icon name="archive" size={32} />
            <Icon name="bell" size={32} />
            <Icon name="check" size={32} />
          </div>
        </div>
        <div>
          <h3>Size 48px</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Icon name="account" size={48} />
            <Icon name="add" size={48} />
            <Icon name="archive" size={48} />
            <Icon name="bell" size={48} />
            <Icon name="check" size={48} />
          </div>
        </div>
        <div>
          <h3>Common VSCode Icons</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Icon name="folder" />
            <Icon name="file" />
            <Icon name="search" />
            <Icon name="settings" />
            <Icon name="extensions" />
            <Icon name="debug" />
            <Icon name="source-control" />
            <Icon name="terminal" />
          </div>
        </div>
      </div>
    </div>
  );
};
