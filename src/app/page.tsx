import { getAuthToken } from '@/entities/user/lib/auth';
import { UserPage } from '@/entities/user/ui';
import { LogoutPage } from '@/entities/user/ui/LogoutPage';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const token = await getAuthToken();

  if (!token) {
    redirect('/login');
    return null;
  }

  try {
    return (<div className='flex flex-col align-middle items-center justify-center h-screen'>
      <UserPage token={token} />
      <LogoutPage />
    </div>)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    redirect('/login');
    return null;
  }
}
