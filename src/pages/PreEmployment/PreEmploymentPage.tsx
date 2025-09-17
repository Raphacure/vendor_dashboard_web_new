import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { roleList } from "../ToxicSubstance/constants";
import PreEmploymentPageStyled from "./PreEmploymentPage.styled";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import toast from "react-hot-toast";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import { getName } from "@/lib/common";
import { useParams } from "react-router";
import { packageTypes } from "./packages.constants";

const PreEmploymentPage = () => {
  const { type } = useParams();
  const navigate = useNavigate() as any;
  const dispatch = useDispatch() as any;

  const packageType = packageTypes.find((item) => item.type === type);
  if (!packageType) {
    navigate(-1);
  }

  const packageBreadcrumbs = [
    {
      name: "Quick Links",
      link: "/quick-links",
    },
    {
      name: packageType?.name ?? "",
      link: `/package/${packageType?.type}`,
    },
  ];

  const [isLoading, setIsLoading] = useState({ table: false });
  const { linkableId } = useClientLinkableId();

  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 1, pageSize: 10 });

  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // Add this line

  // Dummy data that matches the image layout
  const [employeeData, setEmployeeData] = useState([]) as any;

  // State to track selected employees
  const [selectedEmployees, setSelectedEmployees] = useState<
    {
      name: string;
      email?: string;
      phone?: string;
    }[]
  >([]);

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
        page: 1,
        count: 100000,
        department: selectedRole,
        clientId: linkableId,
        hasEmployeeId: false,
      };
      const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      } else {
        setEmployeeData(result?.payload?.data?.associatedUsers);
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
  }, [dispatch, searchText, selectedRole, linkableId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getAllEmployeesDetails();
    }, 250);

    return () => clearTimeout(timer);
  }, [getAllEmployeesDetails]);

  useEffect(() => {
    setSelectedEmployees([]);
  }, [employeeData]);

  // console.log(patients, "patients");

  // Handle checkbox selection

  const checkIsEmployeeSelected = (employee: any) =>
    selectedEmployees.some((item) => item.email === employee?.email);

  const handleCheckboxChange = (employee: any) => {
    setSelectedEmployees((prev) => {
      const name = getName(employee?.first_name, employee?.last_name);
      const emailOrPhone = employee?.email || employee?.phone;
      if (prev.some((item) => item.email === emailOrPhone)) {
        return prev.filter((item) => item.email !== emailOrPhone);
      } else {
        if (!emailOrPhone && !name) {
          toast.error("Employee email/phone and name are missing");
          return prev;
        }
        if (!emailOrPhone) {
          toast.error("Employee email or phone is missing");
          return prev;
        }
        if (!name) {
          toast.error("Employee name is missing");
          return prev;
        }
        return [
          ...prev,
          {
            name,
            email: employee.email,
            phone: employee.phone,
          },
        ];
      }
    });
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectedEmployees.length === employeeData.length) {
      setSelectedEmployees([]);
    } else {
      const selected = employeeData?.reduce((acc: any[], item: any) => {
        if (
          (item?.email || item?.phone) &&
          getName(item?.first_name, item?.last_name)
        ) {
          acc.push({
            name: getName(item?.first_name, item?.last_name),
            email: item.email,
            phone: item.phone,
          });
        }
        return acc;
      }, []);
      setSelectedEmployees(selected);
      toast.success(`${selected.length} employees selected`);
      if (employeeData.length !== selected.length) {
        toast.error(
          `Couldn't add ${
            employeeData.length - selected.length
          } employees (missing name/email/phone).`
        );
      }
    }
  };

  //handle book now btn

  const handleBookNow = () => {
    if (selectedEmployees?.length > 0) {
      navigate(`/package/${type}/book`, {
        state: { selectedEmployees },
      });
    } else {
      toast.error("Please select at least one employee");
    }
  };

  const filteredEmployees = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = pagination.page * pagination.pageSize;
    return [...employeeData]?.slice(startIndex, endIndex);
  }, [pagination, employeeData]);

  return (
    <PreEmploymentPageStyled>
      {/* {isLoading?.page && <Loader />} */}
      <CommonBreadCrumbs className="mb-2" items={packageBreadcrumbs} />
      <h2 className="!text-[28px] !font-semibold !mb-[27.19px]">
        {packageType?.name}
      </h2>
      <div className="flex justify-between items-center !mb-[26.14px] gap-2 top-header-responsive">
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
                className="border !border-blue-900 rounded-3xl !py-[10px] !pl-5 pr-4"
              >
                <option value="" disabled>
                  Sort by
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
          <div className="flex gap-2 items-center filter-responsive">
            <div className="relative">
              <div className="search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center">
                <IoSearch />
              </div>
              <input
                placeholder="Name or Department"
                className="w-full border !border-blue-900 focus:outline-none rounded-3xl !py-[10px] search-box"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
            {/* <SecoundaryButton
              onClick={() => navigate(`/package/${type}/employee/add-employee`)}
              className="!px-[20px] !py-[10px] text-nowrap text-[16px]"
            >
              Add Employee
            </SecoundaryButton> */}
            <PrimaryButton
              onClick={handleBookNow}
              className="!px-[20px] !py-[10px] text-nowrap text-[16px]"
            >
              Book Now
            </PrimaryButton>
          </div>
        </div>
      </div>
      <CustomTable
        showingName="Employees"
        columns={[
          {
            headerRender() {
              return (
                <input
                  type="checkbox"
                  className="scale-[1.45]"
                  checked={selectedEmployees.length === employeeData.length}
                  onChange={handleSelectAll}
                />
              );
            },
            key: "select",
            label: "",
            render: (_, record) => (
              <input
                type="checkbox"
                className="scale-[1.45]"
                checked={checkIsEmployeeSelected(record)}
                onChange={() => handleCheckboxChange(record)}
              />
            ),
          },
          {
            key: "name",
            label: "Name",
            render: (_, record) => (
              <div className="flex gap-[9px] items-center">
                <img
                  src={
                    record?.image ??
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746532359471.png"
                  }
                  className="w-[32px] h-[32px] rounded-full"
                />
                <span className="text-[#252B61]">
                  {getName(record?.first_name, record?.last_name)}
                </span>
              </div>
            ),
          },
          {
            key: "age",
            label: "Age",
            render: (_, record) => record?.age || "N/A",
          },
          {
            key: "dateOfJoining",
            label: "Date Of Joining",
            render: (_, record) => record?.dateOfJoining || "N/A",
          },
          {
            key: "email",
            label: "Email ID",
            render: (_, record) => record?.email || "N/A",
          },
          {
            key: "department",
            label: "Department",
            render: (_, record) => record?.department || "N/A",
          },
          {
            key: "siteId",
            label: "Site ID",
            render: (_, record) => record?.siteId || "N/A",
          },
        ]}
        data={filteredEmployees}
        pagination={true}
        page={pagination?.page}
        pageSize={pagination?.pageSize}
        onPageChange={(page, pageSize) => {
          setPagination({ page, pageSize });
        }}
        total={employeeData?.length}
        isLoading={isLoading?.table}
        rowKey={(record) => record?.id}
        scroll={{ x: 800 }}
      />
    </PreEmploymentPageStyled>
  );
};

export default PreEmploymentPage;
