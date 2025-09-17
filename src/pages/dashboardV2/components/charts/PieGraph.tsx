// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const PieGraph = (props: any) => {
  const { data } = props;
  console.log("PieGraph Data:", data, data['20-35']);

  const data1 = {
    labels: ["0-20","20-35", "35-50", "60-70", " 70+"],
    datasets: [
      {
        label: "Votes",
        data: [data['20-35'], data['20-35'], data['35-50'], data['60-70'], data['70+']],
        backgroundColor: [
          "#FF6384",
          "#b0820c",
          "#FFCE56",
          "#00C49F",
          "#36A2EB",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="pie-graph-div">
      <Pie data={data1} />
    </div>
  );
};

export default PieGraph;
