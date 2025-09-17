import styled from "styled-components";
import React, { useRef } from "react";

type FileUploaderProps = {
  acceptType?: string;
  mode?: "multiple" | "single";
  onFileUpload?: any;
  acceptText?: string;
};

const FileUploaderV2: React.FC<FileUploaderProps> = ({
  acceptType,
  mode = "single",
  onFileUpload,
  acceptText="JPEG, PNG & PDF"
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    if (mode === "multiple") {
      onFileUpload?.(Array.from(files));
    } else {
      onFileUpload?.(files[0]);
    }
    e.target.value = "";
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles?.length) return;

    if (mode === "multiple") {
      onFileUpload?.(Array.from(droppedFiles));
    } else {
      onFileUpload?.(droppedFiles[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
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
        accept={acceptType ?? ""}
        multiple={mode === "multiple"}
      />
      <div>
        <img
          className="uploadIcon"
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111904-1743769172669.png"
          alt=""
        />
        <div>
          <span className="chooseFile cursor-pointer" onClick={openFileDialog}>
            Choose the file
          </span>{" "}
          or drag and drop
        </div>
        <p>{acceptText} formats up to 10 MB</p>
      </div>
    </FileUploaderStyled>
  );
};

export default FileUploaderV2;

const FileUploaderStyled = styled.div`
  border: 1px dashed #7291f4;
  border-radius: 25px;
  padding: 35px;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #252b61;
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
  .btn {
    border-width: 1px;
  }
`;
