import { useCallback, useEffect } from "react";
import useVendorLinkableId from "./useVendorLinkableId";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import toast from "react-hot-toast";
import { getVendorDetailsAPI } from "@/redux/slices/auth/authService";

const useVendorDetails = ({
  refetchOnMount,
}: {
  refetchOnMount?: boolean;
}={refetchOnMount:true}) => {
  const dispatch: AppDispatch = useDispatch();
  const { linkableId } = useVendorLinkableId();
  const { data, error, loading } = useSelector(
    (store: RootState) => store.auth.vendorDetails
  );

  const fetchVendorDetails = useCallback(() => {
    if (linkableId) {
      dispatch(getVendorDetailsAPI({ id: linkableId }));
    }
  }, [dispatch, linkableId]);

  useEffect(() => {
    if (refetchOnMount) {
      fetchVendorDetails();
    }
  }, [fetchVendorDetails, refetchOnMount]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return {
    vendorDetails: data,
    loading,
    error,
    reload: fetchVendorDetails,
    linkableId,
  };
};

export default useVendorDetails;
