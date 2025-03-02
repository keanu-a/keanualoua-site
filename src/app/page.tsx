import { FaLocationDot } from 'react-icons/fa6';

const LOCATION = 'Las Vegas';

const projects: { projectName: string; year: number }[] = [
  {
    projectName: 'Lambda Psi Rho',
    year: 2025,
  },
  {
    projectName: 'Easy Tagalog',
    year: 2024,
  },
  {
    projectName: 'The Las Vegas K-9 Foundation',
    year: 2023,
  },
  {
    projectName: 'Muver',
    year: 2023,
  },
  {
    projectName: 'Omnifood',
    year: 2022,
  },
  {
    projectName: 'Pig Game',
    year: 2022,
  },
  {
    projectName: 'Pomodoro Timer',
    year: 2021,
  },
];

export default function Home() {
  return (
    <div className="font-raleway flex flex-col gap-4">
      <p className="max-w-xl">
        Im a 23 year old software engineer who graduated from the University of
        Nevada, Las Vegas with a B.S. in Computer Science.
      </p>

      <p className="max-w-xl">
        From the browser to the backend to the bits and bytes—I make it all
        work.
      </p>

      <div className="flex gap-2">
        <FaLocationDot />
        <p>{LOCATION}</p>
      </div>

      <h1 className="text-2xl font-semibold mt-24">PROJECTS</h1>
      <ul className="flex flex-col gap-16 max-h-[32rem] overflow-y-scroll">
        {projects.map(({ projectName }, index) => (
          <li
            key={index}
            className="cursor-pointer w-fit text-4xl font-medium text-gray-300 transition-all hover:text-purple-900 hover:translate-x-2"
          >
            {projectName}
          </li>
        ))}
      </ul>
    </div>
  );
}
