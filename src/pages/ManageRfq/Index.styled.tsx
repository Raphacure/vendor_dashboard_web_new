import styled from "styled-components";

export const IndexsStyled = styled.div`
  padding:20px;


  .create-new-sec {
    text-align: center;
    margin-top: 30px;
  }
  .student-fields-sec-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 30px;
    .delta-signup-md {
      margin-bottom: 5px;
    }
  }
  .price-list-sec--all {
    p {
      margin-bottom: 1px;
    }
  }
  .all-rows-sec-sub-caate {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
  .item-img-sec {
    width: 100px;
  }
  .doctor-img-sec {
    height: 40px;
    border-radius: 50px;
    width: 40px;
    object-fit: cover;
  }
  .student-details-header {
    margin-bottom: 30px;
    span {
      cursor: pointer;
      color: #4682b4;
    }
  }

  .serviceCodeWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > div {
      color: #0d6efd;
      cursor: pointer;
    }
  }

  .delta-select-column-error .delta-select__control {
    border-color: red;
  }
  .delta-select {
    width: 100%;
  }
  .actions-btn-sec {
    display: flex;
    justify-content: end;
  }
  .error_message {
    text-align: left;
    font-size: 0.875em;
    color: #dc3545;
  }
  .profileEdit {
    font-size: 14px;
    padding: 12px 15px;
    border-radius: 8px;
    background: #17a2b8;
    color: #fff;
    /* opacity: 0.6; */
  }
  .download-icon-sec {
    text-align: right;
  }
  .text-capitalize {
    text-transform: capitalize;
  }
  .no-image-sec-char {
    height: 40px;
    width: 40px;
    display: block;
    background: #008080;
    border-radius: 50px;
    color: #fff;
    padding-left: 13px;
    padding-top: 4px;
    font-size: 20px;
  }
  .download-icon-sec img {
    width: 50px;
    margin-top: 15px;
    cursor: pointer;
  }
  .student-fields-sec-content-all {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 18px;
    margin-bottom: 0px;
  }
  .submit-filter-btn-sec {
    margin-top: 25px;
  }
  .edit-medi-cate-list {
    // display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  .image-preview {
    margin-top: 10px;
  }

  .select-filter {
    min-width: 100px;
    height: 100%;
    min-height: 38px;
    max-height: 40px;
  }
  .select-filter > * {
    text-transform: capitalize;
  }

  .image-preview-medicine {
    // min-width: 200px;
    // max-width: 200px;
    width: 100%;
    // min-height: 200px;
    // max-height: 200px;
  }

  .selctor-row {
    display: grid;
    gap: 20px;
    align-items: center;
  }

  .selector-info-row {
    display: flex;
    flex-direction: column;
  }

  .space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .model {
    padding: 1rem !important;
  }

  .vendorCardsParent {
    display: flex;
    align-items: flex-start;
    // justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .vendorCardDiv {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
  }

  .vendorCard1 {
    display: flex;
    gap: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  .container {
    max-height: 350px;
    overflow-y: auto;
  }

  .vendorCard2 {
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }

  .formDiv {
    overflow-x: auto;
  }
  .formDiv .row {
    display: grid;
    grid-template-columns: repeat(4, minmax(80px, 1fr)) 50px 50px;
  }

  .action-div {
    // display: grid;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    gap: 1rem;
    // grid-template-columns: 1fr 20px;
    gap: 10px;
  }
  .action-div2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .actionsCard {
  }

  .container::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  .container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  .vendorCardsParent .box1 {
    max-width: 300px;
  }

  .select {
    height: 2.4rem !important;
  }
  .row-gap {
    gap: 1rem;
  }

  .icon {
    font-size: 20px;
    cursor: pointer;
  }

  .close-float {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .rapha-color-btn {
    background-color: #008080;
  }

  .btn-flex-expand {
    flex: 1;
  }

  .action-div-flex {
    display: flex;
    gap: 2px;
  }
  .action-main-div-flex {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* Create RFQ CSS Start */

  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary:not(:disabled):not(.disabled):active,
  .show > .btn-primary.dropdown-toggle {
    color: #9747ff;
    background-color: #fff;
    border-color: #005cbf;
    box-shadow: none;
  }
  .form-check-label {
    margin-right: 1rem;
  }
  .form-label {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 0px;
  }
  .create-rfq-btn {
    background: var(--Primary-Red, #008080);
    color: #fff;
  }
  .normal-btn {
    width: 100%;
  }
  .active-bg {
    border: 1px solid #008080;
    color: #008080;
    border-radius: 30px;
    box-shadow: none;
    width: 100%;
  }
  .Select-test-text {
    margin-top: 2rem;
  }
  .search-custom-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .Continue-btn-div {
    border-radius: 2px;
    background: #008080;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
  .bottom-btn-div {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
  }
  .warning-msg {
    color: #e53a3a;
    font-size: 14px;
    font-weight: 500;
    margin-top: -10px;
  }
  .active-view-sub-btn-div {
    border-radius: 30px;
    background: #fff;
    width: 100%;
    height: 2.875rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .Continue-Service-div {
    width: 100%;
    display: flex;
    padding: 50px 0px;
    gap: 2rem;
  }
  .Select-btn-div button {
    border-radius: 25px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-right: 1rem;
    color: #313131;
    font-size: 12px;
    font-weight: 400;
  }
  .ant-tabs-nav-wrap {
    display: block !important;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin-top: 25px;
    margin-bottom: 5rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 20px;
    }
  }
  .pharmacy-card-box {
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    min-width: 150px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: auto;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    img {
      height: 115px;
      width: 100%;
      border-radius: 10px 10px 0px 0px;
    }
    .box-bottom {
      padding: 16px;
    }
    .pharmacy-box-button-sec {
      margin-top: 0px;
    }
    .name-div {
      display: flex;
      justify-content: space-between;
    }
    .caregory-key-name {
      text-transform: capitalize;
    }
  }
  .hospital_data {
    text-align: center;
    margin-bottom: 0px;
    width: 100%;
  }
  .participant-input-field-div {
    display: flex;
    align-items: end;
    gap:15px;
    width: 100%;
    
    @media (max-width: 675px) {
      gap: 5px;
    } 
  }
  .active-selected-btn {
    background: #008080;
  }
  .Continue-Service-left-div {
    width: 70%;
  }
  .Continue-Service-right-div {
    width: 30%;
  }
  .Continue-Service-sub-right-div {
    border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 688px;
    padding: 20px 20px;
  }
  .Continue-Service-sub-right-div2 {
    border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px 20px;
  }

  .excel-upload-div {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  .excel-upload-div button {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .ant-input-affix-wrapper > .ant-input:not(textarea) {
    height: 2rem;
  }
  .Continue-Service-Proceed-btn {
    border-radius: 4px;
    background: #008080;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
  .Continue-Service-back-btn {
    border-radius: 4px;
    border: 1px solid #008080;
    color: #008080;
    font-size: 14px;
    font-weight: 600;
  }
  .Continue-Service-Proceed-btn-div {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    padding: 0px 10px;
    gap: 15rem;
    border-radius: 2px;
    background: #fff;
    height: 53px;
  }
  .ant-tabs-nav .ant-tabs-nav-list {
    display: flex;
    justify-content: space-around;
    gap: 0px !important;
  }

  .button {
    background: #1f2d59 !important;
  }
    
  .ant-tabs-tab-active {
    color: #1f2d59 !important;
    // background: #1f2d59 !important;
    // color: white !important;
    border-bottom: 2px solid #1f2d59;
    border-radius: 0px !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1f2d59 !important;
  }

  .ant-tabs .ant-tabs-ink-bar {
    position: absolute;
    background: #008080;
    pointer-events: none;
  }
  .Service-tabs-sec {
    margin-top: 2rem;
  }
  .lab-test-list-title {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .lab-test-list-sub-title {
    color: #808080;
    font-size: 11px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.6px;
  }
  .delete-selected-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5rem;
    p {
      cursor: pointer;
    }
  }
  .pagination-div {
    display: flex;
    justify-content: center;
    margin: 3rem;
  }
  .healthCategoriesListbtn-div {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 8px;
    scrollbar-width: thin;
    margin-bottom: 0px;
    scrollbar-width: none;
  }
  .healthCategoriesListbtn {
    border: 1px solid #aaa4a4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .Continue-Service-div {
      padding: 15px 0px;
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .Continue-Service-left-div {
      width: 100%;
    }
    .ant-tabs-nav .ant-tabs-nav-list,
    .dyRYgn .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
      padding: 0px 10px;
      gap: 0px;
    }
    .Service-tabs-sec {
      margin-top: 10px;
    }
    .excel-upload-div {
      display: block;
    }
    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
    .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
      display: block;
    }
    .Continue-Service-right-div {
      width: 100%;
    }
    .pagination-div {
      padding: 15px 0px;
      margin: 0px;
    }
    .Continue-Service-sub-right-div {
      height: 100%;
    }
  }
  /* Create RFQ Card CSS Start */
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
  /* Create RFQ Card CSS End */
  /* Conform Create RFQ Card CSS Start */
  .service-conform-module-div {
    width: 100%;
    display: flex;
    gap: 2rem;
  }
  .service-conform-header-module-div {
    gap: 2rem;
    border-radius: 2px 2px 0px 0px;
    background: #d3edfc;
    height: 38px;
    padding: 10px;
    display: flex;
    align-items: center;
    p {
      color: #565151;
      font-size: 17px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0.84px;
      margin-bottom: 0px;
    }
    img {
      width: 2rem;
    }
  }
  .service-conform-left-module-div {
    padding: 10px;
    width: 65%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .service-conform-right-module-div {
    padding: 1rem;
    width: 35%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .service-conform-text-module-div {
    padding: 2rem;
  }
  .service-conform-text-module-div li {
    color: #808080;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 200% */
    letter-spacing: 0.6px;
  }
  .select-options-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .back-more-rfq-btn {
    border-radius: 1px;
    border: 1px solid #008080;
    width: 100%;
    height: 42px;
    color: #008080;
    font-size: 12px;
    font-weight: 600;
  }
  .add-more-rfq-btn {
    border-radius: 3px;
    background: #008080;
    width: 100%;
    color: #f6f9fd;
    font-size: 12px;
    font-weight: 600;
    height: 42px;
  }
  .service-conform-text-module-div {
    display: flex;
    justify-content: space-between;
  }
  .dropdown-menu {
    width: 100%;
  }
  .dropdown-toggle {
    width: 21.2rem;
    display: flex;
    align-items: center;
    border-radius: 1px;
    border: 1px solid var(--dummy, #808080);
    color: var(--dummy, #808080);
    font-size: 12px;
    font-weight: 600;
    background: #fff;
    height: 42px;
  }
  .form-check .form-check-input {
    cursor: pointer;
  }
  .RFQ-options-select-btn {
    display: flex;
    justify-content: end;
    padding: 1rem;
    button {
      border-radius: 1px;
      border: 1px solid #9747ff;
      width: 100%;
      height: 42px;
      color: #9747ff;
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    .service-conform-module-div {
      display: flex;
      flex-direction: column;
    }
    .service-conform-left-module-div {
      width: 100%;
    }
    .service-conform-text-module-div {
      padding: 0px;
    }
    .lab-test-list-title {
      margin-bottom: 0px;
    }
    .service-conform-right-module-div {
      width: 100%;
    }
    .dropdown-toggle {
      width: 20rem;
    }
  }
  /* Conform Create RFQ Card CSS End */
  /* Conform PopUp Create RFQ Card CSS Start */
  .conform-msg-main-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .conform-msg-title {
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
  .conform-msg-sub-title {
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  .conform-msg-btn {
    margin-top: 1rem;
    border-radius: 2px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    width: 70%;
    height: 45px;
  }
  /* Conform PopUp Create RFQ Card CSS End */
  /* Create RFQ CSS End */
  /* Create Wellness RFQ CSS Start */
  .wellness-main-title {
    color: #565151;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.84px;
    margin-bottom: 30px;
  }
  .ordertable {
    width: 100%;
    overflow-x: auto;
    padding: 20px 0px;

    td{
      vertical-align:middle
    }
  }
  .error-message-text {
    font-size: 12px;
    margin-bottom: 0px;
    margin-top: 3px;
    color: #e53a3a;
    width: 55%;
  }
  .remove-table-content {
    border: 2px solid #9747ff;
    margin-right: 1rem;
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #e53a3a;
    }
  }
  .remove-table-content {
    border: 1px solid #444343;
    height: 36px;
  }
  .add-table-content {
    background: #008080;
    width: 66px;
    height: 36px;
    border: 1px;
    color: #fff;
  }
  .show-table-wellness-subcription-div {
    width: 100%;
    display: flex;
    gap: 2rem;
  }
  .show-table-wellness-subcription-fleft {
    width: 65%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 5px 5px;
  }
  .show-table-wellness-subcription-fleft p {
    color: #313131;
    font-size: 14px;
    font-weight: 500;
  }
  .Subscriptions-th-div img {
    width: 2.5rem;
    margin-right: 1rem;
  }
  .ant-select-single {
    font-size: 14px;
    height: 32px;
    margin-right: 1rem;
  }
  .show-table-wellness-subcription-right {
    width: 35%;
    height: 100%;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 20px;
  }

  #address {
    width: 100%;
    padding: 12px 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
  }

  #address::placeholder {
    color: #ccc;
  }
  .pac-container {
    display: none !important;
  }

  #address:focus {
    border-color: #ccc;
  }

  .address-container {
    position: relative;
    margin-bottom: 3rem;
  }

  .address-container::before {
    content: "🔍";
    font-size: 16px;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  } /* Create Wellness RFQ CSS End */
`;
