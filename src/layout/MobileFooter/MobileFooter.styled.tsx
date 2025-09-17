import styled from "styled-components";

export const MobileFooterStyled = styled.div`
  width: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 10px #b8b8b8;
  padding-top: 10px;
  z-index: 10;
  background-color: white;

  .category-open {
    height: 0;
    overflow: auto;
    transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  .category-open.open {
    height: 350px;
    margin-bottom: 10px;
  }

  .footer-main-div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Creates 5 equal columns */
    gap: 10px; /* Adds space between grid items */
    padding: 10px 0; /* Adds padding for a cleaner look */
  }

  .footer-main-div div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-main-div p {
    margin: 0;
    font-size: small;
  }

  .footer-main-div div:nth-child(3) img {
    transform: translateY(-10px) scale(1.6);
  }

  .footer-main-div img {
    aspect-ratio: 1;
    width: 29px;
    height: auto;
    object-fit: contain;
  }
`;