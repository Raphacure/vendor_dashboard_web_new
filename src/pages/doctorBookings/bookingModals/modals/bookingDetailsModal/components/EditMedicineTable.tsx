import React from "react";
import { Button as AntButton, Input, Table, Tooltip } from "antd";
import { FaPlus, FaMinus, FaTrash, FaUndo, FaTimes } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { AdminEPrescriptionStyled } from "../tabs/AdminEPrescription/AdminEPrescription.styled";
import { FiInfo } from "react-icons/fi";

type MedicineItem = {
  key: string;
  name: string;
  count: number;
  price: number;
  type: "branded" | "generic";
  editable: boolean;
  originalData?: any;
};

interface EditMedicineTableProps {
  medicines: MedicineItem[];
  modifiedMedicines: MedicineItem[];
  onIncrease: (record: MedicineItem) => void;
  onDecrease: (record: MedicineItem) => void;
  onDelete: (record: MedicineItem) => void;
  onCountChange: (key: string, value: number) => void;
  onReset: (key: string) => void;
  onSave: () => void;
  onCancel: () => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  totalPrice: number;
}

const EditMedicineTable: React.FC<EditMedicineTableProps> = ({
  medicines,
  modifiedMedicines,
  onIncrease,
  onDecrease,
  onDelete,
  onCountChange,
  onReset,
  onSave,
  onCancel,
  modalVisible,
  setModalVisible,
  totalPrice,
}) => {
  console.log("medicines : ", medicines);
  console.log("modifiedMedicines : ", modifiedMedicines);
  const editableMedColumns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Medicine Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: MedicineItem) => (
        <div>
          {text}
          {record.type === "generic" && (
            <span className="text-muted ml-2">(Generic)</span>
          )}
        </div>
      ),
    },
    {
      title: "Quantity Prescribed",
      dataIndex: "originalCount",
      key: "originalCount",
      render: (_: any, record: MedicineItem) => (
        <div style={{ textAlign: "center" }}>
          {record.originalData ? record.originalData.count : record.count}
        </div>
      ),
    },
    {
      title: "Confirmed Quantity",
      dataIndex: "count",
      key: "count",
      render: (count: number, record: MedicineItem) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <AntButton
            type="text"
            icon={<FaMinus />}
            onClick={() => onDecrease(record)}
            style={{ border: "1px solid #d9d9d9", borderRadius: "4px" }}
          />
          <Input
            type="number"
            value={count}
            min={1}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value > 0) {
                onCountChange(record.key, value);
              }
            }}
            style={{ width: "60px", margin: "0 8px", textAlign: "center" }}
          />
          <AntButton
            type="text"
            icon={<FaPlus />}
            onClick={() => onIncrease(record)}
            style={{ border: "1px solid #d9d9d9", borderRadius: "4px" }}
          />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "right" as const,
      render: (price: number, record: MedicineItem) => {
        const isLowestPrice =
          medicines
            .filter((m) => m.name === record.name)
            .sort((a, b) => a.price - b.price)[0]?.key === record.key;
        return (
          <div style={{ fontWeight: isLowestPrice ? 500 : "normal" }}>
            ₹{(price * (record.count || 1)).toFixed(0)}
          </div>
        );
      },
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: (_: any, record: MedicineItem) => (
        <AntButton
          type="text"
          danger
          icon={<FaTrash />}
          onClick={() => onDelete(record)}
        />
      ),
    },
  ];

  const modifiedMedColumns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Medicine Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity Prescribed",
      key: "originalCount",
      render: (_: any, record: MedicineItem) => (
        <div style={{ textAlign: "center" }}>
          {record.originalData?.count || record.count}
        </div>
      ),
    },
    // {
    //   title: 'Modified Count',
    //   key: 'count',
    //   render: (_: any, record: MedicineItem) => (
    //     <div style={{ textAlign: 'center' }}>
    //       {record.count === 0 ? 'Deleted' : record.count}
    //     </div>
    //   ),
    // },
    {
      title: "Price",
      key: "price",
      render: (_: any, record: MedicineItem) => (
        <div style={{ textAlign: "right" }}>
          ₹{(record.price * (record.count || 1)).toFixed(0)}
        </div>
      ),
    },
    // {
    //   title: 'Change',
    //   key: 'change',
    //   render: (_: any, record: MedicineItem) => {
    //     const originalCount = record.originalData?.count || 1;
    //     const change = record.count - originalCount;
    //     return (
    //       <span style={{ color: change > 0 ? 'green' : 'red' }}>
    //         {change > 0 ? '+' : ''}{change}
    //       </span>
    //     );
    //   },
    // },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: MedicineItem) => (
        <Tooltip title="Reset to original">
          <AntButton
            type="text"
            // icon={<FaUndo />}
            className="editResetBtn"
            onClick={() => onReset(record.key)}
          >
            Add
          </AntButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <div>
      <Modal
        show={modalVisible}
        onHide={onCancel}
        dialogClassName="modal-lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Medicines</Modal.Title>
          <Button variant="link" className="close" onClick={onCancel}>
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <AdminEPrescriptionStyled>
            <div className="">
              <div className="table-name">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png"
                  alt=""
                />
                <p>Cost Savings (Generic & Branded)</p>
              </div>
              <Table
                dataSource={medicines}
                columns={editableMedColumns}
                pagination={false}
                size="small"
                className="raphacureAssuredPrice order-section"
              />
              {modifiedMedicines.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <div className="table-name">
                    <FiInfo />
                    <p>Edited from original prescription</p>
                  </div>
                  <Table
                    dataSource={modifiedMedicines}
                    columns={modifiedMedColumns}
                    pagination={false}
                    size="small"
                    className="raphacureAssuredPrice order-section"
                  />
                </div>
              )}
              <div className="order-summary mt-4">
                <div className="summary">
                  <div className="summary-row">
                    <span className="summary-label mr-1">Total Medicines:</span>
                    <span className="summary-value">{medicines.length}</span>
                  </div>
                  <div className="summary-row summary-bold">
                    <span className="summary-label mr-1">MRP: </span>
                    <span className="summary-value">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AdminEPrescriptionStyled>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditMedicineTable;
