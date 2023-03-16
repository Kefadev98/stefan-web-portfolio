import React, { useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedinIn, FaChevronLeft } from "react-icons/fa";
import Profile from "../public/assets/profile.jpg";
import { ThemeContext } from "../context/ThemeContext";

const resume = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className={!theme ? "dark" : ""}>
      <div className="bg-gray-300 dark:bg-darkBackground">
        <Head>
          <title>Stefan | Resume</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="p-10 text-xl bg-red flex items-center w-20 text-slate-900 dark:text-gray-200">
          <Link href="/">
            <div className="flex justify-center hover:scale-110 ease-in duration-200">
              <FaChevronLeft />
              <p className="uppercase text-sm">Back</p>
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="max-w-[940px] mx-auto p-2 pt-5 text-gray-400"
        >
          <h2 className="text-center text-slate-800 dark:text-gray-200">
            Resume
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-slate-800 rounded-md my-4 p-4 w-full flex justify-between items-center">
            <Image
              className="rounded-xl hover:scale-105 ease-in duration-300"
              src={Profile}
              alt="/"
              width={150}
            />
            <div className="flex flex-col items-center justify-evenly">
              <div className="text-center text-gray-200">
                <h4 className="text-3xl font-bold">Stefan Kovačić</h4>
                <h3>Frontend Developer</h3>
              </div>

              <div className="flex items-center">
                <Link
                  href="https://www.linkedin.com/in/stefan-kovacic-bb6599230/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn
                    size={20}
                    style={{ marginRight: "1rem", color: "white" }}
                  />
                </Link>
                <Link
                  href="https://github.com/Kefadev98"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub
                    size={20}
                    style={{ marginRight: "1rem", color: "white" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/*Education*/}
          <div className="shadow-md bg-gray-200 rounded-md dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>Education</h4>
            </div>
            <div>
              <p className="italic text-slate-800 dark:text-gray-100">
                October 2017 – October 2021
              </p>

              <p className="m-4">
                Enrolled into&nbsp;
                <span className="font-bold text-slate-800 dark:text-gray-200">
                  „Panevropski Univerzitet APEIRON“&nbsp;
                </span>
                in Banja Luka, graduent on time, vocation Graduated Computer
                Scientist ( Specialist in the field of Computer Engineering),
                with 240 ECTS credits.
              </p>

              <p className="italic text-slate-800 dark:text-gray-100">
                September 2013 – May 2017
              </p>

              <p className="m-4">
                Graduated in highschool&nbsp;
                <span className="font-bold text-slate-800 dark:text-gray-200">
                  „Opšta Gimnazija“&nbsp;
                </span>
                in Gradiška.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="shadow-md rounded-md bg-gray-200 dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>Courses</h4>
            </div>
            <p className="italic text-slate-800 dark:text-gray-100">
              May 2022 – June 2022
            </p>
            <p className="m-4">
              Enrolled into React online course for Front-end Developer.
            </p>
            <p className="italic text-slate-800 dark:text-gray-100">
              December 2021 – January 2022
            </p>
            <p className="m-4">
              Accomplished a programming course of HTML/CSS and Javascript
            </p>
          </div>

          {/* Experience */}
          <div className="shadow-md rounded-md bg-gray-200 dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>Experience</h4>
            </div>
            <p className="italic text-slate-800 dark:text-gray-100">
              February 2022 – November 2022{" "}
            </p>
            <p className="m-4">
              I passed an internship program for Front-end Developers at&nbsp;
              <span className="font-bold text-slate-800 dark:text-gray-200">
                Quantox Technology
              </span>
              .
            </p>
            <p className="italic text-slate-800 dark:text-gray-100">
              November 2022 – Current
            </p>
            <p className="m-4">
              Teaching and mentoring the basics of HTML and CSS on Upwork. I
              have also worked on existing and new projects from scratch, using
              JavaScript, TypeScript, and React.
            </p>
          </div>

          {/* Sociall skills */}
          <div className="shadow-md rounded-md bg-gray-200 dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>Social skills</h4>
            </div>
            <p className="m-4">Communicative</p>
            <p className="m-4">Easygoing and friendly</p>
            <p className="m-4">Flexible</p>
            <p className="m-4">Able to multitask on multiple levels</p>
            <p className="m-4">
              Easily adjustible to different type of situations and group work
            </p>
            <p className="m-4">
              Enthusiastic and engaged when interacting with people
            </p>
          </div>

          {/* Experience */}
          <div className="shadow-md rounded-md bg-gray-200 dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>Technologies </h4>
            </div>

            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                HTML5
              </span>{" "}
              – I am able to make a good structure and layout for every project
              from scratch
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                CSS
              </span>{" "}
              - I can do all kinds of design and responsive design for tablet
              and mobile, also worked with SCSS preprocessor
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                Javascript
              </span>{" "}
              – Learned data types, variables, loops, objects, array methods,
              functions, hoisting, DOM manipulation, asynchronous JS
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                React JS
              </span>{" "}
              – Learned hooks and custom hooks, context Api, props, conditional
              rendering, React Query, React Router, React Hook Form, pagination,
              authentication with JWT, also know the basics of Redux Toolkit and
              Redux Toolkit Query.
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                Tailwind CSS and Chakra UI
              </span>
              &nbsp; - I am able to quickly implement a design for all screen
              dimensions.
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                NextJS fundamentals
              </span>
              &nbsp; – I practiced Server-side and Client-side components, SSR,
              SSG, ISR rendering techniques, routes, new file conventions
            </p>
            <p className="m-4">
              <span className="font-bold text-slate-800 dark:text-gray-200">
                Git and Github
              </span>{" "}
              - I know git commands such as git clone, init, add, push, commit,
              pull, merge, status, branch
            </p>
          </div>

          {/*About me */}
          <div className="shadow-md rounded-md bg-gray-200 dark:bg-transparent shadow-slate-800 dark:shadow-blue-500 p-4 mb-6">
            <div className="py-4 text-xl font-bold uppercase tracking-wider">
              <h4>About Me</h4>
            </div>
            <p>
              My name is Stefan, and I am a 24-year-old Bachelor of Computer
              Science with nine months of experience in front-end development.
              Through my work at Quantox Technology, I have honed my skills in
              HTML, CSS, JavaScript, TypeScript, and React. I specialize in
              building mobile responsive front-end UI applications that connect
              with APIs and other back-end technologies. During my time at the
              company, I had the opportunity to work closely with a team and a
              mentor, which has helped me progress and learn new technologies. I
              am highly adaptable and self-motivated, and I take pride in
              completing my work thoroughly and efficiently. I am dedicated to
              my work and can handle the pressure that comes with any job. As a
              team player, I enjoy working in a dynamic environment with a
              well-developed team where everyone plays their role to achieve
              greater progress. If you want to learn more about the technologies
              and libraries I've worked with, please see my recommendation
              letter, which is available to view on my LinkedIn profile. I am
              always open to new challenges and opportunities, and I am excited
              to bring my skills and experience to new projects. If you have any
              questions or would like to learn more about my experience, please
              feel free to contact me.
            </p>
            <p>Looking forward to hearing from you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
