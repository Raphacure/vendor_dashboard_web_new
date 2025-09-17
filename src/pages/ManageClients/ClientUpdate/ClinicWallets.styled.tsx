import styled from "styled-components";

export const ClinicWalletsStyled = styled.div`
  .clinic-wallet-section {
    display: flex;
    flex-direction: column;
    

    h3 {
      font-size: 18px;
      
      color: #04113f;
    }
  }

  .add-button {
    background-color: transparent;
    border: none;
    /* border-radius: 50%; */
    /* color: #04113f; */
    /* font-size: 1.5rem; */
    cursor: pointer;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal {
    background: white;
    padding: 2rem;
    box-sizing: border-box;
    overflow: auto;
    min-height: 250px;
    max-height: 75vh;
    /* max-height: 400px; */
    border-radius: 8px;
    width: 60%;
    position: relative;
    display: block;
    z-index: 10000;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .submit-button {
    background-color: green;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    border: none;
    padding: 0.9rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .modal input,
  .modal select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .offer-group {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    label input {
      width: auto;
    }
  }

  .Discount-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;

    .discounts {
      display: flex;
      flex-direction: column;
    }
  }

  .Amount-group {
    margin-bottom: 15px;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    p {
      font-size: 18px;
    }
  }

  .search-tag-div {
    margin-bottom: 20px;
  }
`;
