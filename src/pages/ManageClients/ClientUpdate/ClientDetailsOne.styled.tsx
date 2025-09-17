import styled from "styled-components";

export const FormSectionStyled = styled.div`
  .details-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .form-group {
    flex: 1 1 calc(33.333% - 20px);
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="file"] {
      padding: 0;
    }
  }

  .save-button,
  .update-button {
    padding: 10px 20px;
    border: none;
    background: #004080;
    color: white;
    width: 100%;
    cursor: pointer;
  }

  .spoc-details {
    width: 100%;
    margin-top: 20px;

    .spoc-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .name-group {
      display: flex;
      flex-direction: row;
    }

    label {
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      padding: 5px;
      // width: 140px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="checkbox"] {
      margin: 0 10px;
    }

    .add-button,
    .remove-button {
      background-color: transparent;
      border: none;

      cursor: pointer;
      /* padding: 5px 10px; */
    }

    .update-button {
      background-color: #198754;
      border: none;
      color: white;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 4px;
    }
  }

  .upload-logo-container {
    display: flex;
    justify-content: flex-end;
    gap: 6.25rem;
    width: 100%;
  }

  .upload-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .upload-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    color: #004080;
    font-weight: bold;
    cursor: pointer;
  }

  .upload-icon {
    margin-right: 8px;
  }

  .image-preview {
    position: relative;
    width: fit-content;
    max-width: 150px;
    min-width: 100px;
    height: 84px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .remove-btn {
    top: 5px;
    bottom: -25px;
    background: unset;
    border: none;
    color: #dabfbf;
    font-size: 21px;
    font-weight: 100;
    cursor: pointer;
    max-height: 30px !important;
  }

  .remove-btn:hover {
    background: #f8f8f8;
    
  }

  .spoc-heading {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .formContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    width: 100%;
  }

  .inputContainer {
    width : 100%;
  }

  .error-container {
    border-color: red 
  }
  .error {
      color: red;
      font-size: 14px;
  }

`