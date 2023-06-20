import React from "react";
import "../styles/carousel.css";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import mapa from "../assets/mapa_calor_bcn.jpg";

const Carousel = () => {
  return (
    <div>
      <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-F7F1E5 rounded-box'>
        <div
          className='carousel-item'
          style={{ width: "400px", height: "300px" }}
        >
          <BarChart />
        </div>
        <div className='carousel-item'>
          <LineChart />
        </div>
        <div className='carousel-item item-mapa'>
          <p className='title-mapa'>
            Mapa de calor de puntos más concurridos en Bcn
          </p>
          <img src={mapa} alt='mapa calor bcn'></img>
        </div>

        <div className='carousel-item'>
          <BarChart />
        </div>
        <div className='carousel-item'>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
