import { LogoutStyled } from "./Logout.styled";
import { Button, Modal } from "react-bootstrap";
import { MdCancel } from "react-icons/md";

const Logout = ({ onHide, handleLogout }: any) => {
  return (
    <Modal show={true} onHide={onHide}>
      <Modal.Body>
        <LogoutStyled>
          <div className="cut">
            <MdCancel size={22} onClick={onHide} />
          </div>
          <h2>You are leaving the aplication </h2>
          <div className="logo-main-image">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1738753777160.png"
              alt="Logo"
              className="language-logo-icon"
            />
          </div>
          <div className="logout-button">
            <Button onClick={handleLogout} className="confirm">
              Confirm
            </Button>
            <Button onClick={onHide} className="cancel">
              Cancel
            </Button>
          </div>
        </LogoutStyled>
      </Modal.Body>
    </Modal>
  );
};

export default Logout;
