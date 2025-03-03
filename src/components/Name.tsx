'use client';

import Link from 'next/link';

export default function Name() {
  return (
    <Link
      href="/"
      className="text-[12rem] leading-none tracking-tighter cursor-pointer w-fit font-raleway transition-all hover:text-purple-900"
    >
      KE<span className="font-rouge-script text-[14rem]">A</span>NU
    </Link>
  );
}
