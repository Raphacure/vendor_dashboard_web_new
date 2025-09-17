import styled from "styled-components";

const AddEmployeeStyled = styled.div`
  .ant-radio-button-wrapper:not(:first-child)::before {
  }

  .ant-radio-group {
    display: block;
  }

  .ant-radio-button-wrapper::before {
    all: unset !important;
  }

  .ant-input{
    height:54px;
  }

  .ant-radio-button-wrapper{
    height:39px;
    box-shadow: 0px 4px 19px 0px #0000001A;
    border:none;
  }

  .ant-select {
    height:54px !important;
  }

  .ant-radio-button-wrapper:last-child {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .ant-radio-button-wrapper:first-child {
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
  }
`;

export default AddEmployeeStyled;
