import{d as xe,j as e,u as me,r,S as L,P as G,z as ke,a as ge,f as C,c as j,F as le,h as Y,b as Ne,e as ve,g as we,i as _e,k as Ce,R as Se,m as ze,p as Me}from"./index-DfZtGQXr.js";import{R as W,D as ae,a as re}from"./DownloadForm-gI-sSzr_.js";import{C as F}from"./CustomModal-DRINlL69.js";import{u as De,C as Fe,M as N,a as ce,b as Ye}from"./CustomTable-CxG1M29Y.js";import{c as Q,S as Ie}from"./createLucideIcon-iGJg7RZd.js";import{u as Ae}from"./bookingsQuery-CSQni0Ze.js";import{u as Re}from"./index-D5YMMLUB.js";import"./index-CeRRVkHl.js";import"./index-DVu5x1H5.js";import"./dayjs.min-CDV0DCq_.js";import"./index-DJBL5awq.js";import"./Input-CCmgaZ4N.js";import"./useQuery-C7y5wVpv.js";const de=xe.div`
  width: 100%;
  padding: 20px;
  font-family: inter;

  .ant-select-selector {
    border-radius: 25px !important;
    border:1px solid #252b61 !important;
  }

  .ant-select {
    height: 37px;
  }
  .ant-picker {
    border-radius: 25px !important;
    height: 37px !important;
    border:1px solid #252b61 !important;
  }

  .ant-select-selection-placeholder{
    font-size:16px;
  }

  .date-range-picker {
    height: 37px;
  }

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
      box-shadow: 2px 4px 15px 0px #0000001a;

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
`,Te=xe.div`
  margin: 10px 0;
  width: 100%;
  font-family: system-ui, -apple-system, sans-serif;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .booking-details-mobile{
    max-width:50px;
  }

  .filter-list {
    border-top: 1px solid #e5e7eb;
  }

  .filter-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
  }

  label {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    color: #374151;
  }
`,Pe=n=>{const{filters:h,selectedFilters:p,handleChange:v,title:l="Filters",render:m}=n;return e.jsx(Te,{children:e.jsx("div",{className:"filter-list",children:h.map((o,w)=>typeof m=="function"?m():e.jsxs("div",{className:"filter-item",children:[e.jsx("input",{type:"checkbox",id:`filter-${o==null?void 0:o.label}`,checked:p==null?void 0:p.includes(o==null?void 0:o.key),onChange:()=>v(o==null?void 0:o.key,h),disabled:o==null?void 0:o.disabled}),e.jsx("label",{htmlFor:`filter-${o==null?void 0:o.label}`,children:o==null?void 0:o.label})]},w))})})};/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],$e=Q("CircleX",Be);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Le=Q("Mail",Oe);/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ve=Q("Phone",Ee),pe=({data:n,time:h,instituteAction:p})=>{var a,_,D,R,T,H,P,J,B,K;me();const{pop:v,push:l,activeTypes:m}=De(["reports_download"]),[o,w]=r.useState(!1),[y,k]=r.useState(null),[S,c]=r.useState({}),[u,d]=r.useState(!1),I=((a=n==null?void 0:n.doctor)==null?void 0:a.name)||"",z=((_=JSON.parse(localStorage.getItem("user")||JSON.stringify({})))==null?void 0:_.phone)||"",E=`${((D=n==null?void 0:n.user)==null?void 0:D.first_name)||""} ${((R=n==null?void 0:n.user)==null?void 0:R.last_name)||""}`,V=((T=n==null?void 0:n.user)==null?void 0:T.phone)||((P=(H=n==null?void 0:n.user)==null?void 0:H.parent)==null?void 0:P.phone)||"",A=async()=>{},M=()=>{w(!1)},U=()=>{var f;const g=(f=n==null?void 0:n.user)==null?void 0:f.email;g?window.location.href=`mailto:${g}`:ke.error("No email address found for this patient")},q=async g=>{};return e.jsxs("div",{className:"action-div",children:[e.jsxs(F,{title:"Confirm Call",open:o,handleClose:M,width:"420px",headerClassName:"bg-blue-50 border-b border-blue-100 !px-2 rounded-t-2xl",bodyClass:"px-6 py-4",children:[e.jsx(F.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"border-b pb-4",children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Calling from:"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold text-gray-900 text-base",children:I}),e.jsx("span",{className:"text-gray-600 text-sm",children:z})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Calling to:"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-semibold text-gray-900 text-base",children:E}),e.jsx("span",{className:"text-gray-600 text-sm",children:V})]})]})]})}),e.jsx(F.Footer,{children:e.jsxs("div",{className:"flex justify-between w-full gap-4",children:[e.jsx(L,{onClick:M,className:"w-1/2 py-2 text-base",children:"Cancel"},"cancel"),e.jsxs(G,{onClick:A,className:"w-1/2 py-2 text-base flex items-center justify-center",children:[e.jsx(Ve,{size:18,className:"mr-2"}),"Call Now"]},"call")]})})]}),e.jsx(e.Fragment,{children:((J=n==null?void 0:n.attachments)==null?void 0:J.length)>0&&e.jsxs(G,{className:"action-btns-virtual text-nowrap",onClick:()=>l("reports_download"),children:[e.jsx(W,{size:20,className:"!mr-1"}),"Download Reports"]})}),e.jsxs(L,{className:"text-nowrap ",onClick:U,children:[e.jsx(Le,{size:20,className:"!mr-1"}),"Email"]}),e.jsx(Fe,{activeTypes:m,modals:[{type:"reports_download",component:e.jsx(e.Fragment,{children:e.jsx(F,{open:!0,handleClose:()=>v("reports_download"),title:"Reports Download",width:"500px",headerClassName:"bg-blue-50 border-b border-blue-100 !px-2 rounded-t-2xl",bodyClass:"p-4",children:e.jsx(F.Body,{children:e.jsx("div",{className:"space-y-4",children:(K=(B=n==null?void 0:n.attachments)==null?void 0:B.filter(g=>(g==null?void 0:g.active_status)==="active"))==null?void 0:K.map((g,f)=>e.jsxs("div",{className:"flex items-center justify-between border-b pb-3",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-sm text-gray-600",children:g.url||`Report ${f+1}`})}),e.jsxs(G,{onClick:()=>q(g.id),className:"text-sm py-1.5",children:[e.jsx(W,{size:18,className:"mr-1"}),"Download"]})]},f))})})})})}]})]})},Ue=({data:n,instituteAction:h,time:p})=>{me();const v=ge();switch(n==null?void 0:n.status){case"booking_scheduled":{const l=Y((n==null?void 0:n.collection_1_date)??(n==null?void 0:n.collection_2_date),"DD/MM/YYYY"),m=Y(`${l.format("YYYY-MM-DD")} ${(n==null?void 0:n.collection_1_slot)??(n==null?void 0:n.collection_2_slot)}`,"YYYY-MM-DD h:mm a"),o=Y(p),w=m.diff(o),y=Y.duration(w),k=Math.floor(y.asMinutes()),S=y.seconds(),c=`${k}:${Math.abs(Number(S.toString().padStart(2,"0")))}`,u=async d=>{d.key==="call"?console.log("hai"):d.key==="video"?v(`/VideoCall?roomID=${n==null?void 0:n.id}`):d.key==="chat"&&console.log("chat")};return N,N.Item,N.Item,N.Item,k<30&&k>-10?j()?e.jsxs("span",{className:`status-btns ${k<10?"red-call":"yellow-call"}`,children:[e.jsx(Ne,{})," ",c]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"next-text",children:["Next ",c," min"]})}):j()?e.jsxs("span",{className:"mobile-upcoming-status status-btns text-green-600",children:[e.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png",alt:"upcoming"}),"upcoming"]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"upcoming-text table-status-div text-green-600",children:[e.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png",alt:"upcoming"}),"Upcoming"]})})}case"open":{const l=m=>{m.key==="reshedule"?console.log("reshedule"):m.key==="reject"?h("reject",n):m.key==="accept"&&h("approve",n)};return N,N.Item,N.Item,N.Item,j()?e.jsx("span",{className:"status-btns pending-status-mobile",children:"pending"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"table-status-div pending-text",children:[e.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999025608.png",alt:"upcoming"}),"Pending"]})})}case"completed":return j()?e.jsxs("span",{className:"status-btns completed-status-mobile whole-center",children:[e.jsx(le,{color:"green"}),"Completed"]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"table-status-div completed-status",children:[e.jsx(le,{color:"green"}),"Completed"]})});case"cancelled":return j()?e.jsxs("span",{className:"status-btns rejected-status-mobile",children:[e.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png",alt:"upcoming"}),"Rejected"]}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"table-status-div rejected-text",children:[e.jsx("img",{className:"label-img",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999287595.png",alt:"upcoming"}),"Rejected"]})});default:return e.jsx("span",{title:n==null?void 0:n.status,className:" status-btns other-status-mobile",children:C(n==null?void 0:n.status)})}},qe=({children:n,onClearButton:h,...p})=>e.jsxs("span",{className:"relative inline-block",children:[e.jsx(L,{className:"!cursor-default",...p,children:n}),e.jsx($e,{color:"red",className:"cursor-pointer absolute top-0 right-[-5px] transform -translate-y-1/2 bg-white",onClick:h})]}),ot=()=>{var Z,ee,te,$,se,ne,ie,oe;const n=ge(),{linkableId:h}=ve(),[p,v]=we(),l=p.get("globalsearch"),m=p.get("tab"),[o,w]=r.useState(1),[y,k]=r.useState(10),{section:S}=_e(),[c,u]=r.useState({dateRange:null,searchText:"",status:[]}),[d,I]=r.useState(()=>{const t=[{label:"All Bookings",key:"",data:null,classes:"all-label",type:"all"},{label:"Upcoming",key:"booking_scheduled,consultation_rescheduled",data:null,classes:"upcoming-label",type:"upcoming"},{label:"Pending",key:"open,payment_pending",data:null,classes:"open-label",type:"pending"},{label:"Prescription Sent",key:"prescription_sent_successfully",data:null,classes:"prescription-label",type:"prescription_sent"},{label:"Reports Delivered",key:"reports_delivered",data:null,classes:"reports-label",type:"reports_delivered"},{label:"Completed",key:"completed",data:null,classes:"completed-label",type:"completed"},{label:"Rejected",key:"cancelled",data:null,classes:"rejected-label",type:"rejected"}];let s=t[0];return S?s=t.find(i=>i.type===S)||t[0]:m&&(s=t.find(i=>i.type===m)||t[0]),{options:t,selectedFilter:s,selectedFilters:[s.type]}}),[z]=r.useState(new Date),E=()=>j()?[...new Set(d.options.filter(t=>d.selectedFilters.includes(t.type)).map(t=>t.key))].join(","):d.selectedFilter.key,V=()=>{if(j()){if(d.selectedFilters.includes("all"))return"All Bookings";const t=d.selectedFilters[0],s=d.options.find(i=>i.type===t);return(s==null?void 0:s.label)||"All Bookings"}return d.selectedFilter.label};r.useEffect(()=>{if(l){const t=d.options.find(s=>s.type==="all");t&&I(s=>({...s,selectedFilter:t,selectedFilters:["all"]}))}},[l,d.options]),r.useEffect(()=>{u(t=>({...t,searchText:l||""}))},[l]);const A=E(),M=V(),U=r.useMemo(()=>({from:"vendor",page:o,pageSize:y,status:j()?A:c.status.join(","),id:String(h),searchText:l&&M==="All Bookings"?l:c.searchText,...c.dateRange?{dateRange:{dateType:"scheduled",from:c.dateRange.start_date,to:c.dateRange.end_date}}:{}}),[o,y,A,c,h,l,M]),q=Re(U,600),{data:a,isPending:_}=Ae(q),[D,R]=r.useState(!1),T=t=>{l&&n("/bookings",{replace:!0}),I(s=>{const{selectedFilters:i,options:x}=s;let b;if(t==="all")b=["all"];else{const X=i.includes("all"),je=i.includes(t);X?b=[t]:je?b=i.filter(ye=>ye!==t):b=[...i,t]}b.length===0&&(b=["all"]);const O=b[0]||"all",fe=x.find(X=>X.type===O)||x[0];return{...s,selectedFilters:b,selectedFilter:fe}})},[H,P]=r.useState(!1),[J,B]=r.useState(null),[K,g]=r.useState(""),f=r.useCallback((t,s={})=>{["reject","approve","booking_details","reschedule"].includes(t)&&(g(t),B(s),P(!0))},[]),[be,he]=r.useState(!1),ue=t=>{n("/employees/detail/"+t)};return j()?e.jsxs(de,{children:[e.jsxs("div",{className:"booking-header-div flex flex-row justify-between items-center gap-2",children:[e.jsxs("div",{className:"flex gap-2 items-center flex-wrap",children:[e.jsx(ce,{onSearch:t=>{u(s=>({...s,searchText:t}))},className:"w-[100px]",searchText:c==null?void 0:c.searchText,placeHolder:"Search Bookings"}),e.jsx("div",{className:"date-range-picker",children:e.jsx(ae.RangePicker,{className:"w-[200px]",format:"DD/MM/YYYY",placeholder:["Start Date","End Date"],onChange:t=>{t&&t[0]&&t[1]?u(s=>{var i,x;return{...s,dateRange:{start_date:((i=t==null?void 0:t[0])==null?void 0:i.format("YYYY-MM-DD"))??"",end_date:((x=t==null?void 0:t[1])==null?void 0:x.format("YYYY-MM-DD"))??""}}}):u(s=>({...s,dateRange:null}))}})})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{className:"download-btn !ml-0",onClick:()=>he(!0),children:e.jsx(W,{size:20})}),be&&e.jsx(re,{sectionType:"bookings",sessionName:"bookings"}),e.jsxs("button",{className:"filter",onClick:()=>R(t=>!t),children:[e.jsx("span",{children:e.jsx("img",{src:D?"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png":"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741244655183.png",className:"filter",alt:"filter-icon"})}),"Filters"]})]}),e.jsx("div",{className:"booking-create"})]}),D&&e.jsx(Pe,{filters:d.options.map(t=>({key:t.type,label:t.label})),selectedFilters:d.selectedFilters,handleChange:T}),e.jsx("div",{className:"booking-mobile-body-div",children:(((ee=(Z=a==null?void 0:a.data)==null?void 0:Z.bookings)==null?void 0:ee.length)??0)>0?(se=($=(te=a==null?void 0:a.data)==null?void 0:te.bookings)==null?void 0:$.map)==null?void 0:se.call($,t=>{var i,x,b,O;const s=Y((t==null?void 0:t.collection_1_date)??(t==null?void 0:t.collection_2_date),"DD/MM/YYYY");return e.jsxs("div",{className:"booking-mobile-div-card",children:[e.jsxs("div",{className:"flex justify-between gap-[2px]",children:[e.jsxs("div",{className:"booking-mobile-card-details",children:[e.jsxs("div",{className:"calender-box-mobile",children:[e.jsx("span",{className:"date-number-span",children:s!=null&&s.isValid()?s.date():"N/A"}),e.jsx("span",{className:"date-month-name",children:s!=null&&s.isValid()?s.format("MMM").toUpperCase():"N/A"}),e.jsx("span",{className:"booking-type",children:s!=null&&s.isValid()?s.format("YYYY").toUpperCase():"N/A"})]}),e.jsxs("div",{className:"booking-details-mobile",children:[e.jsx("p",{title:`${((i=t==null?void 0:t.user)==null?void 0:i.first_name)??""} ${((x=t==null?void 0:t.user)==null?void 0:x.last_name)??""}`,onClick:()=>f("booking_details",t),className:"booking-details-name cursor-pointer",children:`${((b=t==null?void 0:t.user)==null?void 0:b.first_name)??""} ${((O=t==null?void 0:t.user)==null?void 0:O.last_name)??""}`}),e.jsx("p",{title:(t==null?void 0:t.collection_1_slot)??(t==null?void 0:t.collection_2_slot)??"N/A",className:"booking-details-slot",children:(t==null?void 0:t.collection_1_slot)??(t==null?void 0:t.collection_2_slot)??"N/A"}),e.jsx("p",{title:C((t==null?void 0:t.type)??"N/A"),className:"booking-details-type",children:C((t==null?void 0:t.type)??"N/A")})]})]}),e.jsx("div",{className:"status-mobile-div",children:e.jsx(Ue,{data:t,time:z,instituteAction:f})})]}),e.jsxs("div",{children:[e.jsx("hr",{className:"my-1"}),e.jsx(pe,{instituteAction:f,time:z,data:t})]})]},t.id)}):!_&&e.jsx("p",{className:"my-5  text-center text-red-500",children:"No bookings available"})}),e.jsx("div",{className:"load-more-btn-div",children:_?e.jsx(Ce,{indicator:e.jsx(Se,{style:{fontSize:48},spin:!0})}):e.jsx(L,{disabled:(((ne=a==null?void 0:a.data)==null?void 0:ne.totalCount)??0)<y||_,onClick:()=>k(t=>t+10),children:"Load More"})})]}):e.jsx(de,{children:e.jsxs("div",{className:"booking-container",children:[e.jsxs("div",{className:"heading",children:[e.jsx("h2",{children:"My Bookings"}),e.jsxs("p",{children:["My Bookings > ",d.selectedFilter.label," ",Number(l==null?void 0:l.length)>0?e.jsxs(e.Fragment,{children:["> ",l]}):""]})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-2 items-end lg:items-center justify-between mb-[15.5px]",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(ce,{onSearch:t=>{u(s=>({...s,searchText:t}))},className:"w-[100px]",searchText:c==null?void 0:c.searchText,placeHolder:"Search Bookings"}),e.jsx("div",{className:"sort-dropdown",children:e.jsx("div",{className:"select-wrapper",children:e.jsx(Ie,{maxTagCount:1,value:c.status,mode:"multiple",maxTagPlaceholder:()=>"...",popupMatchSelectWidth:!1,placeholder:"Status",className:"min-w-[100px]",onChange:(t,s)=>{u(i=>{var x;return{...i,status:(x=s==null?void 0:s.map)==null?void 0:x.call(s,b=>b.value)}})},options:["booking_scheduled","consultation_rescheduled","open","payment_pending","prescription_sent_successfully","reports_delivered","completed","cancelled"].map(t=>({value:t,label:C(t)}))})})}),e.jsx("div",{className:"date-range-picker",children:e.jsx(ae.RangePicker,{className:"w-[200px]",format:"DD/MM/YYYY",placeholder:["Start Date","End Date"],onChange:t=>{t&&t[0]&&t[1]?u(s=>{var i,x;return{...s,dateRange:{start_date:((i=t==null?void 0:t[0])==null?void 0:i.format("YYYY-MM-DD"))??"",end_date:((x=t==null?void 0:t[1])==null?void 0:x.format("YYYY-MM-DD"))??""}}}):u(s=>({...s,dateRange:null}))}})}),p.get("clientOrderId")&&e.jsx("div",{children:e.jsxs(qe,{onClearButton:()=>{v(t=>(t.delete("clientOrderId"),t))},children:["Order Id:",p.get("clientOrderId")]})})]}),e.jsx("div",{className:"pd-container",children:e.jsx(re,{sectionType:"bookings",sessionName:"bookings"})})]}),e.jsx("div",{children:e.jsx(Ye,{columns:[{label:"Serial No",key:"Serial No",dataIndex:"id",render:(t,s)=>e.jsx("p",{onClick:()=>f("booking_details",s),className:"text-center m-0 !text-blue-600 cursor-pointer",children:t})},{label:"Name",key:"Name",dataIndex:"user",render:(t,s)=>e.jsx("span",{onClick:()=>{var i;return ue((i=s==null?void 0:s.user)==null?void 0:i.id)},className:"name !text-blue-600 cursor-pointer",children:ze(t==null?void 0:t.first_name,t==null?void 0:t.last_name)})},{label:"Age & Sex",key:"Age & Sex",dataIndex:"user",render:t=>{var s,i;return e.jsx("p",{className:"m-0",children:`${(t==null?void 0:t.age)??"N/A"}/${((i=(s=t==null?void 0:t.gender)==null?void 0:s[0])==null?void 0:i.toUpperCase())??"N/A"}`})}},{label:"Date & Time",key:"Date & Time",dataIndex:"collection_1_date",render:(t,s)=>e.jsxs("p",{className:"m-0",children:[Me(t??(s==null?void 0:s.collection_2_date))," / ",(s==null?void 0:s.collection_1_slot)??(s==null?void 0:s.collection_w_slot)??"N/A"]})},{label:"Visit Type",key:"Visit Type",dataIndex:"type",render:t=>e.jsx("p",{className:"m-0",children:C(t)??"N/A"})},{label:"Status",key:"Status",dataIndex:"type",render:(t,s)=>C(s==null?void 0:s.status)??"N/A"},{label:"Actions",key:"Actions",dataIndex:"actions",render:(t,s)=>e.jsx(pe,{instituteAction:f,time:z,data:s})}],data:((ie=a==null?void 0:a.data)==null?void 0:ie.bookings)||[],showingName:p.get("clientOrderId")?`bookings for order:${p.get("clientOrderId")}`:"bookings",isLoading:_,page:o,pageSize:y,pagination:!0,onPageChange:(t,s)=>{w(t),k(s)},total:((oe=a==null?void 0:a.data)==null?void 0:oe.totalCount)??0})})]})})};export{ot as default};
