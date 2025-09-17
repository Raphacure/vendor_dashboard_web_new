import { DashboardData } from "@/redux/slices/dashboard/dashboard.types";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const PiCharts: React.FC<{ data: DashboardData["genderCounts"] }> = (props) => {
  const { data } = props;

  const genderChartsColors = ["rgb(160, 170, 253)", "#00FF00", "#FF6A6A"];

  const genderData = data?.map((gender, index) => {
    return {
      name: `Group ${index}`,
      value: Number(gender.total),
      color: genderChartsColors?.[index] ?? "#FFD700"
    };
  });

  return (
    <div className="d-flex justify-content-center">
      <PieChart width={100} height={100}>
        <Pie
          data={genderData}
          innerRadius={30}
          outerRadius={50}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {genderData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color}  />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PiCharts;
