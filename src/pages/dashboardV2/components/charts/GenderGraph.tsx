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



export function GenderGraph(prps: any) {
  const { data } = prps;
  console.log("GenderGraph Data:", data);
  const data1 = {
    labels: ["Male", "Female", "Un Specified"],
    datasets: [
      {
        // label: "# of Votes",
        data: [data?.male, data?.female, data?.unspecified, ],
        backgroundColor: ["#b0820c", "#FFCE56", "#00C49F", "#36A2EB", "#FF6384"],
        borderColor: ["#b0820c", "#FFCE56", "#00C49F", "#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data1} />;
}
