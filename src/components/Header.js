import React, { useEffect, useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Header = ({ isProjects, setIsProjects }) => {
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
      <h1>Darian Sharma</h1>
      {size > 768 ? (
        <DesktopMenu isProjects={isProjects} setIsProjects={setIsProjects} />
      ) : (
        <MobileMenu />
      )}
    </header>
  );
};
