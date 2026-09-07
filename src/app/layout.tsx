import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minhaj Gouda — Operations & Live Events Leader',
  description: 'Director of Operations and live events leader delivering complex projects and building high-performing operations across the Middle East and Asia.',
  metadataBase: new URL('https://minhajgouda.netlify.app'),
  openGraph: {
    title: 'Minhaj Gouda — Operations & Live Events Leader',
    description: 'Building businesses. Leading operations. Delivering experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
