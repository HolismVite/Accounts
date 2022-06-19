import { List, ListAction, Text, post, app } from '@List'
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const listActions = () => {
    const syncUsers = ({
        error,
        reloadList,
        setProgress,
        success,
    }) => {
        setProgress(true);
        post('/User/sync').then(data => {
            reloadList();
            setProgress(false);
            success('Users are synced');
        }, e => {
            setProgress(false);
            error(e);
        })
    };

    return <>
        <ListAction
            title='Sync'
            icon={SyncAltIcon}
            click={(params) => syncUsers(params)} />
    </>
}

const filters = <>
    <Text
        column='FirstName'
        placeholder='Name'
    />
</>

const sorts = [
    {
        column: 'Name',
        direction: 'asc',
        caption: 'Name, A-Z'
    },
    {
        column: 'Name',
        direction: 'desc',
        caption: 'Name, Z-A'
    }
]

const headers =
    <>
        <th>Guid</th>
        <th>Display Name</th>
        <th>User name</th>
        <th>Email</th>
        <th>Last Sync Date</th>
    </>

const row = (item) => {
    return <>
        <td>{item.guid}</td>
        <td>{item.displayName}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.lastSyncDate}</td>
    </>
}

const Users = () => {
    return <List
        title='Users'
        entityType='user'
        headers={headers}
        row={row}
        filters={filters}
        sorts={sorts}
        listActions={listActions}
    />
};

export default Users;