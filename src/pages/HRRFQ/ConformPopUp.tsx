import React from "react";
import { Modal } from "react-bootstrap";
import { ConformPopUpStyled } from "./ConformPopUp.styled";
import { useNavigate } from "react-router";

const ConformPopUp = (props: any) => {
  const navigate = useNavigate();
  const { conformImg, title, subTitle, path } = props;
  return (
    <div>
      <Modal {...props} backdrop="static" keyboard={false}>
        <ConformPopUpStyled>
          <img src={conformImg} alt="" />
          <p className="conform-msg-title">{title}</p>
          <p className="conform-msg-sub-title">{subTitle}</p>
          <button
            className="btn conform-msg-btn"
            onClick={() => navigate(path)}
          >
            OK
          </button>
        </ConformPopUpStyled>
      </Modal>
    </div>
  );
};

export default ConformPopUp;
