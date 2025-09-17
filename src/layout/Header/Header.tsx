import { RaphaPlusHeaderStyled } from "./Header.styled";
import { getBookingWithFiltersAPI } from "../../redux/slices/dashboard/dashboardService";
import CommonSearch from "../../components/CommonSearch/CommonSearch";
import { useNavigate } from "react-router";
import useClientDetails from "@/hooks/auth/useClientDetails";
import { getName } from "@/lib/common";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";

const RaphaPlusHeader = () => {
  const navigate = useNavigate();
  const { clientDetails, linkableId: clientId } = useClientDetails();
  const logo_url = clientDetails?.logo_url;

  return (
    <RaphaPlusHeaderStyled>
      <div className="logo-container">
        <div>
          <img
            src={
              logo_url ||
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1743583353705.png"
            }
            alt="Rapha-plus-logo"
            className="rpLogo"
          />
        </div>
      </div>
      {clientId && (
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
                    return getBookingWithFiltersAPI({
                      filters: {
                        searchText: searchText,
                        from: "hr",
                        page: 1,
                        count: 3,
                        status: "",
                        type: null,
                        id: clientId,
                      },
                    });
                  },
                  key: "bookings",
                  onSearchData: (payload: any) => {
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
                {
                  api: (searchText: string) => {
                    return getAllClientEmpoyess({
                      searchText: searchText,
                      page: 1,
                      count: 3,
                      department: "",
                      clientId: clientId,
                    });
                  },
                  key: "employees",
                  onSearchData: (payload: any) => {
                    const searchResult = payload?.data?.associatedUsers?.map(
                      (item: any) => {
                        return {
                          name: `${getName(
                            item?.first_name,
                            item?.last_name
                          )} (${item?.email ? "email" : "phone"}: ${
                            item?.email || item?.phone
                          })`,
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
              {clientDetails?.name ?? ""}
            </p>
          </div>
        </>
      )}
    </RaphaPlusHeaderStyled>
  );
};

export default RaphaPlusHeader;
