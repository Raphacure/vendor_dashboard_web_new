import React, { useRef, useState } from "react";
import { UploadCardStyled } from "./UploadCard.styled";
import { Select, message, Input, Row, Col, Button } from "antd";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { useDispatch } from "react-redux";
import { uploadMedicalRecord } from "@/redux/slices/PatientDoctor/PatientService";
import { toast } from "react-hot-toast";
import FileUploaderCard from "@/components/custom/FileUpload/FileUploaderCard";

const { TextArea } = Input;

const reportTypeOptions = [
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

const UploadCard = ({ reload, patientId,submitFunction }: { reload: () => void, patientId: string,submitFunction?: (payload: any) => void }) => {
  const dispatch = useDispatch() as any;
  const [formData, setFormData] = useState<any>([]);
  const [reportName, setReportName] = useState<string>("");
  const [reportType, setReportType] = useState<string>("");
  const [reportDescription, setReportDescription] = useState<string>("");
  const [errors, setErrors] = useState<{
    name: string;
    type: string;
    file: string;
  }>({
    name: "",
    type: "",
    file: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): Partial<typeof errors> => {
    const newErrors: Partial<typeof errors> = {};

    if (!reportName.trim()) {
      newErrors.name = "Report name is required";
    }

    if (!reportType) {
      newErrors.type = "Report type is required";
    }

    // Assuming formData is an array of URL strings based on previous context
    if (formData.length === 0 || !formData[0]) {
      newErrors.file = "File upload is required";
    }

    return newErrors;
  };

  const handleSaveReport = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors({
        name: "", // Reset previous errors before setting new ones
        type: "",
        file: "",
        ...validationErrors,
      });
      return;
    }
    // Clear errors if validation passes
    setErrors({ name: "", type: "", file: "" });

    const payload = {
      user_id: parseInt(patientId),
      name: reportName,
      type: reportType,
      url: formData[0] || "", // Use the first URL from the array
      description: reportDescription,
    };

    setIsSubmitting(true);
    try {
      if(submitFunction){
        submitFunction(payload);
      }else{
        // Prepare payload according to required format
  
        const response = await dispatch(uploadMedicalRecord({ payload }));
  
        if (response.error) {
          toast.error(response.error);
          return;
        }
        toast.success("Report uploaded successfully");
      }
      
      setReportName("");
      setReportType("");
      setReportDescription("");
      setFormData([]);
    } catch (error) {
      console.error("Error uploading report:", error);
      message.error("Failed to upload report. Please try again.");
    } finally {
      setIsSubmitting(false);
      if (reload) {
        reload();
      }
    }
  };

  // Clear specific error when user starts typing/selecting
  const clearError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: "",
      });
    }
  };

  return (
    <UploadCardStyled>
      <div className="upload-section">
        <div className="file-container">
          <FileUploaderCard
            acceptType={["jpeg", "png", "pdf"]}
            fileUrls={formData}
            setFileUrls={(files) => {
              setFormData(files);
              clearError("file");
            }}
            mode="single"
          />
          {errors.file && <div className="error-message">{errors.file}</div>}
        </div>

        <div className="text-box">
          <Row gutter={16} className="name-type-row">
            <Col span={14}>
              <div className="input-container !border-none">
                <Input
                  placeholder="Enter Report Name"
                  className="custom-input"
                  value={reportName}
                  onChange={(e) => {
                    setReportName(e.target.value);
                    clearError("name");
                  }}
                  status={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>
            </Col>

            <Col span={10}>
              <div className="select-container">
                <Select
                  className={`report-type-select ${
                    errors.type ? "has-error" : ""
                  }`}
                  placeholder="Report Type"
                  value={reportType || undefined}
                  onChange={(value) => {
                    setReportType(value);
                    clearError("type");
                  }}
                  options={reportTypeOptions}
                  showSearch
                  optionLabelProp="label"
                  popupMatchSelectWidth={false}
                  listHeight={256}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  status={errors.type ? "error" : ""}
                />
                {errors.type && (
                  <div className="error-message">{errors.type}</div>
                )}
              </div>
            </Col>
          </Row>

          <TextArea
            placeholder="Enter Report Description (Optional)"
            className="ant-input description-field"
            rows={2}
            value={reportDescription}
            onChange={(e) => setReportDescription(e.target.value)}
          />
        </div>
        <div className="upload-save-button">
          <PrimaryButton
            onClick={handleSaveReport}
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className="pt-2"
          >
            {isSubmitting ? "Saving..." : "Save Report"}
          </PrimaryButton>
        </div>
      </div>
    </UploadCardStyled>
  );
};

export default UploadCard;
