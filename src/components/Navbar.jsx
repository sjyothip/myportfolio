import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Services", "services"],
  ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>{portfolioData.name.split(" ")[0]}</span><b>.</b>
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <a href={portfolioData.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
