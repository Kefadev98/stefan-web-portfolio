import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex justify-center items-center py-16 bg-gray-300 dark:bg-[#00040F]"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1240px] m-auto md:w-full grid grid-cols-2 gap-8 rounded-md shadow-lg bg-gray-200 shadow-slate-900 dark:shadow-blue-400 dark:bg-[#00040F]"
      >
        <div data-aos="fade-up" className="col-span-2 p-10">
          <p className="uppercase text-xl tracking-widest text-indigo-600 border-b-2 border-pink-600 dark:text-indigo-400">
            Profile
          </p>
          <h2 className="py-4 text-slate-800 dark:text-blue-200">About Me</h2>
          <p
            data-aos="fade"
            className="py-2 text-md font-normal text-slate-900 dark:text-blue-200 dark:font-light"
          >
            My name is Stefan, I am 24 years old. Graduated Computer Scientist
            with 240 ECTS credits. I'm a hardworking and highly adaptive person.
            I don't like leaving any work unfinished. I'm a self motivated and
            dedicated to my work and i can handle the pressure that comes with
            every job. I consider myself a team player. I would be more than
            happy to work in a dynamic environment of a well developed team of
            people where everyone is playing their roles which leads to greater
            overall progress.
          </p>
          <p
            data-aos="fade"
            className="py-2 text-md font-normal text-slate-900 dark:text-blue-200 dark:font-light"
          >
            I specialize in building mobile responsive Front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job. If you
            want to read more about the technologies I used, you can read in the
            letter of recommendation.
          </p>

          <Link href="/resume">
            <div data-aos="fade" className="flex items-center animate-pulse">
              <p className="py-2 font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-700">
                Check out my resume.
              </p>
              <div className="ml-2 text-gray-500">
                <BsArrowLeftCircle size={25} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
