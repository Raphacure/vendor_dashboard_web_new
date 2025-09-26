var qe=Object.defineProperty;var Oe=(e,r,n)=>r in e?qe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var J=(e,r,n)=>Oe(e,typeof r!="symbol"?r+"":r,n);import{aG as Ie,d as re,j as t,r as u,aJ as ne,aK as we,aE as I,aL as ye,$ as Le,e as C,u as D,aM as O,a8 as B,P as te,a as Qe,aN as Pe,ab as Be}from"./index-PsMG3Zdc.js";import{e as Me,F as We,C as He,c as De,d as Ye}from"./CustomTable-C963ltCQ.js";import{d as pe}from"./dayjs.min-BXvgyEn3.js";import{C as q}from"./CustomModal-D_U-XRhQ.js";import"./index-Ddh1qbRu.js";import"./index-B46B2bWJ.js";import"./createLucideIcon-DgyBfDek.js";import"./Input-DN0wZSw7.js";var U={exports:{}},K,fe;function Ge(){if(fe)return K;fe=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return K=e,K}var X,ue;function Je(){if(ue)return X;ue=1;var e=Ge();function r(){}function n(){}return n.resetWarningCache=r,X=function(){function o(d,m,c,l,p,g){if(g!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}o.isRequired=o;function a(){return o}var i={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:a,element:o,elementType:o,instanceOf:a,node:o,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:r};return i.PropTypes=i,i},X}var me;function Ue(){return me||(me=1,U.exports=Je()()),U.exports}var Ke=Ue();const Q=Ie(Ke);var Z={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function Xe(){if(xe)return P;xe=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(o,a,i){var d=null;if(i!==void 0&&(d=""+i),a.key!==void 0&&(d=""+a.key),"key"in a){i={};for(var m in a)m!=="key"&&(i[m]=a[m])}else i=a;return a=i.ref,{$$typeof:e,type:o,key:d,ref:a!==void 0?a:null,props:i}}return P.Fragment=r,P.jsx=n,P.jsxs=n,P}var ge;function Ze(){return ge||(ge=1,Z.exports=Xe()),Z.exports}var E=Ze();const Ve=()=>E.jsx(E.Fragment,{children:E.jsx("div",{className:"loader_wrapper",children:E.jsxs("div",{className:"css_loader",children:[E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{}),E.jsx("div",{})]})})}),et=re.div`
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
`,he=e=>{const{columns:r,rfqList:n,isLoading:o,page:a,pageSize:i,total:d,onPageChange:m}=e;return t.jsx(Me,{columns:r,bodyCellClassName:"h-[50px] p-2 text-center",rowKey:"id",data:Array.isArray(n)&&n?n:[],isLoading:o,page:a,pageSize:i,total:d,onPageChange:m,showingName:"RFQ",pagination:!0})},tt=re.div`
  background-color: #e9f2fd;
  border-radius: 0.75rem;
  padding: 0.5rem;
  display: inline-block;
  max-width: 100%;

  ::-webkit-scrollbar {
    width: 8px; /* For vertical scrollbar */
    height: 8px; /* For horizontal scrollbar */
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
    margin-top: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Scrollbar thumb on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,je=({tabs:e,activeTab:r,setActiveTab:n,onChange:o,containerClassName:a="mt-1"})=>{var g;const i=u.useRef(null),d=u.useRef(void 0),[m,c]=u.useState(r||(e&&e.length>0?e[0].value:""));u.useEffect(()=>{r!==void 0&&r!==m&&c(r)},[r]),u.useEffect(()=>{o&&o(m)},[m]);const l=r??m,p=()=>{clearTimeout(d.current),d.current=setTimeout(()=>{if(i.current){const f=i.current.getBoundingClientRect();f.left>=0&&f.right<=(window.innerWidth||document.documentElement.clientWidth)||i.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},2e3)};return t.jsxs(t.Fragment,{children:[t.jsx(tt,{onMouseEnter:()=>clearTimeout(d.current),onMouseLeave:p,children:t.jsx("div",{ref:f=>{if(!f)return;const x=()=>{f.classList.toggle("pb-2",f.scrollWidth>f.clientWidth)};x();const v=new ResizeObserver(x);return v.observe(f),()=>{v.disconnect()}},className:"grid grid-flow-col auto-cols-max gap-2 h-full overflow-x-auto",children:e.map(f=>t.jsx("div",{ref:x=>{f.value===(r??m)&&(i.current=x)},"aria-disabled":!!(f!=null&&f.disabled),className:`${f.value===(r??m)?"bg-white":""} ${f.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer hover:bg-gray-50"} h-full flex justify-center items-center px-4 py-2 rounded-md text-sm font-medium text-gray-500 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out ${f.value===(r??m)?"text-gray-900":"text-gray-500"}`,onClick:()=>{f.disabled||(n?n(f.value):c(f.value),f.onClick&&f.onClick())},children:t.jsx("div",{children:f.label})},f.value))})}),t.jsx("div",{children:t.jsx("div",{className:`${a}`,children:(g=e.find(f=>f.value===l))==null?void 0:g.children},l)})]})};function rt(e){if(typeof e!="object"||e===null)return!1;let r=e;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r||Object.getPrototypeOf(e)===null}function nt(e){return rt(e)&&"type"in e&&typeof e.type=="string"}var ot=e=>e&&typeof e.match=="function";function V(e,r){function n(...o){if(r){let a=r(...o);if(!a)throw new Error(ut(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:o[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=o=>nt(o)&&o.type===e,n}var at=(e,r)=>ot(e)?e.match(r):e(r);function it(...e){return r=>e.some(n=>at(n,r))}var st="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",lt=(e=21)=>{let r="",n=e;for(;n--;)r+=st[Math.random()*64|0];return r},ct=["name","message","stack","code"],ee=class{constructor(e,r){J(this,"_type");this.payload=e,this.meta=r}},be=class{constructor(e,r){J(this,"_type");this.payload=e,this.meta=r}},dt=e=>{if(typeof e=="object"&&e!==null){const r={};for(const n of ct)typeof e[n]=="string"&&(r[n]=e[n]);return r}return{message:String(e)}},ve="External signal was aborted",L=(()=>{function e(r,n,o){const a=V(r+"/fulfilled",(c,l,p,g)=>({payload:c,meta:{...g||{},arg:p,requestId:l,requestStatus:"fulfilled"}})),i=V(r+"/pending",(c,l,p)=>({payload:void 0,meta:{...p||{},arg:l,requestId:c,requestStatus:"pending"}})),d=V(r+"/rejected",(c,l,p,g,f)=>({payload:g,error:(o&&o.serializeError||dt)(c||"Rejected"),meta:{...f||{},arg:p,requestId:l,rejectedWithValue:!!g,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"}}));function m(c,{signal:l}={}){return(p,g,f)=>{const x=o!=null&&o.idGenerator?o.idGenerator(c):lt(),v=new AbortController;let w,j;function R(b){j=b,v.abort()}l&&(l.aborted?R(ve):l.addEventListener("abort",()=>R(ve),{once:!0}));const F=(async function(){var T,h;let b;try{let y=(T=o==null?void 0:o.condition)==null?void 0:T.call(o,c,{getState:g,extra:f});if(ft(y)&&(y=await y),y===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const z=new Promise((N,_)=>{w=()=>{_({name:"AbortError",message:j||"Aborted"})},v.signal.addEventListener("abort",w)});p(i(x,c,(h=o==null?void 0:o.getPendingMeta)==null?void 0:h.call(o,{requestId:x,arg:c},{getState:g,extra:f}))),b=await Promise.race([z,Promise.resolve(n(c,{dispatch:p,getState:g,extra:f,requestId:x,signal:v.signal,abort:R,rejectWithValue:(N,_)=>new ee(N,_),fulfillWithValue:(N,_)=>new be(N,_)})).then(N=>{if(N instanceof ee)throw N;return N instanceof be?a(N.payload,x,c,N.meta):a(N,x,c)})])}catch(y){b=y instanceof ee?d(null,x,c,y.payload,y.meta):d(y,x,c)}finally{w&&v.signal.removeEventListener("abort",w)}return o&&!o.dispatchConditionRejection&&d.match(b)&&b.meta.condition||p(b),b})();return Object.assign(F,{abort:R,requestId:x,arg:c,unwrap(){return F.then(pt)}})}}return Object.assign(m,{pending:i,rejected:d,fulfilled:a,settled:it(d,a),typePrefix:r})}return e.withTypes=()=>e,e})();function pt(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ft(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}function ut(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}L("rfq/getAllRfqs",async e=>await ne(`${I}/api/v1/rfq?count=${(e==null?void 0:e.count)??10}&searchText=${(e==null?void 0:e.searchText)??""}&page=${(e==null?void 0:e.page)??1}&isSubscription=${e==null?void 0:e.isSubscription}&clientId=${(e==null?void 0:e.clientId)??""}`));const mt=L("rfq/getRfqById",async e=>await ne(`${I}/api/v1/rfq/${e}`));L("rfq/toggleRfqStatus",async e=>await we(`${I}/api/v1/rfq/${e==null?void 0:e.id}/toggle/`,e==null?void 0:e.data));const xt=L("rfq/negotiateRfqStatus",async e=>await we(`${I}/api/v1/rfq/${e==null?void 0:e.id}/negotiate/`,e==null?void 0:e.data));L("rfq/getRFQTestsListAPI",async()=>await ne(`${I}/api/v1/rfq/service`));L("rfq/createNewRFQAPI",async e=>await ye(`${I}/api/v1/rfq`,e));L("rfq/WellnesSubscriptionRFQAPI",async e=>await ye(`${I}/api/v1/rfq/create-wellness-subscriptions`,e));const gt=re.div`
  .cityTitle {
    text-transform: capitalize;
    font-size: 18px;
  }
  padding: 0px 20px;
  .left-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .search-bar {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .buttons-div {
    display: flex;
    gap: 25px;
  }
  .ant-input-affix-wrapper {
    width: 20rem;
  }
  .Package-btn {
    border-radius: 3px;
    border: 1px solid #a3a3a3;
    background: #fff;
    color: #686868;
    font-size: 12px;
    font-weight: 400;
    height: 3rem;
  }
  .Quote-btn {
    border-radius: 2px;
    background: #9747ff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    color: #f6f9fd;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .ordertable {
    margin-top: 12px;
    width: 100%;
    overflow-x: scroll;
  }
  .ordertable Table {
    --bs-table-bg: transparent !important;
    border-radius: 5px;
    border: 1px solid #d6cece;
  }
  .ordertable thead {
    border-radius: 5px 5px 0px 0px;
    background: #d3edfc;
  }
  .ordertable th {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
    height: 3rem;
  }
  .ordertable td {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;
  }
  .ordertable tr {
    border: 1px solid #d6cece;
  }
  .rfq-name {
    cursor: pointer;
    color: purple !important;
  }

  .profile-card {
    // margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .profile-info {
    display: flex;
    width: 100%;
  }
  .profile-details {
    width: 100%;
  }
  .profile-details h2 {
    margin: 0;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.26px;
    opacity: 0.8;
  }
  .profile-details p {
    margin: 0;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    opacity: 0.7;
  }
  .profile-details-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .appointment-details {
    // margin-top: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .appointment-info {
    margin-bottom: 16px;
    height: 8rem;
    overflow: scroll;
  }
  .renegotiate-info {
    margin-bottom: 16px;
    overflow: scroll;
  }
  .renegotiate-btn-div {
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
    button {
      background: #9747ff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      color: #f6f9fd;
      font-family: Poppins, sans-serif;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .header {
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    p {
      margin: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 1.26px;
      opacity: 0.8;
    }
  }
  .renegotiate-close-btn-div {
    display: flex;
    justify-content: end;
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
  .display-contents {
    display: contents;
    margin-bottom: 2rem;
  }
  .appointment-item {
    display: flex;
    margin-bottom: 8px;
    flex-basis: 30%;
    border-bottom: 1px solid lightgray;
  }
  .appointment-comments-details {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    height: 10rem;
    overflow: scroll;
  }
  .appointment-comment-info {
    margin-bottom: 16px;
  }
  .pagination-div {
    display: flex;
    justify-content: center;
  }

  .ordertable-thead {
    width: 100%;
    margin-bottom: 2rem;
  }
  .sectionHeading {
    color: #545353;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0px 0px;
    .left-controls {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
    .sectionHeading {
      font-size: 15px;
    }
    .pagination-div {
      margin-bottom: 2rem;
    }
    .buttons-div {
      margin-top: 1rem;
    }
  }
`,ht=({details:e,packages:r,tests:n,cityDetails:o,activeTab:a,data:i})=>{var d;return console.log(i,"data"),t.jsxs(gt,{children:[t.jsx("div",{className:"profile-card chk1",children:t.jsx("div",{className:"profile-info",children:t.jsxs("div",{className:"profile-details",children:[t.jsxs("div",{className:"profile-details-text",children:[t.jsx("h2",{children:e==null?void 0:e.rfq_name}),t.jsxs("p",{children:["Status: ",t.jsx("span",{children:(e==null?void 0:e.status)??"Open"})]})]}),t.jsxs("p",{children:["RFQ ID: ",t.jsx("span",{children:e==null?void 0:e.id})]}),t.jsxs("p",{children:["Submission Date:",new Date(e==null?void 0:e.created_at).toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"numeric"})]}),t.jsxs("div",{className:"profile-details-text",children:[t.jsx("p",{children:"Diagnostic Center: N/A"}),t.jsx("p",{children:"Hospital: N/A"})]})]})})}),t.jsx("div",{className:"appointment-details",children:t.jsx("div",{className:"appointment-info",children:(d=Object.keys(o))==null?void 0:d.map((m,c)=>{var l,p,g;return t.jsxs(Le.Fragment,{children:[t.jsxs("div",{className:"appointment-mode",children:["City:",t.jsxs("span",{className:"cityTitle",children:[" ",m]})]}),t.jsxs("div",{className:"appointment-item d-flex justify-content-between align-items-center mt-1 pb-1",children:[t.jsxs("div",{children:[t.jsx("label",{className:"mr-1",children:"Number Of Men:"}),t.jsxs("span",{children:[" ",((l=o==null?void 0:o[m])==null?void 0:l.no_of_men)||"N/A"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"mr-1",children:"Number Of Women: "}),t.jsxs("span",{children:[" ",((p=o==null?void 0:o[m])==null?void 0:p.no_of_women)||"N/A"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"mr-1",children:"Number Of Children :"}),t.jsx("span",{children:((g=o==null?void 0:o[m])==null?void 0:g.no_of_children)||"N/A"})]})]})]},c)})})}),a!=="2"&&t.jsxs("div",{className:"",children:[t.jsx("label",{children:"Test Details:"}),t.jsx("div",{className:"appointment-comments-details",children:t.jsx("div",{className:"appointment-comment-info",children:n.length>0?n==null?void 0:n.map((m,c)=>t.jsx("div",{className:"appointment-comment-item",children:t.jsx("li",{children:m})},c)):t.jsx("span",{children:"N/A"})})})]}),t.jsxs("div",{className:"",children:[t.jsx("label",{children:"Pacakges Details:"}),t.jsx("div",{className:"appointment-comments-details",children:t.jsx("div",{className:"appointment-comment-info",children:r.length>0?r==null?void 0:r.map((m,c)=>t.jsx("div",{className:"appointment-comment-item",children:t.jsx("li",{children:m})},c)):t.jsx("span",{children:"N/A"})})}),t.jsx("div",{className:"appointment-mode",children:t.jsxs("span",{children:["Total Amount: ",e==null?void 0:e.total_amount," /-"]})})]})]})},bt=["xxl","xl","lg","md","sm","xs"],vt="xs",Y=u.createContext({prefixes:{},breakpoints:bt,minBreakpoint:vt}),{Consumer:Dt,Provider:Yt}=Y;function S(e,r){const{prefixes:n}=u.useContext(Y);return e||n[r]||r}function wt(){const{breakpoints:e}=u.useContext(Y);return e}function yt(){const{minBreakpoint:e}=u.useContext(Y);return e}const jt=["as","disabled"];function Ct(e,r){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(r.indexOf(o)>=0)continue;n[o]=e[o]}return n}function kt(e){return!e||e.trim()==="#"}function Ce({tagName:e,disabled:r,href:n,target:o,rel:a,role:i,onClick:d,tabIndex:m=0,type:c}){e||(n!=null||o!=null||a!=null?e="a":e="button");const l={tagName:e};if(e==="button")return[{type:c||"button",disabled:r},l];const p=f=>{if((r||e==="a"&&kt(n))&&f.preventDefault(),r){f.stopPropagation();return}d==null||d(f)},g=f=>{f.key===" "&&(f.preventDefault(),p(f))};return e==="a"&&(n||(n="#"),r&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:r?void 0:m,href:n,target:e==="a"?o:void 0,"aria-disabled":r||void 0,rel:e==="a"?a:void 0,onClick:p,onKeyDown:g},l]}const Nt=u.forwardRef((e,r)=>{let{as:n,disabled:o}=e,a=Ct(e,jt);const[i,{tagName:d}]=Ce(Object.assign({tagName:n,disabled:o},a));return t.jsx(d,Object.assign({},a,i,{ref:r}))});Nt.displayName="Button";const ke=u.forwardRef(({as:e,bsPrefix:r,variant:n="primary",size:o,active:a=!1,disabled:i=!1,className:d,...m},c)=>{const l=S(r,"btn"),[p,{tagName:g}]=Ce({tagName:e,disabled:i,...m}),f=g;return t.jsx(f,{...p,...m,ref:c,disabled:i,className:C(d,l,a&&"active",n&&`${l}-${n}`,o&&`${l}-${o}`,m.href&&i&&"disabled")})});ke.displayName="Button";function St(e,r){return u.Children.toArray(e).some(n=>u.isValidElement(n)&&n.type===r)}function Rt({as:e,bsPrefix:r,className:n,...o}){r=S(r,"col");const a=wt(),i=yt(),d=[],m=[];return a.forEach(c=>{const l=o[c];delete o[c];let p,g,f;typeof l=="object"&&l!=null?{span:p,offset:g,order:f}=l:p=l;const x=c!==i?`-${c}`:"";p&&d.push(p===!0?`${r}${x}`:`${r}${x}-${p}`),f!=null&&m.push(`order${x}-${f}`),g!=null&&m.push(`offset${x}-${g}`)}),[{...o,className:C(n,...d,...m)},{as:e,bsPrefix:r,spans:d}]}const Ne=u.forwardRef((e,r)=>{const[{className:n,...o},{as:a="div",bsPrefix:i,spans:d}]=Rt(e);return t.jsx(a,{...o,ref:r,className:C(n,!d.length&&i)})});Ne.displayName="Col";const Ft={type:Q.string,tooltip:Q.bool,as:Q.elementType},G=u.forwardRef(({as:e="div",className:r,type:n="valid",tooltip:o=!1,...a},i)=>t.jsx(e,{...a,ref:i,className:C(r,`${n}-${o?"tooltip":"feedback"}`)}));G.displayName="Feedback";G.propTypes=Ft;const A=u.createContext({}),oe=u.forwardRef(({id:e,bsPrefix:r,className:n,type:o="checkbox",isValid:a=!1,isInvalid:i=!1,as:d="input",...m},c)=>{const{controlId:l}=u.useContext(A);return r=S(r,"form-check-input"),t.jsx(d,{...m,ref:c,type:o,id:e||l,className:C(n,r,a&&"is-valid",i&&"is-invalid")})});oe.displayName="FormCheckInput";const W=u.forwardRef(({bsPrefix:e,className:r,htmlFor:n,...o},a)=>{const{controlId:i}=u.useContext(A);return e=S(e,"form-check-label"),t.jsx("label",{...o,ref:a,htmlFor:n||i,className:C(r,e)})});W.displayName="FormCheckLabel";const Se=u.forwardRef(({id:e,bsPrefix:r,bsSwitchPrefix:n,inline:o=!1,reverse:a=!1,disabled:i=!1,isValid:d=!1,isInvalid:m=!1,feedbackTooltip:c=!1,feedback:l,feedbackType:p,className:g,style:f,title:x="",type:v="checkbox",label:w,children:j,as:R="input",...F},b)=>{r=S(r,"form-check"),n=S(n,"form-switch");const{controlId:$}=u.useContext(A),T=u.useMemo(()=>({controlId:e||$}),[$,e]),h=!j&&w!=null&&w!==!1||St(j,W),y=t.jsx(oe,{...F,type:v==="switch"?"checkbox":v,ref:b,isValid:d,isInvalid:m,disabled:i,as:R});return t.jsx(A.Provider,{value:T,children:t.jsx("div",{style:f,className:C(g,h&&r,o&&`${r}-inline`,a&&`${r}-reverse`,v==="switch"&&n),children:j||t.jsxs(t.Fragment,{children:[y,h&&t.jsx(W,{title:x,children:w}),l&&t.jsx(G,{type:p,tooltip:c,children:l})]})})})});Se.displayName="FormCheck";const H=Object.assign(Se,{Input:oe,Label:W}),Re=u.forwardRef(({bsPrefix:e,type:r,size:n,htmlSize:o,id:a,className:i,isValid:d=!1,isInvalid:m=!1,plaintext:c,readOnly:l,as:p="input",...g},f)=>{const{controlId:x}=u.useContext(A);return e=S(e,"form-control"),t.jsx(p,{...g,type:r,size:o,ref:f,readOnly:l,id:a||x,className:C(i,c?`${e}-plaintext`:e,n&&`${e}-${n}`,r==="color"&&`${e}-color`,d&&"is-valid",m&&"is-invalid")})});Re.displayName="FormControl";const Tt=Object.assign(Re,{Feedback:G}),Fe=u.forwardRef(({className:e,bsPrefix:r,as:n="div",...o},a)=>(r=S(r,"form-floating"),t.jsx(n,{ref:a,className:C(e,r),...o})));Fe.displayName="FormFloating";const ae=u.forwardRef(({controlId:e,as:r="div",...n},o)=>{const a=u.useMemo(()=>({controlId:e}),[e]);return t.jsx(A.Provider,{value:a,children:t.jsx(r,{...n,ref:o})})});ae.displayName="FormGroup";const Te=u.forwardRef(({as:e="label",bsPrefix:r,column:n=!1,visuallyHidden:o=!1,className:a,htmlFor:i,...d},m)=>{const{controlId:c}=u.useContext(A);r=S(r,"form-label");let l="col-form-label";typeof n=="string"&&(l=`${l} ${l}-${n}`);const p=C(a,r,o&&"visually-hidden",n&&l);return i=i||c,n?t.jsx(Ne,{ref:m,as:"label",className:p,htmlFor:i,...d}):t.jsx(e,{ref:m,className:p,htmlFor:i,...d})});Te.displayName="FormLabel";const _e=u.forwardRef(({bsPrefix:e,className:r,id:n,...o},a)=>{const{controlId:i}=u.useContext(A);return e=S(e,"form-range"),t.jsx("input",{...o,type:"range",ref:a,className:C(r,e),id:n||i})});_e.displayName="FormRange";const Ae=u.forwardRef(({bsPrefix:e,size:r,htmlSize:n,className:o,isValid:a=!1,isInvalid:i=!1,id:d,...m},c)=>{const{controlId:l}=u.useContext(A);return e=S(e,"form-select"),t.jsx("select",{...m,size:n,ref:c,className:C(o,e,r&&`${e}-${r}`,a&&"is-valid",i&&"is-invalid"),id:d||l})});Ae.displayName="FormSelect";const $e=u.forwardRef(({bsPrefix:e,className:r,as:n="small",muted:o,...a},i)=>(e=S(e,"form-text"),t.jsx(n,{...a,ref:i,className:C(r,e,o&&"text-muted")})));$e.displayName="FormText";const ze=u.forwardRef((e,r)=>t.jsx(H,{...e,ref:r,type:"switch"}));ze.displayName="Switch";const _t=Object.assign(ze,{Input:H.Input,Label:H.Label}),Ee=u.forwardRef(({bsPrefix:e,className:r,children:n,controlId:o,label:a,...i},d)=>(e=S(e,"form-floating"),t.jsxs(ae,{ref:d,className:C(r,e),controlId:o,...i,children:[n,t.jsx("label",{htmlFor:o,children:a})]})));Ee.displayName="FloatingLabel";const At={_ref:Q.any,validated:Q.bool,as:Q.elementType},ie=u.forwardRef(({className:e,validated:r,as:n="form",...o},a)=>t.jsx(n,{...o,ref:a,className:C(e,r&&"was-validated")}));ie.displayName="Form";ie.propTypes=At;const $t=Object.assign(ie,{Group:ae,Control:Tt,Floating:Fe,Check:H,Switch:_t,Label:Te,Text:$e,Range:_e,Select:Ae,FloatingLabel:Ee}),zt=({data:e,id:r,onSuccess:n,showInput:o})=>{const[a,i]=u.useState(),d=D(),m=async()=>{var p;if(!a)return;const l=await d(xt({id:r,data:{total_amount:a}}));(p=l==null?void 0:l.payload)!=null&&p.success?(n(),i(""),O.success("Successfully saved!.")):O.error("Failed to save!.")},c=[{title:"Negotiated Amount",width:100,dataIndex:"negotiated_amount",key:"0"},{title:"Negotiated By",width:100,dataIndex:"negotiatedBy",key:"1",render:l=>t.jsxs(t.Fragment,{children:[(l==null?void 0:l.first_name)??""," ",(l==null?void 0:l.last_name)??""]})},{title:"Negotiated At",width:100,dataIndex:"negotiated_at",key:"2",render:l=>{var p;return t.jsx(t.Fragment,{children:(p=l==null?void 0:l.replace("T"," "))==null?void 0:p.slice(0,18)})}}];return t.jsxs(t.Fragment,{children:[t.jsx(We,{columns:c,rowKey:"id",dataSource:e??[],pagination:!1,bordered:!0,scroll:{x:"max-content"}}),o&&t.jsxs("div",{className:"mt-3",children:[t.jsx("span",{className:"mb-1",children:"Negotiating Amount"}),t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx($t.Control,{className:"mr-2",placeholder:"Enter negotiating amount",onChange:l=>{var p;i(Number((p=l==null?void 0:l.target)==null?void 0:p.value))},value:a,type:"number"}),t.jsx(ke,{className:"",onClick:m,disabled:!a,variant:"primary",children:"Send"})]})]})]})},Et=({onHide:e,id:r,activeTab:n,selectedRfq:o})=>{const a=D(),[i,d]=u.useState([]),[m,c]=u.useState([]),[l,p]=u.useState([]),[g,f]=u.useState({}),x=u.useCallback(async()=>{var b,$,T;if(!r)return;const v=await a(mt(r)),w=($=(b=v==null?void 0:v.payload)==null?void 0:b.data)==null?void 0:$.rfq;d(w);const j=new Set,R=new Set,F={};(T=w==null?void 0:w.items)==null||T.forEach(h=>{var y,z;F[h==null?void 0:h.city_id]={service_id:h==null?void 0:h.service_id,no_of_men:h==null?void 0:h.no_of_men,no_of_women:h==null?void 0:h.no_of_women,no_of_children:h==null?void 0:h.no_of_children},R.add((y=h==null?void 0:h.package)==null?void 0:y.service_name),j.add((z=h==null?void 0:h.test)==null?void 0:z.service_name)}),c(Array.from(R)),p(Array.from(j)),f(F)},[r,a]);return u.useEffect(()=>{x()},[x]),t.jsx(q,{handleClose:e,open:!0,title:"RFQ Details",children:t.jsx(q.Body,{children:t.jsx(je,{tabs:[{label:"Details",value:"2",children:t.jsx(ht,{details:i,cityDetails:g,tests:l,packages:m,activeTab:n,data:o})},{label:"Negotiation History",value:"4",children:t.jsx(zt,{onSuccess:x,id:i==null?void 0:i.id,data:i==null?void 0:i.negotiations,showInput:!((i==null?void 0:i.status)=="approved"||(i==null?void 0:i.status)=="rejected")})}],containerClassName:"mt-2"})})})},qt=({activeTypes:e,pop:r,selectedRfq:n,activeTab:o,onRefresh:a})=>{const i=D(),[d,m]=u.useState(null),[c,l]=u.useState(""),p=()=>{m(null),l("")},g=async()=>{try{if(!d)return;const x=await i(negotiateRfqStatus({id:n==null?void 0:n.id,data:{total_amount:d}}));if(x!=null&&x.error){O.error("Failed to negotiate RFQ status.");return}else O.success("Successfully saved!."),a(),r("negotiateRfqStatus"),p()}catch{O.error("An error occurred while negotiating RFQ status.")}},f=async()=>{var j;const{id:x,status:v}=n;if(!x||!v)return;const w=await i(toggleRfqStatus({id:x,data:{status:v,comments:c}}));(j=w==null?void 0:w.payload)!=null&&j.success?(a(),O.success("RFQ status updated successfully!."),r("toggleRfqStatus"),p()):O.error("Failed to update RFQ status!.")};return t.jsx(He,{activeTypes:e,modals:[{type:"rfqDetails",component:t.jsx(Et,{onHide:()=>r("rfqDetails"),id:n==null?void 0:n.id,activeTab:o,selectedRfq:n})},{type:"negotiateRfqStatus",component:t.jsxs(q,{handleClose:()=>{r("negotiateRfqStatus"),p()},open:!0,title:"Negotiate RFQ Status",children:[t.jsx(q.Body,{children:t.jsxs("div",{className:"flex flex-col gap-2",children:[t.jsxs("p",{className:"font-medium text-base mb-0",children:[t.jsx("strong",{children:"RFQ Name:"})," ",t.jsx("span",{className:"ml-1 text-gray-700",children:n==null?void 0:n.name})]}),t.jsxs("p",{className:"font-medium text-base mb-0",children:[t.jsx("strong",{children:"RFQ Amount:"})," ",t.jsx("span",{className:"ml-1 text-gray-700",children:n==null?void 0:n.amount})]}),t.jsx("label",{className:"font-medium text-base mb-1",htmlFor:"negotiationAmount",children:t.jsx("strong",{children:"Negotiation Amount:"})}),t.jsx("input",{id:"negotiationAmount",type:"number",min:0,value:d??"",onChange:x=>m(Math.max(0,Number(x.target.value))),className:"rounded-md border border-gray-500 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Enter negotiation amount"})]})}),t.jsx(q.Footer,{children:t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(B,{onClick:()=>{r("negotiateRfqStatus"),p()},children:"Cancel"}),t.jsx(te,{onClick:()=>{g()},children:"Negotiate"})]})})]})},{type:"toggleRfqStatus",component:t.jsxs(q,{handleClose:()=>{r("toggleRfqStatus"),p()},open:!0,title:`${(n==null?void 0:n.status)==="approved"?"Approve":"Reject"} RFQ`,children:[t.jsx(q.Body,{children:t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("p",{className:"font-medium text-base mb-0",children:["Are you sure you want to ",(n==null?void 0:n.status)==="approved"?"approve":"reject"," this RFQ?"]}),t.jsx("textarea",{value:c,onChange:x=>l(x.target.value),className:"min-h-[80px] rounded-md border border-gray-500 p-2 text-[15px] resize-y focus:outline-none",placeholder:"Enter your comments here..."})]})}),t.jsx(q.Footer,{children:t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(B,{onClick:()=>{r("toggleRfqStatus"),p()},children:"Cancel"}),t.jsx(te,{onClick:()=>{f()},children:"Confirm"})]})})]})}]})},Gt=({clientId:e})=>{const r=D(),n=Qe(),{activeTypes:o,pop:a,push:i}=De(["rfqDetails","negotiateRfqStatus","toggleRfqStatus"]),[d,m]=u.useState(""),[c,l]=u.useState(10),[p,g]=u.useState(1),[f,x]=u.useState(null),{loading:v}=Pe(s=>s==null?void 0:s.auth),{rfqList:w,rfqTotalRecord:j,loading:R}={rfqList:[],rfqTotalRecord:10,loading:!1},F=u.useRef(null),[b,$]=u.useState("1"),T=!0,h=u.useCallback(async()=>{const s={};d&&(s.searchText=d),r(getAllRfqs({count:c,page:p,...s,isSubscription:!1,clientId:e}))},[d,c,p,r,e]),y=u.useCallback(async()=>{const s={};d&&(s.searchText=d),r(getAllRfqs({count:c,page:p,...s,isSubscription:T,clientId:e}))},[d,c,p,T,r,e]),z=u.useCallback(()=>{b==="1"?h():b==="2"&&y()},[b,h,y]);u.useEffect(()=>{z()},[z]);const N=s=>{F.current&&(b==="1"||b==="2")&&clearTimeout(F.current),F.current=setTimeout(()=>{g(1),m(s)},1e3),g(1)},_=(s,k,M,ce,de)=>{!s||!M||(M=="negotiate"?(i("negotiateRfqStatus"),x({id:s,status:M,name:k,amount:ce,comments:de})):(x({id:s,status:M,name:k,amount:ce,comments:de}),i("toggleRfqStatus")))},se=s=>{x(s),i("rfqDetails")},le=[{label:"RFQ ID",render:(s,k)=>t.jsxs(t.Fragment,{children:[b==="1"&&t.jsxs("div",{className:"serviceCodeWrapper",children:[t.jsx("div",{onClick:()=>se(s),children:s==null?void 0:s.id}),(s==null?void 0:s.is_corporate)&&t.jsx("span",{className:"isCorp",children:"C"})]}),b==="2"&&t.jsxs("div",{className:"serviceCodeWrapper",children:[t.jsx("div",{onClick:()=>se(k),children:k==null?void 0:k.id}),(k==null?void 0:k.is_corporate)&&t.jsx("span",{className:"isCorp",children:"C"})]})]})},{label:"RFQ Name",key:"rfq_name",dataIndex:"rfq_name",render:s=>Be(s)},{label:"Submittion Date",render:s=>t.jsx(t.Fragment,{children:pe(s==null?void 0:s.created_at).format("YYYY-MM-DD")})},{label:"Submittion Time",render:s=>t.jsx(t.Fragment,{children:pe(s==null?void 0:s.created_at).format("HH:mm:ss")})},{label:"Status",render:s=>t.jsx(t.Fragment,{children:(s==null?void 0:s.status)??"N/A"})},{label:"Total Amount",key:"total_amount",dataIndex:"total_amount"},{label:"Action",render:s=>t.jsx(t.Fragment,{children:t.jsx("div",{className:"action-icons-sec-new",children:s!=null&&s.status?t.jsx("p",{className:`capitalize ${(s==null?void 0:s.status)==="approved"?"text-green-600":"text-red-500"}`,children:s==null?void 0:s.status}):t.jsxs("div",{className:"flex items-center justify-center gap-2",children:[(s==null?void 0:s.status)!="rejected"&&t.jsx(B,{onClick:()=>{_(s==null?void 0:s.id,s==null?void 0:s.rfq_name,"approved")},className:"!border-green-600 !text-green-600",children:"Approve"}),t.jsx(B,{onClick:()=>{_(s==null?void 0:s.id,s==null?void 0:s.rfq_name,"negotiate",s==null?void 0:s.total_amount)},className:"!border-[#252b61",children:"Negotiate"}),t.jsx(B,{onClick:()=>{_(s==null?void 0:s.id,s==null?void 0:s.rfq_name,"rejected")},className:"!border-red-500 text-red-500",children:"Reject"})]})})})}];return t.jsx(t.Fragment,{children:t.jsxs(et,{children:[t.jsxs("div",{className:"freshbag-wrapper px-2 py-2 sm:py-2 sm:px-3",children:[v&&t.jsx(Ve,{}),t.jsxs("div",{className:"content getinTouchPage",children:[t.jsx("h2",{children:"RFQ"}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("div",{children:t.jsx(Ye,{className:"h-10",onSearch:N})}),t.jsx("div",{children:t.jsx(te,{className:"py-2",onClick:()=>n(`/rfq/rfqcreate?type=${b}`),children:"Request for Quote"})})]}),t.jsx("div",{className:"mt-4",children:t.jsx(je,{onChange:s=>{g(1),$(s),m("")},tabs:[{label:"Service Subscription",value:"1",children:t.jsx(t.Fragment,{children:t.jsx(he,{columns:le,rfqList:w,isLoading:R,page:p,total:j,pageSize:c,onPageChange:(s,k)=>{g(s),l(k)}})})},{label:"Wellness Subscription",value:"2",children:t.jsx(he,{pageSize:c,rfqList:w,columns:le,isLoading:R,page:p,total:j,onPageChange:(s,k)=>{g(s),l(k)}})}]})})]})]}),t.jsx(qt,{activeTypes:o,pop:a,selectedRfq:f,activeTab:b,onRefresh:z})]})})};export{Gt as default};
