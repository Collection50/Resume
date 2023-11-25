import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { Alert } from '@/util';
import { useInputRef } from './useInputRef';

export function useLogin() {
  const { inputRef, changeHandler } = useInputRef({ id: '', password: '' });
  const router = useRouter();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, password } = inputRef.current;

    if (id === '1234' && password === '1234') {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('role', 'admin');
        Alert.success('로그인 완료되었습니다.');
        router.push('/');
        return;
      }
    }
    Alert.error('아이디, 비밀번호가\n일치하지 않습니다.');
  };
  return { inputRef, changeHandler, onSubmitHandler };
}
