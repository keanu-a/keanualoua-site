import type { Metadata } from 'next';
import { Raleway, Rouge_Script } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
        className={`${rougeScript.variable} ${ralewaySans.variable} antialiased px-4`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
