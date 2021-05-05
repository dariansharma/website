import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./index.css";

const App = () => {
  const [isProjects, setIsProjects] = useState(false);
  console.log(isProjects);
  return (
    <>
      <Header isProjects={isProjects} setIsProjects={setIsProjects} />
      <Main isProjects={isProjects} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
