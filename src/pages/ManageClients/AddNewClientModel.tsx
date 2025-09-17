import AddNewClinet from "./AddNewClinet";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

interface AddNewClientModelProps {
  onSuccess: () => void;
  handleCancel: () => void;
  selectedUser: Record<string, any> | null; // Allow null for new client
  addUserSuccess?: () => void; // Optional if only used by AddNewClinet
  show: boolean;
  getAllUsersCall?: () => void; // Optional if only used by AddNewClinet
  dynamicClassName?: string;
}

const AddNewClinetModel = (props: AddNewClientModelProps) => {
  const {handleCancel, show, selectedUser} = props;
  const isEditing = !!selectedUser;
  return (
      show && (
        <CustomModal headerClassName="p-1" handleClose={handleCancel} open={show} title={isEditing ? "Edit Client" : "Add New Client"}>
            <AddNewClinet {...props} isEdit={isEditing} />
        </CustomModal>
      )
  );
};

export default AddNewClinetModel;
