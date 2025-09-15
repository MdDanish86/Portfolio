import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-title">Md Zafiruddin Danish</h2>
      <p className="resume-contact">
        md.zafiruddin0086@gmail.com | Phone: 9763352486
      </p>

      {/* Career Objective */}
      <div className="resume-card">
        <h3>Career Objective</h3>
        <p>
          Seeking position as a Full Stack Developer where I can utilize my
          technical skills, passion for coding, and dedication to learning and
          growing in a dynamic environment. As a fresher, I aim to contribute
          my enthusiasm and adaptability to deliver innovative solutions while
          enhancing my expertise in development and full stack technologies.
        </p>

        {/* Technical Skills */}
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Languages:</strong> Core Java, JavaScript, HTML, CSS</li>
          <li><strong>Frameworks/Libraries:</strong> React.js, Node.js</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Developer Tools:</strong> Git, Visual Studio, JIRA, Slack, Postman</li>
          <li><strong>Web/OS:</strong> Windows</li>
          <li><strong>Technical Proficiencies:</strong> Object-Oriented Programming, DBMS</li>
          <li><strong>Soft Skills:</strong> Leadership, Problem-Solving, Collaborative</li>
        </ul>

        {/* Education */}
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Master’s in Computer Application</strong>, MIT World Peace University, Pune (June 2025 – July 2025)  
            <strong>CGPA:</strong> 6.82
          </li>
          <li>
            <strong>Bachelor’s in Computer Application</strong>, Vishwakarma College, Pune (June 2020 – July 2023)  
            <strong>CGPA:</strong> 8.25
          </li>
          <li>
            <strong>Higher Secondary Examination</strong>, Latur Divisional Board (June 2018 – July 2020)  
            <strong>Percentage:</strong> 56.31%
          </li>
          <li>
            <strong>Secondary School Examination</strong>, Latur Divisional Board (June 2018)  
            <strong>Percentage:</strong> 79.60%
          </li>
        </ul>

        {/* Projects */}
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Business Consulting</strong>: Dynamic investor dashboard, interactive proposal submission, real-time notifications, responsive design using React.
          </li>
          <li>
            <strong>Online Medical Shop Website</strong>: Responsive platform for purchasing medicines, intuitive UI/UX, shopping cart integration, cross-browser compatibility.
          </li>
        </ul>

        {/* Internship */}
        <h3>Internship</h3>
        <ul>
          <li>
            <strong>Intern at TLogic IT Solutions, Nanded (Jan 2025 – July 2025)</strong>: Worked on real-time React.js projects, database management in MySQL, state management, API integration, and front-end optimization.
          </li>
        </ul>

        {/* Courses & Certifications */}
        <h3>Courses & Certifications</h3>
        <ul>
          <li>Java Programming training from Infosys Springboard</li>
          <li>Web application development using HTML & CSS</li>
        </ul>

        {/* Achievements */}
        <h3>Achievements & Awards</h3>
        <ul>
          <li>Participated in National Level Poster Competition, Poona College, Pune</li>
          <li>Secured 78% in C and 70% in C++ at AIMS Computer Institute, Pune</li>
          <li>Participated in Elementary Drawing & International Grade Exams, Nanded</li>
        </ul>
      </div>

      {/* Download Button */}
      <a
        href="/Md Zafiruddin Danish Resume.pdf"
        download="Md_Zafiruddin_Danish_Resume.pdf"
        className="resume-download-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
