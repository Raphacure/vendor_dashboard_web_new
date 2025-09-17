import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import styled from "styled-components";

import FilePreviewCard from "./FilePreviewCard";
import { ChatContext } from "../../../pages/Chat/context/ChatConext";
import { chatTypeDto } from "../../../pages/Chat/type";
import useUploadToS3 from "../useUploadToS3";
import { Paperclip, Mic } from "lucide-react";
import CameraInput from "./CameraInput";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const FileInput = () => {
  const ref = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  const [text, setText] = useState("");

  const { uploadToS3 } = useUploadToS3();
  const { user } = useSelector((Route: any) => Route.auth);

  const handleAttachAttachment = () => {
    if (ref?.current) {
      ref?.current?.click();
    }
  };

  const { sendMessage, currentChat } = useContext(ChatContext);

  const onFileInput = async (e: any) => {
    setShowModal(true);
    setIsLoading(true);
    const files = Array.from(e.target.files);

    const result = await Promise.allSettled(
      files?.map(async (file: any) => {
        return await uploadToS3(file, user?.id);
      })
    );

    let urlsTemp: string[] = [];
    result?.forEach((res) => {
      if (res.status == "fulfilled") {
        urlsTemp.push(res.value);
      }
    });

    setUrls(urlsTemp);
    setIsLoading(false);
  };

  return (
    <>
      <input
        type="file"
        ref={ref}
        onChange={onFileInput}
        multiple={true}
        name=""
        id=""
        hidden
      />{" "}
      {/* <FaCirclePlus
        onClick={handleAttachAttachment}
        className="mr-3 attachmentBtn"
      /> */}
      <button onClick={handleAttachAttachment} className="input-btn">
        <Paperclip className="input-btn-icon" />
      </button>
      <CameraInput />
      <CustomModal
        title="Selected File"
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        <CustomModal.Body>
          <StyledComp className="d-flex w-100 flex-wrap justify-content-center align-items-center">
            {urls?.map((url) => {
              return (
                <AttachmentStyle className="d-flex justify-content-center align-items-center">
                  <FilePreviewCard url={url} showImagePreview={true} />
                </AttachmentStyle>
              );
            })}
          </StyledComp>
          <Form.Control
            className="mt-2"
            placeholder="Enter your message...."
            value={text}
            onChange={(e) => {
              setText(e?.target?.value);
            }}
          />
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end gap-2">
            <PrimaryButton
              onClick={() => {
                if (urls?.length <= 0) return;
                sendMessage({
                  chatType: currentChat?.chatType as chatTypeDto,
                  urls: urls,
                  msg: text,
                  type: "ATTACHMENT",
                });
                setUrls([]);
                setText("");
                setShowModal(false);
              }}
            >
              Send
            </PrimaryButton>
          </div>
        </CustomModal.Footer>
      </CustomModal>
    </>
  );
};

export default FileInput;

const StyledComp = styled.div`
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const AttachmentStyle = styled.div`
  max-height: 150px;
  svg {
    height: 100px;
  }
`;
