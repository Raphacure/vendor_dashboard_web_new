import styled from "styled-components";

export const RFQExistingListStyled = styled.div`
  padding: 0px 20px;

  .left-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  .Quote-btn {
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #f6f9fd;
  }

  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    .rectangle {
      width: 5rem;
      background: #89db7b;
      padding: 5px;
      border-radius: 10px 45px 45px 0;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }
  .packagesListDataShow-card-div {
    width: 100%;
    display: flex;
  }
  .packages-detail-img-div {
    width: 45%;
  }
  .packages-detail-img-div img {
    width: 45%;
    width: 19rem;
  }
  .packages-detail-text-div {
    width: 45%;
  }
  .packages-detail-btn-div {
    width: 23%;
    text-align: end;
  }
  .packages-detail-btn-div button {
    border: none;
    background-color: #d64c4c;
    color: #fff;
    border-radius: 5px;
    height: 2rem;
    width: 2rem;
  }
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .wrapper > div {
    width: 100%;
    height: 100%;
  }
  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
    height: 90vh;
  }

  .info {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    gap: 2rem;
  }
  .listWrapper {
    width: 100%;
    height: fit-content;
    display: grid;
    font-size: 0.9rem;
    display: flex;
  }
  .btnWrapper {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
    padding-right: 20px;

    margin-top: -2rem;
    width: auto;
    margin-left: 68%;
  }
  .btn-book-now {
    width: auto;
  }
  .btnWrapper > div {
    height: fit-content;
  }
  .details {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  .details h1 {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  .details p {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
  }
  .package-title {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  .package-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  .package-price {
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
  }
  .price-amount {
    color: #000;
    font-size: 12px;
    font-weight: 400;
  }
  .sample-required {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 1rem;
  }
  .sample-type {
    font-weight: bold;
    margin-left: 5px;
  }
  .text-sample {
    display: flex;
    align-items: center;
    color: green;
  }
  .preparation {
    margin-top: 20px;
  }
  .preparation h3 {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  .preparation li {
    color: #000;
    font-size: 12px;
    font-weight: 400;
  }
  .pagination-div {
    display: flex;
    justify-content: center;

    margin: 3rem;
  }
`;
