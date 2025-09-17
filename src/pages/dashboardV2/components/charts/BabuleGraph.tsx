import { useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, CategoryScale);

export default function BabuleGraph() {
  const labels = ["2019.01", "2019.02", "2019.03", "2019.04", "2019.05"];
  const [sliderValue, setSliderValue] = useState(labels.length);
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  const data = {
    labels: labels.slice(0, sliderValue),
    datasets: [
      {
        label: "Source title",
        data: [
          {
            x: 100,
            y: 100,
            r: 10,
          },
          {
            x: 360,
            y: 160,
            r: 20,
          },
          {
            x: 300,
            y: 660,
            r: 5,
          },
        ],
        backgroundColor: "#1f77b4",
      },
      {
        label: "Meta",
        data: [
          {
            x: 300,
            y: 600,
            r: 60,
          },
          {
            x: 360,
            y: 160,
            r: 30,
          },
          {
            x: 200,
            y: 160,
            r: 27,
          },
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <Bubble data={data} />
    </>
  );
}
