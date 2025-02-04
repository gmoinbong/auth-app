import { useRouter } from "next/navigation"

export const useLogout = () => {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/logout', { method: 'POST' })

            if (response.ok) {
                router.push('/api/auth/login')
                router.refresh()
            }
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return { handleLogout }
}