import BulkOrders from "@/components/orders/BulkOrders/BulkOrders";
import React from "react";
import { UserDetails } from "../types";

interface BulkEmployeeProps {
  formData: UserDetails["users"];
  setFormData: React.Dispatch<React.SetStateAction<UserDetails>>;
}

const BulkEmployee: React.FC<BulkEmployeeProps> = ({
  formData,
  setFormData,
}) => {

  const handleBulkUpload = (bulkList:any) => {
    setFormData((pre)=>{
      return {
        ...pre,
        users: bulkList,
      }
    })
  }


  return (
    <>
      <BulkOrders
        showTable={false}
        setEmployeeListParent={handleBulkUpload}
        employeeListParent={formData}
      />
    </>
  );
};

export default BulkEmployee;
