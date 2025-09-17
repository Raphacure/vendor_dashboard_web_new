import React from "react";
import { Button as AntButton, Table, Tooltip } from "antd";
import { FaTrash, FaUndo, FaTimes } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { AdminEPrescriptionStyled } from "../tabs/AdminEPrescription/AdminEPrescription.styled";
import { FiInfo } from "react-icons/fi";

export interface LabTestItem {
  key: number;
  name: string;
  type: string;
  id: string;
  price: number;
  note: string;
  originalData?: LabTestItem;
  count?: number;
}

interface EditLabtestTableProps {
  labTests: LabTestItem[];
  modifiedTests: LabTestItem[];
  onDelete: (record: LabTestItem) => void;
  onReset: (key: number) => void;
  onSave: () => void;
  onCancel: () => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  totalPrice: number;
}

const EditLabtestTable: React.FC<EditLabtestTableProps> = ({
  labTests,
  modifiedTests,
  onDelete,
  onReset,
  onSave,
  onCancel,
  modalVisible,
  setModalVisible,
  totalPrice,
}) => {
  const testColumns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Test Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "right" as const,
      render: (price: number) => (
        <div>₹{price.toFixed(0)}</div>
      ),
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: (_: any, record: LabTestItem) => (
        <AntButton
          type="text"
          danger
          icon={<FaTrash />}
          onClick={() => onDelete(record)}
        />
      ),
    },
  ];

  const modifiedTestColumns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Test Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      key: "price",
      render: (_: any, record: LabTestItem) => (
        <div style={{ textAlign: "right" }}>
          ₹{record.price.toFixed(0)}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: LabTestItem) => (
        <Tooltip title="Reset to original">
          <AntButton
            type="text"
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
          <Modal.Title>Edit Lab Tests</Modal.Title>
          <Button variant="link" className="close" onClick={onCancel}>
            <FaTimes />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <AdminEPrescriptionStyled>
            <div className="">
              <Table
                dataSource={labTests}
                columns={testColumns}
                pagination={false}
                size="small"
                className="raphacureAssuredPrice order-section"
              />
              {modifiedTests.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <div className="table-name">
                    <FiInfo />
                    <p>Edited from original prescription</p>
                  </div>
                  <Table
                    dataSource={modifiedTests}
                    columns={modifiedTestColumns}
                    pagination={false}
                    size="small"
                    className="raphacureAssuredPrice order-section"
                  />
                </div>
              )}
              <div className="order-summary mt-4">
                <div className="summary">
                  <div className="summary-row">
                    <span className="summary-label mr-1">Total Tests:</span>
                    <span className="summary-value">{labTests.length}</span>
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

export default EditLabtestTable;
