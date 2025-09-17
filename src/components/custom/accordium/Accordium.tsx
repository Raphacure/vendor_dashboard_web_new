import React, { useState, memo } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccordiumContainer = styled.div`
  width: 100%;
  font-family: Arial, sans-serif;

  .item {
    border-bottom: 1px solid #ddd;
  }

  .item:last-child {
    border-bottom: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    color: #1e255e;
    cursor: pointer;
  }

  .content {
    padding: 12px;
    font-size: 14px;
    color: #333;
  }

  .hidden {
    display: none;
  }
`;

const MemoizedContent = memo(({ render, values }: any) => {
  return typeof render === "function" ? render(values) : render;
});

const CustomAccordium = ({
  data,
  values,
  destroyOnHide = false,
  defaultOpen = 0,
  containerClassName="",
  headerClassName="",
  contentClassName="",
  className="",
}: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <AccordiumContainer className={`${className ?? ""}`}>
      <div className={containerClassName ?? ""}>
        {data.map((item: any, index: number) => (
          <div key={index} className={`item ${openIndex===index?"open":""}`}>
            <div
              className={`header ${headerClassName?? ""}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item?.title}
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>

            {destroyOnHide ? (
              openIndex === index && (
                <div className={`content ${contentClassName ?? ""}`}>
                  <MemoizedContent render={item?.render} values={values} />
                </div>
              )
            ) : (
              <div className={`content ${contentClassName ?? ""} ${openIndex === index ? "" : "hidden"}`}>
                <MemoizedContent render={item?.render} values={values} />
              </div>
            )}
          </div>
        ))}
      </div>
    </AccordiumContainer>
  );
};

export default CustomAccordium;
