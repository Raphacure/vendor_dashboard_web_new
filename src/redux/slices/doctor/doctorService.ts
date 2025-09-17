import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put, del } from "@/lib/helpers";
import {
  constructDoctorsListQuery,
  constructDoctorHospitalListQuery,
  constructHospitalListQuery,
  getDoctorByClinic,
} from "@/graphql/graphqlConfig";

export const getDoctorsListAPI = createAsyncThunk(
  "doctor/getDoctorsListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructDoctorsListQuery(obj))
);

export const getDoctorsUsersAPI = createAsyncThunk(
  "doctor/getDoctorsListAPI",
  async (id: number) =>
    await get(`${SERVER_IP}/api/v1/doctor/${id}/user-details`)
);

export const getDoctorHospitalListAPI = createAsyncThunk(
  "doctor/getDoctorHospitalListAPI",
  async (id: string) =>
    await post(`${SERVER_IP}/graphql`, constructDoctorHospitalListQuery(id))
);

export const getHospitalListAPI = createAsyncThunk(
  "doctor/getHospitalListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructHospitalListQuery(obj))
);

export const doctorRegistration = createAsyncThunk(
  "doctor/doctorRegistration",
  async (docBody: any) => {
    const url = `${SERVER_IP}/api/v1/doctor/register-doctor${
      docBody?.parentId ? `?child_doctor_id=${docBody.parentId}` : ""
    }`;

    return await post(url, docBody?.body);
  }
);

export const getDoctorProfileDetails = createAsyncThunk(
  "doctor/getDoctorProfileDetails",
  async (id: string) => await get(`${SERVER_IP}/api/v1/doctor/${id}/details`)
);

export const doctorMedRegistration = createAsyncThunk(
  "doctor/doctorMedRegistration",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/medicalregistration`,
      body.medObj
    )
);

export const doctorQualification = createAsyncThunk(
  "doctor/doctorQualification",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/doctor-qualification`,
      body.qualificationObj
    )
);

export const doctorEstablishmentDetails = createAsyncThunk(
  "doctor/doctorEstablishmentDetails",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/establishment-details`,
      body.establishmentObj
    )
);

export const doctorUserAddress = createAsyncThunk(
  "doctor/doctorUserAddress",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/user-address`,
      body.userAddrObj
    )
);

export const getDoctorInfoAPI = createAsyncThunk(
  "doctor/getDoctorInfoAPI",
  async (phone: any) =>
    await get(`${SERVER_IP}/api/v1/doctor/doctor/by-phone/${phone}`)
);

export const doctorBankDetails = createAsyncThunk(
  "doctor/doctorBankDetails",
  async (bankObj: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/addbank`, bankObj)
);

export const getDoctorSpecializationAPI = createAsyncThunk(
  "doctor/getDoctorSpecializationAPI",
  async () => await get(`${SERVER_IP}/api/v1/config/doctorspecializations`)
);

export const getAllClinicsDoctorAPI = createAsyncThunk(
  "auth/getAllDoctorAPI",
  async ({ id, filters }: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?${id ? `vendorId=${id}` : ""}`,
      { filters: filters }
    );
  }
);

export const getUserSubRolesAPI = createAsyncThunk(
  "user/getUserSubRoles",
  async () => await get(`${SERVER_IP}/api/v1/filter/subRoles`)
);

export const addNewAdmin = createAsyncThunk(
  "user/addNewAdmin",
  async (body: any) => await post(`${SERVER_IP}/api/v1/user/create`, body)
);

export const getDoctorDetailsAPI = createAsyncThunk(
  "doctor/getDoctorDetails",
  async ({ id, filters }: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?${id ? `doctorId=${id}` : ""}`,
      { filters: filters }
    );
  }
);

export const getDoctorOrdersAPI = createAsyncThunk(
  "doctor/getDoctorOrdersAPI",
  async () => await get(`${SERVER_IP}/api/v1/doctor/orders`)
);

export const getDoctorTimeSlotsAPI = createAsyncThunk(
  "doctor/getDoctorTimeSlotsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/doctor/doctor-timeslots?doctor_id=${body?.id}&type=${body?.type}`,
      {
        dates: [body?.date],
      }
    )
);

export const createDoctorBookingAPI = createAsyncThunk(
  "doctor/createDoctorBookingAPI",
  async (booking: any) =>
    await post(
      `${SERVER_IP}/api/v1/cart?clearCart=true&userId=${booking?.user_id}&fromRole=client_employee
`,
      { carts: [booking] }
    )
);
export const createHrBookingAPI = createAsyncThunk(
  "doctor/createDoctorBookingAPI",
  async (booking: any) =>
    await post(
      `${SERVER_IP}/api/v1/cart?clearCart=true&userId=${booking?.user_id}&fromRole=client_employee
`,
      { carts: [booking] }
    )
);

