import React, { useState } from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Label } from '../vscode-elements/Label';
import { MultiSelect, MultiSelectOption } from '../vscode-elements/MultiSelect';
import { Option, SingleSelect } from '../vscode-elements/SingleSelect';

export const SelectsDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState('ipsum');
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>(['blue', 'red']);

  return (
    <div>
      <h2>Single Select Examples</h2>

      <FormGroup>
        <Label>Basic Example</Label>
        <SingleSelect
          id="select-example"
          value={basicValue}
          onChange={value => setBasicValue(value)}
        >
          <Option
            value="lorem"
            description="Consectetur adipiscing elit"
          >
            Lorem
          </Option>
          <Option
            value="ipsum"
            description="Donec elit odio"
          >
            Ipsum
          </Option>
          <Option
            value="dolor"
            description="Aliquam ac vulputate eros"
          >
            Dolor
          </Option>
        </SingleSelect>
        <FormHelper>Basic single select with descriptions</FormHelper>
      </FormGroup>

      <FormGroup>
        <Label>Disabled Single Select</Label>
        <SingleSelect disabled value="ipsum">
          <Option
            value="lorem"
            description="Consectetur adipiscing elit"
          >
            Lorem
          </Option>
          <Option
            value="ipsum"
            description="Donec elit odio"
          >
            Ipsum
          </Option>
          <Option
            value="dolor"
            description="Aliquam ac vulputate eros"
          >
            Dolor
          </Option>
        </SingleSelect>
        <FormHelper>Disabled single select example</FormHelper>
      </FormGroup>

      <h2>MultiSelect Examples</h2>

      <FormGroup>
        <Label>Basic MultiSelect</Label>
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

      <FormGroup>
        <Label>With Default Values</Label>
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

      <FormGroup>
        <Label>Disabled MultiSelect</Label>
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

      <FormGroup>
        <Label>With Disabled Options</Label>
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
