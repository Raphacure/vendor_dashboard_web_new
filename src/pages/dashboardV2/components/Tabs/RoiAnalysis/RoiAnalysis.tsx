import DemographicsCard from "../HealthWallet/Cards/DemographicsCard/DemographicsCard";
import DetailedServiceCard from "../ServiceUtilization/Cards/DetailedServiceTable/DetailedServiceCard";
import { HealthRiskList } from "../HealthMetrics/Cards/HealthRiskCard/HealthRiskCard";
import CostCalculator from "./components/CostCalculator/CostCalculator";
import SavingsSummary from "./components/SavingsSummary/SavingsSummary";
import RoiCombinedAnalysis from "./components/RoiAnalysis/RoiCombinedAnalysis";
import { CommonDashboardStyled } from "@/pages/DashboardV1/CommonDashboard.styled";
import ConsultsCard from "./components/ConsultCard/ConsultCard";
import { useEffect, useMemo, useState } from "react";
import { kpiDataWithPeriods } from "./constant";
import { formatStatus } from "@/lib/common";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import {
  clientServiceReportsAPI,
  clientWalletReportsAPI,
  roiAnalysisServicesSavingsAPI,
} from "@/redux/slices/reports/reportsService";

const RoiAnalysis = () => {
  const dispatch = useDispatch();
  const [RoiData, setRoiData] = useState<{
    kpiCards: any[];
  }>({
    kpiCards: [],
  });
  const { linkableId: clientId } = useClientLinkableId();

  const {
    loading: detailedServiceReportLoading,
    error: detailedServiceReportError,
    data: detailedServiceReport,
  } = useSelector((store: RootState) => store?.reports?.detailedServiceReport);

  const {
    data: roiAnalysisServicesSavings,
    error: roiAnalysisServicesSavingsError,
    loading: roiAnalysisServicesSavingsLoading,
  } = useSelector(
    (store: RootState) => store.reports?.roiAnalysisServicesSavings
  );

  const clientWalletsInfo = useSelector(
    (store: RootState) => store.reports?.clientWalletsInfo
  );

  const walletInfo =
    clientWalletsInfo?.data?.length > 0 ? clientWalletsInfo?.data[0] : {};

  const [filters, setFilters] = useState({
    KpiCards: {
      dateType: "1month",
    },
  });

  useEffect(() => {
    if (clientId) {
      dispatch(clientServiceReportsAPI({ clientId: clientId }));
      dispatch(roiAnalysisServicesSavingsAPI({ clientId: clientId }));
      dispatch(clientWalletReportsAPI({ clientId: clientId }));
    } else {
      toast.error("Client Id not found");
    }
  }, [dispatch, clientId]);

  useEffect(() => {
    if (detailedServiceReportError) {
      toast.error(detailedServiceReportError ?? "unknown error occured");
    }
  }, [detailedServiceReportError]);

  useEffect(() => {
    if (roiAnalysisServicesSavingsError) {
      toast.error(roiAnalysisServicesSavingsError ?? "unknown error occured");
    }
  }, [roiAnalysisServicesSavingsError]);

  useEffect(() => {
    const kpiData =
      kpiDataWithPeriods.find(
        (item) => item?.period === filters.KpiCards.dateType
      )?.data || [];

    setRoiData((prev) => ({
      ...prev,
      kpiCards: kpiData,
    }));
  }, [filters.KpiCards.dateType]);

  const topSpendingCategories = useMemo(() => {
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
      .toSorted((a: any, b: any) => {
        const amountA = parseInt(a.total_amount) || 0;
        const amountB = parseInt(b.total_amount) || 0;
        return amountB - amountA;
      })
      .slice(0, 3)
      .map((item: any) => ({
        type: formatStatus(item?.type || ""),
        percentage: `₹${item?.total_amount || 0}`,
        bgColor: "#f9fafb",
        textColor: "#000000",
        numberColor: "#000000",
        // count: `₹${item?.total_bookings || 0}`,
      }));
  }, [detailedServiceReport]);

  const roiAnalysisSubCards = useMemo(() => {
    return [
      {
        name: "Total Wallet",
        price: `${(walletInfo?.multiplied_total ?? 0)?.toLocaleString?.(
          "en-IN",
          { style: "currency", currency: "INR" }
        )}`,
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748929834803.png", // Assuming an icon path
        borderColor:"#92BDF6"
      },
      {
        name: "Wallet Investment",
        price: (walletInfo?.utilized_amount ?? 0)?.toLocaleString?.("en-IN", {
          style: "currency",
          currency: "INR",
        }),
        subTitle: `Current balance: ${(
          (walletInfo?.multiplied_total ?? 0) -
          (walletInfo?.utilized_amount ?? 0)
        )?.toLocaleString?.("en-IN", { style: "currency", currency: "INR" })}`,
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936529358.png", // Assuming an icon path
        borderColor:"#A3D9C2"
      },
      {
        name: "Monthly Spend",
        price: (walletInfo?.monthySpend ?? 0)?.toLocaleString?.("en-IN", {
          style: "currency",
          currency: "INR",
        }),
        ...(walletInfo?.peekMonth
          ? { subTitle: `Peak month: ${walletInfo?.peekMonth}` }
          : {}),
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748932226917.png", // Assuming an icon path
        borderColor:"#FFD900"
      },
      {
        name: "Total Time Saved",
        price: `${roiAnalysisServicesSavings.totalTimeSaving} hours`,
        ...(Math.round(roiAnalysisServicesSavings.totalTimeSaving / 24) > 0
          ? {
              subTitle: `Equivalent to ${Math.round(
                roiAnalysisServicesSavings.totalTimeSaving / 24
              )} working days`,
            }
          : {}),
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936758965.png", // Assuming an icon path
        borderColor:"#E7C2D4"
      },
      {
        name: "Total Consultations",
        price: roiAnalysisServicesSavings.totalBokingsCount,
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748932292719.png", // Assuming an icon path
        customRender: () => (
          <div className="text-sm flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Virtual:</span>
              <span className="text-purple-600">
                {roiAnalysisServicesSavings.virtualBookings}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Home Visit Lab Tests:</span>
              <span className="text-purple-600">
                {roiAnalysisServicesSavings.homeVisitLabTestsCount}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Savings: </span>
              <span className="text-purple-600">
                {(
                  roiAnalysisServicesSavings.totalSavingAmoount ?? 0
                )?.toLocaleString?.("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </div>
          </div>
        ),
        borderColor:"#92BDF6"
      },
      {
        name: "Virtual Consultations",
        price: roiAnalysisServicesSavings.virtualBookings,
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936902214.png", // Assuming an icon path
        customRender: () => (
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex justify-between">
              <span>Time saved:</span>
              <span className="text-green-600">
                {roiAnalysisServicesSavings.virtualSavingTime} hours
              </span>
            </div>
            <div className="flex justify-between">
              <span>Cost savings:</span>
              <span className="text-green-600">
                {(
                  roiAnalysisServicesSavings.virtualSavingsAmount || 0
                )?.toLocaleString?.("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </div>
          </div>
        ),
        borderColor:"#A3D9C2"
      },
      {
        name: "Home Lab Tests",
        price: roiAnalysisServicesSavings.homeVisitLabTestsCount,
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748937096410.png", // Assuming an icon path
        customRender: () => (
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex justify-between">
              <span>Time saved:</span>
              <span className="text-pink-600">
                {roiAnalysisServicesSavings.homeVisitLabTestSavingTime} hours
              </span>
            </div>
            <div className="flex justify-between">
              <span>Travel cost saved:</span>
              <span className="text-pink-600">
                {(
                  roiAnalysisServicesSavings.homeVisitLabTestSavingAmount ?? 0
                )?.toLocaleString?.("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </div>
          </div>
        ),
        borderColor:"#FFD900"
      },
    ];
  }, [roiAnalysisServicesSavings,walletInfo]);


  return (
    <section className="!py-6 block">
      <div>
        <div className="mb-8" id="el-mhnlmxo3">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ROI Analysis
          </h1>
          <p className="text-gray-600">
            Track your healthcare savings and spending insights
          </p>
        </div>

        <div className="!mb-[54px]">
          <CommonDashboardStyled>
            <div className="kpi-card-div">
              <div className="flex justify-between items-center">
                <p className="card-heading-title">KPI Cards</p>
                <select
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                  value={filters.KpiCards.dateType}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      KpiCards: {
                        ...prev.KpiCards,
                        dateType: e.target.value,
                      },
                    }))
                  }
                >
                  {kpiDataWithPeriods.map((item) => (
                    <option key={item.period} value={item?.period}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {RoiData.kpiCards?.map((item: any, idx: number) => {
                  return <ConsultsCard data={item} key={idx} />;
                })}
              </div>
            </div>
          </CommonDashboardStyled>
        </div>

        <DemographicsCard
          loading={roiAnalysisServicesSavingsLoading}
          cardData={roiAnalysisSubCards}
        />

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="el-d555xdku"> */}
        <div className="!mb-[54px]">
          <DetailedServiceCard title="Top Spending Categories">
            <HealthRiskList
              loading={detailedServiceReportLoading}
              riskData={topSpendingCategories}
            />
          </DetailedServiceCard>
        </div>

        {/* <div className="lg:col-span-1">
            <DetailedServiceCard title="Quick Actions">
              <div className="flex flex-col gap-2" id="el-t00j98vt">
                <button
                  className="w-full bg-blue-600 text-white py-3 px-4 !rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  id="el-d0442iuo"
                >
                  Calculate Savings
                </button>
                <button
                  className="w-full bg-green-600 text-white py-3 px-4 !rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                  id="el-kw5t2a8r"
                >
                  View ROI Analysis
                </button>
                <button
                  className="w-full bg-purple-600 text-white py-3 px-4 !rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
                  id="el-l95fimqr"
                >
                  Book Consultation
                </button>
                <button
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 !rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                  id="el-nxhadrvt"
                >
                  Download Report
                </button>
              </div>
            </DetailedServiceCard>
          </div> */}
        {/* </div> */}
        <CostCalculator />
        <div className="!mt-[54px]">
          <SavingsSummary />
        </div>
        <div className="!mt-[54px]">
          <RoiCombinedAnalysis />
        </div>
      </div>
    </section>
  );
};

export default RoiAnalysis;
