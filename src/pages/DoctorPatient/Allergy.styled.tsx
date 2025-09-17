import styled from "styled-components";

export const AllergyStyled = styled.div`
  .table-container {
    border: 1px solid #d6cece;
    border-radius: 20px;
    overflow: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  .table-wrapper {
    max-height: 350px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .table-wrapper::-webkit-scrollbar {
    display: none;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: rgba(0, 0, 0, 0.8);
  }

  th {
    border: none;
    font-size: 18px;
    font-weight: 600;
    font-family: Inter;
    color: #252b61;
    text-align: left;
    background-color: #e9f2fd;
  }
  th:first-child {
    border-top-left-radius: 20px;
  }

  th:last-child {
    border-top-right-radius: 20px;
  }

  input,
  select {
    width: 100%;
    height: 41px;
    padding: 11px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  .checkbox {
    width: 100%;
    height: 19px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .input-field-button {
    border-radius: 25px;
    background-color: #252b61;
    border: 1px solid #252b61;
    font-size: 14px;
    color: #fff;
    font-family: Inter;
    padding: 10px;
  }

  .edit-icon {
    cursor: pointer;
    margin: 0 5px;
    font-size: 13px;
    color: #666;
    opacity: 0.7;
  }
  .delete-icon {
    cursor: pointer;
    margin: 0 5px;
    font-size: 16px;
    color: red;
    opacity: 0.7;
  }

  .edit-icon:hover {
    color: blue;
  }

  .save-btn {
    background-color: #0d6efd;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }

  .save-btn:hover {
    background-color: #0a58ca;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .modal-one {
    background: white;

    border-radius: 15px;
    width: 320px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;

    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: #E9F2FD;
      border-radius: 15px 15px 0 0;

      h3 {
        font-size: 14px;
        font-weight: 500;
        font-family: Inter;
        color: #000;
      }

      .cancel {
        cursor: pointer;
      }
    }

    .footing {
      padding: 20px;

      .one {
        font-size: 14px;
        letter-spacing: 0.02em;
        font-weight: 500;
        font-family: Inter;
        color: #000;
        margin-bottom: 10px;
      }

      .two {
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        font-family: Inter;
        color: #252b61;
        text-align: left;
      }

      .three {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        font-family: Inter;
        color: #252b61;
        text-align: left;
      }
    }
  }
  .modal-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 15px;
  }
  .modal-buttons button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
  }

  .modal-buttons button:first-child {
    font-size: 14px;
    padding: 6px 20px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #000;
    background-color: #ccc;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #000;
  }

  .modal-buttons button:last-child {
    border-radius: 20px;
    background-color: #252b61;
    font-size: 14px;
    color: #fff;
    padding: 0px 35px;
    font-family: Inter;
  }
`;
