import React, { useState } from 'react';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Label } from '../vscode-elements/Label';
import { Option, SingleSelect } from '../vscode-elements/SingleSelect';

export const SelectDemo: React.FC = () => {
  const [basicValue, setBasicValue] = useState('ipsum');
  const [filter, setFilter] = useState<'contains' | 'fuzzy' | 'startsWith' | 'startsWithPerTerm'>('contains');
  const [countryValue, setCountryValue] = useState('');

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
    'Brazil', 'Canada', 'China', 'Denmark', 'Egypt',
    'France', 'Germany', 'India', 'Italy', 'Japan'
  ];

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



      <h2>Disabled State</h2>

      <FormGroup>
        <Label>Disabled Select</Label>
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
    </div>
  );
};
