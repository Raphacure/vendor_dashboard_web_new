import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  &.table-container {
    border-radius: 20px;
    border: 1px solid #e5e7eb; /* border-gray-200 */
    background: #fff;
    overflow-x: auto;
  }
  .custom-ant-table .ant-table {
    background: transparent;
    border-radius: 20px;
  }
  .custom-ant-table .ant-table-thead > tr > th {
    background: #e8f1ff;
    font-size: 16px;
    border-bottom: 4px solid #fff;
    border-top: 2px solid white;

    &:first-child {
      border-left: 2px solid white;
      border-top-left-radius:20px !important;
    }

    &:last-child {
      border-right: 2px solid white;
      border-top-right-radius:20px !important;
    }
  }
  .custom-ant-table .ant-table-tbody > tr > td {
    font-size: 18px;
  }
  .custom-ant-table .ant-table-tbody > tr {
    border-top: 1px solid #f0f0f0;
    transition: background 0.2s;
  }
  .custom-ant-table .ant-table-tbody > tr:hover {
    background: #f5faff;
  }

  .ant-table-measure-row {
  display: none !important;
}
`;
