import React from "react";
import { Table } from "antd";
import moment from "moment";
import { RootState } from "../../../../../redux/store";
import { useSelector } from "react-redux";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const PromotionalLogsTable = ({ allPromotionalData,current,
  total,
  onChange,
  pageSize }: any) => {
  const { loading } = useSelector((state: RootState) => state?.promotionsLogs);

  const getFinalName = (sstr: any) => {
    let returnStr = "";
    try {
      returnStr = sstr.replace(sstr?.split("_")[0] + "_", "");
    } catch (error: any) {
      console.log("error", error);
    }
    return returnStr;
  };
  const columns = [
    {
      label: "Template I.D",
      key: "3",
      width: 120,
      render: (item: any) => {
        return <>{item?.template_id}</>;
      },
    },
    {
      label: "Type",
      dataIndex: "type",
      key: "type",
      width: 140,
    },
    {
      label: "To",
      key: "2",
      width: 70,
      render: (item: any) => {
        return <>{item?.to}</>;
      },
    },
    {
      label: "Created By",
      key: "20",
      width: 90,
      render: (item: any) => {
        return (
          <>{`${item?.createdByUser?.first_name ?? "N/A"} ${
            item?.createdByUser?.last_name ?? "N/A"
          }`}</>
        );
      },
    },
    {
      label: "Campaign Name",
      key: "3",
      width: 120,
      render: (item: any) => {
        return <>{getFinalName(item?.campaign)}</>;
      },
    },

    {
      label: "No Of Clicks",
      key: "9",
      width: 80,
      render: (item: any) => {
        return <>{item?.no_of_clicks}</>;
      },
    },
    {
      label: "Created At",
      key: "4",
      width: 120,
      render: (item: any) => {
        const formattedDate = moment(item?.created_at).format(
          "DD/MM/YYYY h:mm A"
        );
        return <>{formattedDate}</>;
      },
    },
    {
      label: "Section",
      key: "5",
      width: 100,
      render: (item: any) => {
        return <>{item?.filter?.section?.join(",")}</>;
      },
    },
    {
      label: "Category",
      key: "6",
      width: 100,
      render: (item: any) => {
        return <>{item?.filter?.category?.join(",")}</>;
      },
    },
    {
      label: "Pincode",
      key: "7",
      width: 100,
      render: (item: any) => {
        return <>{item?.filter?.pincode?.join(",")}</>;
      },
    },
    {
      label: "City",
      key: "7",
      width: 100,
      render: (item: any) => {
        return <>{item?.filter?.city?.join(",")}</>;
      },
    },
    {
      label: "State",
      key: "8",
      width: 100,
      render: (item: any) => {
        return <>{item?.filter?.state?.join(",")}</>;
      },
    },
  ] as any;

  return (
    <CustomTable
      columns={columns}
      data={allPromotionalData?.communicationLogs}
      showingName="Promotional Logs"
      isLoading={loading}
      onPageChange={onChange}
      page={current}
      pageSize={pageSize}
      total={total}
      pagination={true}
    />
  );
};

export default PromotionalLogsTable;
