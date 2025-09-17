import styled from "styled-components";

export const AddPatientFormMobileStyled = styled.div`
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .popup {
    position: relative;
    background: white;

    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .close-btn {
    position: relative;

    width: 30px;
    height: 30px;
    background-color: #252b61;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .gender-options {
    display: flex;
    gap: 10px;
  }

  .gender-options button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .gender-options .active {
    background: #4a90e2;
    color: white;
  }

  

  .cancel {
    background: none;
    border: none;

    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #252b61;
  }

  .save {
    background: #1d2a5b;
    color: white;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    border: none;
    padding: 10px 35px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
  }
  .heading {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    padding: 15px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
      font-family: Inter;
      color: #1e1e1e;
    }
  }
  .form {
    padding: 29px 45px;

    .label {
      font-size: 16px;
      font-family: Inter;
      color: #1e1e1e;
    }
  }

  .input-container {
    position: relative;
    width: 100%;
  }

  .input-field {
    padding-right: 40px;
  }

  .location-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    color: black;
    cursor: pointer;
    background-color: #cce8db;
    padding: 5px;
    border-radius: 5px;
  }

  .gender-buttons {
    
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .gender-buttons button {
    border-radius: 25px;
    align-items: center;
    display: flex;
    border: none;
    width: 100%;
    font-size: 16px;
    font-family: Inter;
    color: #1e1e1e;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width:max-content;
  }

  .gender-buttons Button:hover {
    background: none !important;
    background-color: none !important;
    border-color: none !important;
  }

  .gender-buttons Button:focus {
    outline: none;
    box-shadow: none;
  }

  .gender-buttons Button.active {
    background-color: #92bdf6 !important;
    color: white !important;
    border: none;
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
    gap:10px;

    button{
      flex:1
    }
  }

  .form-row {
    margin-bottom: 20px;
  }

  .form {
  padding: 20px;
  
}

/* Custom Scrollbar */
.form::-webkit-scrollbar {
  display: none;
}

.form {
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

`;
export const AddPatientFormStyled = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 1000;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .popup {
    position: relative;
    background: white;
    min-width:700px;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .popup {
      min-width: 90%;
    }
  }

  .close-btn {
    position: relative;

    width: 30px;
    height: 30px;
    background-color: #252b61;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .gender-options {
    display: flex;
    gap: 10px;
  }

  .gender-options button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .gender-options .active {
    background: #4a90e2;
    color: white;
  }

  

  .cancel {
    background: none;
    border: none;

    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #252b61;
  }

  .save {
    background: #1d2a5b;
    color: white;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    border: none;
    padding: 10px 35px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
  }
  .heading {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    padding: 15px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
      font-family: Inter;
      color: #1e1e1e;
    }
  }
  .form {
    padding: 29px 45px;

    .label {
      font-size: 16px;
      font-family: Inter;
      color: #1e1e1e;
    }
  }

  .input-container {
    position: relative;
    width: 100%;
  }

  .input-field {
    padding-right: 40px;
  }

  .location-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    color: black;
    cursor: pointer;
    background-color: #cce8db;
    padding: 5px;
    border-radius: 5px;
  }

  .gender-buttons {
    
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .gender-buttons button {
    border-radius: 25px;
    align-items: center;
    display: flex;
    border: none;
    width: 100%;
    font-size: 16px;
    font-family: Inter;
    color: #1e1e1e;
    box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    width:max-content;
  }

  .gender-buttons Button:hover {
    background: none !important;
    background-color: none !important;
    border-color: none !important;
  }

  .gender-buttons Button:focus {
    outline: none;
    box-shadow: none;
  }

  .gender-buttons Button.active {
    background-color: #92bdf6 !important;
    color: white !important;
    border: none;
  }

  .form-buttons {
    display: flex;
    justify-content: flex-end;
    padding: 10px 45px;
  }

  

  .form-row {
    margin-bottom: 20px;
  }

  .form {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
  
}

/* Custom Scrollbar */
.form::-webkit-scrollbar {
  display: none;
}

.form {
  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

`;
