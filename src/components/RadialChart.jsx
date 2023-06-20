import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Doughnut, Tooltip, Legend);

const RadialChart = () => {
  const data = {
    labels: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"],
    datasets: [
      {
        data: [20, 30, 50],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  return (
    <div>
      <h1>Gráfico Radial</h1>
      <Doughnut data={data} />
    </div>
  );
};

export default RadialChart;
