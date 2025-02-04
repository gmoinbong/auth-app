import { AuthLoginForm } from '@/features/auth/ui/AuthLoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const cookieStore = cookies()
  const isLoggedIn = (await cookieStore).get('auth_token')

  if (isLoggedIn) {
    redirect('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <AuthLoginForm />
    </div>
  )
}