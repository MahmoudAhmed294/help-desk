import {
    Text,
    Box,
    Button,
    Divider,
    Grid,
    Select,
    Stack,
    TextInput,
    Radio,
    MultiSelect,
    Group,
    Paper,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconChevronDown } from '@tabler/icons';
import { useState } from 'react';

type Props = {
    nextStep: () => void;
    prevStep: () => void;
};

export const PayMethod = ({ nextStep, prevStep }: Props) => {
    const [value, setValue] = useState('Visa');

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
            <Group align="flex-start" spacing={24}>
                <Radio.Group
                    label="Select your pay Method"
                    orientation="vertical"
                    spacing="xs"
                    value={value}
                    onChange={setValue}
                >
                    <Radio value="Visa" label="Visa" />
                    <Radio value="Cash" label="Cash Payment at Management(Permission is hold)" />
                </Radio.Group>
                <Stack>
                    <Paper p={16} sx={{ width: '100%' }}>
                        <Stack>
                            <Group align="center" position="apart">
                                <Text>numbers of Worker * 3</Text>
                                <Text>150 EGP</Text>
                            </Group>
                            <Group align="center" position="apart">
                                <Text>Tax</Text>
                                <Text>0.00 EGP</Text>
                            </Group>
                            <Group align="center" position="apart">
                                <Text>Total</Text>
                                <Text>150 EGP</Text>
                            </Group>
                        </Stack>
                    </Paper>
                    <Paper p={16} sx={{ width: '100%' }}>
                        <Text color={'red'}>
                            There is an insurance amount to recover when there are no irregularities
                        </Text>
                    </Paper>
                </Stack>
            </Group>
        </Box>
    );
};
