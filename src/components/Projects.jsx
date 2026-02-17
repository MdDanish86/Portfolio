import React from "react";
import "../styles/Projects.css";
import confluence from "../assets/images/confluence-dashboard.png"
import Business from "../assets/images/business-dashboard.png"
import Job from "../assets/images/Job-Portal-dashboard.png"
import Chatbot from "../assets/images/chatbot-dashboard.png"
import Bank from "../assets/images/bank-statement-dashboard.png"

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="heading">Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="image-wrapper">
          <img src={Business} alt="Business Consulting Dashboard" className="dashboard-img" />
          </div>
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
                    <div className="image-wrapper">

          <img src={confluence} alt="Confluence Dashboard" className="dashboard-img"/>
          </div>
          <h3 className="p1">Project Hub</h3>
          <p className="description">Project hub is a centralized platform where companies can manage and showcase all their projects in one place. I built intuitive dashboards, project listing features, and efficient navigation so that administrators can easily add, edit, and organize projects.</p>

          <div className="tech-stack">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Vercel</span>

          </div>

        </div>
        <div className="project-card">
                  <div className="image-wrapper">
          

             <img src={Job} alt="Job Portal Dashboard" className="dashboard-img"/>
          
                 </div>
          <h3 className="p1">Job Portal</h3>
          <p className="description">Developed a Job Portal web application that allows users to search and apply for jobs, while enabling employers to post and manage job listings, built with a user-friendly interface and dynamic functionality.</p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node js</span>
          </div>
        </div>


        <div className="project-card">
                  <div className="image-wrapper">
          

             <img src={Chatbot} alt="Chatbot AI" className="dashboard-img"/>
          
                 </div>
          <h3 className="p1">AI Chatbot 🤖</h3>
          <p className="description">An AI-porwered MERN stack chatbot with intelligent responses, live calculations and a fully responsive design, deployed online for real time interactions.</p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node js</span>
             <span>Groq AI/ LLM</span>

            {/* live  */}
            <a
             href="https://chatbot-1ztk.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="live-link"
             title="View Live Project"
            >🚀 Live
            </a>

          </div>
        </div>

                <div className="project-card">
                  <div className="image-wrapper">
          

             <img src={Bank} alt="AI Bank Statment Parser" className="dashboard-img"/>
          
                 </div>
          <h3 className="p1">AI Bank Statement Parser</h3>
          <p className="description">Built a full-stack AI application that processes bank statements, performs OCR + LLM-based data extraction, and generates categorized transaction insights with a live dashboard.</p>

          <div className="tech-stack">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Google Gemini API (LLM)</span>
            <span>OCR Processing</span>
            
            {/* live  */}
            <a
             href="https://bank-statement-tan.vercel.app/"
             target="_blank"
             rel="noopener noreferrer"
             className="live-link"
             title="View Live Project"
            >🚀 Live
            </a>

          </div>
        </div>


      </div>

      

    </section>
  );
}
