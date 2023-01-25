import React from "react";
import Link from "next/link";
//Internal imports
import ProjectItem from "./ProjectItem";
import { useProjectsQuery } from "../../query/useProjectsQuery";

const Projects = () => {
  const { data: projects, isLoading, isError, error } = useProjectsQuery();

  return (
    <div id="projects" className="w-full bg-gray-300 dark:bg-[#00040F]">
      <div data-aos="fade-up" className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-indigo-600 border-b-2 border-pink-600">
          Projects
        </p>

        <p className="py-4 text-slate-800 dark:text-gray-300 text-2xl">
          For more projects check my{" "}
          <Link href="https://github.com/Kefadev98" target="_blank">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 hover:animate-pulse">
              Github
            </span>
          </Link>
        </p>
        {isLoading && <p className="text-3xl m-5">Loading...</p>}
        {isError && <p className="text-3xl m-5">Error: {error.message}</p>}
        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project) => (
            <ProjectItem key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
