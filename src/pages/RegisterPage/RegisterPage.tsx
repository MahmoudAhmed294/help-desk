import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Paper, Group, Button, Anchor, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const onFormSubmit = () => {
        navigate('/dashboard');
    };

    return (
        <Paper radius="md" p="xl" withBorder>
            <form onSubmit={() => onFormSubmit()}>
                <Stack>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                    />
                    <TextInput
                        required
                        label="Email"
                        placeholder="Your email"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    />

                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Your password"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    />
                </Stack>

                <Group position="apart" mt="xl">
                    <Anchor
                        component="button"
                        type="button"
                        color="dimmed"
                        onClick={() => navigate('/login')}
                        size="xs"
                    >
                        Already have an account? Login
                    </Anchor>
                    <Button type="submit">Login</Button>
                </Group>
            </form>
        </Paper>
    );
};
