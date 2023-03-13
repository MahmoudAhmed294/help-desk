import { Button, Grid, Group, Pagination, Tabs } from '@mantine/core';

import RequestTable from './components/Table';
import TableFilter from './components/TableFilter';
import { useStyles } from './components/style';
import {
    craftsmenListMockHeader,
    fakePermissionMock,
    fakeServiceRequestsTable,
    fakeSuccessTable,
    fakeUnassignedRequestsTable,
    permissionMockHeader,
    serviceRequestsHeaderMock,
    unassignedRequestsHeaderMock,
} from './components/TabelMock';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const DashboardPage = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string | null>('ServiceRequests');

    return (
        <Tabs variant="pills" value={activeTab} onTabChange={setActiveTab} mt={8}>
            <Grid justify="space-between">
                <Grid.Col md={6}>
                    <Tabs.List className={classes.buttonBg} grow>
                        <Tabs.Tab value="ServiceRequests">Service Requests</Tabs.Tab>
                        <Tabs.Tab value="Unassigned requests">Unassigned requests</Tabs.Tab>
                        <Tabs.Tab value="Success requests">Success requests</Tabs.Tab>
                        <Tabs.Tab value="Craftsmen list">Craftsmen list</Tabs.Tab>
                        <Tabs.Tab value="permission">Permission</Tabs.Tab>
                    </Tabs.List>
                </Grid.Col>
                <Grid.Col md={2}>
                    <Group className={classes.buttonBg}>
                        {activeTab === 'permission' ? (
                            <Button fullWidth onClick={() => navigate('add-new-permission')}>
                                Add Permission
                            </Button>
                        ) : (
                            <Button fullWidth onClick={() => navigate('add-new-service')}>
                                Add New Service
                            </Button>
                        )}
                    </Group>
                </Grid.Col>
            </Grid>
            <Tabs.Panel value="ServiceRequests">
                <TableFilter />
                <RequestTable
                    headers={serviceRequestsHeaderMock}
                    body={fakeServiceRequestsTable(6)}
                    link="request-details"
                />
            </Tabs.Panel>

            <Tabs.Panel value="Unassigned requests">
                <TableFilter />
                <RequestTable
                    headers={unassignedRequestsHeaderMock}
                    body={fakeUnassignedRequestsTable(6)}
                    link={'unassigned-request'}
                />
            </Tabs.Panel>

            <Tabs.Panel value="Success requests">
                <TableFilter />
                <RequestTable
                    headers={unassignedRequestsHeaderMock}
                    body={fakeSuccessTable(6)}
                    link={'success-request'}
                />
            </Tabs.Panel>

            <Tabs.Panel value="Craftsmen list">
                <TableFilter />
                <RequestTable
                    headers={craftsmenListMockHeader}
                    body={fakeServiceRequestsTable(6)}
                    link={'craftsmen-details'}
                />
            </Tabs.Panel>
            <Tabs.Panel value="permission">
                <TableFilter />
                <RequestTable headers={permissionMockHeader} body={fakePermissionMock(6)} link={'request-details'} />
            </Tabs.Panel>
            <Pagination total={10} mt={16} />
        </Tabs>
    );
};
