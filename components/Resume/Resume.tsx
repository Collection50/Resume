import { EDUCATIONS, RESUMES } from '@/constants';
import { useAuth } from '@/hooks';
import TitleDivider from '../common/TitleDivider';
import Contribution from './Contribution';
import LineDivider from '../common/LineDivider';
import Education from './Education';
import Space from '../common/Space';

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

      <TitleDivider title="Education" />
      <LineDivider />
      {EDUCATIONS.map((education) => (
        <Education key={education.id} education={education} />
      ))}

      <Space bottom={100} />
    </>
  );
}
