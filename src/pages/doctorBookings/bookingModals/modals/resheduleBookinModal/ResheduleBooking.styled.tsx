import styled from "styled-components";

export const ResheduleBookingStyled = styled.div`
  .time-slot-div {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 10px;

    .active {
      background-color: #1d2a5b;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }

  .time-slot {
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 12px 14px;
    font-family: Inter, system-ui, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: #252B61;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    
    &:hover {
      border-color: #1d2a5b;
      background-color: #f8fafc;
      transform: translateY(-1px);
    }
  }
`;
