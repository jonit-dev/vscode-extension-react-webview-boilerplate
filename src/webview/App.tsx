import React from 'react';
import '@vscode-elements/elements/dist/vscode-button';

const App: React.FC = () => {
  return (
    <div className='app-container' style={{ padding: '20px' }}>
      <h1>VSCode Webview React - Hot Reload Test</h1>
      <p>This is a React-powered webview in VSCode!!!</p>
      
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
        <vscode-button id="button-1">Button</vscode-button>
        <vscode-button id="button-2" secondary>Secondary button</vscode-button>
        <vscode-button id="button-3" disabled>Disabled button</vscode-button>
        <vscode-button id="button-4" icon="account" icon-after="chevron-right">Icons</vscode-button>
      </div>
    </div>
  );
};

export default App;
