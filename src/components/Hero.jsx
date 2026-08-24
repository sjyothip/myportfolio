import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">AVAILABLE FOR OPPORTUNITIES</p>
          <h1>
            Hi, I'm <span>{portfolioData.name}</span>.
            <br />
            {portfolioData.role}.
          </h1>
          <p className="hero-text">{portfolioData.heroText}</p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={scrollToProjects}>
              View My Work <FiArrowRight />
            </button>
            <a className="secondary-btn" href={portfolioData.resume} download>
              Resume <FiDownload />
            </a>
          </div>

          <div className="socials">
            <a href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={`mailto:${portfolioData.email}`} aria-label="Email">@</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="code-window">
            <div className="window-bar"><i /><i /><i /></div>
            <pre>{`const developer = {
  name: "${portfolioData.name}",
  role: "Full Stack Developer",
  frontend: ["React", "React Native"],
  backend: ["Node.js", "Express"],
  database: ["MongoDB"],
  focus: "Building useful products"
};

developer.build();`}</pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
