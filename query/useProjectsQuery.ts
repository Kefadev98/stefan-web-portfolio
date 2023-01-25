import { useQuery } from "react-query";
//Internal imports
import { ProjectsTypes } from "../models/model-types";
import { getProjects } from "../firebase/firebase-service";

export const useProjectsQuery = () => {
  return useQuery<ProjectsTypes[], Error>(["projects"], getProjects, {
    onSuccess: (data) =>
      console.log(`Perform side effect after data fetching`, data),
    onError: (error) => console.error(`Something went wrong ${error.message}`),
  });
};
