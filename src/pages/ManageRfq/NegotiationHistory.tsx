import React, { useState } from "react";
import { Table } from "antd";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { negotiateRfqStatus } from "../../redux/slices/rfq/rfqService";

interface NegotiationHistoryProps {
  data: any[];
  id: number;
  onSuccess: () => void;
  showInput: boolean;
}

const NegotiationHistory: React.FC<NegotiationHistoryProps> = ({
  data,
  id,
  onSuccess,
  showInput,
}) => {
  const [amount, setAmount] = useState<any>();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (!amount) return;
    const res: any = await dispatch(
      negotiateRfqStatus({
        id: id,
        data: {
          total_amount: amount,
        },
      })
    );

    if (res?.payload?.success) {
      onSuccess();
      setAmount("");
      toast.success("Successfully saved!.");
    } else {
      toast.error("Failed to save!.");
    }
  };

  const columns = [
    {
      title: "Negotiated Amount",
      width: 100,
      dataIndex: "negotiated_amount",
      key: "0",
    },
    {
      title: "Negotiated By",
      width: 100,
      dataIndex: "negotiatedBy",
      key: "1",
      render: (item: any) => {
        return (
          <>
            {item?.first_name ?? ""} {item?.last_name ?? ""}
          </>
        );
      },
    },
    {
      title: "Negotiated At",
      width: 100,
      dataIndex: "negotiated_at",
      key: "2",
      render: (item: any) => {
        return <>{item?.replace("T", " ")?.slice(0, 18)}</>;
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        rowKey="id"
        dataSource={data ?? []}
        pagination={false}
        bordered
        scroll={{ x: "max-content" }}
      />

      {showInput && (
        <div className="mt-3">
          <span className="mb-1">Negotiating Amount</span>
          <div className="d-flex align-items-center">
            <Form.Control
              className="mr-2"
              placeholder="Enter negotiating amount"
              onChange={(e) => {
                setAmount(Number(e?.target?.value));
              }}
              value={amount}
              type="number"
            />
            <Button
              className=""
              onClick={handleSubmit}
              disabled={!amount}
              variant="primary"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NegotiationHistory;
