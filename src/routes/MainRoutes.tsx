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
            children: [{ path: "/signin", element: <SignInPage /> }],
          },
          {
            element: <ProtectedBeforeLogin />,
            children: [
              { path: "/", element: <App /> },
              {
                path: "/dashboard",
                element: <HealthcareVendorSystem />,
                handle: {
                  layout: "x",
                },
              },
              {
                path: "/bookings/:status?",
                element: <Booking />,
              },

              {
                path:"/leads",
                element:<Leads/>
              },

              {
                path:"/tickets",
                element:<ManageTickets/>
              },

              {
                path:"/rfq",
                element:<ManageRfq/>
              },

              { path: "/calendar", element: <CalendarPage /> },

              
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
