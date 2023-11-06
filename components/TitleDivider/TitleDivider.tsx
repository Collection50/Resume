import LineDvider from '../common/LineDvider';
import * as S from './TitleDivider.styled';

export default function TitleDivider({ title }: { title: string }) {
  return (
    <S.TitleContainer>
      <S.Title>{title}</S.Title>
      <LineDvider />
    </S.TitleContainer>
  );
}
