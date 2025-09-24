import styled from "styled-components";

export const DownloadFormStyled = styled.div`
  .download-container {
    position: fixed;
    top: 30%;
    right: 4%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 400px;
    font-family: inter;
  }

  .download {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .download-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    h3 {
      font-size: 18px;
      letter-spacing: 0.02em;
      font-weight: 600;
      color: #000;
    }
  }

  .close-btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  .options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    input {
      height: 20px;
      width: 20px;
    }

    label {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .custom-date {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      height: 20px;
      width: 20px;
    }

    label {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
  }

  .download-button {
    box-shadow: 2px 4px 19px rgba(0, 0, 0, 0.1);
    border-radius: 69px;
    background-color: #252b61;
    color: white;
    width: 50%;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.03em;
    font-weight: 500;
    color: #fff;
  }

  .or {
    p {
      margin-bottom: 0px;
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .sort-by-radio {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 15px;

    p {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }

    label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }

    input[type="radio"] {
      height: 18px;
      width: 18px;
      cursor: pointer;
    }
  }

  @media (max-width: 675px) {
    .download-container {
      right: 50%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;
