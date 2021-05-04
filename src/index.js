import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./css/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
