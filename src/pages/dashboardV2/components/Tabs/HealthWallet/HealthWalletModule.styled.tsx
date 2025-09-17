import styled from "styled-components";

export const HealthWalletModuleStyled = styled.div`
  width: 100%;
  .demographics-card-div {
    border-radius: 8px;
    border: 1px solid rgba(229, 231, 235, 0.3);
    background: #fff;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 14px 17px;
    width: 100%;
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
  }
  .title-sec-new{
    text-transform: capitalize;
  }
  .report-card-price {
    color: #1f2937;
    font-family: "Inter", sans-serif;
    font-size: 20.438px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 1rem;
  }
  .kpi-card-subs-title {
    color: #000;
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 5px;
    letter-spacing: -0.154px;
  }
  .ant-select-selector {
    border-radius: 8px !important;
  }
`;
