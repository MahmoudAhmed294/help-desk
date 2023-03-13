import { Box, Button, Grid, Stack } from '@mantine/core';
import { DatePicker, RangeCalendar, TimeRangeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconClock } from '@tabler/icons';
import { useState } from 'react';

type Props = {
    nextStep: () => void;
    prevStep: () => void;
};

export const SelectDate = ({ nextStep, prevStep }: Props) => {
    const form = useForm({
        initialValues: {
            time: '',
            date: '',
        },
    });
    const handleSubmit = (values: any) => {
        nextStep();
    };
    const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);

    return (
        <Box
            sx={{ borderRadius: 8, border: '1px solid #ACACAC', padding: 24 }}
            mt={24}
            component="form"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
            <Grid justify="center" align="center">
                <Grid.Col md={4} sx={{ height: '100%' }}>
                    <Stack>
                        <TimeRangeInput
                            size="md"
                            format="12"
                            icon={<IconClock size={16} />}
                            {...form.getInputProps('time')}
                            placeholder="select Date"
                        />
                        <TimeRangeInput
                            size="md"
                            format="12"
                            icon={<IconClock size={16} />}
                            {...form.getInputProps('time')}
                            placeholder="select Date"
                        />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <RangeCalendar value={value} onChange={setValue} />
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
