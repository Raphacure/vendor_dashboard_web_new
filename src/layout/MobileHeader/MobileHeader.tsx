import { useEffect, useMemo, useState } from "react";
import { IoArrowBack, IoSearchOutline, IoClose } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router";
import RaphaPlusCommonSearch from "../../components/CommonSearch/CommonSearch";
import BubbleLoader from "../../components/loader/bubbleLoader/BubbleLoader";
import { getCurrentRoute, getName } from "@/lib/common";
import { locationsDetails } from "../Layout.constants";
import { DashBoardHeaderStyled, HeaderStyled } from "./MobileHeader.styled";

const MobileHeader = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("clinic_search");
  const { clientDetails, loading, linkableId } = {};
  const currentPathKey =
    getCurrentRoute(
      locationsDetails.map((item) => ({ path: item.path, key: item.name })),
      location.pathname
    ) ?? "Dashboard";

  const matchedLocation = useMemo(
    () => locationsDetails.find((item) => item.name === currentPathKey),
    [currentPathKey]
  );

  const isDashboardHeader = Boolean(location.state?.render?.dashboardHeader);

  useEffect(() => {
    if (searchTerm) {
      setIsSearchOpen(true);
    }
  }, [searchTerm]);

  const formatRouteToTitle = (route: string) => {
    if (!route) return "";
    return route
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getHeaderTitle = () => {
    if (matchedLocation?.name) {
      return formatRouteToTitle(matchedLocation.name);
    }
    return "Dashboard";
  };

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

  if (isDashboardHeader) {
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
                {clientDetails?.logo_url && (
                  <img
                    className="img-size"
                    src={clientDetails?.logo_url}
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
                        {`${clientDetails?.name ?? "client name not found"}`}
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
          <h1 className="title">{getHeaderTitle()}</h1>
        </div>
        {!(
          location?.state?.noRender?.search ??
          matchedLocation?.state?.noRender?.search
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
          location?.state?.noRender?.search ??
          matchedLocation?.state?.noRender?.search
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
