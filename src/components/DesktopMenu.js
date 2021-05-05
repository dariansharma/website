import React from "react";

export const DesktopMenu = ({ isProjects, setIsProjects }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setIsProjects(!isProjects)}>Projects</li>
        <li>Resume</li>
      </ul>
    </nav>
  );
};
