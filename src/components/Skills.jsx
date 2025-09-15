import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <p>C, C++, Core Java, HTML, CSS, JavaScript</p>
        </div>

        {/* Web & Backend */}
        <div className="skill-card">
          <h3>Web & Backend</h3>
          <p>React.js, Node.js</p>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>Databases</h3>
          <p>MySQL, MongoDB</p>
        </div>

        {/* Cloud & DevOps */}
        <div className="skill-card">
          <h3>Cloud & DevOps</h3>
          <p>Git, GitHub, Postman, JIRA, Slack</p>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <p>VS Code, Browser DevTools</p>
        </div>

      </div>
    </section>
  );
}
