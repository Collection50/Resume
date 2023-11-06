import * as CommonS from '@/components/Landing/Landing.styled';
import { RESUMES } from '@/constants';
import * as S from './Resume.styled';
import TitleDivider from '../TitleDivider';
import Contribution from './Contribution';
import LineDvider from '../common/LineDvider';

export default function Resume() {
  return (
    <S.MainContainer>
      <S.SectionContainer>
        <S.Headers>
          <S.Header>
            <CommonS.Text $hilight>주도적인 개발자</CommonS.Text>
            <CommonS.Text>김성민입니다.</CommonS.Text>
          </S.Header>
          <S.Text>
            <div>사용자와 직접적으로 대면하는 제품을 만드는것에 매력을 느껴</div>
            <div>웹 개발을 시작했습니다. 지식공유와 문서화를 좋아합니다. </div>
            <div>프로젝트에 필요한 기술을 학습하고 팀원들과 함께 공유합니다.</div>
            <div>
              트러블 슈팅 관리를 위해 템플릿을 제공하여 일관된 문서를 작성합니다. 또한, 리뷰하기 편한 PR을 지향합니다.
            </div>
          </S.Text>
        </S.Headers>
        <TitleDivider title="Work Experience" />
        {RESUMES.map((resume) => (
          <>
            <Contribution key={resume.id} resume={resume} />
            <LineDvider />
          </>
        ))}
      </S.SectionContainer>
    </S.MainContainer>
  );
}
