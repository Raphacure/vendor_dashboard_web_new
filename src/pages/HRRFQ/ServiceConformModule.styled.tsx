import styled from "styled-components";

export const ServiceConformModuleStyled = styled.div`
  padding: 0px 20px;
  .service-conform-module-div {
    width: 100%;
    display: flex;
    gap: 2rem;
  }
  .service-conform-header-module-div {
    border-radius: 2px 2px 0px 0px;
    background: #d3edfc;
    height: 38px;
    padding: 10px;
    display: flex;
    align-items: center;
    p {
      color: #565151;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0.84px;
      margin-bottom: 0px;
    }
    img {
      width: 2rem;
    }
  }
  .service-conform-left-module-div {
    padding: 10px;
    width: 65%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .service-conform-right-module-div {
    padding: 1rem;
    width: 35%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .service-conform-text-module-div {
    padding: 2rem;
  }
  .service-conform-text-module-div li {
    color: #808080;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px; /* 200% */
    letter-spacing: 0.6px;
  }
  .select-options-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .service-conform-text-module-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-toggle {
    width: 23.2rem;
    display: flex;
    align-items: center;
    border-radius: 1px;
    border: 1px solid var(--dummy, #808080);
    color: var(--dummy, #808080);
    font-size: 12px;
    font-weight: 600;
    background: #fff;
    height: 42px;
  }
  .form-check .form-check-input {
    cursor: pointer;
  }
  .RFQ-options-select-btn {
    display: flex;
    justify-content: end;
    padding: 1rem;
    button {
      border-radius: 1px;
      border: 1px solid #9747ff;
      width: 100%;
      height: 42px;
      color: #9747ff;
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    .service-conform-module-div {
      display: flex;
      flex-direction: column;
    }
    .service-conform-left-module-div {
      width: 100%;
    }
    .service-conform-text-module-div {
      padding: 0px;
    }
    .lab-test-list-title {
      margin-bottom: 0px;
    }
    .service-conform-right-module-div {
      width: 100%;
    }
    .dropdown-toggle {
      width: 20rem;
    }
  }
`;
