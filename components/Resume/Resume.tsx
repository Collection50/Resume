import { EDUCATIONS, RESUMES } from '@/constants';
import { useAuth } from '@/hooks';
import TitleDivider from '../TitleDivider';
import Contribution from './Contribution';
import LineDvider from '../common/LineDvider';
import Education from './Education';
import Space from '../common/Space';

export default function Resume() {
  useAuth();

  return (
    <>
      <TitleDivider title="Work Experience" />
      <LineDvider />
      {RESUMES.map((resume) => (
        <Contribution key={resume.id} resume={resume} />
      ))}

      <Space top={60} />

      <TitleDivider title="Education" />
      <LineDvider />
      {EDUCATIONS.map((education) => (
        <Education key={education.id} education={education} />
      ))}

      <Space bottom={100} />
    </>
  );
}
