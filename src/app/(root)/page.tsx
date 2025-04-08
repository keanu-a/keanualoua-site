"use client";

import SocialLinks from "@/components/SocialLinks";
// import GlowBox from '@/components/GlowBox';
// import ProjectCard from '@/components/ProjectCard';
import { Project } from "@/types/project";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HiCode, HiLink } from "react-icons/hi";
import Link from "next/link";
import Footer from "@/components/Footer";
import StaggerReelText from "@/components/ui/StaggerReelText";

const projects: Project[] = [
  {
    projectName: "Lambda Psi Rho",
    year: 2025,
    bgImage: "/",
    techStack: ["TypeScript", "React.js", "Shadcn"],
    desc: "The website for a fraternity that seeks to bring out the excellence among men with three pillars: Leadership, Pride, and Respect",
    github: "https://github.com/keanu-a/lpr-website",
    link: "https://www.lambdapsirho.org/",
  },
  {
    projectName: "Easy Tagalog",
    year: 2024,
    bgImage: "/projects/easytagalog.png",
    techStack: [
      "TypeScript",
      "React.js",
      "Shadcn",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    desc: "Learning Tagalog has never been easier with vocabulary, grammar, and even Filipino fulture",
    github: "https://github.com/Easy-Tagalog",
    link: "https://easytagalog.com/",
  },
  {
    projectName: "The Las Vegas K-9 Foundation",
    year: 2023,
    bgImage: "/projects/lvk9f.png",
    techStack: ["TypeScript", "React.js", "Stripe"],
    desc: "Uplifting all dogs and owners to grow and thrive, and to make Las Vegas a hub for canine events",
    github: "https://github.com/keanu-a/the-lvk9f",
    link: "https://www.lasvegask9foundation.org",
  },
  {
    projectName: "Muver",
    year: 2023,
    bgImage: "/projects/muver.png",
    techStack: ["TypeScript", "React.js", "Express.js", "MongoDB"],
    desc: "Need help with moving? Hire someone easily. Need quick money? Become a mover!",
    github: "https://github.com/Uber-for-Moving-Trucks/muver",
  },
  {
    projectName: "Routine Tracker",
    year: 2023,
    bgImage: "/projects/routine-tracker.png",
    techStack: ["TypeScript", "React.js"],
    desc: "Track habits to create routines that you will never forget with reminders",
    github: "https://github.com/keanu-a/routine-tracker",
    link: "https://simple-routine-tracker.vercel.app/",
  },
  {
    projectName: "Omnifood",
    year: 2022,
    bgImage: "/projects/omnifood.png",
    techStack: ["JavaScript"],
    desc: "An online course project that showed real world UI/UX and functionality to deliver a beautiful landing page",
    github: "https://github.com/keanu-a/web-dev/tree/main/Omnifood",
    link: "https://omnifood-keanu.netlify.app/",
  },
];

export default function Home() {
  return (
    <div className="font-raleway w-full px-5 max-w-[600px] mx-auto flex flex-col gap-24">
      <Image src="/him.jpg" width={600} height={600} alt="Keanu" />

      {/* SMALL ABOUT */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-10 text-5xl font-bold md:text-7xl md:gap-12">
          <p>23 YEARS OLD</p>
          <p className="flex flex-col">
            <span>SOFTWARE</span>
            <span className="text-right">ENGINEER</span>
          </p>

          <p className="flex flex-col">
            <span>GRADUATED</span>
            <span className="flex justify-between">
              <span className="ml-12 md:ml-28">FROM</span>
              <span>THE</span>
            </span>
            <span className="flex flex-col">
              <span>UNIVERSITY OF NEVADA,</span>
              <StaggerReelText
                text="LAS VEGAS"
                initialTextColor="text-white"
                hoveredTextColor="text-red-500"
                className="text-right"
              />
            </span>
          </p>
          <p className="flex flex-col">
            <span className="w-full text-center">B.S. IN</span>
            <span>COMPUTER</span>
            <span className="text-right">SCIENCE</span>
          </p>
          <div className="space-y-2">
            <p className="text-lg md:text-xl font-normal">
              From the browser to the backend to the bits and bytes, I make it
              all work.
            </p>
            <p className="text-lg md:text-xl font-normal">
              I just want to create software that is impactful to people all
              over the world. My focus is in full stack development but always
              open to learn more.
            </p>
          </div>
        </div>
      </section>

      <MdKeyboardDoubleArrowDown size={100} />

      <section>
        {/* Medium screen size project display */}
        <div className="flex-col gap-4 md:flex">
          <ul className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <li key={index}>
                <h1 className="text-3xl font-bold uppercase">
                  {project.projectName}
                </h1>
                <p>{project.desc}</p>
                <div className="flex gap-8 md:gap-4 py-2">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="transition-all hover:text-yellow-200"
                    >
                      <HiLink size={20} />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="transition-all hover:text-green-200"
                    >
                      <HiCode size={20} />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />

      <SocialLinks />
    </div>
  );
}
