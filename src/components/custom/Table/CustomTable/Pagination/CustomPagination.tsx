import PrimaryButton from "@/components/custom/button/PrimaryButton";
import React, { ChangeEvent, useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import PageSizeSelect from "../PageSizeSelect/PageSizeSelect";

interface PaginationProps {
  page?: number;
  pageSize?: number;
  total?: number;
  onPageChange?: (page: number, pageSize: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
}) => {
  const [paginationInput, setPaginationInput] = useState(page ?? 1);
  const [paginationSize, setPaginationSize] = useState(pageSize ?? 10);
  const totalPages = Math.max(1, Math.ceil((total ?? 0) / (pageSize ?? 10)));
  const currentPage = Math.min(Math.max(1, page ?? 1), totalPages);

  useEffect(() => {
    setPaginationInput(page ?? paginationInput);
  }, [page]);

  useEffect(() => {
    setPaginationSize(pageSize ?? paginationSize);
  }, [pageSize]);

  useEffect(() => {
    const newTotalPages = Math.max(
      1,
      Math.ceil((total ?? 0) / (pageSize ?? 10))
    );
    if (page && page > newTotalPages) {
      onPageChange?.(1, pageSize ?? 10);
    }
  }, [total, page, pageSize, onPageChange]);

  const handlePaginationChanges = (page: number, pageSize: number) => {
    const validPage = Math.min(
      Math.max(1, page),
      Math.ceil((total ?? 0) / pageSize)
    );
    const validPageSize = Math.max(1, pageSize);
    if (validPage !== page || validPageSize !== pageSize) {
      setPaginationInput(validPage);
      setPaginationSize(validPageSize);
    }
    onPageChange?.(validPage, validPageSize);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setPaginationInput(val);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = parseInt((e.target as HTMLInputElement).value);
      if (!isNaN(val) && val >= 1 && val <= totalPages && val !== currentPage) {
        handlePaginationChanges?.(val, paginationSize);
      }
    }
  };

  const handlePaginationInputOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 1 || val > totalPages) {
      setPaginationInput(currentPage);
    } else if (val !== currentPage) {
      handlePaginationChanges?.(val, paginationSize);
    }
  };

  const handlePaginationSize = (value: number) => {
    handlePaginationChanges?.(currentPage, value);
  };

  if (total === 0) {
    return null;
  }

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center gap-2 p-2 my-1 sm:my-3">
      <div></div>
      <div className="flex items-center">
        <button
          onClick={() => {
            if (currentPage <= 1) return;
            handlePaginationChanges?.(currentPage - 1, paginationSize);
          }}
          disabled={currentPage <= 1}
          aria-label="Previous page"
          className={`p-2 border !rounded-full !mr-2 ${
            currentPage <= 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <GoArrowLeft size={25} />
        </button>
        <PrimaryButton
          className="!px-5 !py-2.5"
          onClick={() => {
            if (currentPage >= totalPages) return;
            handlePaginationChanges?.(currentPage + 1, paginationSize);
          }}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
        >
          Next <GoArrowRight className="arrow-icon ml-1" />
        </PrimaryButton>
      </div>
      <span className="flex items-center">
        Page{" "}
        <input
          type="number"
          min={1}
          max={totalPages}
          value={paginationInput}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handlePaginationInputOnBlur}
          className="w-12 text-center border rounded-[8px] mx-1 h-[37px] !border-[#666B90]"
          aria-label="Current page number"
        />{" "}
        of {totalPages}
        <PageSizeSelect
          pageSize={paginationSize}
          setPageSize={handlePaginationSize}
        />
      </span>
    </div>
  );
};

export default CustomPagination;
