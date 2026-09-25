import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const bodyFont = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });
const displayFont = Barlow_Condensed({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Minhaj Gouda — Operations & Live Events Leader',
  description: 'Minhaj Gouda is an operations and live events leader with 15+ years of experience, leading business growth, company-wide operations and delivery across the Middle East and Asia.',
  metadataBase: new URL('https://minhajgouda.netlify.app'),
  openGraph: {
    title: 'Minhaj Gouda — Operations & Live Events Leader',
    description: 'Building growth. Leading operations. Delivering at scale.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
