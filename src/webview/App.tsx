import React, { useState } from 'react';
import { Badge } from './components/vscode-elements/Badge';
import { Button } from './components/vscode-elements/Button';
import { Checkbox } from './components/vscode-elements/Checkbox';
import { useVSCodeElements } from './hooks/useVSCodeElements';

const App: React.FC = () => {
  useVSCodeElements();
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div className='app-container' style={{ padding: '20px' }}>
      <h1>VSCode Webview React - Hot Reload</h1>
      <p>This is a React-powered webview in VSCode!!!</p>

      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
        <Button id="button-1">Button</Button>
        <Button id="button-2" secondary>Secondary button</Button>
        <Button id="button-3" disabled>Disabled button</Button>
        <Button id="button-4" icon="account" iconAfter="chevron-right">Icons</Button>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Badge>308 Settings Found</Badge>
          <Badge variant="counter">42</Badge>
          <Badge variant="activity-bar-counter">42</Badge>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', marginTop: '20px' }}>
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
    </div>
  );
};

export default App;
