import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const ProtectedComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user?.id) {
    return null;
  } else {
    return <>{children}</>;
  }
};


export const useIsProtected = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    return user?.id ? true : false;
}
