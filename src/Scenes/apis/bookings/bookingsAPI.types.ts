import { SimpleStringSchema } from "@google/generative-ai";

export interface BookingQueryParams {
  dateRange?:
    | {
        dateType: string;
        from: string;
        to: string;
      }
    | undefined;
  from: string;
  page: number;
  pageSize: number;
  status: string;
  id: string;
  searchText?: string;
}

export type GetBookingsApiResponse = {
  data: {
    bookings: any[];
    page: number;
    count: number;
    totalCount: number;
  };
  success: boolean;
};

export type GetBookingsApiResponseError = {
  message: string;
  success: boolean;
};

export type getBookingByIdParams = {
  id: string;
};

export interface getBookingByIdApiResponse {
  data: Data;
  success: boolean;
}
export interface getBookingByIdApiResponseError {
  message: string;
  success: boolean;
}

export interface Data {
  booking: Booking;
  categoryDetails: any[];
}

export interface Booking {
  id: string;
  collection_1_date: string;
  collection_1_slot: string;
  collection_2_date: null;
  collection_2_slot: null;
  notes: string;
  order_id: null;
  status: string;
  user_id: string;
  address_id: string;
  test_code: null;
  package_code: string;
  changed_by: string;
  vendor_id: string;
  doctor_id: null;
  type: string;
  final_amount: number;
  created_at: string;
  updated_at: string;
  client_order_id: string;
  to_address_id: null;
  group: null;
  search_keys: string;
  client_id: null;
  extra: null;
  coupon_id: null;
  instant_booking: boolean;
  virtual_type: null;
  source: string;
  test_type: null;
  rescheduleReason: null;
  isCod: boolean;
  attachmentImages: null;
  comments: null;
  patient_comment: null;
  assigned_to: null;
  priority: string;
  tat: null;
  row_id: number;
  payment_status: null;
  domain_name: null;
  marketplace_name: string;
  product_type: null;
  payment_proof: null;
  "15_min_reminder": boolean;
  "30_min_reminder": boolean;
  opd_reminder_sent: boolean;
  reminder_home_center: boolean;
  interaction_id: null;
  doctor_reference_id: null;
  created_user_id: null;
  specialization_id: null;
  extra_info: null;
  payment_note: null;
  payment_source: null;
  send_comm_to_parent: boolean;
  wallet_package_id: null;
  roi: null;
  branch_location_id: null;
  token_number: null;
  sub_location_id: null;
  serum_barcode: null;
  edta_barcode: null;
  offer_type: null;
  offer_booking_id: null;
  delivery_charges: string;
  is_emp_fit: boolean;
  doctor: null;
  test: null;
  user: any;
  vendor: any;
  address: any;
  package: any;
  medicines: any[];
  products: any[];
  assignedTo: null;
  client: null;
  logs: any[];
  paymentStatus: any[];
  doctorReferrals: any[];
  payment: null;
  bookingsWallets: any[];
  attachments: any[];
  client_order: any;
  tests: any[];
  prescriptionUrl: any[];
  communication_logs: any[];
  amount: number;
  paymentMode: string;
}

export type UpdateBookingStatusApiPayload = {
  bookingIds: string[];
  status: string;
};

export type UpdateBookingStatusApiResponse = {
  success: boolean;
  data: {
    bookings: {
      id: string;
      status: SimpleStringSchema;
    }[];
  };
};

export type GetBkReportPresignedAPIPayload = { id: string; payload: { ext: string } }

export type GetBkReportPresignedAPIResponse = {
  success: boolean;
  signedUrl: string;
  attachment: {
    booking_id: string;
    ext: string;
    url: string;
    uploaded_by: number;
    marketplace_name: string;
    created_at: string; // Or Date if you plan to parse it
    updated_at: string; // Or Date if you plan to parse it
    id: number;
  };
  publicDbUrl: string;
};

export type GetBkReportPresignedAPIError = {
  message: string;
  success: boolean;
};


export type GetBkReportUploadVerifyAPIPayload = {
  id: string;
}

export type GetBkReportUploadVerifyAPIResponse = {
  data: {
    attachment: {
      pending_reports: null | any; // Assuming this could be an object/array if not null
      updated_at: string;
      id: number;
      booking_id: string;
      file_uploaded: boolean;
      ext: string;
      url: string;
      created_at: string;
      seen: boolean;
      remarks: string | null;
      is_prescription: boolean;
      uploaded_by: string;
      cart_id: number | string | null;
      address_id: number | null;
      type: string | null;
      active_status: string;
      symptoms: string | null;
      note: string | null;
      next_visit: string | null;
      doctor_prescription_url: string | null;
      doctor_prescription_ext: string | null;
      total_price: string;
      prescribedBy: string | null;
      raphacure_prescription_url: string | null;
      raphacure_prescription_ext: string | null;
      marketplace_name: string;
      rapha_note: string | null;
      exercise: string | null;
      vitals: null | any; // Assuming this could be an object/array if not null
      reports_url: string | null;
      hyperLink_url: string | null;
      prescriptionDoctor: null | any; // Assuming this could be an object/array if not null
      prescriptionUser: null | any; // Assuming this could be an object/array if not null
      rapha_prescriptions_amount: number | string | null;
    };
    status: string;
  };
  success: boolean;
};


export type getAttachmentSignedUrlAPIPayload = {
  id: string;
}

export type getAttachmentSignedUrlAPIResponse = {
  success: boolean;
  signedUrl: string;
}



