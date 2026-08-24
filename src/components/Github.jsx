import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Github() {
  return (
    <section className="github-section">
      <div className="container">
        <motion.div
          className="github-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <FiGithub className="github-icon" />
          <div>
            <p className="eyebrow">OPEN SOURCE & CODE</p>
            <h2>See more of my work on GitHub.</h2>
            <p>Explore repositories, experiments, and projects.</p>
          </div>
          <a className="primary-btn" href={portfolioData.github} target="_blank" rel="noreferrer">
            Visit GitHub <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
