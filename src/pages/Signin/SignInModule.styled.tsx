import styled from "styled-components";

export const SignInModuleStyled = styled.div`
  background-color: rgba(242, 242, 253, 1);
  width: 100%;
  min-height: 100%;
  background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742813458807.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  display:flex;
  align-items:center;

  .main-container {
    padding: 80px 0 0 0;
    height: 100%;
  }

  .signup-features {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
  }

  /* .main-container {
        background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1742814788734.png");
        background-repeat: no-repeat;
        background-size: auto max(90%, 500px);
        background-position: bottom left;
    } */

  @media (max-width: 768px) {
    .main-container {
      flex-direction: column;
      padding: 10px 0 0px 0 !important;
    }
    .background-container-new {
      padding-bottom: 60px !important;
    }

    .inspired-with-p {
      font-family: Inter;
      font-weight: 600;
      font-size: 26px;
      line-height: 48px;
      letter-spacing: 0%;
    }
  }

  .background-doc {
    /* width: 100%; */
    height:100%
  }

  .back-text {
    font-family: Inter;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 56px;
    letter-spacing: 0%;
  }

  .reverve-container {
    align-items: flex-end;
  }

  .signin-caption {
    font-family: Inter;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 48px;
    letter-spacing: 0%;
    color: rgba(23, 26, 31, 1);
  }

  .features-text {
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0%;
    color: rgba(23, 26, 31, 1);
  }
`;
