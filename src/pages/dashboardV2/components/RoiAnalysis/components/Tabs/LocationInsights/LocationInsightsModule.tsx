import React from "react";
import Dashboards from "../../../../../../DashboardV1/Dashboards";
import { DashboardsStyled } from "@/pages/DashboardV1/Dashboards.styled";
import CommonDashboard from "@/pages/DashboardV1/CommonDashboard";

const LocationInsightsModule = () => {
  const section = "locationinsight";
  const kpiData = [
    { price: "Bangalore", percent: "18.3%", mark: "10" },
    { price: "124", percent: "3.2%", mark: "20" },
    { price: "72.4", percent: "18.3%", mark: "20" },
    { price: "18.4", percent: "18.3%", mark: "20" },
  ];
  const tableData = [
    {
      name: "Telemedicine (GP)",
      price: "1,85,42,000",
      parcent: "44.2",
      change: "15.8",
    },
    {
      name: "Telemedicine (Specialists)",
      price: "42,000",
      parcent: "44.2",
      change: "15.8",
    },
    {
      name: "Telemedicine (GP)",
      price: "₹1,85,42,000",
      parcent: "22.1",
      change: "28.4",
    },
    {
      name: "OPD Consultation",
      price: "1,85,42,000",
      parcent: "44.2",
      change: "18.0",
    },
    {
      name: "Emergency Services",
      price: "1,85,42,000",
      parcent: "10",
      change: "8.4",
    },
    {
      name: "Health Checks",
      price: "42,000",
      parcent: "5.5",
      change: "2.1",
    },
  ];
  const tableHead = [
    { name: "Telemedicine (GP)" },
    { name: " (₹)Amount " },
    { name: " Utilization % " },
    { name: "YoY Change" },
    { name: "Trend" },
  ];
  return (
    <DashboardsStyled>
      <CommonDashboard
        kpiData={kpiData}
        sectionName={section}
        tableHead={tableHead}
        tableBody={tableData}
      />
    </DashboardsStyled>
  );
};

export default LocationInsightsModule;
