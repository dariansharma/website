import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import emojishop from "./emojishop.png";

const App = () => {
  return (
    <div className="container">
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="about">
        <h1>Darian Sharma</h1>
        <p>Computer Science student at the University of Manitoba</p>
      </section>
      <section id="projects">
        <h1>Projects</h1>
        <article className="container-project-card">
          <img src={emojishop} alt="Emoji Shop" />
          <div className="container-project-links">
            <a href="https://emojishop.netlify.app/#/">
              <p>demo</p>
            </a>
            <a href="https://github.com/dariansharma/emojishop">
              <p>github</p>
            </a>
          </div>
        </article>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <a href="mailto:dariansharma@gmail.com">
          <p>dariansharma@gmail.com</p>
        </a>
        <a
          href="https://github.com/dariansharma"
          target="_blank"
          rel="noreferrer"
        >
          <p>github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/darian-sharma-b2a658212/"
          target="_blank"
          rel="noreferrer"
        >
          <p>linkedin</p>
        </a>
      </section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
