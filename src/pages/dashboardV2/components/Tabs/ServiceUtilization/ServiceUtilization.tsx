import { useState, useEffect, useMemo } from "react";
import CustomTab from "@/components/custom/Tab/CustomTab";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ServiceUtilizationStyled } from "./ServiceUtilization.styled";
import { GenderGraph } from "../../charts/GenderGraph";
import PieGraph from "../../charts/PieGraph";
import HorizontalBarGraph from "../../charts/HorizontalBarGraph";
import DetailedServiceCard from "./Cards/DetailedServiceTable/DetailedServiceCard";
import DemographicsCard from "../HealthWallet/Cards/DemographicsCard/DemographicsCard";
import { GrowthInfoList } from "./Cards/GrowthInfoCard/GrowthInfoCard";

import {
  clientEmployeeStatisticsAPI,
  clientServiceReportsAPI,
  genderAgeAPI,
} from "@/redux/slices/reports/reportsService";

import { useDispatch, useSelector } from "react-redux";
import CustomTableComponent from "@/components/custom/Table/DashBoard/CustomTable";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { RootState } from "@/redux/store";
import { formatStatus } from "@/lib/common";
import toast from "react-hot-toast";

ChartJS.register(ArcElement, Tooltip, Legend);

const tabs = [
  {
    value: "1",
    label: "Video Consult",
    section_key: "virtual_consultation",
  },
  {
    value: "2",
    label: "OPD Consult",
    section_key: "opd_consultation",
  },
  {
    value: "4",
    label: "Annual Health Checkup",
    section_key: "annual_health_checkup",
  },
  {
    value: "5",
    label: "Diagnostics",
    section_key: "test_booking",
  },
  {
    value: "6",
    label: "Products Booking",
    section_key: "product_booking",
  },
  {
    value: "7",
    label: "Pharmacy",
    section_key: "pharmacy",
  },
];

const tableHead = [
  { name: "Service Type", key: "type" },
  { name: "Total Bookings", key: "total_bookings" },
  { name: "Total Amount", key: "total_amount" },
  { name: "	Male", key: "male" },
  { name: "	Female", key: "female" },
  { name: "Others", key: "others" },
];

