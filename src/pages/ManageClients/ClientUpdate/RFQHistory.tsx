import ManageRfq from "../../ManageRfq/ManageRfq";

const RFQHistory = ({ id }: any) => {
  return (
    <div>
      <ManageRfq clientId={id} sectionName={"client"} />
    </div>
  );
};

export default RFQHistory;
