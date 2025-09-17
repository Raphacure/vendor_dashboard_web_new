import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  z-index: 10;

  .main-header {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #003366;
  }

  .left-section {
    display: flex;
    align-items: center;
  }

  .search-container-old {
    padding: 10px 16px 5px 16px;
    display: flex;
    justify-content: center;
  }

  .icon-button {
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .title {
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 0 16px;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

export const DashBoardHeaderStyled = styled.div`
  width: 100%;
  z-index: 10;
  background-color: #003366;
  padding: 16px;
  border-radius: 0 0 30px 30px;

  .doc-img {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border: 1px solid gray;
    border-radius: 50%;
  }

  .img-size {
    width: 36px;
    height: 36px;
  }

  .search-container-old {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-div {
    width: 100%;
    background-color: #003366;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .doctor-details-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 45px;
      aspect-ratio: 1;
      border-radius: 50%;
    }
    p {
      margin: 0;
      color: white;
    }
  }
  .doctor-details {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
