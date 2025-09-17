import styled from "styled-components";

export const RFQServiceModuleStyled = styled.div`
  .Continue-Service-div {
    width: 100%;
    display: flex;
    padding: 50px 0px;
    gap: 2rem;
  }
  .Continue-Service-left-div {
    width: 70%;
  }
  .Continue-Service-right-div {
    width: 30%;
  }
  .Continue-Service-sub-right-div {
    border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 688px;
    padding: 20px 20px;
  }

  .excel-upload-div {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  .excel-upload-div button {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .ant-input-affix-wrapper > .ant-input:not(textarea) {
    height: 2rem;
  }
  .Continue-Service-Proceed-btn {
    border-radius: 4px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
  .Continue-Service-back-btn {
    border-radius: 4px;
    border: 1px solid #9747ff;
    color: #9747ff;
    font-size: 14px;
    font-weight: 600;
  }
  .Continue-Service-Proceed-btn-div {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    padding: 0px 10px;
    gap: 15rem;
    border-radius: 2px;
    background: #fff;
    height: 53px;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #9747ff;
  }
  .Service-tabs-sec {
    margin-top: 2rem;
  }
  .lab-test-list-title {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 0px;
  }
  .lab-test-list-sub-title {
    color: #808080;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
  }
  .delete-selected-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    p {
      cursor: pointer;
    }
  }
  .pagination-div {
    display: flex;
    justify-content: center;
    margin: 3rem;
  }
  .healthCategoriesListbtn-div {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 8px;
    scrollbar-width: thin;
    margin-bottom: 0px;
    scrollbar-width: none;
  }
  .healthCategoriesListbtn {
    border: 1px solid #aaa4a4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .Continue-Service-div {
      padding: 15px 0px;
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .Continue-Service-left-div {
      width: 100%;
    }
    .ant-tabs-nav .ant-tabs-nav-list,
    .dyRYgn .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
      padding: 0px 10px;
      gap: 0px;
    }
    .Service-tabs-sec {
      margin-top: 10px;
    }
    .excel-upload-div {
      display: block;
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
    .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
      display: block;
    }
    .Continue-Service-right-div {
      width: 100%;
    }
    .pagination-div {
      padding: 15px 0px;
      margin: 0px;
    }
    .Continue-Service-sub-right-div {
      height: 100%;
    }
  }

  #address {
    width: 100%;
    padding: 12px 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
  }

  #address::placeholder {
    color: #ccc;
  }
  .pac-container {
    display: none !important;
  }

  #address:focus {
    border-color: #ccc;
  }

  .address-container {
    position: relative;
    margin-bottom: 3rem;
  }

  .address-container::before {
    content: "🔍";
    font-size: 16px;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
