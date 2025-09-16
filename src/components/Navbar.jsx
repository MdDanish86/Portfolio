import React, { useState } from "react";
import "../styles/Navbar.css";
import { GiGamepad } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Danish.</div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`navbar-shortcuts ${menuOpen ? "show" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#game" onClick={() => setMenuOpen(false)}>
          <GiGamepad style={{ verticalAlign: "middle", marginRight: "8px" }} />
          Game
        </a>
        {/* <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a> */}
        <a href="#resume" onClick={() => setMenuOpen(false)}>
          <FaFileAlt style={{ verticalAlign: "middle", marginRight: "8px" }} />
          Resume
        </a>
      </div>
    </nav>
  );
}
