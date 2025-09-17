import styled from "styled-components";

export const LogoutStyled = styled.div`
  h2 {
    font-size: 17.5px;
    font-weight: 600;
    color: #000;
    white-space: pre-wrap;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-main-image {
    display: flex;
    justify-content: center;
    padding: 60px 0px;
  }
  @media (max-width: 674px) {
    .logo-main-image{
      img{
        width:120px;
      }
    }
  }
  .cut {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .logout-button {
    display: flex;
    justify-content: center;
    gap: 15px;

    .confirm {
      border: 1px solid #252b61;
      background: #fff;
      font-size: 16px;
      font-weight: 600;
      color: #252b61;
      border-radius: 36px;
      padding: 10px 30px;
    }

    .cancel {
      border: none;
      background: #252b61;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      border-radius: 36px;
      padding: 10px 30px;
    }
  }
`;
