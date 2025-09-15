import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A cool project description goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Another awesome project description.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>More project details go here.</p>
        </div>
      </div>
    </section>
  );
}
