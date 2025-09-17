import styled from "styled-components";

export const IndexsStyled = styled.div`
padding: 1rem;
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
    text-transform: uppercase;
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
    position: relative;
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
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 2.4rem;
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

  .selectedvendorsTitleBox {
    font-size: 14px;
    margin-right: 10px;
    flex: 1;
    input[type="text"] {
    border-radius: 5px;
    outline: none;
    }
  }

  .selectedVendorController {
        position: sticky;
    top: 0;
    z-index: 10;
    background: white;
    padding-bottom: 10px;
  }

  .selectFilter {
    flex: 1;

    span {
      font-size: 14px;
    }
  }

  .vendorsCode {
    width: 100%;
    flex:1;
  }

  .top-sec-header-sec{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  }
`;
