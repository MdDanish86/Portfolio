import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/yourgithub">github.com/yourgithub</a></p>
    </section>
  );
}
