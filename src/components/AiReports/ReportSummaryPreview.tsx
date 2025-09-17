import React, { useState } from "react";
import { Button, Spin, Alert, Upload } from "antd";
import type { UploadChangeParam } from "antd/lib/upload";
import type { UploadFile } from "antd/lib/upload/interface";
import { FileSearchOutlined } from "@ant-design/icons";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as xlsx from "xlsx";

// Assuming these are your custom components. Ensure paths are correct.
import PrimaryButton from "../custom/button/PrimaryButton";
import CustomModal from "../custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "../custom/button/SecoundaryButton";
import { X } from "lucide-react";

interface Summary {
  services: string[];
  locations: {
    state: string;
    city: string;
    employees: { children: number; female: number; male: number };
  }[];
}

interface ReportSummaryPreviewProps {
  onClose: () => void;
  onSummaryComplete: (summary: Summary) => void;
}

// List of MIME types accepted by the Upload component
const ACCEPTED_MIME_TYPES = [
  // Documents
  "application/pdf",
  "text/plain",
  // Spreadsheets
  "text/csv",
  "application/vnd.ms-excel", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  // Images
  "image/png",
  "image/jpeg",
  "image/webp",
  // Audio
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  // Videos
  "video/mov",
  "video/mpeg",
  "video/mp4",
  "video/mpg",
  "video/avi",
  "video/wmv",
  "video/mpegps",
  "video/flv",
].join(",");

