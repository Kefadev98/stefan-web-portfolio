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
      className="w-full md:h-screen p-2 flex justify-center items-center py-16 bg-gray-300 dark:bg-darkBackground"
    >
      <article
        data-aos="fade-up"
        className="max-w-[1240px] m-auto md:w-full grid grid-cols-2 gap-8"
      >
        <div data-aos="fade-up" className="col-span-2 p-10">
          <h5>Profile</h5>
          <h2 className="py-4">About Me</h2>
          <p data-aos="fade" className="py-2 text-md dark:font-light">
            My name is Stefan, and I am a 24-year-old Bachelor of Computer
            Science. y, I have honed my skills in HTML, CSS, JavaScript,
            TypeScript, and React. I specialize in building mobile responsive
            front-end UI applications that connect with APIs and other back-end
            technologies. I am highly adaptable and self-motivated, and I take
            pride in completing my work thoroughly and efficiently. I am
            dedicated to my work and can handle the pressure that comes with any
            job.
          </p>
          <p data-aos="fade" className="py-2 text-md dark:font-light">
            As a team player, I enjoy working in a dynamic environment with a
            well-developed team where everyone plays their role to achieve
            greater progress. If you want to learn more about the technologies
            and libraries I've worked with, please see my recommendation letter,
            which is available to view on my LinkedIn profile. I am always open
            to new challenges and opportunities, and I am excited to bring my
            skills and experience to new projects. If you have any questions or
            would like to learn more about my experience, please feel free to
            contact me
          </p>

          <Link href="/resume">
            <div data-aos="fade" className="flex items-center animate-pulse">
              <h4 className="py-2 font-bold cursor-pointer">
                Check out my resume.
              </h4>
              <div className="ml-2 text-gray-500">
                <BsArrowLeftCircle size={25} />
              </div>
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default About;
