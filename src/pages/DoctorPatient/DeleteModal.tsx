import React from "react";
import { useDispatch } from "react-redux";
import { DeleteModalStyled } from "./DeleteModal.styled";
import { deleteClientUserAPI } from "../../redux/slices/PatientDoctor/PatientService";
import { AppDispatch } from "../../redux/store";
import { toast } from "react-hot-toast";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

interface DeleteProps {
  show: boolean;
  handleDeleteClose: () => void;
  patientId: string;
}

const DeleteModal: React.FC<DeleteProps> = ({
  show,
  handleDeleteClose,
  patientId,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { linkableId } = useClientLinkableId();

  const handleDelete = async () => {
    try {
      const res: any = await dispatch(
        deleteClientUserAPI({ patientId, clientId: linkableId })
      );
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }
      toast.success("Employee deleted successfully!");
      handleDeleteClose(); // Close modal after deletion
    } catch (error) {
      toast.error("Failed to delete patient.");
    }
  };

  return (
    <CustomModal
      title="Delete Employee"
      open={show}
      handleClose={handleDeleteClose}
    >
      <CustomModal.Body>
        <DeleteModalStyled>
          <div className="content-body">
            <p>
              Are you sure you want to delete Employee I.D {patientId}? This action
              cannot be undone.
            </p>
          </div>
          <div className="form-buttons">
            <button type="button" className="deleteButton" onClick={handleDelete}>
              Delete
            </button>
            <button
              type="button"
              className="cancelButton"
              onClick={handleDeleteClose}
            >
              Cancel
            </button>
          </div>
        </DeleteModalStyled>
      </CustomModal.Body>
    </CustomModal>
  );
};

export default DeleteModal;
