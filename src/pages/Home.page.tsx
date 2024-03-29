import { useState } from 'react';
import {
  MantineProvider,
  Flex,
  Card,
  Container,
  Title,
  Radio,
  Group,
  Checkbox,
} from '@mantine/core';
import { theme } from '../theme';
import '../styles.css';
import CheckboxButton from '../components/CheckboxButton';
import CheckboxButtonGroup from '@/components/CheckboxButtonGroup';
import RadioButton from '../components/RadioButton';

export function HomePage() {
  const [value, setValue] = useState<string[]>(['red']);

  return (
    <MantineProvider theme={theme}>
      <Container size="xs" className="container">
        <Flex direction="column" gap="xl">
          <Card padding="xl" radius="md" w={640} className="card" withBorder>
            <Title order={4} mb={24}>
              Ungrouped components seem to work fine
            </Title>
            <Flex direction="column" gap="md" align="flex-start">
              <CheckboxButton value="red" label="Red" />
              <RadioButton value="red" label="Red" />
            </Flex>
          </Card>

          <Card padding="xl" radius="md" w={640} className="card" withBorder>
            <Title order={4} mb={24}>
              Grouped components do not work
            </Title>
            <Flex direction="column" gap="md" align="flex-start">
              <Checkbox.Group
                value={value}
                onChange={setValue}
                label="What are your favorite colors?"
              >
                <Group gap="xs">
                  <CheckboxButton value="red" label="Red" />
                  <CheckboxButton value="yellow" label="Yellow" />
                  <CheckboxButton value="blue" label="Blue" />
                </Group>
              </Checkbox.Group>
              <CheckboxButtonGroup />
            </Flex>
          </Card>

          <Card padding="xl" radius="md" w={640} className="card" withBorder>
            <Title order={4} mb={24}>
              Grouped components do not work
            </Title>
            <Flex direction="column" gap="md" align="flex-start">
              <Radio.Group name="favoriteColor" label="What is your favorite color?">
                <Group gap="xs">
                  <RadioButton value="red" label="Red" />
                  <RadioButton value="yellow" label="Yellow" />
                  <RadioButton value="blue" label="Blue" />
                </Group>
              </Radio.Group>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </MantineProvider>
  );
}
