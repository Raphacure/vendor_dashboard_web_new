import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { FaEdit, FaPen, FaTrash } from "react-icons/fa";
import { AppDispatch } from "../../redux/store";
import DeleteModal from "./DeleteModal";
import DownloadForm from "@/components/custom/DownloadForm/DownloadForm";
import { MyPatientMobileStyled, MyPatientStyled } from "./MyPatient.styled";
import { toast } from "react-hot-toast";
import { checkIsMobile } from "@/lib/common";
import { MdMoreVert } from "react-icons/md";
import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import AddPatientModal from "./AddPatientForm/AddPatientModal";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { signinAsUserAPI } from "@/redux/slices/myPatients/myPatientsService";
import useClientDetails from "@/hooks/auth/useClientDetails";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";

const Menu = styled.div`
  background: white;
  border-radius: 8px;
  padding: 3px 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100px;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  position: absolute;
  right: 0px;

  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .divider {
    height: 1px;
    background: #ddd;
    margin: 5px 0;
  }

  .edit-icon {
    color: #333;
  }

  .delete-icon {
    color: red;
  }
`;

const PatientOptions = ({ onEdit, onDelete }: any) => {
  return (
    <Menu>
      <div className="menu-item" onClick={onEdit}>
        <FaPen className="edit-icon" />
        Edit
      </div>
      <div className="divider" />
      <div className="menu-item" onClick={onDelete}>
        <FaTrash className="delete-icon" />
        Delete
      </div>
    </Menu>
  );
};

