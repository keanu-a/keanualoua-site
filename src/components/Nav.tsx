'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import Time from './Time';
import StaggerReelText from './ui/StaggerReelText';
import { cn } from '@/utils/cn';
import MobileNav from './MobileNav';

const navLinks: { text: string; href: string }[] = [
  {
    text: 'ABOUT',
    href: '/about',
  },
  // {
  //   text: 'WORK',
  //   href: '/',
  // },
  // {
  //   text: 'CREATIVE',
  //   href: '/',
  // },
  // {
  //   text: 'PROJECTS',
  //   href: '/projects',
  // },
];

const HAMBURGER_ICON_SIZE = 24;

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <div
        className={cn(
          'relative flex justify-between items-center transition-all duration-500',
          navActive ? 'h-screen' : 'h-[9vh]'
        )}
      >
        {/* Mobile Nav Menu */}
        {navActive && (
          <MobileNav
            className="h-full justify-center items-center flex px-4"
            closeNav={() => setNavActive(false)}
          />
        )}

        {/* Left Section */}
        <div className="absolute top-2 left-2">
          <p className="text-xs sm:text-sm">HERE: LAS VEGAS</p>
          <p className="text-xs sm:text-sm">
            NOW: <Time />
          </p>
          <Link
            href="/"
            className="block w-fit transition-all hover:text-orange-200"
            onClick={() => setNavActive(false)}
          >
            <StaggerReelText
              text="KEANU"
              initialTextColor="text-white"
              className="text-3xl leading-none tracking-tighter font-raleway font-bold"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="absolute top-4 right-0 sm:hidden">
          {/* Mobile Hamburger */}
          <div className="rounded-full shadow-2xl transition-all hover:text-orange-200">
            <Hamburger
              size={HAMBURGER_ICON_SIZE}
              toggled={navActive}
              onToggle={() => setNavActive((prev) => !prev)}
            />
          </div>
        </div>

        <div className="hidden absolute right-4 sm:flex space-x-4">
          {/* Desktop Nav Links */}
          {navLinks.map(({ text, href }, index) => (
            <Link href={href} key={index}>
              <StaggerReelText
                text={text}
                initialTextColor="text-white"
                className="text-lg leading-none tracking-tighter font-raleway font-bold"
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
