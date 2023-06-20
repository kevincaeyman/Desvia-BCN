import React, { useRef, useEffect } from "react";
import { City } from "./CityView";
import { Color } from "three";

export function Scene() {
  const refCity = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        if (refCity.current) {
            const rotationSpeed = 0.001; // Puedes ajustar la velocidad de rotación aquí
            const maxRotation = Math.PI / 7.5; // Define el ángulo máximo de rotación (por ejemplo, 45 grados)
            const scrollY = window.scrollY; // Usar scrollY
            const rotation = scrollY * rotationSpeed;

            // Asegurarse de que la rotación no exceda el máximo
            refCity.current.rotation.z = Math.min(rotation, maxRotation);
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []); // Se ejecuta una vez cuando el componente se monta

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <City
        ref={refCity}
        position={[10, 1, 0]}
        colors={[
          new Color("#427062").convertLinearToSRGB(),
          new Color("#33594e").convertLinearToSRGB(),
          new Color("#234549").convertLinearToSRGB(),
          new Color("#1e363f").convertLinearToSRGB(),
        ]}
      />
    </>
  );
}
