import React from "react";
import "../styles/Hero.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Md Zafiruddin Danish</h1>
      <p className="pp1">Full Stack Developer</p>
      <p className="p2">Skilled in building responsive, user-friendly web applications and eager to contribute innovative solutions as a fresher.</p>
       
         <div className="social-links">
      <a
        href="mailto:md.zafiruddin0086@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Email"
      >
        <SiGmail />
      </a>
      <a
        href="https://www.linkedin.com/in/md-zafiruddin-danish-31a348261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      
      {/* <a
        href="https://github.com/your‑github‑username"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="GitHub"
      >
        <FaGithub />
      </a> */}

    </div>
       
       <a href="#projects" className="mywork">View My Work</a>



    </section>

  );
}
