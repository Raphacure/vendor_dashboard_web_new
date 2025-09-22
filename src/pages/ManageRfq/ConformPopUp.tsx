import { IndexsStyled } from "./Index.styled";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

const ConformPopUp = (props: any) => {
  const { conformImg, title, subTitle, path } = props;
  const navigate = useNavigate();

  return (
    <div>
      <Modal {...props} backdrop="static" keyboard={false} centered>
        <IndexsStyled>
          <div className="conform-msg-main-div">
            <img src={conformImg} alt="" />
            <p className="conform-msg-title">{title}</p>
            <p className="conform-msg-sub-title">{subTitle}</p>
            <button
              className="btn conform-msg-btn mb-4"
              onClick={() => navigate(path)}
            >
              OK
            </button>
          </div>
        </IndexsStyled>
      </Modal>
    </div>
  );
};

export default ConformPopUp;
