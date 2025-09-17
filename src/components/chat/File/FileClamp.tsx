import { useState } from "react";
import styled from "styled-components";
import FilePreview from "@/components/custom/FilePreview/FilePreview";

type prop = {
  files: string[];
  frameClassname?: string;
  fileCardClassname?: string;
};
const FileClamp = ({ files, fileCardClassname, frameClassname }: prop) => {

  return (
    <>
      <div
        className={`d-flex justify-content-end align-items-center flex-wrap ${frameClassname}`}
      >
        {files?.map((file: string, i: number) => {
          return (
            <StyleComponent className={`${fileCardClassname} box`} key={i}>
              <FilePreview
                showPreview={true}
                url={file}
              />
            </StyleComponent>
          );
        })}
      </div>
    </>
  );
};

export default FileClamp;

const StyleComponent = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  overflow: hidden;
  svg {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .displayBox {
    width: 100%;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      max-width: 100%;
      max-height: 70vh;
      cursor: pointer;
    }
    & > * {
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
`;
