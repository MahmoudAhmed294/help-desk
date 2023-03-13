import { Box, Group, Text, Stack, Divider } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';

const ScheduleItem = () => {
    return (
        <Box>
            <Box
                sx={(theme) => ({
                    backgroundImage: `linear-gradient(${theme.colors.main[6]} , ${theme.colors.main[1]})`,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    padding: 16,
                })}
            >
                <Group position="apart">
                    <Text>Tuesday</Text>
                    <Text>16 Nov 2022</Text>
                </Group>
            </Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.colors.dark[5],
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                })}
            >
                {Array(3)
                    .fill(null)
                    .map((_, index) => (
                        <>
                            <Stack p={16} key={index}>
                                <Group position="apart">
                                    <Text>Tap Repair</Text>
                                    <Text>08:30 am - 10:00 am</Text>
                                </Group>
                                <Group>
                                    <IconMapPin />
                                    <Text>Talaat mostafa Rd, Madenaty</Text>
                                </Group>
                            </Stack>
                            <Divider color={'white'} />
                        </>
                    ))}
                <Box p={16}>
                    <Text align="center">Show More</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default ScheduleItem;
