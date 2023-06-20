import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";

import { FiberContainer } from "./components/FiberContainer";

import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousel"
import { Footer } from "./components/Footer";
import { Information } from "./components/Information";
import BarChart from "./components/BarChart";
import { Search } from "./components/Search";
import Filters from "./components/Filters";


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

      <Navbar />
      <Header />
      <Carousel />
      <Information />
      <BarChart />
      <Search />
      <Filters />
      <Footer />

    </>
  );
}

export default App;
