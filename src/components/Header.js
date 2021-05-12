import React, { useEffect, useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import "./Header.css";

export const Header = ({
  isProjects,
  setIsProjects,
  isResume,
  setIsResume,
}) => {
  const [size, setSize] = useState(window.innerWidth);
  const handleResize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <a className="darian-sharma" href="https://dariansharma.netlify.app">
        Darian Sharma
      </a>
      {size > 768 ? (
        <DesktopMenu
          isProjects={isProjects}
          setIsProjects={setIsProjects}
          isResume={isResume}
          setIsResume={setIsResume}
        />
      ) : (
        <MobileMenu />
      )}
    </header>
  );
};
