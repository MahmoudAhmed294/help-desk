import { AppShell} from '@mantine/core';
import { Outlet } from 'react-router-dom';

import { DashboardHeader } from './DashboardHeader';
import { DashboardNavbar } from './DashboardNavbar';

export const DashboardShell = () => {
    return (
        <AppShell
            padding="md"
            header={<DashboardHeader />}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Outlet />
        </AppShell>
    );
};
