import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="heading">Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3 className="p1">Business Consulting</h3>
          <p className="description">Developed bizpartners.site, an India‑wide marketplace where startups can find angel investors. Worked on implementing responsive UI, secure login/register flows, and a pay‑on‑performance listing model to enable transparent interactions.</p>

          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vercel</span>
            <span>MongoDB</span>
          </div>

        </div>
        <div className="project-card">
          <h3 className="p1">Confluence</h3>
          <p className="description">Confluence is a centralized platform where companies can manage and showcase all their projects in one place. I built intuitive dashboards, project listing features, and efficient navigation so that administrators can easily add, edit, and organize projects.</p>

          <div className="tech-stack">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vercel</span>

          </div>

        </div>
        <div className="project-card">
          <h3 className="p1">Online Medical Shop</h3>
          <p className="description">Developed an Online Medical Shop platform that enables users to browse and order medicines and healthcare products anytime, anywhere. Implemented a user-friendly interface with secure shopping cart functionality, responsive design, and smooth checkout process to enhance accessibility and convenience.</p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
