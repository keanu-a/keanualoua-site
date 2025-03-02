'use client';

import Link from 'next/link';

export default function Name() {
  return (
    <Link
      href="/"
      className="text-8xl tracking-tighter cursor-pointer w-fit font-raleway"
    >
      KE<span className="font-rouge-script text-9xl">A</span>NU
    </Link>
  );
}
