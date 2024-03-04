import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './CheckboxButton.module.css';

interface CheckboxButtonProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (newVal: boolean) => void;
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  label,
  value,
  checked,
  onChange,
}) => (
  // const [checked, setChecked] = useState(false);

  <Checkbox
    classNames={classes}
    label={label}
    value={value}
    checked={checked}
    description="sedeutsch@gmail.com"
    onChange={(event) => onChange?.(event.currentTarget.checked)}
    wrapperProps={{
      // this only works if the component is being used in a "controlled"
      // manner, and only directly (so not within a Checkbox.Group that's
      // controlled)
      // for the whole box to be selectable, we'll have to find some way
      // to (1) identify the HTML input element's current state and invert
      // it, but (2) _only_ when the target is the wrapper div (or the
      // description, which is outside the label apparently?)
      // and still, the component can only be used in a controlled manner
      onClick: () => onChange?.(!checked),
      // onClick: (event) => {
      //   // event.target is not input or label
      //   event.target;
      //   // event.currentTarget.querySelector('input[type="checkbox"]').click();
      // },
    }}
  />
);
