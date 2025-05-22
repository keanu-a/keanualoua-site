import StaggerReelText from "@/components/ui/StaggerReelText";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    projectName: "Easy Tagalog",
    role: "Founding Engineer",

    year: "2024-2025",
    bgImage: "/projects/et-cover.webp",
    techStack: [
      "TypeScript",
      "Next.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Shadcn",
      "Docker",
    ],
    desc: "Aiming to fill market gap in effective learning for Tagalog. Developed a full stack language learning platform using Next.js for the frontend and Spring Boot for the backend. Currently supports 400+ translations.",
    link: "https://easytagalog.com/",
    github: "https://github.com/Easy-Tagalog",
  },
  {
    projectName: "Lambda Psi Rho",
    role: "Web Developer",
    year: "2025",
    bgImage: "/projects/lpr-cover.webp",
    techStack: ["TypeScript", "React.js", "Shadcn"],
    desc: "Revamped Lambda Psi Rho's landing page from Jekyll to React.js, modernizing their digital presence with animations using Motion, and increasing the organization's credibility.",
    link: "https://www.lambdapsirho.org/",
    github: "https://github.com/keanu-a/lpr-website",
  },
  {
    projectName: "The Las Vegas K-9 Foundation",
    role: "Web Developer",
    year: "2023-2025",
    bgImage: "/projects/lvk9f-cover.webp",
    techStack: ["TypeScript", "React.js", "Stripe"],
    desc: "Developed the website at the time for a new upcoming non-profit organization using React.js. Integrated Stripe allowing the organization to raise over $4000 in donations. Deployed on vercel for seamless CI/CD and easy analytics tracking.",
    github: "https://github.com/keanu-a/the-lvk9f",
    link: "https://www.lasvegask9foundation.org/about-us",
  },
  {
    projectName: "Muver",
    role: "Fullstack Engineer",
    year: "2023",
    bgImage: "/projects/muver-cover.webp",
    techStack: ["TypeScript", "React.js", "Express.js", "MongoDB", "Docker"],
    desc: "Worked in a team of 7 to develop a full stack logistics platform for users to connect and create an economy for moving. My focus was on creating the backend using Express.js with connection to our NoSQL database hosted on MongoDB.",
    github: "https://github.com/Uber-for-Moving-Trucks/muver",
  },
];

const moreProjects = [
  {
    projectName: "Traffic Image Segmentation",
  },
  {
    projectName: "Omnifood",
  },
  {
    projectName: "Old Portfolio",
  },
  {
    projectName: "Routine Tracker",
  },
  {
    projectName: "Pomodoro Timer",
  },
];

// const techStack = [
//   {
//     title: 'typescript',
//     rel: ['react.js', 'next.js', 'express.js'],
//   },
//   {
//     title: 'java',
//     rel: ['spring boot', 'hibernate', 'jpa'],
//   },
//   {
//     title: 'python',
//   },
//   {
//     title: 'database',
//     tel: ['postgresql', 'mongodb', 'supabase'],
//   },
//   {
//     title: 'tools',
//     rel: ['git', 'github', 'aws', 'postman', 'linux', 'docker', 'agile'],
//   },
// ];

export default function Projects() {
  return (
    <div className="font-raleway w-[95vw] px-5 mx-auto flex flex-col gap-24">
      <div className="w-full h-[65vh] flex items-center justify-center">
        <h1 className="flex flex-col font-bold text-6xl sm:text-8xl md:text-9xl">
          PROJECTS
        </h1>
      </div>

      <section className="max-w-[600px] mx-auto"></section>

      <section>
        <ul className="space-y-18">
          {projects.map((project, idx) => (
            <li
              key={idx}
              className="flex flex-col space-x-12 md:flex-row md:justify-between"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={project.bgImage}
                  alt={project.projectName}
                  width={600}
                  height={300}
                  quality={100}
                  priority
                />
              </div>
              <div className="space-y-8 md:w-1/2">
                <div>
                  <div className="flex flex-col justify-between sm:flex-row">
                    <h3 className="text-3xl sm:text-4xl tracking-tight font-bold">
                      {project.projectName}
                    </h3>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="uppercase text-white/40">{project.role}</h4>
                </div>
                <p className="md:text-lg">{project.desc}</p>
                <div className="flex gap-8 md:gap-4 py-2">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="w-24 border-2 rounded-full px-2 py-1 text-center transition-all hover:text-yellow-200"
                    >
                      <StaggerReelText text="VISIT" initialTextColor="white" />
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="w-24 border-2 rounded-full px-2 py-1 text-center transition-all hover:text-green-200"
                    >
                      <StaggerReelText text="GITHUB" initialTextColor="white" />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="md:text-lg">OTHER</h3>
          <hr className="h-px w-full bg-white border-0" />
        </div>
        <ul className="space-y-4">
          {moreProjects.map((project, idx) => (
            <li
              key={idx}
              className="text-3xl font-bold sm:text-4xl tracking-tight"
            >
              <StaggerReelText
                text={project.projectName}
                initialTextColor="white"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
