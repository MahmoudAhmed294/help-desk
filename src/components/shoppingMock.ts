import { faker } from '@faker-js/faker';

export const createProduct = () => {
    return {
        id: faker.random.numeric(5),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.people(),
    };
};


export const fakeProducts = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(createProduct);
};
