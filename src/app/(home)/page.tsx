'use client';

import Footer from '@/components/Footer';
import Gradient from '@/components/Gradient';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types/project';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const LOCATION = 'Las Vegas';

const projects: Project[] = [
  {
    projectName: 'Lambda Psi Rho',
    year: 2025,
    bgImage: '/',
    techStack: ['TypeScript', 'React.js', 'Shadcn'],
  },
  {
    projectName: 'Easy Tagalog',
    year: 2024,
    bgImage: '/projects/easytagalog.png',
    techStack: [
      'TypeScript',
      'React.js',
      'Shadcn',
      'Java',
      'Spring Boot',
      'PostgreSQL',
    ],
  },
  {
    projectName: 'The Las Vegas K-9 Foundation',
    year: 2023,
    bgImage: '/projects/lvk9f.png',
    techStack: ['TypeScript', 'React.js', 'Stripe'],
  },
  {
    projectName: 'Muver',
    year: 2023,
    bgImage: '/projects/muver.png',
    techStack: ['TypeScript', 'React.js', 'Express.js', 'MongoDB'],
  },
  {
    projectName: 'Routine Tracker',
    year: 2023,
    bgImage: '/projects/routine-tracker.png',
    techStack: ['TypeScript', 'React.js'],
  },
  {
    projectName: 'Omnifood',
    year: 2022,
    bgImage: '/projects/omnifood.png',
    techStack: ['JavaScript'],
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
    <div className="px-6 font-raleway mb-32">
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
      <div className="hidden mt-16 flex-col gap-4 md:flex md:mt-28">
        <h1 className="font-bold opacity-50">
          <span className="font-rouge-script text-2xl">P</span>ROJECTS
        </h1>
        <ul className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`flex items-center group cursor-pointer text-2xl font-medium opacity-20 transition-all hover:opacity-100 ${
                index === selectedProjectIndex && 'opacity-100'
              } md:text-4xl`}
              onMouseEnter={() => handleProjectHover(project.bgImage, index)}
            >
              <span
                className={`block w-[2px] h-0 bg-white transition-all group-hover:h-8 ${
                  index === selectedProjectIndex && 'h-8'
                }`}
              />
              <span
                className={`block transition-all group-hover:text-white ${
                  index === selectedProjectIndex &&
                  '-translate-y-1 text-white md:translate-x-3 md:-translate-y-0'
                }`}
              >
                {project.projectName}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile/Small screen size project display */}
      <div className="flex flex-col mt-16 gap-8 md:hidden md:mt-28">
        <h1 className="font-bold opacity-50">
          <span className="font-rouge-script text-2xl">P</span>ROJECTS
        </h1>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
