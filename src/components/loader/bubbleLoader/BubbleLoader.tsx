import styled, { keyframes } from 'styled-components';

const BubbleLoader = ({ color = "#3498db", size = 50, text = "" }) => {
  const height = size / 2;
  const bubbleBaseRadius = size / 10;
  const bubbleMaxRadius = size / 5;
  const bubbleYBase = height / 2;
  const bubbleYMax = height / 3;
  
  const bubbleKeyframes = keyframes`
    0%, 100% {
      cy: ${bubbleYBase};
      r: ${bubbleBaseRadius};
    }
    50% {
      cy: ${bubbleYMax};
      r: ${bubbleMaxRadius};
    }
  `;
  
  const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    
    svg {
      width: ${size}px;
      height: ${height}px;
    }
    
    circle {
      fill: ${color};
    }
    
    circle:nth-child(1) {
      animation: ${bubbleKeyframes} 1.5s infinite;
    }
    
    circle:nth-child(2) {
      animation: ${bubbleKeyframes} 1.5s infinite;
      animation-delay: 0.5s;
    }
    
    circle:nth-child(3) {
      animation: ${bubbleKeyframes} 1.5s infinite;
      animation-delay: 1s;
    }
    
    span {
      margin-left: 8px;
    }
  `;

  return (
    <LoaderContainer>
      <svg viewBox="0 0 100 20">
        <circle cx="25" cy={bubbleYBase} r={bubbleBaseRadius} />
        <circle cx="50" cy={bubbleYBase} r={bubbleBaseRadius} />
        <circle cx="75" cy={bubbleYBase} r={bubbleBaseRadius} />
      </svg>
      {text && <span>{text}</span>}
    </LoaderContainer>
  );
};

export default BubbleLoader;