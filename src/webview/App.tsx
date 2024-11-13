import React from 'react';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>VSCode Webview React - Hot Reload Test</h1>
      <p>This is a React-powered webview in VSCode!</p>
      <p style={{ color: '#0078D4' }}>
        If you see this blue text update automatically, hot reload is working!
      </p>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default App;
