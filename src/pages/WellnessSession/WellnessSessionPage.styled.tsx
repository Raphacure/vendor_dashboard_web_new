import styled from "styled-components";

const OnSiteCampPageStyled = styled.div`
  padding: 33px 48px;

  @media (max-width: 675px) {
    padding: 15px 15px;

    .header {
      flex-direction: column;
      align-items: start !important;
      gap: 15px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .sort-dropdown {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        color: #64748b;
        margin-right: 5px;
      }

      .select-wrapper {
        position: relative;

        &::before {
          content: "Sort by:";
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 14px;
          color: #64748b;
          pointer-events: none;
        }

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #64748b;
          pointer-events: none;
        }

        select {
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 8px 16px;
          padding-left: 60px;
          padding-right: 30px;
          font-size: 14px;
          color: #0f172a;
          background-color: #fff;
          cursor: pointer;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
      }
    }
  }

  .section {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

export default OnSiteCampPageStyled;
