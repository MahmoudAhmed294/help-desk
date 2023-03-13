import { Button, Grid,  TextInput } from '@mantine/core';
import { IconCalendar,  IconSearch } from '@tabler/icons';
import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { useState } from 'react';

const CraftsmanFilter = () => {
    const [value, setValue] = useState<DateRangePickerValue>([new Date(2021, 11, 1), new Date(2021, 11, 5)]);

    return (
        <Grid mt={8} justify="space-between">
            <Grid.Col xs={12} md={7}>
                <Grid align="center">
                    <Grid.Col xs={6} md={4.5}>
                        <DateRangePicker
                            placeholder="Pick dates range"
                            value={value}
                            onChange={setValue}
                            size="md"
                            icon={<IconCalendar size={20} color="#fff" />}

                        />
                    </Grid.Col>
                    <Grid.Col xs={6} md={2.5}>
                        <Button size="md" fullWidth>Check availability</Button>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col xs={12} md={4}>
                <Grid>
                    <Grid.Col xs={6} md={8}>
                        <TextInput placeholder="Your name" icon={<IconSearch />} size="md" />
                    </Grid.Col>
                    <Grid.Col xs={6} md={4}>
                        <Button fullWidth size="md">
                            Search
                        </Button>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
    );
};

export default CraftsmanFilter;
