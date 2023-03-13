import { createBrowserRouter } from 'react-router-dom';

import { DashboardShell } from './components';
import { LoginPage, RegisterPage, DashboardPage, SettingsPage, UsersPage } from './pages';
import { UnassignedDetailsPage } from './pages/UnassignedDetails/UnassignedDetailsPage';
import { AssignCraftsman } from './pages/AssignCraftsman/AssignCraftsmanPage';
import {SuccessDetailsPage} from './pages/SuccessDetails/SuccessDetailsPage';
import {CraftsmanDetailsPage} from './pages/CraftsmanDetails/CraftsmanDetailsPage';
import {AddNewService} from './pages/AddNewService/AddNewService';
import { AddNewPermission } from './pages/PermissionPage/AddNewPermission';
import { RequestDetailsPage } from './pages/RequestDetails/RequestDetailsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/dashboard',
        element: <DashboardShell />,
        children: [
            {
                path: '',
                element: <DashboardPage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
            },
            {
                path: 'settings',
                element: <SettingsPage />,
            },
            {
                path: 'request-details/:id',
                element: <RequestDetailsPage />,
            },
            {
                path: 'unassigned-request/:id',
                element: <UnassignedDetailsPage />,
            },
            {
                path: 'unassigned-request/:id/assign-craftsman',
                element: <AssignCraftsman />,
            },
            {
                path: 'success-request/:id',
                element: <SuccessDetailsPage />,
            },
            {
                path: 'craftsmen-details/:id',
                element: <CraftsmanDetailsPage />,
            },
            {
                path: 'add-new-service',
                element: <AddNewService />,
            },
            {
                path: 'add-new-permission',
                element: <AddNewPermission />,
            },
        ],
    },
]);

export default router;
