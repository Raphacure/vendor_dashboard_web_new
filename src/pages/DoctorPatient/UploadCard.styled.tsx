import styled from "styled-components";

export const UploadCardStyled = styled.div`
  /* max-width: 450px; */
  min-width: 280px;


  .upload-section {
    width: 100%;
    background: #F2F2F6;
    padding: 27px 31px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .upload-box {
    border: 1px dashed #7291f4;
    background-color: #fff;
    padding: 30px 60px;
    text-align: center;
    margin-bottom: 15px;
    border-radius: 10px;
    cursor: pointer;
  }

  .upload-logo {
    width: 63.7px;
    height: 53.7px;
    margin-bottom: 10px;
  }

  .dandd {
    font-size: 18px;
    letter-spacing: 1.5px;
    text-align: center;
    color: #252b61;
    margin-bottom: 9px;
  }

  .choose-file {
    color: #252b61;

    text-decoration: underline;
    font-weight: bold;
  }

  .file-format {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-family: inter;
    color: #888;
    margin-bottom: 0px;
  }
  .upload-save-button {
    display: flex;
    width: 100%;
    justify-content: end;
    
    .save-button.ant-btn {
      padding: 10px 30px;
      box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
      border-radius: 69px;
      background-color: #252b61;
      font-size: 18px;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-family: Inter;
      color: #fff;
      border: none;
      height: auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      
      &:hover:not(:disabled) {
        background-color: #1a2050 !important;
      }

      &:disabled, &.ant-btn-loading {
        background-color: #9095b8;
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    .name-type-row {
      width: 100%;
      margin: 0 !important;
    }

    .custom-input {
      height: 42px;
      border-radius: 25px;
      padding: 0 20px;
      font-size: 16px;
      font-family: Inter;
      
      &:focus, &:hover {
        border-color: #252b61;
        box-shadow: 0 0 0 2px rgba(37, 43, 97, 0.1);
      }

      &::placeholder {
        color: #888;
      }
    }
    
    .report-type-select {
      width: 100%;
      
      .ant-select-selector {
        height: 42px !important;
        padding: 0 20px !important;
        border-radius: 25px !important;
        display: flex;
        align-items: center;
        border: 1px solid #d1d1d1 !important;
        background-color: #fff !important;
      }
      
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        font-size: 16px;
        color: #333;
        font-family: Inter;
        display: flex;
        align-items: center;
      }

      .ant-select-selection-placeholder {
        color: #888;
      }
      
      &.ant-select-focused .ant-select-selector {
        box-shadow: 0 0 0 2px rgba(37, 43, 97, 0.1) !important;
      }

      .ant-select-arrow {
        color: #252b61;
      }
    }
    
    /* Ensure dropdown is wide enough for options */
    .ant-select-dropdown {
      min-width: 200px !important;
    }
    
    /* Make dropdown options show full text */
    .ant-select-item {
      white-space: normal !important;
      word-break: break-word !important;
      padding: 8px 12px;
      font-size: 16px;
    }

    .ant-select-item-option-selected {
      background-color: rgba(37, 43, 97, 0.1) !important;
      color: #252b61 !important;
    }
    
    .ant-input.description-field {
      padding: 12px 20px;
      background: #ffffff;
      width: 100%;
      margin: 8px 0;
      border-radius: 12px;
      border: 1px solid #d1d1d1;
      font-size: 16px;
      letter-spacing: 0.5px;
      font-family: Inter;
      color: #333;
      resize: vertical;
      outline: none;

      &:focus, &:hover {
        border-color: #252b61;
        box-shadow: 0 0 0 2px rgba(37, 43, 97, 0.1);
      }

      &::placeholder {
        color: #888;
      }
    }
  }

  .error-message {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 5px;
    font-family: Inter;
    padding-left: 10px;
    text-align: left;
    width: 100%;
    line-height: 1.2;
  }

  .input-container, .select-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .input-container {
    .custom-input {
      margin-bottom: 5px;
    }
  }

  .select-container {
    .report-type-select {
      margin-bottom: 5px;
      
      &.ant-select-status-error .ant-select-selector {
        border-color: #ff4d4f !important;
      }
      
      &.has-error .ant-select-selector {
        border-color: #ff4d4f !important;
      }
    }
  }

  .file-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
