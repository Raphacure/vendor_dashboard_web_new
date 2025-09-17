import styled from "styled-components";

const FullPageLoaderStyled = styled.div`
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 999999999;

  .spinner-container {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner-dot {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 45px;
    height: 45px;
    margin: 5px;
    border: 5px solid #252b61; /* gray-500 */
    border-radius: 50%;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .spinner-dot:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner-dot:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner-dot:nth-child(3) {
    animation-delay: -0.15s;
  }
  .spinner-dot:nth-child(4) {
    animation-delay: 0s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FullPageLoader = () => (
  <FullPageLoaderStyled>
    <div className="spinner-container">
      <div className="spinner-dot" />
      <div className="spinner-dot" />
      <div className="spinner-dot" />
      <div className="spinner-dot" />
    </div>
  </FullPageLoaderStyled>
);

export default FullPageLoader;
