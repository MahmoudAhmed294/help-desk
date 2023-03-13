import { useNavigate } from 'react-router-dom';
import { Group, ActionIcon, Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons';

type Props = {
    text?: string;
};

const StepBack = ({ text }: Props) => {
    const navigate = useNavigate();

    return (
        <Group>
            <ActionIcon onClick={() => navigate(-1)} variant="filled">
                <IconChevronLeft />
            </ActionIcon>
            <Text>{text}</Text>
        </Group>
    );
};

export default StepBack;
