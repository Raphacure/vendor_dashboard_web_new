import styled from "styled-components";

export const PromotionalEmailBodyDiv = styled.div`
    .rapha-btn{
        background: #008080;
    }
    .email-templates-div{
        width:100%;
        padding:0 10% 0 10%;
    }

    .email-container{
        border: solid 2px gray;
        margin-top: 20px;
        padding: 5px;
        border-radius: 20px;
    }

    .email-render-div{
        height:300px;
        overflow-y:scroll;
    }

`;

export const PromotionalEmailFooterDiv = styled.div`
    .btn-group-footer{
        display: flex;
        gap: 10px;
    }
    .rapha-btn{
        background: #008080;
    }
    .rapha-btn:disabled{
        cursor: not-allowed;
    }
` 