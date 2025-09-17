import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Camera } from "lucide-react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { ChatContext } from "@/pages/Chat/context/ChatConext";
import { chatTypeDto } from "@/pages/Chat/type";
import useUploadToS3 from "../useUploadToS3";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";

const CameraInput = () => {
  const [showCameraModal, setShowCameraModal] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { user } = useSelector((Route: any) => Route.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [message, setMessage] = useState("");

  const { sendMessage, currentChat } = useContext(ChatContext);

  const { uploadToS3 } = useUploadToS3();
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      setShowCameraModal(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch((err) => {
            console.error("Autoplay error:", err);
          });
        }
      }, 100); // slight delay ensures video element is mounted
    } catch (err) {
      console.error("Camera access error:", err);
      toast.error("Camera access denied or not available.");
    }
  };

  const stopCamera = () => {
    // setShowCameraModal(false);
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
    }
    setCameraStream(null);
  };

  const onClose = () => {
    setShowCameraModal(false);
  };

  const handleTakePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL("image/jpeg");
      console.log(imageDataURL, "imageDataURL");

      setCapturedImage(imageDataURL);

      // Convert data URL to a Blob/File
      const response = await fetch(imageDataURL);
      const blob = await response.blob();
      const file = new File([blob], `photo_${Date.now()}.jpg`, {
        type: "image/jpeg",
      });

      setFile(file);
      // try {
      //     // Upload to S3
      //     const url = await uploadToS3(file, user?.id);
      //     console.log("Uploaded image URL:", url);
      // } catch (err) {
      //     console.error("Upload failed:", err);
      //     message.error("Upload failed.");
      // }

      stopCamera();
    }
  };


  return (
    <IndexStyled>
      <button onClick={startCamera} className="input-btn">
        <Camera className="input-btn-icon" />
      </button>

      <CustomModal
        open={showCameraModal}
        {...(videoRef.current ? { width: `${videoRef.current.clientWidth}px` } : {})}
        title={"Take a Photo"}
        handleClose={() => {
          onClose();
          stopCamera();
        }}
      >
        <CustomModal.Body>
          <div className="flex justify-center">
            {!capturedImage ? (
              <video ref={videoRef} autoPlay style={{ height: "100%" }} />
            ) : (
              <IndexStyled>
                <img
                  src={capturedImage}
                  alt="Captured"
                  style={{ width: "100%" }}
                />
                <input
                  onChange={(e) => {
                    setMessage(e?.target?.value || "");
                  }}
                  type="text"
                  className="inputText"
                  placeholder="Enter message here..."
                />
              </IndexStyled>
            )}
            <canvas ref={canvasRef} hidden />
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end gap-2">
            <SecoundaryButton
              onClick={() => {
                stopCamera();
                onClose();
              }}
            >
              Close
            </SecoundaryButton>
            {!capturedImage ? (
              <PrimaryButton onClick={handleTakePhoto}>Capture</PrimaryButton>
            ) : (
              <PrimaryButton
                onClick={async () => {
                  setIsLoading(true);
                  const blob = await fetch(capturedImage!).then((res) =>
                    res.blob()
                  );
                  const file = new File([blob], `photo-${Date.now()}.jpg`, {
                    type: "image/jpeg",
                  });

                  const url: any = await uploadToS3(file, user?.id);
                  setShowCameraModal(false);
                  setCapturedImage(null);
                  setIsLoading(false);

                  sendMessage({
                    chatType: currentChat?.chatType as chatTypeDto,
                    urls: [url],
                    msg: message || "",
                    type: "ATTACHMENT",
                  });
                }}
              >
                Upload
              </PrimaryButton>
            )}
          </div>
        </CustomModal.Footer>
      </CustomModal>
    </IndexStyled>
  );
};

export default CameraInput;

const IndexStyled = styled.div`
  .inputText {
    margin-top: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #d8d8d8;
    padding: 5px;
    border-radius: 5px;
  }
`;
