import React, { useCallback, useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { AssociatedUsersStyled } from "./AssociatedUsers.styled";
import { Table } from "antd";
import { Form } from "react-bootstrap";
import Switch from "react-switch";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  createAssociateUsersAPI,
  getAssociateUsersApi,
  getUserWalletDetailsAPI,
  updateAssociateUsersAPI,
  updateDependentUsersAPI,
  updateUserWalletDetailsAPI,
} from "../../../redux/slices/Clients/ClientsService";
import BulkUploadClientUsers from "./BulkUploadClientUsers";
import { SERVER_IP } from "@/lib/config";
import { getToken } from "@/lib/helpers";
import { formatStatus } from "@/lib/common";
import { signinAsUserAPI } from "@/redux/slices/myPatients/myPatientsService";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const AssociatedUsers = ({ id }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [packagesPageSize, setPackagesPageSize] = useState(10);
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState({
    users: false,
  });
  const [totalCount, setTotalCount] = useState(0);
  const [viewOnly, setViewOnly] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [clientUserId, setClientUserId] = useState();

  const [isWalletModalVisible, setWalletModalVisible] = useState(false);
  const [walletDetails, setWalletDetails] = useState<any>([]);
  const [editingWalletId, setEditingWalletId] = useState<number | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [excellDownloading, setExcellDownloading] = useState(false);

  const [bulkUpload, setBulkUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: null,
    last_name: null,
    email: null,
    secondary_email: null,
    phone: null,
    secondary_phone: null,
    gender: null,
    employee_id: null,
    dob: null,
    active_status: false,
    age: null,
    designation: null,
    id: null,
  });
  const [isDependentUserUpdate, setIsDependentUserUpdate] = useState(false);

  const intialErrorData: any = {
    first_name: false,
    // last_name: false,
    // email: false,
    // secondary_email: false,
    phone: false,
    // secondary_phone: false,
    gender: false,
    // employee_id: false,
    // dob: false,
    // active_status: false,
    age: false,
    // designation: false,
  };

  const [errors, setErrors] = useState(intialErrorData);

  const dispatch = useDispatch();

  const handleChangeSwitch = async (id: any, flag: any) => {
    console.log({ id, flag });
  };

  const handleCreateOrder = async (userD: any) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const columns: any = [
    {
      label: "Contact name",
      width: 150,
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) =>
        `${record?.first_name ?? ""} ${record?.last_name ?? ""}`,
    },
    {
      label: "Mobile number",
      width: 150,
      dataIndex: "phone",
      key: "phone",
    },
    {
      label: "Email id",
      width: 150,
      dataIndex: "email",
      key: "email",
    },

    {
      label: "Active",
      width: 100,
      key: "status",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons">
                <Switch
                  onChange={() => {
                    handleChangeSwitch(itemV, itemV?.status);
                  }}
                  checked={itemV?.active_status?.toLowerCase() === "active"}
                />
              </div>
            </div>
          </>
        );
      },
    },

    {
      label: "Edit",
      width: 100,
      key: "edit",
      render: (itemV: any) => {
        return (
          <>
            <SecoundaryButton onClick={() => handleEditClick(itemV)}>
              Edit
            </SecoundaryButton>
          </>
        );
      },
    },
    {
      label: "Details",
      width: 100,
      key: "details",
      render: (itemV: any) => {
        return (
          <>
            <SecoundaryButton onClick={() => handleDetailsClick(itemV)}>
              Detail
            </SecoundaryButton>
          </>
        );
      },
    },
    {
      label: "Create Order",
      width: 100,
      key: "create_order",
      render: (itemV: any) => {
        return (
          <>
            <PrimaryButton onClick={() => handleCreateOrder(itemV)}>
              Create
            </PrimaryButton>
          </>
        );
      },
    },
    {
      label: "Wallet",
      width: 100,
      key: "wallets",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons">
                <SecoundaryButton className="text-nowrap" onClick={() => handleWalletClick(itemV.id)}>
                  Show Wallet
                </SecoundaryButton>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const dependentColumns = [
    {
      label: "Name",
      key: "name",
      render: (_: any, record: any) =>
        `${record?.first_name ?? ""} ${record?.last_name ?? ""}`,
    },
    {
      label: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      label: "Email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Gender",
    //   dataIndex: "gender",
    //   key: "gender",
    // },
    // {
    //   title: "DOB",
    //   dataIndex: "dob",
    //   key: "dob",
    // },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    //   key: "age",
    // },
    // {
    //   title: "Employee ID",
    //   dataIndex: "employee_id",
    //   key: "employee_id",
    // },
    // {
    //   title: "Designation",
    //   dataIndex: "designation",
    //   key: "designation",
    // },
    // {
    //   title: "Secondary Phone",
    //   dataIndex: "secondary_phone",
    //   key: "secondary_phone",
    // },
    // {
    //   title: "Secondary Email",
    //   dataIndex: "secondary_email",
    //   key: "secondary_email",
    // },
    {
      label: "Status",
      dataIndex: "active_status",
      key: "active_status",
    },
    {
      label: "Edit",
      width: 100,
      key: "edit",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons">
                <button onClick={() => handleEditClick(itemV, true)}>
                  Edit
                </button>
              </div>
            </div>
          </>
        );
      },
    },
    {
      label: "Details",
      width: 100,
      key: "details",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons">
                <button onClick={() => handleDetailsClick(itemV)}>
                  Detail
                </button>
              </div>
            </div>
          </>
        );
      },
    },
    {
      label: "Create Order",
      width: 100,
      key: "create_order",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              <div className="action-buttons">
                <button onClick={() => handleCreateOrder(itemV)}>Create</button>
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const fetchuserWalletDetailsApi = async (id: number) => {
    if (!id) return;

    try {
      const requestBody = {
        clientUsers: {
          id: id,
        },
      };
      const response: any = await dispatch(
        getUserWalletDetailsAPI(requestBody)
      );

      console.log(response, "response");

      if (response?.payload?.success) {
        setWalletDetails(response.payload?.data?.wallets);
        setWalletModalVisible(true);
      }
    } catch (error) {
      console.error("Error fetching wallet details:", error);
    } finally {
      console.log("finished");
    }
  };

  const handleWalletClick = async (userId: any) => {
    console.log(userId);

    fetchuserWalletDetailsApi(userId);
    setClientUserId(userId);
  };

  const closeWalletModal = () => {
    setWalletModalVisible(false);
  };

  console.log(errors, formData, "errors");

  const handleEditClick = (user: any, isDependentUserUpdt: boolean = false) => {
    setIsDependentUserUpdate(isDependentUserUpdt);
    console.log(isDependentUserUpdt, "isDependentUserUpdt");

    setFormData({
      first_name: user.first_name || null,
      last_name: user.last_name || null,
      email: user.email || null,
      secondary_email: user.secondary_email || null,
      phone: user.phone || null,
      secondary_phone: user.secondary_phone || null,
      gender: user.gender || null,
      employee_id: user.employee_id || null,
      dob: user.dob || null,
      age: user.age || null,
      designation: user.designation || null,
      active_status: user.active_status === "active",
      id: user.id,
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDetailsClick = (user: any) => {
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      email: user.email || "",
      secondary_email: user.secondary_email || "",
      phone: user.phone || "",
      secondary_phone: user.secondary_phone || "",
      gender: user.gender || "",
      employee_id: user.employee_id || "",
      dob: user.dob || "",
      age: user.age || "",
      designation: user.designation || "",
      active_status: user.active_status === "active",
      id: user.id,
    });
    setViewOnly(true);
    setIsModalOpen(true);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setPackagesPageSize(pageSize);
    setPage(page);
  };
  const handleChangeValue = (value: string) => {
    setSearchText(value);
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setErrors({ ...errors, [name]: false });
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getAssociatedUsers = useCallback(
    async (clientId: any) => {
      try {
        setLoading({
          users: true,
        });
        const res = (await dispatch(
          getAssociateUsersApi({
            clientId: clientId,
            count: packagesPageSize,
            page: page - 1,
            searchText: searchText,
          })
        )) as any;
        console.log("API Response: ", res);

        setTableData(res?.payload?.data?.clientUsers);
        setTotalCount(res?.payload?.data?.clientUsersCount);
      } catch (error) {
        console.error("Error fetching associated users:", error);
      } finally {
        setLoading({
          users: false,
        });
      }
    },
    [dispatch, searchText, packagesPageSize, page]
  );

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setViewOnly(false);
    setFormData({
      first_name: null,
      last_name: null,
      email: null,
      secondary_email: null,
      phone: null,
      secondary_phone: null,
      employee_id: null,
      designation: null,
      gender: null,
      dob: null,
      age: null,
      active_status: false,
      id: null,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValid = true;
    const initErrVal: any = {};

    // Utility regex patterns
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [
      "first_name",
      "last_name",
      "email",
      "secondary_email",
      "phone",
      "age",
      "gender",
      "secondary_phone",
    ]?.forEach((key) => {
      const value = (formData as any)?.[key];

      switch (key) {
        case "first_name":
          if (!value || !nameRegex.test(value)) {
            isValid = false;
            initErrVal[key] =
              "First name is required and must contain letters only";
          } else {
            initErrVal[key] = "";
          }
          break;

        case "last_name":
          if (value && !nameRegex.test(value)) {
            isValid = false;
            initErrVal[key] = "Last name must contain letters only";
          } else {
            initErrVal[key] = "";
          }
          break;

        case "email":
        case "secondary_email":
          if (value && !emailRegex.test(value)) {
            isValid = false;
            initErrVal[key] = "Must be a valid email address";
          } else {
            initErrVal[key] = "";
          }
          break;

        case "phone":
          if (!value || !phoneRegex.test(value)) {
            isValid = false;
            initErrVal[key] = "Phone is required and must be a 10-digit number";
          } else {
            initErrVal[key] = "";
          }
          break;
        case "secondary_phone":
          if (value && !phoneRegex.test(value)) {
            isValid = false;
            initErrVal[key] = "Secondary Phone must be a 10-digit number";
          } else {
            initErrVal[key] = "";
          }
          break;

        case "age":
          if (
            value === null ||
            value === "" ||
            isNaN(value) ||
            value < 0 ||
            value > 200
          ) {
            isValid = false;
            initErrVal[key] = "Age is required and must be between 0 and 200";
          } else {
            initErrVal[key] = "";
          }
          break;

        case "gender":
          if (!value) {
            isValid = false;
            initErrVal[key] = "Gender is required";
          } else {
            initErrVal[key] = "";
          }
          break;

        default:
          // For any other fields
          initErrVal[key] = "";
      }
    });

    // Show errors and stop submission
    if (!isValid) {
      setErrors(initErrVal);
      return;
    }

    const payload: any = {
      user: {
        ...formData,
        active_status: formData.active_status ? "active" : "inactive",
      },
    };

    let res;
    if (isEditing) {
      if (isDependentUserUpdate) {
        const userId = payload?.user?.["id"];
        delete payload?.user?.["id"];
        res = (await dispatch(
          updateDependentUsersAPI({ id: userId, payload })
        )) as any;
      } else {
        res = (await dispatch(updateAssociateUsersAPI({ id, payload }))) as any;
      }
    } else {
      delete payload.user.id;
      res = (await dispatch(createAssociateUsersAPI({ id, payload }))) as any;
    }

    console.log("API Response: ", res);

    if (res?.payload?.success) {
      setFormData({
        first_name: null,
        last_name: null,
        email: null,
        secondary_email: null,
        phone: null,
        secondary_phone: null,
        gender: null,
        employee_id: null,
        dob: null,
        active_status: false,
        age: null,
        designation: null,
        id: null,
      });

      setIsModalOpen(false);
      toast.success("Form submitted successfully!");
      getAssociatedUsers(id);
    } else {
      toast.error(
        res?.error?.message || "Failed to submit the form. Please try again."
      );
    }
  };

  useEffect(() => {
    const debouce = setTimeout(() => {
      getAssociatedUsers(id);
    }, 400);

    return () => clearTimeout(debouce);
  }, [id, dispatch, getAssociatedUsers]);

  const handleAmountClick = (walletId: number) => {
    setEditingWalletId(walletId);
    setAmount(0);
  };

  const handleAmountChange = (value: string) => {
    setAmount(Number(value));
  };

  const handleAddAmount = async (
    walletId: number,
    clientUserId1: any,
    wallet: any
  ) => {
    try {
      const updateData = {
        amount: amount,
      };

      const response: any = await dispatch(
        updateUserWalletDetailsAPI({
          updateData,
          clientUsers: { id: clientUserId1 },
          wallets: { id: walletId },
        })
      );
      console.log("response", response);

      if (response?.payload?.success) {
        console.log("Amount added successfully:", response);
        fetchuserWalletDetailsApi(clientUserId as any);
      }
    } catch (error) {
      console.error("Error while adding amount:", error);
    } finally {
      setEditingWalletId(null);
    }
  };

  const handleReduceAmount = async (
    walletId: number,
    clientUserId1: any,
    wallet: any
  ) => {
    try {
      const updateData = {
        amount: amount,
      };

      const response: any = await dispatch(
        updateUserWalletDetailsAPI({
          updateData,
          clientUsers: { id: clientUserId1 },
          wallets: { id: walletId },
        })
      );

      if (response?.payload?.success) {
        console.log("Amount reduced successfully:");
        fetchuserWalletDetailsApi(clientUserId as any);
      }
    } catch (error) {
      console.error("Error while reducing amount:", error);
    } finally {
      setEditingWalletId(null);
    }
  };

  const handleDownloadExcell = async () => {
    setExcellDownloading(true);

    fetch(`${SERVER_IP}/api/v1/client/${id}/associated-user/download`, {
      method: "GET",
      headers: {
        Accept: "text/csv",
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    })
      .then((response) => response.blob())
      .then((res) => {
        console.log(res);
        // Create a link element
        const url: any = window.URL.createObjectURL(res);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.csv"; // Set file name
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        setExcellDownloading(false);
      });
  };

  return (
    <AssociatedUsersStyled>
      <div className="header">
        <div className="heading">
          <h2>Client User Details</h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-3 mb-4">
        <CommonSearchBox
          onSearch={handleChangeValue}
          placeHolder="Search associated user by name, phone or email"
          searchText={searchText}
        />
        <div className="flex gap-2 items-center">
          <SecoundaryButton className="ml-2" onClick={handleDownloadExcell}>
            Download
          </SecoundaryButton>
          <PrimaryButton
            onClick={() => {
              setBulkUpload((prev) => !prev);
            }}
          >
            {bulkUpload ? "Cancel Bulk Upload" : "Bulk Upload"}
          </PrimaryButton>
          <PrimaryButton onClick={handleModalToggle}>Add User</PrimaryButton>
        </div>
      </div>

      {bulkUpload ? (
        <>
          <BulkUploadClientUsers
            onSuccess={() => {
              setBulkUpload(false);
            }}
            id={id}
          />
        </>
      ) : (
        <div className="">
          <CustomTable
            data={tableData}
            columns={columns}
            showingName="Users"
            isLoading={loading.users}
            onPageChange={handlePageChange}
            page={page}
            pageSize={packagesPageSize}
            pagination={true}
            total={totalCount}
            expandable={{
              expandedRowRender: (record) => {
                return (
                  <div>
                    <h5>Dependent Users:</h5>
                    <Table
                      columns={dependentColumns}
                      dataSource={record?.dependents || []}
                      rowKey="id"
                      pagination={false}
                      size="small"
                      bordered
                    />
                  </div>
                );
              },
              rowExpandable: (record) =>
                Array.isArray(record?.dependents) &&
                record.dependents.length > 0,
            }}
          />
          {/* <Table
            columns={columns}
            rowKey="id"
            dataSource={tableData}
            pagination={{
              current: page,
              pageSize: packagesPageSize,
              total: totalCount,
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "50", "100"],
            }}
            onChange={handlePageChange}
            bordered
            scroll={{ x: "max-content" }}
            expandable={{
              expandedRowRender: (record) => {
                return (
                  <div>
                    <h5>Dependent Users:</h5>
                    <Table
                      columns={dependentColumns}
                      dataSource={record?.dependents || []}
                      rowKey="id"
                      pagination={false}
                      size="small"
                      bordered
                    />
                  </div>
                );
              },
              rowExpandable: (record) =>
                Array.isArray(record?.dependents) &&
                record.dependents.length > 0,
            }}
          /> */}
        </div>
      )}

      <CustomModal
        headerClassName="px-2"
        title={
          viewOnly
            ? "View User Details"
            : isEditing
            ? "Edit User Details"
            : "Add User Details"
        }
        open={isModalOpen}
        handleClose={handleModalClose}
      >
        <CustomModal.Body>
          <div>
            <Form>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        value={formData.first_name || ""}
                        onChange={handleChange}
                        required
                        isInvalid={errors?.first_name}
                        disabled={viewOnly}
                      />
                      {errors?.first_name && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.first_name ?? "First Name is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        value={formData.last_name || ""}
                        onChange={handleChange}
                        required
                        isInvalid={errors?.last_name}
                        disabled={viewOnly}
                      />
                      {errors?.last_name && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.last_name ?? "Last Name is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                        disabled={viewOnly}
                      />
                      {errors?.email && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.email ?? "Email is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Secondary Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="secondary_email"
                        value={formData.secondary_email || ""}
                        onChange={handleChange}
                        disabled={viewOnly}
                      />
                      {errors?.secondary_email && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.secondary_email ?? "Email is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        name="phone"
                        maxLength={10}
                        value={formData.phone || ""}
                        onChange={handleChange}
                        required
                        isInvalid={errors?.phone}
                        disabled={viewOnly}
                      />
                      {errors?.phone && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.phone ?? "Phone is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Secondary Phone</Form.Label>
                      <Form.Control
                        type="number"
                        maxLength={10}
                        name="secondary_phone"
                        value={formData.secondary_phone || ""}
                        onChange={handleChange}
                        isInvalid={errors?.secondary_phone}
                        disabled={viewOnly}
                      />
                      {errors?.secondary_phone && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.secondary_phone ?? ""}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Employee ID</Form.Label>
                      <Form.Control
                        type="text"
                        name="employee_id"
                        value={formData.employee_id || ""}
                        onChange={handleChange}
                        required
                        disabled={viewOnly}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        name="designation"
                        value={formData.designation || ""}
                        onChange={handleChange}
                        required
                        disabled={viewOnly}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <div className="flex gap-4 mt-2">
                        {["male", "female"].map((gender) => {
                          const id = `gender-${gender}`;
                          return (
                            <Form.Check
                              key={gender}
                              type="radio"
                              id={id}
                              label={
                                gender.charAt(0).toUpperCase() + gender.slice(1)
                              }
                              name="gender"
                              value={gender}
                              checked={formData.gender === gender}
                              onChange={handleChange}
                              inline
                              isInvalid={errors?.gender}
                              disabled={viewOnly}
                            />
                          );
                        })}
                      </div>
                      {errors?.gender && (
                        <Form.Control.Feedback type="invalid">
                          Gender is required.
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        max={new Date().toISOString().split("T")[0]}
                        value={formData.dob || ""}
                        onChange={handleChange}
                        required
                        disabled={viewOnly}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age || ""}
                        onChange={handleChange}
                        min="0"
                        max="100"
                        required
                        isInvalid={errors?.age}
                        disabled={viewOnly}
                      />
                      {errors?.age && (
                        <Form.Control.Feedback type="invalid">
                          {errors?.age ?? "Age is required."}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </div>
                  <div className="flex-1 flex items-center gap-4 mt-6">
                    <Form.Group className="flex items-center gap-2 mb-0">
                      <Form.Label className="mb-0 active-status-label">
                        Active Status
                      </Form.Label>
                      <Form.Check
                        type="checkbox"
                        className="cursor-pointer"
                        name="active_status"
                        checked={formData.active_status}
                        onChange={handleChange}
                        disabled={viewOnly}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-end gap-2">
            <PrimaryButton disabled={viewOnly} onClick={handleSubmit}>
              {isEditing ? "Update" : "Save"}
            </PrimaryButton>
          </div>
        </CustomModal.Footer>
      </CustomModal>

      {isWalletModalVisible && (
        <CustomModal
          title="Wallet Details"
          open={isWalletModalVisible}
          handleClose={() => setWalletModalVisible(false)}
        >
          <CustomModal.Body>
            <div className="wallet-modal">
              <div className="wallet-details">
                {walletDetails?.map((wallet: any, index: number) => (
                  <div key={index} className="wallet-row">
                    <div className="wallet-type">
                      <strong>Wallet Type:</strong>
                      <p>{formatStatus(wallet.type)}</p>
                    </div>
                    <div className="wallet-type">
                      <strong>Wallet Name:</strong>
                      <p>{wallet.name}</p>
                    </div>
                    <div className="wallet-amounts">
                      <div className="wallet-amount">
                        <strong>Client Wallet Amount:</strong>
                        {/* <p>
                            {
                              wallet.discount_percentage !== null && wallet.limits !== null
                              ? `Discount: ${wallet.discount_percentage}% Limit: ${wallet.limits}`
                              : `₹${wallet.total_amount}`
                            }
                          </p> */}
                        <p>
                          {wallet?.total_amount
                            ? `₹${wallet?.total_amount}`
                            : wallet?.discount_percentage === 100
                            ? "Unlimited"
                            : `${wallet?.discount_percentage || "0"}%`}
                        </p>
                      </div>
                      <div className="remaining-amount">
                        <strong>Remaining Amount:</strong>
                        <p>
                          {wallet?.wallet_type === "limits" ||
                          wallet?.wallet_type === "unlimited"
                            ? wallet?.discount_percentage === 100
                              ? "Unlimited"
                              : wallet?.limits
                            : wallet?.amount}
                        </p>
                      </div>
                    </div>
                    <div key={wallet.id} className="wallet-row">
                      <div className="wallet-actions">
                        {editingWalletId === wallet.id ? (
                          <div className="edit-amount">
                            <input
                              type="number"
                              value={amount === 0 ? "" : amount}
                              onChange={(e) => {
                                const value = e.target.value;
                                handleAmountChange(value);
                              }}
                              className="amount-input"
                            />

                            {amount > 0 ? (
                              <button
                                onClick={() =>
                                  handleAddAmount(
                                    wallet.id,
                                    clientUserId,
                                    wallet
                                  )
                                }
                                className="add-button"
                              >
                                Add
                              </button>
                            ) : amount < 0 ? (
                              <button
                                onClick={() =>
                                  handleReduceAmount(
                                    wallet.id,
                                    clientUserId,
                                    wallet
                                  )
                                }
                                className="reduce-button"
                              >
                                Reduce
                              </button>
                            ) : null}
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => handleAmountClick(wallet.id)}
                              className="edit-button"
                            >
                              <FaPlus /> <FaMinus /> Amount
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {
                  walletDetails?.length === 0 && (
                    <p className="text-center">No wallets available.</p>
                  )
                }
              </div>
            </div>
          </CustomModal.Body>
        </CustomModal>
      )}
    </AssociatedUsersStyled>
  );
};

export default AssociatedUsers;
