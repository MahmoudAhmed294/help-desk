import { Box, Button, Grid, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

type Props = {
    nextStep: () => void;
    prevStep: () => void;
};

export const ClientInfo = ({ nextStep, prevStep }: Props) => {
    const form = useForm({
        initialValues: {
            requesterName: '',
            requesterEmail: '',
            requesterNumber: '',
            country: '',
            state: '',
            city: '',
            address: '',
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
                        <TextInput placeholder="Requester Name" size="md" {...form.getInputProps('requesterName')} />
                        <TextInput placeholder="Country" size="md" {...form.getInputProps('country')} />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack>
                        <TextInput placeholder="Requester Email" size="md" {...form.getInputProps('requesterEmail')} />
                        <TextInput placeholder="State" size="md" {...form.getInputProps('state')} />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={4}>
                    <Stack>
                        <TextInput
                            placeholder="Requester Number"
                            size="md"
                            {...form.getInputProps('requesterNumber')}
                        />
                        <TextInput placeholder="City" size="md" {...form.getInputProps('city')} />
                    </Stack>
                </Grid.Col>
                <Grid.Col md={12}>
                    <TextInput placeholder="Address" size="md" {...form.getInputProps('address')} />
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
