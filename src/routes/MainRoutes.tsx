import App from "@/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignInPage from "@/pages/Signin/SignInPage";
import { ProtectedAfterLogin, ProtectedBeforeLogin } from "./ProtectedRoutes";
import SuspenceBoundary from "./SuspenceBoundary";
import MainLayout from "@/layout/MainLayout";
import Booking from "@/pages/Bookings/Booking";
import RouteNotFound from "@/components/Errors/RouteNotFound/RouteNotFound";
import HealthcareVendorSystem from "@/pages/Dashboard/Dashboard";
import CalendarPage from "@/pages/Calender/Calendar";
import Leads from "@/pages/Leads/Leads";
import ManageRfq from "@/pages/ManageRfq/ManageRfq";
import ManageTickets from "@/pages/ManageTickets/ManageTickets";
import DashboardProfile from "@/pages/Dashboard/DashboardProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <SuspenceBoundary />,
        children: [
          {
            element: <ProtectedAfterLogin />,
            children: [
              {
                path: "/signin",
                element: <SignInPage />,
                id: "signin",
              },
            ],
          },
          {
            element: <ProtectedBeforeLogin />,
            children: [
              { path: "/", element: <App /> },
              {
                path: "/dashboard",
                element: <HealthcareVendorSystem />,
                id: "dashboard",
              },
              {
                path: "/dashboard/profile",
                element: <DashboardProfile />,
                id: "dashboardProfile",
              },
              {
                path: "/bookings/:status?",
                element: <Booking />,
                id: "bookings",
              },

              {
                path: "/leads",
                element: <Leads />,
                id: "leads",
              },

              {
                path: "/tickets",
                element: <ManageTickets />,
                id: "tickets",
              },

              {
                path: "/rfq",
                element: <ManageRfq />,
                id: "rfq",
              },

              { path: "/calendar", element: <CalendarPage />, id: "calendar" },

              { path: "*", element: <RouteNotFound /> },
            ],
          },
        ],
      },
    ],
  },
]);

const MainWrapper = () => {
  return <RouterProvider router={router} />;
};

export default MainWrapper;
