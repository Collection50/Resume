'use client';

import { ROUTES } from '@/constants';
import { usePathname } from 'next/navigation';
import * as S from './Nav.styled';

export default function Nav() {
  const pathname = usePathname();

  return (
    <S.NavContainer>
      <S.NavButtonContainer>
        {Object.values(ROUTES).map(({ path, title }: { path: string; title: string }) => (
          <S.NavButton key={path} href={path} selected={pathname === path}>
            {title}
          </S.NavButton>
        ))}
      </S.NavButtonContainer>
    </S.NavContainer>
  );
}
