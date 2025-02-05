import { useRouter } from "next/navigation"

export const useLogout = () => {
    const router = useRouter()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

    const handleLogout = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/auth/logout`, { method: 'POST' })

            if (response.ok) {
                router.push('/api/login')
                router.refresh()
            }
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return { handleLogout }
}