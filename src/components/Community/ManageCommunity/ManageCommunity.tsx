import React, { useEffect, useState } from "react";
import { ManageCommunityStyled } from "./ManageCommunity.styled";
import ModifyCommunity from "./ModifyCommunity";
import ViewCommunity from "./ViewCommunity";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getCommunityDetailsByIdAPI } from "@/redux/slices/community/communityService";
import { clearCurrentCommunity } from "@/redux/slices/community/communitySlice";
import toast from "react-hot-toast";

const ManageCommunity = ({ type }: { type: "new" | "existing" }) => {
  const { communityId } = useParams();
  const dispatch:any = useDispatch();
  const [communityDetails, setCommunityDetails] = useState<any>(null);
  const [isEdit,setIsEdit] = useState(false)

  useEffect(() => {
    console.log("type, communityId", type, communityId);
    if(type === "existing" && communityId){
      getSelectedCommunityDetails();
    } else if(type === "new") {
      // Clear Redux state for new communities to prevent old data from showing
      dispatch(clearCurrentCommunity());
      setCommunityDetails(null);
    }
  }, [type, communityId]);

  const getSelectedCommunityDetails = async ()=>{
    const res = await dispatch(getCommunityDetailsByIdAPI(communityId));
    console.log("getSelectedCommunityDetails res", res?.payload?.data?.community);
    if(res?.error){
      toast.error(res.error?.message || "Unknown Error Occured") ;
      return;
    }
    setCommunityDetails(res?.payload?.data?.community);
  }

  return (
    <ManageCommunityStyled>
      <div className={`grid gap-4 ${(type === "new" || isEdit) ? 'grid-cols-[1fr] sm:grid-cols-[1fr_2fr]' : 'grid-cols-[1fr]'}`}>
        {
          (type === "new" || isEdit) && (
            <ModifyCommunity type={type} communityDetails={communityDetails} />
          )
        }
        <ViewCommunity setIsEdit={setIsEdit} type={type} communityDetails={communityDetails} />
      </div>
    </ManageCommunityStyled>
  );
};

export default ManageCommunity;
