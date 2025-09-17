import styled from "styled-components";

export const RFQRequestStyled = styled.div`
  padding: 0px 20px;
  .active-view-btn-div {
  }
  .active-view-sub-btn-div {
    border-radius: 30px;
    background: #fff;
    width: 100%;
    height: 2.875rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .active-view-sub-btn-div button {
    width: 23.75rem;
  }
  .Service-div {
    padding: 50px 0px;
  }
  .Select-test-text {
    color: #313131;
    font-size: 14px;
    font-weight: 500;
  }
  .Select-btn-div button {
    border-radius: 25px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-right: 1rem;
    color: #313131;
    font-size: 12px;
    font-weight: 400;
  }
  /* .Employees-input-div {
    padding: 30px 0px;
  } */
  .error-message-text {
    font-size: 12px;
    margin-bottom: 0px;
    margin-top: 3px;
    color: #e53a3a;
    width: 55%;
  }
  .service-select-city-div {
    padding: 30px 0px;
  }
  .search-custom-div {
    width: 30%;
  }
  .participant-input-field {
    width: 30%;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin-top: 25px;
    margin-bottom: 5rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px;
    }
  }
  .pharmacy-card-box {
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    min-width: 150px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: auto;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;

    img {
      height: 115px;
      width: 100%;
      border-radius: 10px 10px 0px 0px;
    }

    .box-bottom {
      padding: 16px;
    }

    .pharmacy-box-button-sec {
      margin-top: 0px;
    }

    .name-div {
      display: flex;
      justify-content: space-between;
    }

    .caregory-key-name {
      text-transform: capitalize;
    }
  }
  .hospital_data {
    text-align: center;
    margin-bottom: 0px;
    width: 100%;
  }
  .participant-input-field-div {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  .participant-dlt-btn-div {
    margin-top: 1rem;
    height: 2rem;
    width: 2rem;
  }
  .bottom-btn-div {
    display: flex;
    justify-content: end;
  }
  .back-btn-div {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #313131;
    font-size: 14px;
    font-weight: 500;
  }
  .Continue-btn-div {
    border-radius: 2px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  .ordertable {
    margin-top: 12px;
    width: 100%;
    overflow-x: scroll;
    padding: 30px 0px;
  }
  .ordertable Table {
    --bs-table-bg: transparent !important;
    border-radius: 5px;
    border: 1px solid #d6cece;
  }
  .ordertable thead {
    border-radius: 5px 5px 0px 0px;
    background: #d3edfc;
  }
  .ordertable th {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-wrap: nowrap;
  }
  .ordertable td {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-wrap: nowrap;
    input {
      width: 12rem;
    }
  }
  .ordertable tr {
    border: 1px solid #d6cece;
  }
  .add-table-content {
    background: #9747ff;
    width: 66px;
    height: 36px;
    border: 1px;
    color: #fff;
  }
  .remove-table-content {
    border: 2px solid #9747ff;
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #e53a3a;
    }
  }

  .counter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #e0e0e0;
    padding: 10px;
    background-color: #ffffff;
    width: fit-content;
    height: 2rem;
    margin-top: 0.5rem;
  }

  .text-label {
    font-size: 13px;
    font-weight: 400;
    margin-right: 15px;
  }

  .count-display {
    width: 40px;
    text-align: center;
    margin: 0 15px;
  }

  .counter-button {
    background-color: #508e00;
    color: white;
    border: none;
  }

  .counter-button:hover {
    background-color: #43a047;
    color: white;
  }

  .decrement-button {
    margin-right: 10px;
  }
  .remove-table-content {
    border: 1px solid #444343;
    height: 36px;
  }

  .show-table-wellness-subcription-div {
    width: 100%;
    display: flex;
    gap: 2rem;
  }
  .show-table-wellness-subcription-fleft {
    width: 65%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 5px 5px;
  }
  .show-table-wellness-subcription-right {
    width: 35%;
    height: 100%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 20px;
  }
  .show-table-wellness-subcription-fleft p {
    color: #313131;
    font-size: 14px;
    font-weight: 500;
  }
  .Subscriptions-th-div img {
    width: 2.5rem;
  }
  .back-more-rfq-btn {
    border-radius: 1px;
    border: 1px solid #9747ff;
    width: 100%;
    height: 42px;
    color: #9747ff;
    font-size: 12px;
    font-weight: 600;
  }
  .add-more-rfq-btn {
    border-radius: 3px;
    background: #9747ff;
    width: 100%;
    color: #f6f9fd;
    font-size: 12px;
    font-weight: 600;
    height: 42px;
  }
  .warning-msg {
    color: #e53a3a;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    .active-view-sub-btn-div {
      width: 100%;
    }
    .active-view-sub-btn-div button {
      font-size: 12px;
    }
    .Service-div {
      padding: 5px 0px;
    }
    .Select-btn-div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .participant-input-field-div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0rem;
    }
    .Select-btn-div button {
      margin-right: 0px;
      width: 100%;
      font-size: 12px;
    }
    .service-select-city-div {
      padding: 0px 0px;
    }
    .search-custom-div {
      width: 100%;
    }
    .bottom-btn-div {
      margin-bottom: 1rem;
    }
    .participant-input-field-div button {
      display: flex;
      justify-content: right;
    }
  }
`;
