import React, { useState } from "react";
import { WellnessDetailsContainer } from "./WellnessSessionDetailsPage.styled";
import {
  Calendar,
  Clock,
  ChevronDown,
  Search,
  Download,
  Eye,
  Maximize2,
  Share2,
  ArrowDownToLine,
} from "lucide-react";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { IoSearch } from "react-icons/io5";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { wellnessSessionDetalsPageBreadcrumbsItems } from "@/constants/breadcrumbs.constants";

interface Employee {
  id: string;
  name: string;
  department: string;
  review: {
    rating: number;
    comment: string;
  };
  status:
    | "Registered"
    | "Sample Collected"
    | "Pending"
    | "Report Generated"
    | "Cancelled";
}

const WellnessDetailsPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Mock employee data for the table

  const mockEmployees: Employee[] = [
    {
      id: "01 Jan 2025",
      name: "Mallikarjun",
      department: "Development",
      review: {
        rating: 4.5,
        comment: "Great session! Helped me manage stress effectively.",
      },
      status: "Registered",
    },
    {
      id: "01 Jan 2025",
      name: "Mallikarjun",
      department: "Development",
      review: {
        rating: 4.5,
        comment: "Great session! Helped me manage stress effectively.",
      },
      status: "Sample Collected",
    },
    {
      id: "01 Jan 2025",
      name: "Mallikarjun",
      department: "Development",
      review: {
        rating: 4.5,
        comment: "Great session! Helped me manage stress effectively.",
      },
      status: "Pending",
    },
    {
      id: "01 Jan 2025",
      name: "Mallikarjun",
      department: "Development",
      review: {
        rating: 4.5,
        comment: "Great session! Helped me manage stress effectively.",
      },
      status: "Report Generated",
    },
    {
      id: "01 Jan 2025",
      name: "Mallikarjun",
      department: "Development",
      review: {
        rating: 4.5,
        comment: "Great session! Helped me manage stress effectively.",
      },
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registered":
        return "text-red-500";
      case "Sample Collected":
        return "text-red-500";
      case "Pending":
        return "text-green-500";
      case "Report Generated":
        return "text-red-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <WellnessDetailsContainer>
      <div className="!p-3 sm:!px-[40px] sm:!py-[30px]">
        {/* Header */}
        <CommonBreadCrumbs items={wellnessSessionDetalsPageBreadcrumbsItems} />
        <p className="!text-[28px] font-semibold !text-[#222E62] m-0">
          Camp Summary
        </p>
        <div className="flex gap-2 sm:justify-between sm:items-center !mt-[36px] flex-col sm:flex-row">
          <div>
            <span className="!px-[14px] !py-[11px] bg-white text-[#16B670] rounded-full border-[#16B670] border-[1px] text-[16px]">
              Completed
            </span>
          </div>
          <div className="flex gap-3">
            <PrimaryButton className="sm:!py-2">
              Schedule Next Camp
            </PrimaryButton>
          </div>
        </div>

        <div className="grid md:grid-cols-4 xl:grid-cols-3  gap-4 !mt-[36px] !mb-[40px]">
          {/* Lab Vendor Info */}
          <div className="border shadow-md !border-[#92BDF6] rounded-[25px] p-3 col-span-4 xl:col-span-1">
            <div className="mb-2">
              <p className="text-[21px] m-0 font-bold text-[#222E62]">
                Lab Vendor:{" "}
                <span className="font-medium text-black">Raphacure</span>
              </p>
            </div>
            <div className="mb-1">
              <p className="text-[21px] font-bold text-[#222E62]">
                Camp Address:
                <span className="text-black font-medium">
                  3rd Floor, Alkem House, Marathon Innova Corporate Building...
                </span>
              </p>
            </div>
            <div className="flex items-center justify-around gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span>April 15 & 16</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="ml-4 text-gray-400" />
                <span>10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Package Utilization */}
          <div className="border !border-[#92BDF6] shadow-md rounded-[25px] p-3 col-span-4 md:col-span-2 xl:col-span-1">
            <div className="flex flex-col gap-1">
              <p className="text-[21px] font-bold text-[#222E62] !mb-[30px]">
                Package Utilization
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-[18px] font-medium m-0">Total Slots</p>
                  <p className="text-xl font-medium m-0">50</p>
                </div>
                <div className="text-center border-r-[2px] border-gray-200 border-l-[2px]">
                  <p className="text-[18px] font-medium m-0">Registered</p>
                  <p className="text-xl font-medium m-0 text-green-600">32</p>
                </div>
                <div className="text-center">
                  <p className="text-[18px] font-medium m-0">Remaining</p>
                  <p className="text-xl font-medium m-0 text-red-600">18</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emailer Templates */}
          <div className="border !border-[#92BDF6] shadow-md rounded-[25px] p-3 col-span-4 md:col-span-2 xl:col-span-1">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[21px] font-bold m-0 text-[#222E62]">
                Camp Feedback
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 mt-2">
                {/* Stars */}
                <span className="flex items-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  {/* Half star */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stop-color="#FFD700" />
                        <stop offset="50%" stop-color="#E0E0E0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      fill="url(#half)"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-[21px] font-bold text-[#222E62]">
                  4.5/5
                </span>
                <span className="ml-1 text-[21px] text-black">
                  (30 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Participation */}

        <div className="flex justify-between gap-1 !mb-[27.5px] top-header-responsive">
          <div>
            <p className="text-[21px] font-bold text-[#222E62] !mb-0">
              Employee Participation
            </p>
          </div>
          <div className="header">
            <div className="flex gap-2 items-center">
              <div className="relative">
                <div className="search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center">
                  <IoSearch />
                </div>
                <input
                  placeholder="Name or Department"
                  className="w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl py-2 search-box"
                  type="text"
                  // onChange={(e) => setSearchText(e.target.value)}
                  // value={searchText}
                />
              </div>
              <div className="relative flex items-center">
                {/* {selectedRole && (
                <MdOutlineClear
                  className="absolute left-2 top-1/2 translate-y-[-50%] text-red-600 cursor-pointer"
                  onClick={() => setSelectedRole("")}
                />
              )} */}
                <select
                  // onChange={(e: any) => setSelectedRole(e.target.value)}
                  // value={selectedRole}
                  className="border !border-blue-900 rounded-3xl py-2 !pl-5 pr-4"
                >
                  <option value="" disabled>
                    Sort by
                  </option>
                  {/* {roleList?.map((role: any) => (
                  <option key={role?.value} value={role?.value}>
                    {role?.label}
                  </option>
                ))} */}
                </select>
              </div>
              <div className="flex gap-2 bg-green-200 rounded-full p-2">
                <ArrowDownToLine size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Review</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>
                    {employee.review.rating}/5 - {employee.review.comment}
                  </td>
                  <td>
                    <span className={`${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="pagination">
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
              disabled={pageNo >= Math.ceil(employeeData.length / pageSize)}
              onClick={() => setPageNo((pre) => pre + 1)}
              className={`page-btn ${
                pageNo >= Math.ceil(employeeData.length / pageSize)
                  ? "opacity-50 !cursor-not-allowed"
                  : ""
              }`}
            >
              Next <GoArrowRight className="arrow-icon" />
            </button>
          </div>
          <span>
            Page <input type="text" value={pageNo} readOnly /> of{" "}
            {Math.max(1, Math.ceil(employeeData.length / pageSize))}
          </span>
        </div> */}
      </div>
    </WellnessDetailsContainer>
  );
};

export default WellnessDetailsPage;
