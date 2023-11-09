import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useAuth() {
  const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('role') : null;
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  });
}
