import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useInputRef } from './useInputRef';

export function useLogin() {
  const { inputRef, changeHandler } = useInputRef({ id: '', password: '' });
  const router = useRouter();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;
    if (id === '1234' && password === '1234') {
      sessionStorage.setItem('role', 'owner');
      router.push('/');
    }
  };
  return { inputRef, changeHandler, onSubmitHandler };
}
