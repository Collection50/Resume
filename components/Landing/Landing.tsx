'use client';

import * as S from './Landing.styled';

function Landing() {
  return (
    <S.LandingContainer>
      <S.Text>안녕하세요</S.Text>
      <S.Text>
        <S.Hilight $color="#fd853a">주도적인 개발자</S.Hilight>
      </S.Text>
      <S.Text>김성민입니다.</S.Text>
      <S.HalfCircle />
    </S.LandingContainer>
  );
}

export default Landing;
