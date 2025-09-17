import styled from "styled-components";

export const OfflineBookingStyled = styled.div`
  .offline-booking-container {
    margin: 10px auto;
  }

  .offline-booking-info {
    font-size: 16px;
    font-weight: bold;
  }

  .booking-text {
    color: #333;
  }

  .action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      border: 1px solid #17a2b8;
      border-radius: 8px;
      background-color: #fff;
      color: #17a2b8;
      padding: 10px 20px;
    }
  }

  .download-button {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    color: #17a2b8;
    border: 1px solid #17a2b8;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .download-button:hover {
    background-color: #007bff;
    color: white;
  }

  .download-button .icon {
    font-size: 14px;
  }

  .upload-button {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    color: #17a2b8;
    border: 1px solid #17a2b8;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
`;
