import styled from "styled-components";

export const DemographicsCardStyled = styled.div`

    border-radius: 24px;
    border: ${(props:any) => `1px solid ${props?.borderColor ?? "rgba(229, 231, 235, 0.3)"}`};
    background: #fff;
    box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
    padding: 14px 17px;
    width: 100%;
  
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
` as any;