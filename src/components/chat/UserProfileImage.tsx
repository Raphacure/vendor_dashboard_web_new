import React from "react";
import styled from "styled-components";

type prop = {
  url: string | null;
  name: string;
  className?: string;
};
const UserProfileImage = ({ name, url, className }: prop) => {
  if (url) {
    return <img src={url} alt="" className={className || ""} />;
  }
  return (
    <StyleComp>
      <span className={`${className} no-image-sec-char`}>
        {name?.charAt(0)}
      </span>
    </StyleComp>
  );
};

export default UserProfileImage;

const StyleComp = styled.div`
  .no-image-sec-char {
    height: 40px;
    width: 40px;
    display: block;
    background: #008080;
    border-radius: 50px;
    color: #fff;
    padding-left: 13px;
    padding-top: 4px;
    font-size: 20px;
    text-transform: uppercase;
  }
`;
