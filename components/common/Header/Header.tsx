'use client';

import * as CommonS from '@/components/Landing/Landing.styled';
import * as S from './Header.styled';

export default function Header() {
  return (
    <S.Headers>
      <S.Header>
        <CommonS.Text>
          <CommonS.Hilight $color="#fd853a">주도적인 개발자</CommonS.Hilight> 김성민입니다.
        </CommonS.Text>
      </S.Header>
      <S.Text>
        <div>
          사용자와 직접적으로 대면하는 제품을 만드는것에 매력을 느껴 웹 개발을 시작했습니다. 지식공유와 문서화를
          좋아합니다.
        </div>
        <div>프로젝트에 필요한 기술을 학습하고 팀원들과 함께 공유합니다.</div>
        <div>트러블 슈팅 관리를 위해 템플릿을 제공하여 일관된 문서를 작성합니다.</div>
        <div>리뷰하기 편한 PR을 지향합니다.</div>
      </S.Text>
    </S.Headers>
  );
}