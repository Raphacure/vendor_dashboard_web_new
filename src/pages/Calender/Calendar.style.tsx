import styled from "styled-components";

export const CalendarStyled = styled.div`
    .calendar-container .ant-picker-cell {
        border: 2px solid #e9e9e9;
        padding: 2px !important;
        text-align: initial;
    }

    .calender-mode-select{
        .ant-select-selector{
            border-radius:25px;
            border:1px solid black;
            padding:7px 20px;
        }
    }

    .header-style{
        box-shadow: 2px 2px 9px 0px #00000021;
    }
    
    /* Mobile view styles */
    @media (max-width: 768px) {
        .ant-picker-calendar {
            .ant-picker-panel {
                width: 100%;
            }
            
            .ant-picker-cell {
                height: auto;
                min-height: 60px;
                
                .ant-picker-cell-inner {
                    height: 100%;
                    min-height: 60px;
                    display: flex;
                    flex-direction: column;
                }
            }
            
            .ant-picker-content th {
                font-weight: bold;
                text-transform: uppercase;
            }
            
            .mobile-date-cell {
                height: 100%;
                min-height: 60px;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 2px;
                border-radius: 4px;
                position: relative;
                
                .date-indicator {
                    font-weight: 500;
                    padding: 2px 4px;
                    text-align: center;
                    width: 24px;
                    height: 24px;
                    margin-bottom: 2px;
                    border-radius: 50%;
                }
                
                .current-date {
                    background-color: #1677ff;
                    color: white;
                    font-weight: bold;
                }
                
                .badge-container {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding-top: 2px;
                }
                
                .badge-pill {
                    padding: 2px 6px;
                    border-radius: 12px;
                    font-size: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                }
                
                &.has-bookings {
                    background-color: #f0f7ff;
                }
                
                &.has-leaves {
                    background-color: #F3E1EA;
                }
            }
        }
    }
`;

