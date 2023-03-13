import { Header, Text, ActionIcon, Group, Box, Indicator, Avatar, Container } from '@mantine/core';

import logo from '../../assets/logo.png';

import { IconBell, IconLogout } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

export const DashboardHeader = () => {
    const navigate = useNavigate();
    return (
        <Header height={{ base: 50, md: 80 }} px="md" >
                <Group align="center" position="apart">
                    <Box sx={{ width: 100, height: 80 }}>
                        <img src={logo} alt="logo" width="100%" height="100%" />
                    </Box>
                    <Box ml={32}>
                        <Text>Welcome to help desk system</Text>
                    </Box>
                    <Group position="right" mr={8}>
                        <ActionIcon size="xl" radius="xl" variant="outline">
                            <Indicator color="red" offset={5} position="top-end" dot processing size={8}>
                                <IconBell />
                            </Indicator>
                        </ActionIcon>
                        <ActionIcon size="xl" radius="xl" variant="outline" onClick={() => navigate('/')}>
                            <IconLogout />
                        </ActionIcon>
                        <Group >
                            <Avatar
                                radius="xl"
                                size={44}
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />
                            <Text>Ahmed khaled</Text>
                        </Group>
                    </Group>
                </Group>
        </Header>
   );
};
