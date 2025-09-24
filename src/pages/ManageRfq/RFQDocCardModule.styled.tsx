import styled from "styled-components";

interface CategoryDivcolorsProps {
  index: any;
}
const Categorycolors = [
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #feefc1 8.72%, rgba(254, 239, 193, 0.1) 97.2%)",
];

export const CategoryDivcolors = styled.div<CategoryDivcolorsProps>`
  background: ${({ index }) => Categorycolors[index % Categorycolors.length]};
`;

export const RFQDocCardModuleStyled = styled.div`
  .our-services-all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }
  .home-page-card {
    padding: 1px 15px;
    width: 100%;
    flex-shrink: 0;
    border-radius: 15px;
    background: ${({ index }: any) =>
      Categorycolors[index % Categorycolors.length]};
  }
  .home-page-card p {
    color: #48484d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
  .home-card-image {
    width: 100%;
    position: relative;
    border-radius: 5px 5px 0px 0px;
    height: 134px;
  }
  .home-card-image-img img {
    width: 149px;
    height: 170px;
    object-fit: contain;
  }
  .home-card-image-img svg {
    max-height: 100%;
  }
  .home-card-image-img {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 15px;
  }
  .category-mobile-wiew {
    text-align: center;
    color: #252b61;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: capitalize;
    font-family: Outfit, sans-serif;
  }
  .activeCard {
    border: 2px solid #008080;
  }
  @media (max-width: 768px) {
    .category-mobile-wiew {
      display: block;
      font-size: 16px !important;
      letter-spacing: 0.02em;
      text-align: center;
      margin-bottom: 0px;
      margin-top: 5px;
      margin-bottom: 5px !important;
    }
    .home-card-image-img img {
      height: 80px;
      width: 80px;
    }
    .cursor-pointer {
      // height: 80px;
    }
    .home-page-card {
      border-radius: 12px;
    }
    .our-services-all {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 0px;
    }
    .home-card-image {
      height: 80px;
    }
    .home-card-image-img {
      display: flex;
      justify-content: center;
      margin-top: 0px;
    }
  }
`;
