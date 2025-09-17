import { Select, Typography } from "antd";
import { ChevronDown } from "lucide-react";
import styled from "styled-components";


interface PageSizeOption {
  value: number;
  label: string;
}

interface PageSizeSelectProps {
  pageSize: number;
  setPageSize?: (value:number)=>void;
}

const Container = styled.span`
    display:inline-block;
    margin-left:10px;
    height:37px;

  .ant-select-selection-item {
    display: none !important;
  }
  .ant-select-selector{
    border-radius:8px !important;
    border:solid 1px #666B90 !important;
    height:37px !important;
  }
`;


export default function PageSizeSelect({
  pageSize,
  setPageSize,
}: PageSizeSelectProps) {
  const pageSizeOptions: PageSizeOption[] = [
    { value: 10, label: "10 per page" },
    { value: 25, label: "25 per page" },
    { value: 50, label: "50 per page" },
    { value: 100, label: "100 per page" },
  ];

  const handlePageSizeChange = (value: number) => {
    setPageSize?.(value);
  };

  return (
    <Container>
        <Select
          value={pageSize}
          suffixIcon={null}
          onChange={handlePageSizeChange}
          prefix={
            <span className="text-[#666B90] text-[14px] font-medium">
              Page Size : <ChevronDown color="#666B90" /> {pageSize}
            </span>
          }
          options={pageSizeOptions}
        />
    </Container>
  );
}
