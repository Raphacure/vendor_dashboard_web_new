import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { toast } from "react-hot-toast";
import moment from "moment";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const PromotionalDataTable = ({
  allPromotionalData,
  pageSize,
  onChange,
  current,
  total,
}: any) => {
  const { loading, error } = useSelector(
    (state: RootState) => state?.promotions
  );

  console.log("total", total);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const calculateLastMailSentDate = (item: any) => {
    if (item?.last_email_sent_date) {
      return moment(item?.last_email_sent_date).format("DD/MM/YYYY h:mm A");
    } else {
      return "-";
    }
  };

  const columns = [
    {
      label: "Category",
      dataIndex: "category",
      key: "8",
      fixed: "left",
    },
    {
      label: "Last Mail Sent",
      key: "9",
      render: (item: any) => {
        const date = calculateLastMailSentDate(item);
        return (
          <>
            <span className="red-color">{date}</span>
          </>
        );
      },
    },

    {
      label: "Pincode",
      dataIndex: "pincode",
      key: "4",
    },
    {
      label: "City",
      dataIndex: "city",
      key: "5",
    },
    {
      label: "State",
      dataIndex: "state",
      key: "6",
    },
    {
      label: "Section",
      dataIndex: "section",
      key: "7",
    },
    {
      label: "Name",
      key: "1",
      dataIndex: "name",
      render: (item: any) => {
        return <>{item}</>;
      },
    },
    {
      label: "Email",
      key: "2",
      render: (item: any) => {
        return <>{item?.email}</>;
      },
    },
    {
      label: "MobileNo",
      dataIndex: "phone",
      key: "3",
    },
  ] as any;

  return (
    <CustomTable
      columns={columns}
      data={allPromotionalData?.promotions}
      showingName="Promotional Data"
      isLoading={loading}
      onPageChange={onChange}
      page={current}
      pageSize={pageSize}
      pagination={true}
      total={total}
    />
  );
};

export default PromotionalDataTable;
