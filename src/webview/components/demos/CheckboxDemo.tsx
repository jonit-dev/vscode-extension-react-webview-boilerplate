import React, { useState } from 'react';
import { Checkbox } from '../vscode-elements/Checkbox';

export const CheckboxDemo: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div>
      <h2>Checkboxes</h2>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <Checkbox
          label="Checkbox example"
          value="testvalue1"
          checked={isChecked1}
          onChange={setIsChecked1}
        />
        <Checkbox
          label="Indeterminate example"
          indeterminate
          checked={isChecked2}
          onChange={setIsChecked2}
        />
        <Checkbox>
          <b>Hello</b> World!
        </Checkbox>
        <Checkbox disabled label="Disabled checkbox" />
      </div>
    </div>
  );
};
