import React from "react";
import { Projects } from "./Projects";

export const Main = ({ isProjects }) => {
  return (
    <main>
      {isProjects ? (
        <Projects />
      ) : (
        <p>🏗 It is currently under construction👷</p>
      )}
      {/* <p>Welcome to my website</p>
      <br></br>
      <p>🏗 It is currently under construction👷</p> */}
    </main>
  );
};
