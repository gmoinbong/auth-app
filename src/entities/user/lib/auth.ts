import { cookies } from 'next/headers'

export const getAuthToken = async (): Promise<string | null> => {
    return (await cookies()).get('auth_token')?.value || null
}

export const isLoggedIn = async (): Promise<boolean> => {
    return !!(await getAuthToken())
}
