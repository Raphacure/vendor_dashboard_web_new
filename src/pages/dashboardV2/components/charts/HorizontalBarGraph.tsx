import React, { Component } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HorizontalBarGraph = () => {
  const options: any = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  const dataHorBar = {
    labels: ["Enter_CC", "Enter_CCV", "Enter_Experation"],
    datasets: [
      {
        label: "Webservice Error",
        backgroundColor: "#a0d0f6",
        borderColor: "#429cdc",
        borderWidth: 1,
        data: [30, 33, 90, 81, 56, 25, 30, 100, 22, 14],
      },

      {
        label: "Webservice Failure",
        backgroundColor: "#fcb3c0",
        borderColor: "#fcb3c0",
        borderWidth: 1,
        data: [70, 12, 60, 81, 26, 70, 40, 30, 20, 44],
      },
    ],
  };

  return (
    <div>
      <Bar data={dataHorBar} height={100} options={options} />
    </div>
  );
};

export default HorizontalBarGraph;
