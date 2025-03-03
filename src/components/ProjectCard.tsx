import { Project } from '@/types/project';
import { cn } from '@/utils/cn';

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative h-36 p-2 bg-black bg-opacity-80 rounded-2xl shadow-2xl border-[1px] border-gray-500',
        className
      )}
    >
      <h1 className="text-xl">{project.projectName}</h1>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {project.techStack?.map((item, index) => (
          <li
            key={index}
            className="bg-indigo-950 text-sm px-2 py-0.5 rounded-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="absolute bottom-2 right-3">{project.year}</p>
    </div>
  );
}
