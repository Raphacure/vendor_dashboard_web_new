import React, { useState, useEffect } from "react";
import { DashboardsStyled } from "@/pages/DashboardV1/Dashboards.styled";
import { useNavigate, useLocation } from "react-router";
import CustomTab from "@/components/custom/Tab/CustomTab";
import OverviewModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/Overviews/OverviewModule";
import DemoGraphicsModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/DemoGraphics/DemoGraphicsModule";
import ROIModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/ROI/ROIModule";
import UtilityModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/Utility/UtilityModule";
import CostSavingModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/CostSaving/CostSavingModule";
import LocationInsightsModule from "@/pages/dashboardV2/components/RoiAnalysis/components/Tabs/LocationInsights/LocationInsightsModule";

const tabTitle = [
  { name: "Overview", path: "/dashboardv1/overview", key: "overview",Component:<OverviewModule/> },
  { name: "Utility", path: "/dashboardv1/utility", key: "utility",Component:<UtilityModule/> },
  {
    name: "DemoGraphics",
    path: "/dashboardv1/demographics",
    key: "demographics",
    Component:<DemoGraphicsModule/>,
  },
  { name: "ROI", path: "/dashboardv1/roi", key: "roi",Component:<ROIModule/>  },
  { name: "Cast Saving", path: "/dashboardv1/costsaving", key: "costsaving" ,Component:<CostSavingModule/> },
  {
    name: "Location Insights",
    path: "/dashboardv1/locationinsight",
    key: "locationinsight",
    Component:<LocationInsightsModule/>
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

const RoiAnalysis = (props: any) => {

  const location = useLocation();

  const [activeKey, setActiveKey] = useState(()=>{
    const foundTab = tabTitle.find((tab) =>
      location.pathname.includes(tab.key)
    );
    return foundTab ? foundTab.key : "overview";
  });

  useEffect(() => {
    const foundTab = tabTitle.find((tab) =>
      location.pathname.includes(tab.key)
    );
    if (foundTab) {
      setActiveKey(foundTab.key);
    } else {
      setActiveKey("overview");
    }
  }, [location.pathname]);


  return (
    <DashboardsStyled>
      <div className="tab-switch-nav-bar">
        <CustomTab
          tabs={tabTitle.map(({ key, name, path }) => ({
            value: key,
            label: name,
          }))}
          activeTab={activeKey}
          setActiveTab={setActiveKey}
        />
      </div>

      {
        tabTitle.find((tab) => tab.key === activeKey)?.Component
      }

    </DashboardsStyled>
  );
};

export default RoiAnalysis;
