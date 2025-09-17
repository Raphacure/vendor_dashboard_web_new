import styled from "styled-components";

export const AdminEPrescriptionStyled = styled.div`
  font-family: "Outfit", "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .userInfo {
    display: grid;
    grid-template-columns: 1fr 2fr 1.5fr 3fr;
    grid-gap: 1rem;
    padding: 3rem 1rem;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .order-section {
    padding: 10px;
    border: 1px solid #ccc;
    /* max-height: 300px;
    overflow-y: scroll; */
    border-radius: 15px;
  }

  .prescriptionTable {
    padding: 0px;
  }

  .action-icons {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      color: #666;
      transition: color 0.2s;

      &:hover {
        color: #333;
      }
    }
  }
  p {
    margin-bottom: 0;
    font-weight: 500;
  }
  img {
    border-radius: 50%;
  }
  .font-bold {
    font-weight: 600;
  }
  .bkInfoGrid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    p {
      max-height: 1rem;
    }
  }

  .table-name {
    font-weight: 600;
    font-size: 1.2rem;
    max-height: 40px;
    height: 40px;
    p {
      font-size: 1rem;
    }
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
      border-radius: 0;
      width: 1.5rem;
    }

    .edit-button {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: auto;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #262c62;
      color: #262c62;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #1e2350;
        color: #fff;
        svg {
          color: #fff;
        }
      }

      svg {
        color: #262c62;
      }
    }
  }
  .order-summary {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .summary {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    .summary-row {
      font-weight: 400;
      font-size: 1rem;
    }
    .summary-bold {
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .raphacureAssuredPrice {
    .wrapper {
      background: #a3dac226;
      padding: 1rem;
      border-radius: 10px;
    }
    .ant-table-content {
      table {
        thead {
          tr {
            th.ant-table-cell {
              background: #fcf6db;
            }
          }
        }
      }
    }
  }

  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    background: #e9f2fd;
    padding: 0.5rem;
    border-radius: 10px;
  }

  .tab-btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background-color: #e9f2fd;
    transition: background-color 0.3s ease;
  }

  .tab-btn.active {
    background-color: #fff;
  }
  .ant-switch.ant-switch-checked {
    background-color: #262c62;
  }
  .ant-switch.ant-switch-checked:hover {
    background-color: #262c62;
  }

  .test-details-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    padding: 20px;
    overflow-y: auto;

    &.visible {
      transform: translateX(0);
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;

      button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
    }

    .test-item {
      padding: 10px 0;
      /* border-bottom: 1px solid #f5f5f5; */
    }
  }

  .test-info-icon {
    color: #262c62;
    cursor: pointer;
    margin-left: 5px;

    &:hover {
      opacity: 0.8;
    }
  }

  .text-decoration-line-through {
    text-decoration: line-through;
  }

  .editResetBtn {
    border: 1px solid #262c62;
    color: #262c62;
    padding: 0.5rem 1rem;
    border-radius: 20px;
  }

  .text-underline {
    text-decoration: underline;
  }

  .place-order-btn {
    width: fit-content;
    border: 1px solid #fff;
    padding: 10px 20px;
    border-radius: 25px !important;
    background: #252b61;
    color: #fff;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-left: auto;
    /* margin-top: 0.5rem; */
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .selectedOption {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
  /* Prescription Card Styles */
  .prescription-card {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-family: "Outfit", "Inter", sans-serif;
  }

  .prescription-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 16px; */
    padding: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .headerBlue {
    background-color: #e9f2fd;
  }
  .headerYellow {
    background-color: #fcf6db;
  }

  .prescription-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
  }

  .prescription-number {
    font-size: 28px;
    font-weight: 700;
    color: #000;
  }

  .prescription-doctor-name {
    font-size: 20px;
    font-weight: 600;
    color: #262c62;
    /* margin-bottom: 8px; */
    padding: 5px 20px;
  }

  .prescription-datetime {
    font-size: 18px;
    color: #555;
    /* margin-bottom: 16px; */
    padding: 5px 20px;
  }

  .prescription-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    /* border-bottom: 1px solid #e0e0e0; */
    /* margin-bottom: 16px; */
    padding: 5px 20px;
  }

  .prescription-count {
    font-size: 16px;
    font-weight: 500;
  }

  .prescription-price {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mrp {
    text-decoration: line-through;
    color: #777;
    font-size: 16px;
  }

  .discounted-price {
    font-size: 18px;
    font-weight: 600;
    color: #262c62;
  }

  .prescription-wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 16px; */
    font-size: 16px;
    padding: 5px 20px;
  }

  .wallet-amount {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .view-details-btn {
    background: none;
    border: none;
    color: #262c62;
    text-decoration: underline;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
  }

  .prescription-pending {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 5px 20px;
  }

  .pending-label {
    font-weight: 500;
  }

  .pending-amount {
    font-weight: 600;
    margin-right: auto;
    margin-left: 8px;
  }

  .wallet-cost-breakdown-table th,
  .wallet-cost-breakdown-table td {
    vertical-align: middle;
    padding: 0.5rem;
  }

  .wallet-cost-breakdown-table .header-doc,
  .wallet-cost-breakdown-table .cell-doc {
    background-color: #e7f3fe; /* Light blue background for Doctor Prescribed */
  }

  .wallet-cost-breakdown-table .header-rapha,
  .wallet-cost-breakdown-table .cell-rapha {
    background-color: #fff9e6; /* Light yellow background for Raphacure Assure */
  }

  .wallet-cost-breakdown-table thead th {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .wallet-cost-breakdown-table tbody td {
    font-size: 1rem;
  }

  .wallet-cost-breakdown-table .additional-amount-row td {
    border-top: 2px solid #dee2e6;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 1rem;
  }

  .font-weight-bold {
    font-weight: bold;
  }

  .text-right {
    text-align: right !important; /* Ensure override if needed */
  }

  .text-center {
    text-align: center !important; /* Ensure override if needed */
  }
`;
