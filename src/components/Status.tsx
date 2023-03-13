import { Badge } from '@mantine/core';

type Props = {
    status: statusType | any;
};
enum statusType {
    pending = 'Pending',
    success = 'Success',
}

const Status = ({ status }: Props) => {
    return (
        <Badge size="lg" radius="sm" variant="filled" color={statusType.success === status ? 'green' : 'main'}>
            {statusType.success === status ? statusType.success : statusType.pending}
        </Badge>
    );
};

export default Status;
