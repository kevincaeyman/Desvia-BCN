import React from "react";
import tgrup from "../assets/t-grup.png";
import "../styles/mobility.css";

export const Mobility = () => {
  return (
    <div>
      <h2>Mobility</h2>
      <p className='description'>
        Discover valuable information on public transportation passes and
        tickets, ensuring convenient and cost-effective travel throughout
        Barcelona.
      </p>
      <div className='mobility_container'>
        <a
          href='https://www.tmb.cat/ca/tarifes-metro-bus-barcelona/senzills-i-integrats/t-grup'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={tgrup} alt='Metro Ticket' className='tgrup' />
        </a>
        <p className='description-mobility'>
          On this website, you can discover the different types of tickets that
          best suit your needs.Take a look and discover the various options
          available and make the most of your journey with hassle-free mobility
          solutions.
        </p>
      </div>
    </div>
  );
};
