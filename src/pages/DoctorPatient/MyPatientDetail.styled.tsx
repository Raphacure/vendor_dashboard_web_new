import styled from "styled-components";

export const MyPatientDetailMobileStyled = styled.div`
  width: 100%;
  font-family: inter;
  padding: 15px 10px;
  color: rgb(34, 46, 98);

  .patient-details-accordium {
    ul li::marker {
      font-size: 30px;
      color: green;
    }
    div {
      display:flex;
      justify-content:space-between;
    }
    p{
      margin:0;
    }
  }

  .image-div {
    text-align: center;
  }
  .doc-name {
    margin-top: 20px;
  }
  .text-name-align-div {
    text-align: center;
  }

  .profile-pic-div{
    border: 1px solid rgba(34, 46, 98, 1);
    overflow: hidden;
  }

  .profile-pic {
    width: 94px;
    height:94px;
    aspect-ratio: 1;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
    object-fit: cover;
  }
  .doctor-details {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .doctor-details-content-div {
    background-color: rgb(223, 236, 253);
    border-radius: 18px;
    padding: 3px 8px;
  }

  .accordion-section {
    border-bottom: 1px solid #e0e0e0;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    background: white;
    color: #27447e;
    font-weight: 600;
    font-size: 18px;
  }

  .arrow {
    transform: ${(props: any) =>
      props?.isOpen ? "rotate(180deg)" : "rotate(0)"};
    transition: transform 0.3s ease;
  }

  .accordion-content {
    max-height: ${(props: any) => (props?.isOpen ? "500px" : "0")};
    overflow: auto;
    transition: max-height 0.3s ease;
    padding: ${(props: any) => (props?.isOpen ? "16px" : "0 16px")};
  }
` as any;

export const AccordionContainer = styled.div`
  width: 100%;
  /* max-width: 500px; */
  margin: 0 auto;
  font-family: "Arial", sans-serif;

  /* Section styling */
  .accordion-section {
    border-bottom: 1px solid #e0e0e0;
  }

  /* Header styling */
  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    background: white;
    color: #27447e;
    font-weight: 600;
    font-size: 18px;
  }

  .arrow {
    transform: ${(props: any) =>
      props.isOpen ? "rotate(180deg)" : "rotate(0)"};
    transition: transform 0.3s ease;
  }

  .accordion-content {
    max-height: ${(props: any) => (props.isOpen ? "500px" : "0")};
    overflow: auto;
    transition: max-height 0.3s ease;
    padding: ${(props: any) => (props.isOpen ? "16px" : "0 16px")};
  }
` as any;

export const MyPatientDetailStyled = styled.div`
  font-family: inter;
  padding: 20px 0px;
  padding-left: 67px;
  padding-right: 62px;
  width: 100%;

  .heading {
    .title {
      font-size: 24px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
      margin-bottom: 0px;
    }
  }

  .card {
    background: white;
    padding: 20px;
    gap: 35px;
    border-radius: 20px;
    display: flex;
    border: none;
    flex-direction: row;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
  }

  .left-section {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  .profile-pic {
    width: 100%;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
    overflow: hidden;
    height: 100px;
    object-fit: cover;
  }

  .patient-name {
    font-size: 26px;
    margin-bottom: 0px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #252b61;
    text-align: left;
    opacity: 0.8;
  }

  .right-section {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .info p {
    margin: 5px 0;
  }

  .main-buttons {
    justify-content: flex-end;
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }

  .btn-outline {
    padding: 10px 20px;
    border: 1px solid #252b61;
    background: white;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #252b61;
    border-radius: 25px;
    cursor: pointer;
  }

  .btn-primary {
    padding: 10px 20px;
    background: #252b61;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .btn-logo {
    height: 24px;
    width: 24px;
  }

  .right-upper-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right-down-section {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .column {
    flex: 1;
    padding-right: 15px;
  }

  .column p {
    margin: 10px 0;
    font-size: 16px;
    color: #1a1a1a;
    text-align: left;
    font-weight: 500;
  }

  strong {
    font-weight: 400;
  }

  .add-patient {
    border: none;
    background: none;
  }

  .edit-icon {
    color: #252b61;
  }

  .tab-container {
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    border-radius: 8px;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .tab {
    display: flex;
    padding: 8px 15px;
    border-radius: 7px;
    gap: 43px;
    background-color: #e9f2fd;
  }

  .tab-button {
    background: transparent;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    font-family: inter;
    font-size: 18px;
    font-weight: 500;
    color: #222e62;
    border-radius: 7px;
    transition: background 0.3s ease;
  }

  .tab-button.active {
    background: white;
    color: #252b61;
    font-weight: 500;
    border: none;
  }

  .tab-content {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }

  .allergy-buttons {
    display: flex;

    gap: 20px;

    .sort-button,
    .add-button {
      background: none;
      padding: 8px 20px;
      font-size: 16px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      border-radius: 25px;
      border: 1px solid #252b61;
    }
  }

  .sort {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    display: block !important;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 0px;
    overflow: hidden;
    z-index: 12;
  }

  .dropdown-item {
    border-bottom: 1px solid #d6cece;
    padding: 10px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      gap: 15px;
    }

    .right-section {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
