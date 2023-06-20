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

const scores = [6, 5, 5, 3, 4, 4, 6, 4, 5];
const labels = [100, 200, 300, 400, 500, 600, 700];

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

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          tension: 0.3,
          data: scores,
          backgroundColor: "   #A0D995",
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
