import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const useVendorLinkableId = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const clientRole = user?.roles?.find((roleObj: any) => {
    return (
      roleObj?.linkable_type === "vendor" && roleObj?.role === "vendor"
    );
  });

  const linkableId = clientRole?.linkable_id || undefined;

  return { linkableId, };
};

export default useVendorLinkableId;
