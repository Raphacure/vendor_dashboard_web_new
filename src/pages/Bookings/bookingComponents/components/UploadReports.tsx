import { Upload, UploadFile, UploadProps } from "antd";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  UploadOutlined,
  DeleteOutlined,
  FileTextOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import {
  GetBkReportPresignedAPIError,
  GetBkReportPresignedAPIPayload,
  GetBkReportPresignedAPIResponse,
  GetBkReportUploadVerifyAPIPayload,
  GetBkReportUploadVerifyAPIResponse,
} from "@/Scenes/apis/bookings/bookingsAPI.types";
import {
  getAttachmentSignedUrlAPI,
  getBkReportPresignedAPI,
  getBkReportUploadVerifyAPI,
} from "@/Scenes/apis/bookings/bookingsAPI";
import { commonApiError } from "@/lib/common";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";

const UploadReports: React.FC<{ selectedbooking: any; reload: () => void }> = ({
  selectedbooking,
  reload,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState({
    isUploading: false,
  });

  const getBookingPresignedUrlMutation = useMutation<
    GetBkReportPresignedAPIResponse,
    GetBkReportPresignedAPIError,
    GetBkReportPresignedAPIPayload
  >({
    mutationFn: (payload) => {
      return getBkReportPresignedAPI(payload);
    },
  });

  const getBkReportUploadVerifyMutation = useMutation<
    GetBkReportUploadVerifyAPIResponse,
    commonApiError,
    GetBkReportUploadVerifyAPIPayload
  >({
    mutationFn: (payload) => {
      return getBkReportUploadVerifyAPI(payload);
    },
  });

  const uploadFileToS3 = async (file: File) => {
    try {
      const presignBody = {
        id: String(selectedbooking.id),
        payload: {
          ext: ".pdf",
        },
      };

      const presignedRes = await getBookingPresignedUrlMutation.mutateAsync(
        presignBody
      );

      const presignedUrl = presignedRes?.signedUrl;
      const publicUrl = presignedRes?.attachment?.url;
      const reportId = presignedRes?.attachment?.id;

      if (!presignedUrl || presignedUrl.trim() === "") {
        throw new Error("Failed to get presigned URL");
      }

      await axios.put(presignedUrl, file, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });

      return {
        publicUrl,
        presignedUrl,
        id: reportId,
      };
    } catch (error) {
      console.error("Error uploading file to S3:", error);
      throw error;
    }
  };

  const handleFileUpload = async (selectedFile: any) => {
    try {
      if (!selectedbooking?.id) {
        throw new Error("Booking ID is required");
      }

      if (!selectedFile) {
        throw new Error("File is required");
      }
      const resp = await uploadFileToS3(selectedFile);
      if (resp?.id) {
        await getBkReportUploadVerifyMutation.mutateAsync({
          id: String(resp.id),
        });
      }
    } catch (error) {
      toast.error("Upload failed.");
    }
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];

    newFileList = newFileList.slice(-10);

    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const props = {
    onChange: handleChange,
    multiple: true,
  };

  const handleOk = async () => {
    try {
      setLoading({ isUploading: true });
      const requests = fileList.map((file) => {
        return handleFileUpload(file.originFileObj);
      });
      await Promise.all(requests);
      toast.success("Reports uploaded successfully");
      setFileList([]); // Clear the file list after successful upload
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload some reports");
    } finally {
      setLoading({ isUploading: false });
      reload?.();
    }
  };

  const customItemRender = (
    originNode: any,
    file: any,
    fileList: any,
    actions: any
  ) => {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-4 px-5 mb-3 flex justify-between items-center transition-all duration-200 ease-in-out shadow-sm hover:border-[#252b61] hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-center gap-3 flex-1">
          <FileTextOutlined className="text-red-500 text-lg" />
          <span
            title={file.name}
            className="text-sm text-gray-700 font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {file.name}
          </span>
        </div>
        <PrimaryButton
          onClick={() => actions.remove()}
          className="!bg-red-500 hover:!bg-red-600 !px-3 !py-1 text-xs"
        >
          <DeleteOutlined className="mr-1" />
          Remove
        </PrimaryButton>
      </div>
    );
  };

  const pdfLinks = selectedbooking?.attachments;

  return (
    <div className="bg-white rounded-2xl max-w-5xl mx-auto p-6 border border-gray-200 shadow-lg">
      <div className="text-xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-slate-200 flex items-center gap-2">
        <FileTextOutlined className="text-2xl text-blue-600" />
        Reports Management
      </div>

      {/* Upload Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center mb-8 transition-all duration-300 hover:border-[#252b61] hover:from-blue-50 hover:to-indigo-50">
        <Upload
          beforeUpload={() => false}
          className="upload_modal block w-full"
          itemRender={customItemRender}
          accept=".pdf"
          {...props}
          fileList={fileList}
        >
          <div className="mb-6">
            <div className="text-6xl mb-4 text-gray-400">📄</div>
            <SecoundaryButton>
              <UploadOutlined className="mr-2" />
              {fileList.length > 0 ? "Add More Files" : "Choose PDF Files"}
            </SecoundaryButton>
          </div>
        </Upload>

        {fileList.length > 0 && (
          <div className="mt-6">
            <PrimaryButton
              onClick={handleOk}
              isLoading={loading.isUploading}
              disabled={loading.isUploading}
              className="!h-12 !text-base !font-semibold !min-w-48 !bg-green-600 hover:!bg-green-700"
            >
              {loading.isUploading
                ? "Uploading..."
                : `Upload ${fileList.length} Report${
                    fileList.length > 1 ? "s" : ""
                  }`}
            </PrimaryButton>
          </div>
        )}

        <div className="text-gray-500 text-sm mt-4 leading-relaxed">
          <div className="font-medium mb-1">📋 Upload Guidelines:</div>• Select
          PDF files only • Maximum 10 files at once • Each file should be a
          complete report
        </div>
      </div>

      <ViewReports pdfLinks={pdfLinks} />
    </div>
  );
};

export const ViewReports = ({ pdfLinks }: { pdfLinks: any[] }) => {
  if (Array.isArray(pdfLinks) && !(pdfLinks.length > 0)) {
    return null;
  }

  const handleReportClick = async (id: any) => {
    if (!id) {
      toast.error("Invalid report ID");
      return;
    }
    try {
      const res = await getAttachmentSignedUrlAPI({ id });
      const url = res?.url;
      if (
        res &&
        res?.url &&
        (res.url.startsWith("http://") || res.url.startsWith("https://"))
      ) {
        window.open(url, "_blank");
      } else {
        toast.error("Unable to open report. Invalid URL.");
        console.error("Invalid URL:", url);
      }
    } catch (error) {
      toast.error("Failed to open report");
      console.error("Error opening report:", error);
    }
  };
  return (
    <div className="files-section">
      <div className="text-xl font-bold text-slate-800 mb-2 pb-3 border-b-2 border-slate-200 flex items-center gap-2">
        <EyeOutlined className="text-2xl text-purple-600" />
        Uploaded Reports (
        {Array.isArray(pdfLinks)
          ? pdfLinks.filter((item: any) => item?.active_status === "active")
              .length
          : 0}
        )
      </div>

      <div className="grid gap-2">
        {Array.isArray(pdfLinks) && pdfLinks.length > 0 ? (
          pdfLinks
            .filter((item: any) => item?.active_status === "active")
            .map((urlObj: any, index: number) => (
              <div
                key={urlObj?.id || index}
                className="bg-white border border-slate-200 rounded-xl p-5 flex justify-between items-center transition-all duration-200 shadow-sm hover:shadow-lg md:flex-row flex-col md:gap-0 gap-3 md:text-left text-center"
              >
                <div className="flex items-center gap-3 flex-1 md:justify-start justify-center">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <FileTextOutlined className="text-red-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base text-gray-800 font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {urlObj?.url
                        ? urlObj.url
                            .split("/")
                            .at(-1)
                            ?.replace(/\.[^/.]+$/, "") || `Report ${index + 1}`
                        : `Report ${index + 1}`}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      PDF Document • Click to view
                    </div>
                  </div>
                </div>
                <PrimaryButton className="text-nowrap" onClick={() => handleReportClick(urlObj?.id)}>
                  <EyeOutlined className="mr-2" />
                  View PDF
                </PrimaryButton>
              </div>
            ))
        ) : (
          <div className="text-center p-12 px-6 text-slate-500 text-base bg-slate-50 rounded-xl border-2 border-dashed border-slate-300">
            <div className="text-6xl mb-4 opacity-60">📄</div>
            <div className="text-lg font-medium mb-2">
              No reports uploaded yet
            </div>
            <div className="text-sm">
              Upload your first PDF report to get started
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadReports;
