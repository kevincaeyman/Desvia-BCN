import React from "react";
import "./styles/index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <h2>Hola</h2>
      <p className='description'>
        Desvíate y encuentra nuevos puntos de interés en la ciudad de Barcelona
      </p>
    </>
  );
}

export default App;
