import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./index.css";

const App = () => {
  const [isProjects, setIsProjects] = useState(false);
  const [isResume, setIsResume] = useState(false);
  return (
    <>
      <Header
        isProjects={isProjects}
        setIsProjects={setIsProjects}
        isResume={isResume}
        setIsResume={setIsResume}
      />
      <Main isProjects={isProjects} isResume={isResume} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
