import React, { useState } from "react";
import { Alert, Upload } from "antd";
import type { UploadChangeParam } from "antd/lib/upload";
import type { UploadFile } from "antd/lib/upload/interface";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as xlsx from "xlsx";
import { X } from "lucide-react";

// Assuming these are your custom components. Ensure paths are correct.
import PrimaryButton from "../custom/button/PrimaryButton";
import CustomModal from "../custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "../custom/button/SecoundaryButton";

// New Summary Interface
export interface WellnessSummary {
  services: {
    productName: string;
    limit: {
      type: "discount" | "Wallet";
      amount: number;
    };
    tenure: string;
  }[];
  employees: { children: number; female: number; male: number };
}

interface WellnessReportsSummaryProps {
  onClose: () => void;
  onSummaryComplete: (summary: WellnessSummary) => void;
}

// List of MIME types accepted by the Upload component
const ACCEPTED_MIME_TYPES = [
  "application/pdf",
  "text/plain",
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "image/webp",
  "audio/mpeg",
  "audio/mp3",
  "audio/wav",
  "video/mov",
  "video/mpeg",
  "video/mp4",
  "video/mpg",
  "video/avi",
  "video/wmv",
  "video/mpegps",
  "video/flv",
].join(",");

const WellnessReportsSummary: React.FC<WellnessReportsSummaryProps> = ({
  onClose,
  onSummaryComplete,
}) => {
  // Updated initial state for the new Summary interface
  const [summary, setSummary] = useState<WellnessSummary>({
    services: [],
    employees: { male: 0, female: 0, children: 0 },
  });
  console.log("summary", summary);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fileList, setFileList] = useState<File[]>([]);

  // Initialize GoogleGenerativeAI with your API key
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
    // Clear previous summary with the new structure
    setSummary({
      services: [],
      employees: { male: 0, female: 0, children: 0 },
    });

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash", // Using a powerful and efficient model
      });
      const file = fileList[0];
      const fileType = file.type;

      // Updated prompt for the new data structure
      const basePrompt = `
You are an intelligent data extractor for healthcare services.

Please strictly analyze the **exact content** of the file provided. Do **not infer or assume** any information that is not explicitly stated. Your task is to extract the following information and format it as a single JSON object.

1.  **services**: An array of healthcare-related services. For each service, extract:
    * \`productName\`: The name of the service (e.g., "Doctor Consultation").
    * \`limit\`: An object specifying the coverage limit.
        * \`type\`: Must be "discount" (for percentages, e.g., 20% off) or "Wallet" (for fixed currency, e.g., ₹500).
        * \`amount\`: The numeric value. For "20% off", use 20. For "₹500", use 500. If no limit is mentioned, set type to "amount" and amount to 0.
    * \`tenure\`: The duration in format "{number}_{unit}" (e.g., "6_month", "1_year"). If not mentioned, set to "".

2.  **employees**: A single object with the total count of:
    * \`male\`: Total number of male employees.
    * \`female\`: Total number of female employees.
    * \`children\`: Total number of children.
    * If any count is missing, set its value to 0.

**IMPORTANT: Format the output as a single, clean JSON object** with only two keys: "services" and "employees". Do not add explanations or markdown formatting like \`\`\`json.
`;

      let result;

      // Logic for handling spreadsheet files
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
              const workbook = xlsx.read(event.target?.result, {
                type: "array",
              });
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

        const spreadsheetPrompt = `Here is data from a spreadsheet in JSON format. ${basePrompt}\n\nData:\n${data}`;
        result = await model.generateContent(spreadsheetPrompt);
      }
      // Logic for handling all other file types
      else {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const dataUrl = reader.result as string;
            if (dataUrl) {
              resolve(dataUrl.split(",")[1]);
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
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
        let jsonString = text;
        if (jsonMatch && jsonMatch[1]) {
          jsonString = jsonMatch[1];
        } else {
          const firstBrace = text.indexOf("{");
          const lastBrace = text.lastIndexOf("}");
          if (firstBrace !== -1 && lastBrace !== -1) {
            jsonString = text.substring(firstBrace, lastBrace + 1);
          }
        }

        const parsedResponse = JSON.parse(jsonString);
        // Validate against the new structure
        if (parsedResponse.services && parsedResponse.employees) {
          setSummary(parsedResponse);
        } else {
          throw new Error("Invalid JSON format from AI.");
        }
      } catch (parseError) {
        console.error("Error parsing AI response as JSON:", parseError);
        setError(`Failed to parse response. Raw response: ${text}`);
      }
    } catch (err) {
      console.error("Error analyzing file:", err);
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(
        `Failed to analyze the file: ${errorMessage}. Please try again.`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomModal.Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Left Panel: Upload and Analyze */}
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
                {!loading ? "Analyze with Rapha AI" : "Analyzing File..."}
              </PrimaryButton>
            </div>
          </div>

          {/* Right Panel: Analysis Results */}
          <div className="rounded-lg p-2 [box-shadow:2px_2px_19px_0px_#0000001A]">
            {error && <Alert message={error} type="error" showIcon />}
            {!error &&
              (summary.services.length > 0 ? (
                !loading && (
                  <div className="p-4 max-h-[300px] h-full overflow-auto">
                    <h4 className="font-semibold text-lg mb-3">
                      Analysis Results:
                    </h4>
                    {/* Display Employee Counts */}
                    <div>
                      <h5 className="font-medium text-md mb-2">Employees:</h5>
                      <ul className="list-disc list-inside ml-4 mb-4">
                        <li>Male: {summary.employees.male}</li>
                        <li>Female: {summary.employees.female}</li>
                        <li>Children: {summary.employees.children}</li>
                      </ul>
                    </div>

                    {/* Display Services List */}
                    <div>
                      <h5 className="font-medium text-md mb-2">Services:</h5>
                      <ul className="list-disc list-inside">
                        {summary.services.map((service, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between !mb-1"
                          >
                            <span className="text-sm">
                              {service.productName} (Tenure: {service.tenure}) -
                              Limit:{" "}
                              {service.limit.type === "discount"
                                ? `${service.limit.amount}%`
                                : `₹${service.limit.amount}`}
                            </span>
                            <button
                              onClick={() => {
                                const newServices = [...summary.services];
                                newServices.splice(index, 1);
                                setSummary({
                                  ...summary,
                                  services: newServices,
                                });
                              }}
                              className="ml-2 bg-red-200 p-1 !rounded-lg hover:text-red-700"
                            >
                              <X size={16} className="text-red-700" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              ) : (
                // Welcome/Loading View
                <div className="flex flex-col items-center justify-center h-full">
                  <div
                    className={`mb-2 mt-2 ${
                      loading ? "animate-spin" : "animate-bounce"
                    }`}
                  >
                    <img
                      width="50px"
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1740390379819.png"
                      alt="Rapha AI"
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
            disabled={loading || summary.services.length === 0}
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

export default WellnessReportsSummary;
