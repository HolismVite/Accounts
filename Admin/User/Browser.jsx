import { Text } from '@Browse';

const card = (item) => {
    return <>
        <div>{item.username}</div>
        <div>{item.dispalyName}</div>
    </>
}

const UserBrowser = () => {
    return <div>user browser</div>
}

export default UserBrowser;