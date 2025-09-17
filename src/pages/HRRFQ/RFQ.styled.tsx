import styled from "styled-components";

export const RFQStyled = styled.div`
  .cityTitle {
    text-transform: capitalize;
    font-size: 18px;
  }
  padding: 0px 20px;
  .left-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .search-bar {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .buttons-div {
    display: flex;
    gap: 25px;
  }
  .ant-input-affix-wrapper {
    width: 20rem;
  }
  .Package-btn {
    border: 1px solid #9747ff;
    background: #fff;
    color: #9747ff;
  }
  .Quote-btn {
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #f6f9fd;
    border: none;
  }

  .ordertable {
    margin-top: 12px;
    width: 100%;
    overflow-x: scroll;
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
    height: 3rem;
    text-align: center;
  }
  .ordertable td {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-wrap: nowrap;
    text-align: center;
  }
  .ordertable tr {
    border: 1px solid #d6cece;
  }
  .rfq-name {
    cursor: pointer;
    color: purple !important;
  }

  .profile-card {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .profile-info {
    display: flex;
    width: 100%;
  }
  .profile-details {
    width: 100%;
  }
  .profile-details h2 {
    margin: 0;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.26px;
    opacity: 0.8;
  }

  .profile-details p {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    opacity: 0.7;
  }
  .rfq-status-text {
    text-align: center;
    margin: 0;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.36px;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
  .profile-details-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .appointment-details {
    /* margin-top: 2rem; */
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .appointment-info {
    margin-bottom: 16px;
    height: 8rem;
    overflow: scroll;
  }
  .renegotiate-info {
    margin-bottom: 16px;
    overflow: scroll;
  }
  .renegotiate-btn-div {
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
    button {
      background: #9747ff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      color: #f6f9fd;
      font-family: Poppins, sans-serif;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .header {
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-close-btn-div {
    display: flex;
    justify-content: end;
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
  .display-contents {
    display: contents;
    margin-bottom: 2rem;
  }
  .appointment-item {
    display: flex;
    margin-bottom: 8px;
    flex-basis: 30%;
    border-bottom: 1px solid lightgray;
  }
  .appointment-comments-details {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    height: 10rem;
    overflow: scroll;
  }
  .appointment-comment-info {
    margin-bottom: 16px;
  }
  .pagination-div {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .pagination-count-text {
    margin-right: 1.5rem;
    color: #808080;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0px;
  }
  .ordertable-thead {
    width: 100%;
    margin-bottom: 2rem;
  }
  .sectionHeading {
    color: #545353;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .rapha-color-btn {
    background-color: rgb(0, 128, 128);
  }

  @media (max-width: 768px) {
    padding: 0px 0px;
    .left-controls {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
    .sectionHeading {
      font-size: 15px;
    }
    .pagination-div {
      margin-bottom: 2rem;
      flex-direction: column;
      align-items: end;
    }
    .buttons-div {
      margin-top: 1rem;
    }
  }
`;
