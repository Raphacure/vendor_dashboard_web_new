import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "../../redux/store";
import { ClinicUsersStyled } from "./ClinicUsers.styled";
import { toast } from "react-hot-toast";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import moment from "moment";
import { getAllAdmins } from "@/redux/slices/doctorUsers/doctorUsersService";
import { IoSearch } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { formatStatus } from "@/lib/common";
import { MdOutlineClear } from "react-icons/md";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";

const MyPatient = () => {
  const navigate = useNavigate() as any;
  const dispatch = useDispatch<AppDispatch>();

  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);

  const [searchText, setSearchText] = useState("");

  const [usersLoading, setUsersLoading] = useState(true);
  const [users, setUsers] = useState([]) as any;

  const roleList = [
    { label: "Administrator", value: "administrator" },
    { label: "Hr", value: "hr" },
  ];
  const [selectedRole, setSelectedRole] = useState("");

  //

  const getAllUsersDetails = useCallback(async () => {
    try {
      setUsersLoading(true);
      const result = (await dispatch(
        getAllAdmins({
          search: searchText,
          subRole: selectedRole,
          count: pageSize,
          page: pageNo,
        })
      )) as any;
      console.log("result", result);
      if (result?.error) {
        setUsers({
          adminUsers: [],
          adminCount: 0,
        });
        if (result?.error?.message !== "No users found.") {
          toast.error(result?.error?.message || "Unknown Error Occured");
        }
        return;
      }
      setUsers(result?.payload?.data);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setUsersLoading(false);
    }
  }, [dispatch, searchText, pageNo, pageSize, selectedRole]);

  useEffect(() => {
    getAllUsersDetails();
  }, [getAllUsersDetails]);

  const columns = [
    {
      label: "Emp Id",
      key: "id",
      dataIndex: "id",
    },
    {
      label: "Name",
      key: "name",
      render: (user: any) => (
        <span>
          {user?.first_name} {user?.last_name ?? ""}
        </span>
      ),
    },
    {
      label: "Email",
      key: "email",
      render: (user: any) => <span>{user?.email ?? "N/A"}</span>,
    },
    {
      label: "Joining Date",
      key: "joining_date",
      render: (user: any) => (
        <span>
          {moment(user?.joining_date).isValid()
            ? moment(user?.joining_date).format("DD/MM/YYYY")
            : "N/A"}
        </span>
      ),
    },
    {
      label: "Ph Number",
      key: "phone",
      render: (user: any) => <span>{user?.phone ?? "N/A"}</span>,
    },
    {
      label: "Role",
      key: "role",
      render: (user: any) => (
        <span>{formatStatus(user?.roles?.[0]?.subRole) || "N/A"}</span>
      ),
    },
    {
      label: "Status",
      key: "status",
      render: (user: any) => {
        return (
          <span>
            {formatStatus(
              user?.active_status === "deleted"
                ? "in_active"
                : user?.active_status
            )}
          </span>
        );
      },
    },
    {
      label: "Action",
      key: "action",
      render: (user: any) => (
        <span className="cursor-pointer">
          <FaPen
            className="edit-icon"
            onClick={() => {
              if (user?.roles?.[0]?.subRole === "doctor") {
                navigate(
                  `/onboarding/profile?doctorId=${user?.roles?.[0]?.linkable_id}&from_page=/manageUsers`
                );
              } else {
                navigate(`/manageUsers/edit?userId=${user?.id}`);
              }
            }}
          />
        </span>
      ),
    },
  ];

  return (
    <ClinicUsersStyled>
      <div className="flex justify-between mb-3 top-header-responsive">
        <div className="header">
          <h2>Manage Users</h2>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="filter-container">
          <div className="flex gap-2 items-center filter-responsive">
            <div className="relative">
              <div className="search-btn absolute rounded-full h-[70%] top-1/2 translate-y-[-50%] left-2 flex items-center justify-center">
                <IoSearch />
              </div>
              <input
                placeholder="Search Name, Email"
                className="w-full border !border-blue-900 focus:!border-blue-900 rounded-3xl py-2 search-box"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </div>
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
                  Select Role
                </option>
                {roleList?.map((role: any) => (
                  <option key={role?.value} value={role?.value}>
                    {role?.label}
                  </option>
                ))}
              </select>
            </div>

            <PrimaryButton
              onClick={() => navigate("/manageUsers/new")}
              className="px-4 py-2 text-[16px]"
            >
              Add User
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div>
        <CustomTable
          columns={columns}
          data={users?.adminUsers ?? []}
          showingName="Users"
          isLoading={usersLoading}
          onPageChange={(page, pageSize) => {
            setPageNo(page);
            setPageSize(pageSize);
          }}
          pageSize={pageSize}
          pagination={true}
          page={pageNo}
          total={users?.adminCount}
        />
      </div>
    </ClinicUsersStyled>
  );
};

export default MyPatient;
