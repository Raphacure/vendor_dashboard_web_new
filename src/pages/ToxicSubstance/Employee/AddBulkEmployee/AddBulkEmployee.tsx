import PrimaryButton from "@/components/custom/button/PrimaryButton";
import AddBulkEmployeeStyled from "./AddBulkEmployee.styled";
import { ArrowDownUp, Download, FileUp, Info } from "lucide-react";
import { useState } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";
import FileUploaderV2 from "@/components/custom/FileUpload/FileUploaderv2";
import DownloadCsv from "@/components/csv/DownloadCsv";
import { useDispatch } from "react-redux";
import {
  addBulkClientEmpoyeeAPI,
  addClientBulkEmployessAPI,
} from "@/redux/slices/employees/EmployeeService";
import { useNavigate } from "react-router";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";

const ToxicSubstancesAddBulkEmployee = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate() as any;
  const { linkableId } = useClientLinkableId();
  const [employeeList, setEmployeeList] = useState<any[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState({
    booking: false,
    page: false,
    csv: false,
  });

  console.log(employeeList, "employeeList");

  const toxicSubstanceAddBulkEmployeeBreadCrumbs = [
    {
      name: "HR Dashboard",
      link: "/dashboard",
    },
    {
      name: "Toxic Substances",
      link: "/toxic-substance",
    },
  ];

  // Handler for FileUploaderV2 to process uploaded Excel files
  function handleFileUpload(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });
          const requiredFields = [
            "first_name",
            "last_name",
            "email",
            "employee_id",
            "phone",
            "age",
            "gender",
            "designation",
            "address",
            "dob",
            "active_status",
            "office_location_name",
            "office_location_address",
          ];

          const filteredData = (jsonData as any[])
            .map((row, index) => {
              const newRow: { [key: string]: any } = {};
              let isValidRow = true;
              requiredFields.forEach((field) => {
                if (
                  row[field] === undefined ||
                  row[field] === null ||
                  row[field] === ""
                ) {
                  toast.error(
                    `Row ${
                      index + 2
                    }: Missing required field '${field}'. Please ensure all mandatory fields are present.`
                  );
                  isValidRow = false;
                } else {
                  newRow[field] = row[field];
                }
              });
              return isValidRow ? newRow : null;
            })
            .filter((row) => row !== null);

          if (filteredData.length > 0) {
            setEmployeeList(filteredData as any[]);
            setSelectedEmployees([...Array(filteredData?.length).keys()]);
            toast.success(
              `${filteredData.length} employees added successfully`
            );
          } else {
            setEmployeeList([]);
            setSelectedEmployees([]);
            toast.error("No valid employee data found after filtering.");
          }
        }
      };
    }
  }

  const handleBookNow = async () => {
    const payload = {
      users: employeeList.filter((_, idx) => selectedEmployees.includes(idx)),
      client_id: linkableId,
    };
    try {
      setIsLoading((prev) => ({
        ...prev,
        booking: true,
      }));
      console.log("payload", payload);
      const response = await dispatch(addClientBulkEmployessAPI(payload));
      if (response?.error) {
        toast.error(response?.error?.message || "unknown error occured");
        return;
      }
      toast.success("Employees added successfully");
      navigate(-1);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading((prev) => ({
        ...prev,
        booking: false,
      }));
    }
  };

  return (
    <AddBulkEmployeeStyled>
      <CommonBreadCrumbs
        className="mb-2"
        items={toxicSubstanceAddBulkEmployeeBreadCrumbs}
      />
      <p className="text-[28px] font-semibold font-[Inter] !mb-[23.87px]">
        Bulk Upload/Employee List
      </p>
      <p className="text-[22px] font-medium !mb-[58.32px]">
        Please Upload Excel
      </p>
      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-col-1 gap-y-2 sm:grid-cols-[1.2fr_2px_1fr] gap-x-10">
          <div className="flex-1">
            <FileUploaderV2
              onFileUpload={handleFileUpload}
              acceptType=".csv"
              mode="single"
              acceptText="csv"
            />
          </div>
          <span className="w-full min-h-[2px] sm:w-[2px] bg-slate-200 self-stretch"></span>
          <div className="flex flex-col items-start gap-[22px]">
            <span className="text-[16px] text-black font-medium">
              Download The{" "}
              <span className="font-bold text-[#252b61]">Package 1</span>{" "}
              Template For Bulk Upload
            </span>
            <div>
              <a
                href="#"
                className="w-full flex items-center !no-underline gap-2 border !border-[#aeaeae] rounded-lg !px-[7.98px] !py-[16.02px] transition-colors"
              >
                <img
                  className="w-[40px] h-[40px]"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746609861744.png"
                  alt="xls lgo"
                />
                <DownloadCsv
                  csvData={[
                    [
                      "first_name",
                      "last_name",
                      "email",
                      "employee_id",
                      "phone",
                      "age",
                      "gender",
                      "designation",
                      "address",
                      "relation",
                      "dob",
                      "active_status",
                      "office_location_name",
                      "office_location_address",
                    ],
                  ]}
                >
                  <span className="text-[14px] font-medium !text-[#252b61]">
                    Host_Package_1_Template.2025.csv
                  </span>
                </DownloadCsv>
              </a>
              <div className="flex gap-[13.7px] !mt-[11.17px]">
                <Info
                  className="w-[14px] h-[14px] flex-shrink-0 mt-1"
                  color="#888"
                />
                <span className="text-[14px] text-[#888]">
                  only the csv file types are allowed. Please download the above
                  templet fill & upload for extra feilds contact admin
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="flex justify-between items-center">
          <span className="font-medium text-[22px]">
            {employeeList?.length} Employees Pacakage 1 package have uploaded
          </span>
          <PrimaryButton
            isLoading={isLoading?.booking}
            onClick={handleBookNow}
            className="!py-[10px] !px-[20px]"
          >
            Book Now
          </PrimaryButton>
        </div>
        <div className="overflow-x-auto rounded-[20px] border border-gray-200 bg-white">
          <table className="min-w-full text-sm ">
            <thead className="bg-blue-50 text-[16px] !border-[4px] border-white">
              <tr>
                <th className="px-3 py-2 text-left">
                  <input
                    className="scale-[1.65]"
                    type="checkbox"
                    checked={
                      selectedEmployees.length === employeeList.length &&
                      selectedEmployees.length > 0
                    }
                    onChange={() => {
                      if (selectedEmployees.length === employeeList.length) {
                        setSelectedEmployees([]);
                      } else {
                        setSelectedEmployees([
                          ...Array(employeeList.length).keys(),
                        ]);
                      }
                    }}
                  />
                </th>
                <th className="px-3 py-2 text-left">First Name</th>
                <th className="px-3 py-2 text-left">Last Name</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">Employee ID</th>
                <th className="px-3 py-2 text-left">Phone</th>
                <th className="px-3 py-2 text-left">Age</th>
                <th className="px-3 py-2 text-left">Gender</th>
                <th className="px-3 py-2 text-left">Designation</th>
                <th className="px-3 py-2 text-left">Address</th>
                <th className="px-3 py-2 text-left">Relation</th>
                <th className="px-3 py-2 text-left">DOB</th>
                <th className="px-3 py-2 text-left">Active Status</th>
                <th className="px-3 py-2 text-left">Office Location Name</th>
                <th className="px-3 py-2 text-left">Office Location Address</th>
              </tr>
            </thead>
            <tbody className="text-[18px]">
              {employeeList.length === 0 ? (
                <tr className="border-t border-gray-100 transition-colors">
                  <td
                    colSpan={8}
                    className="px-3 py-4 text-center text-gray-500"
                  >
                    No employees added
                  </td>
                </tr>
              ) : (
                employeeList.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-100 transition-colors"
                  >
                    <td className="px-3 py-2">
                      <input
                        className="scale-[1.65]"
                        type="checkbox"
                        checked={selectedEmployees.includes(idx)}
                        onChange={() => {
                          if (selectedEmployees.includes(idx)) {
                            setSelectedEmployees(
                              selectedEmployees.filter((i) => i !== idx)
                            );
                          } else {
                            setSelectedEmployees([...selectedEmployees, idx]);
                          }
                        }}
                      />
                    </td>
                    <td className="px-3 py-2">{row?.first_name}</td>
                    <td className="px-3 py-2">{row?.last_name}</td>
                    <td className="px-3 py-2">{row?.email}</td>
                    <td className="px-3 py-2">{row?.employee_id}</td>
                    <td className="px-3 py-2">{row?.phone}</td>
                    <td className="px-3 py-2">{row?.age}</td>
                    <td className="px-3 py-2">{row?.gender}</td>
                    <td className="px-3 py-2">{row?.designation}</td>
                    <td className="px-3 py-2">{row?.address}</td>
                    <td className="px-3 py-2">{row?.relation}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AddBulkEmployeeStyled>
  );
};

export default ToxicSubstancesAddBulkEmployee;
