import React from "react";
import Link from "next/link";
//Internal imports
import ProjectItem from "./ProjectItem";
import { useProjectsQuery } from "../../query/useProjectsQuery";
import { ProjectsTypes } from "../../types/ProjectsTypes";

const Projects = () => {
  const { data: projects, isLoading, isError, error } = useProjectsQuery();

  return (
    <div id="projects" className="w-full bg-gray-300 dark:bg-darkBackground">
      <div data-aos="fade-up" className="max-w-[1240px] mx-auto px-2 py-16">
        <h5>Projects</h5>

        <p className="py-4 text-2xl">
          For more projects check my{" "}
          <Link href="https://github.com/Kefadev98" target="_blank">
            <span>Github</span>
          </Link>
        </p>
        {isLoading && <p className="text-3xl m-5">Loading...</p>}
        {isError && <p className="text-3xl m-5">Error: {error.message}</p>}
        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project: ProjectsTypes) => (
            <ProjectItem key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
