import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
//Internal imports

import { ProjectsTypes } from "../../types/ProjectsTypes";

interface Props {
  project: ProjectsTypes;
}

const ProjectItem = ({ project }: Props) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <div data-aos="fade-up" className="project-item group">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={`${project.projectImg}`}
        alt="/"
      />
      <div className="project-item-hover">
        <h3 className="text-xl text-gray-300 tracking-wider text-center">
          {project.projectName}
        </h3>
        <p className="text-sm pb-4 pt-2 text-gray-300 text-center">
          {project.projectDescription}
        </p>
        <div className="w-full flex justify-between">
          <Link href={`${project.projectUrl}`} target="_blank">
            <button className="navigation-button">
              <img src={project.githubImg} alt="/" className="w-8 h-8" />
            </button>
          </Link>
          <Link href={`${project.deployUrl}`} target="_blank">
            <button className="navigation-button">
              <img src={project.vercelImg} alt="/" className="w-18 h-20" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
