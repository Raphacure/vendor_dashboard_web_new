import styled from "styled-components";
import React, { useRef, useState } from "react";
import useUploadToS3 from "@/hooks/useUploadToS3";
import { useSelector } from "react-redux";
import {
  Loader,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import FilePreview from "@/components/custom/FilePreview/FilePreview";
import FilePreviewContent from "@/components/custom/FilePreview/FilePreviewContent";

type acceptTypeDto = "pdf" | "png" | "jpeg";

type UploadingFile = {
  name: string;
  status: "uploading" | "error" | "success";
  file?: File; // Store the original file for retry functionality
};

type prop = {
  acceptType: acceptTypeDto[];
  mode: "multiple" | "single";
  fileUrls: string[];
  setFileUrls: (prop: string[]) => void;
};

const FileUploaderCard = ({
  acceptType,
  fileUrls,
  mode,
  setFileUrls,
}: prop) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; size: number }[]
  >([]);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { user } = useSelector(({ auth }: any) => auth);

  const { uploadToS3 } = useUploadToS3();

  const validateFile = (file: File): boolean => {
    // Check file size (10MB limit)
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSizeInBytes) {
      console.error("File too large:", file.name);
      return false;
    }

    // Check file type
    const fileType = file.type.split("/")[1];
    if (!acceptType.includes(fileType as acceptTypeDto)) {
      console.error("Invalid file type:", file.type);
      return false;
    }

    return true;
  };

  const uploadFile = async (file: File) => {
    if (!file) return;

    // Check for duplicates - only in multiple mode
    if (mode === "multiple") {
      const isDuplicate = uploadedFiles.some(
        (uploaded) => uploaded.name === file.name && uploaded.size === file.size
      );

      if (isDuplicate) {
        console.warn("File already uploaded:", file.name);
        return;
      }
    }

    // Validate file
    if (!validateFile(file)) {
      return;
    }

    setIsLoading(true);

    // In single mode, we should clear any existing uploaded files and states
    if (mode === "single" && fileUrls.length > 0) {
      // Clear existing files
      setFileUrls([]);
      setUploadedFiles([]);

      // Clear any uploading files that might be in progress
      setUploadingFiles((prev) =>
        prev.filter((item) => item.status !== "success")
      );
    }

    // Add file to uploading state
    setUploadingFiles((prev) => [
      ...prev,
      { name: file.name, status: "uploading" as const, file: file },
    ]);

    try {
      const url = await uploadToS3(file, user?.id);

      // Update status to success
      setUploadingFiles((prev) =>
        prev.map((item) =>
          item.name === file.name
            ? { ...item, status: "success" as const }
            : item
        )
      );

      // Remove from loading state after a delay
      setTimeout(() => {
        setUploadingFiles((prev) =>
          prev.filter(
            (item) => !(item.name === file.name && item.status === "success")
          )
        );
      }, 1500);

      // In single mode, we replace the existing file, in multiple mode we add
      const newFileUrls = mode === "single" ? [url] : [...fileUrls, url];
      setFileUrls(newFileUrls);

      // Same for the uploaded files record
      const newUploadedFiles =
        mode === "single"
          ? [{ name: file.name, size: file.size }]
          : [...uploadedFiles, { name: file.name, size: file.size }];

      setUploadedFiles(newUploadedFiles);
    } catch (error) {
      console.error(error);

      // Update status to error
      setUploadingFiles((prev) =>
        prev.map((item) =>
          item.name === file.name ? { ...item, status: "error" as const } : item
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const uploadMultipleFiles = async (files: File[]) => {
    // In single mode, just take the first file
    if (mode === "single" && files.length > 0) {
      uploadFile(files[0]);
      return;
    }

    // Filter out duplicates and invalid files - only in multiple mode
    const validFiles = files.filter((file) => {
      const isDuplicate = uploadedFiles.some(
        (uploaded) => uploaded.name === file.name && uploaded.size === file.size
      );

      if (isDuplicate) {
        console.warn("File already uploaded:", file.name);
        return false;
      }

      const isValid = validateFile(file);
      if (!isValid) {
        return false;
      }

      return true;
    });

    if (validFiles.length === 0) return;

    setIsLoading(true);

    // Add files to uploading state
    setUploadingFiles((prev) => [
      ...prev,
      ...validFiles.map((file) => ({
        name: file.name,
        status: "uploading" as const,
        file: file, // Store the file for retry functionality
      })),
    ]);

    const results = await Promise.allSettled(
      validFiles.map((file) => uploadToS3(file, user?.id))
    );

    const successfulUploads: string[] = [];
    const successfulFiles: File[] = [];

    // Process results and update states
    results.forEach((result, index) => {
      const file = validFiles[index];

      if (result.status === "fulfilled") {
        successfulUploads.push(result.value);
        successfulFiles.push(file);

        // Update status to success
        setUploadingFiles((prev) =>
          prev.map((item) =>
            item.name === file.name
              ? { ...item, status: "success" as const }
              : item
          )
        );
      } else {
        console.error(`Failed to upload ${file.name}:`, result.reason);

        // Update status to error
        setUploadingFiles((prev) =>
          prev.map((item) =>
            item.name === file.name
              ? { ...item, status: "error" as const }
              : item
          )
        );
      }
    });

    // Remove successfully uploaded files from the loading state after a delay
    if (successfulUploads.length > 0) {
      setTimeout(() => {
        setUploadingFiles((prev) =>
          prev.filter(
            (item) =>
              !successfulFiles.some(
                (file) => file.name === item.name && item.status === "success"
              )
          )
        );
      }, 1500);
    }

    // Update file URLs with successful uploads
    if (successfulUploads.length > 0) {
      const newFileUrls = [...fileUrls, ...successfulUploads];
      setFileUrls(newFileUrls);

      const newUploadedFiles = [
        ...uploadedFiles,
        ...successfulFiles.map((file) => ({
          name: file.name,
          size: file.size,
        })),
      ];
      setUploadedFiles(newUploadedFiles);
    }

    setIsLoading(false);
  };

  const retryUpload = async (fileName: string) => {
    // Find the file to retry
    const fileToRetry = uploadingFiles.find(
      (f) => f.name === fileName && f.status === "error"
    );

    if (!fileToRetry || !fileToRetry.file) {
      console.error("No file to retry or original file not found");
      return;
    }

    // Update the status to uploading
    setUploadingFiles((prev) =>
      prev.map((item) =>
        item.name === fileName
          ? { ...item, status: "uploading" as const }
          : item
      )
    );

    try {
      const url = await uploadToS3(fileToRetry.file, user?.id);

      // Update status to success
      setUploadingFiles((prev) =>
        prev.map((item) =>
          item.name === fileName
            ? { ...item, status: "success" as const }
            : item
        )
      );

      // Remove from loading state after a delay
      setTimeout(() => {
        setUploadingFiles((prev) =>
          prev.filter(
            (item) => !(item.name === fileName && item.status === "success")
          )
        );
      }, 1500);

      // Add to successful uploads
      const newFileUrls = [...fileUrls, url];
      setFileUrls(newFileUrls);

      const newUploadedFiles = [
        ...uploadedFiles,
        { name: fileToRetry.file.name, size: fileToRetry.file.size },
      ];
      setUploadedFiles(newUploadedFiles);
    } catch (error) {
      console.error(`Failed to retry upload for ${fileName}:`, error);

      // Update status back to error
      setUploadingFiles((prev) =>
        prev.map((item) =>
          item.name === fileName ? { ...item, status: "error" as const } : item
        )
      );
    }
  };

  const retryAllFailedUploads = async () => {
    const failedFiles = uploadingFiles.filter(
      (f) => f.status === "error" && f.file
    );

    if (failedFiles.length === 0) return;

    // Mark all as uploading
    setUploadingFiles((prev) =>
      prev.map((item) =>
        item.status === "error" && item.file
          ? { ...item, status: "uploading" as const }
          : item
      )
    );

    setIsLoading(true);

    // Collect successful uploads
    const successfulRetries: { url: string; file: File }[] = [];

    // Process each file sequentially to avoid overwhelming the server
    for (const fileItem of failedFiles) {
      if (!fileItem.file) continue;

      try {
        const url = await uploadToS3(fileItem.file, user?.id);

        // Update status to success
        setUploadingFiles((prev) =>
          prev.map((item) =>
            item.name === fileItem.name
              ? { ...item, status: "success" as const }
              : item
          )
        );

        // Collect successful uploads instead of updating state for each one
        successfulRetries.push({ url, file: fileItem.file });
      } catch (error) {
        console.error(`Failed to retry upload for ${fileItem.name}:`, error);

        // Update status back to error
        setUploadingFiles((prev) =>
          prev.map((item) =>
            item.name === fileItem.name
              ? { ...item, status: "error" as const }
              : item
          )
        );
      }
    }

    // Add all successful uploads to the state at once
    if (successfulRetries.length > 0) {
      // Add all URLs to fileUrls
      const newFileUrls = [
        ...fileUrls,
        ...successfulRetries.map((item) => item.url),
      ];
      setFileUrls(newFileUrls);

      // Add all files to uploadedFiles
      const newUploadedFiles = [
        ...uploadedFiles,
        ...successfulRetries.map((item) => ({
          name: item.file.name,
          size: item.file.size,
        })),
      ];
      setUploadedFiles(newUploadedFiles);
    }

    // Remove successful uploads after a delay
    setTimeout(() => {
      setUploadingFiles((prev) =>
        prev.filter((item) => item.status !== "success")
      );
    }, 1500);

    setIsLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (mode === "multiple") {
        uploadMultipleFiles(Array.from(files));
      } else {
        // In single mode, just take the first file
        uploadFile(files[0]);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (mode === "multiple") {
        uploadMultipleFiles(Array.from(e.dataTransfer.files));
      } else {
        // In single mode, just take the first file
        uploadFile(e.dataTransfer.files[0]);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const getFormatMessage = () => {
    const formats = acceptType.map((type) => type.toUpperCase()).join(", ");
    return `${formats} formats up to 10 MB`;
  };

  const openPreview = (url: string) => {
    setPreviewFile(url);
    setPreviewOpen(true);
  };

  const closePreview = () => {
    setPreviewOpen(false);
    setPreviewFile(null);
  };

  const handleRemoveFile = (index: number) => {
    // Remove file from fileUrls
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);

    // Remove file from uploadedFiles
    const newUploadedFiles = [...uploadedFiles];
    newUploadedFiles.splice(index, 1);
    setUploadedFiles(newUploadedFiles);
  };

  return (
    <>
      <FileUploaderStyled
        className="flex flex-col justify-center items-center gap-[9px] px-[30px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept={acceptType
            ?.map((type) => {
              if (type === "pdf") return "application/pdf";
              if (type === "jpeg") return "image/jpeg";
              if (type === "png") return "image/png";
              return "";
            })
            ?.join(",")}
          multiple={mode === "multiple"}
        />

        <div>
          <img
            className="uploadIcon"
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111904-1743769172669.png"
            alt=""
          />
          <div>
            <span
              className="chooseFile cursor-pointer"
              onClick={openFileDialog}
            >
              Choose {mode === "multiple" ? "files" : "a file"}
            </span>{" "}
            or drag and drop
          </div>
          <p>
            {getFormatMessage()} {mode === "single" && "(Single file only)"}
          </p>
        </div>

        {/* Show uploading files state */}
        {uploadingFiles.length > 0 && (
          <div className="uploading-files-container">
            <div className="uploading-title">
              {uploadingFiles.some((f) => f.status === "uploading") && (
                <Loader size={14} className="loading-spinner" />
              )}
              Uploading files...
              {/* Show retry all button if there are failed uploads */}
              {uploadingFiles.some((f) => f.status === "error") && (
                <button
                  className="retry-all-btn"
                  onClick={retryAllFailedUploads}
                  disabled={isLoading}
                >
                  <RefreshCw size={14} />
                  Retry All
                </button>
              )}
            </div>
            <div className="uploading-files">
              {uploadingFiles.map((file, idx) => (
                <div
                  key={`${file.name}-${idx}`}
                  className={`uploading-file-item status-${file.status}`}
                >
                  <div className="uploading-file-name">{file.name}</div>
                  <div className="uploading-file-status">
                    {file.status === "uploading" && (
                      <Loader size={14} className="loading-spinner" />
                    )}
                    {file.status === "success" && (
                      <span className="success-text">Uploaded</span>
                    )}
                    {file.status === "error" && (
                      <div className="error-container">
                        <AlertCircle size={14} color="#ff4d4f" />
                        <span className="error-text">Failed</span>
                        <button
                          className="retry-btn"
                          onClick={() => retryUpload(file.name)}
                          disabled={isLoading}
                        >
                          <RefreshCw size={12} />
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {fileUrls?.length > 0 && (
          <div className="uploaded-files-container">
            <div className="files-count">{fileUrls.length} files uploaded</div>
            <div className="files-preview-scroll">
              <div className="files-preview-grid">
                {fileUrls.map((url, index) => <FilePreview key={index} handleRemoveFile={() => handleRemoveFile(index)} url={url} openPreview={openPreview} fileContainerClassName="w-full" />)}
              </div>
            </div>
          </div>
        )}
      </FileUploaderStyled>


      <FilePreviewContent
        previewOpen={previewOpen}
        closePreview={closePreview}
        previewFile={previewFile}
      />
    </>
  );
};

export default FileUploaderCard;

const FileUploaderStyled = styled.div`
  border: 1px dashed #7291f4;
  border-radius: 25px;
  padding: 35px;

  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #252b61;
  background-color: white;

  .uploadIcon {
    width: 60px;
    height: 51px;
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
    text-align: center;
  }

  .uploading-files-container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
    background-color: #f5f8ff;
    border-radius: 8px;
    padding: 10px;
  }

  .uploading-title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #252b61;
    margin-bottom: 8px;
    justify-content: space-between;
  }

  .loading-spinner {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .uploading-files {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .uploading-file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: white;
    font-size: 12px;
    border-left: 3px solid #7291f4;

    &.status-success {
      border-left-color: #52c41a;
    }

    &.status-error {
      border-left-color: #ff4d4f;
    }
  }

  .uploading-file-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
  }

  .uploading-file-status {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .success-text {
    color: #52c41a;
  }

  .error-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .error-text {
    color: #ff4d4f;
  }

  .retry-btn {
    background: none;
    border: none;
    color: #7291f4;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 2px 5px;
    font-size: 11px;
    margin-left: 3px;

    &:hover {
      text-decoration: underline;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .retry-all-btn {
    background: #e6eeff;
    border: 1px solid #d1deff;
    color: #7291f4;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 3px;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 4px;
    margin-left: auto;

    &:hover {
      background: #d1deff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .uploaded-files-container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
  }

  .files-count {
    font-size: 16px;
    margin-bottom: 10px;
    color: #252b61;
  }

  .files-preview-scroll {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 10px; /* For scrollbar space */

    /* Customizing scrollbar */
    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c1cdf7;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #7291f4;
    }
  }

  .files-preview-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-height: 150px;
    overflow-y: auto;
  }
`;

// Modal content styling
const ModalContent = styled.div`
  .image-preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    /* min-height: 70vh; */
    overflow: auto;
  }

  .image-preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .pdf-preview-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 70vh;
  }

  .pdf-preview-iframe {
    width: 100%;
    min-height: 70vh;
    border: none;
  }

  .generic-preview-container {
    padding: 20px;
    text-align: center;
  }

  .no-preview-message {
    margin-bottom: 15px;
    color: #666;
  }

  .download-link {
    color: #7291f4;
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid #7291f4;
    border-radius: 4px;
    display: inline-block;
    margin-top: 10px;

    &:hover {
      background-color: #f0f4ff;
    }
  }

  .close-preview-btn {
    background-color: #7291f4;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #5a7ae4;
    }
  }
`;
