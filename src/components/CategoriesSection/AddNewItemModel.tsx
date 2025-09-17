import { Modal } from "react-bootstrap";
import AddNewCategory from "./Components/AddNewCategory";
import AddNewSubCategory from "./Components/AddNewSubCategory";

const AddNewItemModel = (props: any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add-user-model-popup"
    >
      <Modal.Body
        className={`modalBodyDefault alert-model-popup-sec dynamic_class_${props?.dynamicClassName}`}
      >
        {props?.modelType === "subcategory" ? (
          <AddNewSubCategory {...props} isEdit={true} />
        ) : (
          <AddNewCategory {...props} isEdit={true} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddNewItemModel;
