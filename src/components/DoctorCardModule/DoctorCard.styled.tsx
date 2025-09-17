import styled from "styled-components";

export const DoctorCardStyled = styled.div`
position: relative;
  .detail-card {
    width: 100%;
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .specelization-text {
    font-size: 18px;
    font-family: Outfit, sans-serif;
    color: #252b61;
    margin-bottom: 11px;
  }
  .eduction-details .next-slot-time-sec {
    color: red;
    opacity: 1;
    font-size: 16px;
  }
  .doctor-title {
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 6px;
  }
  .eduction-details {
    display: contents !important;
    text-align: center;
    margin-bottom: 0px;
    span {
      font-size: 14px;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
    }
    .divv {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
    }
    svg {
      display: inline-block;
    }
  }
  .Experience-div {
    display: flex;
    align-items: center;
  }
  .exp-div {
    /* gap: 2rem; */
    margin-top: 3px;
    /* margin-bottom: 11px; */
    > div {
      margin-bottom: 5px;
    }
  }
  .left-middle {
    display: flex;
    gap: 14px;
    padding: 1rem 1rem 0rem 1rem;
    cursor: pointer;
  }
  .main-contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 0rem 1rem;
    justify-content: space-between;
    cursor: pointer;
  }
  .contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 1rem;
  }
  .contect-text {
    margin-bottom: 0px;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #000;
  }
  .contect-book-btn-div {
    display: flex;
    justify-content: end;
  }
  .contect-book-btn {
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    background-color: #252b61;
    border: 1px solid #252b61;
    box-sizing: border-box;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 15px 14px 24px;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .appointment-card {
    justify-content: space-between;
  }
  .card-left {
    position: relative;
    img {
      border-radius: 10px;
      object-fit: cover;
    }
  }
  .card-right {
    text-align: start;
  }
  .appointments {
    flex: 3;

    .filter-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
        cursor: pointer;
      }
    }

    .appointment-header {
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #555;
      }

      select {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }
    }

    .sort-dropdown {
      .sort {
        padding: 10px;
        border-radius: 44px;
        border: 1px solid #aca3a3;
        label {
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #7e7979;
        }
        select {
          border: none;
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #1e1e1e;
        }
      }
    }

    .appointment-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .appointment-card {
        display: flex;
        gap: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;

        background-color: #fff;

        .card-right {
          text-align: start !important;
        }
      }
    }
  }
  .sort-dropdown {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
  }
  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -2rem;
    width: 3rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 14px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .sec-banner-div {
    width: 12%;
    position: relative;
    border-radius: 9px 0px 0px 9px;
    background-color: #fff5d8;
    height: 32px;
    position: absolute;
    width: fit-content;
    padding: 1rem;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0px;
      font-size: 14px;
      color: #252b61;
      height: 22.4px;
      opacity: 0.9;
      font-family: Outfit, sans-serif;
    }
  }
`;
