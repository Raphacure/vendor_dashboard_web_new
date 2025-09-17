import CustomPagination from "@/components/custom/Table/CustomTable/Pagination/CustomPagination";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import InviteButton from "@/components/Community/InviteButton/InviteButton";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { sendCommunityInviteAPI } from "@/redux/slices/community/communityService";

const ManageMembers = ({
  admins,
  clientId,
  communityId,
}: {
  admins: any[];
  clientId: string;
  communityId: string;
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const [allAvailableMembers, setAllAvailableMembers] = useState<{
    associatedUsers: any[];
    total: number;
  }>({ associatedUsers: [], total: 0 });
  const [availableMembersPagination, setAvailableMembersPagination] = useState({
    page: 1,
    pageSize: 10,
  });

  const getAllAvailableMembers = useCallback(
    async (memberSearch = "") => {
      try {
        const filters = {
          searchText: memberSearch,
          page: availableMembersPagination.page,
          count: availableMembersPagination.pageSize,
          department: "",
          clientId: clientId,
        };
        const result = (await dispatch(getAllClientEmpoyess(filters))) as any;
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error occured");
          return;
        }
        setAllAvailableMembers(result?.payload?.data);
      } catch (error) {
        toast.error("unknown error occured");
      }
    },
    [availableMembersPagination]
  );

  useEffect(() => {
    getAllAvailableMembers();
  }, [getAllAvailableMembers]);

  useEffect(() => {
    console.log("AllMembers - admins:", admins);
    console.log("AllMembers - associatedUsers:", allAvailableMembers);
  }, [admins, allAvailableMembers]);

  const handleCommunityInvite = async (provider: string, data: string) => {
    console.log("communityId : ", communityId);
    console.log(`Invitation sent via ${provider} to: ${data}`);

    const res: any = await dispatch(
      sendCommunityInviteAPI({
        email: `${data}`,
        communityId: parseInt(communityId),
        invited_by: parseInt(user?.id),
      })
    );
    if (res?.error) {
      toast.error(res?.error?.message || "unknown error occured");
      return;
    }
    toast.success("Invitation sent successfully");
  };

  const renderMemberCard = (member: any, role: string) => {
    const fullName = `${member?.first_name || ""} ${
      member?.last_name || ""
    }`.trim();
    const displayName = fullName || "Unknown User";

    return (
      <div
        key={member?.id}
        className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors border-none"
      >
        <div className="flex items-center gap-3">
          {/* Profile Picture */}
          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
            {member?.profile_picture ? (
              <img
                src={member.profile_picture}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Member Info */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
              {displayName}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    );
  };

  const totalMembers =
    (admins?.length || 0) + (allAvailableMembers?.associatedUsers?.length || 0);

  return (
    <div className="bg-white p-2 sm:p-4 rounded-[20px] flex flex-col gap-4">
      {/* Header with total member count */}
      <div className="flex justify-between items-center">
        <div className="mb-6 px-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Member. {totalMembers}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-0">
            New people that join this community will appear here
          </p>
        </div>
        {communityId && (
          <div>
            <InviteButton
              onInvite={(provider, value) => {
                handleCommunityInvite(provider, value);
              }}
            />
          </div>
        )}
      </div>

      {/* Admins & Moderators Section */}
      {admins && admins.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border-none">
          <div className="px-4 py-3 border-none">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">
              Admins & Moderators {admins.length}
            </h4>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {admins.map((admin) => renderMemberCard(admin, "Admin"))}
          </div>
        </div>
      )}

      {/* Members Section */}
      {allAvailableMembers?.associatedUsers &&
        allAvailableMembers?.associatedUsers.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border-none">
            <div className="px-4 py-3 border-none">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                Members. {allAvailableMembers?.associatedUsers.length}
              </h4>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {allAvailableMembers?.associatedUsers.map((user) =>
                renderMemberCard(user, "Member")
              )}
            </div>
            {allAvailableMembers.associatedUsers?.length > 0 && (
              <div>
                <CustomPagination
                  onPageChange={(page, pageSize) => {
                    setAvailableMembersPagination({
                      page,
                      pageSize,
                    });
                  }}
                  page={availableMembersPagination.page}
                  pageSize={availableMembersPagination.pageSize}
                  total={allAvailableMembers?.total}
                />
              </div>
            )}
          </div>
        )}

      {/* Empty State */}
      {(!admins || admins.length === 0) &&
        (!allAvailableMembers?.associatedUsers ||
          allAvailableMembers?.associatedUsers.length === 0) && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 9a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No members yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Members will appear here once they join the community.
            </p>
          </div>
        )}
    </div>
  );
};

export default ManageMembers;
