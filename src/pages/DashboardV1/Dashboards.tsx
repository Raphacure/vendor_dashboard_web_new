import React, { useState } from "react";
import { DashboardsStyled } from "./Dashboards.styled";
import { Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import CommonDashboard from "./CommonDashboard";

const tabTitle = [
  { name: "Overview", path: "/dashboardv1/overview", key: "overview" },
  { name: "Utility", path: "/dashboardv1/utility", key: "utility" },
  {
    name: "DemoGraphics",
    path: "/dashboardv1/demographics",
    key: "demographics",
  },
  { name: "ROI", path: "/dashboardv1/roi", key: "roi" },
  { name: "Cast Saving", path: "/dashboardv1/costsaving", key: "costsaving" },
  {
    name: "Location Insights",
    path: "/dashboardv1/locationinsight",
    key: "locationinsight",
  },
  // {
  //   name: "OPD Services",
  //   path: "",
  //   key: "",
  // },
  // {
  //   name: "Virtual Care",
  //   path: "",
  //   key: "",
  // },
  // {
  //   name: "Emergency",
  //   path: "",
  //   key: "",
  // },
  // {
  //   name: "Pharmacy",
  //   path: "",
  //   key: "",
  // },
  // {
  //   name: "Wallet Details",
  //   path: "",
  //   key: "",
  // },
];

const Dashboards = (props: any) => {
  const {
    kpiData,
    tableHead,
    tableBody,
    section_name,
    reportData,
    costData,
    empData,
  } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const activeKey =
    tabTitle.find((tab) => location.pathname.includes(tab.key))?.key ||
    "overview";
  const handleSelect = (selectedKey: string | null) => {
    const selectedTab = tabTitle.find((tab) => tab.key === selectedKey);
    if (selectedTab) {
      navigate(selectedTab.path, { replace: true });
    }
  };

  return (
    <DashboardsStyled>
      <CommonDashboard
        kpiData={kpiData}
        sectionName={section_name}
        tableHead={tableHead}
        tableBody={tableBody}
        reportData={reportData}
        costData={costData}
        empData={empData}
      />
    </DashboardsStyled>
  );
};

export default Dashboards;
