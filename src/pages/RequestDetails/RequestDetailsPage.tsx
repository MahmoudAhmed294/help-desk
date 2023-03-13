import { Group, Button, Text, Grid, Stepper, Box } from '@mantine/core';

import StepBack from '../../components/TableDetails/StepBack';
import DetailsLayout from '../../components/TableDetails/DetailsLayout';

import { IconSettings } from '@tabler/icons';

import Status from '../../components/Status';

import { useState } from 'react';
import CraftsmenList from '../../components/CraftsmenList';

import { useNavigate } from 'react-router-dom';

export const RequestDetailsPage = () => {
    const [active, setActive] = useState(2);
    const navigate = useNavigate();

    return (
        <div>
            <Group position="apart">
                <StepBack text="Request details" />
                <Button onClick={() => navigate('assign-craftsman')}>Assign craftsman</Button>
            </Group>
            <Grid>
                <Grid.Col md={8}>
                    <DetailsLayout>
                        <Group position="apart">
                            <Group>
                                <Group
                                    sx={(theme) => ({
                                        padding: 8,
                                        borderRadius: '50%',
                                        backgroundColor: theme.colors.main[7],
                                    })}
                                >
                                    <IconSettings />
                                </Group>
                                <Text color="main">Request #25245366</Text>
                            </Group>
                            <Status status="Pending" />
                        </Group>
                        <Group position="apart" mt={16}>
                            <div>
                                <Text weight={'bold'}>Requester name</Text>
                                <Text>Ahmed Alaa Eldin</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Request date</Text>
                                <Text>25 Oct 2022</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Request time</Text>
                                <Text>10:00 am</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Address</Text>
                                <Text>Talaat mostafa Rd, Madinaty</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Requeste number</Text>
                                <Text>+20121376390</Text>
                            </div>
                        </Group>
                    </DetailsLayout>
                </Grid.Col>
                <Grid.Col md={4}>
                    <DetailsLayout>
                        <Group>
                            <div>
                                <Text weight={'bold'}>Request category</Text>
                                <Text>Plumbing</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Price</Text>
                                <Text>250 EGP</Text>
                            </div>
                            <div>
                                <Text weight={'bold'}>Services number</Text>
                                <Text>2 services</Text>
                            </div>
                        </Group>
                        <Stepper
                            mt={24}
                            active={active}
                            iconSize={20}
                            onStepClick={setActive}
                            orientation="vertical"
                            completedIcon={<Box sx={(theme) => ({ backgroundColor: theme.colors.main[7] })} />}
                        >
                            <Stepper.Step label="Tap Repair" sx={(theme) => ({ color: theme.colors.main[7] })} />
                            <Stepper.Step label="Waste Pipe" sx={(theme) => ({ color: theme.colors.main[7] })} />
                        </Stepper>
                    </DetailsLayout>
                </Grid.Col>
            </Grid>
            <CraftsmenList number={4} />
        </div>
    );
};
