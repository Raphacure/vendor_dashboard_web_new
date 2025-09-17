import styled from "styled-components";

export const DetailedServiceCardStyled = styled.div`
  .table-grap-div {
    display: flex;
    margin-top: 54px;
    gap: 38px;
    width: 100%;
  }
  .age-graph-div {
    border-radius: 24px;
    background: #fff;
    box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
  }
  .age-heading-graph-div {
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #fff;
    background: #e9f2fd;
    height: 57.16px;
    padding: 12px 12px;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0px;
      color: #252b61;
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0.27px;
    }
  }
  .bg-color-remove {
    background: none;
    display: flex;
    justify-content: space-between;
  }
  .export-modal-div {
    padding: 2rem;
  }
  .export-modal-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .export-btn-div {
    display: flex;
    justify-content: end;
    gap: 2rem;
  }
  .check-box-div {
    display: flex;
    gap: 10px;
  }
`;