export const getAllDoctorSpecializationAPI = createAsyncThunk(
  "doctor/getAllDoctorSpecializationAPI",
  async () =>
    await get(
      `${SERVER_IP}/api/v1/category?page=1&count=1000&section_name=doctor&marketplace_name=raphacure`
    )
);

export const createDoctorBookingConfirmAPI = createAsyncThunk(
  "doctor/createDoctorBookingAPI",
  async (booking: any) =>
    await post(
      `${SERVER_IP}/api/v1/cart/book?userId=${booking?.user_id}&fromRole=client_employee
`,
      {
        bookings: [
          {
            useWallet: false,
            attachment_ids: null,
            payment_note:booking?.payment_note,
          },
        ],
        merchant: "",
        domain_name: "https://raphacure.com",
      }
    )
);

export const getProfileDetails = createAsyncThunk(
  "doctor/getProfileDetails",
  async () => await get(`${SERVER_IP}/api/v1/doctor/me`)
);

export const getDoctorFullDetailsAPI = createAsyncThunk(
  "doctor/getdoctordetilsall",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/getAllDoctors?doctorId=${body}`, {
      filters: {},
    })
);

export const getDoctorClinicDetailsAPI = createAsyncThunk(
  "doctor/getDoctorClinicDetailsAPI",
  async (body: any) =>
    await get(`${SERVER_IP}/api/v1/doctor/doctor-vendor?doctor_id=${body?.id}&marketplace_name=raphacure`)
);

export const instantConnectAPI = createAsyncThunk(
  "doctor/instantConnectAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/dashboard/callMasking`, body)
);

export const addClinicAPI = createAsyncThunk(
  "doctor/addClinicAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/doctor/my-clinic?doctorId=${body?.doctorId}`,
      body.payload
    )
);

export const updateClinicAPI = createAsyncThunk(
  "doctor/updateClinicAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/myclinic-update`,
      body.myclinic
    )
);

export const getClinicFiltersAPI = createAsyncThunk(
  "auth/getClinicFiltersAPI",
  async (body: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getFilters?vendorId=${body?.id}`,
      { filters: body?.filters }
    );
  }
);

export const getDoctorFiltersAPI = createAsyncThunk(
  "auth/getDoctorFiltersAPI",
  async (filters: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getFilters`,
      { filters: filters }
    );
  }
);

export const updateConsultationFeeAPI = createAsyncThunk(
  "doctor/updateConsultationFeeAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/selfservicedetails`,
      body.consultationFeeObj
    )
);

export const updateProofUploadAPI = createAsyncThunk(
  "doctor/updateProofUploadAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body.id}/proof-upload`,
      body.proofObj
    )
);

export const deleteClinicAPI = createAsyncThunk(
  "doctor/deleteClinicAPI",
  async (id: string) => await del(`${SERVER_IP}/api/v1/doctor/clinic/${id}`)
);

export const getClinicByIdAPI = createAsyncThunk(
  "doctor/getClinicByIdAPI",
  async (id: string) => await get(`${SERVER_IP}/api/v1/doctor/clinic/${id}`)
);

export const getAllClinicsAPI = createAsyncThunk(
  "doctor/getAllClinicsAPI",
  async () => await get(`${SERVER_IP}/api/v1/doctor/clinics`)
);

export const getAllDoctorClinicsAPI = createAsyncThunk(
  "doc/getAllClinicsVendorsAPI",
  async ({ id, search, pincode, city, type }: any) =>
    await get(
      `${SERVER_IP}/api/v1/doctor/clinics/${id}?search=${
        search || ""
      }&pincode=${pincode || ""}&city=${city || ""}&type=${type || ""}`
    )
);

export const createTaskBoardAPI = createAsyncThunk(
  "doctor/createTaskBoardAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/board`, body)
);

export const getAllTaskBoardsAPI = createAsyncThunk(
  "doctor/getAllTaskBoardsAPI",
  async (id: string) => await get(`${SERVER_IP}/api/v1/doctor/board/${id}`)
);

export const getAllTasksAPI = createAsyncThunk(
  "doctor/getAllTasksAPI",
  async (id: string) => await get(`${SERVER_IP}/api/v1/doctor/tasks/${id}`)
);

export const createTaskAPI = createAsyncThunk(
  "doctor/createTaskAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/task`, body)
);

export const createCommentAPI = createAsyncThunk(
  "doctor/createCommentAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/comment`, body)
);

export const updateTaskAPI = createAsyncThunk(
  "doctor/updateTaskAPI",
  async (taskObj: any) =>
    await put(`${SERVER_IP}/api/v1/doctor/task/${taskObj?.id}`, taskObj?.body)
);

