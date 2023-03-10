import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "" : "dark"}>
      <Head>
        <title>Stefan | Front-end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
