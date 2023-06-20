import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
    </>
  );
}

export default App;
