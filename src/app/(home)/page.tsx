'use client';

import Footer from '@/components/Footer';
import Gradient from '@/components/Gradient';
import Header from '@/components/Header';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const LOCATION = 'Las Vegas';

const projects: { projectName: string; year: number; bgImage: string }[] = [
  {
    projectName: 'Lambda Psi Rho',
    year: 2025,
    bgImage: '/',
  },
  {
    projectName: 'Easy Tagalog',
    year: 2024,
    bgImage: '/projects/easytagalog.png',
  },
  {
    projectName: 'The Las Vegas K-9 Foundation',
    year: 2023,
    bgImage: '/projects/lvk9f.png',
  },
  {
    projectName: 'Muver',
    year: 2023,
    bgImage: '/projects/muver.png',
  },
  {
    projectName: 'Routine Tracker',
    year: 2023,
    bgImage: '/projects/routine-tracker.png',
  },
  {
    projectName: 'Omnifood',
    year: 2022,
    bgImage: '/projects/omnifood.png',
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
    <div className="px-6 font-raleway">
      <Gradient />
      <Header />

      <div className="flex flex-col gap-4 mt-48 max-w-80 md:max-w-[36rem]">
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

      <ul className="mt-16 flex flex-col gap-8 md:mt-28">
        {projects.map(({ projectName, bgImage }, index) => (
          <li
            key={index}
            className={`group cursor-pointer text-2xl font-medium opacity-20 transition-all hover:opacity-100 ${
              index === selectedProjectIndex && 'opacity-100'
            } md:text-4xl`}
            onMouseEnter={() => handleProjectHover(bgImage, index)}
          >
            <span
              className={`block transition-all group-hover:-translate-y-1 group-hover:text-white ${
                index === selectedProjectIndex &&
                '-translate-y-1 text-white md:translate-x-3'
              }`}
            >
              {projectName}
            </span>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );

  {
    /* //  <div>
    // <div className="relative font-raleway flex flex-col gap-4 overflow-hidden">

    //     className={`absolute inset-0 transition-all duration-200 ease-in-out ${
    //       hoveredProject ? 'opacity-100 scale-110' : 'opacity-0 scale-80'
    //     }`}
    //     style={{
    //       backgroundImage: hoveredProject ? `url(${hoveredProject})` : 'none',
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //     }}
    //   >

    //     <div className="absolute inset-0 bg-black opacity-75"></div>
    //   </div>


    //   <div className="relative z-10 flex flex-col gap-6">
    //     <p className="max-w-xl">
    //       Im a 23 year old software engineer who graduated from the University
    //       of Nevada, Las Vegas with a B.S. in Computer Science.
    //     </p>
    //     <p className="max-w-xl">
    //       From the browser to the backend to the bits and bytes—I make it all
    //       work.
    //     </p>
    //     <div className="flex gap-2">
    //       <FaLocationDot />
    //       <p>{LOCATION}</p>
    //     </div>

    //     <div>
    //       <h1 className="text-2xl font-semibold mt-16 pointer-events-none">
    //         PROJECTS
    //       </h1>
    //       <ul className="flex flex-col gap-4 max-h-[24rem]">
    //         {projects.map(({ projectName, bgImage }, index) => (
    //           <li
    //             key={index}
    //             className={`group cursor-pointer w-fit text-4xl font-medium opacity-30 flex items-center transition-all hover:opacity-100 ${
    //               index === selectedProjectIndex && 'opacity-100'
    //             }`}
    //             onMouseEnter={() => handleProjectHover(bgImage, index)}
    //           >
    //             <span
    //               className={`block w-[2px] h-0 bg-white transition-all group-hover:h-8 ${
    //                 index === selectedProjectIndex && 'h-8'
    //               }`}
    //             />
    //             <span
    //               className={`block transition-all group-hover:translate-x-3 group-hover:text-white ${
    //                 index === selectedProjectIndex && 'translate-x-3 text-white'
    //               }`}
    //             >
    //               {projectName}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div> */
  }
}
