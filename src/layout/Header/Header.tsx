import { RaphaPlusHeaderStyled } from "./Header.styled";
import CommonSearch from "../../components/CommonSearch/CommonSearch";
import { useNavigate } from "react-router";
import useVendorDetails from "@/hooks/auth/useVendorDetails";
import React from "react";
import { getName } from "@/lib/common";
import { useDispatch } from "react-redux";
import { getAllBookingsAPI } from "@/Scenes/apis/bookings/bookingsAPI";

const RaphaPlusHeader = () => {
  const navigate = useNavigate();
  const {linkableId,vendorDetails} = useVendorDetails()
  const dispatch = useDispatch()

  return (
    <RaphaPlusHeaderStyled>
      <div className="logo-container">
        <div>
          <img
            src={
              vendorDetails?.image ||
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1743583353705.png"
            }
            alt="Rapha-plus-logo"
            className="rpLogo"
          />
        </div>
      </div>
      {linkableId && (
        <>
          <div className="search-container">
            <CommonSearch
              placeHolderText={[" Bookings", "Appointments", "Employees"]}
              sectionName="global-search"
              autoComplete={true}
              handleSelect={(item: any) => {
                switch (item?.key) {
                  case "bookings":
                    navigate(`/bookings/all?globalsearch=${item?.data?.id}`);
                    break;
                  case "employees":
                    navigate(
                      `/employees?globalsearch=${
                        item?.data?.email || item?.data?.phone
                      }`
                    );
                    break;
                }
              }}
              searchAPI={[
                {
                  api: (searchText: string) => {
                    return getAllBookingsAPI({
                        searchText: searchText,
                        from: "vendor",
                        page: 1,
                        pageSize: 3,
                        status: "",
                        id: linkableId,
                    },{});
                  },
                  key: "bookings",
                  onSearchData: (payload: any) => {
                    console.log("payload",payload)
                    const searchResult = payload?.data?.bookings?.map(
                      (item: any) => {
                        return {
                          name: `${getName(
                            item?.user?.first_name,
                            item?.user?.last_name
                          )}(${item?.id})`,
                          data: item,
                        };
                      }
                    );
                    return searchResult;
                  },
                },
              ]}
            />
          </div>
          <div className="flex items-center justify-end">
            <p className="text-xl m-0 font-bold italic">
              {vendorDetails?.name ?? ""}
            </p>
          </div>
        </>
      )}
    </RaphaPlusHeaderStyled>
  );
};

export default React.memo(RaphaPlusHeader);
