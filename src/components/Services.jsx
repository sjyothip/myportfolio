import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiServer } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

const icons = [FiCode, FiSmartphone, FiServer];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <p className="eyebrow">WHAT I DO</p>
          <h2>Services</h2>
        </div>

        <div className="services-grid">
          {portfolioData.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Icon />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
