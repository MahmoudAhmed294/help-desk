import successGif from '../../../assets/successGif.gif';

import { Button, Grid, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack
                sx={{ borderRadius: 8, border: '1px solid #ACACAC', padding: 24 }}
                mt={24}
                align="center"
                justify="center"
            >
                <img src={successGif} alt="Checkmate" width={150} height={150} />
                <Text align="center">Service added Successfully</Text>
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
