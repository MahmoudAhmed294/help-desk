import { ActionIcon, Button, Grid, Paper, Stack, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack
                sx={{ borderRadius: 8, border: '1px solid #ACACAC', padding: 40 }}
                mt={24}
                align="center"
                justify="center"
            >
                <Paper p={24} sx={{ position: 'relative' }}>
                    <ActionIcon radius="xl" variant="filled" color="main" size="lg" sx={{ position: 'absolute' , top:-20 , left:"45%" }}>
                        <IconCheck size={24} />
                    </ActionIcon>

                    <Text align="center">Successfully request</Text>
                </Paper>
            </Stack>
            <Grid mt={24} justify="flex-end" align="center">
                <Grid.Col md={1.5}>
                    <Button fullWidth size="md" type="submit" onClick={() => navigate('/dashboard')}>
                        Back to home
                    </Button>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default Success;
