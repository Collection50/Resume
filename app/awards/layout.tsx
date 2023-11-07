import { StyledMain, StyledSection } from '@/styles/layout-style';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'Awards',
  description: 'Welcome to My land 🖥️',
};

export default function AwardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <Header />
      <StyledSection>{children}</StyledSection>
    </StyledMain>
  );
}
