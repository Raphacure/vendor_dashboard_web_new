import React from "react";
import { OverviewModuleStyled } from "./OverviewModule.styled";
import Dashboards from "../../../../../../DashboardV1/Dashboards";
import { DashboardsStyled } from "@/pages/DashboardV1/Dashboards.styled";
import CommonDashboard from "@/pages/DashboardV1/CommonDashboard";

const OverviewModule = () => {
  const section = "overview";
  const kpiData = [
    { price: "40.21", percent: "18.3%", mark: "10" },
    { price: "65,540", percent: "3.2%", mark: "20" },
    { price: "92", percent: "18.3%", mark: "20" },
    { price: "38.4", percent: "18.3%", mark: "20" },
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
  const reportData = [
    {
      price: "100",
      finalPrice: "842",
      percent: "23.1",
      avg: "5.1",
      grp: "72.5",
    },
    {
      price: "2300",
      finalPrice: "1242",
      percent: "43.1",
      avg: "5.9",
      grp: "12.5",
    },
    {
      price: "1080",
      finalPrice: "7642",
      percent: "50.9",
      avg: "8.3",
      grp: "82.5",
    },
    {
      price: "1640",
      finalPrice: "4290",
      percent: "24.1",
      avg: "18.1",
      grp: "84.5",
    },
  ];
  return (
    <DashboardsStyled>
      <CommonDashboard
        kpiData={kpiData}
        sectionName={section}
        tableHead={tableHead}
        tableBody={tableData}
        reportData={reportData}
      />
    </DashboardsStyled>
  );
};

export default OverviewModule;
