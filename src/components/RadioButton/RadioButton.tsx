import { useState } from 'react';
import { Radio } from '@mantine/core';
import classes from './RadioButton.module.css';

interface RadioButtonProps {
  label: string;
  value: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      classNames={classes}
      label={label}
      value={value}
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
};
