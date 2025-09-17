import React, { useCallback, useEffect, useState } from "react";
import { OfflineBookingStyled } from "./OfflineBooking.styled";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { FaUpload, FaDownload, FaArrowRight } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import * as XLSX from "xlsx";

import {
  createBulkUploadAPI,
  getOfflineBookingApi,
} from "../../../redux/slices/Clients/ClientsService";
import axios from "axios";
import { SERVER_IP } from "@/lib/config";
import { getToken, getXFrontendHost } from "@/lib/helpers";

const OfflineBooking = ({ id }: any) => {
  const columns: any = [
    {
      title: "Id #",
      width: 50,
      dataIndex: "serviceCode",
      key: "0",
      render: (text: any, record: any) => (
        <span>
          {record.serviceCode} -{" "}
          <span
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            {record.serviceName}
          </span>
        </span>
      ),
    },
    {
      title: "Uploaded Date",
      width: 150,
      dataIndex: "uploadedDate",
      key: "1",
    },
    {
      title: "Count",
      width: 150,
      dataIndex: "count",
      key: "2",
    },
  ];

  const [offlineBookingData, setOfflineBookingData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [packagesPageSize, setPackagesPageSize] = useState(10);
  const dispatch = useDispatch();
  const [fileSelected, setFileSelected] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDownloadTemplate = () => {
    // const link = document.createElement("a");
    // link.href = '/offline_booking_bulk_upload.xlsx';
    // link.download = "offline_booking_bulk_upload.xlsx";
    // link.click();

    const headers = [[
      "employee_id", "first_name", "last_name", "age", "gender", "phone", "email", "collection_1_date", "package_code", "notes", "comments", "status"
    ]];

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.aoa_to_sheet(headers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");

    // Generate Excel file as a Blob
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "offlineBookingTemplate.xlsx"); // File name
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  console.log(uploadedFile, "uploadedFile");


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("File selected:", file);
    if (file) {
      if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setFileSelected(true);
        setUploadedFile(file);
        toast.success("File selected successfully!");
      } else {
        toast.error("Only .xlsx files are allowed!");
      }
    }
  };

  const handlePageChange = (pagination: any) => {
    setPage(pagination.current);
    setPackagesPageSize(pagination.pageSize);
  };

  const fetchOfflineBookings = useCallback( async (clientId: any) => {
    console.log("clientId : ", clientId);

    try {
      const res = (await dispatch(getOfflineBookingApi(clientId))) as any;
      console.log("API Response: ", res);

      const formattedData =
        res?.payload?.data?.clientOrders?.map((order: any) => ({
          id: order.id,
          uploadedDate: order.collection_1_date
            ? new Date(order.collection_1_date).toLocaleDateString()
            : order.invoice_date
              ? new Date(Number(order.invoice_date)).toLocaleDateString()
              : new Date(Number(order.created_at)).toLocaleDateString(),
          count: order.bookings_count,
          serviceCode: order.client?.id,
          serviceName: order.client?.name,
        })) ?? [];

      setOfflineBookingData(formattedData);
    } catch (error) {
      console.error("Error fetching offline booking data:", error);
    }
  },[dispatch]);

  useEffect(() => {
    fetchOfflineBookings(id);
  }, [id, dispatch, fetchOfflineBookings]);

  const handleCancelUpload = () => {
    setFileSelected(false);
    setUploadedFile(null);
    toast.error("Upload canceled!");
  };

  const handleBulkUploadTests = async () => {
    if (!uploadedFile) {
      toast.error("No file selected for upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);


    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.put(
        `${SERVER_IP}/api/v1/client/${id}/bulk/booking`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-frontend": getXFrontendHost(),
            Authorization: "Bearer " + getToken(),
          },
        }
      );

      const { data } = response;
      if (data?.success) {
        toast.success("File uploaded successfully!");
        fetchOfflineBookings(id)
      } else {
        const errorMessage = data?.message || "Unexpected error.";
        toast.error(errorMessage);
      }
    } catch (error) {

      console.error("Upload error:", error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "File upload failed!");
      } else {
        toast.error("File upload failed due to network/server error.");
      }
    } finally {

      setFileSelected(false);
      setUploadedFile(null);
    }
  };


  return (
    <OfflineBookingStyled>
      <div className="offline-booking-container">
        <div className="offline-booking-info">
          <span className="booking-text">
            Offline Booking orders <FaArrowRight /> {offlineBookingData.length}
          </span>
        </div>
        <div className="action-buttons">
          {fileSelected ? (
            <>
              <button
                className="upload-tests-button"
                onClick={handleBulkUploadTests}
              >
                Bulk Upload Tests
              </button>
              <button
                className="cancel-upload-button"
                onClick={handleCancelUpload}
              >
                Cancel Upload
              </button>
            </>
          ) : (
            <>
              <button
                className="download-button"
                onClick={handleDownloadTemplate}
              >
                Download Template{" "}
                <span className="icon">
                  <FaDownload />
                </span>
              </button>
              <label className="upload-button">
                <input
                  type="file"
                  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                Bulk Upload{" "}
                <span className="icon">
                  <FaUpload />
                </span>
              </label>
            </>
          )}
        </div>
      </div>
      <div className="offline-bookings-table">
        <Table
          columns={columns}
          rowKey="id"
          dataSource={offlineBookingData}
          pagination={{
            current: page,
            pageSize: packagesPageSize,
            total: offlineBookingData.length,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
          onChange={handlePageChange}
          bordered
          scroll={{ x: "max-content" }}
        />
      </div>
    </OfflineBookingStyled>
  );
};

export default OfflineBooking;
