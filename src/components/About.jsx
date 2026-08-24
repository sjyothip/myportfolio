import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">ABOUT ME</p>
          <h2>Building products with purpose.</h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {portfolioData.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="quick-facts">
            <div><strong>{portfolioData.role}</strong><span>Professional focus</span></div>
            <div><strong>{portfolioData.location}</strong><span>Based in</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
