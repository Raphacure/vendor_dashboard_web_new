import styled from "styled-components";

const DashboardPageStyled = styled.div`
  padding: 35px;

  @media (max-width: 675px) {
    padding: 5px;
  }

  .common-box-shadow {
    box-shadow: 5px 4px 30px 0px #0000001a;
  }

  .link-box-text {
    font-family: Inter;
    font-weight: 600;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 1.5%;
  }
  
  .line-div {
    width: 100%;
    position: relative;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    height: 1px;
    position: absolute;
    top: calc(100% + 12px);
    width: calc(100% - 16px);
    right: 0;
  }

  .sub-boxes:hover {
    .move-up-container {
      box-shadow: 5px 4px 30px 0px #0000001a;
    }
    .link-box-text {
      color: #252b61 !important;
    }
    .link-icon-img{
      transform: rotate(90deg);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export default DashboardPageStyled;
