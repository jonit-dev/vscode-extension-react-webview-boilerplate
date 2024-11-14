declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vscode-badge': any;
      'vscode-button': any;
      'vscode-checkbox': any;
      'vscode-checkbox-group': any;
      'vscode-collapsible': any;
      'vscode-divider': any;
      'vscode-form-container': any;
      'vscode-form-group': any;
      'vscode-form-helper': any;
      'vscode-icon': any;
      'vscode-label': any;
      'vscode-multi-select': any;
      'vscode-option': {
        value?: string;
        selected?: boolean;
        disabled?: boolean;
        description?: string;
        children?: React.ReactNode;
      };
      'vscode-progress-ring': any;
      'vscode-radio': {
        label?: string;
        value?: string;
        name?: string;
        checked?: boolean;
        disabled?: boolean;
        required?: boolean;
        invalid?: boolean;
        onChange?: (event: Event) => void;
        children?: React.ReactNode;
      };
      'vscode-radio-group': {
        variant?: 'horizontal' | 'vertical';
        name?: string;
        children?: React.ReactNode;
        onChange?: (event: Event) => void;
      };
      'vscode-scrollable': any;
      'vscode-single-select': {
        id?: string;
        name?: string;
        value?: string;
        'default-value'?: string;
        disabled?: boolean;
        required?: boolean;
        invalid?: boolean;
        focused?: boolean;
        combobox?: boolean;
        filter?: 'contains' | 'fuzzy' | 'startsWith' | 'startsWithPerTerm';
        position?: 'above' | 'below';
        onChange?: (event: Event) => void;
        children?: React.ReactNode;
      };
      'vscode-tabs': any;
      'vscode-tab-header': any;
      'vscode-tab-panel': any;
      'vscode-textfield': any;
      'vscode-textarea': any;
    }
  }
}

export { };
