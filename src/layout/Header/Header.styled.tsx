import styled from "styled-components";

export const RaphaPlusHeaderStyled = styled.div`
  border-bottom: 3px solid #ededed;
  height: 88px;
  position: fixed;
  width: 100%;
  top: 0px;
  padding: 10px 29px;
  z-index: 10;
  background-color: white;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;

  @media (max-width: 750px) {
    padding: 10px 20px;
  }

  .rpLogo {
    width: 7rem;
    height: 4rem;
    object-fit: contain;
  }
  .search-container {
    flex-grow: 0.3;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .profile-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .profile-notifications {
      display: flex;
      img {
        width: 38px;
        height: 36px;
      }
    }

    .profile-pic-div {
      border-radius: 50%;
      border: 2px solid #252b61;
      width: 57px;
      height: 57px;
      overflow: hidden;
    }

    .profile-img {
      width: 57px;
      height: 57px;
      object-fit: contain;
    }

    .doctor-name {
      font-family: Inter;
      font-weight: 600;
      font-size: 18px;
      line-height: 21.78px;
      letter-spacing: 3%;
      margin: 0;
    }
  }
`;
