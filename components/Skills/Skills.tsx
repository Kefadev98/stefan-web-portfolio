import React from "react";
//Internal imports
import Technologies from "./Technologies";
import { useTechnologiesQuery } from "../../query/useTechnologiesQuery";
import { TechnologiesTypes } from "../../types/TechnologiesTypes";

const Skills = () => {
  const {
    data: technologies,
    isLoading,
    isError,
    error,
  } = useTechnologiesQuery();

  return (
    <div
      id="skills"
      className="md:w-full lg:h-screen p-2 bg-gray-300 dark:bg-darkBackground"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <h5 className="py-2">Skills</h5>
        <h2 className="py-4">Technologies</h2>
        {isLoading && <p className="text-3xl m-5">Loading...</p>}
        {isError && <p className="text-3xl m-5">Error: {error.message}</p>}
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies?.map((technology: TechnologiesTypes) => (
            <Technologies key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
