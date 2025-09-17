import styled from "styled-components";

export const OrderStyled = styled.div`
  width: 100%;
  padding: 30px 55px;
  font-family: inter;

  .completed-status {
    color: green;
  }

  @media (max-width: 675px) {
    padding: 15px 10px;

    .booking-create {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      scroll-behavior: smooth;
    }

    .date-number-span {
      font-family: Inter;
      font-weight: 600;
      font-size: 18px;
      line-height: 21.78px;
      text-align: center;
    }

    .booking-type {
      font-family: Inter;
      font-weight: 700;
      font-size: 9px;
      line-height: 10.89px;
      letter-spacing: 1.5%;
      text-align: center;
    }

    .date-month-name {
      font-family: Inter;
      font-weight: 600;
      font-size: 12px;
      line-height: 14.52px;
      text-align: center;
    }

    .load-more-btn-div {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    .red-call {
      background-color: rgb(255, 0, 4);
      color: white;
    }
    .yellow-call {
      background-color: rgb(255, 167, 0);
      color: white;
    }

    .completed-status-mobile {
      border: 1px solid green;
    }

    .status-mobile-div {
      display: flex;
      justify-content: center;
      align-items: baseline;
      min-width: 80px;
    }

    .other-status-mobile {
      border: 1px solid rgb(240, 218, 105);
    }

    .rejected-status-mobile {
      color: #ff0000 !important;
      border: 1px solid #ff0000;
    }

    .whole-center {
      gap: 2px;
    }

    .completed-status {
      color: green;
    }

    .status-btns {
      padding: 5px 10px;
      border-radius: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .pending-status-mobile {
      background-color: rgb(240, 218, 105);
    }

    .mobile-upcoming-status {
      background-color: rgb(255, 167, 0);
    }

    .booking-mobile-body-div {
      background-color: rgb(254, 254, 254);
      padding: 0 5px;
      margin-top: 15px;
      display: flex;
      gap: 15px;
      overflow: hidden;
      border-radius: 10px;
      flex-direction: column;
    }

    .booking-mobile-div-card {
      border: 1px solid rgb(240, 240, 240);
      padding: 7px;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      box-shadow: 2px 4px 15px 0px #0000001a;
      gap: 2px;

      .booking-mobile-card-details {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 50%;
      }
      .booking-details-mobile {
        min-width: 0;
      }

      .calender-box-mobile {
        width: 67px;
        height: 71px;
        padding: 9px 4px;
        background-color: rgb(233, 242, 253);
        border-radius: 11px;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 3px;
        flex-shrink: 0;
        border: 1px solid #f0f0f0;
      }
      .booking-details-slot {
        font-family: Inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 18.15px;
        letter-spacing: 1.5%;
      }
      .booking-details-type {
        color: #888888;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 1.5%;
      }
      .booking-details-name {
        font-family: Inter;
        font-weight: 500;
        font-size: 16px;
        line-height: 19.36px;
        margin-bottom: 5px !important;
      }

      .booking-details-mobile p {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .pending-btn {
        background-color: rgb(255, 0, 4);
        border: none;
        padding: 5px 15px !important;
        border-radius: 20px;
        cursor: pointer;
        font-size: 16px;
        color: white;
      }
    }

    .booking-header-div {
      display: flex;
      justify-content: space-between;
    }

    .add-patient {
      background-color: white;
      border-radius: 10px;
      border: 1px solid #252b61;
      padding: 5px 15px !important;

      cursor: pointer;
      font-size: 16px;
      letter-spacing: 0.02em;
      font-weight: 500;
      color: #252b61;
    }
    .filter {
      background-color: white;
      border: none;
      padding: 5px 0 !important;

      cursor: pointer;
      font-size: 16px;
      letter-spacing: 0.02em;
      font-weight: 500;
      color: #252b61;
    }
    .filter img {
      width: 25px;
      padding: 0 5px 0 0 !important;
    }
  }

  .table-loading {
    height: 200px;
  }
  .glowing-div-next {
    display: inline-block;
    background-color: #92bdf6;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-shadow: 0 0 5px #92bdf6;
    animation: glow-grow 1.5s infinite alternate ease-in-out;
  }
  @keyframes glow-grow {
    0% {
      transform: scale(1);
      box-shadow: 0 0 5px #92bdf6;
    }
    100% {
      transform: scale(1.5);
      box-shadow: 0 0 15px #92bdf6, 0 0 30px #92bdf6;
    }
  }

  .next-label {
    color: #ff0004 !important;
  }
  .all-label {
    color: rgb(34, 46, 98) !important;
  }
  .upcoming-label {
    color: rgb(0, 136, 45) !important;
  }
  .open-label {
    color: rgb(241, 157, 2) !important;
  }
  .rejected-label {
    color: rgb(34, 46, 98) !important;
  }

  .no-bookings-td {
    height: 150px;
    text-align: center;
    color: #22336b;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
  }
  .action-td {
    border-left: 1px solid #d6cece;
  }
  .action-div {
    display: flex;
    justify-content: center;
    /* grid-template-columns: repeat(3, 1fr); */
    justify-content: center;
    width: max-content;
    margin: 0;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }

    .action-btns-virtual {
      padding: 10px 20px;
      border: 1px solid #252b61;
      width: fit-content;
    }
  }

  .tab-container {
    margin-top: 10px;
    border-radius: 20px;
  }
  .tab {
    display: flex;
    padding: 8px 15px;
    border-radius: 7px;
    gap: 20px;
    background-color: #e9f2fd;
  }
  .tab-button {
    background: transparent;
    border: none;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .share-main-div {
    position: relative;
  }

  .share-top-header {
    background-color: #e9f2fd;
    padding: 9px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .share-close {
    background-color: #dcdcdc;
    border-radius: 100%;
    padding: 0px 4px;
  }
  .share-top-header p {
    font-size: 10px;
    margin: 0;
    text-align: left;
  }

  .share-div {
    overflow: hidden;
    position: absolute;
    z-index: 5;
    background-color: white;
    border-radius: 25px;
    width: 225px;
    height: 127px;
    animation: genieAppear 0.7s ease-out forwards;
    left: 10px;
    box-shadow: 0 0 10px #b6b6b6;
  }
  .share-items {
    padding: 0 20px;
  }
  .tab-button.active {
    background: white;
    color: #252b61;
    font-weight: 500;
    border: none;
  }
  .next-text {
    color: red;
  }
  .pending-text {
    color: #f19d02;
  }
  .rejected-text {
    color: #222e62;
  }

  .table-status-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  .upcoming-text {
    color: green;
  }
  .label-img {
    width: 20px;
  }

  .share-items-list-div {
    display: flex;
    gap: 10px;
    justify-content: left;
    align-items: center;
    margin: 5px 0;
  }
  .share-items-list-div:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  .share-items-list-div img {
    width: 25px;
    aspect-ratio: 1 / 1;
  }
  .share-items-list-div p {
    margin: 0;
  }

  @keyframes genieAppear {
    0% {
      opacity: 0;
      transform: scale(0.1) translate(-10%, -40%);
    }
    60% {
      opacity: 1;
      transform: scale(1.1) translate(-10%, -40%);
    }
    100% {
      transform: scale(1) translate(-10%, -40%);
    }
  }

  .heading {
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #000;
      text-align: left;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #000;
      text-align: left;
      opacity: 0.7;
      margin-bottom: 10px;
    }
  }
  .filter-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15.5px;
  }
  .add-patient {
    background-color: white;
    border-radius: 25px;
    border: 1px solid #252b61;
    padding: 10px 20px;
    text-wrap: nowrap;

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

  .download-btn {
    background-color: #c8ebd8;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 16px;
    transition: background-color 0.3s ease;
  }

  .download-btn svg {
    color: #22336b;
    font-size: 14px;
  }

  .download-btn:hover {
    background-color: #a4dbc3;
  }
  .sort-dropdown {
    position: relative;
    display: inline-block;
  }

  .sort-btn {
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
    border-radius: 69px;
    background-color: #fff;
    border: 1px solid #252b61;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 500;
    color: #252b61;
  }

  .dropdown-menu {
    position: absolute;

    left: 1rem;
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

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    gap: 10px;

    .arrows {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    .arrow-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .back-arrow-icon {
      display: flex;
      align-items: center;
      padding: 5px;
      border: 1px solid #252b61;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }

    .page-btn {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 100%;
      background-color: #252b61;
      border: 1px solid #252b61;
      color: white;
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
    }

    span {
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      color: #161616;
      input {
        width: 60px;
        padding: 10px 16px;
        color: #252b61;
        text-align: left;
        border: 1px solid #252b61;
        border-radius: 8px;
        margin: 0 5px;
      }
    }
  }

  .table-container {
    overflow: auto;
    border-radius: 20px;
    margin-top: 15px;
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
  }
  th {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: center;
    padding: 10px;
  }

  th:first-child {
    border-top-left-radius: 20px;
  }

  th:last-child {
    border-top-right-radius: 20px;
  }
  td {
    font-size: 16px;
    font-weight: 500;
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

  th {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    text-align: center;
    padding: 10px;
  }

  th:first-child {
    border-top-left-radius: 20px;
  }

  th:last-child {
    border-top-right-radius: 20px;
  }

  .name {
    color: #252b61;
    font-size: 16px;
    cursor: pointer;
  }

  .report p {
    color: #252b61;
    font-size: 16px;
    margin-bottom: 0px;
    text-decoration: underline;
  }

  .report a:hover {
    text-decoration: underline;
  }

  .status {
    width: 100%;
    padding: 20px 10px;
    border-radius: 69px;
    font-size: 14px;
    letter-spacing: 0.03em;
    font-weight: 500;
    text-align: center;
    display: inline-block;
  }

  .status img {
    width: 15px;
    height: 16px;
  }
  .status p {
    margin: 0;
  }

  .rejected {
    color: #ff0000 !important;
    border: 1px solid #ff0000 !important;
    background-color: #fff !important;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
  }

  .upcoming {
    color: #252b61;
    border: 1px solid #252b61;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
  }

  .pending {
    color: #000000;
    border: 1px solid #f0da69;
    background-color: #f0da69;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    align-items: center;
  }
  .others {
    color: #252b61;
    border: 1px solid #252b61;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
    padding: 10px 10px;
  }

  .status-icon {
    height: 16px;
    width: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon-all {
    display: flex;
    gap: 8px;
  }
  .icon {
    height: 22px;
    width: 22px;
    cursor: pointer;
  }

  .call-btn-width {
    width: 130px;
  }

  .call-btn {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: #ffa700;
    border: 2px solid #ffa700;
    color: white;
    padding: 10px 15px;
    border-radius: 38px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;

    .logo-icon-2 {
      height: 13.5px;
      width: 13.5px;
    }
  }
  .call-btn-upcoming {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: rgb(255, 0, 4);
    border: 2px solid rgb(255, 0, 4);
    color: white;
    padding: 10px 15px;
    border-radius: 38px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #fff;

    .logo-icon-2 {
      height: 13.5px;
      width: 13.5px;
    }
  }

  .disabled-btn {
    display: flex;
    gap: 23px;
    align-items: center;
    justify-content: left;
    background: rgb(128, 128, 128);
    border: 2px solid rgba(128, 128, 128, 0.5);
    padding: 10px 15px;
    border-radius: 38px;
    cursor: not-allowed;
    font-size: 14px;
    font-weight: 500;
    color: white;

    .logo-icon {
      height: 13.5px;
      width: 13.5px;
    }
  }
`;
