import React from "react";
import { pdf } from "@react-pdf/renderer";
import InvoiceBody from "./InvoiceBody";
import {
  HidePrintHeadersStyle,
  InvoiceModalStyled,
} from "./InvoiceBody.styled";
import InvoicePdfDocument from "./InvoicePdfDocument";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

interface InvoiceModalProps {
  show: boolean;
  onClose: () => void;
  invoiceData: any;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({
  show,
  onClose,
  invoiceData,
}) => {
  const handleDownload = async () => {
    const blob = await pdf(<InvoicePdfDocument data={invoiceData} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice-${invoiceData?.order_id || "download"}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    const printContent = document.getElementById("invoice-content");
    const originalContents = document.body.innerHTML;

    if (printContent) {
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContents;
      // Re-attach event handlers after printing
      window.location.reload();
    }
  };

  return (
    <CustomModal title={"Invoice Details"} open={show} handleClose={onClose}>
      <CustomModal.Body>
        <InvoiceModalStyled>
          <HidePrintHeadersStyle>
            <div id="invoice-content">
              <InvoiceBody data={invoiceData} />
            </div>
          </HidePrintHeadersStyle>
        </InvoiceModalStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={handleDownload}>Download</SecoundaryButton>
          <PrimaryButton
            className="printBtn btn btn-secondary"
            onClick={handlePrint}
          >
            Print
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default InvoiceModal;
