import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Information } from "./components/Information";
import BarChart from "./components/BarChart";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Information />
      <BarChart />
      <Footer />
    </>
  );
}

export default App;
