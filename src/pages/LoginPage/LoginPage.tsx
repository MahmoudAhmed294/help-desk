import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Paper,
    Group,
    Button,
    Stack,
    Box,
    MantineTheme,
    createStyles,
    Text,
    Title,
    Center,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import loginBg from '../../assets/loginBg.png';
import logo from '../../assets/logo.png';

export const LoginPage = () => {
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    });

    const onFormSubmit = () => {
        navigate('/dashboard');
    };
    const { classes } = useStyles();

    return (

        <Box className={classes.bg}>
            <Center sx={{ height: '100%' }}>
                <Paper
                    radius="md"
                    p="xl"
                    withBorder
                    sx={{ width: '35%', position: 'relative', backgroundColor: 'transparent' , zIndex:1 ,border:0 }}
                >
                    <Box
                        sx={{
                            backgroundImage: `linear-gradient(#FFFFFF , #808080)`,
                            opacity: 0.3,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex:0
                        }}
                    />
                    <Group position="apart" mb={32}>
                        <img src={logo} alt="logo"  />
                        <Button color="dark.6">العربيه</Button>
                    </Group>
                    <Box>
                        <Title order={2} mb={16}>
                            Let&#39;s sign you in.
                        </Title>
                        <Text size={'lg'} mb={32}>
                            Welcome Back.
                            <br /> You have been missed!
                        </Text>
                    </Box>
                    <form onSubmit={() => onFormSubmit()}>
                        <Stack>
                            <TextInput
                                required
                                placeholder="Your email"
                                value={form.values.email}
                                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                size="md"
                            />

                            <PasswordInput
                                required
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                size="md"
                            />
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Button fullWidth size="md" type="submit">
                                Sign in
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Center>
        </Box>
    );
};

const useStyles = createStyles((theme: MantineTheme) => ({
    bg: {
        position: 'relative',
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    },
}));
