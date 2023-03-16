import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
//React icons
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import BackgroundAnimation from "./BackgroundAnimation";
const Main = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main className="flex align-center justify-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center align-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div data-aos="fade-up" className="z-10">
            <p className="uppercase text-sm tracking-widest hover:scale-110 ease-in duration-300">
              WELCOME TO MY PERSONAL PORTFOLIO
            </p>
            <h1 className="py-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                Stefan
              </span>
            </h1>
            <h1 className="py-2">A Front-End Web Developer</h1>
            <p className="py-4 sm:max-w-[70%] m-auto hover:scale-110 ease-in duration-300">
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <Link
                href="www.linkedin.com/in/stefan-kovačić-bb6599230/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link
                href="https://github.com/Kefadev98"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <FaGithub />
                </div>
              </Link>
              <Link href="/#contact">
                <div className="social-icon">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="social-icon">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
          <BackgroundAnimation />
        </div>
      </div>
    </main>
  );
};

export default Main;
