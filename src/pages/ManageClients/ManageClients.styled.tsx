import styled from "styled-components";

export const ManageUsersStyled = styled.div`
  .create-new-sec {
    text-align: center;
    margin-top: 30px;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;

    .arrows {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .arrow-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .back-arrow-icon {
      display: flex;
      align-items: center;
      padding: 5px;
      border: 1px solid #252b61;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }

    .page-btn {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 100%;
      background-color: #252b61;
      border: 1px solid #252b61;
      color: white;
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
    }

    span {
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      color: #161616;
      input {
        width: 60px;
        padding: 10px 16px;
        color: #252b61;
        text-align: left;
        border: 1px solid #252b61;
        border-radius: 8px;
        margin: 0 5px;
      }
    }
  }

  .ant-select-selector{
    border-radius:24px;
    border: 1px solid var(--rapha-primary) !important;
  }

  .student-fields-sec-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 30px;
    .delta-signup-md {
      margin-bottom: 5px;
    }
  }
  .student-details-header {
    margin-bottom: 30px;
    span {
      cursor: pointer;
      color: #4682b4;
    }
  }
  .delta-select-column-error .delta-select__control {
    border-color: red;
  }
  .actions-btn-sec {
    display: flex;
    justify-content: end;
  }
  .error_message {
    text-align: left;
    font-size: 0.875em;
    color: #dc3545;
  }
  .profileEdit {
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 8px;
    background: #008080;
    color: #fff;
  }
  .student-fields-sec-content-all {
    display: flex;
    gap: 20px;
    margin-bottom: 0px;
    justify-content: space-between;
  }
  .manage-clicnets-sec-new-ap{
    gap: 20px;
  }
  .submit-filter-btn-sec {
    margin-top: 25px;
  }

  label.form-label {
    margin-bottom: 0.5rem;
    font-size: 16px;
  }

  .actions-btn-sec {
    display: flex;
    gap: 10px;

    .deltape-cancel-button {
      font-size: 14px;
      padding: 12px 15px;
      border-radius: 8px;
      border: none;
      background: #008080;
      color: #fff;
    }

    .deltape-button {
      font-size: 14px;
      padding: 12px 15px;
      border: none;
      border-radius: 8px;
      background: #008080;
      color: #fff;
    }
  }

  .delta-select-column select {
    z-index: 999999999;
  }

  .create-new-institute-sec-content-all {
    position: relative;
    z-index: 5;
  }
`;
