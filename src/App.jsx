import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showTop, setShowTop] = useState(false);

  useState(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Github />
        <Contact />
      </main>
      <Footer />
      {showTop && (
        <motion.button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </>
  );
}

export default App;
