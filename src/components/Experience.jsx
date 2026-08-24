import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">CAREER</p>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {portfolioData.experience.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="period">{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <ul>{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
