import { List, Text } from '@Browse';

const card = (item) => {
    return <>
        <div>{item.username}</div>
        <div>{item.dispalyName}</div>
    </>
}

const UserBrowser = () => {
    return <List
        entityType='user'
        card={card}
    />
}

export default UserBrowser;