import PrimaryButton from "@/components/custom/button/PrimaryButton";
import BulkOrdersStyled from "./BulkOrders.styled";
import { Info, Trash2 } from "lucide-react";
import { useState } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";
import FileUploaderV2 from "@/components/custom/FileUpload/FileUploaderv2";
import DownloadCsv from "@/components/csv/DownloadCsv";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import dayjs from "dayjs";

interface BulkOrdersProps {
  setEmployeeListParent: (employees: any[]) => void;
  showTable?: boolean;
  employeeListParent?: any[];
}

const BulkOrders = ({
  setEmployeeListParent,
  employeeListParent,
  showTable = true,
}: BulkOrdersProps) => {
  const modalRenderer = useCustomModalRenderer(["table", "invalid-data"]);
  const [employeeList, setEmployeeList] = useState<any[]>([]);
  const [invalidEmployeeList, setInvalidEmployeeList] = useState<any[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

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
            { field: "name" },
            {
              field: "email",
            },
            { field: "phone" },
            { field: "age" },
            { field: "gender" },
            { field: "address" },
            { field: "selected_date" },
            {
              field: "selected_timeslot",
            },
          ];

          const validData: any[] = [];
          const invalidData: any[] = [];

          (jsonData as any[]).forEach((row, index) => {
            const formattedRow = {
              ...row,
              selected_date: dayjs(row?.selected_date).format("YYYY-MM-DD"),
              vendor_id: Number(row?.vendor_id),
              originalIndex: index + 2, // For error reporting
            };

            const validationResults = requiredFields.map(({ field }) => {
              const value = formattedRow[field]?.toString().trim();
              return value && value.length > 0;
            });

            if (validationResults.every(Boolean)) {
              validData.push(formattedRow);
            } else {
              invalidData.push(formattedRow);
            }
          });

          if (invalidData.length > 0) {
            setInvalidEmployeeList(invalidData);
            modalRenderer.push("invalid-data");
            toast.error(
              `${invalidData.length} rows have invalid data. Please fix them.`
            );
          }

          if (validData.length > 0) {
            setEmployeeList(validData);
            setSelectedEmployees([...Array(validData.length).keys()]);
            if (invalidData.length === 0) {
              modalRenderer.push("table");
            }
            toast.success(`${validData.length} employees added successfully`);
          } else if (invalidData.length === 0) {
            setEmployeeList([]);
            setSelectedEmployees([]);
            setEmployeeListParent([]);
            toast.error("No valid employee data found.");
          }
        }
      };
    }
  }

  const handleInvalidDataChange = (
    index: number,
    field: string,
    value: any
  ) => {
    const updatedList = [...invalidEmployeeList];
    updatedList[index][field] = value;
    setInvalidEmployeeList(updatedList);
  };

  const handleApproveInvalidData = () => {
    const stillInvalid: any[] = [];
    const nowValid: any[] = [];

    invalidEmployeeList.forEach((row) => {
      const validationResults = [];

      // Name validation: should be at least 1 character
      validationResults.push(row.name && row.name.toString().trim().length > 0);

      // Email validation: should be a valid email format
      validationResults.push(
        row.email &&
          /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(row.email.toString().trim())
      );

      // Phone validation: should be 10 digits
      validationResults.push(
        row.phone && /^[0-9]{10}$/.test(row.phone.toString().trim())
      );

      // Age validation: should be a number and less than 120
      validationResults.push(
        row.age && !isNaN(Number(row.age)) && Number(row.age) < 120
      );

      // Gender validation: should be male, female, or others
      validationResults.push(
        row.gender &&
          ["male", "female", "others"].includes(
            row.gender.toString().trim().toLowerCase()
          )
      );

      // Selected date validation: should be a valid date and not less than today
      validationResults.push(
        row.selected_date &&
          dayjs(row.selected_date).isValid() &&
          dayjs(row.selected_date).startOf("day").valueOf() >=
            dayjs().startOf("day").valueOf()
      );

      // Address and selected_timeslot validation (basic check for existence)
      validationResults.push(
        row.address && row.address.toString().trim().length > 0
      );
      validationResults.push(
        row.selected_timeslot &&
          row.selected_timeslot.toString().trim().length > 0
      );

      if (validationResults.every(Boolean)) {
        nowValid.push(row);
      } else {
        stillInvalid.push(row);
      }
    });

    if (stillInvalid.length > 0) {
      setInvalidEmployeeList(stillInvalid);
      toast.error(
        `${stillInvalid.length} rows still have invalid data. Please fix them.`
      );
    } else {
      setEmployeeList([...employeeList, ...nowValid]);
      setSelectedEmployees([
        ...Array(employeeList.length + nowValid.length).keys(),
      ]);
      setInvalidEmployeeList([]);
      modalRenderer.pop("invalid-data");
      modalRenderer.push("table");
      toast.success("All employees are now valid and added.");
    }
  };

  const handleAddEmployee = () => {
    const selectedEmployeeData = selectedEmployees.map(
      (index) => employeeList[index]
    );
    if (setEmployeeListParent) {
      setEmployeeListParent(selectedEmployeeData);
    }
    modalRenderer.pop("table");
    toast.success(
      `${selectedEmployeeData.length} employees added successfully`
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employeeList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number, pageSize: number) => {
    setItemsPerPage(pageSize);
    setCurrentPage(pageNumber);
  };

  const BulkOrdersTable = () => {
    return (
      <div>
        <CustomTable
          columns={[
            {
              label: "Select All",
              headerRender: () => {
                return (
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
                );
              },
              render(value, row, rowIndex) {
                return (
                  <input
                    className="scale-[1.65]"
                    type="checkbox"
                    checked={selectedEmployees.includes(rowIndex)}
                    onChange={() => {
                      if (selectedEmployees.includes(rowIndex)) {
                        setSelectedEmployees(
                          selectedEmployees.filter((i) => i !== rowIndex)
                        );
                      } else {
                        setSelectedEmployees([...selectedEmployees, rowIndex]);
                      }
                    }}
                  />
                );
              },
            },
            {
              label: "Name",
              render(value, row) {
                return <td className="px-3 py-2">{row?.name}</td>;
              },
            },
            {
              label: "Email",
              render(value, row) {
                return <td className="px-3 py-2">{row?.email}</td>;
              },
            },
            {
              label: "Phone",
              render(value, row) {
                return <td className="px-3 py-2">{row?.phone}</td>;
              },
            },
            {
              label: "Employee ID",
              render(value, row) {
                return <td className="px-3 py-2">{row?.employee_id}</td>;
              },
            },
            {
              label: "Remarks",
              render(value, row) {
                return <td className="px-3 py-2">{row?.remarks}</td>;
              },
            },
            {
              label: "Age",
              render(value, row) {
                return <td className="px-3 py-2">{row?.age}</td>;
              },
            },
            {
              label: "Gender",
              render(value, row) {
                return <td className="px-3 py-2">{row?.gender}</td>;
              },
            },
            {
              label: "Address",
              render(value, row) {
                return <td className="px-3 py-2">{row?.address}</td>;
              },
            },
            {
              label: "Selected Date",
              render(value, row) {
                return <td className="px-3 py-2">{row?.selected_date}</td>;
              },
            },
            {
              label: "Timeslot",
              render(value, row) {
                return <td className="px-3 py-2">{row?.selected_timeslot}</td>;
              },
            },
            {
              label: "Vendor ID",
              render(value, row) {
                return <td className="px-3 py-2">{row?.vendor_id}</td>;
              },
            },
          ]}
          data={currentItems}
          showingName=""
          isLoading={false}
          onPageChange={paginate}
          page={currentPage}
          pageSize={itemsPerPage}
          total={employeeList.length}
          pagination={true}
        />
      </div>
    );
  };

  const modals = [
    {
      type: "invalid-data",
      component: (
        <CustomModal
          handleClose={() => modalRenderer.pop("invalid-data")}
          open={true}
          title="Fix Invalid Data"
        >
          <CustomModal.Body>
            <p className="mb-4">
              The following rows have missing or invalid data. Please correct
              them below and click 'Approve'.
            </p>
            <InvalidDataTable
              handleInvalidDataChange={handleInvalidDataChange}
              invalidEmployeeList={invalidEmployeeList}
              setInvalidEmployeeList={setInvalidEmployeeList}
            />
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="flex justify-end gap-2">
              <SecoundaryButton
                onClick={() => modalRenderer.pop("invalid-data")}
              >
                Cancel
              </SecoundaryButton>
              <PrimaryButton onClick={handleApproveInvalidData}>
                Approve and Continue
              </PrimaryButton>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      ),
    },
    {
      type: "table",
      component: (
        <CustomModal
          handleClose={() => modalRenderer.pop("table")}
          open={true}
          title="Bulk Orders List"
        >
          <CustomModal.Body>
            <h3>Please Confirm and Save Changes</h3>
            <BulkOrdersTable />
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="flex justify-end gap-2">
              <PrimaryButton onClick={handleAddEmployee}>
                Save Changes
              </PrimaryButton>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      ),
    },
  ];

  return (
    <BulkOrdersStyled>
      {employeeListParent && employeeListParent?.length === 0 && (
        <>
          <p className="text-[20px] font-semibold font-[Inter] !mb-[23.87px]">
            Bulk Upload Orders List
          </p>
          <p className="text-[22px] font-medium !mb-[10px]">
            Please Upload Excel
          </p>
        </>
      )}
      <div className="w-full flex flex-col gap-6">
        {employeeListParent && employeeListParent?.length === 0 ? (
          <>
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
                  Download The Template For Bulk Upload
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
                          "email",
                          "phone",
                          "employee_id",
                          "remarks",
                          "age",
                          "gender",
                          "address",
                          "selected_date",
                          "selected_timeslot",
                          "vendor_id",
                        ],
                      ]}
                    >
                      <span className="text-[14px] font-medium !text-[#252b61]">
                        Template.2025.csv
                      </span>
                    </DownloadCsv>
                  </a>
                  <div className="flex gap-[13.7px] !mt-[11.17px]">
                    <Info
                      className="w-[14px] h-[14px] flex-shrink-0 mt-1"
                      color="#888"
                    />
                    <span className="text-[14px] text-[#888]">
                      only the csv file types are allowed. Please download the
                      above templet fill & upload for extra feilds contact admin
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-2 border-gray-200" />
          </>
        ) : (
          <div className="flex justify-between items-center">
            <span className="font-medium text-[22px]">
              {employeeListParent?.length} Employee Added
            </span>
            <SecoundaryButton
              disabled={employeeList?.length === 0}
              onClick={() => modalRenderer.push("table")}
              className="!text-[18px] !ml-2"
            >
              Show Bulk Data
            </SecoundaryButton>
          </div>
        )}
        {showTable && <BulkOrdersTable />}
        {!showTable && (
          <CustomModalRenderer
            activeTypes={modalRenderer.activeTypes}
            modals={modals}
          />
        )}
      </div>
    </BulkOrdersStyled>
  );
};

