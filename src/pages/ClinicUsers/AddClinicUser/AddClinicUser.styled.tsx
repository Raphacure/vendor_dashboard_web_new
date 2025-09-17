import styled from "styled-components";

export const AddClinicUserStyled = styled.div`
  padding: 2rem;

  .input-group-text {
    background-color: rgba(163, 218, 194, 1);
    cursor: pointer;
  }

  .row{
    margin-bottom:10px;
  }

  .form-btns{
    padding:.6rem 2rem;
  }

  .upload-btn{
    border:none;
    background-color: rgba(163, 218, 194, 1);
  }
  .ant-upload-wrapper{
    width:100%;
    display:block;
  }
  .ant-upload{
    width:100%;
  }

  .clinic-details-p {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0%;

    b {
      font-family: Inter;
      font-weight: 600;
      font-size: 22px;
      line-height: 100%;
      letter-spacing: 0%;
    }
  }

  .clinic-heading {
    font-size: 1.7rem;
    font-family: Inter;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;
