import { useQuery } from "react-query";
//Internal imports
import { TechnologiesTypes } from "../models/model-types";
import { getTechnologies } from "../firebase/firebase-service";

export const useTechnologiesQuery = () => {
  return useQuery<TechnologiesTypes[], Error>(
    ["technologies"],
    getTechnologies,
    {
      onSuccess: (data) =>
        console.log(`Perform side effect after data fetching`, data),
      onError: (error) =>
        console.error(`Something went wrong ${error.message}`),
    }
  );
};
