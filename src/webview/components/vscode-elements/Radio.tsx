import React from "react";

interface IRadioProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  name?: string;
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

interface ICustomRadioEvent extends CustomEvent {
  detail: {
    checked: boolean;
    value: string;
  };
}

interface IRadioGroupProps {
  children: React.ReactElement<IRadioProps> | React.ReactElement<IRadioProps>[];
  value?: string;
  disabled?: boolean;
  variant?: "vertical" | "horizontal";
  onChange?: (value: string) => void;
}

export const Radio: React.FC<IRadioProps> = ({
  label,
  checked,
  disabled,
  value,
  name,
  onChange,
  children,
}) => {
  const handleChange = (event: Event) => {
    const customEvent = event as ICustomRadioEvent;
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

export const RadioGroup: React.FC<IRadioGroupProps> = ({
  children,
  value,
  disabled,
  variant = "vertical",
  onChange,
}) => {
  const handleChange = (event: Event) => {
    const customEvent = event as ICustomRadioEvent;
    onChange?.(customEvent.detail.value);
  };

  const groupName = React.useId();

  const radioButtons = React.Children.map(children, child => {
    if (React.isValidElement<IRadioProps>(child)) {
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
