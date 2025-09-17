import styled from "styled-components";

export const ScanDetailsStyled = styled.div`
  width: 100%;
  font-family: Outfit, sans-serif;

  .scanDetailsContainer {
    padding: 24px 48px 0px 52px;
    background: #ffffff;
  }
  .time-section1 span {
    margin-right: 10px;
  }
  .walletsinfo-sec-content {
    padding: 50px;
  }
  .accordion-item:last-of-type > .accordion-header .accordion-button.collapsed {
    padding: 5px 0px;
  }
  .accordion-button:not(.collapsed) {
    background-color: #fff;
    border: none;
  }
  .my-prefrance-btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: fit-content !important;
    border-radius: 45px;
    background: #252b61 !important;
    color: #fff;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.27px;
    text-transform: capitalize;
  }
  .home-collection {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.27px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
  }
  .home-center {
    color: #888;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.27px;
  }
  .bodyScanDiv {
    width: 97%;
    // height: 175px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    /* background: #f6f9fd; */
    padding: 8px 0px 9px 9px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
  }
  .scanCenterLogoTxt {
    padding-left: 10px;
    width: 70%;
  }
  .mypreference-div {
    padding: 0rem 2rem 0rem 2rem;
  }
  .hm-icon {
    color: #328400;
  }
  .hm-txt {
    font-weight: 500;
    font-size: 14px;
  }

  .imageparentDiv {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding: unset;
  }
  .imageTextDiv {
    padding: 2px 0px 0px 21px;
  }
  .imageTextDiv p {
    margin-bottom: 14px;
  }
  .bodyScanTxt {
    color: #000;
    // font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.7;
  }
  .orderPeoples {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    opacity: 0.25;
  }
  .needCheckUpTxt {
    color: #000;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
  .fastingTime {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .waterLevel {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .scanDescriptionRow {
    min-height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #eff0ff;
    padding: 8px 0px 9px 9px;
    margin-top: 2rem;
    margin-left: -5px;
  }
  .scanDesTitle {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .scanDespTxt {
    color: #000;
    text-align: justify;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 174.5%; /* 20.94px */
    opacity: 0.5;
  }
  .share-btn-icon img {
    height: 1.5rem;
    width: 1.5rem;
  }
  .scanDespVideoRow {
    margin-top: 2rem;
  }
  .scDepVdDiv {
    width: 364px;
    height: 194px;
    flex-shrink: 0;
    border-radius: 15px;
  }
  .arrowShareIcon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin: 0px 8px 0px 16px;
    cursor: pointer;
  }
  .heartIcon {
    width: 21px;
    height: 18px;
    flex-shrink: 0;
    margin-bottom: 14px;
  }
  .needHelpDiv {
    background: #fff;
    padding: 4px;
    cursor: pointer;
    border: 1px solid #4f4c4c;
    border-radius: 5px;
  }
  .sub-needHelpDiv {
    display: flex;
    align-items: center;
  }
  .toggle-filter {
    align-items: center;
  }

  .selector-filter-sub-module-div select {
    position: relative;
    border-radius: 44px;
    border: 1px solid #aca3a3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: left;
    font-size: 16px;
    color: #7e7979;
    font-family: Outfit, sans-serif;
  }
  .selector-filter-sub-module-div {
    display: flex;
    justify-content: end;
  }
  .selector-filter-sub-module-div select {
    font-weight: bold;
    margin-left: 5px;
    appearance: none;
    background-image: url("arrow-icon.png");
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 20px;
  }

  .selector-filter-sub-module-div select:focus {
    outline: none;
  }
  .selector-filter-sub-module-div div.ant-select-selector {
    border-radius: 44px;
    border: 1px solid #aca3a3;
    display: flex;
    width: 215px;
    box-shadow: none;
  }
  .headWrapper {
    flex-direction: row !important;
    .availablecentersTxt {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 0;
    }
    .toggle-filter {
      width: 100%;
      display: flex;
      gap: 10px;
    }
    .btn-filter-module-div {
      width: 100%;
      .toggle-filter {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 0.5rem;
      }
      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    padding: 28px 58px 39px 47px;
    flex-direction: column;
  }

  .availableCentersRow {
    width: 100%;
    max-height: calc(3 * 200px + 2rem);
    flex-shrink: 0;
    border-radius: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    padding: 1rem 2rem 1rem 2rem;
  }

  .availableCentersRow::-webkit-scrollbar {
    width: 9px;
  }

  .availableCentersRow::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  .centerPlace1 {
    margin-top: 4px;
  }
  .availableCentersRow::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  .availCenterContainer {
    width: 100%;
    /* height: 12rem; */
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    margin: 0px 28px 16px 20px;
    padding: unset;
    padding-bottom: 12px;
  }
  .availCenterRow {
    padding: 6px 8px 14px 11px;
  }
  .availCenterLogoCol {
    padding: 0px;
    width: 30%;
  }
  .centerName {
    color: #000;
    // font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
    padding-bottom: 3px;
  }
  .centerPlace {
    color: #0b8f60;
    // font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.9;
    padding-bottom: 8px;
  }
  .scanCenterFee {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  /* .offerCol {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  .offerCol span {
    margin-top: -5%;
  } */
  .scanCenterLogoDiv {
    width: 132px;
    height: 74px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #e4e2fe;
  }
  .scanCenterLogoDiv img {
    width: 100%;
    height: 100%;
  }
  .scanCenterTxtDiv {
    padding: 2px 0px 0px 21px;
  }
  .scanCenterLogoTxt {
    /* margin-right: 35%; */
  }
  .scanCenterLogoTxt p {
    margin: unset;
  }
  .scanViewGrapRow {
    /* margin: unset; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .scanViewGrapRow .col {
    padding: unset !important;
  }
  .viewGraphBtn {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.7;
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.8;
    background: #fff;
    margin-left: 4%;
  }
  .reportHoursCol {
    display: flex;
    align-items: center;
    margin-left: -10%;
  }
  .Check-btn-div {
    border: 1.5px solid black;
    /* opacity: 0.5; */
    background: #fff;
    color: #000;

    border-radius: 8px;
    height: 2.2rem;
  }

  .offerCol {
    position: relative; /* Make offerCol a containing block */
    display: flex;
    justify-content: right;
  }

  .offerCol span {
    position: relative;
  }

  .reportHours {
    position: absolute;
    top: 3%;
    left: 6%;
    /* transform: translate(-50%, -50%);  */
    color: #fff; /* Make the text color white to stand out against the green background */
    font-size: 10px;
    font-weight: 500;
    margin: unset;
    display: flex;
    align-items: center;
  }

  .reportHours img {
    margin-right: 5px; /* Add some space between the icon and the text */
  }

  svg {
    display: block; /* Ensure SVG takes up the correct space */
  }

  /* .reportHours {
    color: #000;
    // font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    margin: unset;
  } */
  .selectCenterBtnCol {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-right: 1rem;
  }
  .selectCenterBtn {
    color: #fff;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    // width: 101px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #9747ff;
    border: unset;
  }
  .select-Center-Btn {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    background: #9747ff;
    border: none;
    width: max-content;
  }
  .check-pin-div {
    // display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 4rem;
    width: 91%;
    background: #eff0ff;
    margin-left: 23px;
    padding-bottom: 7px;
    padding: 12px;
    border-radius: 4px;
  }
  .Check-Express-text {
    margin-top: -5px;
  }
  .details-page-price-list-sec {
    display: flex;
    justify-content: space-between;
    svg {
      display: inline-block;
    }
  }
  @media (max-width: 567px) {
    .check-pin-div {
      display: flex;
      flex-direction: column;
      height: 8rem;
      margin-left: 17px;
    }
  }
  .Check-lable {
    color: #9747ff;
    background: #fff;
    cursor: pointer;
    font-size: 10px;
  }
  .Available-div {
    font-size: 10px;
    font-weight: 500;
    color: #000;
    opacity: 0.7;
  }
  .check-box {
    border: 2px solid #fff;
    margin-left: 5px;
  }
  .input-group {
    width: 78%;
  }
  .form-control::placeholder {
    font-size: 14px;
  }
  .marginclass {
    margin: 12px;
  }
  .searchRow {
    margin-top: 25px;
    display: none; //we can enable this
  }

  .searchBoxDiv {
    width: 616px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.7;
    align-items: center;
  }
  .favorSearchBox {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 82%;
  }
  .attachedIcon {
    width: 9.804px;
    height: 12.629px;
    flex-shrink: 0;
    margin: 2px 15.2px 0px 13px;
  }
  .bgNone {
    background: unset;
  }
  .shareIcon {
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #9747ff;
    width: 30px;
    height: 31px;
    display: flex;
    margin-left: 16px;
  }
  .shareIcon svg {
    flex-shrink: 0;
  }
  .speackerIcon {
    width: 14px;
    height: 19px;
    flex-shrink: 0;
  }
  .askAITxt {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
  }
  .askAITxt span {
    opacity: 0.9;
    color: #0098ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .myPreference {
    display: flex;
    /* width: 184px !important; */
    /* height: 38px; */
    padding: 14px 50px !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    color: #9747ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    margin-top: 30px;
  }
  @media only screen and (max-width: 767px) {
    .imageparentDiv {
      width: -webkit-fill-available;
      margin: 8px;
    }
    .availableCentersRow {
      width: auto;
      overflow-y: scroll;
      // height: auto;
    }
    .scanDetailsContainer {
      padding: 0px;
    }
    .offerCol {
      position: relative; /* Ensure relative positioning */
      justify-content: flex-start; /* Align items to the left */
      margin-top: -136px; /* Adjust to move the SVG to the top right */
    }

    .offerCol span {
      position: absolute; /* Absolute positioning for the SVG */
      top: 0;
      right: 0;
    }
    .availCenterContainer {
      width: 85%;
      height: fit-content;
    }
    .scanDespVideoRow {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .scDepVdDiv {
      width: 100%; /* Adjust to full width on mobile */
      height: auto; /* Allow height to adjust based on content */
      border-radius: 0; /* Remove border radius on mobile */
    }

    .arrowShareIcon,
    .heartIcon,
    .needHelpDiv {
      display: block; /* Ensure icons and divs stack vertically */
      margin: 10px auto; /* Center align and add spacing */
      text-align: center; /* Center align text within div */
    }

    .needHelpDiv svg {
      display: inline-block; /* Adjust SVG display */
      vertical-align: middle; /* Align SVG vertically */
      margin-right: 5px; /* Adjust margin as needed */
    }

    .imageparentDiv {
      text-align: center;
    }
    .bodyScanDiv {
      width: auto;
    }
    .scDepVdDiv img {
      width: 100%;
    }
    .searchBoxDiv {
      width: auto;
    }
    .searchRow {
      display: block;
    }
    .shareIcon {
      display: none;
    }
    .scanDetailsContainer {
      // margin-top: 30px;
      margin-bottom: 30px;
    }
    .scanDescriptionRow {
      width: 100%;
    }
  }
  .imageparentDiv {
    height: 100%;
    & > img {
      max-width: 14rem;
      max-height: 13rem;
      object-fit: contain;
    }
  }
  .btn {
    width: 70px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    border: none;
  }

  .btn,
  .socials {
    border-radius: 20px;
    background-color: transparent;
    gap: 8px;
  }

  .socials {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    top: 0;
    left: 0;
    transition: 0.2s linear;
    visibility: hidden;
  }

  .btn:hover > .socials {
    visibility: visible;
    top: -120%;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    position: relative;
  }

  .btn:hover > .icon {
    transform: scale(1.2);
    cursor: pointer;
    transition: 0.2s linear;
  }

  .btn:focus > .icon {
    fill: #fd1853;
    animation: grosseur 0.2s linear;
  }

  @keyframes grosseur {
    0% {
      width: 50px;
      height: 50px;
      fill: #fd1853;
    }

    100% {
      width: 30px;
      height: 30px;
      fill: #fd1853;
    }
  }
  .Grph-btn {
    display: flex;
    justify-content: end;
  }
  .Grph-btn button {
    border: none;
    background: none;
    background: #be98ee;
    height: 3rem;
    width: 9rem;
    margin-right: -2.5rem;
    border-radius: 6px;
  }

  .Grph-btn1 {
    display: flex;
    justify-content: end;
  }
  .close-btn {
    border: none;
    background: none;
    margin-right: -2.5rem;
    border-radius: 6px;
    font-size: 2rem;
  }
  .amount-div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    p {
      background: #e8ffb7;
    }
  }

  .reportHours1 {
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    margin: unset;
  }
  .reportHours2 {
    color: #275800;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }

  .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 240px;
    margin-bottom: 1rem;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: #000000;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 23px;
    padding: 0 3px;
    background: #fff;
    width: fit-content;
    font-weight: 600;
    opacity: 0.9;
  }

  .coolinput input[type="text"].input {
    padding: 8px 10px;
    font-size: 0.75rem;
    border: 1px #000000 solid;
    border-radius: 5px;
  }

  .coolinput input[type="text"].input:focus {
    outline: none;
  }
  .chare-icon {
    font-size: 1rem;
  }
  .error {
    margin: -1rem 5.7rem;
    font-size: 11px;
    opacity: 0.8;
    font-weight: 500;
    color: #f10808;
  }

  .success {
    margin: -1rem 5.7rem;
    font-size: 11px;
    opacity: 0.8;
    font-weight: 500;
    color: #128e12;
  }

  .checkbox {
    --light: rgba(189, 185, 185, 0.425);
    --primary-color: #8c00ff;
    --duration: 0.3s;
    --ease: ease-in-out;
  }

  .checkbox input[type="checkbox"] {
    display: none;
  }
  .checkbox input {
    display: none;
    border-radius: 2px solid red;
  }

  .checkbox label {
    align-items: center;
    cursor: pointer;
    display: flex;
    opacity: 0.7;
    pointer-events: none;
  }

  .checkbox label.active {
    opacity: 1;
    pointer-events: auto;
  }

  .checkbox label span {
    margin-left: 8px;
  }

  .checkbox svg {
    height: 30px;
    width: 30px;
  }

  .checkbox svg > rect {
    fill: var(--light);
    stroke: #8c00ff;
    stroke-dasharray: 400%;
    stroke-dashoffset: 400%;
    transition: var(--duration) stroke-dashoffset var(--ease);
  }

  .checkbox svg path {
    stroke: var(--primary-color);
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    transition: var(--duration) stroke-dashoffset var(--ease);
  }

  .checkbox input[type="checkbox"]:checked + label svg > rect,
  .checkbox input[type="checkbox"]:checked + label svg path {
    stroke-dashoffset: 0;
  }
  .grph-div {
    background-color: #e3ebf3;
    padding: 2rem;
  }

  .btn-div {
    display: flex;
    gap: 1rem;
  }
  .btn-div button {
    width: 6rem;
    background-color: #fff;
    border: 1px #000;
    height: 34px;
    padding: 10px;
    opacity: 0.4;
    font-size: 12px;
    color: #000;
    border-radius: 2px solid red;
  }
  .sub-grph-div p {
    width: 798px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    opacity: 0.5;
    color: #001e6c;
  }
  .date-btns {
    border: 1px solid #000;
    width: 100%;
    opacity: 0.5;
  }
  @media only screen and (max-width: 767px) {
    .sub-grph-div p {
      width: auto;
    }
    .btn-div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      margin-bottom: 10px;
    }
  }

  .rightContainer {
    background: #f5f5f5;
    border-radius: 15px;
    padding: 0rem;
    height: 100%;
  }
  .diagnostic-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 25px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    overflow: visible;
    position: relative;
    width: fit-content;
    padding: 12px 12px;
    width: 100%;
    /* height: 100%; */

    button {
      background: #252b61;
      border-radius: 25px;
      border: none;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 3px;
      height: 30px;
      padding: 16px;
      font-family: Outfit, sans-serif;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .card-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #a5d6a7;
    color: #141414;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .card-content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .card-logo {
    cursor: pointer;
    width: 11.313rem;
    border-radius: 15px;
    background-color: #f0f0f5;
    height: 168.3px;
  }

  .card-logo img {
    object-fit: contain;
    width: 11.313rem;
    height: 10.5rem;
    border-radius: 15px;
  }

  .card-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      margin: 0 0 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      padding: 0px;
      font-family: Outfit, sans-serif;
      font-weight: 500;
    }
  }

  .card-prices {
    display: flex;
    align-items: center;
    margin: 5px 0px 14px 0px;
  }

  .current-price {
    color: #141414;
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
    font-family: Outfit, sans-serif;
  }

  .original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 14px;
    margin-right: 10px;
    font-family: Outfit, sans-serif;
  }

  .discount-text {
    color: #2c7420;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.24px;
  }

  .card-info {
    margin-top: 10px;
  }

  .info-item-address-sec {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #252b61;
    margin: 5px 0;
  }
  .info-item-address-sec {
    margin-bottom: 10px;
    padding-right: 16px;
    .km_distance_sec {
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 1.5px;
    }
    svg {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
  }

  .info-item-address-sec svg {
    margin-right: 5px;
    color: #141414;
    width: 1rem;
    height: 1rem;
  }
  .ant-switch-checked {
    background-color: Gray;
  }

  .ant-switch-handle::before {
    background-color: #252b61;
  }
  .add-button {
    background: #141414;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    width: 100%;
  }

  .add-button:hover {
    background: #1b5e20;
  }

  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    width: 5rem;
    height: 1.625rem;

    .rectangle {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #89db7b;
      padding: 5px 5px 5px 0px;
      border-radius: 10px 45px 45px 0;
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.18px;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }

  .checkup-card {
    /* border: 1px solid #e0e0e0; */
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    max-width: inherit;
    margin-bottom: 1rem;
  }

  .checkup-title {
    font-size: 32px;
    font-weight: 500;
    color: #1e1e1e;
    margin-bottom: 8px;
  }

  /* .checkup-description {
    font-size: 14px;
    color: #757474;
    margin-bottom: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
  } */

  .checkup-description-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #1a1a1a;
    flex-wrap: wrap;
    line-height: 1.5;
    width: 35rem;
  }

  .checkup-description {
    margin: 0;
    flex: 1;
    font-weight: 500;
  }

  /* Truncate to a single line */
  .truncated {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  /* Full content when expanded */
  .expanded {
    white-space: normal;
  }

  .read-more-link {
    margin-left: 10px;
    color: #2b2b74;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    white-space: nowrap;
  }
  .description-content {
    color: #141414 !important;
    font-family: Outfit, sans-serif !important;
    font-size: 20px !important;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
    margin: 0px !important;
  }
  .checkup-button {
    background-color: #89db7b;
    color: #252b61;
    border: none;
    border-radius: 15px;
    padding: 10px 16px;
    cursor: pointer;
    margin: 37px 0px 0px 0px;
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .checkup-button:hover {
    background-color: #58b95b;
  }

  .checkup-details p {
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #888;
    margin: 8px 0;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & > div {
      display: flex;
      flex-direction: row;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
    strong {
      font-weight: 500;
      color: #1e1e1e;
    }
  }
  .checkup-details .prep {
    flex-direction: column;
  }
  .discount {
    color: #ff5722;
    font-weight: 500;
  }

  .vendor-list {
    margin-top: 16px;
  }

  .vendor {
    border: 1px solid #f0f0f0;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
  }

  .checkup-video {
    video {
      width: 100%;
      max-width: inherit;
      border-radius: 25px;
    }
  }

  .price-container {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: "Outfit", sans-serif;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .price-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .original-price {
    font-size: 14px;
    text-decoration: line-through;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: #6f6b6b;
  }

  .discounted-price {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    color: #141414;
  }

  .discount-badge {
    background-color: #d8f3dc;
    color: #141414;
    border-radius: 12px;
    padding: 2px 8px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #141414;
  }

  .divider {
    width: 1px;
    height: 20px;
    background-color: #ececec;
  }

  .report-time {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    color: #141414;
  }
  @media (min-width: 1200px) {
    .h4,
    h4 {
      font-size: 1rem;
    }
  }

  .bottomWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    gap: 1rem;
    .availableIn90 {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      background: #fff5d8;
      padding: 10px;
      border-radius: 25px;
      span {
        font-weight: 500;
        text-wrap: nowrap;
      }
      img {
        height: 100%;
      }
    }
  }

  button[disabled] {
    opacity: 0.5;
  }
  .pin-code-checker {
    display: flex;
    justify-content: end;
  }
  .similarItems {
    p {
      padding: 1rem 0;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0;
    }

    .healthCards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-content: center;
      place-items: center;
      gap: 2rem;
      padding: 0 1rem;
      @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .textContent {
        flex-wrap: wrap;
      }
      .imgWrapper {
        /* min-height: 10rem; */
      }
    }
  }
  .graph-main-div {
    gap: 2rem;
  }
  .left-slot-filter {
    width: 30%;
  }
  .left-slot-filter-card {
    padding: 27px;
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .right-slot-filter {
  }
  .filter-checkbox {
    display: flex;
    flex-direction: column;
  }
  .slot-carousel-container,
  .graph-container {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  .arrow-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: #888;
    cursor: pointer;
    padding: 10px;
  }
  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 10px;
    background: white;
    text-align: center;
    cursor: pointer;
  }
  .vertical-line {
    width: 1px;
    height: 6rem;
    background-color: black;
  }
  .add-btn-package-sec-code {
    margin-left: 12px !important;
    margin-top: -5px;
  }
  .graph-container {
    padding: 1rem;
  }
  .mainWrapperContainer {
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  .time-slots-container {
    display: flex;
    flex-direction: column;
    /* padding: 1rem 0; */
    @media screen and (max-width: 1100px) {
      /* width: inherit; */
    }
    p {
      /* margin-bottom: 5px; */
    }
    .slot-row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      /* margin-bottom: 1rem; */
      svg {
        cursor: pointer;
      }
      .otherInfo {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
      }
      @media screen and (max-width: 1100px) {
        // flex-wrap: wrap;
        // .otherInfo {
        //   flex-direction: column;
        //   align-items: flex-start;
        // }
        // & > div,
        // .otherInfo > div {
        //   width: 100%;
        //   display: flex;
        //   flex-direction: row;
        //   gap: 1rem;
        //   justify-content: center;
        // }
        // & input {
        //   width: fit-content;
        // }
      }
    }
  }
  @media (max-width: 768px) {
    .mobile-header {
      padding: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    .slot-row {
      gap: 5px;
      font-size: 13px;
      .gender-section {
        display: none;
      }
      .time-section1 span {
        margin-right: 0px;
      }
    }
    .walletsinfo-sec-content {
      padding: 20px;
    }
  }
  .selector-filter-sub-module-div {
    height: 100%;
  }

  .test-list .test-item {
    display: none;
  }

  .test-list .test-item:nth-child(-n + 5) {
    display: block;
  }

  .test-list.show .test-item {
    display: block;
  }
  .show-more-test-btn {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
  }
  /* .heading-description-div {
    margin-top: 37px;
  } */

  .heading-description {
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin-bottom: 9px;
  }
  .sub-heading-description {
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.24px;
    margin: 0px;
    /* max-height: 70px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.3s ease;
    width: 88%; */
  }
  .sub-heading-description1 {
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.24px;
    margin: 0px;
    max-height: 70px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.3s ease;
    width: 88%;
  }
  @media (min-width: 1200px) {
    .h3,
    h3 {
      font-size: 1.2rem;
    }
  }
  .sub-heading-preparation,
  .sub-heading-tests {
    width: 88% !important;
    color: #616161 !important;
    font-weight: 400 !important;
  }
  .read-more-toggle {
    display: none;
  }
  .preparation-read-more-toggle {
    display: none;
  }
  .tests-read-more-toggle {
    display: none;
  }
  .read-more-toggle:checked + .sub-heading-description {
    max-height: 500px;
  }
  .tests-read-more-toggle:checked + .sub-heading-tests {
    max-height: 500px;
  }
  .preparation-read-more-toggle:checked + .sub-heading-description {
    max-height: 500px;
  }
  .tests-read-more-toggle:checked + .sub-heading-tests {
    max-height: 500px;
  }
  .read-more-toggle:checked + .sub-heading-description + .read-more-btn {
    display: none;
  }
  .tests-read-more-toggle:checked + .sub-heading-description + .read-more-btn {
    display: none;
  }
  .preparation-read-more-toggle:checked
    + .sub-heading-description
    + .read-more-btn {
    display: none;
  }
  .read-more-btn {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    cursor: pointer;
  }
  .tests-read-more-btn {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    cursor: pointer;
  }
  .preparation-read-more-btn {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    cursor: pointer;
  }
  .ideal-for-div {
    display: flex !important;
    margin-bottom: 0px !important;
  }
  .ideal-text {
    color: #888;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.3px;
    margin-bottom: 0px;
    margin-left: 12px;
    img {
      height: 22px;
      width: 22px;
      margin-right: 5px;
    }
  }
  .recommended-heading-text {
    width: 40% !important;
  }

  @media (max-width: 780px) {
    .checkup-video video {
      width: 100%;
    }
    .headWrapper {
      flex-direction: column !important;
      padding: 20px 0px 20px 20px;
    }
    .selector-filter-sub-module-div {
      justify-content: start;
      margin-top: 1rem;
    }
    .sub-heading-preparation,
    .cXAcTD .sub-heading-tests,
    .sub-heading-description,
    .sub-heading-tests {
      width: 100% !important;
      text-align: left;
    }
    .checkup-title {
      font-size: 25px;
    }
    .availableCentersRow {
      padding: 1rem 1rem 1rem 2rem;
    }
    .row,
    .row > * {
      margin-right: 0px;
      padding-right: 0px;
    }
    .share-btn-icon {
      padding: 0px;
    }
  }
`;
