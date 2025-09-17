import styled from "styled-components";

export const HealthSaverCardStyled = styled.div`
  --text-color: #252b61;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 5px 4px 30px 0px rgba(0, 0, 0, 0.1);
  height: fit-content;
  max-width: 325px;
  width: 100%;
  height: 100%;

  h2 {
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
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

  .gap10px {
    gap: 10px;
  }

  .logo {
    gap: 8px;

    img {
      width: 41px;
      height: 41px;
    }
    h3 {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #008080;
      white-space: pre-wrap;
    }
    h4 {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #141414;
    }
  }
  .test-img-div {
    margin-top: 0px;
    padding: 0px 16px;
  }

  .bottomSec {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 16px 20px 16px;
    .prices {
      display: flex;
      flex-direction: row;
      gap: 12px;
      .realPrice {
        font-size: 16px;
        text-decoration: line-through;
        font-weight: 500;
        font-family: Outfit, sans-serif;
        color: #d1d1d1;
      }
      .discountedPrice {
        font-size: 16px;
        letter-spacing: 0.02em;
        font-weight: 600;
        font-family: Outfit, sans-serif;
        color: #141414;
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      background: rgb(37, 43, 97);
      color: rgb(255, 255, 255);
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: capitalize;
      padding: 6px 16px;
      height: 2rem;
      border: none;
    }
  }
  .bottomSec1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .prices {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
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
      background: #f2e09a;
      border-radius: 25px;
      border: none;
      color: #000;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      font-size: 18px;
      gap: 0.5rem;
    }
  }
  .cart-icon {
    height: 14px;
    width: 14px;
    margin-left: 3px;
  }
  .textContent {
    padding: 10px 11px 10px 11px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 12px;
    align-items: center;
    gap: 40px;

    .featureButton {
      height: 37px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #a3dac2;
      border: none;
      padding: 10px 12px;
      border-radius: 30px;
      cursor: pointer;
      transition: background 0.3s ease;
      text-wrap: nowrap;
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 500;
      margin-right: 11px;

      img {
        width: 17px;
        height: 13px;
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
  .womenscare-add-btn {
    border-radius: 40px;
    background: var(--Primary, #967bb6) !important;
    color: #fff !important;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }
  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    .rectangle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 65px;
      background: #89db7b;
      padding: 5px;
      border-radius: 10px 45px 45px 0;
      height: 25px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 12px;
      font-weight: 500;
      height: 26px;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }
  .tests {
    text-wrap: nowrap;
    align-items: center;
  }

  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    padding: 1rem;
    button {
      width: 100%;
      height: 40px;
    }
    .details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }
  button:disabled {
    opacity: 0.5;
  }

  .womenscare-sectin-div {
    display: flex;
    align-items: center;
  }
  .common-sectin-div {
    display: flex;
    flex-direction: column;
  }
  // Media Queries
  @media screen and (min-width: 1200px) and (max-width: 1450px) {
    .cardInfoRow {
      h3,
      h4 {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 950px) {
    border-radius: 24px;
    width: 100% !important;
    .logo {
      h3,
      h4 {
        font-size: 12px;
      }
    }
    .bottomSec {
      /* flex-direction: column; */
      padding: 34px 15px 10px 15px;
      .prices {
        .discountedPrice,
        .realPrice {
          font-size: 12px;
        }
      }
      .featureButton {
        font-size: 12px;
      }
    }
    .bottomSec1 {
      flex-direction: row;
      padding: 10px;
      .prices {
        .discountedPrice,
        .realPrice {
          font-size: 12px;
        }
      }
      .featureButton {
        font-size: 12px;
      }
    }
    .cardInfoRow {
      img {
        width: 30px;
        object-fit: contain;
      }
    }
    .imgWrapper {
      /* min-height: 6rem; */
    }
    .textContent {
      align-items: start;
      bottom: 21px;
    }
    .imgWrapper img {
      border-radius: 24px 24px 0px 0px;
    }
    .test-img-div {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 14px;
    }
  }
`;
