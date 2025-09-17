import React from "react";
import { Check } from "lucide-react";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { useNavigate } from "react-router";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";


const SelectDrugTest: React.FC<{packageData:any}> = ({packageData}) => {
    const navigate = useNavigate();

    
  return (
    <>
      <CustomModal.Body>
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-2 bg-blue-50 text-gray-800 font-medium">
            <div className="p-2 border-gray-200">Drug Screen</div>
            <div className="p-2 text-center border-gray-200">{packageData?.tests?.length} Panel</div>
            {/* <div className="p-2 text-center">10 Panel</div> */}
          </div>

          {/* Drug items */}
          {packageData?.tests?.map((test:any, index:number) => (
            <div
              key={test?.service_code}
              className={`grid grid-cols-2 ${
                index < packageData?.tests?.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="px-2 py-3 text-[#000] opacity-[0.8] text-[16px] font-medium font-[Inter]">{test?.service_name}</div>
              <div className="px-2 py-3 flex justify-center items-center border-gray-200">
                {/* {true ? ( */}
                  <div className="rounded-full bg-green-500 w-[26px] h-[26px] flex items-center justify-center p-1">
                    <Check width={18} height={18} className="text-white" />
                  </div>
                {/* ) : (
                  <span className="text-[#000000]">N/A</span>
                )} */}
              </div>
              {/* <div className="px-2 py-3 flex justify-center items-center">
                {drug.included10Panel && (
                  <div className="rounded-full bg-green-500 w-[26px] h-[26px] flex items-center justify-center p-1">
                    <Check width={18} height={18} className="text-white" />
                  </div>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </CustomModal.Body>

      {/* Book Now Section */}
      <CustomModal.Footer>
        <div className="!mt-1 flex justify-between items-center">
          <div className="text-[#252B61] font-medium">
            *Choose your preference
          </div>

          <div className="flex">
            {/* <div className="flex items-center gap-2 px-2">
              <div className="text-2xl font-bold text-[#252B61]">₹199.50</div>
              <SecoundaryButton onClick={() => navigate(`/toxic-substance/test`)}>Book Now</SecoundaryButton>
            </div>

            <div className="w-[1px] h-[40px] bg-gray-400"></div> */}

            <div className="flex items-center gap-2 px-2">
              <div className="text-2xl font-bold text-[#252B61]">₹{packageData?.price?.discounted_price}</div>
              <PrimaryButton onClick={() => navigate(`/toxic-substance/${packageData?.service_code}`)}>Book Now</PrimaryButton>
            </div>
          </div>
        </div>
      </CustomModal.Footer>
    </>
  );
};

export default SelectDrugTest;
