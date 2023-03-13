import { faker } from '@faker-js/faker';
// faker.setLocale('ar')

const categoryArr = ['Plumbing', 'Home Repairs', 'Home Cleaning', 'Carpentary', 'AC Services', 'Electrician'];
const customerType = ['VIP', 'Normal'];
const status = ['pending', 'Success', 'Rejected'];
const payMethod =["Cash" , "Visa"];

const serviceRequestsTableMock = () => {
    return {
        requestNo: faker.datatype.number({ min: 1000000 }),
        requesterName: faker.name.fullName(),
        requestDate: faker.date.future(),
        requestTime: faker.date.future(),
        providerName: faker.name.fullName(),
        requestCategory: categoryArr[faker.datatype.number(5)],
        customerType: customerType[faker.datatype.number(1)],
        periodTime: `${faker.datatype.number(8)} Hours`,
    };
};

const unassignedRequestsTableMock = () => {
    return {
        requestNo: faker.datatype.number({ min: 1000000 }),
        requesterName: faker.name.fullName(),
        requestDate: faker.date.future(),
        requestTime: faker.date.future(),
        requesterAddress: `${faker.address.cityName() + '' + faker.address.street()}`,
        requestCategory: categoryArr[faker.datatype.number(5)],
        price: `${faker.commerce.price()} EGP`,
        status: status[0],
    };
};
const successTableMock = () => {
    return {
        requestNo: faker.datatype.number({ min: 1000000 }),
        requesterName: faker.name.fullName(),
        requestDate: faker.date.future(),
        requestTime: faker.date.future(),
        requesterAddress: `${faker.address.cityName() + '' + faker.address.street()}`,
        requestCategory: categoryArr[faker.datatype.number(5)],
        price: `${faker.commerce.price()} EGP`,
        status: status[1],
    };
};
const craftsmenListMock = () => {
    return {
        requestNo: faker.datatype.number({ min: 1000000 }),
        requesterName: faker.name.fullName(),
        providerNumber: faker.phone.number(),
        requestCategory: categoryArr[faker.datatype.number(5)],
    };
};
const permissionMock = () => {
    return {
        requestNo: faker.datatype.number({ min: 1000000 }),
        permissionType: faker.name.fullName(),
        numberOfPerson: faker.datatype.number({max:10}),
        payMethod: payMethod[faker.datatype.number({max:1 , min:0})],
        visitDay: faker.date.future(),
        periodOfStay: `${faker.datatype.number({max:10})} days`,

    };
};
export const permissionMockHeader = [
    {
        title: 'requestNo',
        type: 'id',
    },
    {
        title: 'permissionType',
        type: '',
    },
    {
        title: 'numberOfPerson',
        type: '',
    },
    {
        title: 'payMethod',
        type: '',
    },
    {
        title: 'visitDay',
        type: 'date',
    },
    {
        title: 'periodOfStay',
        type: '',
    },
];
export const craftsmenListMockHeader = [
    {
        title: 'requestNo',
        type: 'id',
    },
    {
        title: 'requesterName',
        type: '',
    },
    {
        title: 'providerNumber',
        type: '',
    },
    {
        title: 'requestCategory',
        type: '',
    },
];
export const serviceRequestsHeaderMock = [
    {
        title: 'requestNo',
        type: 'id',
    },
    {
        title: 'requesterName',
        type: '',
    },
    {
        title: 'requestDate',
        type: 'date',
    },
    {
        title: 'requestTime',
        type: 'time',
    },
    {
        title: 'providerName',
        type: '',
    },
    {
        title: 'requestCategory',
        type: '',
    },
    {
        title: 'customerType',
        type: '',
    },
    {
        title: 'periodTime',
        type: '',
    },
];

export const unassignedRequestsHeaderMock = [
    {
        title: 'requestNo',
        type: 'id',
    },
    {
        title: 'requesterName',
        type: '',
    },
    {
        title: 'requestDate',
        type: 'date',
    },
    {
        title: 'requestTime',
        type: 'time',
    },
    {
        title: 'requesterAddress',
        type: '',
    },
    {
        title: 'requestCategory',
        type: '',
    },
    {
        title: 'price',
        type: '',
    },
    {
        title: 'status',
        type: 'status',
    },
];
export const fakeServiceRequestsTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(serviceRequestsTableMock);
};
export const fakeUnassignedRequestsTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(unassignedRequestsTableMock);
};
export const fakeSuccessTable = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(successTableMock);
};
export const fakeCraftsmenListMock = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(craftsmenListMock);
};
export const fakePermissionMock = (numUsers: number) => {
    return new Array(numUsers).fill(undefined).map(permissionMock);
};
