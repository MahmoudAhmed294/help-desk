import { Group } from '@mantine/core';

import StepBack from '../../components/TableDetails/StepBack';
import CraftsmenList from '../../components/CraftsmenList';

import CraftsmanFilter from './components/CraftsmanFilter';

export const AssignCraftsman = () => {
    return (
        <div>
            <Group position="apart">
                <StepBack text="Select a craftsman to assigned" />
            </Group>
            <CraftsmanFilter />
            <CraftsmenList number={8} />
        </div>
    );
};
