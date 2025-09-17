import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const data = {
  labels: ["Broun", "Yellow", "Green", "Blue", "Red"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 15, 19, 3, 5],
      backgroundColor: ["#b0820c", "#FFCE56", "#00C49F", "#36A2EB", "#FF6384"],
      borderColor: ["#b0820c", "#FFCE56", "#00C49F", "#36A2EB", "#FF6384"],
      borderWidth: 1,
    },
  ],
};

export function DoughnutGraph() {
  return <Doughnut data={data} />;
}
