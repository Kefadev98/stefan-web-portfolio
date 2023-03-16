import Link from "next/link";
import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
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
      <header>
        <div className="flex items-center justify-center ml-4">
          <FaConnectdevelop
            size={60}
            className="text-slate-900 dark:text-white"
          />
          <h4 className="ml-4 text-2xl">Portfolio</h4>
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
              <li className="text-md uppercase">Home</li>
            </Link>
            <Link href="/#about">
              <li className="text-md uppercase">About</li>
            </Link>
            <Link href="/#skills">
              <li className="text-md uppercase">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="text-md uppercase">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="text-md uppercase">Contacts</li>
            </Link>
          </ul>
        </div>
        <div
          className="md:hidden text-slate-800 dark:text-gray-200"
          onClick={handleNav}
        >
          <AiOutlineMenu size={25} />
        </div>
      </header>
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
                <p className="py-4 text-slate-800 dark:text-gray-200">
                  You can use mobile navigation menu for better experience
                </p>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase text-gray-300">
                  <Link href="/">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 uppercase"
                    >
                      Home
                    </li>
                  </Link>
                  <Link href="/#about">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 uppercase"
                    >
                      About
                    </li>
                  </Link>
                  <Link href="/#skills">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 uppercase"
                    >
                      Skills
                    </li>
                  </Link>
                  <Link href="/#projects">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 uppercase"
                    >
                      Projects
                    </li>
                  </Link>
                  <Link href="/#contact">
                    <li
                      onClick={() => setNav(false)}
                      className="py-4 uppercase"
                    >
                      Contacts
                    </li>
                  </Link>
                </ul>
                <footer className="py-4 border-b border-blue-800 dark:border-blue-400">
                  <p className="uppercase tracking-widest text-blue-800 dark:text-blue-400">
                    Let's Connect
                  </p>
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
