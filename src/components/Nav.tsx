"use client";

import Link from "next/link";
import Time from "./Time";
import StaggerReelText from "./ui/StaggerReelText";
// import Hamburger from 'hamburger-react';

// const navLinks: { text: string; href: string }[] = [
//   {
//     text: 'ABOUT',
//     href: '/',
//   },
//   {
//     text: 'WORK',
//     href: '/',
//   },
//   {
//     text: 'CREATIVE',
//     href: '/',
//   },
//   {
//     text: 'PROJECTS',
//     href: '/projects',
//   },
// ];

// const HAMBURGER_ICON_SIZE = 24;

export default function Nav() {
  // const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="w-screen h-[14vh] fixed top-0 z-50 flex justify-between items-center backdrop-blur-md p-4 sm:px-8">
      {/* Name */}
      {/* <Link
        href="/"
        className="w-fit h-fit transition-all hover:text-orange-200"
      >
        <div className="text-3xl md:text-8xl leading-none tracking-tighter font-raleway">
          KE<span className="font-rouge-script text-4xl md:text-9xl">A</span>NU
        </div>
      </Link> */}

      <div>
        <p className="flex items-center space-x-2 text-xs font-semibold sm:text-base">
          HERE: LAS VEGAS
        </p>
        <p className="text-xs font-semibold sm:text-base">
          NOW: <Time />
        </p>
        <Link
          href="/"
          className="w-fit h-fit transition-all hover:text-orange-200"
        >
          <StaggerReelText
            text="KEANU"
            initialTextColor="text-white"
            className="text-3xl md:text-5xl leading-none tracking-tighter font-raleway font-semibold"
          />
        </Link>
      </div>

      {/* <div>
        <Link
          href="/about"
          className="font-semibold transition-all hover:text-orange-200"
        >
          <StaggerReelText text="ABOUT" initialTextColor="text-white" />
        </Link>
      </div> */}

      {/* Mobile Nav Menu */}
      {/* <div className="sm:hidden">
        <div className="rounded-full shadow-2xl transition-all hover:text-orange-200">
          <Hamburger
            size={HAMBURGER_ICON_SIZE}
            onToggle={() => setNavActive((prev) => !prev)}
          />
        </div>

        {navActive && <div className="bg-black fixed">Test Nav</div>}
      </div> */}

      {/* Desktop Nav */}
      {/* <div className="hidden space-x-4 sm:flex">
        {navLinks.map(({ text, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-semibold transition-all hover:text-orange-200"
          >
            {text}
          </Link>
        ))}
      </div> */}
    </header>
  );
}
