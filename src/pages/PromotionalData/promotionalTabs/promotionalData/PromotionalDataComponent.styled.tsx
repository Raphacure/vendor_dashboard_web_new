import styled from "styled-components";

export const PromotionalDataStyled = styled.div`
  .btn-upload {
    text-align: center;
    border-top: 1px solid #e2e2e2;
    padding-top: 20px;
    input {
      display: none;
    }
    button span {
      color: #1f4690;
    }
  }
  .back-arrow-btn-sec-con {
    margin-bottom: 6px;
    span {
      cursor: pointer;
    }
  }
  .promotions-data-table-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .btn-upload-section {
    border: 3px dotted rgb(226, 226, 226);
    padding: 40px;
    cursor: pointer;
    text-align: center;
    button {
      font-size: 18px;
      background: none;
      border: none;
    }
    p {
      opacity: 0.5;
    }
  }
  .header-upload {
    display: flex;
    justify-content: space-between;
  }
  .bulk-upload-btns {
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
    .sample-sheet {
      margin-left: 30px;
      cursor: pointer;
      border: 1px solid #17a2bb;
      padding: 8px 20px;
      border-radius: 4px;
      height: 48px;
      display: inline-block;
      background: #008080;
      color: #fff;
      font-size: 14px;
      padding: 12px 15px;
    }
    a {
      color: #fff;
    }
  }
  .header-upload {
    margin-bottom: 30px;
    span {
      cursor: pointer;
      color: #4682b4;
    }
  }
  .submit-s-list-sec {
    text-align: center;
    // padding-top: 20px;
  }
  .total-record-sec-conut-sec {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .deltape-button {
    height: 40px;
    border-radius: 8px;
    background: #008080;
    padding: 4px 20px;
    color: #fff;
    border: none;
  }
  .btn-upload-filled {
    .btn-upload-section {
      padding: 10px;
    }
  }

  .loading-centering {
    display: flex;
    justify-content: center;
  }
  .send-promotional-mail-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .rapha-btn{
    background: #008080;
  }
`;
