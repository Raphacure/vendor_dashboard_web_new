import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import "./conformationmodel.css";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import styled from "styled-components";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
// import {ConfirmationModal} from "./ConfirmationModal.styled"

type prop = {
  variant: "DANGER" | "NORMAL";
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirmClick: () => void;
  onHide: () => void;
};

const ConfirmationModal: React.FC<ModalProps & prop> = ({
  variant,
  description,
  confirmLabel,
  cancelLabel,
  onConfirmClick,
  onHide = () => {},
  ...rest
}) => {
  return (
    <Modal {...rest} className="" size="sm" centered>
      <ModelStyled className="conformation-model">
        <Modal.Body>
          <p
            className={`text-[#888888]${
              variant === "DANGER" ? " text-danger" : ""
            }`}
          >
            {description}
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <ModelStyled className="d-flex justify-content-end gap-3">
            {!!cancelLabel && (
              <SecoundaryButton className="btn" onClick={onHide}>
                {cancelLabel}
              </SecoundaryButton>
            )}
            {!!confirmLabel && (
              <PrimaryButton className="btn" onClick={onConfirmClick}>
                {confirmLabel}
              </PrimaryButton>
            )}
          </ModelStyled>
        </Modal.Footer>
      </ModelStyled>
    </Modal>
  );
};

export default ConfirmationModal;

const ModelStyled = styled.div`
  .btn {
    border-width: 1px;
  }
  p {
    font-size: 20px;
  }
`;
