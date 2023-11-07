'use client';

import { AWARDS } from '@/constants';
import TitleDivider from '../TitleDivider';
import LineDvider from '../common/LineDvider';
import Award from './Award';

export default function Awards() {
  return (
    <>
      <TitleDivider title="수상 경력" />
      {AWARDS.map((award) => (
        <>
          <Award award={award} />
          <LineDvider key={award.id} />
        </>
      ))}
    </>
  );
}