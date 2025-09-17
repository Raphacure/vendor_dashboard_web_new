import styled from "styled-components";

interface CategoryDivcolorsProps {
  index: any;
}
const colors = [
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
];
export const CategorySubDivcolors = styled.div<CategoryDivcolorsProps>`
  background: ${({ index }: any) => colors[index % colors.length]};
`;
export const RFQDocCardModuleStyled = styled.div`
  .cardCmp-main-div {
    display: flex;
    justify-content: center;
  }
  .Carousel-sub-cards-div {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 10rem;
    flex-shrink: 0;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    height: 100%;
  }
  .Carousel-sub-cards-div img {
    height: 8rem;
    width: 100%;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    padding: 8px;
  }
  .renderCard-div h5 {
    color: #1e1e1e;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
    font-family: Outfit, sans-serif;
    padding: 5px;
    overflow-wrap: anywhere;
  }
`;
