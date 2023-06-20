//Usememo sirve para que no tenga que volver a cargar el chart si los datos no cambian
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Carousel from "./Carousel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [1.94, 0, 0, 9.7];
const labels = [2019, 2020, 2021, 2022];

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};
const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Viviendas de uso turístico",
          tension: 0.3,
          data: scores,
          backgroundColor: colors,
        },
      ],
      labels,
    };
  }, []);
  return (
    <div className='app barchart'>
      <Bar data={data} options={options} />
    </div>
  );
}
