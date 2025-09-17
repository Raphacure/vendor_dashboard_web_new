import React from 'react'
import styled from 'styled-components'

const WaTemplatesStyles = styled.div`
 .error {
        font-size: 14px;
         color: red;
    }
         
    .ready {
        width: 24px;
        height: 24px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: rgb(34 197 94);
        margin: auto;
        }
    .notReady {
        width: 24px;
        height: 24px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: rgb(239 68 68);
        margin: auto;
    }

    .smsPreview {
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        max-width: 100%;
    }

    .title_link {
        color: #0d6efd;
        cursor: pointer;
    }

    .title {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 700;
        }
        
    .sub-title {
        font-size: 14px;
        line-height: 1rem;
        font-weight: 500;
        margin-bottom: 16px;
    }

    .left-container {
        border: 1px solid #dee2e6;
        padding: 2rem;
        line-height: 24px;
        border-radius: .5rem;
    }

    .save-btn {
        width: 100%;
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .border-r {
        border-right: 1px solid #dee2e6;
        }
        
    .container-right {
        border: 1px solid #dee2e6;
        background-color: #e6f7ff;
        padding: 24px;
        border-radius: .5rem;
    }

    .footer {
        color: #6b7280;
        margin: 0;
        margin-top: 10px;
        padding-top: 10px;
        font-weight: 400;
        border-top: 1px solid #6b7280;
    }

    }

    // email
    .textArea {
        border: 1px solid #d8d8d8;
        padding: 8px;
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        min-height: 200px;
    }

    .emailPreview {
        background-color: #f9fafb;
        border: 1px solid #dee2e6;
        // padding: 2rem;
        border-radius: .5rem;
        margin-bottom: 3rem;
        
        .logo {
                width: 100%;
                height: 4rem;
                margin: auto;
                object-fit: contain;
            }
        
            .banner {
                width: 100%;
                margin-top: 24px;
            }

            .preview-body{
                font-size: 16px;
                color: #565859;
                padding: 8px 24px;
                word-wrap: break-word; 
                overflow-wrap: break-word; 
                white-space: pre-wrap; 
                max-width: 100%; 
            }
                

`

export default WaTemplatesStyles