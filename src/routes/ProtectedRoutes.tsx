import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const ProtectedBeforeLogin = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user?.id) {
    return <Navigate to="/signin" />; // Redirect to the login page if not authenticated
  } else {
    return <Outlet />;
  }
};

export const ProtectedAfterLogin = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (user?.id) {
    return <Navigate to="/" />; // Redirect to the login page if not authenticated
  } else {
    return <Outlet />;
  }
}
