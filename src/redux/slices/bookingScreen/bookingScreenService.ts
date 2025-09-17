import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { del, get, patch, post, put } from "@/lib/helpers";
import { constructFilteredAppointmentsQuery, constructgetPackageDetailsQuery } from "@/graphql/graphqlConfig";

export const getDoctorSlotsAPI = createAsyncThunk(
  "bookingScreen/getDoctorSlotsAPI",
  async (obj: any) => await patch(`${SERVER_IP}/api/v1/timeslot/doctor`, obj)
);

export const updateCampBkStatusAPI = createAsyncThunk(
  "booking/updateCampBkStatusAPI",
  async (body: any) => await put(`${SERVER_IP}/api/v1/booking/camp-bookings/${body?.id}/status`, body?.payload)
);

export const rescheduleCampBkAPI = createAsyncThunk(
  "booking/rescheduleCampBkAPI",
  async (body: any) => await put(`${SERVER_IP}/api/v1/booking/camp-bookings/${body?.id}`, body?.payload)
);

export const getCampBkTimeslotsAPI = createAsyncThunk(
  "booking/getCampBkTimeslotsAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/booking/camp-bookings/timeslots`, body)
);

export const getAllAppointmentsDetailsAPI = createAsyncThunk(
  "auth/getAllAppointmentsListAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, constructFilteredAppointmentsQuery(body))
);

export const getBookingByIdAPI = createAsyncThunk(
  "bookingScreen/getBookingByIdAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/booking/getBookingById/${id}`)
);

export const raiseIssueAPI = createAsyncThunk(
  "bookingScreen/raiseIssueAPI",
  async (raiseIssueObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${raiseIssueObj.bookingId}/issue`,
      raiseIssueObj.raiseIssueObjBody
    )
);

export const bookAgainAPI = createAsyncThunk(
  "bookingScreen/bookAgainAPI",
  async (bkAgainObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${bkAgainObj.bookingId}/reschedule`,
      bkAgainObj.bkAgainObjBody
    )
);

export const getVirtualCallLinkAPI = createAsyncThunk(
  "bookingScreen/getVirtualCallLinkAPI",
  async (bkId: any) =>
    await get(`${SERVER_IP}/api/v1/booking/${bkId}/videocall`)
);

export const getPatientDetailsAPI = createAsyncThunk(
  "bookingScreen/getPatientDetailsAPI",
  async (bkId: any) =>
    await get(`${SERVER_IP}/api/v1/doctor/doctor-patients/${bkId}`)
);

export const getPrescriptionAPI = createAsyncThunk(
  "bookingScreen/getPrescriptionAPI",
  async (bkId: any) =>
    await get(`${SERVER_IP}/api/v1/prescription/pdfDownload?bookingId=${bkId}`)
);

export const getPatientReportsAPI = createAsyncThunk(
  "bookingScreen/getPatientReportsAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/doctor/patient-reports/${body?.linkableId}?firstName=${body?.searchText}&date=${body?.date}`
    )
);

export const getAllDoctorBookingsAPI = createAsyncThunk(
  "bookingScreen/getAllDoctorBookingsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/getBookings`, body)
);


export const getAllBookingListAPI = createAsyncThunk(
  "auth/getAllBookingListAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/getBookings`, body)
);
export const getAllWalletInfoByUserIdClintAPI = createAsyncThunk(
  "booking/getAllWalletInfoByUserIdClintAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/wallet/details?user_id=${body?.user_id}&client_id=${body?.client_id}`
    )
);

export const getPackageDetailsQueryAPI = createAsyncThunk(
  "package/getPackageDetailsQueryAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, constructgetPackageDetailsQuery(body))
);

export const getAttachmentSignedUrl = createAsyncThunk(
  "booking/getAttachmentSignedUrl",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/booking/attachment/${id}/signed`)
);

export const getBkAdditionalInfo = createAsyncThunk(
  "booking/getBkAdditionalInfo",
  async (id: any) => await get(`${SERVER_IP}/api/v1/booking/${id}/additional`)
);

export const getAllBkStatusAPI = createAsyncThunk(
  "booking/getAllBkStatusAPI",
  async ({ type, test_type }: { type?: string; test_type?: string }) => {
    console.log('getAllBkStatusAPI params:', { type, test_type });
    
    let url = `${SERVER_IP}/api/v1/config/bookingstatuses?type=${type || ""}`;
    if (test_type) {
      url += `&test_type=${test_type}`;
    }
    return await get(url);
  }
);

export const cancelBookingAPI = createAsyncThunk(
  "booking/cancelBookingAPI",
  async (body: any) =>
    await patch(`${SERVER_IP}/api/v1/booking/${body?.id}/cancel`, body?.payload)
);

export const addBkCommentAPI = createAsyncThunk(
  "booking/addBkCommentAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/${body?.id}/comment`, body?.payload)
);

