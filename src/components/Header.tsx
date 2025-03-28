'use client';

import Link from 'next/link';
import Name from './Name';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

export default function Header() {
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
        <MainNav />
      </div>
    </header>
  );
}
