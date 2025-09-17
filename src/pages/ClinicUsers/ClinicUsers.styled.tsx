import styled from "styled-components";

// export const MyPatientMobileStyled = styled.div`
//   width: 100%;
//   font-family: inter;
//   padding: 15px 10px;

//   .patient-create{
//     display:flex;
//     justify-content:space-between;
//     gap:10px;
//   }

//   .booking-mobile-body-div {
//     background-color: rgb(254, 254, 254);
//     padding: 0 5px;
//     margin-top: 15px;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
//   .options-btn {
//     background-color: white;
//     border: none;
//     padding: 0;
//   }

//   .booking-mobile-div-card {
//     border: 1px solid rgb(240, 240, 240);
//     padding: 7px;
//     border-radius: 15px;
//     display: flex;
//     justify-content: space-between;
//     box-shadow: 2px 4px 15px 0px #0000001a;

//     .booking-mobile-card-details {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//     }

//     .patient-img-box-mobile {
//       flex-basis: 67px;
//       height: 71px;
//       background-color: rgb(233, 242, 253);
//       border: 1px solid rgb(240, 240, 240);
//       border-radius: 15px;
//       overflow: hidden;
//       flex-shrink: 0;
//     }
//     .patient-img-box-mobile img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//     .booking-details-mobile {
//       display: flex;
//       flex-direction: column;
//       gap: 8px;
//       align-items: start;
//     }
//     .booking-details-mobile p {
//       margin: 0;
//     }

//     .patient-other-details {
//       font-family: Inter;
//       font-weight: 400;
//       font-size: 14px;
//       line-height: 16.94px;
//       letter-spacing: 0%;
//     }

//     .patient-name {
//       font-family: Inter;
//       font-weight: 500;
//       font-size: 16px;
//       line-height: 19.36px;
//       letter-spacing: 0%;
//       color: #252b61;
//     }

//     .pending-btn {
//       background-color: rgb(255, 0, 4);
//       border: none;
//       padding: 5px 15px !important;
//       border-radius: 20px;
//       cursor: pointer;
//       font-size: 16px;
//       color: white;
//     }
//   }

//   .booking-header-div {
//     display: flex;
//     justify-content: space-between;
//   }

//   .add-patient {
//     background-color: white;
//     border-radius: 25px;
//     border: 1px solid #252b61;
//     padding: 5px 15px !important;

//     cursor: pointer;
//     font-size: 16px;
//     letter-spacing: 0.02em;
//     font-weight: 500;
//     color: #252b61;
//   }
//   .filter {
//     background-color: white;
//     border: none;
//     padding: 5px 0 !important;

//     cursor: pointer;
//     font-size: 16px;
//     letter-spacing: 0.02em;
//     font-weight: 500;
//     color: #252b61;
//   }
//   .filter img {
//     width: 25px;
//     padding: 0 5px 0 0 !important;
//   }
// `;

export const ClinicUsersStyled = styled.div`
  width: 100%;
  padding: 30px 55px;
  font-family: inter;

  @media (max-width: 675px) {
    padding: 10px 20px;
    
    .top-header-responsive{
      flex-direction: column !important;
    }
    .filter-responsive{
      flex-wrap: wrap;
    }
  }


  .search-btn{
    background-color:rgba(146, 189, 246, 1);
    aspect-ratio: 1/1;
  }

  .search-box{
    padding-left:40px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap:15px;

    h2 {
      font-size: 24px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
    }
  }

  .add-patient {
    background-color: white;
    border-radius: 25px;
    border: 1px solid #252b61;
    padding: 6px 20px;

    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
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
    transition: background-color 0.3s ease;
  }

  .download-btn svg {
    color: #22336b;
    font-size: 14px;
  }

  .download-btn:hover {
    background-color: #a4dbc3;
  }

  .filter-container {
    display: flex;
    justify-content: end;
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
      font-size: 18px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: center;
      padding: 10px;
    }
    td {
      font-size: 18px;
      font-weight: 400;
      font-family: Inter;
      color: #000;
      padding: 10px;
      text-align: center;
      /* border-bottom: 1px solid #d6cece; */
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
      .edit-icon {
        color:rgba(37, 43, 97, 1);
        cursor: pointer;
        height: 31px;
        margin-right: 10px;
      }

      .delete-icon {
        color: red;
        cursor: pointer;
        height: 31px;
      }
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 10px;

    .arrows {
      display: flex;
      align-items: center;
      gap: 13px;
    }

    span {
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-family: Inter;
      color: #161616;
      input {
        width: 30px;
        text-align: center;
        border: 1px solid #252b61;
        border-radius: 8px;
        margin: 0 5px;
      }
    }
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
    font-family: Inter;
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

  .checking {
    width: 100%;
    position: relative;
    border-radius: 3px;
    border: 1px solid #000;
    box-sizing: border-box;
    height: 24px;
  }

  .clickable {
    cursor: pointer;
  }

  .buttons-down {
    display: flex;
    align-items: center;
    gap: 13px;
    .arrow-icon {
      font-size: 1.5rem;
      cursor: pointer;
    }

    .back-arrow-icon {
      display: flex;
      align-items: center;

      padding:5px;
      border: 1px solid #252b61;
      background-color: white;
      border-radius: 50%;
      cursor: pointer;
    }

    .page-btn {
      width: fit-content;
      display: flex;
      gap: 8px;
      align-items: center;
      background-color: #222;
      color: white;
      font-size: 14px;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-family: Inter;
      padding: 10px 20px;
      border-radius: 25px;
      cursor: pointer;
      border: none;
    }
  }

  .checkbox-tick {
    width: 24px;
    height: 24px;
  }
`;
