import MaxWidthContainer from '@/components/MaxWidthContainer';
import React from 'react';

const education = [
  {
    university: 'University of Nevada, Reno',
  },
  {
    university: 'Unversity of Nevada, Las Vegas',
  },
];

const work = [
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

const leadership = [
  {
    organization: 'Lambda Psi Rho',
    role: 'National Board Secretary',
  },
];

export default function About() {
  return (
    <div className="font-raleway w-full px-5 mx-auto flex flex-col gap-24">
      <div className="w-full h-[65vh] flex items-center justify-center">
        <h1 className="flex flex-col font-bold text-8xl sm:text-9xl">ABOUT</h1>
      </div>

      <MaxWidthContainer>
        <p>
          I&apos;m Keanu and I&apos;m a software engineer focused on full stack
          applications.
        </p>
        <p>
          I enjoy the creative side of frontend and the heavy logic side of the
          backend.
        </p>
      </MaxWidthContainer>

      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">EDUCATION</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul>
          {education.map((edu, idx) => (
            <li key={idx}>{edu.university}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">WORK</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul>
          {work.map((work, idx) => (
            <li key={idx}>
              <p>{idx + 1}</p>
              <h4>{work.title}</h4>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">LEADERSHIP</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul>
          {leadership.map((leader, idx) => (
            <li key={idx}>
              <p>{idx + 1}</p>
              <h4>{leader.organization}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
