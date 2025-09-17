import styled from "styled-components";

export const DashboardStyled = styled.div`
  padding: 2rem 2.5rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }
  .heading-navbar-div {
    border-radius: 7px;
    background: #e9f2fd;
    height: 3.688rem;
    width: 50%;
  }
  .heading-navbar-title {
    margin-bottom: 0px;
    color: #252b61;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    padding: 15px 15px 16px 15px;
    cursor: pointer;
  }
  .ant-tabs-tab {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #252b61;
    font-size: 18px;
    font-weight: 600;
  }
  .navbar-map-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .selected-navbar {
    border-radius: 7px;
    background: #fff;
    padding: 6px 10px;
  }
  .options-1-div {
    margin-top: 1rem;
    justify-content: normal;
  }
`;
