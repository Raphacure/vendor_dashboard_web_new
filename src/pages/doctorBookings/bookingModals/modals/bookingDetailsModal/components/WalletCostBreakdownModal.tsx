import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AdminEPrescriptionStyled } from "../tabs/AdminEPrescription/AdminEPrescription.styled";
import { FaTimes } from "react-icons/fa";

// Define interfaces for props (you might have these globally)
interface Wallet {
  id: number;
  name: string;
  type: string; // e.g., 'pharmacy', 'diagnostic_tests', 'ctmri_tests'
  wallet_type: string; // e.g., 'wallet_amount', 'unlimited'
  total_amount?: number | null;
  discount_percentage?: number | null;
  // Add other relevant fields from your walletInfo structure
}

interface Medicine {
  name: string;
  price: number;
  // Add other relevant fields
}

interface LabTest {
  name: string;
  price: number;
  category?: string; // To distinguish 'diagnostic' vs 'radiology'/'ctmri'
  // Add other relevant fields
}

interface Package {
  name?: string; // Added for completeness, might not be used in current logic
  tests?: LabTest[];
  actual_cost?: number;
  discounted_price?: number;
  // Add other relevant fields
}

interface WalletCostBreakdownModalProps {
  show: boolean;
  handleClose: () => void;
  walletInfo: Wallet[];
  docBrandedMedicines?: Medicine[];
  docGenericMedicines?: Medicine[];
  docLabTests?: LabTest[];
  raphaSimilarMedicines?: Medicine[];
  raphaPackage?: Package;
  docOverallPendingAmount: string | number;
  raphaOverallPendingAmount: string | number;
}

const WalletCostBreakdownModal: React.FC<WalletCostBreakdownModalProps> = ({
  show,
  handleClose,
  walletInfo,
  docBrandedMedicines = [],
  docGenericMedicines = [],
  docLabTests = [],
  raphaSimilarMedicines = [],
  raphaPackage,
  docOverallPendingAmount,
  raphaOverallPendingAmount,
}) => {
  const getWalletBalance = (
    type: "pharmacy" | "diagnostic_tests" | "ctmri_tests"
  ): number => {
    const wallet = walletInfo?.find(
      (w) => w.type === type && w.wallet_type === "wallet_amount"
    );
    return wallet?.total_amount || 0;
  };

  const calculateItemSum = (items: Medicine[] | LabTest[] = []): number => {
    return items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  };

  const filterTestsByCategory = (
    tests: LabTest[] = [],
    categories: string[]
  ): LabTest[] => {
    return tests.filter((test) =>
      categories.some(
        (cat) =>
          test.category?.toLowerCase().includes(cat) ||
          test.name?.toLowerCase().includes(cat)
      )
    );
  };

  // Doctor Prescribed Costs
  const docMedicineCost =
    calculateItemSum(docBrandedMedicines) +
    calculateItemSum(docGenericMedicines);
  const docDiagnosticsCost = calculateItemSum(docLabTests);
  const docRadiologyCost = 0;

  // Rapha Assure Costs
  const raphaMedicineCost = calculateItemSum(raphaSimilarMedicines);
  const raphaPackageTests = raphaPackage?.tests || [];
  const raphaDiagnosticsCost = raphaPackage?.discounted_price || 0;
  const raphaRadiologyCost = 0;

  const tableData = [
    {
      category: "Prescribed Medicine",
      walletBalance: getWalletBalance("pharmacy"),
      docPrescribed: docMedicineCost,
      raphaAssure: raphaMedicineCost,
    },
    {
      category: "Prescribed Diagnostics",
      walletBalance: getWalletBalance("diagnostic_tests"),
      docPrescribed: docDiagnosticsCost,
      raphaAssure: raphaDiagnosticsCost,
    },
    {
      category: "Prescribed Radiology",
      walletBalance: getWalletBalance("ctmri_tests"),
      docPrescribed: docRadiologyCost,
      raphaAssure: raphaRadiologyCost,
    },
  ];

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      dialogClassName="wallet-cost-breakdown-modal-dialog"
    >
      <Modal.Header>
        <Modal.Title>Wallet Cost Break Down</Modal.Title>
        <Button variant="link" className="close" onClick={handleClose}>
          <FaTimes />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <AdminEPrescriptionStyled>
          <Table
            bordered
            hover
            responsive
            className="wallet-cost-breakdown-table"
            size="lg"
          >
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Wallet Balance</th>
                <th className="text-center header-doc">01 Doctor Prescribed</th>
                <th className="text-center header-rapha">
                  02 Raphacure Assure
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.category}</td>
                  <td className="text-center">
                    ₹ {row.walletBalance.toFixed(2)}
                  </td>
                  <td className="cell-doc text-center">
                    ₹ {row.docPrescribed.toFixed(2)}
                  </td>
                  <td className="cell-rapha text-center">
                    ₹ {row.raphaAssure.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="additional-amount-row">
                <td colSpan={2} className="text-right font-weight-bold">
                  Additional Amount:
                </td>
                <td className="cell-doc text-center font-weight-bold">
                  ₹ {Number(docOverallPendingAmount).toFixed(2)}
                </td>
                <td className="cell-rapha text-center font-weight-bold">
                  ₹ {Number(raphaOverallPendingAmount).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </Table>
        </AdminEPrescriptionStyled>
      </Modal.Body>
    </Modal>
  );
};

export default WalletCostBreakdownModal;
