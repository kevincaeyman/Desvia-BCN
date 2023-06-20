import React from "react";
import LazyLoad from "react-lazy-load";
import "../styles/carousel.css";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import mapa from "../assets/mapa_calor_bcn.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  return (
    <div>
      <p className='description horizontal'>
        Scroll horizontally
        <div className='arrow-scroll'>
          <AiOutlineArrowRight />
        </div>
      </p>

      <div className='carousel carousel-center max-w-lg p-4 space-x-4 bg-F7F1E5 rounded-box'>
        <LazyLoad>
          <div
            className='carousel-item'
            style={{ width: "400px", height: "300px" }}
          >
            <BarChart />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div className='carousel-item'>
            <LineChart />
          </div>
        </LazyLoad>
        <LazyLoad>
          <div className='carousel-item item-mapa'>
            <p className='title-mapa'>
              Mapa de calor de puntos más concurridos en Bcn
            </p>
            <img src={mapa} alt='mapa calor bcn' />
          </div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default Carousel;
