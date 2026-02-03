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
    title: 'Software Engineering Resident',
    company: 'Netlify',
    from: 'Jul 2025 - Oct 2025',
    desc: "I was part of Netlify's Pod Experience team, collaborating with engineers globally to refactor internal systems, manage dependency updates, and ship React frontend improvements used on the Netlify platform."
  },
  {
    title: 'Software Engineer Intern',
    company: 'ANA Inc.',
    from: 'Nov 2024 - Apr 2025',
    desc: 'I contributed over 5,000 lines of production code across three systems. I modernized embedded software, built multi-threaded systems using protocols like UDP, Modbus, and MQTT. I also containerized systems with Docker and collaborated in an agile team on code reviews and sprint planning.',
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    from: 'Sep 2023 - Present',
    desc: 'I built and deployed responsive websites for the Las Vegas K-9 Foundation and Lambda Psi Rho fraternity using React.js. I designed UI mockups in Figma, iterated with stakeholders, and integrated Stripe for real-time donations, helping the foundation raise over $4,000.',
  },
  {
    title: 'Project Manager Intern',
    company: 'Ntooitive Digital',
    from: 'Mar 2024 - May 2024',
    desc: 'During my internship, I boosted reporting metrics by over 170% by building interactive dashboards using ACS data. I also automated internal tools using Python and Playwright, reducing research and forecasting time by nearly 50%, and enhanced audience targeting by removing 23.5% of outliers via proprietary APIs.',
  },
  {
    title: 'Undergraduate Teaching Assistant',
    company: 'University of Nevada, Las Vegas',
    from: 'Jan 2024 - May 2024',
    desc: 'I supported students in a compiler theory course by leading weekly office hours, reviewing assignments, and mentoring them through challenging topics like recursive descent parsing, semantic analysis, and building compilers in C++, Python, and Groovy.',
  },
  {
    title: 'Private Tutor',
    company: 'Freelance',
    from: 'Apr 2022 - Jul 2022',
    desc: 'I privately tutored students in web development, helping them grasp HTML, CSS, JavaScript, and programming fundamentals. I guided them through assignments and personal projects, focusing on real-world skills and problem-solving techniques.',
  },
];

const community = [
  {
    organization: 'Lambda Psi Rho',
    roles: [
      'National Board Secretary',
      'Executive Vice President',
      'Vice President of Development',
      'Social Chair',
    ],
  },
  {
    organization: 'Alpha Phi Omega',
    roles: ['Treasurer'],
  },
  {
    organization: 'The Filipinx American Student Association',
    roles: [],
  },
];

export default function About() {
  return (
    <div className="font-raleway w-[95vw] px-5 mx-auto flex flex-col gap-24 mb-64">
      <div className="w-full h-[65vh] flex items-center justify-center">
        <h1 className="flex flex-col font-bold text-8xl sm:text-9xl">ABOUT</h1>
      </div>

      <div className="space-y-6 max-w-[600px] mx-auto">
        <div>
          <p className="font-bold text-3xl sm:text-2xl">
            Whats up, I&apos;m Keanu Aloua.
          </p>
          <div className="text-xl font-semibold gap-2 sm:flex">
            <p className="text-right">I&apos;m Filipino and Polynesian.</p>
            <p>Born and raised in Las Vegas, NV.</p>
          </div>
        </div>
        <p className="text-lg">
          My first time programming was in 7th grade when I was a graphic design
          major, creating a simple HTML/CSS website.
        </p>

        <div className="space-y-1 md:text-lg">
          <h2 className="text-xl font-semibold">The Detour</h2>
          <p>
            In highschool, I took quite the detour and decided to major in
            Orchestra where I played Cello and Piano.
          </p>
          <p>
            After many years of travelling to perform, concerts, and recitals, I
            decided to pick up my passion of technology again in college, and
            majored in Computer Science.
          </p>
        </div>

        <div className="space-y-1 md:text-lg">
          <h2 className="text-xl font-semibold">Rediscovering Code</h2>
          <p>
            My journey wasn&apos;t easy. After a rough first year struggling
            with C and C++, I switched my major to Political Science (which I didn&apos;t enjoy).
          </p>
          <p>
            I transferred from UNR to UNLV, switched back to Computer Science,
            and surprisingly, my first assembly class reignited my passion for
            coding.
          </p>
          <p>
            While studying, I explored new technologies on my own and built
            projects using Python and JavaScript.
          </p>
        </div>

        <div className="space-y-1 md:text-lg">
          <h2 className="text-xl font-semibold">Building with Purpose</h2>
          <p>
            This self-driven learning eventually led me to pursue real-world
            impact through tech.
          </p>
          <p>
            I built a website for a non-profit organization, tutored students as
            a private tutor, became a teaching assistant, revamped my fraternity&apos;s 
            website and most recently, started developing Easy Tagalog which is a language-learning 
            app designed to reconnect with my heritage and help others do the same.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="md:text-lg">EDUCATION</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-8">
          {education.map((edu, idx) => (
            <li key={idx}>
              <h4 className="text-3xl font-bold tracking-tight md:text-4xl">
                {edu.university}
              </h4>
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="uppercase text-white/40">{edu.major}</p>
                <p className="text-lg">{edu.term}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="md:text-lg">WORK</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-16">
          {work.map((work, idx) => (
            <li
              key={idx}
              className="flex flex-col space-y-2 justify-between md:grid md:grid-cols-3"
            >
              <p className="text-xl">{work.from}</p>
              <div className="col-span-2 space-y-4">
                <div>
                  <p className="text-3xl font-bold tracking-tight md:text-4xl">
                    {work.title}
                  </p>
                  <p className="uppercase text-white/40">{work.company}</p>
                </div>
                <p className="md:text-lg">{work.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="md:text-lg">COMMUNITY</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-8">
          {community.map((leader, idx) => (
            <li key={idx}>
              <h4 className="text-3xl font-bold tracking-tight md:text-4xl">
                {leader.organization}
              </h4>
              <ul className="gap-12 md:flex md:flex-row">
                {leader.roles.map((role, roleIdx) => (
                  <li key={roleIdx} className="uppercase text-white/40">
                    {role}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
