import styled from "styled-components";

export const DashboardMobileStyled = styled.div`
  padding: 35px 10px 15px 10px;
  background-color: rgb(253, 253, 253);

  .add-favorite-div {
    position: fixed;
    background-color: white;
    width: 100%;
    padding: 20px 20px 95px 20px;
    bottom: 0;
    border-radius: 40px 40px 0 0;
    box-shadow: 0 0 500px 100px gray;
    left: 0;
    z-index: 5;

    .fav-list-options {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .main-img-name-sec{
      max-height: 100px;
      margin-bottom: 25px;
    }
    .fav-list-options-div {
      position: relative;
      border: 1px solid #e4e4e4;
      border-radius: 10px;
      padding: 11px 10px;

      input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .fav-radio-outer {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 14px;
        height: 14px;
        border: 1px solid rgb(37, 43, 97);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .fav-radio-inner {
        border-radius: 50%;
        width: 9px;
        height: 9px;
        border: 1px solid rgb(37, 43, 97);
      }
      .fav-radio-sel {
        background-color: rgb(37, 43, 97);
      }
    }

    .fav-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      align-items: center;

      h3 {
        margin: 0;
      }
    }
  }

  .nav-box-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    row-gap: 30px;
  }
  .nav-box-div {
    width: 60px;
    box-shadow: 2px 2px 16px 2px #00000012;
    border-radius: 10px;
    padding: 5px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-box-div img {
    width: 35px;
    height: 35px;
  }
  .nav-box-p {
    text-align: center;
    margin: 0;
  }
  .nav-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
  }
  .view-patient-ask-div {
    margin-top: 30px;
    background-color: rgb(247, 240, 209);
    padding: 20px 10px;
    width: 100%;
    border-radius: 10px;

    img {
      width: 60px;
    }
  }
`;

