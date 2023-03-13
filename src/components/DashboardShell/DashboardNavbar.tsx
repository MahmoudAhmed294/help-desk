import { NavLink, Navbar, Box, Divider } from '@mantine/core';
import { IconUsers, IconSettings, IconDashboard } from '@tabler/icons';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';

export const DashboardNavbar = () => {
    const location = useLocation();

    const isActiveLink = (path: string) => {
        const pathArray = location.pathname.split('/');
        const lastPath = pathArray[pathArray.length - 1];
        return lastPath === path;
    };

    return (
        <Navbar p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">Logo Here</Navbar.Section>
            <Divider />
            <Navbar.Section grow mx="-xs" px="xs">
                <Box py="md">
                    <NavLink
                        icon={<IconDashboard />}
                        component={RouterNavLink}
                        label="Dashboard"
                        to="."
                        active={isActiveLink('dashboard')}
                    />
                    <NavLink
                        icon={<IconUsers />}
                        component={RouterNavLink}
                        label="Users"
                        to="./users"
                        active={isActiveLink('users')}
                    />
                    <NavLink
                        icon={<IconSettings />}
                        component={RouterNavLink}
                        label="Settings"
                        to="./settings"
                        active={isActiveLink('settings')}
                    />
                </Box>
            </Navbar.Section>
            <Divider />
            <Navbar.Section>Another bottom fixed section</Navbar.Section>
        </Navbar>
    );
};
