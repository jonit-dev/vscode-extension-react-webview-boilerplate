import React from 'react';

interface IOptionProps {
  children: React.ReactNode;
  value: string;
  description?: string;
  disabled?: boolean;
}

export const Option: React.FC<IOptionProps> = ({
  children,
  value,
  description,
  disabled,
  ...props
}) => {
  return (
    <vscode-option
      {...props}
      value={value}
      disabled={disabled}
      description={description}
    >
      {children}
    </vscode-option>
  );
};

interface ISingleSelectProps {
  id?: string;
  children: React.ReactNode;
  value?: string;
  disabled?: boolean;
  combobox?: boolean;
  filter?: 'contains' | 'fuzzy' | 'startsWith' | 'startsWithPerTerm';
  onChange?: (value: string) => void;
}

interface ICustomSelectEvent extends Event {
  detail: {
    value: string;
  };
}

export const SingleSelect: React.FC<ISingleSelectProps> = ({
  children,
  value,
  disabled,
  combobox,
  filter = 'fuzzy',
  onChange,
  ...props
}) => {
  const handleChange = (event: Event) => {
    const customEvent = event as ICustomSelectEvent;
    onChange?.(customEvent.detail.value);
  };

  return (
    <vscode-single-select
      {...props}
      value={value}
      disabled={disabled}
      combobox={combobox}
      filter={filter}
      onChange={handleChange}
    >
      {children}
    </vscode-single-select>
  );
};
