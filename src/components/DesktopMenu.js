import React from "react";

export const DesktopMenu = ({
  isProjects,
  setIsProjects,
  isResume,
  setIsResume,
}) => {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setIsProjects(true);
            setIsResume(false);
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            setIsResume(true);
            setIsProjects(false);
          }}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
};
