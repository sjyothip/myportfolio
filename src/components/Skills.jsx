import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">TECHNOLOGIES</p>
          <h2>Skills & tools</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <motion.div
              className="skill-card"
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h3>{category}</h3>
              <div className="tag-list">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
