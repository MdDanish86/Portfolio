import React from "react";
import "../styles/Navbar.css";
import { GiGamepad } from 'react-icons/gi';
import { FaFileAlt } from 'react-icons/fa';



export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Danish.</div>
      <div className="navbar-shortcuts">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        {/* <a href="#game">🎮 Game</a> */}

        <a href="#game">
          <GiGamepad style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Game
        </a>


        <a href="#contact">Contact</a>



        <a href="#resume">
          <FaFileAlt style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Resume
        </a>



      </div>
    </nav>
  );
}
