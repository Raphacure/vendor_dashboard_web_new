import React, { useEffect, useState } from "react";
import { expectedRoiData } from "./constant";

const RoiCombinedAnalysis = () => {
  const [projectedSavings, setProjectedSavings] = useState<any[]>([]);

  const [filters, setFilters] = useState({
    dateType: "1month",
  });

  useEffect(() => {
    const filteredRoiData = expectedRoiData.find((item) => {
      return item.period === filters.dateType;
    });
    setProjectedSavings(filteredRoiData?.data || []);
  }, [filters]);

  return (
    <>
      <div className="" id="el-a3dbxc0c">
        <div className="!mb-8" id="el-i92bmo83">
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            id="el-i9e4l2jp"
          >
            ROI Analysis
          </h1>
          <p className="text-gray-600" id="el-2iyvdvkc">
            Comprehensive return on investment analysis for your healthcare
            spending
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)] !p-6">
          <div className="flex justify-between gap-3 mb-3">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              id="el-5v2zfs41"
            >
              {
                expectedRoiData.find((item) => {
                  return item.period === filters.dateType;
                })?.label
              }{" "}
              Projection
            </h3>
            <select
              value={filters.dateType}
              onChange={(e) =>
                setFilters({ ...filters, dateType: e.target.value })
              }
              className="border border-gray-300 rounded-md h-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {expectedRoiData.map((period) => (
                <option key={period.period} value={period.period}>
                  {period.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3" id="el-xoharhdz">
            {projectedSavings.map((data, index) => (
              <RoiBox
                key={index}
                title={data.title}
                value={data.value}
                description={data.description}
                color={data.color}
              />
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center !mt-4"
          id="el-dd5vs515"
        >
          <button
            className="bg-blue-600 text-white !px-8 !py-3 !rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            id="el-zmifmhue"
          >
            Download ROI Report
          </button>
          <button
            className="bg-green-600 text-white !px-8 !py-3 !rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
            id="el-8q2zfc3z"
          >
            Optimize My Plan
          </button>
          <button
            className="border border-gray-300 text-gray-700 !px-8 !py-3 !rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            id="el-h0bjsk74"
          >
            View Detailed Analysis
          </button>
        </div>
      </div>
    </>
  );
};

interface RoiBoxProps {
  title: string;
  value: string;
  description: string;
  color: string;
}

const RoiBox: React.FC<RoiBoxProps> = ({
  title,
  value,
  description,
  color,
}) => {
  const bgColorClass = `bg-${color}-50`;
  const textColorClass = `text-${color}-700`;
  const valueColorClass = `text-${color}-900`;
  const descriptionColorClass = `text-${color}-600`;

  return (
    <div className={`${bgColorClass} rounded-lg p-4`}>
      <div className="flex justify-between items-center mb-2">
        <span className={`${textColorClass} font-medium`}>{title}</span>
        <span className={`${valueColorClass} font-bold`}>{value}</span>
      </div>
      <p className={`${descriptionColorClass} text-sm`}>{description}</p>
    </div>
  );
};

export default RoiCombinedAnalysis;
