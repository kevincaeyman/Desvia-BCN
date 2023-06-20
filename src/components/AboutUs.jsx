import React from "react";
import video from "../assets/aboutus.mp4";
import "../styles/aboutus.css";

export const AboutUs = () => {
  return (
    <>
      <h2>About Us</h2>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <video autoPlay loop muted className='w-full h-auto video-about'>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'>
          <p className='description about-text mt-4 md:mt-8'>
            At Des/vía, we are committed to promoting equitable and sustainable
            tourism in Barcelona. Through our web platform, we provide detailed
            information about the city's neighborhoods, up-to-date tourism
            statistics, and recommendations for lesser-known yet charming places
            in each district. We believe in customization, allowing users to
            adjust recommendations according to their preferences. Additionally,
            we prioritize sustainable mobility by offering public transportation
            options and encouraging the use of shared electric scooters. Join us
            in revitalizing the less touristy areas, fostering economic and
            social growth, and enjoying an authentic experience in Barcelona.
          </p>
        </div>
      </div>
    </>
  );
};
