import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

const PrimaryButtonStyled = styled.button`
  background-color: #252b61;
  color: white;
  border-radius: 25px;
  padding: 5px 20px;
  border: none;

  &:disabled {
    color: #bdc0d0;
    border-color: #bdc0d0;
    cursor: not-allowed !important;
    opacity: 0.6;
  }
`;

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <PrimaryButtonStyled
      disabled={props.isLoading || props.disabled}
      {...props}
    >
      {props.isLoading && (
        <Spin
          className="!mr-2 text-white"
          indicator={<LoadingOutlined spin />}
        />
      )}
      {props.children}
    </PrimaryButtonStyled>
  );
};

export default PrimaryButton;
