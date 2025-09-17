import styled from "styled-components";

export const ScrollReportsCardStyled = styled.div`
  .records-grid {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    max-height: 100%;
    overflow-y: auto;
    padding-right:15px;

    @media (max-width: 675px) {
     justify-content:center;
    }
  }

  .ant-select-selector{
    border-radius: var(--radius-3xl) !important;
    padding:12px 10px !important;
    border: 1px solid #294595 !important;
  }

  .ant-select{
    height:41px;
  }

  .records-grid::-webkit-scrollbar {
    width: 10px;
    background-color: #ccc;
    border-radius: 10px;
  }

  .records-grid::-webkit-scrollbar-thumb {
    background-color: #252b61;
    border-radius: 10px;
  }

  .record-card {
    background-color: #e9f2fd;
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 180px;
    max-width: 200px;

  }

  .image-container {
    position: relative;
    aspect-ratio: 1/.9;
    background-color: #f0f0f0;
  }

  .record-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .delete-button {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: red;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .record-info {
    text-align: left;
    padding: 10px 12px;
  }

  .record-name {
    margin-bottom: 0px;

    font-size: 12px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
  }

  .record-date {
    margin-bottom: 0px;

    font-size: 12px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
  }
`;
