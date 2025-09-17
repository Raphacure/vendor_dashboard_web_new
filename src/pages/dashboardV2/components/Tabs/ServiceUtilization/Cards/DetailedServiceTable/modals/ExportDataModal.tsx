import { ServiceUtilizationStyled } from "../../../ServiceUtilization.styled";
import { Button } from "react-bootstrap";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const ExportData = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <CustomModal.Body>
        <ServiceUtilizationStyled>
          <div className="export-modal-div">
            <p>Export Format</p>
            <div className="flex flex-col gap-2">
              <div className="check-box-div">
                <input type="radio" />
                <label htmlFor="">Excel Spreadsheet (.xlsx)</label>
              </div>
              <div className="check-box-div">
                <input type="radio" />
                <label htmlFor="">CSV File (.csv)</label>
              </div>
              <div className="check-box-div">
                <input type="radio" />
                <label htmlFor="">PDF Report (.pdf)</label>
              </div>
              <div className="check-box-div">
                <input type="checkbox" />
                <label htmlFor="">Include charts and visualizations</label>
              </div>
            </div>
          </div>
        </ServiceUtilizationStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={handleClose}>Cancel</SecoundaryButton>
          <PrimaryButton>Export</PrimaryButton>
        </div>
      </CustomModal.Footer>
    </>
  );
};

const ExportDataModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  return (
    show && (
      <CustomModal title="Export Data" open={show} handleClose={handleClose}>
        <ExportData handleClose={handleClose} />
      </CustomModal>
    )
  );
};

export default ExportDataModal;
