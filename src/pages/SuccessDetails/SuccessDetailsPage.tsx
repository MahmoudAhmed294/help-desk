import { Group, Text, Grid, Stepper, Box, Stack } from '@mantine/core';

import StepBack from '../../components/TableDetails/StepBack';
import DetailsLayout from '../../components/TableDetails/DetailsLayout';

import { IconSettings } from '@tabler/icons';

import Status from '../../components/Status';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SuccessDetailsPage = () => {
    const [active, setActive] = useState(2);

    return (
        <div>
            <Group position="apart">
                <StepBack text="Request details" />
            </Group>
            <Grid align="start">
                <Grid.Col xs={12} md={7}>
                    <DetailsLayout>
                        <Stack>
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
                                <Status status="Success" />
                            </Group>
                            <Group spacing={16} mt={16} position="apart">
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
                            </Group>
                            <div>
                                <Text weight={'bold'}>Requeste number</Text>
                                <Text>+20121376390</Text>
                            </div>
                        </Stack>
                    </DetailsLayout>
                    <DetailsLayout>
                        <Stack>
                            <Group position="apart">
                                <Group>
                                    <Text color="main">Craftsman summary</Text>
                                </Group>
                            </Group>
                            <Group spacing={80} mt={16}>
                                <div>
                                    <Text weight={'bold'}>Actual Date</Text>
                                    <Text>01:00 PM</Text>
                                </div>
                                <div>
                                    <Text weight={'bold'}>Arriving Date</Text>
                                    <Text>01:30 PM</Text>
                                </div>
                                <div>
                                    <Text weight={'bold'}>Finishing Date</Text>
                                    <Text>10:00 am</Text>
                                </div>
                            </Group>
                            <Group spacing={80} mt={16}>
                                <div>
                                    <Text weight={'bold'}>Reason of being late</Text>
                                    <Text>+Traffic jam</Text>
                                </div>
                                <div>
                                    <Text weight={'bold'}>Location</Text>
                                    <Text>
                                        Talaat mostafa Rd, Madinaty <Link to="">GPS</Link>
                                    </Text>
                                </div>
                            </Group>
                        </Stack>
                    </DetailsLayout>
                </Grid.Col>
                <Grid.Col xs={12} md={5}>
                    <DetailsLayout>
                        <Stack>
                            <Group>
                                <div>
                                    <Text weight={'bold'}>Request category</Text>
                                    <Text>Plumbing</Text>
                                </div>
                                <div>
                                    <Text weight={'bold'}>Price</Text>
                                    <Text>250 EGP</Text>
                                </div>
                            </Group>
                            <div>
                                <Text weight={'bold'}>Services number</Text>
                                <Text>2 services</Text>
                            </div>
                            <Stepper
                                active={active}
                                iconSize={20}
                                onStepClick={setActive}
                                orientation="vertical"
                                completedIcon={<Box sx={(theme) => ({ backgroundColor: theme.colors.main[7] })} />}
                            >
                                <Stepper.Step label="Tap Repair" sx={(theme) => ({ color: theme.colors.main[7] })} />
                                <Stepper.Step
                                    label="Waste Pipe"
                                    sx={(theme) => ({ color: theme.colors.main[7], minHeight: 0 })}
                                />
                            </Stepper>
                            <Group>
                                <div>
                                    <Text weight={'bold'}>Finish all services?</Text>
                                    <Text>Yes</Text>
                                </div>
                                <div>
                                    <Text weight={'bold'}>Additional Cash</Text>
                                    <Text>250 EGP</Text>
                                </div>
                            </Group>
                        </Stack>
                    </DetailsLayout>
                </Grid.Col>
            </Grid>
        </div>
    );
};
