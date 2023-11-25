import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import Link from 'next/link';
import * as S from './Slider.styled';

export default function Slider({ paths }: { paths: { name: string; path: string; link: string }[] }) {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const imageIndex = wrap(0, paths.length, visible);

  const clickNext = () => {
    setBack(false);
    setVisible((prev) => (prev === paths.length - 1 ? paths.length - 1 : prev + 1));
  };
  const clickPrev = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <S.Wrapper>
      <S.SlideWrap>
        <AnimatePresence custom={back}>
          <S.Title>{paths[imageIndex].name}</S.Title>
          <Link href={paths[imageIndex].link} target="_blank">
            <S.Box
              custom={back}
              variants={S.boxVariants}
              src={paths[imageIndex].path}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            />
          </Link>
        </AnimatePresence>
      </S.SlideWrap>
      <S.ButtonContainer>
        <S.Button type="button" onClick={clickPrev}>
          이전
        </S.Button>
        <S.Button type="button" onClick={clickNext}>
          다음
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
