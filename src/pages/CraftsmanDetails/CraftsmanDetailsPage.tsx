import { useMemo, useState } from 'react';

import StepBack from '../../components/TableDetails/StepBack';

import { Avatar, Text, Paper, Group, Grid, Box } from '@mantine/core';

import { createProduct } from '../../components/shoppingMock';

import { RangeCalendar } from '@mantine/dates';

import ScheduleItem from './components/ScheduleItem';

export const CraftsmanDetailsPage = () => {
    const data = useMemo(() => createProduct(), []);
    const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);

    return (
        <div>
            <StepBack text="Craftsman details" />
            <Paper p={'md'} mt={24}>
                <Group spacing={100}>
                    <Group>
                        <Avatar src={data.image} radius="xl" size="lg" alt={data.name} />
                        <div>
                            <Text>{data.name}</Text>
                            <Text>+201232145354</Text>
                        </div>
                    </Group>
                    <div>
                        <Text>Category</Text>
                        <Text>Plumbing</Text>
                    </div>
                    <div>
                        <Text>Working days</Text>
                        <Text>+From Sunday to Tuesday - 08:00 am to 10:00 pm </Text>
                    </div>
                </Group>
            </Paper>
            <Paper mt={24} p={'md'}>
                <Grid>
                    <Grid.Col xs={12} md={2.5}>
                        <Box
                            sx={(theme) => ({
                                backgroundColor: theme.colors.dark[5],
                                width: 'fit-content',
                                borderRadius: 8,
                            })}
                        >
                            <RangeCalendar value={value} onChange={setValue} />
                        </Box>
                    </Grid.Col>
                    <Grid.Col xs={12} md={9}>
                        <Grid>
                            {Array(6)
                                .fill('')
                                .map((_, index) => (
                                    <Grid.Col xs={12} md={4} key={index}>
                                        <ScheduleItem />
                                    </Grid.Col>
                                ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Paper>
        </div>
    );
};
