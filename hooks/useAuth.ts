import { useRouter } from 'next/navigation';

export function useAuth() {
  const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('role') : null;

  const router = useRouter();

  if (!accessToken) {
    router.push('/login');
  }
}
