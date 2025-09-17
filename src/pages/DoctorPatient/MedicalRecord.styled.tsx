import styled from "styled-components";

export const MedicalRecordStyled = styled.div`

  .records-section {
    width: 55%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    h3 {
      font-size: 18px;

      font-weight: 600;
      font-family: Inter;
      color: #212529;
    }
  }

  .sort {
    .sort-button {
      border-radius: 25px;
      background-color: #fff;
      border: 1px solid #252b61;
      padding: 10px;
      font-size: 16px;
      color: #252b61;
      font-family: Inter;
    }
  }

  .sort-dropdown {
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

 
`;
