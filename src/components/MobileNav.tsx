'use client';

import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const HAMBURGER_ICON_SIZE = 24;

export default function MobileNav() {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <div className="fixed right-6 top-12 sm:hidden">
      <div className="rounded-full shadow-2xl">
        <Hamburger
          size={HAMBURGER_ICON_SIZE}
          onToggle={() => setNavActive((prev) => !prev)}
        />
      </div>

      {navActive && <div className="bg-black fixed">Test Nav</div>}
    </div>
  );
}
