import React from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Scrollable } from '../vscode-elements/Scrollable';

export const ScrollableDemo: React.FC = () => {
  const longText = Array(20).fill(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ).join(' ');

  const boxes = Array(20).fill(0).map((_, i) => (
    <div
      key={i}
      style={{
        minWidth: '150px',
        height: '100px',
        background: 'var(--vscode-button-background)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--vscode-button-foreground)',
        margin: '8px',
      }}
    >
      Box {i + 1}
    </div>
  ));

  return (
    <div>
      <h2>Scrollable Examples</h2>

      <FormGroup>
        <h3>Vertical Scroll</h3>
        <Scrollable height={200}>
          <div style={{ padding: '16px' }}>
            {longText}
          </div>
        </Scrollable>
        <FormHelper>Fixed height with vertical scrolling</FormHelper>
      </FormGroup>

      <FormGroup>
        <h3>Horizontal Scroll</h3>
        <Scrollable orientation="horizontal" height={120}>
          <div style={{ display: 'flex', padding: '8px' }}>
            {boxes}
          </div>
        </Scrollable>
        <FormHelper>Horizontal scrolling with fixed height</FormHelper>
      </FormGroup>

      <FormGroup>
        <h3>Both Directions</h3>
        <Scrollable orientation="both" height={300}>
          <div style={{ width: '200%', padding: '16px' }}>
            {longText}
            <div style={{ display: 'flex', marginTop: '16px' }}>
              {boxes}
            </div>
            {longText}
          </div>
        </Scrollable>
        <FormHelper>Scrolling in both directions</FormHelper>
      </FormGroup>

      <FormGroup>
        <h3>Max Height</h3>
        <Scrollable maxHeight={150}>
          <div style={{ padding: '16px' }}>
            Short content that doesn't need scrolling
          </div>
        </Scrollable>
        <FormHelper>Uses maxHeight instead of fixed height</FormHelper>
      </FormGroup>
    </div>
  );
};
