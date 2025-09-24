import { useEffect, useState } from "react";
import { IoArrowBack, IoSearchOutline, IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router";
import RaphaPlusCommonSearch from "../../components/CommonSearch/CommonSearch";
import BubbleLoader from "../../components/loader/bubbleLoader/BubbleLoader";
import { getName } from "@/lib/common";
import { DashBoardHeaderStyled, HeaderStyled } from "./MobileHeader.styled";
import { useRouteLayout } from "../Layout.constants";
import useVendorDetails from "@/hooks/auth/useVendorDetails";

const MobileHeader = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("clinic_search");

  const layout = useRouteLayout();

  useEffect(() => {
    if (searchTerm) {
      setIsSearchOpen(true);
    }
  }, [searchTerm]);

  const {vendorDetails,loading,linkableId} = useVendorDetails()

  const handleSearchData = (payload: any) => {
    const searchResult = payload?.data?.bookings?.map((item: any) => {
      return {
        name:
          getName(item?.user?.first_name, item?.user?.last_name) +
          ` (${item?.id})`,
        data: item,
      };
    });
    return searchResult;
  };

  if (layout?.render?.dashboardHeader) {
    return (
      <DashBoardHeaderStyled>
        <div className="main-div">
          <div className="doctor-details-header">
            <div
              className="doctor-details"
              onClick={() =>
                navigate("dashboard/profile", {
                  state: {
                    noRender: { footer: true },
                  },
                })
              }
            >
              <span className="doc-img">
                {vendorDetails?.image && (
                  <img
                    className="img-size"
                    src={vendorDetails?.image}
                    alt=""
                  />
                )}
              </span>
              {
                <div>
                  {loading ? (
                    <BubbleLoader />
                  ) : (
                    <>
                      <p className="mb-1 font-inter font-semibold text-[20px] leading-[100%] tracking-[0%] align-middle">
                        {`${vendorDetails?.name ?? "client name not found"}`}
                      </p>
                    </>
                  )}
                </div>
              }
            </div>
            <div>{/* <FaBell color="white" size={23} /> */}</div>
          </div>
        </div>
        <div className="search-container-old">
          <RaphaPlusCommonSearch
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
            // searchAPI={[
            //   {
            //     api: (searchText: string) => {
            //       return getBookingWithFiltersAPI({
            //         filters: {
            //           searchText: searchText,
            //           from: "hr",
            //           page: 1,
            //           count: 6,
            //           status: "",
            //           type: null,
            //           id: linkableId,
            //         },
            //       });
            //     },
            //     key: "bookings",
            //     onSearchData: (payload: any) => {
            //       const searchResult = payload?.data?.bookings?.map(
            //         (item: any) => {
            //           return {
            //             name: `${getName(
            //               item?.user?.first_name,
            //               item?.user?.last_name
            //             )}(${item?.id})`,
            //             data: item,
            //           };
            //         }
            //       );
            //       return searchResult;
            //     },
            //   },
            //   {
            //     api: (searchText: string) => {
            //       return getAllClientEmpoyess({
            //         searchText: searchText,
            //         page: 1,
            //         count: 5,
            //         department: "",
            //         clientId: linkableId,
            //         // hasEmployeeId: true,
            //       });
            //     },
            //     key: "employees",
            //     onSearchData: (payload: any) => {
            //       const searchResult = payload?.data?.associatedUsers?.map(
            //         (item: any) => {
            //           return {
            //             name: `${getName(item?.first_name, item?.last_name)} (${
            //               item?.email ? "email" : "phone"
            //             }: ${item?.email || item?.phone})`,
            //             data: item,
            //           };
            //         }
            //       );
            //       return searchResult;
            //     },
            //   },
            // ]}
          />
        </div>
      </DashBoardHeaderStyled>
    );
  }

  return (
    <HeaderStyled>
      <div className="main-header">
        <div className="left-section">
          <button className="icon-button" onClick={() => navigate(-1)}>
            <IoArrowBack size={24} color="#003366" />
          </button>
          <h1 className="title">{layout?.title}</h1>
        </div>
        {!(
          layout?.noRender?.search 
        ) &&
          !searchTerm &&
          linkableId && (
            <button
              className="icon-button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? (
                <IoClose size={24} color="#003366" />
              ) : (
                <IoSearchOutline size={24} color="#003366" />
              )}
            </button>
          )}
      </div>
      {(isSearchOpen || searchTerm) &&
        linkableId &&
        !(
          layout?.noRender?.search 
        ) && (
          <div className="search-container-old">
            <RaphaPlusCommonSearch
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
              // searchAPI={[
              //   {
              //     api: (searchText: string) => {
              //       return getBookingWithFiltersAPI({
              //         filters: {
              //           searchText: searchText,
              //           from: "hr",
              //           page: 1,
              //           count: 3,
              //           status: "",
              //           type: null,
              //           id: linkableId,
              //         },
              //       });
              //     },
              //     key: "bookings",
              //     onSearchData: (payload: any) => {
              //       const searchResult = payload?.data?.bookings?.map(
              //         (item: any) => {
              //           return {
              //             name: `${getName(
              //               item?.user?.first_name,
              //               item?.user?.last_name
              //             )}(${item?.id})`,
              //             data: item,
              //           };
              //         }
              //       );
              //       return searchResult;
              //     },
              //   },
              //   {
              //     api: (searchText: string) => {
              //       return getAllClientEmpoyess({
              //         searchText: searchText,
              //         page: 1,
              //         count: 3,
              //         department: "",
              //         clientId: linkableId,
              //         // hasEmployeeId: true,
              //       });
              //     },
              //     key: "employees",
              //     onSearchData: (payload: any) => {
              //       const searchResult = payload?.data?.associatedUsers?.map(
              //         (item: any) => {
              //           return {
              //             name: `${getName(
              //               item?.first_name,
              //               item?.last_name
              //             )} (${item?.email ? "email" : "phone"}: ${
              //               item?.email || item?.phone
              //             })`,
              //             data: item,
              //           };
              //         }
              //       );
              //       return searchResult;
              //     },
              //   },
              // ]}
            />
          </div>
        )}
    </HeaderStyled>
  );
};

export default MobileHeader;
