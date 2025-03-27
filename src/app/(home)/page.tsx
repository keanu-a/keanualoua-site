"use client";

import Footer from "@/components/Footer";
import GlowBox from "@/components/GlowBox";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const LOCATION = "Las Vegas";

const projects: Project[] = [
  {
    projectName: "Lambda Psi Rho",
    year: 2025,
    bgImage: "/",
    techStack: ["TypeScript", "React.js", "Shadcn"],
    desc: "The website for a fraternity that seeks to bring out the excellence among men with three pillars: Leadership, Pride, and Respect",
    github: "https://github.com/keanu-a/lpr-website",
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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  const handleProjectHover = (bgImage: string, index: number) => {
    setHoveredProject(bgImage);
    setSelectedProjectIndex(index);
  };

  return (
    <div className="relative px-6 font-raleway mb-32 md:mb-0">
      <Gradient />
      <Header />

      <div className="flex flex-col gap-4 mt-48 max-w-64 md:max-w-[36rem]">
        <p>
          Im a 23 year old software engineer who graduated from the University
          of Nevada, Las Vegas with a B.S. in Computer Science.
        </p>
        <p>
          From the browser to the backend to the bits and bytes—I make it all
          work.
        </p>
        <div className="flex gap-2">
          <FaLocationDot />
          <p>{LOCATION}</p>
        </div>
      </div>

      {/* Medium screen size project display */}
      <div className="hidden mt-10 flex-col gap-4 md:flex">
        <h1 className="opacity-60 relative">
          <span className="font-rouge-script text-2xl">P</span>
          ROJECTS
        </h1>
        <ul className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`flex w-fit items-center group cursor-pointer text-xl font-medium opacity-20 transition-all hover:opacity-100 ${
                index === selectedProjectIndex && "opacity-100"
              } md:text-3xl`}
              onMouseEnter={() => handleProjectHover(project.bgImage, index)}
            >
              {/* Left line */}
              <span
                className={`w-[2px] h-0 bg-white transition-all group-hover:h-8 ${
                  index === selectedProjectIndex && "h-8"
                }`}
              />

              {/* Project name */}
              <span
                className={`transition-all group-hover:text-white ${
                  index === selectedProjectIndex &&
                  "-translate-y-1 text-white md:translate-x-3 md:-translate-y-0"
                }`}
              >
                {project.projectName}
              </span>

              <div className="hidden">{hoveredProject}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Medium/large screen project display */}
      <div className="hidden absolute right-1/12 bottom-1/8 md:block">
        <GlowBox className="h-[60vh] w-[40vw] p-4">
          <img src={projects[selectedProjectIndex].bgImage} />
        </GlowBox>
      </div>

      {/* Mobile/Small screen size project display */}
      <div className="flex flex-col mt-16 gap-8 md:hidden md:mt-28">
        <h1 className="opacity-50 relative after:absolute after:content-[''] after:h-[1px] after:w-2/3 after:bg-white after:top-1/2 after:left-1/3">
          <span className="font-rouge-script text-2xl">P</span>
          ROJECTS
        </h1>
        {projects.map((project, index) => (
          <GlowBox className="relative h-52 p-4" key={index}>
            <ProjectCard project={project} />
          </GlowBox>
        ))}
      </div>

      <Footer />
    </div>
  );
}
