import MaxWidthContainer from '@/components/MaxWidthContainer';

const education = [
  {
    university: 'University of Nevada, Las Vegas',
    major: 'B.S. in Computer Science',
    term: '2021 - 2024',
    logo: '/education/unlv-logo.webp',
    altText: 'University of Nevada, Las Vegas logo',
  },
  {
    university: 'University of Nevada, Reno',
    major: 'Computer Science & Engineering (Transferred)',
    term: '2019 - 2021',
    logo: '/education/unr-logo.webp',
    altText: 'University of Nevada, Reno logo',
  },
];

const work = [
  {
    title: 'Software Engineer Intern',
    company: 'ANA Inc.',
    from: 'Nov. 2024 - Apr. 2025',
    desc: 'Test',
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    from: 'Sep. 2023 - Present',
    desc: 'Developed the website for a non-profit organization called the Las Vegas K-9 Foundation using React.js. I helped them raise over $4000 in donations. Revamped the website for Lambda Psi Rho fraternity using React.js and Shadcn UI.',
  },
  {
    title: 'Project Manager Intern',
    company: 'Ntooitive Digital',
    from: 'Mar. 2024 - May 2024',
    desc: '',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: 'University of Nevada, Las Vegas',
    from: 'Jan. 2024 - May 2024',
    desc: '',
  },
  {
    title: 'Private Tutor',
    company: 'Freelance',
    from: 'Apr. 2022 - Jul. 2022',
    desc: '',
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
    <div className="font-raleway w-[95vw] px-5 mx-auto flex flex-col gap-24">
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

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">EDUCATION</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-8">
          {education.map((edu, idx) => (
            <li key={idx}>
              <h4 className="text-4xl">{edu.university}</h4>
              <div className="flex flex-col text-xl md:flex-row md:justify-between">
                <p className=" text-gray-500 font-medium">{edu.major}</p>
                <p>{edu.term}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">WORK</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-8">
          {work.map((work, idx) => (
            <li
              key={idx}
              className="flex flex-col space-y-2 justify-between md:grid md:grid-cols-3"
            >
              <p className="text-xl">{work.from}</p>
              <div className="col-span-2 space-y-4">
                <div>
                  <p className="text-4xl">{work.company}</p>
                  <p className="text-gray-500 font-medium text-xl">
                    {work.title}
                  </p>
                </div>
                <p>{work.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
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
