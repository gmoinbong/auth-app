import { FC } from 'react'

type Props = {
    username?: string;
    id?: string;
}

export const Profile: FC<Props> = ({ username, id }) => {
    return (
        <div>
            <h1>Profile</h1>
            <p>{id} </p>
            <p>{username}</p>
        </div>
    )
}