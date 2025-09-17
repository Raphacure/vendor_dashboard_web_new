import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { createPortal } from "react-dom";

interface CustomModalProps {
  width?: string;
  title?: string | ReactNode;
  children: ReactNode;
  open: boolean;
  handleClose: () => void;
  modalData?: any;
  bodyClass?: string;
  fixedFooter?: boolean;
  headerClassName?: string;
}

// Create an extended context type that includes bodyId
type ModalContextType = Omit<CustomModalProps, "children">;

const ModalContext = createContext<ModalContextType | null>(null);

// Custom hook to use modal context
const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

const CustomModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-family: inter;

  .modal-rapha {
    width: ${(props: any) => props?.width || "calc(100% - 30%)"};
    @media (max-width: 675px) {
      width: ${(props: any) => props?.width || "calc(100% - 20px)"};
    }
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 10px #d8d8d8;
    position: relative;
    animation: modalOpen 0.3s ease forwards;
    transform: scale(0.8);
    opacity: 0;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    overflow: ${(props: any) => (props?.fixedFooter ? "hidden" : "auto")};

    @media (max-width: 675px) {
      max-height: calc(100% - 160px);
    }

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @keyframes modalOpen {
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .modal-rapha-header {
    position: relative;
    width: 100%;
    box-shadow: 2px 2px 19px 0px #0000001a;
  }
  .header-title {
    margin: 0;
  }
  .close-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .modal-body {
    overflow-y: ${(props: any) => (props?.fixedFooter ? "auto" : "visible")};
    padding: 0.7rem;
  }
  .modal-rapha-footer {
    width: 100%;
  }
` as any;

type BodyProps = {
  children: ReactNode;
};

type FooterProps = {
  children: ReactNode;
  fixed?: boolean;
};

interface CustomModalComponent extends React.FC<CustomModalProps> {
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
}

const CustomModal: CustomModalComponent = ({
  width,
  title,
  children,
  open,
  handleClose,
  modalData,
  bodyClass,
  fixedFooter = true,
  headerClassName = "px-2",
}: CustomModalProps) => {
  const contextValue: ModalContextType = {
    width,
    title,
    open,
    handleClose,
    modalData,
    bodyClass,
    fixedFooter,
  };

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }

    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = originalOverflow || "auto";
      }
    };
  }, [open]);

  return (
    open &&
    createPortal(
      <ModalContext.Provider value={contextValue}>
        <CustomModalStyled fixedFooter={fixedFooter} width={width}>
          <div className="modal-rapha p-0">
            <div
              className={`modal-rapha-header flex items-center rounded-t-[17px] h-[66px] flex-shrink-0 flex-grow-0 flex-basis-[50px] ${headerClassName}`}
            >
              <h5 className="header-title !mr-5">{title ? title : ""}</h5>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="close-icon"
              >
                <MdCancel size={23} />
              </span>
            </div>
            {children}
          </div>
        </CustomModalStyled>
      </ModalContext.Provider>,
      document.body
    )
  );
};

const Body: React.FC<BodyProps> = ({ children }) => {
  const modalContext = useModalContext();

  if (!modalContext) {
    return children;
  }
  const { bodyClass } = modalContext;

  return <div className={`modal-body ${bodyClass || ""}`}>{children}</div>;
};

const Footer: React.FC<FooterProps> = ({ children }) => {
  const modalContext = useModalContext();
  if (!modalContext) {
    return children;
  }
  return (
    <div className="modal-rapha-footer flex-shrink-0 flex-grow-1 flex-basis-[50px] px-2 py-2  border-gray-200">
      {children}
    </div>
  );
};

CustomModal.Body = Body;
CustomModal.Footer = Footer;

export default CustomModal;
