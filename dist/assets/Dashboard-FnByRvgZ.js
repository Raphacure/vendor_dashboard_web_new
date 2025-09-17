import{d as ct,r as i,j as e,cV as St,u as Pt,a as Yt,b as Tt,bN as Y,c as et,cn as u,d5 as kt,bR as Ut,d6 as Bt,f as V,d7 as E,d8 as Gt,d9 as $t,m as qt,da as Ht,db as Zt,b_ as Vt,cB as Wt,S as z,dc as W,dd as R,cm as T,R as lt,de as Rt}from"./index-ChUmNm8R.js";import{A as It}from"./AddPatientForm-7FK6nVSq.js";import{P as Qt,a as Jt,C as Kt}from"./PieChart-CtlXezVH.js";import{S as tt}from"./SecoundaryButton-goiA8OO9.js";import{a as Xt}from"./index-Ds72tj9v.js";import{B as es}from"./BookingModals-CERPOe7c.js";import{C as ts}from"./CustomModal-Ds0Ku9jR.js";import{C as ss}from"./Community-Cfkum9Ew.js";import{S as as}from"./Skeleton-D7MyXb_N.js";import"./AddressAutoComplete-CKisEBlA.js";import"./CustomSpinLoader-CrgQ8bNq.js";import"./clsx-B-dksMZM.js";import"./BookingDetailsModal-HSRnt7fr.js";import"./prescriptionService-el3J9jP_.js";import"./utils-CjlqjNT0.js";import"./doctorUsersService--bmGzTWH.js";import"./useHasPermission-B8Y_MdsF.js";import"./useUploadToS3-CcI0wiNy.js";import"./ProfileService-D5sxIXUd.js";import"./index-BZKwATQs.js";import"./Upload-CTnVjxYJ.js";import"./DownOutlined-z3I3nDv9.js";import"./collapse-BbEVqHco.js";import"./fade-8FE2cY_X.js";import"./useForceUpdate-jQjUdsvY.js";import"./button-D0Rmo6Y5.js";import"./LeftOutlined-lLzXux5-.js";import"./CheckOutlined-DPOLd74P.js";import"./DeleteOutlined-LwZaW3bw.js";import"./EyeOutlined-BGetrG_9.js";import"./UploadOutlined-BeGctQLo.js";import"./index-D9Bv3C6k.js";import"./useIcons-CDf6lDIp.js";import"./index-CSCB4ib3.js";import"./row-B9qA-Efv.js";import"./index-Ctpo8ZnH.js";import"./Input-ClusE8wk.js";import"./index-1XTAFx_Q.js";import"./createLucideIcon-D1dtiQRH.js";import"./CustomTab-sR3kUFYQ.js";import"./index-DmdwV89h.js";import"./index-BsLI0Qln.js";import"./index-B3SopV5_.js";import"./styleChecker-DD0Z1krI.js";import"./index-D6J9e9i1.js";import"./TextArea-C37Yo_Hy.js";import"./index-Ce5gUteX.js";import"./useClosable-B1XNXU5S.js";import"./extendsObject-78o_rR5W.js";import"./index-8lg37tdn.js";import"./dayjs.min-BA1p4t9P.js";import"./index-DC3reArS.js";import"./Table-BhIN-nUr.js";import"./addEventListener-D7w6vIGx.js";import"./useBubbleLock-BnnxIxI9.js";import"./dropdown-C4zMWtkZ.js";import"./index-De2sQM66.js";import"./useForm-CIMDi_Qk.js";import"./Pagination-BbDnNTXA.js";import"./Table-CT4iqjp7.js";import"./Accordium-D_-yQ0k_.js";import"./AllCommunities-Drovve2Q.js";import"./index-DYe-NdTs.js";import"./CustomPagination-BfzEq6pA.js";import"./index-gapj9Wcb.js";import"./chevron-down-u38pTTSM.js";import"./users-BRwWMaN2.js";const rs=ct.div`
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
`,st=ct.div`
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
`,at=c=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,viewBox:"0 0 12 12",fill:"none",...c},i.createElement("circle",{cx:6,cy:6,r:6,transform:"matrix(1 0 0 -1 0 12)",fill:"#FBBC04"}),i.createElement("circle",{cx:6,cy:6,r:5.9,transform:"matrix(1 0 0 -1 0 12)",stroke:"black",strokeOpacity:.25,strokeWidth:.2})),rt=c=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,viewBox:"0 0 12 12",fill:"none",...c},i.createElement("circle",{cx:6,cy:6,r:6,transform:"matrix(1 0 0 -1 0 12)",fill:"#A0AAFD"}),i.createElement("circle",{cx:6,cy:6,r:5.9,transform:"matrix(1 0 0 -1 0 12)",stroke:"black",strokeOpacity:.25,strokeWidth:.2})),it=c=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,viewBox:"0 0 12 12",fill:"none",...c},i.createElement("circle",{cx:6,cy:6,r:6,transform:"matrix(1 0 0 -1 0 12)",fill:"#F77373"}),i.createElement("circle",{cx:6,cy:6,r:5.9,transform:"matrix(1 0 0 -1 0 12)",stroke:"black",strokeOpacity:.25,strokeWidth:.2})),k=c=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:30,height:27,viewBox:"0 0 30 27",fill:"none",...c},i.createElement("rect",{opacity:.9,width:29.3442,height:26.965,rx:9,fill:"#559DF3"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3336 10.8385C15.3336 10.2776 15.5564 9.73969 15.953 9.34307C16.3496 8.94645 16.8876 8.72363 17.4485 8.72363C18.0094 8.72363 18.5473 8.94645 18.9439 9.34307C19.3405 9.73969 19.5634 10.2776 19.5634 10.8385C19.5634 11.3994 19.3405 11.9374 18.9439 12.334C18.5473 12.7306 18.0094 12.9534 17.4485 12.9534C16.8876 12.9534 16.3496 12.7306 15.953 12.334C15.5564 11.9374 15.3336 11.3994 15.3336 10.8385ZM15.3336 14.0109C14.6324 14.0109 13.96 14.2894 13.4642 14.7852C12.9685 15.281 12.6899 15.9534 12.6899 16.6545C12.6899 17.0752 12.8571 17.4786 13.1545 17.7761C13.452 18.0736 13.8554 18.2407 14.2761 18.2407H20.6208C21.0415 18.2407 21.4449 18.0736 21.7424 17.7761C22.0399 17.4786 22.207 17.0752 22.207 16.6545C22.207 15.9534 21.9285 15.281 21.4327 14.7852C20.9369 14.2894 20.2645 14.0109 19.5634 14.0109H15.3336Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.78181 10.8385C9.78181 10.2776 10.0046 9.73969 10.4012 9.34307C10.7979 8.94645 11.3358 8.72363 11.8967 8.72363C12.4576 8.72363 12.9955 8.94645 13.3922 9.34307C13.7888 9.73969 14.0116 10.2776 14.0116 10.8385C14.0116 11.3994 13.7888 11.9374 13.3922 12.334C12.9955 12.7306 12.4576 12.9534 11.8967 12.9534C11.3358 12.9534 10.7979 12.7306 10.4012 12.334C10.0046 11.9374 9.78181 11.3994 9.78181 10.8385ZM9.78181 14.0109C9.08068 14.0109 8.40826 14.2894 7.91248 14.7852C7.41671 15.281 7.13818 15.9534 7.13818 16.6545C7.13818 17.0752 7.3053 17.4786 7.60276 17.7761C7.90023 18.0736 8.30368 18.2407 8.72436 18.2407H15.0691C15.4897 18.2407 15.8932 18.0736 16.1907 17.7761C16.4881 17.4786 16.6552 17.0752 16.6552 16.6545C16.6552 15.9534 16.3767 15.281 15.8809 14.7852C15.3852 14.2894 14.7127 14.0109 14.0116 14.0109H9.78181Z",fill:"white"}),i.createElement("path",{opacity:.99,d:"M16.8947 7.55893L16.5411 7.91248L16.8947 7.55893C16.3051 6.96939 15.5055 6.63818 14.6718 6.63818C13.838 6.63818 13.0385 6.96939 12.4489 7.55893C11.8594 8.14847 11.5282 8.94807 11.5282 9.78181C11.5282 10.6155 11.8594 11.4151 12.4489 12.0047C13.0385 12.5942 13.838 12.9254 14.6718 12.9254C15.5055 12.9254 16.3051 12.5942 16.8947 12.0047C17.4842 11.4151 17.8154 10.6155 17.8154 9.78181C17.8154 8.94807 17.4842 8.14847 16.8947 7.55893ZM12.0282 13.2472C11.0191 13.2472 10.0514 13.6481 9.33795 14.3616C8.62447 15.0751 8.22363 16.0428 8.22363 17.0518C8.22363 17.7102 8.4852 18.3417 8.9508 18.8073C9.4164 19.2729 10.0479 19.5345 10.7064 19.5345H18.6372C19.2957 19.5345 19.9272 19.2729 20.3928 18.8073C20.8584 18.3417 21.1199 17.7102 21.1199 17.0518C21.1199 16.0428 20.7191 15.0751 20.0056 14.3616C19.2921 13.6481 18.3244 13.2472 17.3154 13.2472H12.0282Z",fill:"white",stroke:"#66A7F4"})),ot=c=>{const{data:l}=c,j=["rgb(160, 170, 253)","#00FF00","#FF6A6A"],d=l==null?void 0:l.map((x,v)=>({name:`Group ${v}`,value:Number(x.total),color:(j==null?void 0:j[v])??"#FFD700"}));return e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(Qt,{width:100,height:100,children:e.jsx(Jt,{data:d,innerRadius:30,outerRadius:50,fill:"#8884d8",paddingAngle:0,dataKey:"value",children:d==null?void 0:d.map((x,v)=>e.jsx(Kt,{fill:x.color},`cell-${v}`))})})})};function is(c){return St({attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},child:[]}]})(c)}const I=e.jsx(lt,{style:{fontSize:34},spin:!0}),Q=e.jsx(lt,{style:{fontSize:20},spin:!0}),os=[{name:"Quick Links",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",nav:"/quick-links",state:{name:"Quick Links"}},{name:"Orders",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258207943.png",nav:"/orders",state:{name:"Orders"}},{name:"Bookings",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258207943.png",nav:"/bookings",state:{name:"Bookings"}},{name:"My Calender",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741240520356.png",nav:"/calendar",state:{name:"My Calender"}},{name:"My Employee",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258597115.png",nav:"/employees",state:{name:"My Employee"}}],nt=[{name:"Clients",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419622833.png",nav:"/MyClients",state:{name:"My Clients"}},{name:"Community",img:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419792542.png",nav:"/communities",state:{name:"Community"}}],Ma=()=>{var re,ie,oe,ne,ce,le,de,pe,xe,me,he,fe,ue,ge,je,ve,be,S,we,Ne,ye,Ce,Ee,ze,Me,Ae,Oe,Fe,De,Le,_e,Se;const c=Pt(),l=Yt(),{clientDetails:j,linkableId:d}=Tt(),[x,v]=i.useState("UPCOMING"),[b,dt]=i.useState(!1),[w,J]=i.useState([]),[N,U]=i.useState(_(Y())),[y,pt]=i.useState(!1),[C,xt]=i.useState({}),[ns,K]=i.useState(!0),[g,cs]=i.useState({}),[mt,ls]=i.useState(!1),{data:o,error:ds,loading:ps}=et(t=>t.dashboard.dashboardInfo),[ht,B]=i.useState(null),[ft,G]=i.useState(""),[ut,L]=i.useState(!1),gt=()=>{L(!1),B(null),G("")},jt=()=>{L(!0)},vt=()=>{L(!1),B(null),G("")},bt=i.useCallback((t,s={})=>{["booking_details"].includes(t)&&(G(t),B(s),L(!0))},[]);function _(t){return[t.clone().subtract(2,"days"),t.clone().subtract(1,"day"),t.clone(),t.clone().add(1,"day"),t.clone().add(2,"days")]}const wt=()=>{U(t=>_(t[2].clone().add(1,"month")))},Nt=()=>{U(t=>_(t[2].clone().subtract(1,"month")))},[n,yt]=i.useState({}),{user:Ct}=et(t=>t.auth),X=async()=>{var t,s,a,r,p,O,F,Pe,Ye,Te,ke,Ue,Be,Ge,$e,qe,He,Ze,Ve,We,Re,Ie,Qe,Je,Ke,Xe;if(!d){u.error("Client Id not found");return}try{const P={from:"hr",id:d,type:null,dateRange:{dateType:"scheduled",from:(t=N[2])==null?void 0:t.format("YYYY-MM-DD"),to:(s=N[2])==null?void 0:s.format("YYYY-MM-DD")}},[m,h,f]=await Promise.allSettled([c(T({filters:{...P,status:"booking_scheduled"}})),c(T({filters:{...P,status:"cancelled"}})),c(T({filters:{...P,status:"completed"}}))]),D={};((r=(a=h==null?void 0:h.value)==null?void 0:a.meta)==null?void 0:r.requestStatus)==="fulfilled"?D.CANCELED=(O=(p=h==null?void 0:h.value)==null?void 0:p.payload)==null?void 0:O.data:((Pe=(F=h==null?void 0:h.value)==null?void 0:F.meta)==null?void 0:Pe.requestStatus)==="rejected"&&u.error(((Te=(Ye=h==null?void 0:h.value)==null?void 0:Ye.error)==null?void 0:Te.message)??"Unknown Error Occured"),((Ue=(ke=f==null?void 0:f.value)==null?void 0:ke.meta)==null?void 0:Ue.requestStatus)==="fulfilled"?D.COMPLETED=(Ge=(Be=f==null?void 0:f.value)==null?void 0:Be.payload)==null?void 0:Ge.data:((qe=($e=f==null?void 0:f.value)==null?void 0:$e.meta)==null?void 0:qe.requestStatus)==="rejected"&&u.error(((Ze=(He=f==null?void 0:f.value)==null?void 0:He.error)==null?void 0:Ze.message)??"Unknown Error Occured"),((We=(Ve=m==null?void 0:m.value)==null?void 0:Ve.meta)==null?void 0:We.requestStatus)==="fulfilled"?D.UPCOMING=(Ie=(Re=m==null?void 0:m.value)==null?void 0:Re.payload)==null?void 0:Ie.data:((Je=(Qe=m==null?void 0:m.value)==null?void 0:Qe.meta)==null?void 0:Je.requestStatus)==="rejected"&&u.error(((Xe=(Ke=m==null?void 0:m.value)==null?void 0:Ke.error)==null?void 0:Xe.message)??"Unknown Error Occured"),console.log("updatedBookings",D),yt(_t=>({..._t,...D}))}catch{u.error("Unexpected error")}finally{pt(!1)}};i.useEffect(()=>{X()},[Ct,N,c,d]),i.useEffect(()=>{(async()=>{var s,a;if(!d){u.error("Client Id not found");return}try{K(!0);const r=await c(T({filters:{from:"hr",id:d,type:null,count:5,status:"completed"}}));if(r!=null&&r.error){u.error(((s=r==null?void 0:r.error)==null?void 0:s.message)||"Unknown Error Occured");return}xt((a=r==null?void 0:r.payload)==null?void 0:a.data)}catch{u.error("Failed to get Bookings")}finally{K(!1)}})()},[d]),i.useEffect(()=>{d||u.error("Client Id not found"),c(kt({clientId:d}))},[d,c]);const $=t=>{if(x===t){v(null);return}v(t)},[ee,q]=i.useState(!1),[xs,ms]=i.useState(!1),Et=()=>{l("/bookings?tab=all")},zt=()=>{l("/bookings?tab=all")},te=()=>{dt(t=>!t),J([])};b&&(x==="COMPLETED"||x==="CANCELED")&&te();const Mt=t=>{J(s=>s.includes(t)?s.filter(a=>a!==t):[...s,t])},At=async t=>{var p;const a=await c(Rt({id:t,bookingObj:{status:"cancelled"}})),r=JSON.parse(JSON.stringify(a));if(r!=null&&r.error){u.error(((p=r==null?void 0:r.error)==null?void 0:p.message)??"unknown error occured");return}else u.success("Status updated successfully")},Ot=async()=>{(w==null?void 0:w.length)>0&&(await Promise.all(w.map(t=>At(t))),X())};console.log("edit",w);const se=(t,s)=>{l(t,{state:s})},[H,Z]=i.useState(!1);i.useEffect(()=>(H?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[H]);const[M,Ft]=i.useState(()=>{const t=localStorage.getItem("dashboard-favorites");return t?JSON.parse(t):[]}),[A,ae]=i.useState([]);i.useEffect(()=>{localStorage.setItem("dashboard-favorites",JSON.stringify(M))},[M]);const Dt=t=>{const s=nt.filter(a=>t.includes(a==null?void 0:a.name));Ft(s)};i.useEffect(()=>{ae(M.map(t=>t.name))},[]),i.useEffect(()=>{Dt(A)},[A]);const Lt=t=>{ae(s=>s.includes(t)?s.filter(a=>a!==t):s.length<3?[...s,t]:s)};return Ut()?e.jsxs(rs,{children:[e.jsxs("div",{className:"nav-box-container",children:[[...os,...Array.isArray(M)?M:[]].map(t=>e.jsxs("div",{className:"nav-box",children:[e.jsx("div",{className:"nav-box-div",onClick:()=>se(t==null?void 0:t.nav,t==null?void 0:t.state),children:e.jsx("img",{src:t==null?void 0:t.img,alt:t==null?void 0:t.name})}),e.jsx("p",{onClick:()=>se(t==null?void 0:t.nav,t==null?void 0:t.state),className:"nav-box-p",children:t.name})]})),e.jsxs("div",{className:"nav-box",children:[e.jsx("div",{onClick:()=>Z(!0),className:"nav-box-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258656062.png",alt:"Add Favorite"})}),e.jsx("p",{className:"nav-box-p",onClick:()=>Z(!0),children:A.length<3?"Add Favorite":"Remove Favorite"})]})]}),H&&e.jsxs("div",{className:"add-favorite-div",children:[e.jsxs("div",{className:"fav-header",children:[e.jsx("h3",{children:"Add Your Favorite"}),e.jsx(Bt,{onClick:()=>Z(!1)})]}),e.jsx("p",{children:"You Can Add Up To 2"}),e.jsx("div",{className:"fav-list-options",children:nt.map((t,s)=>e.jsxs("label",{className:"fav-list-options-div",children:[e.jsx("input",{type:"checkbox",checked:A.includes(t==null?void 0:t.name),onChange:()=>Lt(t==null?void 0:t.name)}),t.name,e.jsx("div",{className:"fav-radio-outer",children:e.jsx("div",{className:`fav-radio-inner ${A.includes(t==null?void 0:t.name)?"fav-radio-sel":""}`})})]},s))})]}),e.jsxs("div",{className:"view-patient-ask-div",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741260345922.png",alt:"doctor-head"})," ","View your employees details here."," ",e.jsx(Xt,{onClick:()=>l("/employees"),size:40})]}),e.jsx(st,{children:e.jsx("div",{className:"cards-container",children:e.jsxs("div",{className:"infoDiv",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-card-main grow-1",children:e.jsx("div",{className:"middle",children:e.jsx("div",{className:"overview-left grow-1",children:e.jsxs("div",{className:"patient-overview h-full",children:[e.jsx("h4",{children:"Employee Overview"}),e.jsxs("p",{className:"overview-icon",children:[" ",e.jsx(ot,{data:o==null?void 0:o.genderCounts})," "]}),e.jsx("p",{className:"num",children:((re=o==null?void 0:o.genderCounts)==null?void 0:re.reduce((t,s)=>t+Number(s==null?void 0:s.total),0))||0}),e.jsx("p",{className:"totpat",children:"Total Employee's"}),e.jsx("div",{className:"grid grid-cols-2 place-items-center",children:(ie=o==null?void 0:o.genderCounts)==null?void 0:ie.map((t,s)=>{const a=[e.jsx(at,{}),e.jsx(it,{}),e.jsx(rt,{})];return e.jsxs("p",{children:[a[s]," ",V(t==null?void 0:t.gender)," ",e.jsx("span",{children:(t==null?void 0:t.total)||0})]},s)})})]})},44)})}),e.jsxs("div",{onClick:()=>l("/employees"),className:"footer",children:[e.jsxs("p",{className:"footer-text",children:["Total"," ",((oe=o==null?void 0:o.genderCounts)==null?void 0:oe.reduce((t,s)=>t+Number(s==null?void 0:s.total),0))||0," ","Employees"," "]}),e.jsx(E,{className:"arrow-icon"})]})]}),e.jsxs("div",{className:"overview-right",children:[e.jsxs("div",{className:"consult",onClick:()=>{l("/bookings")},children:[e.jsx("p",{className:"icon-svg",children:e.jsx(k,{})}),e.jsx("p",{className:"totnumber",children:((ne=o==null?void 0:o.bookings)==null?void 0:ne.reduce((t,s)=>t+Number(s==null?void 0:s.count),0))||0}),e.jsxs("p",{children:["Total ",e.jsx("br",{}),"Consultation"]})]}),(le=(ce=o==null?void 0:o.bookings)==null?void 0:ce.slice(0,3))==null?void 0:le.map((t,s)=>e.jsxs("div",{className:"consult",onClick:()=>{l("/bookings")},children:[e.jsx("p",{className:"icon-svg",children:e.jsx(k,{})}),e.jsxs("p",{className:"totnumber",children:[(t==null?void 0:t.count)||880," "]}),e.jsx("p",{children:(()=>{var r,p;const a=(p=(r=t==null?void 0:t.status)==null?void 0:r.split)==null?void 0:p.call(r,"_");return e.jsxs(e.Fragment,{children:[(a==null?void 0:a[0])??"",(a==null?void 0:a[1])&&e.jsxs(e.Fragment,{children:[e.jsx("br",{})," ",a==null?void 0:a[1]]})]})})()})]},s))]})]})})})]}):e.jsxs(st,{children:[e.jsxs("div",{className:"dashboard-container",children:[e.jsxs("div",{className:"left-side",children:[e.jsxs("div",{className:"dashboard",children:[e.jsxs("div",{className:"heading",children:[e.jsx("div",{className:"dashboard-header",children:mt?e.jsx(e.Fragment,{children:e.jsx(as,{})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"name",children:[e.jsx("h3",{className:"doctor-name"}),e.jsx("div",{children:e.jsx("img",{className:"main-img-name-sec !w-[200px]",src:j==null?void 0:j.logo_url})}),((de=g==null?void 0:g.doctorDetails)==null?void 0:de.rating)!==null&&((pe=g==null?void 0:g.doctorDetails)==null?void 0:pe.rating)!==void 0&&e.jsxs("span",{className:"rating",children:[e.jsx(Gt,{className:"star"})," ",(me=(xe=g==null?void 0:g.doctorDetails)==null?void 0:xe.rating)==null?void 0:me.toFixed(2)]})]}),e.jsx("p",{className:"welcome-text",children:"let's review today's Employee schedule."})]})}),e.jsxs("div",{className:"pd-container",children:[e.jsx("button",{className:"add-patient",onClick:()=>q(!0),children:"Add Employee"}),ee&&e.jsx(ts,{headerClassName:"!px-2",open:ee,title:"Add Employee",handleClose:()=>q(!1),children:e.jsx(It,{closeForm:()=>q(!1)})})]})]}),e.jsx("div",{className:"cards-container",children:e.jsxs("div",{className:"infoDiv",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-card-main grow-1",children:e.jsx("div",{className:"middle",children:e.jsx("div",{className:"overview-left grow-1",children:e.jsxs("div",{className:"patient-overview h-full",children:[e.jsx("h4",{children:"Employee Overview"}),e.jsxs("p",{className:"overview-icon",children:[" ",e.jsx(ot,{data:o==null?void 0:o.genderCounts})," "]}),e.jsx("p",{className:"num",children:((he=o==null?void 0:o.genderCounts)==null?void 0:he.reduce((t,s)=>t+Number(s==null?void 0:s.total),0))||0}),e.jsx("p",{className:"totpat",children:"Total Employee's"}),e.jsx("div",{className:"grid grid-cols-2 place-items-center",children:(fe=o==null?void 0:o.genderCounts)==null?void 0:fe.map((t,s)=>{const a=[e.jsx(at,{}),e.jsx(it,{}),e.jsx(rt,{})];return e.jsxs("p",{children:[a[s]," ",V(t==null?void 0:t.gender)," ",e.jsx("span",{children:(t==null?void 0:t.total)||0})]},s)})})]})},44)})}),e.jsxs("div",{onClick:()=>l("/employees"),className:"footer",children:[e.jsxs("p",{className:"footer-text",children:["Total"," ",((ue=o==null?void 0:o.genderCounts)==null?void 0:ue.reduce((t,s)=>t+Number(s==null?void 0:s.total),0))||0," ","Employees"," "]}),e.jsx(E,{className:"arrow-icon"})]})]}),e.jsxs("div",{className:"overview-right",children:[e.jsxs("div",{className:"consult",onClick:()=>{l("/bookings")},children:[e.jsx("p",{className:"icon-svg",children:e.jsx(k,{})}),e.jsx("p",{className:"totnumber",children:((ge=o==null?void 0:o.bookings)==null?void 0:ge.reduce((t,s)=>t+Number(s==null?void 0:s.count),0))||0}),e.jsxs("p",{children:["Total ",e.jsx("br",{}),"Consultation"]})]}),(ve=(je=o==null?void 0:o.bookings)==null?void 0:je.slice(0,3))==null?void 0:ve.map((t,s)=>e.jsxs("div",{className:"consult",onClick:()=>{l("/bookings")},children:[e.jsx("p",{className:"icon-svg",children:e.jsx(k,{})}),e.jsxs("p",{className:"totnumber",children:[(t==null?void 0:t.count)||880," "]}),e.jsx("p",{children:(()=>{var r,p;const a=(p=(r=t==null?void 0:t.status)==null?void 0:r.split)==null?void 0:p.call(r,"_");return e.jsxs(e.Fragment,{children:[(a==null?void 0:a[0])??"",(a==null?void 0:a[1])&&e.jsxs(e.Fragment,{children:[e.jsx("br",{})," ",a==null?void 0:a[1]]})]})})()})]},s))]})]})}),e.jsxs("div",{className:"patient-table",children:[e.jsxs("div",{className:"header",children:[e.jsx("h2",{children:"Recent Employee History"}),e.jsx("button",{className:"view-all",onClick:Et,children:"View All"})]}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Serial No"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Age & Sex"}),e.jsx("th",{children:"Date & Time"}),e.jsx("th",{children:"Visit Type"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:((be=C==null?void 0:C.bookings)==null?void 0:be.length)>0?(we=(S=C==null?void 0:C.bookings)==null?void 0:S.map)==null?void 0:we.call(S,t=>{var s,a,r,p,O;return e.jsxs("tr",{children:[e.jsx("td",{className:"!text-blue-600 underline cursor-pointer",onClick:()=>bt("booking_details",t),children:t==null?void 0:t.id}),e.jsx("td",{className:"Prescription",children:e.jsx($t,{to:`/patients/detail/${(s=t==null?void 0:t.user)==null?void 0:s.id}`,children:qt((a=t==null?void 0:t.user)==null?void 0:a.first_name,(r=t==null?void 0:t.user)==null?void 0:r.last_name)})}),e.jsx("td",{children:`${(p=t==null?void 0:t.user)==null?void 0:p.age}, ${(O=t==null?void 0:t.user)==null?void 0:O.gender}`}),e.jsx("td",{children:`${Ht(t==null?void 0:t.collection_1_date)} / ${t.collection_1_slot||"N/A"}`}),e.jsx("td",{children:V(t==null?void 0:t.type)}),e.jsx("td",{className:"actions",onClick:()=>{var F;return l(`/employees/detail/${(F=t==null?void 0:t.user)==null?void 0:F.id}`)},children:e.jsx(E,{size:24,className:"forward"})})]},t==null?void 0:t.id)}):e.jsx("td",{className:"td-no-booking",colSpan:7,children:"No Bookings Available"})})]})})]})]}),e.jsx(ss,{})]}),e.jsx("div",{className:"right-side",children:e.jsx("div",{className:"calender",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"calender-header",children:[e.jsxs("div",{className:"header",children:[e.jsx("button",{onClick:Nt,disabled:b,className:"nav-button",children:e.jsx(Zt,{size:22})}),e.jsx("h2",{className:"month-title",children:(Ne=N[2])==null?void 0:Ne.format("MMMM YYYY")}),e.jsx("button",{onClick:wt,disabled:b,className:"nav-button",children:e.jsx(Vt,{size:22})})]}),e.jsx("div",{className:"edit-button",children:e.jsx("button",{onClick:te,className:"edit",children:b?e.jsxs(e.Fragment,{children:[e.jsx(is,{className:"cancel-btn"}),"Cancel"]}):e.jsxs(e.Fragment,{children:[e.jsx(Wt,{}),"Edit"]})})})]}),e.jsxs("div",{className:"calender-footer",children:[e.jsx("div",{className:"calendar",children:N==null?void 0:N.map((t,s)=>e.jsxs("div",{onClick:()=>!b&&U(_(t.clone())),className:`date ${s===2?"active-date":"inactive-date"}`,children:[t.format("DD")," "]},s))}),e.jsxs("div",{className:"section-upcoming",children:[e.jsxs("div",{className:"heading-upcoming",onClick:()=>$("UPCOMING"),children:[e.jsxs("h3",{className:"section-title-upcoming",children:["Upcoming"," ",e.jsxs("span",{children:["(",y?e.jsx(z,{indicator:Q}):((ye=n==null?void 0:n.UPCOMING)==null?void 0:ye.totalCount)??0,")"]})]}),e.jsx("span",{className:"icon",children:x==="UPCOMING"?e.jsx(W,{size:22}):e.jsx(R,{size:22})})]}),x==="UPCOMING"&&(y?e.jsx("div",{className:"loading-center",children:e.jsx(z,{indicator:I})}):(Ce=n==null?void 0:n.UPCOMING)!=null&&Ce.totalCount?e.jsx("div",{className:"appointment-list",children:(ze=(Ee=n==null?void 0:n.UPCOMING)==null?void 0:Ee.bookings)==null?void 0:ze.map((t,s)=>{var r;const a=Y((t==null?void 0:t.collection_1_date)??(t==null?void 0:t.collection_2_date));return e.jsxs("div",{className:"appointment",children:[e.jsxs("div",{className:"date-section",children:[e.jsx("p",{className:"date-card",children:a.date()}),e.jsx("p",{className:"month-card",children:a.format("MMM")}),e.jsx("p",{className:"type-card",children:"ONLINE"})]}),e.jsxs("div",{className:"details-section",children:[e.jsx("p",{className:"name-card",children:(r=t==null?void 0:t.user)==null?void 0:r.name}),e.jsx("p",{className:"time-card",children:(t==null?void 0:t.collection_1_slot)??(t==null?void 0:t.collection_2_slot)})]}),b?e.jsx("input",{onClick:()=>{Mt(t==null?void 0:t.id)},checked:w.includes(t==null?void 0:t.id),className:"edit-select-box",type:"checkbox"}):e.jsx("button",{className:"forward-button",onClick:()=>l("/bookings"),children:e.jsx(E,{onClick:()=>l("/bookings"),className:"forward",size:27})})]},s)})}):e.jsx("div",{className:"no-bookings loading-center",children:"No bookings available"}))]}),e.jsxs("div",{className:"section-completed",children:[e.jsxs("div",{className:"heading-completed",onClick:()=>$("COMPLETED"),children:[e.jsxs("h3",{className:"section-title-completed",children:["Completed"," ",e.jsxs("span",{children:["(",y?e.jsx(z,{indicator:Q}):((Me=n==null?void 0:n.COMPLETED)==null?void 0:Me.totalCount)??0,")"]})]}),e.jsx("span",{className:"icon",children:x==="COMPLETED"?e.jsx(W,{size:22}):e.jsx(R,{size:22})})]}),x==="COMPLETED"&&(y?e.jsx("div",{className:"loading-center",children:e.jsx(z,{indicator:I})}):(Ae=n==null?void 0:n.COMPLETED)!=null&&Ae.totalCount?e.jsx("div",{className:"appointment-list",children:(Fe=(Oe=n==null?void 0:n.COMPLETED)==null?void 0:Oe.bookings)==null?void 0:Fe.map((t,s)=>{var r;const a=Y((t==null?void 0:t.collection_1_date)??(t==null?void 0:t.collection_2_date),"DD/MM/YYYY");return e.jsxs("div",{className:"appointment",children:[e.jsxs("div",{className:"date-section",children:[e.jsx("p",{className:"date-card",children:a.date()}),e.jsx("p",{className:"month-card",children:a.format("MMM")}),e.jsx("p",{className:"type-card",children:"ONLINE"})]}),e.jsxs("div",{className:"details-section",children:[e.jsx("p",{className:"name-card",children:(r=t==null?void 0:t.user)==null?void 0:r.name}),e.jsx("p",{className:"time-card",children:(t==null?void 0:t.collection_1_slot)??(t==null?void 0:t.collection_2_slot)})]}),e.jsx("button",{className:"forward-button",children:e.jsx(E,{onClick:()=>l("/bookings"),className:"forward",size:24})})]},s)})}):e.jsx("div",{className:"no-bookings loading-center",children:"No bookings available"}))]}),e.jsxs("div",{className:"section-canceled",children:[e.jsxs("div",{className:"heading-canceled",onClick:()=>$("CANCELED"),children:[e.jsxs("h3",{className:"section-title-canceled",children:["Canceled"," ",e.jsxs("span",{children:["(",y?e.jsx(z,{indicator:Q}):((De=n==null?void 0:n.CANCELED)==null?void 0:De.totalCount)??0,")"]})]}),e.jsx("span",{className:"icon",children:x==="CANCELED"?e.jsx(W,{size:22}):e.jsx(R,{size:22})})]}),x==="CANCELED"&&(y?e.jsx("div",{className:"loading-center",children:e.jsx(z,{indicator:I})}):(Le=n==null?void 0:n.CANCELED)!=null&&Le.totalCount?e.jsx("div",{className:"appointment-list",children:(Se=(_e=n==null?void 0:n.CANCELED)==null?void 0:_e.bookings)==null?void 0:Se.map((t,s)=>{var r;const a=Y((t==null?void 0:t.collection_1_date)??(t==null?void 0:t.collection_2_date),"DD/MM/YYYY");return e.jsxs("div",{className:"appointment",children:[e.jsxs("div",{className:"date-section",children:[e.jsx("p",{className:"date-card",children:a.date()}),e.jsx("p",{className:"month-card",children:a.format("MMM")}),e.jsx("p",{className:"type-card",children:"ONLINE"})]}),e.jsxs("div",{className:"details-section",children:[e.jsx("p",{className:"name-card",children:(r=t==null?void 0:t.user)==null?void 0:r.name}),e.jsx("p",{className:"time-card",children:(t==null?void 0:t.collection_1_slot)??(t==null?void 0:t.collection_2_slot)}),e.jsx("p",{className:"location-card",children:"Cosmetic Dental Clinic"})]}),e.jsx("button",{className:"forward-button",children:e.jsx(E,{onClick:()=>l("/bookings"),className:"forward",size:24})})]},s)})}):e.jsx("div",{className:"no-bookings loading-center",children:"No bookings available"}))]}),e.jsx("div",{className:"view-all-buttons",children:b?e.jsxs("div",{className:"edit-btns-div",children:[e.jsx(tt,{onClick:()=>Ot(),disabled:w.length===0,children:"Reject"}),e.jsx(tt,{disabled:!0,children:"Re-Schedule"})]}):e.jsx("button",{className:"view-all-button",onClick:zt,children:"View All"})})]})]})})})]}),e.jsx(es,{modalData:ht,selectedAction:ft,open:ut,handleClose:gt,handleOpen:jt,handleSoftClose:vt})]})};export{Ma as default};