const ServiceUtilization = () => {
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();

  const { genderAgeInfo } = useSelector((state: any) => state?.reports);
  const { linkableId: clientId } = useClientLinkableId();
  // const [healthMetricsData, setHealthMetricsData] = useState(healthMetricsData);
  const { clientServiceReportsInfo } = useSelector(
    (state: any) => state?.reports
  );
  const {
    loading: detailedServiceReportLoading,
    error: detailedServiceReportError,
    data: detailedServiceReport,
  } = useSelector((store: RootState) => store?.reports?.detailedServiceReport);

  useEffect(() => {
    if (detailedServiceReportError) {
      toast.error(detailedServiceReportError ?? "Something went wrong!");
    }
  }, [detailedServiceReportError]);

  const {
    loading: employeeStatisticsDataLoading,
    error: employeeStatisticsDataError,
    data: employeeStatisticsData,
  } = useSelector((store: RootState) => store?.reports?.employeeStatisticsData);

  useEffect(() => {
    if (employeeStatisticsDataError) {
      toast.error(employeeStatisticsDataError ?? "Something went wrong!");
    }
  }, [employeeStatisticsDataError]);

  useEffect(() => {
    if (clientId) {
      console.log("activeTab:", activeTab);
      const databody = {
        start_date: "2020-05-25",
        end_date: "2025-07-28",
        client_id: clientId,
        type: getSectionKeyById(activeTab || "1") || "virtual_consultation",
      };
      // dispatch(activeClientsVendorsAPI(databody));
      dispatch(genderAgeAPI(databody));
      // dispatch(pincodeReportsAPI(databody));
      // dispatch(revenueReportsAPI(databody));
    }
  }, [dispatch, activeTab]);

  const getSectionKeyById = (id: string): string | undefined => {
    const tab = tabs.find((t) => t.value === id);
    return tab?.section_key;
  };

  // const ConsultsCard = () => {
  //   return (
  //     <div className="kpi-card">
  //       <p className="kpi-card-title">Total Consults Today</p>
  //       <p className="kpi-card-sub-title">863</p>
  //       <p className="kpi-card-subs-title">Consults</p>
  //       <div className="d-flex align-items-center justify-content-between">
  //         <p className="kpi-card-subs-title">Compare To Yesterday</p>
  //         <p className="kpi-card-subs-title percent-text">
  //           20%
  //           <img
  //             src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745565237874.png"
  //             alt=""
  //           />
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };
  // const SponsoredCard = () => {
  //   return (
  //     <div className="kpi-card">
  //       <p className="kpi-card-title">Company Sponsored %</p>

  //       <div className="d-flex align-items-center justify-content-between">
  //         <div className="me-4">
  //           <p className="kpi-card-sub-title color-title-1">16</p>
  //           <p className="kpi-card-subs-title">Employee Pay</p>
  //         </div>

  //         <div
  //           className="border-end border-2 "
  //           style={{ height: "6rem", borderColor: "#ccc" }}
  //         ></div>

  //         <div className="ms-4">
  //           <p className="kpi-card-sub-title color-title-2">16</p>
  //           <p className="kpi-card-subs-title">Company Pay</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // const SavingCard = () => {
  //   return (
  //     <div className="kpi-card">
  //       <p className="kpi-card-title">Savings</p>
  //       <div>
  //         <div>
  //           <div className="  saving-graph-div">
  //             <p className="mb-0 text-start">
  //               1,50,000 <br />
  //               Company
  //             </p>
  //             <Doughnut data={data} />
  //           </div>
  //         </div>
  //         <div>
  //           <p className="mb-0 text-end">
  //             12,000 <br />
  //             Employees
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  // const SpecialistCard = () => {
  //   const specialists = [
  //     { label: "Cardiologist – 01", now: 60 },
  //     { label: "Dermatologist – 05", now: 70 },
  //     { label: "Orthopedic – 06", now: 85 },
  //   ];

  //   return (
  //     <div className="kpi-card">
  //       <p className="kpi-card-title">Top Specialist Visit</p>
  //       <div className="progress-group">
  //         {specialists.map((specialist, index) => (
  //           <ProgressBar
  //             key={index}
  //             now={specialist.now}
  //             label={specialist.label}
  //             className="h-100"
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const getServiceReportsData = () => {
    dispatch(clientServiceReportsAPI({ clientId: clientId }));
  };

  useEffect(() => {
    if (clientId) {
      getServiceReportsData();
      dispatch(
        clientEmployeeStatisticsAPI({
          client_id: clientId,
        })
      );
    }
  }, [clientId]);

  const KPIData = useMemo(() => {
    const kpiData = detailedServiceReport?.data?.map((item: any) => ({
      name: formatStatus(item.type),
      price: `${item.total_bookings} Bookings`,
      subTitle: `Revenue ₹${parseFloat(item.total_amount).toLocaleString(
        "en-IN",
        { minimumFractionDigits: 2 }
      )}`,
    }));
    return kpiData;
  }, [detailedServiceReport]);

  const topPerformingServices = useMemo(() => {
    if (
      !Array.isArray(detailedServiceReport?.data) ||
      detailedServiceReport?.data?.length === 0
    ) {
      return [
        {
          name: "No Data Available",
        },
      ];
    }

    return detailedServiceReport?.data
      ?.toSorted(
        (a: any, b: any) =>
          parseInt(b.total_bookings) - parseInt(a.total_bookings)
      )
      .slice(0, 3)
      ?.map((item: any) => ({
        name: formatStatus(item?.type),
        count: `${item?.total_bookings} bookings`,
      }));
  }, [detailedServiceReport]);

  return (
    <ServiceUtilizationStyled>
      <div className="navbar-map-div options-1-div !mb-3">
        <CustomTab
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="kpi-card-div">
        <p className="card-heading-title">KPI Cards</p>
        <DemographicsCard cardData={KPIData} />
      </div>

      <div className="graph-main-div graph-main-div-parent flex-col sm:flex-row">
        <div className="age-graph-div w-50">
          <div className="age-heading-graph-div">
            <p className="">Gender</p>
          </div>
          <div className="d-flex align-items-center ">
            <div className="parent-pie-div">
              {genderAgeInfo?.gender && (
                <GenderGraph data={genderAgeInfo?.gender} />
              )}
            </div>

            <div className="p-4">
              {/* <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745581051865.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div className="age-graph-div w-50">
          <div className="age-heading-graph-div">
            <p className="">Age Group</p>
          </div>

          <div className="d-flex ">
            <div className="parent-pie-div w-75">
              {genderAgeInfo?.age && <PieGraph data={genderAgeInfo?.age} />}
            </div>
            <div className="w-25">
              {/* <p className="mt-5">Age Group</p> */}
              {/* <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745580272944.png"
                alt=""
                style={{ height: "14rem", width: "5rem" }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="graph-main-div">
        <div className="age-graph-div w-100">
          <div className="age-heading-graph-div">
            <p className="">Conditions from Prescription</p>
          </div>

          <div className="p-2 d-flex align-items-center">
            <div className="w-75">
              <HorizontalBarGraph />{" "}
            </div>

            <div className="w-25 ms-5">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745580183585.png"
                alt=""
                style={{ height: "14rem" }}
              />
            </div>
          </div>
        </div>
      </div>

      <DetailedServiceCard
        title="Detailed Service Breakdown"
        showItems={{ filter: true, export: true }}
      >
        <CustomTableComponent
          loading={detailedServiceReportLoading}
          alignCenter={true}
          tableBody={detailedServiceReport?.data?.map((item: any) => {
            return [
              {
                value: formatStatus(item?.type),
              },
              {
                value: item?.total_bookings,
              },
              {
                value: item?.total_amount,
              },
              {
                value: item?.genders?.find(
                  (item: any) => item?.gender === "male"
                )?.count,
              },
              {
                value: item?.genders?.find(
                  (item: any) => item?.gender === "female"
                )?.count,
              },
              {
                value: item?.genders?.find(
                  (item: any) => item?.gender === "other"
                )?.count,
              },
            ];
          })}
          tableHead={tableHead}
        />
        {/* <TableModule
          tableHead={tableHead}
          tableBody={tableBody}
          section_name={"serviceutilization"}
        /> */}
      </DetailedServiceCard>

      <div className="my-3">
        <GrowthInfoList
          cardData={{
            growthList: [
              {
                name: "Top Performing Services",
                service: topPerformingServices,
                loading: detailedServiceReportLoading,
              },
              {
                name: "Growth Trends",
                service: [
                  { name: "Virtual Psychology", count: "+25.3%" },
                  { name: "Virtual Physiotherapy", count: "+18.9%" },
                  { name: "Pharmacy Orders", count: "+15.7%" },
                ],
              },
              {
                name: "Employee Engagement",
                service: [
                  {
                    name: "Active Users",
                    count: employeeStatisticsData?.allUsersCount ?? "N/A",
                  },
                  {
                    name: "Engagement Rate",
                    count: employeeStatisticsData?.singleBookedUsers ?? "N/A",
                  },
                  {
                    name: "Repeat Users",
                    count:
                      employeeStatisticsData?.twiceBookedUserCount ?? "N/A",
                  },
                ],
                loading: employeeStatisticsDataLoading,
              },
            ],
          }}
        />
      </div>
    </ServiceUtilizationStyled>
  );
};

export default ServiceUtilization;
