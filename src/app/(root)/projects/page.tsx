import { Project } from '@/types/project';

const projects: Project[] = [
  {
    projectName: 'Lambda Psi Rho',
    year: 2025,
    bgImage: '/',
    techStack: ['TypeScript', 'React.js', 'Shadcn'],
    desc: 'The website for a fraternity that seeks to bring out the excellence among men with three pillars: Leadership, Pride, and Respect',
    github: 'https://github.com/keanu-a/lpr-website',
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
    desc: 'Learning Tagalog has never been easier with vocabulary, grammar, and even Filipino fulture',
    github: 'https://github.com/Easy-Tagalog',
  },
  {
    projectName: 'The Las Vegas K-9 Foundation',
    year: 2023,
    bgImage: '/projects/lvk9f.png',
    techStack: ['TypeScript', 'React.js', 'Stripe'],
    desc: 'Uplifting all dogs and owners to grow and thrive, and to make Las Vegas a hub for canine events',
    github: 'https://github.com/keanu-a/the-lvk9f',
    link: 'https://www.lasvegask9foundation.org/about-us',
  },
  {
    projectName: 'Muver',
    year: 2023,
    bgImage: '/projects/muver.png',
    techStack: ['TypeScript', 'React.js', 'Express.js', 'MongoDB'],
    desc: 'Need help with moving? Hire someone easily. Need quick money? Become a mover!',
    github: 'https://github.com/Uber-for-Moving-Trucks/muver',
  },
  {
    projectName: 'Routine Tracker',
    year: 2023,
    bgImage: '/projects/routine-tracker.png',
    techStack: ['TypeScript', 'React.js'],
    desc: 'Track habits to create routines that you will never forget with reminders',
    github: 'https://github.com/keanu-a/routine-tracker',
    link: 'https://simple-routine-tracker.vercel.app/',
  },
  {
    projectName: 'Omnifood',
    year: 2022,
    bgImage: '/projects/omnifood.png',
    techStack: ['JavaScript'],
    desc: 'An online course project that showed real world UI/UX and functionality to deliver a beautiful landing page',
    github: 'https://github.com/keanu-a/web-dev/tree/main/Omnifood',
    link: 'https://omnifood-keanu.netlify.app/',
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project, idx) => (
        <div key={idx}>
          <h1>{project.projectName}</h1>
        </div>
      ))}
    </div>
  );
}
