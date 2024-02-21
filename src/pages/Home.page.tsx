import {
  MantineProvider,
  Button,
  Select,
  Flex,
  Card,
  Container,
  Title,
  Input,
} from '@mantine/core';
import { theme } from '../theme';
import SelectCreatable from '../components/SelectCreatable';
import SelectAsync from '../components/SelectAsync';
import '../styles.css';

export function HomePage() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xs" className="container">
        <Card padding="xl" radius="md" w={420} className="card" withBorder>
          <Flex direction="column" gap="md">
            <Title order={3}>About you</Title>
            <Input.Wrapper label="I went / am going to school at...">
              <SelectAsync />
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
            <Button radius="md">Continue</Button>
          </Flex>
        </Card>
      </Container>
    </MantineProvider>
  );
}
