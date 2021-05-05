import React from "react";
import { Project } from "./Project";
import { projects } from "./data";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects">
      {/* {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })} */}
      <p>I'm working on them ✍️</p>
    </section>
  );
};
