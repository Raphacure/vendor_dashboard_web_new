import styled from 'styled-components'
import SecoundaryButton from '@/components/custom/button/SecoundaryButton';
import React, { useRef, useState } from "react";
import useUploadToS3 from '@/hooks/useUploadToS3';
import { useSelector } from 'react-redux';

type acceptTypeDto = "pdf" | "png" | "jpeg"

type prop = {
  acceptType: acceptTypeDto[],
  mode: "multiple" | "single",
  fileUrls: string[]
  setFileUrls: (prop : string[]) => void
}

const FileUploader = ({ acceptType, fileUrls, mode, setFileUrls }: prop) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: number }[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useSelector(({ auth }: any) => auth);

  const { uploadToS3 } = useUploadToS3()

  console.log(fileUrls);
  

  const uploadFile = async (file: File) => {
    if (!file) return;
  
    const isDuplicate = uploadedFiles.some(
      (uploaded) => uploaded.name === file.name && uploaded.size === file.size
    );
  
    if (isDuplicate) {
      console.warn("File already uploaded:", file.name);
      return;
    }
  
    setIsLoading(true);
    try {
      const url = await uploadToS3(file, user?.id);
      setFileUrls([...fileUrls, url]);
      setUploadedFiles([...uploadedFiles, { name: file.name, size: file.size }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (mode === "multiple") {
        Array.from(files).forEach(file => uploadFile(file));
      } else {
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
        Array.from(e.dataTransfer.files).forEach(file => uploadFile(file));
      } else {
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
        accept={acceptType?.map(type => {
          if (type === "pdf") return "application/pdf";
          if (type === "jpeg") return "image/jpeg";
          if (type === "png") return "image/png";
          return "";
        })?.join(",")}
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
        <p>JPEG, PNG & PDF formats up to 10 MB</p>
      </div>

      {fileUrls?.length > 0 ?<div>
        {fileUrls?.length} files uploaded
      </div> : <></>}
    </FileUploaderStyled>
  );
};

export default FileUploader;



const FileUploaderStyled = styled.div`
    border : 1px dashed #7291F4;
    border-radius: 25px;
    padding: 35px;
    
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: center;
    color: #252B61;
    
    .uploadIcon {
        width: 60px;
        height: 51px;
        }
        
        .chooseFile {
            font-weight: 500;
            border-bottom: 1px solid  #252B61;
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
`