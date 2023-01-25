import { collection, getDocs } from "firebase/firestore";
//Internal imports
import { database } from "./firebase-config";

export const getTechnologies = async () => {
  const technologiesSnapshot = await getDocs(
    collection(database, "technologies")
  );
  const technologies = technologiesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return technologies;
};

export const getProjects = async () => {
  const projectsSnapshot = await getDocs(collection(database, "projects"));
  const projects = projectsSnapshot.docs.map((doc) => ({
    projectId: doc.id,
    ...doc.data(),
  }));
  return projects;
};
