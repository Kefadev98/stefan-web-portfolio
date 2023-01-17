import React, { useState, useEffect } from "react";
import {
  QuerySnapshot,
  onSnapshot,
  collection,
  DocumentData,
} from "firebase/firestore";
//Internal imports
import Technologies from "./Technologies";
import { database } from "../../firebase/firebase-config";
import { TechnologiesTypes } from "../../models/model-types";

const Skills = () => {
  const [technologies, setTechnologies] = useState<TechnologiesTypes[]>([]);
  const technologiesCollection = collection(database, "technologies");

  useEffect(() => {
    onSnapshot(
      technologiesCollection,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setTechnologies(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );
  }, []);

  return (
    <div
      id="skills"
      className="md:w-full lg:h-screen p-2 bg-gray-300 dark:bg-[#00040F]"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <p className="text-xl tracking-widest uppercase text-indigo-600 border-b-2 border-pink-600">
          Skills
        </p>
        <h2 className="py-4 text-slate-800 dark:text-gray-300">Technologies</h2>
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies?.map((technology) => (
            <Technologies key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
