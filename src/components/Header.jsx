import React from "react";
import { FiberContainer } from "./FiberContainer";
import "../styles/header.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='title-header'>
          <h1>Des</h1>
          <h1 className='slash'>/</h1>
          <h1 className='animate__slideInUp'>vía</h1>
        </div>
        <p className='header-description'>
          Desvíate y encuentra nuevos puntos de interés en la ciudad de
          Barcelona
        </p>
      </div>

      <div className='bg-model'>
        <FiberContainer />
      </div>
      <div className='rectangle'></div>
    </div>
  );
};
