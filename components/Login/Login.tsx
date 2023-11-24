'use client';

import { useLogin } from '@/hooks';
import { LOGIN_FORMAT } from '@/constants/format';
import { useRouter } from 'next/navigation';
import * as S from './Login.styled';

export default function UserLoginForm() {
  const { changeHandler, onSubmitHandler } = useLogin();
  const router = useRouter();
  const accessToken = typeof window !== 'undefined' ? sessionStorage.getItem('role') : null;

  if (accessToken) {
    router.push('/');
  }

  return (
    <>
      <S.Greeting>환영합니다 !</S.Greeting>
      <S.FormContainer>
        <S.Form onSubmit={onSubmitHandler}>
          <S.InputSection>
            {LOGIN_FORMAT.map(({ key, placeholder }) => (
              <S.InputStyle
                type={key === 'id' ? 'text' : 'password'}
                key={key}
                onChange={(e) => changeHandler(e, key)}
                placeholder={placeholder}
                autoComplete={key === 'password' ? 'off' : 'on'}
              />
            ))}
          </S.InputSection>
          <S.Button>로그인</S.Button>
        </S.Form>
      </S.FormContainer>
    </>
  );
}
