import { AuthLogoutForm } from '@/features/auth/ui/AuthLogoutForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const token = (await cookies()).get('auth_token')?.value

  if (!token) {
    redirect('/api/auth/login')
  }


  return (
    <div>
      <h1>Welcome </h1>
      <AuthLogoutForm />
    </div>
  )
}