import React from "react";
import "../styles/carousel.css";
import BarChart from "./BarChart";

const Carousel = () => {
  return (

    <div>
      <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-F7F1E5 rounded-box'>
        <div className='carousel-item'>
          <BarChart />
        </div>
        <div
          className='carousel-item'
          style={{ width: "400px", height: "300px" }}
        >
          <BarChart />
        </div>
        <div className='carousel-item'>
          <BarChart />
        </div>
        <div className='carousel-item'>
          <BarChart />
        </div>
        <div className='carousel-item'>
          <BarChart />

    <div className="carousel_container">
      <div className="carousel carousel-center max-w-l p-4 space-x-4 bg-F7F1E5 rounded-box">
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
        </div>
        <div className="carousel-item">
          <img
            className="rounded-box"
          />

        </div>
      </div>
    </div>
  );
};

export default Carousel;