const ReportSummaryPreview: React.FC<ReportSummaryPreviewProps> = ({
  onClose,
  onSummaryComplete,
}) => {
  const [summary, setSummary] = useState<Summary>({
    locations: [],
    services: [],
  });
  console.log("summary", summary);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fileList, setFileList] = useState<File[]>([]);

  // Initialize GoogleGenerativeAI with your API key
  // Ensure VITE_GENIMI_API_KEY is defined in your .env file
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GENIMI_API_KEY);

  const handleUploadChange = (info: UploadChangeParam<UploadFile>) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-1); // Keep only the last file

    setFileList(
      newFileList.map((file: any) => file.originFileObj).filter(Boolean)
    );

    if (newFileList.length > 0) {
      setError(""); // Clear error on new file selection
    }
  };

  const handleAnalyzeWithGemini = async () => {
    if (fileList.length === 0) {
      setError("Please upload a file first.");
      return;
    }

    setLoading(true);
    setError("");
    setSummary({ locations: [], services: [] }); // Clear previous summary

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash", // Using a powerful model for multimodal input
      });
      const file = fileList[0];
      const fileType = file.type;

      const basePrompt = `
You are an intelligent data extractor.

Please strictly analyze the **exact content** of the file provided. Do **not infer or assume** any information that is not explicitly stated. Your task is to extract only the following:

1. **Locations with healthcare service needs**:
   - For each location:
     - Extract the **state** and **city**. If only the state is mentioned, use the **official capital city** of that state.
     - The **employees** object should contain counts for **male**, **female**, and **children**:
       - If employee data is explicitly mentioned, use those values
       - If employee data is missing, set all counts to 0
     - Include all locations mentioned, regardless of whether employee data is available.

2. **Healthcare-related services** required in the file.
   - Extract **only services** that are clearly healthcare-related (e.g., Medical Consultation, Nursing Care, etc.).
   - Do **not infer** services from context; include only if the service is explicitly mentioned.

**Format the output as a JSON object** with exactly two top-level keys:
- "locations": an array of objects with the following structure:
  {
    "state": "State Name",
    "city": "City Name", 
    "employees": {
      "male": X,
      "female": Y,
      "children": Z
    }
  }
- "services": an array of strings containing the healthcare services
`;

      let result;

      // --- Logic for handling Excel/CSV files ---
      if (
        fileType === "text/csv" ||
        fileType === "application/vnd.ms-excel" ||
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        const data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              const arrayBuffer = event.target?.result;
              const workbook = xlsx.read(arrayBuffer, { type: "array" });
              const sheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[sheetName];
              const jsonData = xlsx.utils.sheet_to_json(worksheet);
              resolve(JSON.stringify(jsonData, null, 2));
            } catch (e) {
              reject(new Error("Failed to parse the spreadsheet file."));
            }
          };
          reader.onerror = () => reject(new Error("Error reading file."));
          reader.readAsArrayBuffer(file);
        });

        const spreadsheetPrompt = `Here is data extracted from a spreadsheet in JSON format. ${basePrompt}\n\nData:\n${data}`;
        result = await model.generateContent(spreadsheetPrompt);
      }
      // --- Logic for handling PDF, Images, Videos, and other direct files ---
      else {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (reader.result) {
              const dataUrl = reader.result as string;
              const base64 = dataUrl.split(",")[1];
              resolve(base64);
            } else {
              reject(new Error("Failed to read file."));
            }
          };
          reader.onerror = () => reject(new Error("Error reading file."));
          reader.readAsDataURL(file);
        });

        const filePart = {
          inlineData: { data: base64Data, mimeType: fileType },
        };

        result = await model.generateContent([basePrompt, filePart]);
      }

      const response = await result.response;
      const text = await response.text();

      try {
        // Attempt to extract JSON from the response
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
        let jsonString = text;

        if (jsonMatch && jsonMatch[1]) {
          jsonString = jsonMatch[1];
        } else {
          const firstBrace = text.indexOf("{");
          const lastBrace = text.lastIndexOf("}");
          if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            jsonString = text.substring(firstBrace, lastBrace + 1);
          }
        }

        const parsedResponse = JSON.parse(jsonString);
        if (parsedResponse.locations && parsedResponse.services) {
          setSummary(parsedResponse);
        } else {
          throw new Error("Invalid JSON format from Gemini.");
        }
      } catch (parseError) {
        console.error("Error parsing Rapha AI response as JSON:", parseError);
        setError(`Failed to parse response. Raw response: ${text}`);
      }
    } catch (err) {
      console.error("Error analyzing file:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      if (errorMessage.includes("API key not valid")) {
        setError("API key is invalid. Please check your VITE_GENIMI_API_KEY.");
      } else {
        setError(
          `Failed to analyze the file: ${errorMessage}. Please try again.`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomModal.Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="[box-shadow:2px_2px_19px_0px_#0000001A] rounded-lg p-2">
            <h3>Upload a File for Rapha AI Analysis</h3>

            <Upload
              beforeUpload={() => false}
              onChange={handleUploadChange}
              accept={ACCEPTED_MIME_TYPES}
              fileList={fileList.map((file, index) => ({
                uid: `${file.name}-${index}`,
                name: file.name,
                status: "done",
                size: file.size,
                type: file.type,
              }))}
              maxCount={1}
            >
              <PrimaryButton type="primary">Click to Upload File</PrimaryButton>
            </Upload>

            <div className="mt-5">
              <PrimaryButton
                onClick={handleAnalyzeWithGemini}
                disabled={fileList.length === 0 || loading}
                size="large"
              >
                {/* {loading ?  : <FileSearchOutlined />} */}
                {!loading ? "Analyze with Rapha AI" : "Analyzing File..."}
              </PrimaryButton>
            </div>
          </div>

          <div className="rounded-lg p-2 [box-shadow:2px_2px_19px_0px_#0000001A]">
            {error && <Alert message={error} type="error" showIcon />}
            {!error &&
              (summary.locations.length > 0 || summary.services.length > 0 ? (
                !loading &&
                !error && (
                  <div className="p-4 max-h-[300px] h-full overflow-auto">
                    <h4 className="font-semibold text-lg mb-3">
                      Analysis Results:
                    </h4>
                    <div>
                      <h5 className="font-medium text-md mb-2">Locations:</h5>
                      <ul className="list-disc list-inside ml-4 mb-4">
                        {summary.locations.map((location, index) => (
                          <li key={index} className="flex items-center justify-between !mb-1">
                            <span>
                              {location.city}, {location.state} - Male:{" "}
                              {location.employees.male}, Female:{" "}
                              {location.employees.female}, Children:{" "}
                              {location.employees.children}
                            </span>
                            <button
                              onClick={() => {
                                const newLocations = [...summary.locations];
                                newLocations.splice(index, 1);
                                setSummary({ ...summary, locations: newLocations });
                              }}
                              className="ml-2 bg-red-200 p-1 !rounded-lg hover:text-red-700"
                            >
                              <X className="text-red-700"/>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-md mb-2">Services:</h5>
                      <ul className="list-disc list-inside">
                        {summary.services.map((service, index) => (
                          <li key={index} className="flex items-center justify-between  !mb-1">
                            <span>{service}</span>
                            <button
                              onClick={() => {
                                const newServices = [...summary.services];
                                newServices.splice(index, 1);
                                setSummary({ ...summary, services: newServices });
                              }}
                              className="ml-2 bg-red-200 p-1 !rounded-lg hover:text-red-700"
                              
                            >
                              <X className="text-red-700"/>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <div
                    className={`mb-2 mt-2 ${
                      loading ? "animate-spin" : "animate-bounce"
                    }`}
                  >
                    <img
                      width="50px"
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1740390379819.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-gray-700">
                      {loading
                        ? "Analyzing Your File..."
                        : "Rapha AI is Here to Help!"}
                    </h3>
                    <p className="text-gray-500 animate-pulse">
                      {loading
                        ? "Rapha AI is working its magic."
                        : "Upload a file and let me analyze it for you"}
                    </p>
                    <p className="text-sm text-gray-400">
                      {loading
                        ? "This won’t take long — thank you for your patience!"
                        : "I can process various file formats including PDFs, spreadsheets, and images"}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex gap-2 justify-end">
          <SecoundaryButton onClick={onClose}>Cancel</SecoundaryButton>
          <PrimaryButton
            disabled={
              loading ||
              !Array.isArray(summary.locations) ||
              !Array.isArray(summary.services) ||
              (summary.locations.length === 0 && summary.services.length === 0)
            }
            onClick={() => {
              onSummaryComplete(summary);
              onClose();
            }}
          >
            Approve AI Data
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </>
  );
};

export default ReportSummaryPreview;
