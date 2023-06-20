import React from "react";
import fresas from "../assets/fresas.jpg";
import peaches from "../assets/peaches.jpg";
import bananas from "../assets/bananas.jpg";
import "../styles/carousel.css";

const Carousel = () => {
  return (
    <div className="carousel_container">
      <div className="carousel carousel-center max-w-l p-4 space-x-4 bg-F7F1E5 rounded-box">
        <div className="carousel-item">
          <img src={fresas} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={peaches} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src={bananas}
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
