import React, { memo, useState } from "react";
import RaphaPlusModalV2 from "@/components/custom/modal/CustomModal/CustomModal";
import styled from "styled-components";
import { TrashIcon } from "lucide-react";
import FilePreview from "@/components/custom/FilePreview/FilePreview";
import FilePreviewContent from "@/components/custom/FilePreview/FilePreviewContent";
import FileUploaderCard from "@/components/custom/FileUpload/FileUploaderCard";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { ValidationErrors } from "../CreateOrder";

const SecondOpinionReports: React.FC<{
  reports: any;
  setReports: any;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}> = memo(({ reports, setReports, validationErrors,setValidationErrors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState("");

  const handlePreviewFile = (url: string) => {
    setPreviewFile(url);
    setPreviewOpen(true);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  const handleDeleteImage = (index: number) => {
    if (Array.isArray(reports?.urls) && reports?.urls?.length > index) {
      const newReports = [...reports.urls];
      newReports.splice(index, 1);
      setReports("urls", newReports);
    }
  };

  return (
    <>
      <label className="text-sm font-medium text-gray-700 mb-2">
        Upload Reports{" "}
        {validationErrors?.secondOpinion?.reports && (
          <p className="text-red-500 m-0 inline-block">
            ({validationErrors?.secondOpinion?.reports})
          </p>
        )}
      </label>
      <div className="flex flex-col md:flex-row mt-3 mb-5 w-full gap-6">
        {/* Left side - List of uploaded ear images */}
        <div className="flex flex-col gap-2 w-full">
          {reports?.urls?.length > 0 ? (
            reports?.urls?.map((report: any, index: number) => (
              <div
                key={report?.index}
                className="flex items-center p-2 bg-slate-100 border border-gray-300 rounded-md"
              >
                <span>
                  <FilePreview
                    url={report}
                    openPreview={handlePreviewFile}
                    handleRemoveFile={() => handleDeleteImage(index)}
                    fileContainerClassName="w-[80px] h-[80px]"
                  />
                </span>
                <div className="flex-grow !ml-2">
                  <h6 className="font-medium text-sm">{report?.name}</h6>
                  <p className="text-xs text-gray-600">{report.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon color="#FF0000" />
                </button>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center h-full border border-gray-300 rounded-md text-gray-500">
              <p>No reports Added</p>
            </div>
          )}
        </div>

        {/* Right side - Upload component */}
        <div className="w-full md:w-1/2">
          <UploadContainer onClick={() => setIsModalOpen(true)}>
            <img
              className="uploadIcon"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111904-1743769172669.png"
              alt=""
            />
            <div>
              <span className="chooseFile">Add a report</span>
            </div>
          </UploadContainer>
        </div>

        {/* Modal for upload card */}
        <RaphaPlusModalV2
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          title="Upload Medical Report"
          width="600px"
        >
          <RaphaPlusModalV2.Body>
            <FileUploaderCard
              acceptType={["jpeg", "png", "pdf"]}
              fileUrls={Array.isArray(reports?.urls) ? reports?.urls : []}
              setFileUrls={(files) => {
                setReports("urls", files);
                if(validationErrors?.secondOpinion?.reports && files) {
                  setValidationErrors({
                    ...validationErrors,
                    secondOpinion: {
                      ...validationErrors.secondOpinion,
                      reports: "",
                    },
                  });
                }
              }}
              mode="multiple"
            />
          </RaphaPlusModalV2.Body>
          <RaphaPlusModalV2.Footer>
            <div className="flex justify-end">
              <PrimaryButton onClick={handleSubmit}>Add Report</PrimaryButton>
            </div>
          </RaphaPlusModalV2.Footer>
        </RaphaPlusModalV2>
        <FilePreviewContent
          previewOpen={previewOpen}
          closePreview={() => setPreviewOpen(false)}
          previewFile={previewFile}
        />
      </div>
      <div className="mt-6 space-y-4">
        {/* Phone Numbers Row */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Primary Contact Number */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Primary Contact Number{" "}
              {validationErrors?.secondOpinion?.phone && (
                <p className="text-red-500 m-0 inline-block">
                  ({validationErrors?.secondOpinion?.phone})
                </p>
              )}
            </label>
            <input
              type="tel"
              value={reports?.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setReports("phone", value);
                if(validationErrors?.secondOpinion?.phone && value) {
                  setValidationErrors({
                   ...validationErrors,
                    secondOpinion: {
                     ...validationErrors.secondOpinion,
                      phone: "",
                    },
                  });
                }
              }}
              placeholder="Enter primary contact number"
              maxLength={10}
              className={`px-3 py-2 border ${
                validationErrors?.secondOpinion?.phone
                  ? "!border-red-500"
                  : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>

          {/* Alternate Person Phone Number */}
          <div className="flex flex-col flex-1">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Alternate Person Phone Number
            </label>
            <input
              type="tel"
              value={reports?.alternate_phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setReports("alternate_phone", value);
                if(validationErrors?.secondOpinion?.phone && value) {
                  setValidationErrors({
                  ...validationErrors,
                    secondOpinion: {
                    ...validationErrors.secondOpinion,
                      phone: "",
                    },
                  });
                }
              }}
              placeholder="Enter alternate person phone number"
              maxLength={10}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Comments */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Comments{" "}
            {validationErrors?.secondOpinion?.comments && (
              <p className="text-red-500 m-0 inline-block">
                ({validationErrors?.secondOpinion?.comments})
              </p>
            )}
          </label>
          <textarea
            value={reports?.comments}
            onChange={(e) => {
              setReports("comments", e.target.value)
              if(validationErrors?.secondOpinion?.comments && e.target.value) {
                setValidationErrors({
               ...validationErrors,
                  secondOpinion: {
                 ...validationErrors.secondOpinion,
                    comments: "",
                  },
                });
              }
            }}
            placeholder="Enter any additional comments"
            rows={4}
            className={`px-3 py-2 border ${
              validationErrors?.secondOpinion?.comments
                ? "!border-red-500"
                : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical`}
          />
        </div>
      </div>
    </>
  );
});

const UploadContainer = styled.div`
  border: 1px dashed #7291f4;
  border-radius: 25px;
  padding: 35px;
  cursor: pointer;
  text-align: center;
  background-color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f8ff;
  }

  .uploadIcon {
    width: 60px;
    height: 51px;
    margin-bottom: 10px;
  }

  .chooseFile {
    font-weight: 500;
    border-bottom: 1px solid #252b61;
  }

  p {
    color: #888888;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.5px;
    margin-top: 8px;
  }
`;

export default SecondOpinionReports;
