import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import RFQ_Details from "./RFQ_Details";

interface ManageRfqModalsProps {
  activeTypes: string[];
  pop: (type: "rfqDetails" | "negotiateRfqStatus" | "toggleRfqStatus", data?: React.SetStateAction<{ [key: string]: any; }> | undefined) => void;
  selectedRfq: any;
  activeTab: string;
  onRefresh: () => void; // Callback to refresh the RFQ list
}

const ManageRfqModals: React.FC<ManageRfqModalsProps> = ({
  activeTypes,
  pop,
  selectedRfq,
  activeTab,
  onRefresh,
}) => {
  const dispatch = useDispatch();
  const [negotiationAmount, setNegotiationAmount] = useState<number | null>(null);
  const [comments, setComments] = useState("");

  const handleCancel = () => {
    setNegotiationAmount(null);
    setComments("");
  };

  const handleNegotiateRfqStatus = async () => {
    try {
      if (!negotiationAmount) return;
      const res: any = await dispatch(
        negotiateRfqStatus({
          id: selectedRfq?.id,
          data: {
            total_amount: negotiationAmount,
          },
        })
      );
      if (res?.error) {
        toast.error("Failed to negotiate RFQ status.");
        return;
      } else {
        toast.success("Successfully saved!.");
        onRefresh();
        pop("negotiateRfqStatus");
        handleCancel();
      }
    } catch (error) {
      toast.error("An error occurred while negotiating RFQ status.");
    }
  };

  const handleToggleRfqStatus = async () => {
    const { id, status } = selectedRfq;
    if (!id || !status) return;
    const res: any = await dispatch(
      toggleRfqStatus({
        id: id,
        data: {
          status: status,
          comments: comments,
        },
      })
    );

    if (res?.payload?.success) {
      onRefresh();
      toast.success("RFQ status updated successfully!.");
      pop("toggleRfqStatus");
      handleCancel();
    } else {
      toast.error("Failed to update RFQ status!.");
    }
  };
  return (
    <CustomModalRenderer
      activeTypes={activeTypes}
      modals={[
        {
          type: "rfqDetails",
          component: (
            <RFQ_Details
              onHide={() => pop("rfqDetails")}
              id={selectedRfq?.id}
              activeTab={activeTab}
              selectedRfq={selectedRfq}
            />
          ),
        },
        {
          type: "negotiateRfqStatus",
          component: (
            <CustomModal
              handleClose={() => {
                pop("negotiateRfqStatus");
                handleCancel();
              }}
              open={true}
              title="Negotiate RFQ Status"
            >
              <CustomModal.Body>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-base mb-0">
                    <strong>RFQ Name:</strong>{" "}
                    <span className="ml-1 text-gray-700">
                      {selectedRfq?.name}
                    </span>
                  </p>
                  <p className="font-medium text-base mb-0">
                    <strong>RFQ Amount:</strong>{" "}
                    <span className="ml-1 text-gray-700">
                      {selectedRfq?.amount}
                    </span>
                  </p>
                  <label
                    className="font-medium text-base mb-1"
                    htmlFor="negotiationAmount"
                  >
                    <strong>Negotiation Amount:</strong>
                  </label>
                  <input
                    id="negotiationAmount"
                    type="number"
                    min={0}
                    value={negotiationAmount ?? ""}
                    onChange={(e) =>
                      setNegotiationAmount(
                        Math.max(0, Number(e.target.value))
                      )
                    }
                    className="rounded-md border border-gray-500 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter negotiation amount"
                  />
                </div>
              </CustomModal.Body>
              <CustomModal.Footer>
                <div className="flex justify-end gap-2">
                  <SecoundaryButton
                    onClick={() => {
                      pop("negotiateRfqStatus");
                      handleCancel();
                    }}
                  >
                    Cancel
                  </SecoundaryButton>
                  <PrimaryButton
                    onClick={() => {
                      handleNegotiateRfqStatus();
                    }}
                  >
                    Negotiate
                  </PrimaryButton>
                </div>
              </CustomModal.Footer>
            </CustomModal>
          ),
        },
        {
          type: "toggleRfqStatus",
          component: (
            <CustomModal
              handleClose={() => {
                pop("toggleRfqStatus");
                handleCancel();
              }}
              open={true}
              title={`${selectedRfq?.status === "approved" ? "Approve" : "Reject"} RFQ`}
            >
              <CustomModal.Body>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-base mb-0">
                    Are you sure you want to {selectedRfq?.status === "approved" ? "approve" : "reject"} this RFQ?
                  </p>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="min-h-[80px] rounded-md border border-gray-500 p-2 text-[15px] resize-y focus:outline-none"
                    placeholder="Enter your comments here..."
                  />
                </div>
              </CustomModal.Body>
              <CustomModal.Footer>
                <div className="flex justify-end gap-2">
                  <SecoundaryButton
                    onClick={() => {
                      pop("toggleRfqStatus");
                      handleCancel();
                    }}
                  >
                    Cancel
                  </SecoundaryButton>
                  <PrimaryButton
                    onClick={() => {
                      handleToggleRfqStatus();
                    }}
                  >
                    Confirm
                  </PrimaryButton>
                </div>
              </CustomModal.Footer>
            </CustomModal>
          ),
        },
      ]}
    />
  );
};

export default ManageRfqModals;
