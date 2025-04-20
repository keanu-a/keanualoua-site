'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const navLinks = [
  {
    title: 'about',
    href: '/about',
  },
];

export default function MobileNav({ closeNav }: { closeNav: () => void }) {
  return (
    <nav>
      {navLinks.map((link, idx) => (
        <motion.p key={idx} className="overflow-hidden">
          <Link href={link.href} onClick={closeNav} className="uppercase">
            {link.title}
          </Link>
        </motion.p>
      ))}
    </nav>
  );
}
