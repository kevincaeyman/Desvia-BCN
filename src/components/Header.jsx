import React from "react";
import "../styles/header.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h1>Des</h1>
        <h1 className='slash'>/</h1>
        <h1 className='animate__slideInUp'>via</h1>
      </div>

      <p className='header-description'>
        Desvíate y encuentra nuevos puntos de interés en la ciudad de Barcelona
      </p>
    </div>
  );
};
