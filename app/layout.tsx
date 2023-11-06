import type { Metadata } from 'next';
import Nav from '@/components/common/Nav';
import { Noto_Sans_KR } from 'next/font/google';
import StyledProvider from './lib/StyledProvider';

const NOTO_SANS_KR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: '김성민의 이력서입니다', template: '%s · 김성민의 이력서' },
  description: 'Welcome to My land 🖥️',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NOTO_SANS_KR.className}>
        <StyledProvider>
          <Nav />
          {children}
        </StyledProvider>
      </body>
    </html>
  );
}
