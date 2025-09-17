import React, { useState, useEffect } from "react";
import { AllCommunitiesStyled } from "./AllCommunities.styled";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommunitiesAPI } from "@/redux/slices/community/communityService";
import useClientDetails from "@/hooks/auth/useClientDetails";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import CustomPagination from "@/components/custom/Table/CustomTable/Pagination/CustomPagination";

export interface Community {
  id: string;
  name: string;
  description: string;
  banner_images: string[];
  cover_image: string;
  all_users: boolean;
  client_id: string;
  status: "active" | "inactive";
  created_at: string;
  admin_users: Array<{
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  }>;
  associated_users: Array<{
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  }>;
  categories: string[];
  rules: string[];
  total_users: string | number;
}

export const CommunityCard = ({ data }: { data: Community }) => {
  const navigate = useNavigate();
  
  // Calculate member count
  const memberCount = data.all_users 
    ? data.total_users 
    : (data.admin_users?.length || 0) + (data.associated_users?.length || 0);

  return (
    <Card className="p-0 overflow-hidden gap-2 h-full rounded-t-[29px] !justify-between" onClick={() => window.location.href = `/communities/view/${data?.id}`}>
      {/* Image/Background Area */}
      <img
        src={data.cover_image || data.banner_images?.[0] || ""}
        alt={`${data.name} background`}
        className="!m-[5px] object-fill h-[230px] rounded-t-[25px] bg-gray-200 dark:bg-gray-700"
      />

      {/* Content Area */}
      <CardContent className="p-3 gap-3 flex flex-col h-full justify-evenly">
        {/* Title and Status */}
        <div className="flex justify-between items-start">
          <div className="gap-1">
            <h3 className="font-semibold text-foreground leading-tight !text-base">
              {data.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-0">
              {data.description}
            </p>
          </div>
          <Badge
            variant="secondary"
            className={`px-2 py-1 rounded-[25px] cursor-pointer ${
              data.status === "active"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800"
            }`}
          >
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </Badge>
        </div>

        {/* Member Count */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>
            {data.all_users 
              ? `${memberCount}` 
              : `${memberCount}+ Members`
            }
          </span>
        </div>

        {/* Categories as Tags */}
        <div className="flex gap-2 flex-wrap">
          {data.categories && data.categories.length > 0 ? (
            data.categories.map((category:any, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs px-2 py-1 text-gray-500 rounded-[25px]"
              >
                {typeof category === 'object' ? category?.name : category}
              </Badge>
            ))
          ) : (
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 text-gray-500 rounded-[25px]"
            >
              Community
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const AllCommunities = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const navigate = useNavigate();
  const dispatch:any = useDispatch();
  const { allCommunities } = useSelector((state: any) => state.community);
  const { clientDetails } = useClientDetails();
  const { linkableId } = useClientLinkableId();

  useEffect(() => {
    console.log("communities : ", communities);
  }, [communities])

  useEffect(() => {
    dispatch(getAllCommunitiesAPI({ client_id: linkableId, page: currentPage, count: itemsPerPage,status:"active" }));
  }, [dispatch, currentPage, itemsPerPage,linkableId]);

  const handlePageChange = (page: number,pageSize:number) => {
    setCurrentPage(page);
    setItemsPerPage(pageSize);
  };
  
  useEffect(() => {
    if (allCommunities?.communities) {
      const activeCommunities = allCommunities?.communities.filter(
        (community:any) => community.status === "active"
      );
      setCommunities(activeCommunities);
      setIsLoading(false);
    }
  }, [allCommunities]);

  return (
    <AllCommunitiesStyled>
      <h2 className="text-lg p-2">Communities</h2>
      <div className="flex flex-row justify-between items-center p-2 m-1">
        <h2 className="!text-[1.5rem]">{clientDetails?.name ?? "Client"} Communities</h2>
        <button className="text-base bg-[#252B61] text-white px-2 py-1 md:px-4 md:py-3 !rounded-[32px] cursor-pointer" onClick={()=>navigate("/communities/create")}>
          Create Community
        </button>
      </div>
      <div className="w-full">
        <div className="m-3 grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            communities.map((community) => (
              <CommunityCard data={community} key={community.id} />
            ))
          )}
        </div>
      </div>
      <CustomPagination
        page={currentPage}
        onPageChange={handlePageChange}
        total={allCommunities?.pagination?.total ?? 0}
        pageSize={itemsPerPage}
      />
    </AllCommunitiesStyled>
  );
};

export default AllCommunities;
