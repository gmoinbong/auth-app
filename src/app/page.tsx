import { getAuthToken } from '@/entities/user/lib/auth';
import { User } from '@/entities/user/ui';
import { Logout } from '@/entities/user/ui/Logout';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const token = await getAuthToken();

  if (!token) {
    redirect('/login');
    return null;
  }

  try {
    return (<>
      <User token={token} />
      <Logout />
    </>)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    redirect('/api/login');
    return null;
  }
}
