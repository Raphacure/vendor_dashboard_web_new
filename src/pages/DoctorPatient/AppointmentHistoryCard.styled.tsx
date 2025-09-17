import styled from "styled-components";

export const AppointmentHistoryCardStyled = styled.div`
  width: 100%;
  padding: 10px 10px 0 10px;
  position: sticky;

  @media (max-width: 675px) {
    padding: 0 !important;
    .view-rx-btn {
      text-wrap:nowrap;
      padding: 4px 5px !important;
    }

    .symptoms-text {
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .appointment-type {
      color: black;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .appointment-card {
      padding: 0 !important;
      border-left: none !important;
      box-shadow: none;
      box-shadow: none !important;
      border: 1px solid rgb(235, 235, 235) !important;
    }
    .date-box {
      padding: 10px 22px !important;
      max-width: 77.7px;
    }
    .left-panel {
      padding: 0 !important;
      display: flex;
      gap: 10px;
    }
    .summary {
      padding: 5px;
      gap: 5px;
      align-items: center;
    }
  }

  .sticky-header {
    position: relative;
    margin-bottom: 0px;
    z-index: 10;
    font-size: 18px;
    font-weight: 600;
    font-family: Inter;
    color: #212529;
  }

  .appointments {
    max-height: 500px;
    overflow-y: auto;
    padding: 10px 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .appointments::-webkit-scrollbar {
    display: none;
  }

  .appointment-card {
    width: 100%;
    border-left: 7px solid #252b61;
    background-color: #fff;
    border-radius: 7px;
    padding: 16px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;

    .summary {
      display: flex;
      /* align-items: center; */
      justify-content: space-between;
    }

    .details {
      display: flex;
      flex: 1;
      padding-left: 77px;
      padding-top: 6px;
    }

    .detail {
      display: flex;
      flex: 1;
      padding-left: 32px;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    .info {
      margin-top: 5px;
      flex: 1;

      strong {
        font-size: 16px;
        font-weight: 600;
        font-family: Inter;
        color: #000;
      }

      ul {
        display: flex;
        gap: 5px;
        padding-left: 1rem;
        flex-direction: column;
      }

      li {
        font-size: 16px;
        font-family: Inter;
        color: #000;
      }
    }

    .expand-btn {
      background: none;
      border: none;
      color: #252b61;
      font-size: 24px;
      cursor: pointer;
    }

    .expanded-section {
      padding: 0px 21px;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .expanded-section::-webkit-scrollbar {
      display: none;
    }

    table {
      width: 100%;
    }

    .table-header th:first-child {
      border-top-left-radius: 20px;
    }

    .table-header th:last-child {
      border-top-right-radius: 20px;
    }

    th,
    td {
      border-bottom: 1px solid #ddd;
      border-right: none;
      border-left: none;
      text-align: left;
      padding: 8px;

      text-align: left;
      font-size: 16px;
      font-family: Inter;
      color: #000;
    }

    th:last-child,
    td:last-child {
      border-right: none;
    }

    th {
      background-color: #bbe9ff;
      font-size: 18px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
    }
  }

  .appointment-card::-webkit-scrollbar {
    display: none;
  }

  .left-panel {
    .date-box {
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-radius: 15.31px;
      background-color: #bbe9ff;
      text-align: center;

      width: 100%;

      .date {
        font-size: 25.65px;
        font-weight: 500;
        font-family: inter;
        color: #252b61;
      }

      .month {
        font-size: 16px;
        font-family: Inter;
        color: #252b61;
      }
    }
    h3 {
      font-size: 16px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      margin: 10px 5px;
    }
  }

  .more {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: Inter;
    color: #000;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .left-panel {
    padding-left: 31px;
  }

  .first-detail {
    margin-bottom: 0px;
    font-size: 20px;
    display: flex;
    gap: 52px;

    font-family: Inter;
    color: #000;
  }

  .extra-details p {
    font-size: 20px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
  }

  .table-2 {
    margin-top: 42px;
  }

  .table-1 {
    margin-top: 10px;
  }

  .advice {
    padding: 20px 0 0 0;
    .p1 {
      font-size: 18px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      margin-bottom: 10px;
    }

    .p2 {
      font-size: 16px;
      font-weight: 400;
      font-family: Inter;
      color: #000;
    }
  }
`;
