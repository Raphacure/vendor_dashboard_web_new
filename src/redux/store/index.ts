import { configureStore } from "@reduxjs/toolkit";

// reducers
import appReducer from "../slices/app/appSlice";
import authReducer from "../slices/auth/authSlice";
import configReducer from "../slices/config/configSlice";
import labtestReducer from "../slices/labtest/labtestSlice";
import doctorReducer from "../slices/doctor/doctorSlice";
import bookingReviewReducer from "../slices/bookingScreen/bookingScreenSlice";
import dashboardReducer from "../slices/dashboard/dashboardSlice";
import ctmriReducer from "../slices/ctmri/ctmriSlice";
import genericReducer from "../slices/generic/genericSlice";
import timeslotReducer from "../slices/timeslot/timeslotSlice";
import myPatientsReducer from "../slices/myPatients/myPatientsSlice";
import patientsReducer from "../slices/PatientDoctor/PatientSlice";
import attendanceReducer from "../slices/attendance/attendanceSlice";
import vendorReducer from "../slices/vendor/vendorSlice";
import assetsReducer from "../slices/assets/assetsSlice";
import promotionalReducer from "../slices/promotionalData/promotionalDataSlice";
import promotionalLogsReducer from "../slices/promotionalLogs/promotionalLogsSlice";
import medicinesReducer from "../slices/medicines/medicinesSlice";
import categoryReducer from "../slices/medicines/categorySlice";
import SubcategoryReducer from "../slices/medicines/subCategorySlice";
import packageReducer from "../slices/packages/packageSlice";
import communicationsReducer from "../slices/CommunicationMap/CommunictionSlice";
import ticketReducer from "../slices/tickets/ticketSlice";
import userManagementReducer from "../slices/UserManagement/UserManagementSlice";
import ClientsReducer from "../slices/Clients/ClientsSlice";
import RfqReducer from "../slices/rfq/rfqSlice";
import ReportsReducer from "../slices/reports/reportsSlice";
import communityReducer from "../slices/community/communitySlice";
import orderReducer from "../slices/orders/orderSlice"
import clientPackagesReducer from "../slices/clientPackages/clientPackagesSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    config: configReducer,
    medicines: medicinesReducer,
    category: categoryReducer,
    subCategory: SubcategoryReducer,
    labtest: labtestReducer,
    attendance: attendanceReducer,
    doctor: doctorReducer,
    bookingReview: bookingReviewReducer,
    dashboard: dashboardReducer,
    ctmri: ctmriReducer,
    generic: genericReducer,
    timeslot: timeslotReducer,
    myPatients: myPatientsReducer,
    patients: patientsReducer,
    package: packageReducer,
    vendor: vendorReducer,
    assets: assetsReducer,
    promotions: promotionalReducer,
    promotionsLogs: promotionalLogsReducer,
    communications: communicationsReducer,
    ticket: ticketReducer,
    userManagement: userManagementReducer,
    clients: ClientsReducer,
    rfq: RfqReducer,
    reports: ReportsReducer,
    community: communityReducer,
    order: orderReducer,
    clientPackages: clientPackagesReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
