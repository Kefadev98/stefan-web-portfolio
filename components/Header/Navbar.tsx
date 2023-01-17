import Link from "next/link";
import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaConnectdevelop } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
//Internal imports
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center bg-gray-300 dark:bg-[#00040F] w-ful h-full px-2 2xl:px16">
        <div className="flex items-center justify-center ml-4">
          <FaConnectdevelop
            size={60}
            className="text-slate-900 dark:text-white"
          />
          <p className="ml-4 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 ease-in duration-200">
            Portfolio
          </p>
          <div className="w-9 h-9 ml-6 flex justify-center align-center rounded-full bg-gray-200 dark:bg-slate-900">
            <button
              className="text-slate-700 dark:text-gray-200"
              onClick={toggleTheme}
            >
              {theme ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </div>
        </div>

        <div className="w-2/4 mr-14">
          <ul className="hidden md:flex justify-evenly">
            <Link href="/">
              <li className="ml-10 text-md uppercase text-slate-900 hover:scale-110 ease-in duration-200 dark:text-gray-200">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-md uppercase text-slate-900 hover:scale-110 ease-in duration-200 dark:text-gray-200">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-md uppercase text-slate-900 hover:scale-110 ease-in duration-200 dark:text-gray-200">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md uppercase text-slate-900 hover:scale-110 ease-in duration-200 dark:text-gray-200">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md uppercase text-slate-900 hover:scale-110 ease-in duration-200 dark:text-gray-200">
                Contacts
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="md:hidden text-slate-800 dark:text-gray-200"
          onClick={handleNav}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/*Mobile */}
      {nav && (
        <div
          className={"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"}
        >
          <div
            className={
              "fixed left-0 top-0 w-5/6 sm:w-3/4 md:w-2/4 h-screen bg-gray-200 dark:bg-slate-900 p-10"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <FaConnectdevelop
                  size={60}
                  className="text-slate-800 dark:text-gray-200"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-md text-slate-800 dark:text-gray-200 shadow-slate-800 dark:shadow-blue-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-blue-800 dark:border-blue-400 my-4">
                <p className="w-[85%] md:w-[90%] py-4 text-slate-800 dark:text-gray-200">
                  You can use mobile navigation menu for better experience
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase text-gray-300">
                  <Link href="/">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-md text-slate-800 dark:text-gray-200"
                    >
                      Home
                    </li>
                  </Link>
                  <Link href="/#about">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-md text-slate-800 dark:text-gray-200"
                    >
                      About
                    </li>
                  </Link>
                  <Link href="/#skills">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-md text-slate-800 dark:text-gray-200"
                    >
                      Skills
                    </li>
                  </Link>
                  <Link href="/#projects">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-md text-slate-800 dark:text-gray-200"
                    >
                      Projects
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 text-md text-slate-800 dark:text-gray-200"
                    >
                      Contacts
                    </li>
                  </Link>
                </ul>
                <footer className="pt-20">
                  <p className="uppercase tracking-widest text-blue-800 dark:text-blue-400">
                    Let's Connect
                  </p>
                  <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                    <Link
                      href="https://www.linkedin.com/in/stefan-kovacic-bb6599230/"
                      target="_blank"
                    >
                      <div className="rounded-full shadow-md text-slate-800 dark:text-gray-200 shadow-slate-800 dark:shadow-blue-400 p-3 cursor-pointer">
                        <FaLinkedinIn />
                      </div>
                    </Link>

                    <Link href="https://github.com/Kefadev98" target="_blank">
                      <div className="rounded-full shadow-md text-slate-800 dark:text-gray-200 shadow-slate-800 dark:shadow-blue-400 p-3 cursor-pointer">
                        <FaGithub />
                      </div>
                    </Link>
                    <Link href="/resume">
                      <div className="rounded-full shadow-md text-slate-800 dark:text-gray-200 shadow-slate-800 dark:shadow-blue-400 p-3 cursor-pointer">
                        <BsFillPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
