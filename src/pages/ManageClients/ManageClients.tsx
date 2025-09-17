import { useCallback, useEffect, useState } from "react";
import { ManageUsersStyled } from "./ManageClients.styled";
import { Table, Select } from "antd";

import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import AddNewClinetModel from "./AddNewClientModel";
// import add_icon from "../../img/delta/add.png";
import Switch from "react-switch";
import { getAllClientsRestApi } from "@/redux/slices/Clients/ClientsService";
import moment from "moment";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { IoSearch } from "react-icons/io5";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const ManageUsers = () => {
  const [status, setStatus] = useState<any>(null);
  const [showAddNewUserModel, setShowAddNewUserModel] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [shadowPage, setShadowPage] = useState(currentPage);
  const dispatch = useDispatch();
  const { allClients, loading } = useSelector((state: any) => state?.clients);

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (
        shadowPage >= 1 &&
        shadowPage <= Math.ceil(allClients?.data?.clientsCount / pageSize)
      ) {
        setCurrentPage(shadowPage);
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [shadowPage]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    if (!searchParams) return;
    try {
      if (searchParams?.get("search")) {
        setSearchQuery(searchParams?.get("search") ?? "");
      }
      if (searchParams?.get("pgNo")) {
        setCurrentPage(Number(searchParams?.get("pgNo") ?? 1));
      }
      if (searchParams?.get("size")) {
        setPageSize(Number(searchParams?.get("size") ?? 10));
      }
      if (searchParams?.get("status")) {
        setStatus(searchParams?.get("status") ?? "");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("search", searchQuery);
    if (currentPage) params.set("pgNo", currentPage.toString());
    if (pageSize) params.set("size", pageSize.toString());
    if (status) params.set("status", status);

    // history.replace({ search: params?.toString() });
  }, [searchQuery, status, pageSize, currentPage]);

  const getAllClientsApi = useCallback(() => {
    const body: any = {
      page: currentPage - 1,
      count: pageSize,
    };

    if (status) {
      body.status = status;
    }
    if (searchQuery) {
      body.searchText = searchQuery;
    }

    dispatch(getAllClientsRestApi(body));
  }, [currentPage, pageSize, status, searchQuery]);

  useEffect(() => {
    getAllClientsApi();
  }, [getAllClientsApi]);

  const toggleStatusApi = async (
    id: string,
    status: "approved" | "inactive"
  ) => {
    // const res: any = await dispatch(toggleActiveStatus({ id: id, body: { status } }))
    // console.log(res);
    // if (res?.payload?.success) {
    //   toast.success(`Clients Active Status Updated To ${status}`)
    //   getAllClientsApi()
    //   return
    // }
    // else {
    //   toast.error(res?.error?.message || 'Failed to update active status')
    // }
  };

  const handleCancel = () => {
    setShowAddNewUserModel(false);
  };
  const addUserSuccess = () => {
    setShowAddNewUserModel(false);
    setShowSuccessMessage(true);
  };
  const handleCreatenewApp = () => {
    setSelectedUser("");
    setShowAddNewUserModel(true);
  };
  const handleChangeValue = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const columns = [
    {
      label: "Id",
      key: "id",
      dataIndex: "id",
      render: (id: any) => (
        <span
          onClick={() => navigate(`update/${id}`)}
          className="no-underline text-blue-500 cursor-pointer"
        >
          {id}
        </span>
      ),
    },
    {
      label: "Name",
      key: "name",
      dataIndex: "name",
    },

    {
      label: "User count",
      key: "user_count",
      dataIndex: "user_count",
      render: (item: any) => {
        return <>{item}</>;
      },
    },
    {
      label: "Client User count",
      key: "client_user_count",
      dataIndex: "client_user_count",
      render: (item: any) => {
        return <>{item}</>;
      },
    },

    // {
    //   label: "Parent Client",
    //   key: "parentClient",
    //   render: (item: any) => {
    //     return <>{item?.name}</>;
    //   },
    // },
    // {
    //   label: "Contract Start",
    //   key: "contract_start",
    //   dataIndex: "contract_start",
    //   render: (item: any) => {
    //     return <>{item ? moment(item)?.format("DD/MM/YYYY") : ""}</>;
    //   },
    // },
    // {
    //   label: "Contract End",
    //   key: "contract_end",
    //   dataIndex: "contract_end",
    //   render: (item: any) => {
    //     return <>{item ? moment(item)?.format("DD/MM/YYYY") : ""}</>;
    //   },
    // },
    // {
    //   label: "Created",
    //   key: "created_at",
    //   dataIndex: "created_at",
    //   render: (item: any) => {
    //     return <>{item ? moment(item)?.format("DD/MM/YYYY") : ""}</>;
    //   },
    // },
  ] as any;

  const statusOption = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "In Active",
      value: "inactive",
    },
  ];

  // const filterClients = (clients: any[], query: string) => {
  //   if (!query) return clients;

  //   return clients?.filter((client) => {
  //     const id = client?.id?.toString().toLowerCase();
  //     const name = client?.name?.toLowerCase();
  //     const userCount = client?.user_count?.toString().toLowerCase();
  //     const parentClient = client?.parentClient?.name?.toLowerCase();
  //     return (
  //       id?.includes(query.toLowerCase()) ||
  //       name?.includes(query.toLowerCase()) ||
  //       userCount?.includes(query.toLowerCase()) ||
  //       parentClient?.includes(query.toLowerCase())
  //     );
  //   });
  // };

  // const filteredClients = useMemo

  // filterClients(
  //   allClients?.data?.clients || [],
  //   searchQuery
  // );

  return (
    <>
      <ManageUsersStyled>
        <div className="freshbag-wrapper px-2 sm:px-4 pt-3 ">
          <div className="content getinTouchPage">
            <div>
              <CommonBreadCrumbs
                items={[
                  { name: "Clients", link: "/MyClients" },
                  { name: "All Clients" },
                ]}
              />
              <div className="profileinfoHeader">
                <div className="top-sec-header-sec">
                  <h2 className="!text-[20px]">Manage Clients</h2>
                </div>
                {/* <p>View All Clients</p> */}
              </div>
            </div>
            <div className="create-new-institute-sec-content-all">
              <div className="student-fields-sec-content-all max-[675px]:flex-col deltape-form">
                <div className="flex gap-2">
                  <div className="student-info-row">
                    <label
                      htmlFor="client_search"
                      className="!text-sm mb-1 text-[raphaprimary]"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute rounded-full h-[70%] top-1/2 -translate-y-1/2 left-2 flex items-center justify-center bg-[#92BDF6] aspect-square">
                        <IoSearch />
                      </div>
                      <input
                        id="client_search"
                        placeholder="Search Name, Email"
                        className="w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl !py-[5.7px] !pl-[40px]"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleChangeValue(e)}
                      />
                    </div>
                  </div>

                  {/* <div className="delta-select-column">
                    <label className="!text-sm mb-1">Select Status </label>
                    <br />
                    <Select
                      value={status}
                      placeholder="Select Status"
                      onChange={(e: any) => {
                        setStatus(e);
                      }}
                      options={statusOption}
                      className="delta-select !h-[37px] !min-w-[150px]"
                      // classNamePrefix="delta-select"
                    />
                  </div> */}
                </div>
                {/* <div className="delta-select-column submit-filter-btn-sec">
                  <button className="deltape-button">SUBMIT</button>
                </div> */}
                {/* <div>
                  <PrimaryButton onClick={handleCreatenewApp}>
                    Add New Client{" "}
                  </PrimaryButton>
                </div> */}
              </div>
            </div>

            <div>
              <div className="institutes-filters"></div>
              <div className="all-institutes-data deltape-table-view">
                <CustomTable
                  columns={columns}
                  data={allClients?.data?.clients}
                  page={currentPage}
                  pageSize={pageSize}
                  total={allClients?.data?.clientsCount}
                  onPageChange={(page, pageSize) => {
                    setCurrentPage(page);
                    setPageSize(pageSize);
                  }}
                  isLoading={loading}
                  pagination={true}
                  showingName="Clients"
                />
              </div>
            </div>
          </div>
          <AddNewClinetModel
            onSuccess={() => {
              setShowAddNewUserModel(false);
              setSelectedUser({});
              getAllClientsApi();
            }}
            handleCancel={handleCancel}
            selectedUser={selectedUser}
            addUserSuccess={addUserSuccess}
            show={showAddNewUserModel}
            getAllUsersCall={getAllClientsApi}
          />
          {/* <CustomModal
            show={showSuccessMessage}
            titleText={
              selectedUser
                ? "User Successfully Updated."
                : "User Successfully Created."
            }
            deleteText="Ok"
            cancelText=""
            onDelete={() => {
              setShowSuccessMessage(false);
              handleCancel();
            }}
          /> */}
        </div>
      </ManageUsersStyled>
    </>
  );
};

export default ManageUsers;
