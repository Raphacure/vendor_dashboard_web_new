import styled from "styled-components";

export const AssignTestsStyled = styled.div`
  .assign-tests-container {
    padding: 20px;
  }

  .tests-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }

  .tests-list {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    max-height: 400px;
    overflow-y: auto;
  }

  .test-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
  }

  .test-item:last-child {
    border-bottom: none;
  }

  .assign-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .assign-button {
    background-color: #4682b4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .assign-button:hover {
    background-color: #5a9bd4;
  }

  .selected-tests-header {
    margin-top: 30px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
  }

  .error-message {
    text-align: left;
    font-size: 0.875em;
    color: #dc3545;
    margin-top: 5px;
  }

  .vendor-cards {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 10px;
  }

  .vendor-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  .vendor-card-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  .vendor-card-item:last-child {
    border-bottom: none;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;
  }

  .action-button {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .action-button.assign {
    background-color: #28a745;
    color: #fff;
    border: none;
  }

  .action-button.assign:hover {
    background-color: #218838;
  }

  .action-button.remove {
    background-color: #dc3545;
    color: #fff;
    border: none;
  }

  .action-button.remove:hover {
    background-color: #c82333;
  }

  .header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .info-text {
    font-size: 14px;
    color: #6c757d;
  }
`;
