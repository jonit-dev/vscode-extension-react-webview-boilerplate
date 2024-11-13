import React from 'react';
import { Button } from './components/vscode-elements/Button';
import { useVSCodeElements } from './hooks/useVSCodeElements';

const App: React.FC = () => {
  useVSCodeElements();

  return (
    <div className='app-container' style={{ padding: '20px' }}>
      <h1>VSCode Webview React - Hot Reload</h1>
      <p>This is a React-powered webview in VSCode!!!</p>

      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
        <Button id="button-1">Button</Button>
        <Button id="button-2" secondary>Secondary button</Button>
        <Button id="button-3" disabled>Disabled button</Button>
        <Button id="button-4" icon="account" iconAfter="chevron-right">Icons</Button>
      </div>
    </div>
  );
};

export default App;
