import styled from "styled-components";

export const RFQCardModuleStyled = styled.div`
  .RFQExistingList-card-main-div {
    margin-top: 2rem;
    --text-color: #252b61;
    background: #fff;
    border-radius: 2rem;
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
    width: 100%;
    cursor: pointer;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  .imgWrapper {
    position: relative;
    min-height: 8rem;
    padding: 5px;
    img {
      width: 100%;
    }
  }

  .logo {
    gap: 1rem;
    align-items: center;

    img {
      object-fit: none;
      width: 50px !important;
    }
    h3 {
      color: #008080;
      font-weight: 500;
      font-size: 1rem;
    }
    h4 {
      color: #141414;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .bottomSec {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    padding: 1rem;
    .prices {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      .realPrice {
        color: #d1d1d1;
        text-decoration: line-through;
        font-size: 1.2rem;
        font-weight: 400;
      }
      .discountedPrice {
        color: #141414;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
    button {
      background: #252b61;
      border-radius: 25px;
      border: none;
      color: #fff;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .textContent {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0;

    .featureButton {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #a3dac2;
      border: none;
      padding: 0.8rem;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 300;
      cursor: pointer;
      transition: background 0.3s ease;

      p {
        margin-bottom: 0px;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      &:hover {
        background: #88c9a8;
      }

      &:nth-child(1) {
        background: #f2e09a;

        &:hover {
          background: #e5d488;
        }
      }
    }
  }

  .logoDiv {
    width: fit-content;
    height: fit-content;
  }
  .logoDiv img {
    width: 15rem;
    height: 12rem !important;
  }
  div.logoDiv > img {
    border-radius: 10px;
    height: 12rem !important;
  }
`;
