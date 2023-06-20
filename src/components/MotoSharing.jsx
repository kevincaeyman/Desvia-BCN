import React from "react";
import "../styles/motosharing.css";
import yego from "../assets/yego.png";

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
            href='https://www.pagina1.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={yego} alt='Yego' />
          </a>
        </div>
        <div className='circle'>
          <a
            href='https://www.pagina1.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='../assets/yego.png' alt='Yego' />
          </a>
        </div>
        <div className='circle'>
          <a
            href='https://www.pagina1.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='../assets/yego.png' alt='Yego' />
          </a>
        </div>
      </div>
    </div>
  );
};
