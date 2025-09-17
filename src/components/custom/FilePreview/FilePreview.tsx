import React, { useState } from "react";
import { Trash2, FileText, File } from "lucide-react";
import { FaEye } from "react-icons/fa";
import styled from "styled-components";
import FilePreviewContent from "./FilePreviewContent";

const FilePreview = ({
  url,
  handleRemoveFile,
  openPreview,
  fileContainerClassName,
  showPreview = false,
}: {
  url: string;
  handleRemoveFile?: () => void;
  openPreview?: (url: string) => void;
  fileContainerClassName?: string;
  showPreview?: boolean;
}) => {
  const [showFilePreview, setFilePreview] = useState(false);

  const fileExtension = url.split(".").pop()?.toLowerCase() || "";

  let filePreview;

  switch (fileExtension) {
    case "jpeg":
    case "jpg":
    case "png":
      filePreview = (
        <div className={`preview-container ${fileContainerClassName}`}>
          <img src={url} alt="Preview" className="file-thumbnail" />
          <div className="file-actions">
            <button
              className="preview-file"
              onClick={() => {
                if (showPreview) {
                  setFilePreview(true);
                } else {
                  openPreview?.(url);
                }
              }}
            >
              <FaEye size={16} />
            </button>
            {handleRemoveFile && (
              <button
                className="remove-file"
                onClick={() => handleRemoveFile?.()}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      );
      break;

    case "pdf":
      filePreview = (
        <div className={`pdf-preview ${fileContainerClassName}`}>
          <div className="pdf-icon-wrapper">
            <FileText size={40} color="#e74c3c" />
            <span className="pdf-label">PDF</span>
          </div>
          <div className="file-actions">
            <button
              className="preview-file"
              onClick={() => {
                if (showPreview) {
                  setFilePreview(true);
                } else {
                  openPreview?.(url);
                }
              }}
            >
              <FaEye size={16} />
            </button>
            {handleRemoveFile && (
              <button
                className="remove-file"
                onClick={() => handleRemoveFile?.()}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      );
      break;

    default:
      filePreview = (
        <div className={`generic-file ${fileContainerClassName}`}>
          <File size={40} color="#7291F4" />
          <div className="file-actions">
            <button
              className="preview-file"
              onClick={() => {
                if (showPreview) {
                  setFilePreview(true);
                } else {
                  openPreview?.(url);
                }
              }}
            >
              <FaEye size={16} />
            </button>
            {handleRemoveFile && (
              <button
                className="remove-file"
                onClick={() => handleRemoveFile?.()}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>
      );
  }

  return (
    <FilePreviewStyled>
      <div className="file-preview-item">{filePreview}</div>
      {showPreview && showFilePreview && (
        <FilePreviewContent
          closePreview={() => setFilePreview(false)}
          previewFile={url}
          previewOpen={showFilePreview}
        />
      )}
    </FilePreviewStyled>
  );
};

export default FilePreview;

const FilePreviewStyled = styled.div`
  .file-preview-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .preview-container,
  .pdf-preview,
  .generic-file {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    overflow: hidden;
    min-height: 50px;
    min-width: 80px;
    aspect-ratio: 1/1;

    &:hover {
      .file-actions {
        opacity: 1;
      }
    }
  }

  .file-thumbnail {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .pdf-icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pdf-label {
    font-size: 12px;
    font-weight: 600;
    color: #e74c3c;
    margin-top: 5px;
  }

  .file-actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .preview-file,
  .remove-file {
    color: white;
    cursor: pointer;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
