import React from "react";
import "./Project.css";
import lizard from "../basilisk-5951351_640.jpg";

export const Project = ({ project }) => {
  return (
    <article>
      <img
        src={lizard}
        alt="lizard"
        style={{ width: "200px", height: "150px" }}
      ></img>
      <a href="https://www.google.com">Image by Yan Cabrera from Pixabay </a>
    </article>
  );
};
