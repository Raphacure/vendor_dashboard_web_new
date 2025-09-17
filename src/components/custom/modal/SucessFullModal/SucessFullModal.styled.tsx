import styled from "styled-components";

export const SuccessModalContainer = styled.div`
  width: 100%;

  @supports (animation: grow 0.5s cubic-bezier(0.25, 0.25, 0.25, 1) forwards) {
    .tick {
      stroke-opacity: 0;
      stroke-dasharray: 29px;
      stroke-dashoffset: 29px;
      animation: tickLoop 3s cubic-bezier(0.25, 0.25, 0.25, 1) infinite;
    }

    .circle {
      fill-opacity: 0;
      stroke: #219a00;
      stroke-width: 16px;
      transform-origin: center;
      transform: scale(0);
      animation: circleLoop 3s cubic-bezier(0.25, 0.25, 0.25, 1.25) infinite;
    }
  }

  @keyframes grow {
    60% {
      transform: scale(0.8);
      stroke-width: 4px;
      fill-opacity: 0;
    }
    100% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
  }

  @keyframes circleLoop {
    0% {
      transform: scale(0);
      stroke-width: 16px;
      fill-opacity: 0;
    }
    33% {
      transform: scale(0.8);
      stroke-width: 4px;
      fill-opacity: 0;
    }
    50% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
    100% {
      transform: scale(0.9);
      stroke-width: 8px;
      fill-opacity: 1;
      fill: #219a00;
    }
  }

  @keyframes draw {
    0% {
      stroke-opacity: 0;
      stroke-dashoffset: 29px;
    }
    20% {
      stroke-opacity: 1;
      stroke-dashoffset: 29px;
    }
    50% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  @keyframes tickLoop {
    0% {
      stroke-opacity: 0;
      stroke-dashoffset: 29px;
    }
    20% {
      stroke-opacity: 1;
      stroke-dashoffset: 29px;
    }
    50% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-opacity: 1;
      stroke-dashoffset: 0;
    }
  }

  // Styles
  :root {
    --theme-color: var(--color-purple);
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
