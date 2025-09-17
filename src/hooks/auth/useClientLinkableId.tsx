import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const useClientLinkableId = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const clientRole = user?.roles?.find((roleObj: any) => {
    return (
      roleObj?.linkable_type === "client" && roleObj?.role === "client_employee"
    );
  });

  const linkableId = clientRole?.linkable_id;

  return { linkableId, };
};

export default useClientLinkableId;
