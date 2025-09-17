import { updateClientDetails } from "@/redux/slices/auth/authSlice";
import { getClientDetailsNewAPI } from "@/redux/slices/Clients/ClientsService";
import { RootState } from "@/redux/store";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import useClientLinkableId from "./useClientLinkableId";

const useClientDetails = () => {
  const dispatch = useDispatch();
  const { linkableId } = useClientLinkableId();
  const clientDetails = useSelector(
    (store: RootState) => store.auth.clientDetails
  );
  const [loading, setLoading] = useState(false);

  const reload = useCallback(async () => {
    if (linkableId) {
      setLoading(true);
      try {
        const res = (await dispatch(getClientDetailsNewAPI(linkableId))) as any;
        if (res.error) {
          toast.error(res.error.message ?? "unknown error occured");
          return;
        }
        dispatch(updateClientDetails(res?.payload?.data?.data));
      } catch (error) {
        console.error("Error fetching client details:", error);
        toast.error("An error occurred while fetching client details.");
      } finally {
        setLoading(false);
      }
    }
  }, [dispatch, linkableId]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { clientDetails, loading, reload,linkableId };
};

export default useClientDetails;
