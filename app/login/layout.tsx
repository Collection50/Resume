import { StyledMain, StyledSection } from '@/styles/layout-style';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Awards',
  description: 'Welcome to My land 🖥️',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <StyledSection>{children}</StyledSection>
    </StyledMain>
  );
}
