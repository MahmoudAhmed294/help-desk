import { Box, Button, Grid, TextInput, Divider, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

type Props = {
    nextStep: () => void;
    prevStep: () => void;
};

export const PermissionType = ({ nextStep, prevStep }: Props) => {
    const [numberOfWorkers, setNumberOfWorkers] = useState<number>(0);

    const form = useForm({
        initialValues: {
            permissionForWorker: '',
            permissionForVisitor: '',
            permissionForSalesperson: '',
             
            priceForEnter: +numberOfWorkers * 50,
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
                    <TextInput
                        placeholder="permission For Worker"
                        size="md"
                        {...form.getInputProps('permissionForWorker')}
                    />
                </Grid.Col>
                <Grid.Col md={4}>
                    <TextInput
                        placeholder="permission For Visitor"
                        size="md"
                        {...form.getInputProps('permissionForVisitor')}
                    />
                </Grid.Col>
                <Grid.Col md={4}>
                    <TextInput
                        placeholder="permission For salesperson"
                        size="md"
                        {...form.getInputProps('permissionForSalesperson')}
                    />
                </Grid.Col>
            </Grid>
            <Divider my={24} color="gray" />
            <Title mb={24} order={6}>
                please enter number of employees
            </Title>
            <Grid justify="space-between" align="center">
                <Grid.Col md={4}>
                    <TextInput
                        label="Number of workers"
                        size="md"
                        type="number"
                        value={numberOfWorkers}
                        onChange={(e: any) => setNumberOfWorkers(e.target.value)}
                    />
                </Grid.Col>
                <Grid.Col md={4}>
                    <TextInput placeholder="Total" size="md"
                        value={numberOfWorkers *50}
                    
                    />
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
