import React, { useMemo, useState, useEffect, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { MedicineCardModuleStyled } from "./MedicineCardModule.styled";
import { IoMdStar } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";
import useHandleImageUrl from "@/hooks/useHandleImageUrl";

const MedicineCardModule = ({
  medicineDetail,
  sectionName,
  onCountChange,
}: any) => {
  // Initialize count from medicineDetail but don't re-initialize on prop changes
  const [count, setCount] = useState(medicineDetail?.count || 1);
  
  // Store service_code in a ref to avoid dependency issues
  const serviceCodeRef = useRef(medicineDetail?.service_code);
  
  // Store the onCountChange callback in a ref to avoid dependency issues
  const onCountChangeRef = useRef(onCountChange);
  
  // Update the ref when the prop changes
  useEffect(() => {
    serviceCodeRef.current = medicineDetail?.service_code;
    onCountChangeRef.current = onCountChange;
  }, [medicineDetail?.service_code, onCountChange]);
  const navigate = useNavigate();
  const { getFirstImageUrl } = useHandleImageUrl();
  const imageUrl = useMemo(() => {
    return getFirstImageUrl(medicineDetail?.image || medicineDetail?.images);
  }, [medicineDetail]);

  // Only trigger the callback when count changes
  useEffect(() => {
    // Update parent component when count changes
    if (onCountChangeRef.current && serviceCodeRef.current) {
      onCountChangeRef.current(serviceCodeRef.current, count);
    }
  }, [count]);

  return (
    <MedicineCardModuleStyled>
      <div className="medicine-card">
        <div className="medicineDetail">
          {sectionName == "auyrveda" && (
            <div className="rating-banner-div">
              <div className="bannerWrapper">
                <div className="rectangle">
                  <IoMdStar className="me-2" />
                  {Math.round(medicineDetail?.rating)}
                </div>
                <div className="triangle"></div>
              </div>
            </div>
          )}

          <div className="img-div" onClick={() => {}}>
            <div className="sub-img-div">
              <img
                src={
                  getFirstImageUrl(imageUrl) ||
                  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1745933107521.png"
                }
                alt={medicineDetail?.key}
              />
            </div>
          </div>

          <div className="text-div">
            <p className="h2">
              {medicineDetail?.service_name || medicineDetail?.name}
            </p>
            <p className="medicineDetail-unit">{medicineDetail?.unit}</p>
            <div className="btn-div">
              <div className="mt-0">
                {medicineDetail?.discounted_price ===
                medicineDetail?.actual_cost ? (
                  <p className="h3 ">
                    MRP &nbsp; ₹
                    {medicineDetail?.price?.discounted_price ||
                      medicineDetail?.discounted_price}
                  </p>
                ) : (
                  <>
                    <p className="p ">
                      MRP &nbsp; ₹
                      {medicineDetail?.price?.actual_cost ||
                        medicineDetail?.actual_cost}
                    </p>
                    <p className="h3">
                      ₹
                      {medicineDetail?.price?.discounted_price ||
                        medicineDetail?.discounted_price}
                    </p>
                  </>
                )}
              </div>
              {/* Count button */}
              <div className="count-control flex items-center border rounded-md overflow-hidden">
                <button
                  className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                  type="button"
                  onClick={() =>
                    setCount((prev: number) => Math.max(1, prev - 1))
                  }
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="text-white" />
                </button>
                <span className="px-3 py-1 text-center min-w-[40px]">
                  {count}
                </span>
                <button
                  type="button"
                  className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                  onClick={() => setCount((prev: number) => prev + 1)}
                  aria-label="Increase quantity"
                >
                  <FiPlus className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MedicineCardModuleStyled>
  );
};

export default MedicineCardModule;
