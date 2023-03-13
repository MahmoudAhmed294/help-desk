import { Text, Box, Button, Divider, Grid, Select, Stack, TextInput, Radio, MultiSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons';
import { useState } from 'react';

type Props = {
    nextStep: () => void;
    prevStep: () => void;
};

export const CraftsmanInfo = ({ nextStep, prevStep }: Props) => {
    const [serviceType, setServiceType] = useState('singleService');

    const form = useForm({
        initialValues: {
            serviceCategory: '',
            craftsmanName: '',
            periodTime: '',
            singleService: '',
            multipleServices: '',
        },
    });
    const handleSubmit = (values: any) => {
        nextStep();
    };

    return (
        <Box
            sx={{ borderRadius: 8, border: '1px solid #ACACAC', padding: 24 }}
            mt={24}
            component="form"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
            <Grid>
                <Grid.Col md={4}>
                    <Stack>
                        <Select
                            placeholder="Service Category"
                            size="md"
                            rightSection={<IconChevronDown size={14} />}
                            data={[{ value: 'test', label: 'test' }]}
                            {...form.getInputProps('serviceCategory')}
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack>
                        <Select
                            placeholder="Craftsman Name"
                            size="md"
                            rightSection={<IconChevronDown size={14} />}
                            data={[{ value: 'test', label: 'test' }]}
                            {...form.getInputProps('craftsmanName')}
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack>
                        <TextInput
                            placeholder="Period Time"
                            type="number"
                            size="md"
                            {...form.getInputProps('periodTime')}
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={12}>
                    <Divider my={24} />
                    <Text>Services Number</Text>
                    <Radio.Group name="favoriteFramework" value={serviceType} onChange={setServiceType}>
                        <Radio value="singleService" label="Single Service" />
                        <Radio value="multipleServices" label="Multiple Services" />
                    </Radio.Group>
                    <Box mt={16}>
                        {serviceType === 'singleService' ? (
                            <Select
                                placeholder="Select a Service"
                                size="md"
                                rightSection={<IconChevronDown size={14} />}
                                data={[{ value: 'test', label: 'test' }]}
                                {...form.getInputProps('singleService')}
                            />
                        ) : (
                            <MultiSelect
                                placeholder="Select Multiple Services"
                                size="md"
                                rightSection={<IconChevronDown size={14} />}
                                data={[
                                    { value: 'test', label: 'test' },
                                    { value: 'test2', label: 'test2' },
                                ]}
                                {...form.getInputProps('multipleServices')}
                            />
                        )}
                    </Box>
                </Grid.Col>
            </Grid>
            <Grid mt={24} justify="space-between" align="center">
                <Grid.Col md={1.5}>
                    <Button fullWidth variant="outline" color="gray" size="md" onClick={() => prevStep()}>
                        Cancel
                    </Button>
                </Grid.Col>
                <Grid.Col md={1.5}>
                    <Button fullWidth size="md" type="submit">
                        Next
                    </Button>
                </Grid.Col>
            </Grid>
        </Box>
    );
};
