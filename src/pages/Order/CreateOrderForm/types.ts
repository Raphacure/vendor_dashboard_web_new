export type ConsultType =
  | "virtual"
  | "labpackage"
  | "labtest"
  | "pharmacy"
  | "second_opinion"
  | "radiology";

export interface ConsultationData {
  consultType: "call" | "chat" | "video" | "opd" | "raphaprefered";
  selectedDoctor: any; // Consider defining a more specific Doctor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
  selectedSpecialization: any; // Consider defining a more specific Specialization type
  selectedVendor: any;
}

interface TestsData {
  selectedTest: any; // Consider defining a more specific Test type
  selectedVendor: any; // Consider defining a more specific Vendor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
}

interface PharmacyData {
  selectedMedicines: any[];
}

interface SecondOpinionData {
  selectedDoctor: any | null;
  selectedVendor: any | null;
  selectedCategory: any | null;
  urls: any | null;
  phone: string | null;
  comments: string | null;
  alternate_phone: string | null;
}

export interface FormData {
  consultation: ConsultationData;
  tests: TestsData;
  pharmacy: PharmacyData;
  secondOpinion: SecondOpinionData;
}

export interface UserDetails {
  users?: {
    user: any;
    address?: {
      fullAddress?: string;
      detail?: string | null;
      city?: string;
      latitude?: number;
      longitude?: number;
      state?: string;
      zip?: string;
    };
  }[];
  payment?: {
    paymentMethod: string;
    paymentType: string;
  };
  userType: "existing" | "new" | "bulk";
}

interface CartDataItem {
  consultType: ConsultType;
  formData: FormData;
  userDetails: UserDetails;
}

export interface CartData {
  virtual: CartDataItem[];
  labpackage: CartDataItem[];
  labtest: CartDataItem[];
  pharmacy: CartDataItem[];
}

export interface OrderErrors{
  consultation:ConsultationErrors
}

export interface ConsultationErrors {
  doctor?: string;
  date?: string;
  timeSlot?: string;
}

export interface ValidationErrors {
  user?: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    age?: string;
    gender?: string;
    dob?: string;
    employeeid?: string;
  };
  payment?: {
    paymentMethod?: string;
    paymentType?: string;
  };
  doctor?: string;
  consultType?: string;
  date?: string;
  timeSlot?: string;
  test?: string;
  vendor?: string;
  address?: {
    fullAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  general?: string;
  secondOpinion?: {
    doctor?: string;
    vendor?: string;
    category?: string;
    reports?: string;
    phone?: string;
    comments?: string;
  };
  pharmacy?: string;
}

export interface Service {
  id: number;
  name: string;
  type: string;
  limits: number;
  wallets_description: string | null;
  discount_percentage: number;
  amount: number | null;
  specialization: string;
  include_ctrmi: boolean;
  client_level_id: number | null;
}

export interface CreateOrderFormProps {
  visible: boolean;
  onCancel: () => void;
  reload?: () => void;
}
