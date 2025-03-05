"use client";

import Link from "next/link";
import { Project } from "@/types/project";
import { HiCode, HiLink } from "react-icons/hi";

const ICON_SIZE = 20;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full h-full block">
      <h1 className="text-lg uppercase font-medium">{project.projectName}</h1>
      <p className="text-sm mt-4">{project.desc}</p>

      {project.github && (
        <Link
          href={project.github}
          className="transition-all hover:text-orange-200"
        >
          <HiCode className="absolute bottom-4 left-4" size={ICON_SIZE} />
        </Link>
      )}

      {project.link && (
        <Link
          href={project.link}
          className="transition-all hover:text-orange-200"
        >
          <HiLink className="absolute bottom-4 left-12" size={ICON_SIZE} />
        </Link>
      )}

      <p className="absolute bottom-2 right-4">{project.year}</p>
    </div>
  );
}
