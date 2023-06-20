import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel"
import { Footer } from "./components/Footer";
import { Information } from "./components/Information";
import BarChart from "./components/BarChart";
import { Search } from "./components/Search";
import Filters from "./components/Filters";
import { Mobility } from "./components/Mobility";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Information />
      <BarChart />
      <Search />
      <Filters />
      <Mobility />
      <Footer />
    </>
  );
}

export default App;
