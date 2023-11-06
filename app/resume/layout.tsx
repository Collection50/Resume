import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Welcome to My land 🖥️',
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
