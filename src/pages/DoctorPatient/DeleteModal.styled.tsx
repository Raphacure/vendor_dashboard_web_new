import styled from "styled-components";

export const DeleteModalStyled = styled.div`
  padding: 10px;

  .heading {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.36);

    .cut-icon {
      color: #252b61;
      cursor: pointer;
    }
  }

  .form-buttons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    justify-content: flex-end;

    .deleteButton {
      border-radius: 128px;
      background-color: #252b61;
      font-size: 16px;
      color: #fff;
      font-family: inter;
      padding: 10px 30px;
      border: none;
      cursor: pointer;
    }

    .cancelButton {
      background: none;
      border: 1px solid #252b61;
      color: #000;
      font-size: 16px;
      padding: 10px 30px;
      border-radius: 128px;
      cursor: pointer;
    }
  }

  .content-body {
    margin-top: 20px;
  }
`;
