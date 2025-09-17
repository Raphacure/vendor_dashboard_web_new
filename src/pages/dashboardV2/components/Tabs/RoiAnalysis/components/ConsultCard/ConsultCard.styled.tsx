import styled from "styled-components";

export const ConsultCardStyled = styled.div`
    border-radius: 24px;
    padding: 12px 24px 12px 24px;
    width: 100%;
    ${({bgColor}:any) => `background-color: ${bgColor || '#ffffff'};`}
    ${({borderColor}:any) => `border: 1.5px solid ${borderColor || '#ffffff'};`}

  .kpi-card-map {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .kpi-card-div {
    border-radius: 20px;
    background: rgba(231, 194, 212, 0.2);
    width: 100%;
    padding: 25px 23px;
  }

  .card-heading-title {
    color: var(--Primary, #252b61);
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.33px;
    margin-bottom: 29px;
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

  .kpi-card-sub-title {
    color: #252b61;
    font-family: "Inter", sans-serif;
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 0px;
  }
  .kpi-card-sub-title1 {
    font-size: 42px;
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
  .percent-text1 {
    background: #a3dac2 !important;
    color: #252b61 !important;
  }
  .percent-text {
    border-radius: 8.193px;
    background: #fbc3c3;
    color: #d30404;
    font-family: "Inter", sans-serif;
    font-size: 12.29px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    img {
      height: 20px;
      width: 15px;
    }
  }
  .age-graph-div {
    border-radius: 24px;
    background: #fff;
    box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
    margin-top: 60px;
  }
  .bg-color-remove {
    background: #fff !important;
  }
  .age-heading-graph-div {
    border-radius: 20px 20px 0px 0px;
    border: 1px solid #fff;
    background: #e9f2fd;
    box-shadow: 1px 1px 18px 0px rgba(0, 0, 0, 0.1);
    height: 57.16px;
    padding: 12px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin-bottom: 0px;
      color: #252b61;
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0.27px;
    }
  }
  .graph-filter-btn-div {
    display: flex;
    gap: 24px;
  }
  .graph-filter-btn {
    color: #252b61;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: var(--font-size-14, 14px);
    font-weight: 500;
    line-height: var(--font-size-20, 20px); /* 142.857% */
    padding: 4px 12px;
    img {
      height: 35px;
      width: 35px;
    }
  }
  .activeBtn {
    border-radius: 6px;
    background: var(--color-grey-97, #f0fdf4);
  }
  .parent-graph-div {
    padding: 30px 20px;
  }
  .location-grap-div,
  .table-grap-div {
    margin-top: 80px;
  }
  .view-report-btn {
    color: #2563eb;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 13.125px;
    font-weight: var(--font-weight-400, 400);
    line-height: var(--line-height-20, 20px); /* 152.381% */
  }
  th {
    color: #1e1e1e;
    font-family: "Outfit", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  td {
    color: #616161;
    font-family: "Outfit", sans-serif;
    font-size: 14px;
    font-weight: 400;
    img {
      height: 28px;
      width: 28px;
    }
  }
  .report-card-div {
    border-radius: 8px;
    background: var(--color-grey-98, #f9fafb);
    border: 1px solid #f9fafb;
    padding: 24px;
  }
  .report-card-title {
    color: #1f2937;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
      width: 20px;
    }
  }

  .const-card-title {
    img {
      height: 48px;
      width: 48px;
    }
  }
  .report-card-price {
    color: #1f2937;
    font-family: "Inter", sans-serif;
    font-size: 20.438px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 1rem;
  }
  .cost-card-price {
    line-height: 0px !important;
    margin-bottom: 32px;
    margin-top: -1rem;
  }
  .report-card-emp {
    color: #6b7280;
    font-family: "Inter", sans-serif;
    font-size: 13.563px;
    font-weight: 400;
    line-height: 20px; /* 147.465% */
  }
  .report-card-emp-grp {
    color: #16a34a;
    font-family: "Inter", sans-serif;
    font-size: 13.563px;
    font-weight: 400;
    line-height: 20px; /* 147.465% */
  }
  .report-card-emp-change {
    color: red !important;
  }
  .demographics-card-div {
    border-radius: 8px;
    border: 1px solid rgba(229, 231, 235, 0.3);
    background: #fff;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 14px 17px;
    width: 100%;
  }
  .demographics-upload-div {
    border-radius: 10px;
    background: #f4f4f4;
    height: 405px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      color: #6b7280;
      font-family: "Inter", sans-serif;
      font-size: 12.906px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 8px;
    }
    img {
      width: 64px;
      height: 64px;
    }
  }
  .demographics-table-grap-div {
    width: 65%;
  }

  .top-locations-container {
    background: white;
    border-radius: 20px;
    padding: 20px;
    width: 45%;
    font-family: Arial, sans-serif;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .top-locations-container h3 {
    margin-bottom: 20px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }

  .location-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  .location-info {
    display: flex;
    align-items: center;
  }

  .location-color-bar {
    width: 5px;
    height: 40px;
    border-radius: 10px;
    margin-right: 10px;
  }

  .location-text {
    display: flex;
    flex-direction: column;
  }

  .location-name {
    font-weight: 600;
    color: #222;
  }

  .location-users {
    font-size: 14px;
    color: #888;
  }

  .location-stats {
    text-align: right;
  }

  .percentage {
    font-weight: 600;
    color: #333;
  }

  .growth {
    font-size: 13px;
    color: green;
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .arrow {
    font-size: 13px;
  }
` as any;