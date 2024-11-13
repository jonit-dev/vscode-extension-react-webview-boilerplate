import React from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { Label } from '../vscode-elements/Label';

export const LabelDemo: React.FC = () => {
  return (
    <div>
      <h2>Label Examples</h2>

      <FormGroup>
        <Label>Basic Label</Label>
        <div>Content for basic label</div>
      </FormGroup>

      <FormGroup>
        <Label required>Required Label</Label>
        <div>Content for required label</div>
      </FormGroup>

      <FormGroup>
        <Label disabled>Disabled Label</Label>
        <div>Content for disabled label</div>
      </FormGroup>

      <h2>Labels with Different Elements</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Label>
          <span style={{ color: 'var(--vscode-textLink-foreground)' }}>
            Styled Label
          </span>
        </Label>

        <Label>
          Label with <b>bold</b> text
        </Label>

        <Label required>
          Complex Label with <i>italic</i> and <b>bold</b> text
        </Label>
      </div>
    </div>
  );
};
