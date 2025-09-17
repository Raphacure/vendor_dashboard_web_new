import styled from "styled-components";

export const GrowthInfoCardStyled = styled.div`
  width: 100%;
  border-radius: 24px;
  background: #fff;
  box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;

  .demographics-card-div {
    border-radius: 8px;
    border: 1px solid rgba(229, 231, 235, 0.3);
    background: #fff;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 14px 17px;
    width: 100%;
  }
  .report-card-title {
    color: #1f2937;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
      width: 20px;
    }
  }
  .kpi-card-title {
    color: #252b61;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 35px;
      width: 35px;
    }
  }
  .report-card-price {
    color: #1f2937;
    font-family: "Inter", sans-serif;
    font-size: 23.438px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 1rem;
  }
  .kpi-card-subs-title {
    color: #99bce2;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.154px;
  }
  .cost-kpi-card-subs-title {
    color: #252b61 !important;
  }
  .serviec-color {
    color: #47be47 !important;
  }
`;

