import React, { useState, useEffect, useCallback } from "react";
import TestPageStyled from "./TestBookingPage.styled";
import { useDispatch } from "react-redux";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useLocation, useNavigate, useParams } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { roleList } from "../constants";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import toast from "react-hot-toast";
import { getPackageDetailsAPI } from "@/redux/slices/packages/packagesService";
import Loader from "@/components/loader/loader/Loader";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const TestBookingPage = () => {
  const navigate = useNavigate() as any;
  const { testId } = useParams();
  const dispatch = useDispatch() as any;
  const { linkableId } = useClientLinkableId();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState<any[]>([]);

  const [employeeData, setEmployeeData] = useState({}) as any;
  const [isLoading, setIsLoading] = useState({ table: false, page: false });

  const [packageDetails, setPackageDetails] = useState<any>({});

  const testBookingBreadcrumbItems = [
    {
      name: "HR Dashboard",
      link: "/dashboard",
    },
    {
      name: "Toxic Substance",
      link: "/toxic-substance",
    },
    {
      name: packageDetails?.service_name,
      link: `/toxic-substance/${testId}`,
    },
  ];


  console.log("loadin",isLoading)

  const getAllEmployeesDetails = useCallback(async () => {
    try {
      setIsLoading((pre) => {
        return {
          ...pre,
          table: true,
        };
      });
      const filters = {
        searchText: searchText,
        page: pageNo,
        count: pageSize,
        department: selectedRole,
        clientId: linkableId,
        hasEmployeeId: true,
      };
      const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      } else {
        setEmployeeData(result?.payload?.data);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setIsLoading((pre) => {
        return {
          ...pre,
          table: false,
        };
      });
    }
  }, [dispatch, searchText, pageNo, pageSize, selectedRole, linkableId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getAllEmployeesDetails();
    }, 300);

    return () => clearTimeout(timer);
  }, [getAllEmployeesDetails]);

  // We no longer reset selections when employee data changes
  // This allows maintaining selections across pagination

  //get package details

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        setIsLoading((pre) => {
          return {
            ...pre,
            page: true,
          };
        });
        const filters = {
          package_id: testId,
        };
        const result = (await dispatch(getPackageDetailsAPI(filters))) as any;
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error occured");
          return;
        } else {
          setPackageDetails(result?.payload?.data);
        }
      } catch (error) {
        toast.error("unknown error occured");
      } finally {
        setIsLoading((pre) => {
          return {
            ...pre,
            page: false,
          };
        });
      }
    };

    getPackageDetails();
  }, [dispatch, testId]);

  //

  // State to track selected employees

  // Handle checkbox selection
  const handleCheckboxChange = (employee: any) => {
    setSelectedEmployees((prev) => {
      if (prev?.includes(employee?.id)) {
        return prev.filter((item) => item !== employee?.id);
      } else {
        return [...prev, employee?.id];
      }
    });
  };

  // Handle select all checkbox - only affects current page
  const handleSelectAll = () => {
    // Get IDs of employees on current page
    const currentPageEmployeeIds = employeeData?.associatedUsers?.map((item: any) => item?.id) || [];
    
    // Check if all employees on current page are selected
    const allCurrentPageSelected = currentPageEmployeeIds.every((id:any) => 
      selectedEmployees.includes(id)
    );
    
    if (allCurrentPageSelected) {
      // Unselect only the employees on current page
      setSelectedEmployees(prev => 
        prev.filter(id => !currentPageEmployeeIds.includes(id))
      );
    } else {
      // Add current page employees to selection (keeping previously selected employees)
      setSelectedEmployees(prev => {
        const newSelection = [...prev];
        currentPageEmployeeIds.forEach((id:any) => {
          if (!newSelection.includes(id)) {
            newSelection.push(id);
          }
        });
        return newSelection;
      });
    }
  };

  //handle book now btn

  const handleBookNow = () => {
    if (selectedEmployees?.length > 0) {
      navigate(`/toxic-substance/${testId}/book`, {
        state: { selectedEmployees },
      });
    } else {
      toast.error("Please select at least one employee");
    }
  };

  //

  return (
    <TestPageStyled>
      {isLoading?.page && <Loader />}
      <CommonBreadCrumbs className="!mb-2" items={testBookingBreadcrumbItems} />
      <h2 className="!font-semibold !text-[28px] capitalize !mb-[18px]">
        {packageDetails?.service_name}
      </h2>
      <div className="flex justify-between items-center !mb-[24px] gap-[21px] top-header-responsive">
        <div className="header">
          <div className="flex gap-2 items-center">
            <div className="relative flex items-center">
              {selectedRole && (
                <MdOutlineClear
                  className="absolute left-2 top-1/2 translate-y-[-50%] text-red-600 cursor-pointer"
                  onClick={() => setSelectedRole("")}
                />
              )}
              <select
                onChange={(e: any) => setSelectedRole(e.target.value)}
                value={selectedRole}
                className="border !border-blue-900 rounded-3xl py-2 !pl-5 pr-4"
              >
                <option value="" disabled>
                  Sort by : All
                </option>
                {roleList?.map((role: any) => (
                  <option key={role?.value} value={role?.value}>
                    {role?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="filter-container">
          <div className="flex gap-[21px] items-center filter-responsive">
            <div className="relative">
              <div className="search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center">
                <IoSearch />
              </div>
              <input
                placeholder="Name or Department"
                className="w-full border !border-[#252B61] focus:outline-none rounded-3xl py-2 search-box"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
            <SecoundaryButton
              onClick={() => navigate("/toxic-substance/employee/add-employee")}
              className="!px-[20px] !py-[10px] text-[16px] text-nowrap"
            >
              Add Employee
            </SecoundaryButton>
            <SecoundaryButton
              onClick={() =>
                navigate("/toxic-substance/employee/add-bulk-employee")
              }
              className="!px-[20px] !py-[10px] text-[16px] text-nowrap"
            >
              Bulk Upload
            </SecoundaryButton>
            {selectedEmployees.length > 0 && (
              <SecoundaryButton
                onClick={() => setSelectedEmployees([])}
                className="!px-[20px] !py-[10px] text-[16px] text-nowrap"
              >
                Clear Selection ({selectedEmployees.length})
              </SecoundaryButton>
            )}
            <PrimaryButton
              onClick={handleBookNow}
              className="!px-[20px] !py-[10px] text-[16px] text-nowrap"
            >
              Book Now
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="table-container">
        <Spin
          size="large"
          indicator={<LoadingOutlined spin />}
          spinning={isLoading?.table}
        >
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="scale-[1.65]"
                    checked={
                      employeeData?.associatedUsers?.length > 0 &&
                      employeeData?.associatedUsers?.every((employee: any) =>
                        selectedEmployees.includes(employee.id)
                      )
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Emp ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Date Of Joining</th>
                <th>Email ID</th>
                <th>Department</th>
                <th>Site ID</th>
              </tr>
            </thead>
            <tbody>
              {employeeData?.associatedUsers?.length > 0 ? (
                employeeData?.associatedUsers?.map(
                  (employee: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="scale-[1.65]"
                          checked={selectedEmployees.includes(employee?.id)}
                          onChange={() => handleCheckboxChange(employee)}
                        />
                      </td>
                      <td>{employee?.employee_id ?? "N/A"}</td>
                      <td>{`${employee?.first_name} ${
                        employee?.last_name ?? ""
                      }`}</td>
                      <td>{employee?.age ?? "N/A"}</td>
                      <td>{employee?.dateOfJoining ?? "N/A"}</td>
                      <td>{employee?.email ?? "N/A"}</td>
                      <td>{employee?.department ?? "N/A"}</td>
                      <td>{employee?.siteId ?? "N/A"}</td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-4">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Spin>
      </div>

      <div className="pagination">
        <div className="buttons-down">
          <button
            onClick={() => setPageNo((pre) => pre - 1)}
            disabled={pageNo <= 1}
            className={`back-arrow-icon ${
              pageNo <= 1 ? "opacity-50 !cursor-not-allowed" : ""
            }`}
          >
            <GoArrowLeft size={25} />
          </button>
          <button
            disabled={pageNo >= Math.ceil(employeeData?.total / pageSize)}
            onClick={() => setPageNo((pre) => pre + 1)}
            className={`page-btn ${
              pageNo >= Math.ceil(employeeData?.total / pageSize)
                ? "opacity-50 !cursor-not-allowed"
                : ""
            }`}
          >
            Next <GoArrowRight className="arrow-icon" />
          </button>
        </div>
        <span>
          Page <input type="text" value={pageNo} readOnly /> of{" "}
          {Math.max(1, Math.ceil(employeeData?.total / pageSize))}
        </span>
      </div>
    </TestPageStyled>
  );
};

export default TestBookingPage;
