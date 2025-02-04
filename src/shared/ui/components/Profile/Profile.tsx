import { AuthLogoutForm } from '@/features/auth/ui/AuthLogoutForm'
import { FC } from 'react'

// type Props = {
//     name: string;
//     username: string;
//     email: string;
// }

export const Profile: FC = () => {
    return (
        <div>
            <h1>Profile</h1>
            <p>id: </p>
            <p>Username</p>
            Profile
            <AuthLogoutForm />
        </div>
    )
}