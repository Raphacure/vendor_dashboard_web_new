import styled from "styled-components";

export const HyperlinkStyled = styled.div`
  .form-container {
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .input-group {
    display: flex;
    align-items: baseline;

    margin-bottom: 20px;

    label {
      margin-right: 5px;
    }

    span,
    label {
      font-size: 18px;
    }
  }

  .textarea-group label {
    margin-right: 10px;
    font-size: 20px;
    display: flex;
    gap: 10px;
    align-items: center;

    font-weight: 500;
  }

  .subdomain-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
  }

  .static-text {
    font-size: 14px;
    color: #555;
  }

  .checkbox-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .checkbox-group label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .textarea-group {
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 120px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    gap: 10px; 
    align-items: center; 
}

  .services label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }

  .package-container {
  }

  h2 {
    font-size: 24px;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .add-button {
    background-color: transparent;

    border: none;

    cursor: pointer;
  }

  .package-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
  }

  .package-row input {
    width: 100%;
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .delete-button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: red;
  }

  .delete-button:hover {
    color: darkred;
  }

  .save-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #001f5f;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .save-button:hover {
    background-color: #00134a;
  }

  .package-container {
    margin-top: 20px;
  }
`;
