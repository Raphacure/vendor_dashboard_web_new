import App from "@/App";
import { lazy } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import RaphaplusLayout from "@/layout/MainLayout";
import SignInPage from "@/pages/Signin/SignInPage"; // Updated import path
const QuickLinks = lazy(() => import("@/pages/dashboard/DashboardPage"));
const ToxicSubstancePage = lazy(
  () => import("@/pages/ToxicSubstance/ToxicSubstancePage")
);
const TestBookingPage = lazy(
  () => import("@/pages/ToxicSubstance/TestBookingPage/TestBookingPage")
);
const PreEmploymentPage = lazy(
  () => import("@/pages/PreEmployment/PreEmploymentPage")
);
const OnSiteCampPage = lazy(() => import("@/pages/OnsiteCamp/OnSiteCampPage"));
const CampDetailsPage = lazy(
  () => import("@/pages/OnsiteCamp/CampDetailsPage/CampDetailsPage")
);
const RequestNewCampPage = lazy(
  () => import("@/pages/OnsiteCamp/RequestNewCampPage/RequestNewCampPage")
);
const TestBookingFormPage = lazy(
  () => import("@/pages/ToxicSubstance/TestBookingFormPage/TestBookingFormPage")
);
const PreEmploymentBookingFormPage = lazy(
  () =>
    import(
      "@/pages/PreEmployment/PreEmploymentBookingFormPage/PreEmploymentBookingFormPage"
    )
);
// const WellnessDetailsPage = lazy(() => import("@/pages/WellnessSession/WellnessSessionDetailsPage/WellnessSessionDetailsPage"));
// const WellnessSessionPage = lazy(() => import("@/pages/WellnessSession/WellnessSessionPage"));
import { ProtectedAfterLogin, ProtectedBeforeLogin } from "./ProtectedRoutes";
const PreEmploymentAddEmployeePage = lazy(
  () => import("@/pages/PreEmployment/Employee/AddNewEmployee/AddEmployee")
);
const ToxicSubstancesAddEmployeePage = lazy(
  () => import("@/pages/ToxicSubstance/Employee/AddNewEmployee/AddEmployee")
);
const ToxicSubstancesAddBulkEmployee = lazy(
  () =>
    import("@/pages/ToxicSubstance/Employee/AddBulkEmployee/AddBulkEmployee")
);
const PreEmploymentAddBulkEmployee = lazy(
  () => import("@/pages/PreEmployment/Employee/AddBulkEmployee/AddBulkEmployee")
);
const DataAnalytics = lazy(() => import("../pages/dashboardV2/DashboardV2"));
const Booking = lazy(() => import("@/pages/doctorBookings/Booking"));
const MyPatient = lazy(() => import("@/pages/DoctorPatient/MyPatient"));
const MyPatientDetail = lazy(
  () => import("@/pages/DoctorPatient/MyPatientDetail")
);
const CalendarPage = lazy(() => import("@/pages/Calender/Calendar"));
const Chat = lazy(() => import("@/pages/Chat/Chat"));
import ChatContextProvider from "@/pages/Chat/context/ChatConext";
import { SocketProvider } from "@/pages/Chat/context/SocketProvider";
import SuspenceBoundary from "./SuspenceBoundary";
const Packages = lazy(() => import("@/pages/Packages/Packages"));

const ManageTickets = lazy(() => import("@/pages/ManageTickets/ManageTickets"));
const ManageUsers = lazy(() => import("@/pages/ClinicUsers/ClinicUsers"));
const MyClients = lazy(() => import("@/pages/ManageClients/ManageClients"));
const MainDashboard = lazy(() => import("@/pages/DoctorDashboard/Dashboard"));
const ServiceConformModule = lazy(
  () => import("@/pages/ManageRfq/ServiceConformModule")
);
const ManageRfq = lazy(() => import("@/pages/ManageRfq/ManageRfq"));
const CreateRFQ = lazy(() => import("@/pages/ManageRfq/CreateRFQ"));
const ClientDetails = lazy(
  () => import("@/pages/ManageClients/ClientUpdate/ClientDetails")
);
const AddClinicUser = lazy(
  () => import("@/pages/ClinicUsers/AddClinicUser/AddClinicUser")
);
const AllCommunities = lazy(
  () => import("@/components/Community/AllCommunities/AllCommunities")
);
const ManageCommunity = lazy(
  () => import("@/components/Community/ManageCommunity/ManageCommunity")
);
const Orders = lazy(() => import("@/pages/Order/Orders"));
const AddBulkEmployee = lazy(
  () => import("@/components/Employee/AddBulkEmployee/AddBulkEmployee")
);
const MainDashboardMobile = lazy(
  () => import("@/pages/DoctorDashboard/DashboardProfile")
);

