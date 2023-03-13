import { Title, Grid, Box } from '@mantine/core';

import CraftsmenItem from './CraftsmenItem';
import { fakeProducts } from './shoppingMock';

const CraftsmenList = ({ number }: { number: number }) => {
    return (
        <Box mt={24}>
            {number > 4 ? '' : <Title order={4}>Recommended craftsmen</Title>}
            <Grid mt={24}>
                {fakeProducts(number).map((value) => (
                    <Grid.Col xs={12} md={3} key={value.id}>
                        <CraftsmenItem data={value} />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
};

export default CraftsmenList;
