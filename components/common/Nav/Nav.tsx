'use client';

import { ROUTES } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useState } from 'react';
import { Alert } from '@/util';
import * as S from './Nav.styled';

export default function Nav() {
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const login = sessionStorage.getItem('role');

    if (login === 'admin') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    sessionStorage.removeItem('role');
    Alert.success('로그아웃 되었습니다.');
    router.refresh();
    router.push('/');
  };

  return (
    <S.NavContainer>
      <S.NavButtonContainer>
        {Object.values(ROUTES).map(({ path, title }: { path: string; title: string }) => (
          <S.NavButton key={path} href={path} selected={pathname === path}>
            {title}
          </S.NavButton>
        ))}
        {isLogin ? (
          <S.NavButton href="/" onClick={logoutHandler}>
            Logout
          </S.NavButton>
        ) : (
          <S.NavButton href="/login" selected={pathname === '/login'}>
            Login
          </S.NavButton>
        )}
      </S.NavButtonContainer>
    </S.NavContainer>
  );
}
