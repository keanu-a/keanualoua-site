import Footer from '@/components/Footer';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import React from 'react';

const workExperience = [
  {
    title: 'Software Engineer Intern',
    company: '',
    year: 0,
  },
  {
    title: 'Web Developer',
    company: '',
    year: 0,
  },
  {
    title: 'Project Manager Intern',
    company: '',
    year: 0,
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: '',
    year: 0,
  },
  {
    title: 'Private Tutor',
    company: '',
    year: 0,
  },
];

export default function About() {
  return (
    <div className="font-raleway w-full px-5 mx-auto flex flex-col gap-24">
      <div className="w-full h-[65vh] flex items-center justify-center">
        <h1 className="flex flex-col font-bold text-8xl sm:text-9xl">ABOUT</h1>
      </div>

      <MaxWidthContainer>
        <p>My focus is on full stack engineering.</p>
      </MaxWidthContainer>

      <div>
        <h3 className="text-4xl font-bold">WORK EXPERIENCE</h3>
        <ul>
          {workExperience.map((work, idx) => (
            <li key={idx}>
              <p>{idx + 1}</p>
              <h4>{work.title}</h4>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
