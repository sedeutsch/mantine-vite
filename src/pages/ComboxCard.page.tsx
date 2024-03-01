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
            <Title order={3}>About you</Title>
            <Input.Wrapper label="I went / am going to school at...">
              <SelectAsync />
            </Input.Wrapper>
            <Input.Wrapper label="I went / am going to school at...">
              <SelectCreatable />
            </Input.Wrapper>
            <Select
              label="I graduated / will graduate in..."
              placeholder="Select"
              data={[
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
                '2025',
                '2026',
                '2027',
                '2028',
              ]}
            />

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
            <Button radius="md">Continue</Button>
          </Flex>
        </Card>
      </Container>
    </MantineProvider>
  );
}
