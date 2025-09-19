import { LogoutStyled } from "./Logout.styled";
import { Modal } from "antd"; // Changed from 'react-bootstrap'
import { MdCancel } from "react-icons/md";
import SecoundaryButton from "../custom/button/SecoundaryButton";
import PrimaryButton from "../custom/button/PrimaryButton";

const Logout = ({ onHide, handleLogout }: any) => {
  return (
    // Replaced react-bootstrap Modal with Ant Design Modal
    // - `show` becomes `open`
    // - `onHide` becomes `onCancel`
    // - `footer={null}` and `closable={false}` are added to hide the default
    //   Ant Design footer and close button, matching your original custom layout.
    <Modal open={true} onCancel={onHide} footer={null} closable={false}>
      {/* Modal.Body is not needed, content goes directly inside */}
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
          {/* Replaced react-bootstrap Button with Ant Design Button */}
          <SecoundaryButton
            onClick={handleLogout}
          >
            Confirm
          </SecoundaryButton>
          <PrimaryButton onClick={onHide} >
            Cancel
          </PrimaryButton>
        </div>
      </LogoutStyled>
    </Modal>
  );
};

export default Logout;