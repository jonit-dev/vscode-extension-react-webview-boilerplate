import { useEffect } from 'react';

export const useVSCodeElements = () => {
  useEffect(() => {
    const importElements = async () => {
      if (!customElements.get('vscode-button')) {
        await import('@vscode-elements/elements/dist/vscode-button');
      }
      if (!customElements.get('vscode-badge')) {
        await import('@vscode-elements/elements/dist/vscode-badge');
      }
      if (!customElements.get('vscode-checkbox')) {
        await import('@vscode-elements/elements/dist/vscode-checkbox');
        await import('@vscode-elements/elements/dist/vscode-checkbox-group');
      }
      if (!customElements.get('vscode-collapsible')) {
        await import('@vscode-elements/elements/dist/vscode-collapsible');
        await import('@vscode-elements/elements/dist/vscode-icon');
      }
    };

    importElements();
  }, []);
};
