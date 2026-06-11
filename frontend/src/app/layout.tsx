import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Litigation Learning & Case Review Management System',
    template: '%s | Litigation Platform',
  },
  description:
    'Master litigation through comprehensive case studies, interactive quizzes, and AI-powered analysis. Study 35+ litigation types with 175+ landmark cases.',
  keywords: [
    'litigation',
    'law',
    'legal education',
    'case study',
    'legal research',
    'court cases',
    'legal training',
  ],
  authors: [{ name: 'Litigation Learning Platform' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://litigationplatform.com',
    title: 'Litigation Learning Platform',
    description: 'Master Litigation. Study Real Cases. Excel in Law.',
    siteName: 'Litigation Learning Platform',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
