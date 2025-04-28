'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

const navLinks = [
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'projects',
    href: '/projects',
  },
];

export default function MobileNav({
  className,
  closeNav,
}: {
  className?: string;
  closeNav: () => void;
}) {
  return (
    <nav className={cn(className)}>
      {navLinks.map((link, idx) => (
        <motion.p key={idx} className="overflow-hidden">
          <Link
            href={link.href}
            onClick={closeNav}
            className="uppercase text-4xl font-bold"
          >
            {link.title}
          </Link>
        </motion.p>
      ))}
    </nav>
  );
}
