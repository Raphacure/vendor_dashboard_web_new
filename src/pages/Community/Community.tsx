import React, { useEffect, useState } from "react";
import { CommunityStyled } from "./Community.styled";
import {
  CommunityCard,
  type Community,
} from "@/components/Community/AllCommunities/AllCommunities";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommunitiesAPI } from "@/redux/slices/community/communityService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const Community = () => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { allCommunities } = useSelector((state: any) => state.community);
  const { linkableId } = useClientLinkableId();

  useEffect(() => {
    dispatch(getAllCommunitiesAPI({ client_id: linkableId }));
  }, [dispatch]);

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
    <CommunityStyled>
      <div className="border shadow rounded-[29px] w-full">
        <div className="flex flex-row justify-between items-center p-2 bg-[#DFECFD] rounded-t-[25px] m-1">
          <h2 className="text-lg">Communities</h2>
          <button
            className="text-base bg-[#252B61] text-white px-3 py-1 !rounded-[25px] cursor-pointer"
            onClick={() => navigate("/communities/create")}
          >
            Create New
          </button>
        </div>
        <div className="w-full flex flex-row items-center justify-between !p-4">
          <h2 className="!text-lg">Our Communities</h2>
          <span
            className="text-base cursor-pointer"
            onClick={() => navigate("/communities")}
          >
            View All
          </span>
        </div>
        <div className="m-3 grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pb-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            communities
              .slice(0, 3)
              .map((community) => (
                <CommunityCard data={community} key={community.id} />
              ))
          )}
        </div>
      </div>
    </CommunityStyled>
  );
};

export default Community;
