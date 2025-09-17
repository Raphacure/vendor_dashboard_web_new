import styled from "styled-components";

export const MedicineCardModuleStyled = styled.div`
  border-radius: 20px;
  border: 1px solid #ececec;
  width: 100%;
  .medicine-card {
    width: 100%;
    background: white;
    border-radius: 20px;
    border-radius: 1px solid #000 !important;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    border-radius: 20px 20px 0px 0px;
    background: #eaeaf0;
  }
  .img-div img {
    width: 11rem;
    height: 7rem;
    object-fit: contain;
  }
  .sub-img-div {
    margin: 20px;
    height: 7rem;
  }

  .text-div {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
  }
  /* .medicineDetail {
    max-width: 13rem;
  } */
  .medicineDetail-unit {
    font-size: 13px !important;
    font-family: Outfit, sans-serif !important;
    color: #9a9898 !important;
    height: 15px !important;
  }
  .text-div .h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0px;
    /* width: 13rem; */
  }
  .text-div .h2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0px;
    width: 13rem;
    margin-bottom: 10px;
  }

  .text-div .p {
    padding: 0px;
    color: #888;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: line-through;
    margin-bottom: 0rem;
  }
  .btn-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-div button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #252b61;
    color: #fff;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  .ern-btn-div {
    border-radius: 50px;
    background-color: #f0f0f5;
    width: 50%;
  }
  .ern-btn-img img {
    margin-bottom: 2px;
  }
  .ern-btn-div button {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #074498;
    text-align: center;
  }
  .cart-icon {
    margin-left: 0.5rem;
  }

  .Carousel-sub-cards-div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 243.191px;
    height: 269px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #ececec;
  }
  .Carousel-sub-cards-div img {
    margin-top: 3.4rem;
    height: 10rem;
  }
  .renderCard-div h5 {
    margin-top: 1rem;
    color: #1e1e1e;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
    font-family: Outfit, sans-serif;
  }
  .custom-carousel {
    position: relative;
  }
  .carousel-control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    border-radius: 50%;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    filter: drop-shadow(2px 1px 19px rgba(0, 0, 0, 0.1));
  }
  .carousel-control-btn:hover {
    background-color: #fff;
  }
  .prev-btn {
    left: -20px;
  }
  .next-btn {
    right: -20px;
  }
  .carousal-main-heading {
    margin-bottom: 1rem;
  }
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
    width: 0px;
    height: 0px;
  }
  .rating-banner-div {
    position: absolute;
    z-index: 1;
    margin-left: -16px;
    margin-top: 2rem;
    p {
      margin: auto;
      margin-top: -47px;
      margin-right: 19px;
      font-size: 16px;
      font-size: 12px;
    }
    img {
      height: 2rem;
    }
  }
  .bannerWrapper {
    position: absolute;

    .rectangle {
      background: #89db7b;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
      width: 4rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #89db7b;
    }
  }

  @media (max-width: 768px) {
    .Carousel-sub-cards-div {
      width: 28rem !important;
      border-radius: 25px !important;
    }
    .text-div .h2 {
      width: 10rem;
    }
    .carousal-main-div {
      padding: 30px 20px !important;
    }
  }
`;
