'use client';

import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ICON_SIZE = 24;

const socialLinks: { href: string; Icon: IconType }[] = [
  {
    href: 'https://www.linkedin.com/in/keanu-aloua/',
    Icon: FaLinkedin,
  },
  {
    href: 'https://github.com/keanu-a',
    Icon: FaGithub,
  },
  {
    href: 'https://www.instagram.com/al0uaaa',
    Icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-3 w-full hidden md:block">
      <div className="flex gap-2">
        {socialLinks.map(({ href, Icon }, index) => (
          <a
            href={href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-purple-900"
          >
            <Icon size={ICON_SIZE} />
          </a>
        ))}
      </div>
    </footer>
  );
}
