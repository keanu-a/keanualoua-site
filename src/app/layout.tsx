import type { Metadata } from 'next';
import { Raleway, Rouge_Script } from 'next/font/google';
import Gradient from '@/components/Gradient';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const ralewaySans = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

const rougeScript = Rouge_Script({
  weight: '400',
  variable: '--font-rouge-script',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Keanu Aloua',
  description:
    'My portfolio showcasing frontend, backend, and embedded systems work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rougeScript.variable} ${ralewaySans.variable} antialiased`}
      >
        <Gradient />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
