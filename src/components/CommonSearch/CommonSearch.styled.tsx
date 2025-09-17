import styled from "styled-components";

export const RaphaPlusCommonSearchStyled = styled.div`
  width: 100%;
  position: relative;

  .search-container-hidden {
    top: -500px !important;
  }

  .clear-btn{
    padding:0px 8px;
    margin-right:5px;
    border-radius:15px;
    border:2px solid red;
    color:red;
    cursor: pointer;
  }

  .search-items-border:not(:last-child) {
    border-bottom: 1px solid rgb(229, 229, 229);
  }

  .search-items:first-child {
    padding-top: 10px;
  }

  .selected-search{
    background-color:#e9e9e9;
  }

  .right-btn{
    background-color:rgb(37, 43, 97);
    border-radius:50%;
    color:white;
    padding:2px;
    border:1px solid black;
    flex-shrink:0;
  }

  .search-items {
    p {
      font-family: Inter;
      font-weight: 500;
      font-size: 16px;
      line-height: 19.36px;
      letter-spacing: 0%;
      margin:0;
    }
    display:flex;
    justify-content:space-between;
    padding:16px 4px 12px 4px;
    border-radius:5px;
    align-items:center;
    cursor: pointer;
    transition: background-color 0.5s ease;
  }

  .search-items:hover{
    background-color:#e9e9e9;
  }

  .search-container {
    cursor: pointer;
    position: absolute;
    background-color: white;
    min-height: 80px;
    width: calc(100% + 40px);
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: top 0.4s ease-in-out;
    padding: 80px 20px 5px 20px;
  }

  @media (max-width:675px) {
    .search-container{
      width: calc(100% + 10px) !important;
    }
  }

  .fixed-container {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: gray;
    top: 0 !important;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.3;
  }

  .fixed-container-hidden {
    top: -100% !important;
  }

  .search-bar {
    position: relative;
    z-index: 10;
    height: 60px;
    display: flex;
    align-items: center;
    background: #f8f8f8;
    box-shadow: 4px 6px 19px 0px rgba(0, 0, 0, 0.18);
    border: 1px solid #1a1a1a;
    border-radius: 50px;
    padding: 10px 20px;
    width: 100%;
    transition: top 0.5s ease-in-out;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .mic-icon {
    background-color: #ffffff;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
  }
  .searchicon {
    font-size: 38px;
    color: #252b61;
    cursor: pointer;
  }
  .search-icon {
    background-color: #92bdf6;
    color: #252b61;
    padding: 7px;
    border-radius: 50%;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    letter-spacing: 0.02em;
    font-size: 18px;
    color: #9a9898;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    .search-bar {
      padding: 8px 5px;
      max-width: 100%;
    }
    .search-input {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .search-bar {
      max-width: 100%;
      height: 46px;
    }

    .search-input {
      font-size: 14px;
    }
  }
`;
