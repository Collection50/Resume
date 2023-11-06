import { Fragment } from 'react';
import * as S from './Contribution.styled';

type Resume = {
  resume: {
    id: number;
    title: string;
    date: string;
    contribution: string;
    contents: {
      subTitle: string;
      elements: string[];
    }[];
  };
};

export default function Contribution({ resume }: Resume) {
  const { title, date, contribution, contents } = resume;

  return (
    <>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitleContainer>
      <S.Contribution>{contribution}</S.Contribution>
      <S.ContentsContainer>
        {contents.map(({ subTitle, elements }) => (
          <Fragment key={subTitle}>
            <S.SubTitle>{subTitle}</S.SubTitle>
            <S.Ul>
              {elements.map((element) => (
                <S.Element key={element}>{element}</S.Element>
              ))}
            </S.Ul>
          </Fragment>
        ))}
      </S.ContentsContainer>
    </>
  );
}
