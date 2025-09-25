import styled from "styled-components";
import SecoundaryButton from "../button/SecoundaryButton";
import { File } from "lucide-react";
import CustomModal from "../modal/CustomModal/CustomModal";
import toast from "react-hot-toast";

const RenderPreviewContent = ({
  previewFile,
}: {
  previewFile: string | null;
}) => {
  if (!previewFile) return null;

  const fileExtension = previewFile.split(".").pop()?.toLowerCase() || "";

  switch (fileExtension) {
    case "jpeg":
    case "jpg":
    case "png":
      return (
        <ModalContent>
          <div className="image-preview-container">
            <img
              src={previewFile}
              alt="Full preview"
              className="image-preview"
            />
          </div>
        </ModalContent>
      );

    case "pdf":
      return (
        <ModalContent>
          <div className="pdf-preview-container">
            <iframe
              src={`${previewFile}#toolbar=0&navpanes=0&scrollbar=0`}
              className="pdf-preview-iframe"
              title="PDF Preview"
            />
          </div>
        </ModalContent>
      );

    default:
      return (
        <ModalContent>
          <div className="generic-preview-container">
            <File size={60} color="#7291F4" />
            <p className="no-preview-message">
              This file type cannot be previewed directly.
            </p>
            <a
              href={previewFile}
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              Open file in new tab
            </a>
          </div>
        </ModalContent>
      );
  }
};

const FilePreviewContent = ({
  previewOpen,
  closePreview,
  previewFile,
}: {
  previewOpen: boolean;
  closePreview: () => void;
  previewFile: string | null;
}) => {
  const handleDownload = async () => {
    if (!previewFile) return;

    try {
      const response = await fetch(previewFile);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = previewFile.split("/").pop() || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Failed to download the file.");
    }
  };

  return (
    <CustomModal
      open={previewOpen}
      handleClose={closePreview}
      title="File Preview"
    >
      <CustomModal.Body>
        {RenderPreviewContent({ previewFile })}
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton
            onClick={closePreview}
            className="close-preview-btn"
          >
            Close
          </SecoundaryButton>
          <SecoundaryButton
            onClick={handleDownload}
            className="download-btn"
            disabled={!previewFile}
          >
            Download
          </SecoundaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default FilePreviewContent;

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
