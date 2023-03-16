import React from "react";
import Link from "next/link";
//React Icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Information = () => {
  return (
    <div className="information-form">
      <div className="lg:w-full p-4 h-full flex flex-col align-center justify-center">
        <div className="w-full flex flex-col border-b-2 border-indigo-500">
          <p className="py-4 text-center text-lg">
            If you like my portfolio and projects, please contact me.
          </p>
        </div>
        <div className="w-full">
          <p className="uppercase pt-6">Connect With Me</p>
          <div className="w-full flex justify-between py-4">
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
            <Link href="/resume">
              <div className="social-icon ">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
