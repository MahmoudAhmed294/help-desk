import { Paper, Image, Group, ActionIcon, Text, Box, Stack } from '@mantine/core';
import { IconStar, IconChevronRight } from '@tabler/icons';

type Props = {
    data: {
        name: string;
        image: string;
        price: string;
        id: string;
    };
};

const CraftsmenItem = ({ data }: Props) => {
    return (
        <Paper radius="md">
            <Box sx={{ position: 'relative' }}>
                <Image src={data.image} alt={data.name} height={120} />
                <Box sx={{ position: 'absolute', bottom: 10, right: 12 }}>
                    <Text>From Sunday to Tuesday: - 08:00 am to 10:00 pm</Text>
                </Box>
            </Box>
            <Stack p={8} spacing={5}>
                <Group position="apart">
                    <Text>{data.name}</Text>
                    <Text>{data.price} EGP/h</Text>
                </Group>
                <Group spacing={2}>
                    <Text color="gray.5">Category: </Text>
                    <Text>Plumbing</Text>
                </Group>
                <Group position="apart">
                    <Group spacing={3} align={'center'}>
                        <IconStar size={18} color="#B39952" />
                        <Text>4.2</Text>
                    </Group>
                    <ActionIcon color="main" radius="xl"  variant="filled"  >
                        <IconChevronRight size={22} />
                    </ActionIcon>
                </Group>
            </Stack>
        </Paper>
    );
};

export default CraftsmenItem;
