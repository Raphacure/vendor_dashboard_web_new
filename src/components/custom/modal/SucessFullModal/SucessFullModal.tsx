import React, { useEffect, useState } from "react";
import { SuccessModalContainer } from "./SucessFullModal.styled";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CustomModal from "../CustomModal/CustomModal";

interface SuccessFullModalProps {
  title?: string;
  message?: string;
  whatsNext?: React.ReactNode[];
  handleBack?: () => void;
  autoClose?: boolean;
  tickType?: "static" | "animated";
}

const SuccessFullModalComponent: React.FC<SuccessFullModalProps> = ({
  title,
  message,
  whatsNext,
  handleBack,
  autoClose = true,
  tickType = "animated",
}) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (autoClose) {
      let timer: NodeJS.Timeout;
      if (countdown > 0) {
        timer = setTimeout(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
      } else {
        handleBack?.();
      }
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <CustomModal.Body>
      <SuccessModalContainer className="w-full max-w-[700px] p-8 mx-auto text-center">
        {/* Check Icon with animation states or static */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {tickType === "animated" ? (
            <>
              <div className="w-20 h-20 flex items-center justify-center">
                <div className="svg-container">
                  <svg
                    className="ft-green-tick"
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    width="80"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <circle
                      className="circle"
                      fill="#5bb543"
                      cx="24"
                      cy="24"
                      r="22"
                    />
                    <path
                      className="tick"
                      fill="none"
                      stroke="#FFF"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M14 27l5.917 4.917L34 17"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            /* Static checkmark */
            <div className="w-20 h-20 flex items-center justify-center">
              <svg
                xmlns=""
                width="108"
                height="107"
                viewBox="0 0 108 107"
                fill="none"
              >
                <path
                  d="M102.009 53.2699C102.009 48.6585 108.268 43.2877 107.132 39.0348C105.955 34.6344 97.816 33.1166 95.5871 29.2644C93.3261 25.3563 96.0574 17.5556 92.8857 14.3839C89.714 11.2122 81.9132 13.9435 78.006 11.6824C74.1538 9.45355 72.636 1.31407 68.2355 0.138065C63.9827 -0.99894 58.6119 5.26033 54.0004 5.26033C49.3889 5.26033 44.0182 -0.998176 39.7653 0.138065C35.3648 1.31407 33.847 9.45356 29.9948 11.6832C26.0868 13.9442 18.286 11.213 15.1144 14.3847C11.9427 17.5563 14.6739 25.3571 12.4129 29.2651C10.184 33.1173 2.04454 34.6351 0.868534 39.0356C-0.268472 43.2885 5.99079 48.6592 5.99079 53.2707C5.99079 57.8822 -0.267707 63.2529 0.868534 67.5058C2.04454 71.9063 10.184 73.4241 12.4129 77.2763C14.6739 81.1843 11.9427 88.9851 15.1144 92.1567C18.286 95.3284 26.0868 92.5972 29.9941 94.8574C33.8463 97.0863 35.3641 105.226 39.7645 106.402C44.0174 107.539 49.3881 101.28 53.9996 101.28C58.6111 101.28 63.9819 107.538 68.2348 106.402C72.6352 105.226 74.153 97.0863 78.0052 94.8567C81.9132 92.5956 89.714 95.3269 92.8857 92.1552C96.0574 88.9835 93.3261 81.1828 95.5871 77.2747C97.816 73.4225 105.955 71.9047 107.132 67.5043C108.269 63.2522 102.009 57.8807 102.009 53.2699Z"
                  fill="#92E3A9"
                />
                <path
                  d="M53.334 72.5112L32.6233 50.5449C31.6308 49.4928 31.6797 47.8351 32.7318 46.8433C33.7847 45.8516 35.4424 45.8998 36.4334 46.9519L52.7001 64.205L73.2718 34.376C74.093 33.1847 75.7239 32.8865 76.9145 33.707C78.105 34.5282 78.4047 36.1592 77.5835 37.3497L53.334 72.5112Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <p className="text-[24px] font-semibold text-[#101010] !mb-[27px]">{title}</p>

        {/* Message */}
        <p className="text-[20px] text-[#252B61] font-medium !mb-[43.18px] !px-[47.05px]">{message}</p>

        {/* What's Next Section */}
        <div className="bg-green-50 !p-3 rounded-b-lg text-left">
          <p className="text-[24px] font-bold text-black mb-4 border-b border-black font-[Inter] border-gray-200 pb-2">
            What's Next?
          </p>
          <ul className="space-y-4 !pl-1 m-0">
            {whatsNext?.map((item: any, index: number) => (
              <li key={index} className="flex items-start">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {handleBack && (
          <div className="mt-2 flex justify-end items-center gap-2">
            {autoClose && (
              <p className="m-0">going back in {countdown} seconds</p>
            )}
            <PrimaryButton onClick={() => handleBack?.()}>
              Go Back Now
            </PrimaryButton>
          </div>
        )}
      </SuccessModalContainer>
    </CustomModal.Body>
  );
};

const SuccessFullModal = ({
  open,
  handleClose,
  data,
  handleBack,
  autoClose = true,
  tickType = "animated",
}: {
  open: boolean;
  handleClose: () => void;
  data: SuccessFullModalProps;
  handleBack?: () => void;
  autoClose?: boolean;
  tickType?: "static" | "animated";
}) => {
  return (
    <CustomModal
      headerClassName="shadow-none"
      open={open}
      handleClose={() => {
        handleBack?.();
        handleClose();
      }}
    >
      <SuccessFullModalComponent
        handleBack={handleBack}
        {...data}
        autoClose={autoClose}
        tickType={tickType}
      />
    </CustomModal>
  );
};

export default SuccessFullModal;
