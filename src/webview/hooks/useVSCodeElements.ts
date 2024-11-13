import { useEffect } from 'react';

export const useVSCodeElements = () => {
  useEffect(() => {
    const importElements = async () => {
      if (!customElements.get('vscode-button')) {
        await import('@vscode-elements/elements/dist/vscode-button');
      }
    };

    importElements();
  }, []);
};
