//Usememo sirve para que no tenga que volver a cargar el chart si los datos no cambian
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Carousel from "./Carousel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [59.3, 27.8, 34.7];
const labels = [2019, 2020, 2021];

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
const colors = ["#FF6384", "#36A2EB", "#4BC0C0"];

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Ocupaciones hoteles",
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
      <Line data={data} options={options} />
    </div>
  );
}
