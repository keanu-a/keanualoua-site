import Link from 'next/link';

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
];

export default function MainNav() {
  return (
    <nav className="hidden gap-8 fixed right-12 top-20 items-end sm:flex">
      {navLinks.map(({ text, href }, index) => (
        <Link
          href={href}
          key={index}
          className="font-semibold transition-all hover:text-orange-200"
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}
