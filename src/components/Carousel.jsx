import React from "react";
import "../styles/carousel.css";

const Carousel = () => {
  return (
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
