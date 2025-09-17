import React from "react";

interface PrescriptionCardProps {
  doctorName?: string;
  dateTime?: string;
  type?: string;
  medicineCount?: number;
  diagnosticsCount?: number;
  mrp?: number;
  discountedPrice?: number;
  walletAmount?: number;
  pendingAmount?: number;
  prescriptionNumber?: string;
  onViewDetails?: VoidFunction;
  onPlaceOrder?: VoidFunction;
  walletInfo?: any;
}

const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  doctorName = "",
  dateTime = "",
  type = "",
  medicineCount = 0,
  diagnosticsCount = 0,
  mrp = 0.0,
  discountedPrice = 0.0,
  walletAmount = 0.0,
  pendingAmount = 0.0,
  prescriptionNumber = "",
  onViewDetails,
  onPlaceOrder,
  walletInfo,
}) => {
  return (
    <div className="prescription-card">
      <div
        className={`prescription-header ${
          type === "doctorPrescribedRx" ? "headerBlue" : "headerYellow"
        }`}
      >
        <div className="prescription-title">
          {type === "doctorPrescribedRx"
            ? "Doctor Prescribed Rx"
            : "Rapha Assured Price"}
        </div>
        <div className="prescription-number">{prescriptionNumber}</div>
      </div>

      <div className="prescription-doctor-name">{doctorName}</div>

      <div className="prescription-datetime">{dateTime}</div>

      <div className="prescription-details">
        <div className="prescription-count">
          {medicineCount} Medicines + {diagnosticsCount} Diagnostics
        </div>
        <div className="prescription-price">
          {type === "raphaAssuredPrice" && (
            <span className="mrp">MRP ₹{mrp?.toFixed(2)}</span>
          )}
          <span className="discounted-price">
            ₹{discountedPrice?.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="prescription-wallet">
        <span>Wallet Amount Used:</span>
        <span className="wallet-amount">
          ₹ {walletAmount}{" "}
          <button onClick={onViewDetails} className="view-details-btn">
            View Details
          </button>
        </span>
      </div>

      <div className="prescription-pending">
        <span className="pending-label">Pending Amount:</span>
        <span className="pending-amount">₹ {pendingAmount}</span>
        <button onClick={onPlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PrescriptionCard;
