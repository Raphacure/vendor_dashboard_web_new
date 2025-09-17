import styled from "styled-components";


export const BodyDiv = styled.div`

    .choose-templates-div{
        display:flex;
        justify-content:space-between
    }

    .left-div{
        overflow-y:auto;
        max-height:600px;
    }

    .selected-template-loading{
        font-size:48px
    }


    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .rotate-icon {
    animation: rotate 1s linear infinite;
    }


`

export const FooterDiv = styled.div`
    .btn-group-footer{
        display: flex;
        gap: 10px;
    }
    
    .rapha-btn{
        background: #008080;
    }
`
