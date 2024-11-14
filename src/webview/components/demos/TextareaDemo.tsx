import React from 'react';

const TextareaDemo: React.FC = () => {
  return (
    <div className="vscode-textarea-container">
      <h2>Textarea Demo</h2>
      <vscode-textarea rows={5} placeholder="Type something..." className="vscode-textarea">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </vscode-textarea>
      <vscode-textarea monospace rows={5} placeholder="Type something..." className="vscode-textarea">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </vscode-textarea>
    </div>
  );
};

export { TextareaDemo };
