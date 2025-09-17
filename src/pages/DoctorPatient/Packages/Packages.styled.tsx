import styled from "styled-components";

export const PackagesStyled = styled.div`
  .searchWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .filtersWrapper {
      gap: 1rem;
    }
  }
  .searchIcon {
    cursor: pointer;
    padding: 3px;
    border: 1px solid #e2e2e2;
    color: #000;
  }
  .addBtn {
    font-size: 1rem;
    font-weight: 600;
    padding: 12px 15px;
    border-radius: 8px;
    background: #262b61;
    color: #fff;
    cursor: pointer;
    text-wrap: nowrap;
  }
  .serviceCodeWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > div {
      color: #0d6efd;
      cursor: pointer;
    }
  }
  .isCorp {
    background-color: rgb(21 63 211);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
  }
  .testsSelect {
    min-width: 140px;
  }
`;
