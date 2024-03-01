import { createTheme } from '@mantine/core';

export const theme = createTheme({
  scale: 1,
  fontSmoothing: true,
  fontFamily: '"Source Sans 3", sans-serif',
  headings: {
    fontWeight: '600',
  },
  primaryShade: {
    light: 5,
    dark: 8,
  },
  primaryColor: 'blue',
  defaultRadius: 'md',
});
