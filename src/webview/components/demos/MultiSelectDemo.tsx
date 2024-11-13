import React, { useState } from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { MultiSelect, MultiSelectOption } from '../vscode-elements/MultiSelect';

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
          <MultiSelectOption value="apple">Apple</MultiSelectOption>
          <MultiSelectOption value="banana">Banana</MultiSelectOption>
          <MultiSelectOption value="orange">Orange</MultiSelectOption>
          <MultiSelectOption value="grape">Grape</MultiSelectOption>
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
          <MultiSelectOption value="red">Red</MultiSelectOption>
          <MultiSelectOption value="blue">Blue</MultiSelectOption>
          <MultiSelectOption value="green">Green</MultiSelectOption>
          <MultiSelectOption value="yellow">Yellow</MultiSelectOption>
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
          <MultiSelectOption value="1">Option 1</MultiSelectOption>
          <MultiSelectOption value="2">Option 2</MultiSelectOption>
          <MultiSelectOption value="3">Option 3</MultiSelectOption>
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
          <MultiSelectOption value="1">Option 1</MultiSelectOption>
          <MultiSelectOption value="2" disabled>Option 2 (Disabled)</MultiSelectOption>
          <MultiSelectOption value="3">Option 3</MultiSelectOption>
          <MultiSelectOption value="4" disabled>Option 4 (Disabled)</MultiSelectOption>
        </MultiSelect>
        <FormHelper>Some options are disabled</FormHelper>
      </FormGroup>
    </div>
  );
};
