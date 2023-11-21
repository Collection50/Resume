'use client';

import { AWARDS } from '@/constants';
import { useAuth } from '@/hooks';
import TitleDivider from '../common/TitleDivider';
import LineDivider from '../common/LineDivider';
import Award from './Award';

export default function Awards() {
  useAuth();

  return (
    <>
      <TitleDivider title="수상 경력" />
      {AWARDS.map((award) => (
        <>
          <Award award={award} />
          <LineDivider key={award.id} />
        </>
      ))}
    </>
  );
}
