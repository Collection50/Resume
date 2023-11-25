import { EDUCATIONS, RESUMES, projectPaths, bookPaths } from '@/constants';
import { useAuth } from '@/hooks';
import TitleDivider from '../common/TitleDivider';
import Contribution from './Contribution';
import LineDivider from '../common/LineDivider';
import Education from './Education';
import Space from '../common/Space';
import Slider from './Slider';
import Clip from './Clip';

export default function Resume() {
  useAuth();

  return (
    <>
      <TitleDivider title="Work Experience" />
      <LineDivider />
      {RESUMES.map((resume) => (
        <Contribution key={resume.id} resume={resume} />
      ))}

      <Space top={60} />

      <TitleDivider title="참여 프로젝트" />
      <Slider paths={projectPaths} />

      <Space top={60} />

      <TitleDivider title="읽은 책 목록" />
      <Clip paths={bookPaths} />

      <Space top={60} />

      <TitleDivider title="Education" />
      <LineDivider />
      {EDUCATIONS.map((education) => (
        <Education key={education.id} education={education} />
      ))}

      <Space bottom={100} />
    </>
  );
}
