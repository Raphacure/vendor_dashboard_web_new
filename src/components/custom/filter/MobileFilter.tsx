import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  font-family: system-ui, -apple-system, sans-serif;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .booking-details-mobile{
    max-width:50px;
  }

  .filter-list {
    border-top: 1px solid #e5e7eb;
  }

  .filter-item {
    display: flex;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
  }

  label {
    margin-left: 0.75rem;
    font-size: 0.875rem;
    color: #374151;
  }
`;

const MobileFilter = (props: any) => {
  const {
    filters,
    selectedFilters,
    handleChange,
    title = "Filters",
    render,
  } = props;

  return (
    <FilterContainer>
      <div className="filter-list">
        {filters.map((filter: any,index:number) =>
          typeof render === "function" ? (
            render()
          ) : (
            <div key={index} className="filter-item">
              <input
                type="checkbox"
                id={`filter-${filter?.label}`}
                checked={selectedFilters?.includes(filter?.key)}
                onChange={() => handleChange(filter?.key, filters)}
                disabled={filter?.disabled}
              />
              <label htmlFor={`filter-${filter?.label}`}>{filter?.label}</label>
            </div>
          )
        )}
      </div>
    </FilterContainer>
  );
};

export default MobileFilter;
