import styled from "styled-components";

export const AssociatedUsersStyled = styled.div`
  /* padding: 20px; */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 18px;
    }

    .heading {
      display: flex;
      align-items: baseline;
      gap: 5px;

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  .add-button {
    background-color: transparent;
    border: none;
    /* border-radius: 50%;
    color: #04113f; */
    cursor: pointer;
  }

  .user-details {
  }


  .pagination {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      border: 1px solid #ccc;
      background: #f0f0f0;
      cursor: not-allowed;
    }
  }

  Form.label {
    font-size: 18px;
  }

  .wallet-modal {
    height: 35rem;
    z-index: 9;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 1rem 0rem;

    h3 {
      font-size: 22px;
    }

    button {
      border: none;
      background: unset;
    }
  }

  .wallet-details {
    display: flex;
    flex-direction: column;
  }

  .wallet-row {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    margin-bottom: 10px;

    strong {
      font-size: 18px;
      text-wrap: nowrap;
    }

    p {
      font-size: 16px;
    }
  }

  .wallet-row button {
    background: #f0f0f0;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    text-wrap: nowrap;
  }

  .wallet-type {
    display: flex;
    flex-direction: column;
  }

  .wallet-amounts {
    display: flex;
    gap: 30px;

    .wallet-amount,
    .remaining-amount {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const FormModalStyled = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  width: 100%; */
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .user-form-container {
    max-width: 600px;
    margin: 40px auto;
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .form-header h3 {
    margin: 0;
    font-size: 20px;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .user-form {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 10px;
  }

  .form-group:last-child {
    margin-right: 0;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="date"],
  input[type="number"] {
    padding: 8px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  input[type="checkbox"] {
    margin-left: 10px;
    transform: scale(1.2);
    cursor: pointer;
  }

  .radio-group {
    display: flex;
    gap: 10px;
  }

  .radio-group label {
    font-size: 14px;
    font-weight: 400;
  }

  .form-actions {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .save-button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .save-button:hover {
    background: #0056b3;
  }

  .radio-group {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .radio-option {
    display: flex;
    align-items: center;
  }
`;
