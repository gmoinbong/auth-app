import { isLoggedIn } from '@/entities/user/lib/auth'
import { LoginPage as Login } from '@/entities/user/ui'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  if (await isLoggedIn()) {
    redirect('/')
  }

  return (
      <Login />
  )
}