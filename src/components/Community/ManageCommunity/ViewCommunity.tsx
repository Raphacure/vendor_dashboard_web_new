import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CommunityDiscussion from "./CommunityDiscussion";
import ManageMembers from "./ManageMembers";
import { SquarePen } from "lucide-react";
import { checkIsMobile } from "@/lib/common";

const ViewCommunity = ({ type, communityDetails, setIsEdit }: any) => {
  const [activeTab, setActiveTab] = useState<string>("About");
  const { currentCommunity, formData } = useSelector(
    ({ community }: any) => community
  );
  const { linkableId: clientId } = useClientLinkableId();

  // Get the most current data (either from Redux formData or communityDetails)
  const displayData = formData || communityDetails;

  useEffect(() => {
    console.log("ViewCommunity - type:", type);
    console.log("ViewCommunity - communityDetails:", communityDetails);
    console.log(
      "ViewCommunity - currentCommunity from Redux:",
      currentCommunity
    );
    console.log("ViewCommunity - formData from Redux:", formData);
    console.log("ViewCommunity - displayData:", displayData);
  }, [type, communityDetails, currentCommunity, formData, displayData]);

  return (
    <div className="shadow rounded-[25px] border p-2 sm:p-4 md:!my-[16px] md:!mx-[16px] max-h-[calc(100vh-90px-32px)] overflow-y-auto">
      <div className="flex justify-between">
        <p className="text-[1.8rem]">Community View</p>
        <SquarePen onClick={() => setIsEdit((pre: boolean) => !pre)} />
      </div>
      <div className="shadow border rounded-[25px] p-0 flex flex-col gap-4 ">
        {displayData?.coverImage || displayData?.cover_image ? (
          <img
            src={displayData?.coverImage || displayData?.cover_image}
            alt="Community Cover"
            className="w-full !h-[30vh] object-contain rounded-t-[25px] bg-slate-100"
          />
        ) : (
          <div className="w-full h-[30vh] bg-gray-200 dark:bg-gray-700 rounded-t-[25px] flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">
              No Cover Image
            </span>
          </div>
        )}
        <div className="communityContent">
          <p className="p-4 text-[2rem]">
            {displayData?.communityName ||
              displayData?.name ||
              "Community Name"}
          </p>
          <div className="p-4 tabs flex gap-8 border-b pb-2 max-w-[100%] overflow-x-auto">
            <div
              className={`tab-item cursor-pointer pb-2 px-1 ${
                activeTab === "About"
                  ? "font-semibold border-b-2 border-[#222E62] -mb-[9px]"
                  : "font-medium text-[#222E62]"
              }`}
              onClick={() => setActiveTab("About")}
            >
              About
            </div>
            <div
              className={`tab-item cursor-pointer pb-2 px-1 ${
                activeTab === "Discussion"
                  ? "font-semibold border-b-2 border-[#222E62] -mb-[9px]"
                  : "font-medium text-[#222E62]"
              }`}
              onClick={() => setActiveTab("Discussion")}
            >
              Discussion
            </div>
            <div
              className={`tab-item cursor-pointer pb-2 px-1 ${
                activeTab === "Gallery"
                  ? "font-semibold border-b-2 border-[#222E62] -mb-[9px]"
                  : "font-medium text-[#222E62]"
              }`}
              onClick={() => setActiveTab("Gallery")}
            >
              Media
            </div>
            <div
              className={`tab-item cursor-pointer pb-2 px-1 ${
                activeTab === "Members"
                  ? "font-semibold border-b-2 border-[#222E62] -mb-[9px]"
                  : "font-medium text-[#222E62]"
              }`}
              onClick={() => setActiveTab("Members")}
            >
              Members
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content bg-[#EAEAEA]/50 p-1 sm:p-4">
            {activeTab === "About" && (
              <div className="about-content flex flex-col gap-4">
                <div className="flex flex-row gap-4 items-center bg-white p-4 rounded-[25px] shadow-xs">
                  {!checkIsMobile() &&
                    (displayData?.coverImage || displayData?.cover_image ? (
                      <img
                        src={
                          displayData?.coverImage || displayData?.cover_image
                        }
                        alt="Community Cover"
                        className="w-1/2 h-48 object-contain rounded-[25px] bg-slate-100"
                      />
                    ) : (
                      <div className="w-1/2 h-48 bg-gray-200 dark:bg-gray-700 rounded-t-[25px] flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">
                          No Cover Image
                        </span>
                      </div>
                    ))}
                  {/* Community Header */}
                  <div className="mb-6 w-full md:w-1/2">
                    <div className="flex-1">
                      <div className="flex flex-col items-center gap-3 mb-2">
                        <h1 className="!text-xl font-bold text-gray-900 dark:text-gray-100">
                          {displayData?.communityName ||
                            displayData?.name ||
                            "Health & Wellness Community, RaphaCure"}
                        </h1>
                        <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-sm font-medium rounded-full">
                          {currentCommunity?.status ?? "N/A"}
                        </span>
                      </div>

                      {/* Member count */}
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                        <span className="font-medium">
                          {(() => {
                            const adminCount = (
                              displayData?.adminUsers ||
                              displayData?.admin_users ||
                              []
                            ).length;
                            const allMembersSelected =
                              displayData?.allMembersSelected ||
                              currentCommunity?.all_associated_users ||
                              displayData?.all_associated_users ||
                              false;

                            const memberCount = allMembersSelected
                              ? currentCommunity?.total_users || "All"
                              : currentCommunity?.all_users ||
                                displayData?.postPermission === "everyone"
                                ? currentCommunity?.total_users || 0
                                : (
                                    displayData?.associatedUsers ||
                                    displayData?.associated_users ||
                                    []
                                  ).length || 0;

                            return `${
                              allMembersSelected ? "All" : memberCount
                            } Members, ${adminCount} Admins`;
                          })()}
                        </span>
                      </div>

                      {/* Categories as Tags */}
                      <div className="flex gap-2 mb-4">
                        {currentCommunity?.categories &&
                        currentCommunity.categories.length > 0 ? (
                          currentCommunity.categories.map(
                            (category: any, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                              >
                                {typeof category === "object"
                                  ? category.name
                                  : category}
                              </span>
                            )
                          )
                        ) : (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                            Community
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Description Section */}
                    <div className="mb-6">
                      <h3 className="!text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                        Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {displayData?.description ||
                          "A Space For Health-Conscious Individuals To Share Tips, Experiences, And Advice On Healthy Living."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overview Section */}
                <div className="!my-6 bg-white p-4 rounded-[25px] shadow-xs">
                  <h3 className="!text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Members Card */}
                    <div className="bg-white border !border-[#DAEAFF] rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-28 h-28 bg-[#E7C2D4] rounded-lg flex items-center justify-center">
                          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/129322-1751310187452.png" />
                        </div>
                        <div>
                          <p className="text-2xl text-gray-600 dark:text-gray-400">
                            Members
                          </p>
                          <p className="!text-[3rem] !mb-0 font-bold text-gray-900 dark:text-gray-100">
                            {(() => {
                              const allMembersSelected =
                                displayData?.allMembersSelected ||
                                currentCommunity?.all_associated_users ||
                                displayData?.all_associated_users ||
                                false;

                              if (allMembersSelected) {
                                return currentCommunity?.total_users || "All";
                              }

                              return (
                                displayData?.all_users
                                  ? displayData?.total_users
                                  : displayData?.associatedUsers?.length
                              ) ?? "N/A";
                            })()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Admins Card */}
                    <div className="bg-white border !border-[#DAEAFF] rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-28 h-28 bg-[#99BCE2] rounded-lg flex items-center justify-center">
                          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/129322-1751310327393.png" />
                        </div>
                        <div>
                          <p className="text-2xl text-gray-600 dark:text-gray-400">
                            Admins
                          </p>
                          <p className="!text-[3rem] !mb-0 font-bold text-gray-900 dark:text-gray-100">
                            {(
                              displayData?.adminUsers ||
                              displayData?.admin_users ||
                              []
                            ).length || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Posts Card */}
                    {/* <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Posts</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            658
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* Comments Card */}
                    {/* <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-800 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Comments</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            1049
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Rules Section */}
                {currentCommunity?.rules &&
                  currentCommunity.rules.length > 0 && (
                    <div className="!my-6 bg-white p-4 rounded-[25px] shadow-xs">
                      <h3 className="!text-lg font-semibold mb-4 text-gray-900">
                        Rules For the Group
                      </h3>
                      <ul className="p-0 flex flex-col gap-3">
                        {currentCommunity.rules.map((rule: any) => (
                          <li
                            key={rule.id}
                            className="bg-gray-50 p-4 rounded-lg"
                          >
                            <div className="font-medium text-gray-900">
                              {rule.name}
                            </div>
                            <div className="text-gray-600 mt-1">
                              {rule.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}

            {activeTab === "Discussion" && <CommunityDiscussion />}

            {activeTab === "Gallery" && (
              <div className="gallery-content">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {(displayData?.bannerImages || displayData?.banner_images)?.map(
                    (image: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square bg-white p-3 shadow-xs rounded-[25px] overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  )}
                  {(!displayData?.bannerImages && !displayData?.banner_images) ||
                   ((displayData?.bannerImages || displayData?.banner_images || []).length === 0) && (
                    <div className="col-span-full text-center text-gray-500">
                      No images available in the gallery
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Members" && (
              <div className="members-content">
                <ManageMembers
                  admins={displayData?.adminUsers ?? displayData?.admin_users}
                  clientId={clientId}
                  communityId={communityDetails?.id || displayData?.id || currentCommunity?.id || formData?.id}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCommunity;
