import { createBrowserRouter, RouterProvider } from "react-router";
import { ProtectedAfterLogin, ProtectedBeforeLogin } from "./ProtectedRoutes";
import SuspenceBoundary from "./SuspenceBoundary";
import MainLayout from "@/layout/MainLayout";
import { lazy } from "react";

const App = lazy(() => import("@/App"));
const SignInPage = lazy(() => import("@/pages/Signin/SignInPage"));
const Booking = lazy(() => import("@/pages/Bookings/Booking"));
const RouteNotFound = lazy(
  () => import("@/components/Errors/RouteNotFound/RouteNotFound")
);
const HealthcareVendorSystem = lazy(
  () => import("@/pages/Dashboard/Dashboard")
);
const CalendarPage = lazy(() => import("@/pages/Calender/Calendar"));
const Leads = lazy(() => import("@/pages/Leads/Leads"));
const ManageRfq = lazy(() => import("@/pages/ManageRfq/ManageRfq"));
const ManageTickets = lazy(() => import("@/pages/ManageTickets/ManageTickets"));
const DashboardProfile = lazy(
  () => import("@/pages/Dashboard/DashboardProfile")
);

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
