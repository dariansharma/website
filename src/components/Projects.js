import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects">
      <article>
        <a href="https://emojishop.netlify.app/">Emoji Shop</a>
        <p>
          Learning more React and React Router. Example web shop with different
          rendered content and urls.
        </p>
      </article>
      <article>
        <a href="https://todo-app-ce094.web.app">Firebase Todo App</a>
        <p>
          Learning basic React components, state, props, form input, form
          handling, useState, useEffect, Google Firebase and Firestore Database.
        </p>
      </article>
    </section>
  );
};
