import Footer from '@/components/Footer';
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
      <h1 className="text-[6rem] font-bold leading-none md:text-[8rem]">
        ABOUT ME
      </h1>
      <p>My focus is on fullstack engineering.</p>

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