export const updateBulkBkStatusAPI = createAsyncThunk(
  "booking/updateBulkBkStatusAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/booking/status`, body)
);

export const rescheduleBookingAPI = createAsyncThunk(
  "booking/rescheduleBookingAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${body?.id}/reschedule`,
      body?.payload
    )
);

export const reassignVendorAPI = createAsyncThunk(
  "vendor/reassignVendorAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.id}/vendor`, body?.payload)
);

export const updateBkAddressAPI = createAsyncThunk(
  "vendor/updateBkAddressAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.id}/address`, body?.payload)
);

export const deleteBkAttachmentAPI = createAsyncThunk(
  "vendor/deleteBkAttachmentAPI",
  async (id: any) => await del(`${SERVER_IP}/api/v1/booking/attachment/${id}`)
);

export const assignBookingToAPI = createAsyncThunk(
  "vendor/assignBookingToAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.id}/assign`, body?.payload)
);

export const changePriorityApi = createAsyncThunk(
  "vendor/changePriorityApi",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.id}/priority`, body?.payload)
);

export const getAllDefaultAssigned = createAsyncThunk(
  "booking/getAllDefaultAssigned",
  async () => await get(`${SERVER_IP}/api/v1/booking/default-booking-assign`)
);

export const createAllDefaultAssigned = createAsyncThunk(
  "booking/getAllDefaultAssigned",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/default-booking-assign`, body)
);
export const deleteAllDefaultAssigned = createAsyncThunk(
  "booking/getAllDefaultAssigned",
  async (id: any) =>
    await del(`${SERVER_IP}/api/v1/booking/default-booking-assign/${id}`)
);

export const downloadBookingsApi = createAsyncThunk(
  "booking/downloadBookings",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/download-bookings`, body)
);

export const instantCallsAPI = createAsyncThunk(
  "booking/instantCallsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/dashboard/instantCalls`, body)
);

export const getBkPrescriptionAPI = createAsyncThunk(
  "booking/getBkPrescriptionAPI",
  async (id: any) =>
    await get(
      `${SERVER_IP}/api/v1/prescription/getPrescription?bookingId=${id}`
    )
);

export const getAllWalletInfoByUserIdAPI = createAsyncThunk(
  "booking/getAllWalletInfoByUserIdAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/wallet/details?user_id=${id}`)
);

export const addToPatientCart = createAsyncThunk(
  "booking/addToPatientCart",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/cart?userId=${body?.id}`, body?.payload)
);

export const bookPatientCartAPI = createAsyncThunk(
  "booking/bookPatientCartAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/cart/book?userId=${body?.id}`,
      body?.payload
    )
);

export const updateBookingStatusAPI = createAsyncThunk(
  "auth/updateBookingStatusAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/bookingStatus/${body?.id}`,
      body?.bookingObj
    )
);

export const googleTranslateAPI = createAsyncThunk(
  "auth/googleTranslateAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/filter/googleTranslation?q=${body?.query}&tl=${body?.targetLang}`
    )
);

export const uploadReceipt = createAsyncThunk(
  "auth/uploadReceipt",
  async (body: any) =>
    await patch(
      `${SERVER_IP}/api/v1/booking/upload-payment-proof/${body?.id}`,
      body?.body
    )
);

export const sendInvoice = createAsyncThunk(
  "auth/sendInvoice",
  async (id: any) =>
    await get(
      `${SERVER_IP}/api/v1/booking/send-invoice?bookingId=${id}`,
    )
);

export const getBkInvoiceAPI = createAsyncThunk(
  "bookingScreen/getBkInvoiceAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/invoice/getInvoice?id=${id}`)
);

export const updateBookingPaymentMethodsAPI = createAsyncThunk(
  "booking/updateBookingPaymentMethodsAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/payment-source`, body)
);
