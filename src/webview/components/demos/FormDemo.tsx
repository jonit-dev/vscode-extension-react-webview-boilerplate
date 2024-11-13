import React, { useState } from 'react';
import { FormContainer } from '../vscode-elements/FormContainer';
import { FormGroup } from '../vscode-elements/FormGroup';
import { FormHelper } from '../vscode-elements/FormHelper';
import { Label } from '../vscode-elements/Label';
import { MultiSelect, Option } from '../vscode-elements/MultiSelect';
import { Radio, RadioGroup } from '../vscode-elements/Radio';

export const FormDemo: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  return (
    <div>
      <h2>Form Examples</h2>

      <FormContainer
        title="Settings"
        description="Customize your editor preferences"
      >
        <FormGroup>
          <Label required>Theme</Label>
          <RadioGroup
            value={selectedTheme}
            onChange={value => setSelectedTheme(value)}
          >
            <Radio value="light" label="Light" />
            <Radio value="dark" label="Dark" />
            <Radio value="high-contrast" label="High Contrast" />
          </RadioGroup>
          <FormHelper>Select your preferred theme</FormHelper>
        </FormGroup>

        <FormGroup>
          <Label>Programming Languages</Label>
          <MultiSelect
            value={selectedLanguages}
            onChange={values => setSelectedLanguages(values)}
            placeholder="Select languages..."
          >
            <Option value="typescript">TypeScript</Option>
            <Option value="javascript">JavaScript</Option>
            <Option value="python">Python</Option>
            <Option value="java">Java</Option>
          </MultiSelect>
          <FormHelper severity="info">
            Choose the languages you want to work with
          </FormHelper>
        </FormGroup>
      </FormContainer>

      <h2>Form Helpers</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <FormHelper>Default helper text</FormHelper>
        <FormHelper severity="info">Info message</FormHelper>
        <FormHelper severity="warning">Warning message</FormHelper>
        <FormHelper severity="error">Error message</FormHelper>
      </div>

      <h2>Form Groups</h2>
      <FormContainer>
        <FormGroup horizontal>
          <Label>Horizontal Group</Label>
          <Radio label="Option 1" value="1" />
          <Radio label="Option 2" value="2" />
        </FormGroup>

        <FormGroup>
          <Label>Vertical Group</Label>
          <Radio label="Option 1" value="1" />
          <Radio label="Option 2" value="2" />
        </FormGroup>
      </FormContainer>
    </div>
  );
};
