import React from "react";
import Link from "next/link";
//React Icons
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Information = () => {
  return (
    <div className="w-10/12 sm:w-full col-span-3 lg:col-span-2  h-full shadow-md shadow-slate-800 dark:shadow-blue-400 rounded-xl p-4 text-gray-300 bg-[url('/assets/contact.jpg')] bg-bottom bg-cover">
      <div className="lg:w-full p-4 h-full flex flex-col align-center justify-center">
        <div className="w-full flex flex-col border-b-2 border-indigo-600">
          <p className="py-4 text-center text-lg">
            If you like my portfolio and projects, please contact me.
          </p>
        </div>
        <div className="w-full">
          <p className="uppercase pt-6">Connect With Me</p>
          <div className="w-full flex justify-between py-4">
            <Link
              href="https://www.linkedin.com/in/stefan-kovacic-bb6599230/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-gray-400 text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/Kefadev98"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-gray-400 text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full bg-gray-400 text-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