export const DashboardStyled = styled.div`
  .overview-left {
    flex-basis: 50%;
  }
  .main-img-name-sec{
      max-height: 100px;
      margin-bottom: 25px;
    }
  .td-no-booking {
    text-align: center;
    height: 150px;
    color: #22336b;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
  }
  .edit-btns-div {
    padding: 30px 0px;
    display: flex;
    gap: 10px;
  }
  .edit-btns-div button {
    padding: 10px 20px;
  }
  .edit-select-box {
    position: absolute;
    scale: 1.5;
    right: 20px;
    top: 20px;
  }
  .cancel-btn {
    background-color: #252b61;
    color: white;
    border-radius: 50%;
    padding: 2px;
  }
  .patient-overview {
    border-radius: 10px 10px 0 0;
    border: 1px solid rgb(241, 232, 252);
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 18px 0px;
    padding: 10px;
  }
  .patient-overview h4 {
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.8;
    margin: 0px;
  }
  .patient-overview .overview-icon {
    text-align: center;
    margin: 0px;
  }
  .patient-overview .num {
    color: rgb(0, 0, 0);
    text-align: center;
    margin: 0px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.6px;
  }
  .patient-overview .totpat {
    color: rgb(0, 0, 0);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.42px;
  }
  .patient-overview .pat-cat {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .consult {
    border-radius: 10px;
    border: 1px solid rgb(241, 232, 252);
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 18px 0px;
    text-align: center;
    padding: 4px;
    margin: 0px 6px 6px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .overview-right {
    /* flex-basis: 35%; */
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .loading-center {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  .no-bookings {
    color: red;
  }
  .dashboard {
    font-family: inter;
    padding: 20px;
    /* background-color: #f8f9fa; */
  }
  .heading {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-header {
    display: flex;
    flex-direction: column;
  }

  .name {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .doctor-name {
    margin-bottom: 0px;
    font-size: 32px;
    font-weight: 800;
    color: #202224;
  }

  .rating {
    .star {
      color: #fbbd14;
    }
    font-size: 16px;
    font-weight: 600;
    color: #000;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .welcome-text {
    font-size: 16px;
    letter-spacing: 0.04em;
    font-weight: 500;
    color: #141414;
    text-align: left;
    opacity: 0.8;
    margin-bottom: 0px;
    margin-top: 4px;
  }

  .action-buttons {
    display: flex;
    gap: 10px;
  }

  .add-patient-btn,
  .create-appointment-btn {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .add-patient-btn {
    background-color: #007bff;
    color: white;
  }

  .create-appointment-btn {
    background-color: #6c757d;
    color: white;
  }

  /* Cards Section */
  .cards-container {
    display: flex;
    grid-template-columns: 1fr 1fr 0.5fr;
    gap: 20px;
    margin-top: 20px;
    justify-content: space-between;
  }

  .card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1;
    text-align: center;
  }

  .card-header {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 10px;
  }

  .card-highlight {
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
  }

  .rating-card {
    background-color: #eaf7f0;
  }

  .rating-number {
    font-size: 32px;
    font-weight: bold;
    color: #28a745;
  }

  .rating-text,
  .reviews-text {
    font-size: 14px;
    color: #6c757d;
  }

  .add-patient {
    background-color: white;
    border-radius: 25px;
    border: 1px solid #252b61;
    padding: 10px 20px;

    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: #252b61;
  }

  .pd-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .infoDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .info-card {
    width: 100%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .ratingCard {
    width: fit-content;
    height: fit-content;
    min-width: 200px;
    min-height: 230px;
  }

  .info-card-main {
  }

  .info-card-third {
    padding: 17px 17px 0px 17px;
  }

  .card-header {
    display: flex;
    justify-content: flex-end;
  }

  .dropdown {
    padding: 4px 8px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #333;
    background-color: white;
    cursor: pointer;
    outline: none;
  }
  .footer {
    background-color: rgba(146, 189, 246, 0.3);
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #252b61;
      margin-bottom: 0px;
    }
  }

  .left-side {
    flex-basis: 70%;
  }

  .footer-two {
    background-color: rgba(240, 218, 105, 0.3);
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #252b61;
      margin-bottom: 0px;
    }
  }

  .footer-three {
    background-color: rgba(163, 218, 194, 0.3);
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 16px;
      font-weight: 500;
      color: #252b61;
      margin-bottom: 0px;
    }
  }

  .arrow-icon {
    color: #252b61;
    width: 24px;
    height: 24px;
  }
  .sort-dropdown {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  .sort-btn {
    border-radius: 69px;
    background-color: #fff;
    border: 1px solid #252b61;
    padding: 7px;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.03em;
    font-weight: 500;
    color: #252b61;
  }

  .dropdown-menu {
    position: absolute;

    left: 5rem;
    display: block !important;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 0px;
    overflow: hidden;
    z-index: 10;
  }

  .dropdown-item {
    border-bottom: 1px solid #d6cece;
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  .top-heading {
    p {
      margin-bottom: 0px;
      font-size: 20px;
      font-weight: 500;
      color: #000;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .star-icon {
    font-size: 2rem;
    color: #fbbd14;
  }

  .rating-number {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    gap: 5px;
    color: #000;
    margin: 0;
  }

  .rating-description {
    font-size: 16px;
    color: #6c757d;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .patient-table {
    .header {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      margin-top: 31px;
      margin-bottom: 15px;
      align-items: center;
      h2 {
        font-size: 22px;
        font-weight: 500;
        color: #000;
      }
      .view-all {
        background-color: white;
        border-radius: 25px;
        border: 1px solid #252b61;
        padding: 7px 20px;

        cursor: pointer;
        font-size: 14px;
        letter-spacing: 0.03em;
        font-weight: 500;
        color: #252b61;
      }
    }
  }

  .table-container {
    overflow: auto;
    border-radius: 20px;
    border: 1px solid #d6cece;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #d6cece;
    }

    tr:last-child {
      border-bottom: none;
    }

    th {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      text-align: center;
      padding: 10px;
    }
    td {
      font-size: 16px;
      font-weight: 400;
      color: #000;
      padding: 10px;
      text-align: center;
    }

    thead {
      background-color: #e9f2fd;
      font-weight: bold;
      border: 2px solid white;
      border-bottom: none;
    }

    .name {
      color: blue;
      cursor: pointer;
    }

    .actions {
      .forward {
        color: #252b61;
        cursor: pointer;
      }
    }

    .Prescription {
      text-decoration: underline;
      color: #252b61;
    }
  }

  .clickable {
    cursor: pointer;
    color: #252b61;
  }

  .dashboard-container {
    display: flex;
    padding: 40px 52px 40px 32px;
    justify-content: center;
  }

  .right-side {
    flex-basis: 30%;
    .calender {
      position: sticky;
      top: 10px;

      .container {
        /* max-width: 400px;
        margin: 0 auto; */

        box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        background-color: #fff;
        padding: 0px;
      }

      .calender-footer {
        padding: 25px;
      }

      .calender-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e9f2fd;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border: 2px solid #fff;
        padding: 20px;
        .edit-button {
          border: #252b61;

          .edit {
            border-radius: 69px;

            color: #252b61;
            cursor: pointer;
            background-color: #e9f2fd;
            font-size: 18px;
            letter-spacing: 0.03em;
            font-weight: 500;
            padding: 5px 30px;
            gap: 5px;
            display: flex;
            align-items: center;
          }
        }
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .nav-button {
        background: none;
        border: none;
        color: #252b61;
        cursor: pointer;
      }

      .month-title {
        font-size: 20px;
        font-weight: 500;
        color: #161616;
        margin-bottom: 0px;
      }

      .calendar {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 16px;
      }

      .date {
        width: 55px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 14px;
        cursor: pointer;
      }

      .inactive-date {
        background-color: #faf3f6;
        font-size: 18.3px;
        font-weight: 500;
        color: #000;
      }

      .active-date {
        background-color: #252b61;
        font-size: 19.9px;
        font-weight: 600;
        color: #fff;
      }

      .section-upcoming {
        padding: 10px 0px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        .heading-upcoming {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0px;
          cursor: pointer;
        }
        .section-title-upcoming {
          font-size: 16px;
          font-weight: 600;
          color: #0000ff;
          margin-bottom: 0px;

          span {
            font-size: 14px;
          }
        }
      }
      .appointment-list {
        max-height: 360px;
        overflow-y: auto;
        padding-right: 10px;
      }

      .appointment-list::-webkit-scrollbar {
        width: 10px;
      }

      .appointment-list::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 10px;
        width: 4px;
      }

      .appointment-list::-webkit-scrollbar-track {
        background: #f5f5f5;
        border-radius: 10px;
        width: 10px;
      }

      .appointment {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        background-color: #fff;
        border: 1px solid #f0f0f0;
        margin: 12px 0px;
      }

      .date-section {
        border-radius: 11px;
        background-color: #e9f2fd;
        border: 1px solid #eaeaea;
        text-align: center;
        padding: 10px;
        width: 71px;
        margin-right: 10px;
      }

      .date-card {
        font-size: 18px;
        font-weight: 600;
        color: #000;
        margin: 0;
      }

      .month-card {
        font-size: 12px;
        font-weight: 600;
        color: #464646;
        margin: 0;
      }

      .type-card {
        font-size: 9px;
        letter-spacing: 0.02em;
        font-weight: 500;
        color: #737373;
        margin: 0;
      }
      .details-section {
        flex-grow: 1;
      }

      .name-card {
        font-size: 16px;
        letter-spacing: 0.02em;
        font-weight: 500;
        color: #000;
        margin: 5px 0px;
      }

      .time-card {
        font-size: 15px;
        letter-spacing: 0.02em;
        color: #000;
        margin: 3px 0px;
      }

      .location-card {
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #888;
        margin: 0px;
      }

      .forward-button {
        border: none;
        background: none;
        .forward {
          color: #252b61;
          cursor: pointer;
        }
      }

      .section-completed {
        padding: 10px 0px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        .heading-completed {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0px;
          cursor: pointer;
        }
        .section-title-completed {
          font-size: 16px;
          font-weight: 600;
          color: #0a770a;
          margin-bottom: 0px;

          span {
            font-size: 14px;
          }
        }
      }

      .section-canceled {
        padding: 10px 0px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        .heading-canceled {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0px;
          cursor: pointer;
        }
        .section-title-canceled {
          font-size: 16px;
          font-weight: 600;
          color: #ff0201;
          margin-bottom: 0px;

          span {
            font-size: 14px;
          }
        }
      }

      .view-all-buttons {
        display: flex;
        justify-content: center;
        .view-all-button {
          margin-top: 30px;
          padding: 10px 30px;

          font-size: 18px;
          letter-spacing: 0.03em;
          font-weight: 500;
          color: white;
          box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
          border-radius: 69px;
          background-color: #252b61;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .dashboard-container {
      flex-wrap: wrap-reverse;
    }
    .left-side,
    .right-side {
      width: 100%;
      flex-basis: 100%;
    }
    .calender{
      position: static;
      top: 0;
    }
  }
  @media screen and (max-width: 1300px) {
    .infoDiv {
      gap:10px;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 900px) {
    .cards-container {
      flex-direction: column;
    }
    .ratingCard {
      margin: auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    .table-container {
      max-width: 100%;
      overflow: scroll;
    }
    .heading {
      flex-direction: column;
    }
  }
`;