const MainWrapper = () => {
  return (
    <BrowserRouter>
      <RaphaplusLayout>
        <Routes>
          <Route element={<SuspenceBoundary />}>
            <Route element={<ProtectedAfterLogin />}>
              <Route path="/signin" element={<SignInPage />} />
            </Route>

            <Route element={<ProtectedBeforeLogin />}>
              <Route path="/" element={<App />} />

              <Route path="/dashboard" element={<MainDashboard />} />
              <Route
                path="/dashboard/profile"
                element={<MainDashboardMobile />}
              />

              <Route path="/quick-links" element={<QuickLinks />} />
              <Route path="/data-analytics/:tab?" element={<DataAnalytics />} />
              {/* <Route path="dashboardv1" element={<Dashboards />} /> */}
              <Route path="/orders" element={<Orders />} />

              <Route path="/bookings" element={<Booking />} />
              <Route path="/bookings/:section" element={<Booking />} />
              <Route path="/tickets" element={<ManageTickets />} />
              {/* <Route path="/communication-map" element={<CommunicationMap />} /> */}
              <Route path="/manageUsers" element={<ManageUsers />} />
              <Route path="/manageUsers/:type" element={<AddClinicUser />} />
              <Route path="/MyClients">
                <Route index element={<MyClients />} />
                <Route path="update/:id" element={<ClientDetails />} />
              </Route>

              {/* <Route path="/bookings">
                <Route index element={<Booking />} />
              </Route> */}

              <Route path="/employees">
                <Route index element={<MyPatient />} />
                <Route path="addEmployee/bulk" element={<AddBulkEmployee />} />
                <Route path="detail/:id" element={<MyPatientDetail />} />
              </Route>

              <Route path="/packages" element={<Packages/>} />

              <Route path="/calendar" element={<CalendarPage />} />

              {/* <Route path="/promotional-data" element={<PromotionalData />} /> */}

              {/* <Route path="/RFQ" element={<RFQ />} />
              <Route path="/rfq/rfqrequest" element={<RFQRequest />} />
              <Route path="/rfq/rfqrequest/rfqrequestconform" element={<ServiceConformModule />} />
              <Route path="/rfq/rfqexistinglist" element={<RFQExistingList />} /> */}

              <Route path="/rfq" element={<ManageRfq />} />
              <Route path="/rfq/rfqcreate" element={<CreateRFQ />} />
              <Route
                path="/rfq/rfqcreated"
                element={<ServiceConformModule />}
              />

              <Route
                path="/chat"
                element={
                  <SocketProvider>
                    <ChatContextProvider>
                      <Chat />
                    </ChatContextProvider>
                  </SocketProvider>
                }
              />

              <Route path="toxic-substance">
                <Route index element={<ToxicSubstancePage />} />
                <Route path=":testId" element={<TestBookingPage />} />
                <Route path=":testId/book" element={<TestBookingFormPage />} />
                <Route
                  path="employee/add-employee"
                  element={<ToxicSubstancesAddEmployeePage />}
                />
                <Route
                  path="employee/add-bulk-employee"
                  element={<ToxicSubstancesAddBulkEmployee />}
                />
              </Route>

              <Route path="/package/:type">
                <Route index element={<PreEmploymentPage />} />
                <Route path="book" element={<PreEmploymentBookingFormPage />} />
                <Route
                  path="employee/add-employee"
                  element={<PreEmploymentAddEmployeePage />}
                />
                <Route
                  path="employee/add-bulk-employee"
                  element={<PreEmploymentAddBulkEmployee />}
                />
              </Route>

              <Route path="onsite-camp">
                <Route index element={<OnSiteCampPage />} />
                <Route path="details/:campId" element={<CampDetailsPage />} />
                <Route
                  path="request-new-camp"
                  element={<RequestNewCampPage />}
                />
              </Route>

              <Route path="communities">
                <Route index element={<AllCommunities />} />
                <Route path="create" element={<ManageCommunity type="new" />} />
                <Route
                  path="view/:communityId"
                  element={<ManageCommunity type="existing" />}
                />
              </Route>

              {/* <Route path="wellness-session">
                <Route index element={<WellnessSessionPage />} />
                <Route
                  path="details/:campId"
                  element={<WellnessDetailsPage />}
                />
                <Route
                  path="request-new-session"
                  element={<RequestNewCampPage />}
                />
              </Route> */}
            </Route>
          </Route>
        </Routes>
      </RaphaplusLayout>
    </BrowserRouter>
  );
};

export default MainWrapper;
