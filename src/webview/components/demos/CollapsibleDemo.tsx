import React from 'react';
import { Collapsible } from '../vscode-elements/Collapsible';

export const CollapsibleDemo: React.FC = () => {
  return (
    <div>
      <h2>Collapsibles</h2>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <Collapsible title="Basic example" open>
          <p>Open by default</p>
        </Collapsible>

        <Collapsible title="With actions" open>
          <vscode-icon
            name="file-add"
            action-icon
            aria-role="button"
            title="New File"
            slot="actions"
          />
          <vscode-icon
            name="refresh"
            action-icon
            aria-role="button"
            title="Refresh"
            slot="actions"
          />
          <p>Example with action icons</p>
        </Collapsible>

        <Collapsible title="With decorations">
          <vscode-badge variant="counter" slot="decorations">99</vscode-badge>
          <p>Example with badge decoration</p>
        </Collapsible>
      </div>
    </div>
  );
};