export const createBlogAPI = createAsyncThunk(
  "doctor/createBlogAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/blog`, body)
);

export const updateMapLocationAPI = createAsyncThunk(
  "doctor/updateMapLocationAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/doctor/${body.id}/map-location`, body.mapObj)
);

export const addBookingAPI = createAsyncThunk(
  "doctor/addBookingAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/booking`, body)
);

export const addDocToClinicAPI = createAsyncThunk(
  "doctor/addDocToClinicAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/addDoctorToClinic`, body)
);

export const doctorByClinicAPI = createAsyncThunk(
  "auth/doctorByClinicAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getDoctorByClinic(body)))
);

export const unlinkDocFromClinicAPI = createAsyncThunk(
  "auth/unlinkDocFromClinicAPI",
  async (id: any) => await post(`${SERVER_IP}/api/v1/doctor/removeDoc/${id}`)
);

export const getPrescriptionData = createAsyncThunk(
  "auth/getPrescriptionData",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/prescription/${id}?prescribedBy=doctor`)
);

export const addDocPrescriptionAPI = createAsyncThunk(
  "auth/addDocPrescriptionAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/prescription/add/`, body)
);

export const docAttendance = createAsyncThunk(
  "auth/docAttendance",
  async (id: any) => await get(`${SERVER_IP}/api/v1/doctor/attendance/${id}`)
);

export const addDocEmployeeAPI = createAsyncThunk(
  "auth/addDocEmployeeAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/employee/`, body)
);

export const getAllDocEmployees = createAsyncThunk(
  "auth/getAllDocEmployees",
  async (id: any) => await get(`${SERVER_IP}/api/v1/doctor/employee/${id}`)
);

export const addDutyRoaster = createAsyncThunk(
  "auth/addDutyRoaster",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/duty-roster/`, body)
);

export const addAttendance = createAsyncThunk(
  "auth/addAttendance",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/attendance/`, body)
);

export const updateAttendance = createAsyncThunk(
  "auth/updateAttendance",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/attendance/${body?.id}`,
      body?.payload
    )
);

export const downloadAttendance = createAsyncThunk(
  "auth/downloadAttendance",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/doctor/attendance/${body?.id}?date=${body?.date}&format=csv`
    )
);

export const addDoctorProfileDetailsAPI = createAsyncThunk(
  "auth/addDoctorProfileDetailsAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor`, body)
);

export const updateDoctorProfileDetailsAPI = createAsyncThunk(
  "auth/updateDoctorProfileDetailsAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/doctor/${body?.id}`, body?.payload)
);

export const getDoctorServiceDetailsAPI = createAsyncThunk(
  "auth/addDoctorServiceDetailsAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/doctor/${body?.id}/servicedetails`,
    )
);
export const addDoctorServiceDetailsAPI = createAsyncThunk(
  "auth/addDoctorServiceDetailsAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/${body?.id}/servicedetails`,
      body?.payload
    )
);

export const getDoctorDataByIdAPI = createAsyncThunk(
  "auth/getDoctorDataByIdAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?doctorId=${body?.id}`,
      body?.payload
    )
);
export const doctorInstantCallAPI = createAsyncThunk(
  "call/doctorcall",
  async (body: any) => {
    return await post(
      "https://api.raphacure.com/api/v1/dashboard/instantCalls",
      body
    );
  }
);

export const resheduleDoctorBookingAPI = createAsyncThunk(
  "doctor/resheduleDoctorBookingAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${body?.bookingid}/reschedule?marketplace_name=raphacure`,
      body.payload
    )
);

export const getAvailableUsers = createAsyncThunk(
  "auth/getAvailableUsers",
  async (subRole: any = "") =>
    await get(`${SERVER_IP}/api/v1/user/get-admins?subRole=${subRole}`)
);

export const getDoctorTimeSlotAPI = createAsyncThunk(
  "doctor/getDoctorTimeSlotAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/timeslot/doctor`, body)
);

export const getVendorTimeSlotAPI = createAsyncThunk(
  "doctor/getVendorTimeSlotAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/timeslot/vendor`, body)
);

export const getAllFilteredPackages = createAsyncThunk(
  "labtest/getAllFilteredPackages",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackages`, {
      ...body,
      filters: {
        status: "active",
        ...body.filters,
      },
    })
);

export const getAllFilteredTests = createAsyncThunk(
  "package/getAllFilteredTests",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/get-all-tests`, {
      ...body,
      filters: {
        ...body.filters,
        active_status: "active",
      },
    })
);

export const getPackageDetailsAPI = createAsyncThunk(
  "package/getPackageDetailsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackageDetails`, body)
);

export const getTestDetailsAPI = createAsyncThunk(
  "test/getTestDetailsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/getTestDetails`, body)
);
