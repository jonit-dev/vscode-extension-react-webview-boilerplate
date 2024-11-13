import React, { useState } from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Label } from '../vscode-elements/Label';
import { Radio, RadioGroup } from '../vscode-elements/Radio';

export const RadioDemo: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedOption, setSelectedOption] = useState('1');

  return (
    <div>
      <h2>Radio Examples</h2>

      <FormGroup>
        <Label>Basic Radio</Label>
        <Radio
          label="Single radio button"
          value="single"
          checked
        />
        <FormHelper>Basic radio button example</FormHelper>
      </FormGroup>

      <h2>Radio Groups</h2>

      <FormGroup>
        <Label>Theme Selection</Label>
        <RadioGroup
          value={selectedTheme}
          onChange={value => setSelectedTheme(value)}
        >
          <Radio value="light" label="Light Theme" />
          <Radio value="dark" label="Dark Theme" />
          <Radio value="high-contrast" label="High Contrast Theme" />
        </RadioGroup>
        <FormHelper>Vertical radio group (default)</FormHelper>
      </FormGroup>

      <FormGroup>
        <Label>Size Selection</Label>
        <RadioGroup
          value={selectedSize}
          onChange={value => setSelectedSize(value)}
          variant="horizontal"
        >
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
        <FormHelper>Horizontal radio group</FormHelper>
      </FormGroup>

      <h2>Disabled States</h2>

      <FormGroup>
        <Label>Disabled Group</Label>
        <RadioGroup
          value={selectedOption}
          onChange={value => setSelectedOption(value)}
          disabled
        >
          <Radio value="1" label="Option 1" />
          <Radio value="2" label="Option 2" />
          <Radio value="3" label="Option 3" />
        </RadioGroup>
        <FormHelper>All radio buttons are disabled</FormHelper>
      </FormGroup>

      <FormGroup>
        <Label>Partially Disabled</Label>
        <RadioGroup
          value={selectedOption}
          onChange={value => setSelectedOption(value)}
        >
          <Radio value="1" label="Option 1" />
          <Radio value="2" label="Option 2" disabled />
          <Radio value="3" label="Option 3" />
        </RadioGroup>
        <FormHelper>Some radio buttons are disabled</FormHelper>
      </FormGroup>
    </div>
  );
};
