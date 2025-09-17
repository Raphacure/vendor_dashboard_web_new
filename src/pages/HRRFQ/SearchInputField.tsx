import React from "react";
import { SearchInputFieldStyle } from "./SearchInputField.styled";
import { Input } from "antd";
import { IoIosSearch } from "react-icons/io";

const SearchInputField = (props: any) => {
  const { placeHolder, value } = props;
  return (
    <SearchInputFieldStyle>
      <div className="Search-bar">
        <Input
          placeholder={placeHolder}
          value={value}
          onChange={(e: any) => props.handleonFilterName(e.target.value)}
          prefix={<IoIosSearch className="me-3" />}
        />
      </div>
    </SearchInputFieldStyle>
  );
};

export default SearchInputField;
