import styled from "styled-components"

const HealthRiskCardStyled = styled.div<{ bgColor?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${({ bgColor }) => bgColor};
    width: 100%;
`

export default HealthRiskCardStyled