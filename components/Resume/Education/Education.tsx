import * as S from '../Contribution/Contribution.styled';

type EducationType = {
  education: {
    id: number;
    title: string;
    date: string;
    grade: string;
  };
};

export default function Education({ education }: EducationType) {
  const { title, date, grade } = education;

  return (
    <>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitleContainer>
      <S.Contribution>학점: {grade}</S.Contribution>
    </>
  );
}
