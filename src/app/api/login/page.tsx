import { isLoggedIn } from '@/entities/user/lib/auth'
import { Login } from '@/entities/user/ui'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  if (await isLoggedIn()) {
    redirect('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <Login />
    </div>
  )
}