import DemographicsCard from "./Cards/DemographicsCard/DemographicsCard";
import { HealthWalletModuleStyled } from "./HealthWalletModule.styled";
import { useEffect, useMemo, useState } from "react";
import { fetchClientsAPI } from "@/redux/slices/myPatients/myPatientsService";
import toast from "react-hot-toast";
import { Select } from "antd";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import WalletBreakdown from "./Cards/ServiceCard/WalletBreakDown";
import { GrowthInfoList } from "../ServiceUtilization/Cards/GrowthInfoCard/GrowthInfoCard";
import DetailedServiceCard from "../ServiceUtilization/Cards/DetailedServiceTable/DetailedServiceCard";
import TableModule from "@/pages/DashboardV1/TableModule";
import {
  clientRecentTransationsAPI,
  clientServiceReportsAPI,
  clientWalletReportsAPI,
  typeWiseReportsAPI,
} from "@/redux/slices/reports/reportsService";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { formatStatus } from "@/lib/common";
import CustomTableComponent from "@/components/custom/Table/DashBoard/CustomTable";

const tableHead = [
  { name: "Service Type" },
  { name: "Amount Used" },
  { name: "Booking ID" },
  { name: "Percentage Applied" },
  { name: "Discounted Amount" },
];

const HealthWalletModule = () => {
  const dispatch = useDispatch();
  const { linkableId: clientId } = useClientLinkableId();
  const [clientsData, setClientsData] = useState<any>([]);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<{ clients: boolean }>({
    clients: true,
  });
  const {
    loading: detailedServiceReportLoading,
    error: detailedServiceReportError,
    data: detailedServiceReport,
  } = useSelector((store: RootState) => store?.reports?.detailedServiceReport);
  const {
    loading: recentTransactionsLoading,
    error: recentTransactionsError,
    data: recentTransactionsData,
  } = useSelector((store: RootState) => store?.reports?.recentTransactions);

  const { clientWalletsInfo, typeWiseReportInfo } = useSelector(
    (state: RootState) => state?.reports
  );

  const walletInfo =
    clientWalletsInfo?.data?.length > 0 ? clientWalletsInfo?.data[0] : {};

  const availableBalance =
    walletInfo?.multiplied_total - walletInfo?.utilized_amount;
  const utilizedPercentage =
    (walletInfo?.utilized_amount / walletInfo?.multiplied_total) * 100;

  const empDataName: any = [
    {
      name: "Total Package Value",
      price: `₹${
        isNaN(walletInfo?.multiplied_total)
          ? 0
          : walletInfo?.multiplied_total?.toLocaleString() ?? "0"
      }`,
      subTitle: "Per employee/year",
    },
    {
      name: "Available Balance",
      price: `₹${
        isNaN(availableBalance) ? 0 : availableBalance?.toLocaleString() ?? "0"
      }`,
      subTitle: "Remaining funds",
    },
    {
      name: "Utilized Amount",
      price: `₹${
        isNaN(walletInfo?.utilized_amount)
          ? 0
          : walletInfo?.utilized_amount?.toLocaleString() ?? "0"
      }`,
      subTitle: `${
        isNaN(utilizedPercentage) ? 0 : utilizedPercentage?.toFixed?.(0)
      }% of total`,
    },
    {
      name: "Total Employee",
      price: `${
        isNaN(walletInfo?.client_user_count)
          ? 0
          : walletInfo?.client_user_count?.toLocaleString() ?? "0"
      }`,
      subTitle: "Employee engagement",
    },
  ];

  useEffect(() => {
    const requestOBj: any = {
      page: 1,
      searchText: "",
      count: 1000,
      type: "all",
    };
    const getClientsInfo = async () => {
      setIsLoading((pre) => {
        return {
          ...pre,
          clients: true,
        };
      });
      try {
        const res = (await dispatch(fetchClientsAPI(requestOBj))) as any;
        if (res?.error) {
          toast.error(res?.error?.data?.message ?? "unknown error occured");
          return;
        } else {
          setClientsData(res?.payload?.data);
        }
      } catch (err: any) {
        toast.error("unknown error occured");
      } finally {
        setIsLoading((pre) => {
          return {
            ...pre,
            clients: false,
          };
        });
      }
    };
    getClientsInfo();
    if (clientId) {
      dispatch(clientWalletReportsAPI({ clientId: clientId }));
      dispatch(typeWiseReportsAPI({ clientId: clientId }));
      dispatch(clientServiceReportsAPI({ clientId: clientId }));
      dispatch(
        clientRecentTransationsAPI({ clientId: clientId, page: 1, count: 10 })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (detailedServiceReportError) {
      toast.error(detailedServiceReportError ?? "unknown error occured");
    }
  }, [detailedServiceReportError]);

  useEffect(() => {
    if (recentTransactionsError) {
      toast.error(recentTransactionsError ?? "unknown error occured");
    }
  }, [recentTransactionsError]);

  const recentTransactions = useMemo(() => {
    if (
      !Array.isArray(recentTransactionsData) ||
      recentTransactionsData?.length === 0
    )
      return [];
    return recentTransactionsData?.map?.((item: any) => [
      { value: formatStatus(item?.type) || "N/A" },
      { value: `₹${item?.amount_used || 0}` },
      { value: item?.booking_id || "N/A" },
      { value: `${item?.percentage_applied || 0}%` },
      { value: `₹${item?.discounted_amount || 0}` },
    ]);
  }, [recentTransactionsData]);

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
        name: formatStatus(item?.type || ""),
        count: `₹${item?.total_bookings || 0}`,
      }));
  }, [detailedServiceReport]);

  return (
    <HealthWalletModuleStyled>
      <div className="mb-8" id="el-mhnlmxo3">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" id="el-h55kz0w0">
          Health Wallet
        </h1>
      </div>
      <div className="flex justify-end mb-5">
        <Select
          showSearch
          placeholder="Select a client"
          optionFilterProp="children"
          onChange={(value) => setSelectedClient(value)}
          value={selectedClient}
          filterOption={(input: string, option?: { label: string }) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={clientsData?.clients?.map((client: any) => ({
            value: client.id,
            label: client.name,
          }))}
          className="w-96 rounded-lg"
          loading={isLoading.clients}
          disabled={isLoading.clients}
        />
      </div>
      <CustomSpinLoader spinning={isLoading.clients}>
        <div>
          <DemographicsCard cardData={empDataName} />
          <div className="my-4">
            <WalletBreakdown data={typeWiseReportInfo?.walletAmounts} />
          </div>
          <DetailedServiceCard title="Recent Transactions">
            <CustomTableComponent
              loading={recentTransactionsLoading}
              tableHead={tableHead}
              tableBody={recentTransactions}
              alignCenter={true}
            />
          </DetailedServiceCard>
          <div className="my-3">
            <GrowthInfoList
              cardData={{
                growthList: [
                  {
                    name: "Top Spending Categories",
                    service: topSpendingCategories,
                    loading: detailedServiceReportLoading,
                  },
                  {
                    name: "Monthly Trends",
                    service: [
                      { name: "Average Monthly Spend", count: "₹95,167" },
                      { name: "Peak Month", count: "November" },
                      { name: "Growth Rate", count: "+12.5%" },
                    ],
                  },
                  {
                    name: "Savings Summary",
                    service: [
                      { name: "Total Savings", count: "₹1,24,500" },
                      { name: "Pharmacy Discounts", count: "₹78,900" },
                      { name: "Health Checkup Savings", count: "₹45,600" },
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </CustomSpinLoader>
    </HealthWalletModuleStyled>
  );
};

export default HealthWalletModule;
