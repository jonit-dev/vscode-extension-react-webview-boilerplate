import React, { useState } from 'react';
import { FormContainer } from '../vscode-elements/FormContainer';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Label } from '../vscode-elements/Label';

export const FormDemo: React.FC = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <div>
      <h2>Form Group Examples</h2>

      <h3>Basic Form Group (Horizontal)</h3>
      <FormGroup>
        <Label>Basic Input</Label>
        <vscode-textfield
          value={textValue}
          onInput={(e: any) => setTextValue(e.target.value)}
          placeholder="Enter text..."
        />
        <FormHelper>This is a basic form group with horizontal layout</FormHelper>
      </FormGroup>

      <h3>Vertical Layout</h3>
      <FormGroup variant="vertical">
        <Label>Stacked Input</Label>
        <vscode-textfield placeholder="Vertical layout example" />
        <FormHelper>Elements are stacked vertically in this layout</FormHelper>
      </FormGroup>

      <h3>Settings Group Layout</h3>
      <FormContainer>
        <FormGroup variant="settings-group">
          <Label>Settings Example</Label>
          <FormHelper>
            <p>
              Example code: <code>const value = "example";</code>
              <br />
              With <span className="error">error</span> and <a href="#">link</a> styling
            </p>
          </FormHelper>
          <vscode-textfield placeholder="Settings group example" />
        </FormGroup>
      </FormContainer>

      <h2>Form Helpers</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <FormHelper>Default helper text</FormHelper>
        <FormHelper severity="info">Info message</FormHelper>
        <FormHelper severity="warning">Warning message</FormHelper>
        <FormHelper severity="error">Error message</FormHelper>
      </div>
    </div>
  );
};
