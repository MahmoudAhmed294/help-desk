import { Box, Button, Grid } from '@mantine/core';
import { DatePicker, TimeRangeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconClock } from '@tabler/icons';

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

    return (
        <Box
            sx={{ borderRadius: 8, border: '1px solid #ACACAC', padding: 24 }}
            mt={24}
            component="form"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
            <Grid justify="center">
                <Grid.Col md={4}>
                    <TimeRangeInput
                        size="md"
                        format="12"
                        icon={<IconClock size={16} />}
                        {...form.getInputProps('time')}
                    />
                </Grid.Col>
                <Grid.Col md={4}>
                    <DatePicker placeholder="Pick date" withAsterisk size="md" />
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
