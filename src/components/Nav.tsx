'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import Time from './Time';
import StaggerReelText from './ui/StaggerReelText';
import { cn } from '@/utils/cn';
import MobileNav from './MobileNav';

// const navLinks: { text: string; href: string }[] = [
//   {
//     text: 'ABOUT',
//     href: '/',
//   },
//   {
//     text: 'WORK',
//     href: '/',
//   },
//   {
//     text: 'CREATIVE',
//     href: '/',
//   },
//   {
//     text: 'PROJECTS',
//     href: '/projects',
//   },
// ];

const HAMBURGER_ICON_SIZE = 24;

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header
      className={cn(
        'relative w-screen fixed top-0 z-50 flex justify-between items-center backdrop-blur-md p-4 transition-all duration-500 sm:px-8',
        navActive ? 'h-screen' : 'h-[14vh]'
      )}
    >
      <div className="absolute top-4 left-4">
        <p className="flex items-center space-x-2 text-xs font-semibold sm:text-base">
          HERE: LAS VEGAS
        </p>
        <p className="text-xs font-semibold sm:text-base">
          NOW: <Time />
        </p>
        <Link
          href="/"
          className="w-fit h-fit transition-all hover:text-orange-200"
          onClick={() => setNavActive(false)}
        >
          <StaggerReelText
            text="KEANU"
            initialTextColor="text-white"
            className="text-3xl md:text-5xl leading-none tracking-tighter font-raleway font-semibold"
          />
        </Link>
      </div>

      {/* Mobile Nav Menu */}
      <div className="sm:hidden">
        <div className="absolute top-4 right-4 rounded-full shadow-2xl transition-all hover:text-orange-200">
          <Hamburger
            size={HAMBURGER_ICON_SIZE}
            toggled={navActive}
            onToggle={() => setNavActive((prev) => !prev)}
          />
        </div>

        {navActive && <MobileNav closeNav={() => setNavActive(false)} />}
      </div>

      {/* Desktop Nav */}
      {/* <div className="hidden space-x-4 sm:flex">
        {navLinks.map(({ text, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-semibold transition-all hover:text-orange-200"
          >
            {text}
          </Link>
        ))}
      </div> */}
    </header>
  );
}
