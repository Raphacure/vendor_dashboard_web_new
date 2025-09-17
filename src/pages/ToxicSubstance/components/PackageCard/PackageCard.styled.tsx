import styled from "styled-components";

const PackageCardStyled = styled.div`
  width: 100%;

  .item{
    .accordium-custom-class{
      padding:25px 0;
    }
  }

  .item:last-child{
    .accordium-custom-class{
      padding: 25px 0 0 0 ;
    }
  }

  .item:first-child{
    .accordium-custom-class{
      padding: 0;
    }
  }

  .item:first-child{
    .accordium-custom-class{
      padding: 0;
    }
  }

  .items-between-package-list {
    align-items: space-between;
  }

  .list-font-style {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 0%;
  }
  
  .image-icon {
    width: 100%;
    position: relative;
    border-radius: 20px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }

  .main-box-shadow {
    box-shadow: 5px 4px 30px 0px #0000001a;
  }
`;

export default PackageCardStyled;
