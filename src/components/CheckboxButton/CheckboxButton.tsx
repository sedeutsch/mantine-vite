import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './CheckboxButton.module.css';

interface CheckboxButtonProps {
  label: string;
  value: string;
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({ label, value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label={label}
      value={value}
      checked={checked}
      description="sedeutsch@gmail.com"
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
};
