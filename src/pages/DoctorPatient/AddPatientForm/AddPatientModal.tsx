import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import AddPatientForm from "./AddPatientForm";

const AddPatientModal = ({
  handleClose,
  open,
  modalData,
  editMode,
  reload,
  patientId,
}: {
  handleClose: () => void;
  editMode?: boolean;
  patientId?: any;
  reload?: () => void;
  modalData: any;
  open: boolean;
}) => {
  return (
    <CustomModal open={open} headerClassName="px-2" title={`${editMode ? "Edit" : "Add"} Employee`} handleClose={handleClose}>
      <AddPatientForm
        closeForm={handleClose}
        defaultData={modalData}
        editMode={editMode}
        patientId={patientId ?? modalData?.id}
        reload={reload}
      />
    </CustomModal>
  );
};

export default AddPatientModal;
