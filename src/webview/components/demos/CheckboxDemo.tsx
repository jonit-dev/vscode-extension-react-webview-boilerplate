import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from '../vscode-elements/Checkbox';

export const CheckboxDemo: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState(true);

  return (
    <div>
      <h2>Basic Examples</h2>
      <Checkbox
        label="Checkbox example"
        value="testvalue1"
        checked
      />

      <Checkbox
        label="Indeterminate example"
        indeterminate
      />

      <Checkbox>
        <b>Hello</b> World!
      </Checkbox>

      <h2>Checkbox Groups</h2>
      <div>
        <h3>Horizontal Group</h3>
        <CheckboxGroup>
          <Checkbox label="Lorem" />
          <Checkbox label="Ipsum" />
          <Checkbox label="Dolor" />
        </CheckboxGroup>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h3>Vertical Group</h3>
        <CheckboxGroup variant="vertical">
          <Checkbox label="Lorem" />
          <Checkbox label="Ipsum" />
          <Checkbox label="Dolor" />
        </CheckboxGroup>
      </div>
    </div>
  );
};
