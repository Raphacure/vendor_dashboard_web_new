import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SecoundaryButtonStyled = styled.button`
  background-color: white;
  color: #252b61;
  border-radius: 25px;
  padding: 4px 20px;
  border: 1px solid #252b61;
  cursor: pointer;

  &:disabled {
    color: #bdc0d0;
    border-color: #bdc0d0;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

interface SecoundaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const SecoundaryButton: React.FC<SecoundaryButtonProps> = (props) => {
  return (
    <SecoundaryButtonStyled
      disabled={props.isLoading || props.disabled}
      {...props}
    >
      {props.isLoading && (
        <Spin
          className="!mr-2"
          indicator={<LoadingOutlined spin />}
        />
      )}
      {props.children}
    </SecoundaryButtonStyled>
  );
};

export default SecoundaryButton;
