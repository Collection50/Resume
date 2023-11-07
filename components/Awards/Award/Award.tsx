import Image from 'next/image';
import * as S from './Award.styled';

type AwardType = {
  award: {
    id: number;
    title: string;
    date: string;
    name: string;
    images: {
      src: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
};

export default function Award({ award }: AwardType) {
  const { title, date, name, images } = award;

  return (
    <S.AwardsContainer>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitleContainer>
      <S.Name>{name}</S.Name>
      <S.ImagesContainer>
        {images.map(({ src, width, height, alt }) => (
          <Image key={src} src={src} width={width} height={height} alt={alt} />
        ))}
      </S.ImagesContainer>
    </S.AwardsContainer>
  );
}
