import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
