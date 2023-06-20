import React from "react";
import "../styles/motosharing.css";
import yego from "../assets/yego.png";
import ecooltra from "../assets/ecooltra.jpeg";
import acciona from "../assets/acciona.png";

export const MotoSharing = () => {
  return (
    <div>
      <h2>Moto Sharing</h2>
      <p className='description'>
        Desvíate y encuentra nuevos puntos de interés en la ciudad de Barcelona
      </p>
      <div className='container_sharing'>
        <div className='circle'>
          <a
            href='https://landing.rideyego.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={yego} alt='Yego' />
          </a>
        </div>
        <div className='circle circleimg'>
          <a
            href='https://www.acciona.com/es/?utm_medium=cpc&utm_medium=cpc&utm_source=google&utm_campaign=12975152551&utm_term=acciona_b'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={acciona} alt='Yego' />
          </a>
        </div>
        <div className='circle circleimg'>
          <a
            href='https://cooltra.com/es/alquiler-por-minutos-horas/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={ecooltra} alt='Yego' />
          </a>
        </div>
      </div>
    </div>
  );
};
