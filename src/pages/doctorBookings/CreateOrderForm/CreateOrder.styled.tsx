import styled from "styled-components";

export const CreateOrderStyled = styled.div`
  .form-container {
    background-color: #fff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px; // Adjust max-width as needed
    margin: auto; // Center the form if needed
  }

  h3 {
    font-size: 1.2rem;
    button {
      padding: 1rem !important;
    }
  }

  .ant-card-body{
    padding:12px !important;
  }

  .form-title {
    margin-bottom: 24px;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #333;
  }

  .ant-form-item-label > label {
    font-weight: 500;
    color: #555;
  }

  .ant-input,
  .ant-select-selector,
  .ant-input-number,
  .ant-picker {
    border-radius: 4px;
  }

  .ant-input-number {
    width: 100%;
  }

  .form-actions {
    text-align: right;
    margin-top: 24px;
    border-top: 1px solid #f0f0f0;
    padding-top: 16px;

    .cancel-btn {
      margin-right: 8px;
    }
  }

  /* Time slot styling similar to CreateAppointmentForm */
  .date-time-picker-section {
    margin-bottom: 24px;
  }

  /* Date slider styles */
  .date-slider-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .date-slider {
    display: flex;
    flex: 1;
    overflow: hidden;
    margin: 0 8px;
    justify-content: space-between;
  }

  .date-tab {
    flex: 1;
    text-align: center;
    padding: 12px 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
    margin: 0 4px;
    border-bottom: 3px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      background: #f5f5f5;
    }

    &.active {
      background: #fff;
      border-bottom-color: #1890ff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .date-label {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }

  .slots-count {
    font-size: 12px;
    color: #52c41a;
  }

  .date-slider-nav-btn {
    background: #f0f2f5;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #555;
    transition: all 0.3s;

    &:hover {
      background: #e6f7ff;
      color: #1890ff;
    }

    &:disabled {
      background: #f5f5f5;
      color: #d9d9d9;
      cursor: not-allowed;
    }
  }

  .time-slot-div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .time-slot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    background: #f0f2f5;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
      background: #e6f7ff;
      border-color: #1890ff;
    }

    &.active {
      background: #1890ff;
      color: white;
    }
  }

  h4 {
    margin-bottom: 12px;
    font-weight: 500;
  }

  /* Accordion styling customizations */
  .time-slots-accordions {
    margin-bottom: 24px;

    [data-slot="accordion-trigger"] {
      font-weight: 500;
    }

    [data-slot="accordion-content"] {
      padding: 0 12px;
    }
  }

  // Responsive adjustments if needed
  @media (max-width: 576px) {
    .form-container {
      padding: 16px;
    }
    .form-title {
      font-size: 1.25rem;
    }

    .date-slider {
      overflow-x: auto;
    }
  }

  .bannerWrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1rem;
    width: 5rem;
    height: 1.625rem;

    .rectangle {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #89db7b;
      padding: 5px 5px 5px 0px;
      border-radius: 10px 45px 45px 0;
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.18px;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }

  .patientTypeContainer {
    /* border: 1px solid #ccc; */
    padding: 10px;
    border-radius: 10px;
  }

  .ant-collapse-content {
    max-height: 300px;
    overflow: auto;
  }
`;
