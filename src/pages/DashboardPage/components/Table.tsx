/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createStyles, Table, ActionIcon } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

import Status from '../../../components/Status';

type Props = {
    headers: {
        title: string;
        type: string;
    }[];
    link: string;
    body?: any;
};
const RequestTable = ({ headers, body, link }: Props) => {
    const { classes } = useStyles();
    const navigator = useNavigate();
    const displayHeaders = headers.map(({ title }) => title.replace(/([a-z])([A-Z])/g, '$1 $2'));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const rows = body.map((element: any, index: number) => (
        <tr className={classes.tableRow} key={index}>
            <>
                {headers.map(({ title, type }, index) =>
                    type === 'date' ? (
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        <td key={index}>{new Date(element[title]).toDateString()}</td>
                    ) : type === 'time' ? (
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        <td key={index}>{new Date(element[title]).toLocaleTimeString()}</td>
                    ) : type === 'status' ? (
                        <td key={index}>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
                            <Status status={element[title]} />
                        </td>
                    ) : (
                        <td key={index}>{element[title]}</td>
                    ),
                )}
                <td>
                    {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions*/}
                    <ActionIcon
                        variant="filled"
                        color="main"
                        radius="xl"
                        onClick={() => navigator(`${link}/${element['requestNo']}`)}
                    >
                        <IconChevronRight size={20} />
                    </ActionIcon>
                </td>
            </>
        </tr>
    ));

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table verticalSpacing="md" className={classes.tableBody}>
                <thead className={classes.tableHeader}>
                    <tr>
                        {displayHeaders.map((value, index) => (
                            <th key={index}>{value}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
};

export default RequestTable;

const useStyles = createStyles((theme) => ({
    tableBody: {
        marginTop: 16,
        backgroundColor: theme.colors.dark[4],
        borderRadius: 16,
        boxShadow: '0 3px 12px #00000021',
    },
    tableHeader: {
        backgroundColor: theme.colors.main[7],
        padding: '0 16px',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        '& tr th': {
            color: '#fff !important',
        },
    },
    tableRow: {
        borderBottom: '#CACACA',
    },
}));