const InvalidDataTable: React.FC<{
  handleInvalidDataChange: (index: number, field: string, value: any) => void;
  invalidEmployeeList: any[];
  setInvalidEmployeeList: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({
  handleInvalidDataChange,
  invalidEmployeeList,
  setInvalidEmployeeList,
}) => (
  <div className="overflow-x-auto">
    <CustomTable
      total={invalidEmployeeList.length}
      showingName="Invalid List"
      data={invalidEmployeeList}
      columns={[
        {
          label: "#",
          dataIndex: "originalIndex",
        },
        {
          label: "Name",
          render: (row, _, index) => (
            <input
              type="text"
              value={row.name || ""}
              onChange={(e) =>
                handleInvalidDataChange(index, "name", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Email",
          render: (row, _, index) => (
            <input
              type="text"
              value={row.email || ""}
              onChange={(e) =>
                handleInvalidDataChange(index, "email", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Phone",
          render: (row, _, index) => (
            <input
              type="number"
              value={row.phone || ""}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  handleInvalidDataChange(index, "phone", value);
                }
              }}
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Age",
          render: (row, _, index) => (
            <input
              type="number"
              value={row.age || ""}
              max="120"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const numValue = parseInt(value);
                if (!value || (numValue > 0 && numValue < 120)) {
                  handleInvalidDataChange(index, "age", value);
                }
              }}
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Gender",
          render: (row, _, index) => (
            <input
              type="text"
              value={row.gender || ""}
              onChange={(e) =>
                handleInvalidDataChange(index, "gender", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Address",
          render: (row, _, index) => (
            <input
              type="text"
              value={row.address || ""}
              onChange={(e) =>
                handleInvalidDataChange(index, "address", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Date",
          render: (row, _, index) => (
            <input
              type="date"
              value={row.selected_date || ""}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) =>
                handleInvalidDataChange(index, "selected_date", e.target.value)
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Timeslot",
          render: (row, _, index) => (
            <input
              type="text"
              value={row.selected_timeslot || ""}
              onChange={(e) =>
                handleInvalidDataChange(
                  index,
                  "selected_timeslot",
                  e.target.value
                )
              }
              className="w-full border rounded px-2 py-1"
            />
          ),
        },
        {
          label: "Action",
          render: (row, _, index) => (
            <button
              onClick={() => {
                const newList = [...invalidEmployeeList];
                newList.splice(index, 1);
                setInvalidEmployeeList(newList);
              }}
            >
              <Trash2 className="text-red-500" />
            </button>
          ),
        },
      ]}
    />
  </div>
);

export default BulkOrders;
