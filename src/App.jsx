import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { FiberContainer } from "./components/FiberContainer";

function App() {
  return (
    <>
      <Header/>
      <div className="bg-model">
        <FiberContainer />
      </div>
      <div className="test">

      </div>
      <div className="test1">

      </div>
    </>
  );
}

export default App;
