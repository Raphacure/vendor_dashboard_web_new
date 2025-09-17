import styled from "styled-components";

const OnSiteCampPageStyled = styled.div`
  padding: 32px 47px;

  .ant-select-selector{
    border-radius:25px !important;
  }

  .ant-select{
    height:37px;
  }
  .ant-picker{
    border-radius:25px !important;
    height:37px !important;
  }

  .date-range-picker{
    height:37px;
  }

  @media (max-width: 675px) {
  padding: 15px;


    .header {
      flex-direction: column;
      align-items: start !important;
      gap: 15px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .sort-dropdown {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        color: #64748b;
        margin-right: 5px;
      }

    }
  }

  .section {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 27px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 404px);
    gap: 20px;
  }
`;

export default OnSiteCampPageStyled;
