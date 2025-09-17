import PrimaryButton from "@/components/custom/button/PrimaryButton";
import AddBulkEmployeeStyled from "./AddBulkEmployee.styled";
import { ArrowDownUp, Info } from "lucide-react";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";
import FileUploaderV2 from "@/components/custom/FileUpload/FileUploaderv2";
import DownloadCsv from "@/components/csv/DownloadCsv";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getAllPackages } from "@/redux/slices/packages/packagesService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { createOrderAPI } from "@/redux/slices/orders/orderService";
import moment from "moment";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { packageTypes } from "../../packages.constants";
import { useParams } from "react-router";

const PreEmploymentAddBulkEmployee = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate() as any;
  const { type } = useParams();
  const { linkableId } = useClientLinkableId();
  const [employeeList, setEmployeeList] = useState<any[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState({
    booking: false,
    page: false,
    csv: false,
    packages: false,
  });
  const [packages, setPackages] = useState([]) as any;
  const [selectedPackage, setSelectedPackage] = useState({}) as any;

  const packageType = packageTypes.find((item) => item.type === type);
  if(!packageType){
    navigate(-1)
  }

  const bulkEmployeeBreadcrumbs =  [
    {
      name: "Quick Links",
      link: "/quick-links",
    },
    {
      name: packageType?.name ?? "",
      link: `/package/${packageType?.type}`,
    },
    {
      name: "Add Bulk Employee",
      link: `/package/${packageType?.type}/employee/add-employee`,
    }
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading((prev) => ({
          ...prev,
          packages: true,
        }));
        const response = await dispatch(
          getAllPackages({ filters: { count: 200, clientId: linkableId } })
        );
        setPackages(response?.payload?.data?.data || []);
      } catch (error) {
        toast.error("Failed to fetch packages");
      } finally {
        setIsLoading((prev) => ({
          ...prev,
          packages: false,
        }));
      }
    };
    fetchPackages();
  }, [dispatch, linkableId]);

  useEffect(() => {
    if (packages?.length > 0) {
      setSelectedPackage(packages[0]);
    } else {
      setSelectedPackage({});
    }
  }, [packages]);

  // Handler for FileUploaderV2 to process uploaded Excel files
  function handleFileUpload(file: File) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { raw: false });
          setEmployeeList(jsonData as any[]);
          setSelectedEmployees([...Array((jsonData as any[])?.length).keys()]);
          toast.success(`${jsonData.length} employees added successfully`);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }

  const handleBookNow = async () => {
    const payload = {
      order: {
        vendor_id: "1",
        client_id: linkableId,
        package_code: selectedPackage?.service_code,
        users: employeeList
          .filter((_, idx) => selectedEmployees.includes(idx))
          ?.map((item) => {
            return {
              ...item,
              selected_date: moment(item?.selected_date, [
                "DD-MM-YYYY",
                "MM/DD/YYYY",
                "YYYY-MM-DD",
                "DD MMM YYYY",
                "MMMM D, YYYY",
              ]).format("YYYY-MM-DD"),
              vendor_id: Number(item?.vendor_id),
            };
          }),
      },
    };
    try {
      setIsLoading((prev) => ({
        ...prev,
        booking: true,
      }));
      const response = await dispatch(createOrderAPI(payload));
      if (response?.error) {
        toast.error(response?.error?.message || "unknown error occured");
        return;
      }
      toast.success("Employees added successfully");
      navigate(`/package/${packageType?.type}`);
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
        items={bulkEmployeeBreadcrumbs}
      />
      <p className="text-[28px] font-semibold font-[Inter] !mb-[23.87px]"></p>
      <div className="flex justify-between">
        <p className="text-[22px] font-medium !mb-[58.32px]">
          Please Upload Excel
        </p>
        <div className="flex gap-[20px] flex-wrap">
          {packages?.map((pkg: any, idx: number) => (
            <span>
              <SecoundaryButton
                className={`${
                  selectedPackage?.service_code === pkg?.service_code
                    ? "!bg-[#E9F2FD]"
                    : ""
                } !px-[20px] !py-[10px]`}
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg?.service_name}
              </SecoundaryButton>
            </span>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="grid grid-col-1 gap-y-2 sm:grid-cols-[1.2fr_2px_1fr] gap-x-10">
          <div className="flex-1">
            <FileUploaderV2
              onFileUpload={handleFileUpload}
              acceptType=".xls, .xlsx, .csv, text/csv"
              mode="single"
              acceptText="xls, xlsx, csv"
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
                      "name",
                      "phone",
                      "email",
                      "employee_id",
                      "remarks",
                      "age",
                      "address",
                      "gender",
                      "relation",
                      "selected_date",
                      "selected_timeslot",
                      "vendor_id",
                    ],
                  ]}
                >
                  <span className="text-[14px] font-medium !text-[#252b61]">
                    Host_Package_1_Template.2025.XLS
                  </span>
                </DownloadCsv>
              </a>
              <div className="flex gap-[13.7px] !mt-[11.17px]">
                <Info
                  className="w-[14px] h-[14px] flex-shrink-0 mt-1"
                  color="#888"
                />
                <span className="text-[14px] text-[#888]">
                  only the xls, xlsx file types are allowed. Please download the
                  above templet fill & upload for extra feilds contact admin
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
                <th className="px-3 py-2 text-left font-medium">
                  Emp ID <span className="text-xs">↕</span>
                </th>
                <th className="px-3 py-2 text-left font-medium">Name</th>
                <th className="px-3 py-2 text-left font-medium">Age</th>
                <th className="px-3 py-2 text-left font-medium">Gender</th>
                <th className="px-3 py-2 text-left font-medium">Email ID</th>
                <th className="px-3 py-2 text-left font-medium">
                  Relation <ArrowDownUp size={18} />
                </th>
                <th className="px-3 py-2 text-left font-medium">
                  Vendor Id <ArrowDownUp size={18} />
                </th>
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
                              selectedEmployees.filter((id) => id !== idx)
                            );
                          } else {
                            setSelectedEmployees([...selectedEmployees, idx]);
                          }
                        }}
                      />
                    </td>
                    <td className="px-3 py-2">{row?.employee_id}</td>
                    <td className="px-3 py-2 cursor-pointer">
                      <div className="flex gap-[8.96px] items-center">
                        <img
                          className="w-[32px] h-[32px] rounded-full"
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1746610263790.png"
                          alt="pic"
                        />
                        <p className="m-0 font-medium text-[16px] font-[Inter] text-[#252B61]">
                          {row.name}
                        </p>
                      </div>
                    </td>
                    <td className="px-3 py-2">{row?.age}</td>
                    <td className="px-3 py-2">{row?.gender}</td>
                    <td className="px-3 py-2">{row?.email}</td>
                    <td className="px-3 py-2">{row?.relation}</td>
                    <td className="px-3 py-2">{row?.vendor_id}</td>
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

export default PreEmploymentAddBulkEmployee;
