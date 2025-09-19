import App from "@/App";
import { BrowserRouter, Route, Routes } from "react-router";
import SignInPage from "@/pages/Signin/SignInPage";
import { ProtectedAfterLogin, ProtectedBeforeLogin } from "./ProtectedRoutes";
import SuspenceBoundary from "./SuspenceBoundary";
import MainLayout from "@/layout/MainLayout";
import Booking from "@/pages/Bookings/Booking";
import RouteNotFound from "@/components/Errors/RouteNotFound/RouteNotFound";
import HealthcareVendorSystem from "@/pages/Dashboard/Dashboard";

const MainWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<SuspenceBoundary />}>
            <Route element={<ProtectedAfterLogin />}>
              <Route path="/signin" element={<SignInPage />} />
            </Route>

            <Route element={<ProtectedBeforeLogin />}>
              <Route path="/" element={<App />} />
              <Route path="/dashboard" element={<HealthcareVendorSystem />} />

              <Route path="/bookings/:status?" element={<Booking />} />
              <Route path="*" element={<RouteNotFound/>} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainWrapper;
