import Link from 'next/link';

const navLinks: { text: string; href: string }[] = [
  {
    text: 'ABOUT',
    href: '/',
  },
  {
    text: 'PROJECTS',
    href: '/',
  },
  {
    text: 'RESUME',
    href: '/',
  },
  {
    text: 'CREATIVE',
    href: '/',
  },
];

export default function MainNav() {
  return (
    <div className="flex flex-col gap-2">
      {navLinks.map(({ text, href }, index) => (
        <Link href={href} key={index}>
          {text}
        </Link>
      ))}
    </div>
  );
}
