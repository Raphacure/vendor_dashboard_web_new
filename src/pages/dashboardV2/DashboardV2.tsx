import React, { useState } from "react";
import { DashboardStyled } from "./DashboardV2.styled";
import { useNavigate, useParams } from "react-router";
import ServiceUtilization from "./components/Tabs/ServiceUtilization/ServiceUtilization";
import HealthWalletModule from "./components/Tabs/HealthWallet/HealthWalletModule";
import HealthMetrics from "./components/Tabs/HealthMetrics/HealthMetrics";
import RoiAnalysis from "./components/Tabs/RoiAnalysis/RoiAnalysis";
import CustomTab from "../../components/custom/Tab/CustomTab";
import {default as RoiAnalysisV1} from "./components/RoiAnalysis/RoiAnalysis"
import DataAnalysis from "./components/Tabs/DataAnalysis/DataAnalysis";

const dashHeadingNav = [
  { activeKey: "serviceutilization", titel: "Service Utilization" },
  { activeKey: "healthwallet", titel: "Health Wallet" },
  { activeKey: "healthmetrics", titel: "Health Metrics" },
  // { activeKey: "roi", titel: "ROI Analysis" },
  { activeKey: "roi_analysis", titel: "ROI Analysis" },
  { activeKey: "data_analysis", titel: "Data Analysis" ,disabled:true},
];

const DashboardV2 = () => {
  const navigate = useNavigate();
  const { tab } = useParams<{ tab: string }>();
  const [selectedNavOptions, setSelectedNavOptions] =
    useState<any>(tab || "serviceutilization");

  return (
    <DashboardStyled>
      <CustomTab
        tabs={dashHeadingNav.map((item) => ({
          value: item.activeKey,
          label: item.titel,
          onClick: () => {
            setSelectedNavOptions(item.activeKey);
            navigate(`/data-analytics/${item.activeKey}`);
          },
          disabled:item?.disabled
        }))}
        activeTab={selectedNavOptions}
        setActiveTab={setSelectedNavOptions}
      />

      {selectedNavOptions === "serviceutilization" && (
        <div className="navbar-map-div options-1-div">
          <ServiceUtilization />
        </div>
      )}
      {selectedNavOptions === "healthwallet" && (
        <div className="navbar-map-div options-1-div">
          <HealthWalletModule />
        </div>
      )}
      {selectedNavOptions === "healthmetrics" && (
        <div className="navbar-map-div options-1-div">
          <HealthMetrics/>
        </div>
      )}

      {
        selectedNavOptions === "roi_analysis" && (
          <RoiAnalysis/>
        )
      }

      {
        selectedNavOptions === "roi" && (
          <RoiAnalysisV1 />
        )
      }
      
      {
        selectedNavOptions === "data_analysis" && (
          <DataAnalysis />
        )
      }
      
    </DashboardStyled>
  );
};

export default DashboardV2;
