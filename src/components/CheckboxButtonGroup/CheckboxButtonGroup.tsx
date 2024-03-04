import { useState } from 'react';
import { Checkbox, Group } from '@mantine/core';
// import classes from './CheckboxButtonGroup.module.css';
import classes from './Checkbox.module.css';

export function CheckboxButtonGroup() {
  const [value, setValue] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Group gap="xs">
        <Checkbox
          classNames={classes}
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          wrapperProps={{
            onClick: () => setChecked((c) => !c),
          }}
          value="red"
          label="Red"
        />
        <Checkbox
          classNames={classes}
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          wrapperProps={{
            onClick: () => setChecked((c) => !c),
          }}
          value="green"
          label="Green"
        />
        <Checkbox
          classNames={classes}
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          wrapperProps={{
            onClick: () => setChecked((c) => !c),
          }}
          value="blue"
          label="Blue"
        />
      </Group>
    </Checkbox.Group>
  );
}
