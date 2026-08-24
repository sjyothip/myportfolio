import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
                {project.demo !== "#" && <a href={project.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Live</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
