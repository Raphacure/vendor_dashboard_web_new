import styled from "styled-components";

export const PrescriptionDetailsStyled = styled.div`
  .custom-container {
    background-color: #f8f9fa;
    height: 100vh;
    padding: 0;
  }

    .receiptImage {
    max-width: 500px;
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: contain;
  }

  .order-sidebar {
    padding: 20px;
    padding-top: 0;
    background: #ffffff;
    border-radius: 10px;
    width: 100%;
    & > div {
      margin: 2rem auto;
      border-bottom: 1px solid #e2e2e2;
    }
  }
  .rca_names_sec_all td {
    text-transform: capitalize;
    border: 1px solid #e2e2e2;
    padding: 5px 10px;
  }
  .order-section h5 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .separator {
    height: 1px;
    background-color: #dee2e6;
    margin: 20px 0;
  }

  .status-label {
    color: #28a745;
    font-weight: bold;
  }

  .timeline-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    gap: 0.5rem;
  }

  .icon {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .icon.bg-success {
    background-color: #28a745;
  }

  .icon.bg-secondary {
    background-color: #6c757d;
  }

  .file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
  }

  .delete-icon {
    cursor: pointer;
    color: #dc3545;
  }

  .cancel-button button {
    width: 100%;
    padding: 10px;
  }

  .comment-box {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
  }
  .commentsWrapper {
    border: 1px solid #e2e2e2;
    border-radius: 15px;
    & > div:not(:last-child) {
      border-bottom: 1px solid #e2e2e2;
    }
    .comment-meta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .order-section {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 15px;
    max-height: 400px;
    overflow-y: scroll;
  }
  .prescriptionTable {
    padding: 5px;
    .ant-table-content {
      table {
        thead {
          tr {
            th.ant-table-cell {
              background: #e9f2fd;
            }
          }
        }
      }
    }
  }
  .ant-table-cell {
    text-wrap: nowrap;
  }
  .file-name {
    cursor: pointer;
    color: #1890ff;
  }
  .attachmentList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    place-items: center;
    .attachment {
      width: 100%;
    }
  }
  .costContainer {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .card-body {
    overflow: scroll;
    max-height: 300px;
  }

  .doctorInfo {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.5rem;
    padding: 1rem;
    .infoSection {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 1rem;
      p {
        margin-bottom: 0;
      }
    }
  }
  .doctorSearchContainer {
    max-height: 300px;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 1.5rem;
    overflow-y: scroll;
  }
  .ant-tabs-nav-list {
    overflow-x: scroll !important;
  }
`;
