import React from "react";
import { Projects } from "./Projects";
import { Resume } from "./Resume";

export const Main = ({ isProjects, isResume }) => {
  if (isProjects) {
    return (
      <main>
        <Projects />
      </main>
    );
  }
  if (isResume) {
    return (
      <main>
        <Resume />
      </main>
    );
  }
  return (
    <main>
      <p>Currently under construction.</p>
    </main>
  );
};