const MyPatient = () => {
  const navigate = useNavigate() as any;
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const { linkableId } = useClientLinkableId();
  const { clientDetails } = useClientDetails();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [searchText, setSearchText] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null
  );
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [patientsLoading, setPatientsLoading] = useState(true);

  //mobile states
  const [isOptionOpen, setIsOptionOpen] = useState({ open: false, id: "" });

  const [employeeData, setEmployeeData] = useState({}) as any;

  //

  useEffect(() => {
    setSearchText(searchParams.get("globalsearch") || "");
  }, [searchParams]);

  const getAllEmployeesDetails = useCallback(async () => {
    try {
      setPatientsLoading(true);
      const filters = {
        searchText: searchText,
        page: pageNo,
        count: pageSize,
        department: "",
        clientId: linkableId,
        // hasEmployeeId: true,
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
      setPatientsLoading(false);
    }
  }, [dispatch, searchText, pageNo, pageSize, linkableId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getAllEmployeesDetails();
    }, 300);

    return () => clearTimeout(timer);
  }, [getAllEmployeesDetails]);

  // We no longer reset selections when employee data changes
  // This allows maintaining selections across pagination

  //get package details

  const handleRowClick = (id: any) => {
    navigate(`/employees/detail/${id}`);
  };

  const handleCreateOrder = async (userD: any) => {
    const res = (await dispatch(
      signinAsUserAPI({ userid: userD?.id?.toString() })
    )) as any;

    console.log(res);

    if (res?.payload?.success) {
      if (res?.payload?.data?.url) {
        let finalUrl = `${res?.payload?.data?.url}&from_portal=adminDashboard`;
        window.open(finalUrl, "_blank");
      }
    } else {
      toast.error(res?.error?.message || "Something went wrong!.");
    }
  };

  if (checkIsMobile()) {
    return (
      <>
        <MyPatientMobileStyled>
          <div className="mb-2">
            <CommonSearchBox
              placeHolder="Search Name, Email"
              searchText={searchText}
              onSearch={(value) => setSearchText(value)}
            />
          </div>
          <div className="flex justify-end gap-2">
            <div className="patient-create">
              <button
                className="add-patient"
                onClick={() => {
                  setShowForm(true);
                  setEditMode(false);
                }}
              >
                + Employee
              </button>
              <button
                className="add-patient"
                onClick={() =>
                  navigate(`/toxic-substance/employee/add-bulk-employee`)
                }
              >
                Bulk-Upload
              </button>
            </div>
          </div>
          <div className="booking-mobile-body-div">
            <CustomSpinLoader spinning={patientsLoading}>
              {employeeData?.associatedUsers?.map?.((item: any, index: any) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        if (isOptionOpen.open) {
                          setIsOptionOpen({ open: false, id: "" });
                        } else {
                          navigate(`/employees/detail/${item?.id}`, {
                            state: {
                              name: "Employee",
                            },
                          });
                        }
                      }}
                      key={item?.id}
                      className="booking-mobile-div-card"
                    >
                      {isOptionOpen.open && isOptionOpen.id === item?.id && (
                        <PatientOptions
                          onEdit={() => {
                            setShowForm(true);
                            setEditMode(true);
                            setSelectedPatient(item);
                          }}
                          onDelete={() => {
                            setDeleteModal(true);
                            setSelectedPatientId(item?.id);
                          }}
                        />
                      )}
                      <div className="booking-mobile-card-details">
                        <div className="patient-img-box-mobile">
                          {item?.image ? (
                            <img src={item?.image} alt="patient-img" />
                          ) : (
                            <FaUser className="w-full h-full" />
                          )}
                        </div>
                        <div className="booking-details-mobile cursor-pointer">
                          <p className="patient-name">{`${
                            item?.first_name ?? "N/A"
                          } ${item?.last_name ?? ""}`}</p>
                          <p className="patient-other-details">
                            #{item?.id} | {item?.age ?? "N/A"}/
                            {item?.gender ?? "N/A"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="options-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsOptionOpen({ open: true, id: item?.id });
                          }}
                        >
                          <MdMoreVert size={25} />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </CustomSpinLoader>

            <div
              onClick={() => setPageSize((pre) => pre + 10)}
              className="flex justify-center"
            >
              <SecoundaryButton isLoading={patientsLoading}>
                Load More
              </SecoundaryButton>
            </div>
          </div>
          <DeleteModal
            show={showDeleteModal}
            handleDeleteClose={() => {
              setDeleteModal(false);
              getAllEmployeesDetails();
            }}
            patientId={selectedPatientId || ""}
          />
          {showForm && (
            <AddPatientModal
              reload={getAllEmployeesDetails}
              handleClose={() => {
                setShowForm(false);
                setSelectedPatient({});
              }}
              open={showForm}
              editMode={editMode}
              modalData={selectedPatient}
              patientId={selectedPatientId}
            />
          )}
        </MyPatientMobileStyled>
      </>
    );
  }

  return (
    <MyPatientStyled>
      <CommonBreadCrumbs
        items={[{ name: "My Employees", link: "/employees" }]}
      />
      <div className="header mt-1">
        <h2>My Employee</h2>
      </div>

      <div className="filter-container">
        <div></div>
        {/* <div className="sort-dropdown">
          <button
            className="sort-btn"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Sort by: {selectedOption}{" "}
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              {options?.map((option) => (
                <div
                  key={option}
                  className="dropdown-item"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div> */}

        <div className="pd-container">
          <CommonSearchBox
            placeHolder="Search Name, Email"
            searchText={searchText}
            onSearch={(value) => setSearchText(value)}
          />
          <button
            className="add-patient"
            onClick={() => {
              setShowForm(true);
              setEditMode(false);
            }}
          >
            Add Employee
          </button>
          {/* <button
            className="download-btn"
            onClick={() => setShowDownloadPopup(true)}
          >
            <RiDownloadLine size={20} />
          </button> */}

          <div className="add-patient">
            <button
              onClick={() =>
                navigate(`/employees/addEmployee/bulk?from=/employees`)
              }
              className="preview-button"
            >
              Bulk-Upload
            </button>
          </div>
          {showDownloadPopup && (
            <DownloadForm
              sectionType="bookings"
              closeForm={() => setShowDownloadPopup(false)}
            />
          )}
        </div>
      </div>

      <div>
        <CustomTable
          columns={[
            {
              key: "id",
              label: "ID",
              dataIndex: "id",
              render: (text) => text ?? "N/A",
            },
            {
              label: "Name",
              key: "name",
              render: (value) => {
                return (
                  <span
                    className="clickable !text-blue-600"
                    onClick={() => handleRowClick(value?.id)}
                  >
                    {`${value?.first_name ?? ""} ${value?.last_name ?? ""}`}
                    {!value?.first_name && !value?.last_name && "N/A"}
                  </span>
                );
              },
            },
            {
              key: "dob",
              label: "DOB",
              dataIndex: "dob",
              render: (text) => text ?? "N/A",
            },
            {
              key: "age_gender",
              label: "Age/Gender",
              render: (employee) => {
                return (
                  <span>
                    {employee?.age ?? "N/A"} / {employee?.gender ?? "N/A"}
                  </span>
                );
              },
            },
            {
              key: "phone",
              label: "Phone",
              dataIndex: "phone",
              render: (text) => text ?? "N/A",
            },
            {
              key: "action",
              label: "Action",
              render: (employee) => {
                return (
                  <>
                    <FaEdit
                      className="!text-[#252b61] !mr-3 cursor-pointer"
                      onClick={() => {
                        setShowForm(true);
                        setEditMode(true);
                        setSelectedPatient(employee);
                      }}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => {
                        setDeleteModal(true);
                        setSelectedPatientId(employee?.id);
                      }}
                    />
                    {clientDetails &&
                      clientDetails?.agreed_services?.allow_sso &&
                      clientDetails?.subdomain_key && (
                        <PrimaryButton
                          className="!ml-2 px-3 py-1"
                          onClick={() => handleCreateOrder(employee)}
                        >
                          Create Order
                        </PrimaryButton>
                      )}
                  </>
                );
              },
            },
          ]}
          data={employeeData?.associatedUsers}
          isLoading={patientsLoading}
          showingName="Employees"
          page={pageNo}
          pageSize={pageSize}
          pagination={true}
          onPageChange={(page, pageSize) => {
            setPageSize(pageSize);
            setPageNo(page);
          }}
          total={employeeData?.total}
        />
      </div>

      <DeleteModal
        show={showDeleteModal}
        handleDeleteClose={() => {
          setDeleteModal(false);
          getAllEmployeesDetails();
        }}
        patientId={selectedPatientId || ""}
      />
      <AddPatientModal
        reload={getAllEmployeesDetails}
        handleClose={() => {
          setShowForm(false);
          setSelectedPatient({});
        }}
        open={showForm}
        editMode={editMode}
        modalData={selectedPatient}
        patientId={selectedPatientId}
      />
    </MyPatientStyled>
  );
};

export default MyPatient;
