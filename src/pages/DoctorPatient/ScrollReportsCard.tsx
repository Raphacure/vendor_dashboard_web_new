import React, { useEffect, useState } from "react";
import { ScrollReportsCardStyled } from "./ScrollReportsCard.styled";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import moment from "moment";
import { deletePatientMedicalRecordAPI } from "@/redux/slices/PatientDoctor/PatientService";
import RaphaPlusModalV2 from "@/components/custom/modal/CustomModal/CustomModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import FilePreview from "@/components/custom/FilePreview/FilePreview";
import FilePreviewContent from "@/components/custom/FilePreview/FilePreviewContent";
import { IoSearch } from "react-icons/io5";
import { Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const reportTypeOptions = [
  { value: "", label: "All" },
  { value: "diagnosis_photo", label: "Diagnosis Photo" },
  { value: "clinical_image", label: "Clinical Image" },
  { value: "lab_report", label: "Lab Report" },
  { value: "radiology_image", label: "Radiology Image" },
  { value: "prescription_file", label: "Prescription File" },
  { value: "discharge_summary", label: "Discharge Summary" },
  { value: "treatment_plan", label: "Treatment Plan" },
  { value: "referral_letter", label: "Referral Letter" },
  { value: "progress_photo", label: "Progress Photo" },
  { value: "other_document", label: "Other Document" },
];

const ScrollReportsCard = ({
  patientReports,
  reload,
  loading,
}: {
  patientReports: any;
  reload?: (filters: any) => void;
  loading?: boolean;
}) => {
  const dispatch = useDispatch() as any;

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<string | null>(null);

  //delete modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalData, setModalData] = useState<any>({});

  const [searchText, setSearchText] = useState<string>("");
  const [reportType, setReportType] = useState<string>("");

  const handleDeleteImage = (record: any) => {
    setIsModalOpen(true);
    setModalData({
      id: record?.id,
      title: "Delete Report",
      description: `Are you sure you want to delete this report(${record?.name})?`,
      name: record?.name,
    });
  };

  const handleConfirm = async (id: any) => {
    try {
      setIsLoading(true);
      const res = await dispatch(deletePatientMedicalRecordAPI({ id: id }));
      if (res.error) {
        toast.error(res.error.message || "Failed to delete report");
      } else {
        toast.success("Report deleted successfully");
        setIsModalOpen(false);
        reload?.({ searchText, type: reportType });
      }
    } catch (error) {
      toast.error("Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  //

  useEffect(() => {
    const debounce = setTimeout(() => {
      reload?.({ searchText, type: reportType });
    }, 200);
    return () => clearTimeout(debounce);
  }, [searchText, reportType]);

  console.log(loading);

  return (
    <ScrollReportsCardStyled>
      <div className="flex items-center gap-2 my-1 w-full">
        <div className="relative grow-1">
          <div className=" bg-blue-300 aspect-square absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center">
            <IoSearch />
          </div>
          <input
            placeholder="Report Name"
            className="w-full !pl-[40px] border !border-blue-900 focus:!border-blue-900 rounded-3xl py-2 search-box"
            type="text"
            name="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <Select
          onChange={(value) => {
            setReportType(value);
          }}
          className="min-w-[80px]"
          placeholder="Select Report Type"
          showSearch={true}
          allowClear={true}
          options={reportTypeOptions}
        />
      </div>
      <h4>{patientReports?.length} Records</h4>
      {/* <div className="sort">
            <button
              className="sort-button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Sort by: {selectedOption}{" "}
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                {options.map((option) => (
                  <div
                    key={option}
                    className="dropdown-item"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div> */}
      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={loading}
        tip="Loading..."
      >
        <div className="records-grid">
          {patientReports?.length > 0 ? (
            patientReports?.map((record: any) => (
              <div
                key={record?.id}
                className="record-card !rounded-2xl overflow-hidden "
              >
                {/* Container for image and delete button */}
                <div className="image-container">
                  {/* <img
                    src={record?.url}
                    alt={record?.name}
                    className="record-image"
                  /> */}
                  <FilePreview
                    fileContainerClassName="!w-full !h-full"
                    url={record?.url}
                    openPreview={(url) => {
                      setIsPreviewOpen(true);
                      setPreviewFile(url);
                    }}
                  />
                  {/* Delete button positioned over the image */}
                  <button
                    onClick={() => handleDeleteImage(record)}
                    className="delete-button"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </div>
                <div className="record-info">
                  <p className="record-name capitalize">{record?.name}</p>
                  <p className="record-date">
                    {moment(record?.uploadedAt).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center min-h-[100px] w-full">
              <p>No reports found</p>
            </div>
          )}
        </div>
      </Spin>
      <FilePreviewContent
        previewOpen={isPreviewOpen}
        closePreview={() => setIsPreviewOpen(false)}
        previewFile={previewFile}
      />
      <RaphaPlusModalV2
        title={modalData?.title}
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      >
        <RaphaPlusModalV2.Body>
          <p>{modalData?.description}</p>
        </RaphaPlusModalV2.Body>
        <RaphaPlusModalV2.Footer>
          <div className="flex gap-2 justify-end">
            <PrimaryButton onClick={() => setIsModalOpen(false)}>
              Cancel
            </PrimaryButton>
            <PrimaryButton
              disabled={isLoading}
              onClick={() => handleConfirm(modalData?.id)}
            >
              Confirm
            </PrimaryButton>
          </div>
        </RaphaPlusModalV2.Footer>
      </RaphaPlusModalV2>
    </ScrollReportsCardStyled>
  );
};

export default ScrollReportsCard;
