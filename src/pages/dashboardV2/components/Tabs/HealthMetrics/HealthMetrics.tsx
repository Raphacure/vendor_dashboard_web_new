import DemographicsCard from "../HealthWallet/Cards/DemographicsCard/DemographicsCard";
import DetailedServiceCard from "../ServiceUtilization/Cards/DetailedServiceTable/DetailedServiceCard";
import HealthMetricsStyled from "./HealthMetrics.styled";
import HealthCategoryAnalysisCard from "./Cards/HealthCategoryAnalysisCard/HealthCategoryAnalysisCard";
import { DoughnutGraph } from "../../charts/DoughnutGraph";
import { GrowthInfoList } from "../ServiceUtilization/Cards/GrowthInfoCard/GrowthInfoCard";
import { HealthRiskList } from "./Cards/HealthRiskCard/HealthRiskCard";
import { healthMetricsAPI } from "@/redux/slices/reports/reportsService";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";


const HealthCategoryData = [
  {
    title: "Cardiovascular Health",
    status: "Good",
    percentage: 77, // Estimated from image
    metrics: [
      { label: "Excellent", value: "45%", color: "green" },
      { label: "Good", value: "32%", color: "blue" },
      { label: "Fair", value: "18%", color: "yellow" },
      { label: "Poor", value: "5%", color: "red" },
    ],
  },
  {
    title: "Mental Health",
    status: "Fair",
    percentage: 73, // Estimated from image
    metrics: [
      { label: "Excellent", value: "38%", color: "green" },
      { label: "Good", value: "35%", color: "blue" },
      { label: "Fair", value: "22%", color: "yellow" },
      { label: "Poor", value: "5%", color: "red" },
    ],
  },
  {
    title: "Physical Fitness",
    status: "Good",
    percentage: 80, // Estimated from image
    metrics: [
      { label: "Excellent", value: "42%", color: "green" },
      { label: "Good", value: "38%", color: "blue" },
      { label: "Fair", value: "15%", color: "yellow" },
      { label: "Poor", value: "5%", color: "red" },
    ],
  },
  {
    title: "Nutrition",
    status: "Fair",
    percentage: 70, // Estimated from image
    metrics: [
      { label: "Excellent", value: "28%", color: "green" },
      { label: "Good", value: "42%", color: "blue" },
      { label: "Fair", value: "25%", color: "yellow" },
      { label: "Poor", value: "5%", color: "red" },
    ],
  },
  {
    title: "Sleep Quality",
    status: "Good",
    percentage: 75, // Estimated from image
    metrics: [
      { label: "Excellent", value: "35%", color: "green" },
      { label: "Good", value: "40%", color: "blue" },
      { label: "Fair", value: "20%", color: "yellow" },
      { label: "Poor", value: "5%", color: "red" },
    ],
  },
  {
    title: "Stress Levels",
    status: "Moderate",
    percentage: 65, // Estimated from image
    metrics: [
      { label: "Low", value: "32%", color: "green" },
      { label: "Moderate", value: "45%", color: "yellow" },
      { label: "High", value: "18%", color: "red" },
      { label: "Very High", value: "5%", color: "red" },
    ],
  },
];

const HealthMetrics = () => {
  const dispatch = useDispatch();

  const { healthMetricsInfo } = useSelector((state: any) => state?.reports);
  const { user } = useSelector((state: any) => state?.auth);
  console.log("Health useruser:", user);
  const clientId = user?.roles[0]?.linkable_id || user?.roles[0]?.client?.id;
  // const [healthMetricsData, setHealthMetricsData] = useState(healthMetricsData);
  useEffect(() => {
    if(clientId){
      const databody ={
        "client_id": clientId,
        "startDate":"2020-04-14",
        "endDate":"2025-07-14"
      }
      dispatch(healthMetricsAPI(databody));  
    }
  }
  , [dispatch]);



const healthMetricsData = [
  {
    name: "Overall Health Score",
    price: `${healthMetricsInfo?.healthScore || "0"}`,
    subTitle: "Out of 100",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747981499421.png",
  },
  {
    name: "Active Employees",
    price: `${healthMetricsInfo?.activeEmployees || "0"}`,
    subTitle: `Out of ${healthMetricsInfo?.activeEmployees || "0"}`,
  },
  {
    name: "Health Checkups",
    price: `${healthMetricsInfo?.healthCheckups || "0"}`,
    subTitle: `Out of ${healthMetricsInfo?.healthCheckups || "0"}`,
  },
  {
    name: "High Risk Cases",
    price: `${healthMetricsInfo?.highRiskCases || "0"}`,
    subTitle: `Out of ${healthMetricsInfo?.healthCheckups || "0"}`,
  },
];


  return (
    <>
      <HealthMetricsStyled>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Health Metrics
              </h1>
              <p className="mt-2 text-gray-600">
                Monitor employee health trends and wellness indicators
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3 gap-2 mb-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
              <button
                // onClick={"openModal('metricsModal')"}
                className="inline-flex rounded-2xl items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Download Report
              </button>
            </div>
          </div>
        </div>

        <DemographicsCard cardData={healthMetricsData} />

        <DetailedServiceCard
          title="Health Categories Analysis"
          showItems={{ filter: true, export: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full">
            {HealthCategoryData.map((data, index) => (
              <HealthCategoryAnalysisCard
                key={index}
                cardData={data}
                percentage={data.percentage}
              />
            ))}
          </div>
        </DetailedServiceCard>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <DetailedServiceCard
            showItems={{ rightSubTitle: true }}
            rightSubTitle="View Details"
            title="High Risk Assessment"
          >
            <HealthRiskList />
          </DetailedServiceCard>

          <DetailedServiceCard
            title="Wellness Program Impact"
            showItems={{ rightSubTitle: true }}
            rightSubTitle="Download"
          >
            <div className="flex justify-center h-[288px]">
              <DoughnutGraph />
            </div>
          </DetailedServiceCard>
        </div>

        <div className="!mt-[54px]">
          <GrowthInfoList />
        </div>
      </HealthMetricsStyled>
    </>
  );
};

export default HealthMetrics;
