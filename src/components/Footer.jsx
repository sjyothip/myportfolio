import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{portfolioData.name}</strong>
          <p>{portfolioData.role}</p>
        </div>
        <div className="footer-socials">
          <a href={portfolioData.github} target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
          <a href={`mailto:${portfolioData.email}`}><FiMail /></a>
        </div>
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
