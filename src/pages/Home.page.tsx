import {
  MantineProvider,
  Button,
  Select,
  Flex,
  Card,
  Container,
  Title,
  Text,
  Input,
  Radio,
  Group,
  Checkbox,
} from '@mantine/core';
import { theme } from '../theme';
import SelectCreatable from '../components/SelectCreatable';
import SelectAsync from '../components/SelectAsync';
import '../styles.css';
import CheckboxButton from '../components/CheckboxButton';
import RadioButton from '../components/RadioButton';

export function HomePage() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xs" className="container">
        <Card padding="xl" radius="md" w={420} className="card" withBorder>
          <Flex direction="column" gap="md">
            <Title order={3}>Favorite Colors</Title>
            <Flex direction="column" gap="md" align="flex-start">
              <Text>Ungrouped components seem to work fine</Text>
              <CheckboxButton value="red" label="Red" />
              <RadioButton value="red" label="Red" />
              <Checkbox.Group label="What are your favorite colors?">
                <Group gap="xs">
                  <CheckboxButton value="red" label="Red" />
                  <CheckboxButton value="yellow" label="Yellow" />
                  <CheckboxButton value="blue" label="Blue" />
                </Group>
              </Checkbox.Group>

              <Radio.Group name="favoriteColor" label="What is your favorite color?">
                <Group gap="xs">
                  <RadioButton value="red" label="Red" />
                  <RadioButton value="yellow" label="Yellow" />
                  <RadioButton value="blue" label="Blue" />
                </Group>
              </Radio.Group>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </MantineProvider>
  );
}
