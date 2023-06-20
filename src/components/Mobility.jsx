import React from 'react'
import tgrup from "../assets/t-grup.png"
import "../styles/mobility.css"

export const Mobility = () => {
  return (
    <div>
      <h2>Mobility</h2>
      <p className='description'>
        Desvíate y encuentra nuevos puntos de interés en la ciudad de Barcelona
      </p>
      <div>
        <div className='mobility_container'>
          <a
            href='https://www.tmb.cat/ca/tarifes-metro-bus-barcelona/senzills-i-integrats/t-grup'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={tgrup} alt='Metro Ticket' className='tgrup' />
          </a>
          <p className='description-mobility'>
            Desvíate y encuentra nuevos puntos de interés en la ciudad de
            Barcelona
          </p>
        </div>
      </div>
    </div>
  );
};
