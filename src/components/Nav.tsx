'use client';

import Link from 'next/link';
import Name from './Name';
import MobileNav from './MobileNav';

const navLinks: { text: string; href: string }[] = [
  {
    text: 'ABOUT',
    href: '/',
  },
  {
    text: 'WORK',
    href: '/',
  },
  {
    text: 'CREATIVE',
    href: '/',
  },
  {
    text: 'PROJECTS',
    href: '/projects',
  },
];

export default function Nav() {
  return (
    <header className="flex justify-between items-center fixed top-12 z-50">
      <Link
        href="/"
        className="w-fit h-fit transition-all hover:text-orange-200"
      >
        <Name />
      </Link>

      <MobileNav />

      <div className="">
        {navLinks.map(({ text, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-semibold transition-all hover:text-orange-200"
          >
            {text}
          </Link>
        ))}
      </div>
    </header>
  );
}
