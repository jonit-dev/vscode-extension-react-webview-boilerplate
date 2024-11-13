import React from 'react';

interface RadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

interface CustomRadioEvent extends CustomEvent {
  detail: {
    checked: boolean;
  };
}

interface CustomRadioGroupEvent extends CustomEvent {
  detail: {
    value: string;
  };
}

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  disabled,
  value,
  name,
  onChange,
  children,
}) => {
  const handleChange = (event: Event) => {
    const customEvent = event as CustomRadioEvent;
    onChange?.(customEvent.detail.checked);
  };

  return (
    <vscode-radio
      checked={checked}
      disabled={disabled}
      value={value}
      name={name}
      label={label}
      onChange={handleChange}
    >
      {children}
    </vscode-radio>
  );
};

interface RadioGroupProps {
  children: React.ReactElement<RadioProps> | React.ReactElement<RadioProps>[];
  value?: string;
  disabled?: boolean;
  variant?: 'vertical' | 'horizontal';
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  value,
  disabled,
  variant = 'vertical',
  onChange,
}) => {
  const handleChange = (event: Event) => {
    const customEvent = event as CustomRadioGroupEvent;
    onChange?.(customEvent.detail.value);
  };

  const groupName = React.useId();

  const radioButtons = React.Children.map(children, (child) => {
    if (React.isValidElement<RadioProps>(child)) {
      return React.cloneElement(child, {
        ...child.props,
        checked: child.props.value === value,
        disabled: disabled || child.props.disabled,
        name: groupName,
      });
    }
    return child;
  });

  return (
    <vscode-radio-group
      name={groupName}
      variant={variant}
      onChange={handleChange}
    >
      {radioButtons}
    </vscode-radio-group>
  );
};
