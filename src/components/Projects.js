import React from "react";
import { Project } from "./Project";
import { projects } from "./data";
import "./Projects.css";

export const Projects = () => {
  return (
    <section>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </section>
  );
};
