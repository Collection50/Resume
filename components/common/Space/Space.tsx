'use client';

import * as S from './Space.styled';

export type Margin = {
  top?: number;
  bottom?: number;
};

export default function Space({ top = 0, bottom = 0 }: Margin) {
  return <S.Space top={top} bottom={bottom} />;
}
