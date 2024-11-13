import React, { useState } from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { MultiSelect, Option } from '../vscode-elements/MultiSelect';

export const MultiSelectDemo: React.FC = () => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>(['blue', 'red']);

  return (
    <div>
      <h2>MultiSelect Examples</h2>

      <FormGroup>
        <MultiSelect
          value={selectedFruits}
          onChange={setSelectedFruits}
          placeholder="Select fruits..."
        >
          <Option value="apple">Apple</Option>
          <Option value="banana">Banana</Option>
          <Option value="orange">Orange</Option>
          <Option value="grape">Grape</Option>
        </MultiSelect>
        <FormHelper>Basic multi-select example</FormHelper>
      </FormGroup>

      <h2>With Default Values</h2>
      <FormGroup>
        <MultiSelect
          value={selectedColors}
          onChange={setSelectedColors}
          placeholder="Select colors..."
        >
          <Option value="red">Red</Option>
          <Option value="blue">Blue</Option>
          <Option value="green">Green</Option>
          <Option value="yellow">Yellow</Option>
        </MultiSelect>
        <FormHelper>Pre-selected values: blue, red</FormHelper>
      </FormGroup>

      <h2>Disabled State</h2>
      <FormGroup>
        <MultiSelect
          disabled
          value={[]}
          onChange={() => { }}
          placeholder="Disabled multi-select..."
        >
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </MultiSelect>
        <FormHelper>Disabled multi-select example</FormHelper>
      </FormGroup>

      <h2>With Disabled Options</h2>
      <FormGroup>
        <MultiSelect
          value={[]}
          onChange={() => { }}
          placeholder="Select options..."
        >
          <Option value="1">Option 1</Option>
          <Option value="2" disabled>Option 2 (Disabled)</Option>
          <Option value="3">Option 3</Option>
          <Option value="4" disabled>Option 4 (Disabled)</Option>
        </MultiSelect>
        <FormHelper>Some options are disabled</FormHelper>
      </FormGroup>
    </div>
  );
};
