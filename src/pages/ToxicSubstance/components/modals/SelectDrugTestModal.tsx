import SelectDrugTest from "../SelectDrug/SelectDrugTest";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const SelectDrugTestModal = ({
  open,
  handleClose,
  selectedPackage,
}: {
  open: boolean;
  handleClose: () => void;
  selectedPackage: any;
}) => {
  return (
    <CustomModal headerClassName="!px-[34px] !py-[21px]" title="Types of Drug Tests" bodyClass="!pt-[38px] !px-[17px]" width="800px" open={open} handleClose={handleClose}>
      <SelectDrugTest packageData={selectedPackage} />
    </CustomModal>
  );
};

export default SelectDrugTestModal;
