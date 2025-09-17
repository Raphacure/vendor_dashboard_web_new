import React, { useEffect, useState, useRef, SetStateAction } from "react";
import { AdminEPrescriptionStyled } from "./AdminEPrescription.styled";
import { formatStatus } from "@/lib/common";
import {
  FaUser,
  FaEllipsisV,
} from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Button, Table, Select, Input, Space, DatePicker } from "antd";

import { getSuggestedPackageAPI } from "@/redux/slices/packages/packagesService";
import { debounce } from "lodash";
import { HiPencil } from "react-icons/hi";
import EditMedicineTable from "../../components/EditMedicineTable";
import EditLabtestTable, { LabTestItem } from "../../components/EditLabtestTable"; // Update the import to include the LabTestItem type
import ChangeVendorsModal from "../../components/ChangeVendorsModal";
import PrescriptionCard from "../../components/PrescriptionCard";
import WalletCostBreakdownModal from "../../components/WalletCostBreakdownModal"; // Added import
import {
  addToPatientCart,
  bookPatientCartAPI,
  getAllWalletInfoByUserIdAPI,
  getBkPrescriptionAPI,
} from "@/redux/slices/bookingScreen/bookingScreenService";
import { raphaAssuredSimilarMedicineAPI } from "@/redux/slices/medicines/medicineService";
import { getAllAddressByUserId } from "@/redux/slices/vendor/vendorService";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  age?: number;
  phone?: string;
  email?: string;
  gender?: string;
  client?: {
    id: string;
    name: string;
    parentClient?: {
      name: string;
    };
  };
}

interface AssignedTo {
  id: number;
  first_name: string;
  last_name: string;
}

interface Wallet {
  amount_used: number;
  percentage_applied: number;
}

interface Doctor {
  id: number;
  name: string;
  specialization?: string;
  image?: string;
}

interface Address {
  address?: string;
  city?: string;
  zip?: string;
  latitude?: number;
  longitude?: number;
}

interface BookingDetails {
  id: string;
  type: string;
  status: string;
  priority: string;
  collection_1_date: string;
  collection_1_slot: string;
  tat: string;
  final_amount: number;
  isCod: boolean;
  assignedTo: AssignedTo;
  wallet: Wallet;
  created_at: string;
  user: User;
  doctor?: Doctor;
  attachments: Array<{
    id: number;
    doctor_prescription_url?: string;
    doctor_prescription_ext?: string;
  }>;
  address?: Address;
  medicines?: any[];
  tests?: any[];
}

interface SelectedBooking {
  id: string;
  collection_1_date: string;
  collection_1_slot: string;
  collection_2_date: string | null;
  collection_2_slot: string | null;
  notes: string | null;
  order_id: string;
  status: string;
  user_id: string;
  address_id: string | null;
  test_code: string | null;
  package_code: string | null;
  changed_by: string;
  vendor_id: string | null;
  doctor_id: string;
  type: string;
  final_amount: number;
  created_at: string;
  updated_at: string;
  client_order_id: string | null;
  to_address_id: string | null;
  group: string;
  search_keys: string;
  client_id: string;
  extra: any | null;
  coupon_id: string | null;
  instant_booking: boolean;
  virtual_type: string;
  source: string;
  test_type: string | null;
  rescheduleReason: string | null;
  isCod: boolean;
  attachmentImages: any[] | null;
  comments: string | null;
  patient_comment: string | null;
  assigned_to: number;
  priority: string;
  tat: string;
  row_id: number;
  payment_status: string | null;
  domain_name: string | null;
  marketplace_name: string;
  product_type: string | null;
  payment_proof: string | null;
  "15_min_reminder": boolean;
  "30_min_reminder": boolean;
  opd_reminder_sent: boolean;
  reminder_home_center: boolean;
  interaction_id: string | null;
  address: any | null;
  vendor: any | null;
  test: any | null;
  package: any | null;
  products: any[];
  medicines: any[];
  amount: string;
  paymentMode: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    secondary_email: string | null;
    password: string | null;
    country_code: string | null;
    phone: string;
    secondary_phone: string | null;
    otp: string | null;
    otp_expires_at: string | null;
    gender: string;
    employee_id: string | null;
    corp_email_id: string | null;
    dob: string;
    blood_group: string | null;
    relation: string;
    head_id: string | null;
    active_status: string;
    patient_id: string;
    created_at: string;
    updated_at: string;
    age: number | null;
    designation: string | null;
    image: string | null;
    last_period_date: string | null;
    average_period_cycle: string | null;
    bmi: string | null;
    first_login_completed: boolean;
    isRaphaplus: boolean;
    joining_date: string | null;
    department: string | null;
    aadhar_front: string | null;
    aadhar_back: string | null;
    pan: string | null;
    source: string | null;
    marketplace_name: string;
    parent_doctor_id: string | null;
    hypersite_name: string | null;
    ref_url: string | null;
    allowed_communications: string | null;
    parent: any | null;
  };
  doctor: {
    id: number;
    name: string;
    gender: string;
    dob: string | null;
    registration_date: string | null;
    languages: string;
    specialization: string;
    medical_registration_body: string;
    highest_education: string;
    gst: string | null;
    city: string;
    zip: number;
    slot_start_time: string;
    slot_end_time: string;
    week_off_days: string | null;
    registration_number: string;
    registration_expiry_date: string;
    work_experience_years: number;
    rating: number;
    image: string;
    signature_url: string | null;
    virtual_consultation_cost: number;
    chat_consultation_cost: number;
    call_consultation_cost: number;
    agreed_charges: any | null;
    sort: any | null;
    external_id: string | null;
    lat: number;
    long: number;
    search_keys: string;
    is_specialist: boolean | null;
    available_in_90: boolean;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;
    state: string;
    medical_registration_file: string;
    pan_file: string | null;
    aadhar_file: string | null;
    aadhar_number: string;
    pan_number: string;
    virtual_buying_cost: number;
    chat_buying_cost: number | null;
    call_buying_cost: number;
    college: string;
    college_completion_year: string;
    instant_consultation_cost: number;
    instant_buying_cost: number | null;
    minutes_before_virtual: number;
    minutes_before_chat: number;
    minutes_before_call: number;
    minutes_before_instant: number;
    establishment_name: string;
    establishment_city: string;
    establishment_locality: string;
    establishment_type: string | null;
    establishment_proof: string;
    establishment_proof_file: string;
    identity_proof_file_front: string;
    identity_proof_file_back: string;
    identity_proof_type: string;
    address: any | null;
    detail: any | null;
    registration_year: number;
    clinic_email: string;
    homecare_consultation_cost: number;
    clinic_phone: string | null;
    parent_id: string | null;
    bio: string;
    homecare_buying_cost: number | null;
    category_ids: number[];
    labtest_comm_percentage: string;
    radiology_comm_percentage: string;
    medicine_comm_percentage: string;
    isRaphaAssured: boolean;
    created_by: string | null;
    marketplace_name: string;
    gst_number: string | null;
    secondary_number: string | null;
    education_details: any | null;
    experiences_details: any | null;
    identity_number: string | null;
    display_order: number | null;
    home_care_services: any | null;
    home_care_price: number | null;
    search_vector: string;
    user: {
      phone: string;
    };
  };
  logs: Array<{
    id: number;
    booking_id: string;
    collection_1_date: string;
    collection_1_slot: string;
    collection_2_date: string | null;
    collection_2_slot: string | null;
    address_id: string | null;
    status: string;
    changed_by: string;
    vendor_id: string | null;
    created_at: string;
  }>;
  attachments: Array<{
    id: number;
    booking_id: string;
    file_uploaded: boolean;
    ext: string;
    url: string | null;
    created_at: string;
    updated_at: string;
    seen: boolean;
    remarks: string | null;
    is_prescription: boolean;
    uploaded_by: string | null;
    cart_id: string | null;
    address_id: string | null;
    type: string | null;
    active_status: string;
    symptoms: string;
    note: string;
    next_visit: string;
    doctor_prescription_url: string;
    doctor_prescription_ext: string;
    total_price: string;
    prescribedBy: string | null;
    raphacure_prescription_url: string | null;
    raphacure_prescription_ext: string | null;
    marketplace_name: string;
    rapha_note: string | null;
    exercise: string | null;
    vitals: string | null;
    reports_url: string | null;
    hyperLink_url: string | null;
    pending_reports: string | null;
    prescriptionDoctor: string | null;
    prescriptionUser: string | null;
    uploadedBy: string | null;
  }>;
  assignedTo: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    secondary_email: string | null;
    password: string;
    country_code: string | null;
    phone: string | null;
    secondary_phone: string | null;
    otp: string | null;
    otp_expires_at: string | null;
    gender: string | null;
    employee_id: string | null;
    corp_email_id: string | null;
    dob: string | null;
    blood_group: string | null;
    relation: string;
    head_id: string | null;
    active_status: string;
    patient_id: string | null;
    created_at: string;
    updated_at: string;
    age: number | null;
    designation: string | null;
    image: string;
    last_period_date: string | null;
    average_period_cycle: string | null;
    bmi: string | null;
    first_login_completed: boolean;
    isRaphaplus: boolean;
    joining_date: string | null;
    department: string | null;
    aadhar_front: string;
    aadhar_back: string;
    pan: string;
    source: string | null;
    marketplace_name: string;
    parent_doctor_id: string | null;
    hypersite_name: string | null;
    ref_url: string | null;
    allowed_communications: string | null;
  };
  client: {
    id: string;
    name: string;
    address: string;
    phone: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    logo_url: string | null;
    parent_id: string;
    type: string;
    user_max: number;
    dependent_per_user: number | null;
    booking_key: string;
    status: string;
    mapping_id: string | null;
    old_users_data: any[] | null;
    created_at: string;
    updated_at: string;
    opd_restricted: boolean;
    subdomain_key: string | null;
    agreed_services: string | null;
    user_count: number;
    contract_start: string | null;
    contract_end: string | null;
    block_retail: boolean;
    allowed_email_domains: string | null;
    payment_terms: string | null;
    other_payment_terms: string | null;
    background_color: string | null;
    text_color: string | null;
    created_by: string | null;
    marketplace_name: string;
    config_values: any | null;
  };
  paymentStatus: any[];
  doctorReferrals: Array<{
    id: number;
    referral_bookingId: string;
    doctor_id: number;
    patient_id: number;
    commission_amount: string;
    booking_ids: string | null;
    isActive: boolean;
    created_at: string;
    updated_at: string;
    total_buying_price: string;
  }>;
  client_order: any | null;
  bookingsWallets: Array<{
    id: number;
    booking_id: string;
    client_wallet_id: string;
    active_status: string;
    amount_used: number;
    percentage_applied: number;
    user_id: string;
    created_at: string;
    updated_at: string;
    changed_by: string | null;
    discounted_amount: string;
  }>;
  payment: {
    id: string;
    amount: string;
    currency: string;
    razorpay_payment_id: string | null;
    razorpay_order_id: string | null;
    razorpay_signature: string | null;
    user_id: string;
    status: string;
    created_at: string;
    updated_at: string;
    order_data: any | null;
    refund_transaction_id: string | null;
    source: string;
    refund_data: any | null;
  };
  communication_logs: Array<{
    id: number;
    user_id: string;
    booking_id: string;
    type: string;
    to: string;
    template_id: string;
    response: string;
    provider: string;
    success: boolean;
    created_at: string;
    wam_id: string | null;
    wam_status: string | null;
    errors: string | null;
    campaign: string | null;
    created_by: string | null;
    filter: string | null;
    marketplace_name: string;
    role: string;
    transcripts: string | null;
    client_id: string | null;
  }>;
  relatedBookings: any[];
}

interface AdminEPrescriptionProps {
  bkDetails: any;
  selectedBooking: any;
}

interface Medicine {
  key?: string;
  name: string;
  count: number;
  price: number;
  type: "branded" | "generic";
  [key: string]: any; // Allow for additional properties
}

const handleDownloadClick = () => {
  console.log("Download button clicked");
  // Add download logic here
};

const handleMenuClick = () => {
  console.log("Menu button clicked");
  // Add menu logic here
};

const AdminEPrescription: React.FC<AdminEPrescriptionProps> = ({
  bkDetails,
  selectedBooking,
}) => {
  // State Variables
  const [prescriptionData, setPrescriptionData] = useState(null);

  const [brandedMedicines, setBrandedMedicines] = useState<Medicine[]>([]);
  const [genericMedicines, setGenericMedicines] = useState<Medicine[]>([]);
  const [labTests, setLabTests] = useState<LabTestItem[]>([]);
  const [suggestedPackages, setSuggestedPackages] = useState([]);
  const [similarMedicines, setSimilarMedicines] = useState<any[]>([]);
  const [filteredSimilarMedicines, setFilteredSimilarMedicines] = useState<
    any[]
  >([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [walletInfo, setWalletInfo] = useState<any>(null);
  const [allAddress, setAllAddress] = useState<any>([]);
  const [selectedPackages, setSelectedPackages] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<"medicine" | "diagnostics">(
    "medicine"
  );
  const [selectedTestDetails, setSelectedTestDetails] = useState<any>(null);
  const [showTestDetails, setShowTestDetails] = useState(false);
  const [editMedicinesModalVisible, setEditMedicinesModalVisible] =
    useState(false);
  const [selectedVendor, setSelectedVendor] = React.useState<any>(null);

  const [selectedPkgVendors, setSelectedPkgVendors] = useState<any>(null);
  const [changeVendorsModalVisible, setChangeVendorsModalVisible] =
    useState(false);
  const [labTestModalVisible, setLabTestModalVisible] = useState(false);
  const [modifiedLabTests, setModifiedLabTests] = useState<LabTestItem[]>([]);
  // Define a type for medicine items in the edit modal
  interface MedicineItem extends Medicine {
    key: string;
    editable: boolean;
  }

  const [editableMedicines, setEditableMedicines] = useState<MedicineItem[]>(
    []
  );
  const [modifiedMedicines, setModifiedMedicines] = useState<MedicineItem[]>(
    []
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);

  const [showWalletModal, setShowWalletModal] = useState(false); // Moved state
  const handleCloseWalletDetailsModal = () => {
    // Moved handler
    setShowWalletModal(false);
  };

  useEffect(() => {
    console.log("brandedMedicines : ", brandedMedicines);
    console.log("genericMedicines : ", genericMedicines);
  }, [brandedMedicines, genericMedicines]);

  const medColumns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      // render: (_: any, __: any, index: number) => index + 1,
      width: 40,
    },
    {
      title: "Medicine",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `₹${price}`,
    },
  ];

  const labComparisonColumns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      // render: (_: any, __: any, index: number) => index + 1,
      width: 40,
    },
    {
      title: "Prescribed Test",
      dataIndex: "name",
      key: "name",
    },
  ];

  // useEffects
  useEffect(() => {
    console.log("bkDetails : ", bkDetails);
    console.log("selectedBooking : ", selectedBooking);
  }, [bkDetails, selectedBooking]);

  useEffect(() => {
    console.log("suggestedPackages : ", suggestedPackages);
    console.log("labTests : ", labTests);
  }, [suggestedPackages, labTests]);

  useEffect(() => {
    if (!selectedBooking?.id) {
      return;
    }

    fetchPrescriptionData();
  }, [selectedBooking?.id]);

  useEffect(() => {
    getSimilarPackages();
  }, [labTests]);

  useEffect(() => {
    if (!brandedMedicines?.length && !genericMedicines?.length) {
      return;
    }
    debouncedGetSimilarMedicines([
      ...brandedMedicines.map((med: any) => med?.key),
      ...genericMedicines.map((med: any) => med?.key),
    ]);
  }, [brandedMedicines, genericMedicines]);

  useEffect(() => {
    // Create filteredSimilarMedicines based on the logic
    if (similarMedicines.length > 0) {
      const medCodes = [...brandedMedicines, ...genericMedicines].map(
        (med: any) => med?.key
      );
      const filtered = medCodes
        .map((medCode) => {
          const medicine = similarMedicines.find(
            (med) => med.originalMedicine.service_code === medCode
          );
          if (!medicine) return null;

          const medToUse =
            medicine?.similarGenericMedicines || medicine?.originalMedicine;
          console.log("medToUse : ", medToUse);
          return {
            key: medToUse?.service_code,
            name: medToUse?.service_name,
            count: 1,
            type: formatStatus(
              medToUse?.medicine_type || medToUse?.category_key
            ),
            price: medToUse?.actual_cost
              ? medToUse?.discount_percentage
                ? Math.round(
                    medToUse.actual_cost *
                      (1 - medToUse.discount_percentage / 100)
                  )
                : medToUse.actual_cost
              : 0,
            actualPrice: medToUse?.actual_cost,
            ...medToUse,
          };
        })
        .filter(Boolean);
      setFilteredSimilarMedicines(filtered);
      console.log("filteredSimilarMedicines: ", filtered);
    }
  }, [similarMedicines]);

  useEffect(() => {
    if (!selectedBooking?.user?.id) {
      return;
    }
    getAllWalletDetails();
    getAllAddress();
  }, [selectedBooking?.user?.id]);

  // Functions

  const fetchPrescriptionData = async () => {
    const res = (await dispatch(
      getBkPrescriptionAPI(selectedBooking?.id)
    )) as any;
    console.log("res : ", res);

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
      return;
    }

    console.log("attachments : ", res?.payload?.attachments);

    // Find first item with non-empty prescriptions
    const validPrescription = res?.payload?.attachments?.find(
      (item: any) =>
        (item?.prescriptions_medicines &&
          item?.prescriptions_medicines?.length > 0) ||
        (item?.prescriptions_tests && item?.prescriptions_tests?.length > 0)
    );

    if (validPrescription) {
      setPrescriptionData(validPrescription);

      // Separate branded and generic medicines
      const branded = [] as any;
      const generic = [] as any;

      validPrescription.prescriptions_medicines?.forEach((med: any) => {
        if (med.medicine?.category_key === "branded") {
          console.log("med : ", med);
          branded.push({
            key: med.medicine_id,
            name: med.medicine.service_name,
            days: med.no_of_days,
            intake: med.intake,
            price:
              med?.medicine?.price?.discounted_price ||
              med?.medicine?.price?.actual_cost ||
              0,
            count: med.count,
            type: "Branded",
          });
        } else if (med.medicine?.category_key === "generic") {
          generic.push({
            key: med.medicine_id,
            name: med.medicine.service_name,
            days: med.no_of_days,
            intake: med.intake,
            price:
              med?.medicine?.price?.discounted_price ||
              med?.medicine?.price?.actual_cost ||
              0,
            count: med.count,
            type: "Generic",
          });
        }
      });

      setBrandedMedicines(branded);
      setGenericMedicines(generic);

      // Set lab tests
      const tests =
        validPrescription.prescriptions_tests?.map((test: any) => ({
          key: test?.id,
          name: test?.test?.service_name,
          type: "Lab Test", // This field is not provided in the data, using default
          id: test?.test?.service_code,
          price:
            test?.test?.price?.discounted_price ||
            test?.test?.price?.actual_cost ||
            0,
          note: test?.note || "",
        })) || [];

      setLabTests(tests);
    }
  };

  const handleChooseSection = (e: any, section: string) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("section : ", section);
  };

  const getSimilarPackages = async () => {
    if (!labTests?.length) {
      setSuggestedPackages([]);
      return;
    }

    const payload = {
      test_codes: labTests.map((test: any) => test?.id),
    };
    const res = (await dispatch(getSuggestedPackageAPI(payload))) as any;
    console.log("getSimilarPackages Res : ", res?.payload);

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      setSuggestedPackages([]);
      return;
    }
    console.log("labtest : ", labTests);
    setSuggestedPackages(Array.isArray(res?.payload) ? res?.payload : []);
  };

  const getSimilarMedicines = async (medCodes: string[]) => {
    if (!medCodes?.length) {
      return;
    }

    const payload = {
      serviceCodes: medCodes,
    };
    const res = (await dispatch(
      raphaAssuredSimilarMedicineAPI(payload)
    )) as any;
    console.log(
      "raphaAssuredSimilarMedicineAPI Res : ",
      res?.payload?.data?.data
    );

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      setSimilarMedicines([]);
      return;
    }
    setSimilarMedicines(
      Array.isArray(res?.payload?.data?.data) ? res?.payload?.data?.data : []
    );
  };

  const debouncedGetSimilarMedicines = debounce(getSimilarMedicines, 300);

  const getAllAddress = async () => {
    if (!selectedBooking?.user?.id) return;
    const res: any = await dispatch(
      getAllAddressByUserId(selectedBooking?.user?.id)
    );
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
      return;
    }
    console.log("getAllAddress res : ", res?.payload?.data?.addresses);
    setAllAddress(res?.payload?.data?.addresses);
  };

  const getAllWalletDetails = async () => {
    if (!selectedBooking?.user?.id) return;
    const resp: any = await dispatch(
      getAllWalletInfoByUserIdAPI(selectedBooking?.user?.id)
      // getAllWalletInfoByUserIdAPI("70268")
    );
    console.log("getAllWalletDetails resp : ", resp?.payload?.data?.wallets);
    if (resp?.payload?.data?.wallets) {
      setWalletInfo(resp?.payload?.data?.wallets);
    }
  };

  const openEditMedicinesModal = () => {
    // Create a deep copy of the medicines with a unique key for each item
    const medicinesWithKeys = [...brandedMedicines, ...genericMedicines].map(
      (med, index) => {
        console.log("medicinesWithKeys : ", med);
        // Create a properly typed medicine item
        const medicineItem: MedicineItem = {
          ...med,
          key: med?.key || med?.id || med?.service_code || `med-${index}`,
          editable: true,
          count: med.count || 1, // Ensure count is defined
          type:
            med.type ||
            (brandedMedicines.includes(med) ? "branded" : "generic"), // Ensure type is defined
        };
        return medicineItem;
      }
    );
    setEditableMedicines(medicinesWithKeys);
    setEditMedicinesModalVisible(true);
  };

  const handleAddressChange = async (value: number) => {
    const selectedAddr = allAddress.find((addr: any) => addr.id === value);
    await setSelectedAddress(selectedAddr);
  };

  const openEditTestsModal = () => {
    // setModifiedLabTests(
    //   labTests.map((test) => ({
    //     ...test,
    //     originalData: { ...test },
    //     count: 1,
    //   }))
    // );
    // setLabTestModalVisible(true);
  };

  // Handler for increasing medicine count
  const handleIncreaseCount = (record: MedicineItem) => {
    handleMedicineChange(record.key, (record.count || 1) + 1);
  };

  // Handler for decreasing medicine count
  const handleDecreaseCount = (record: MedicineItem) => {
    if (record.count > 1) {
      handleMedicineChange(record.key, record.count - 1);
    }
  };

  // Handler for deleting a medicine
  const handleDeleteMedicine = (record: MedicineItem) => {
    // Store complete original data before deletion
    const originalData = {
      ...record,
      count: record.count,
      price: record.price,
      type: record.type,
      key: record.key,
    };

    // Add to modified medicines with count 0
    setModifiedMedicines((prev) => {
      const existingIndex = prev.findIndex((m) => m.key === record.key);
      if (existingIndex >= 0) {
        const updatedModified = [...prev];
        updatedModified[existingIndex] = {
          ...updatedModified[existingIndex],
          count: 0,
        };
        return updatedModified;
      } else {
        return [...prev, { ...record, count: 0, originalData }];
      }
    });

    // Remove from editable medicines
    setEditableMedicines((prev) => prev.filter((m) => m.key !== record.key));
  };

  // Handler for resetting a medicine to its original state
  const handleResetMedicine = (key: string) => {
    setModifiedMedicines((prev) => prev.filter((m) => m.key !== key));

    setEditableMedicines((prev) => {
      const modifiedMed = modifiedMedicines.find((m) => m.key === key);
      if (modifiedMed?.originalData) {
        // Check if medicine already exists in editable list
        const exists = prev.some((m) => m.key === key);
        if (!exists) {
          // Add back to editable medicines
          return [
            ...prev,
            {
              ...modifiedMed.originalData,
              editable: true,
            },
          ];
        } else {
          // Update existing medicine
          return prev.map((med) =>
            med.key === key
              ? { ...modifiedMed.originalData, editable: true }
              : med
          );
        }
      }
      return prev;
    });
  };

  // Handler for saving the edited medicines
  const handleSaveEditedMedicines = () => {
    // Separate branded and generic medicines
    const branded: Medicine[] = [];
    const generic: Medicine[] = [];
    console.log("editableMedicines : ", editableMedicines);

    editableMedicines.forEach((med) => {
      // Create a properly typed medicine object without the editable property
      const medicine: Medicine = {
        ...med,
        editable: undefined,
      };
      delete medicine.editable;

      if (med.type === "branded") {
        branded.push(medicine);
      } else {
        generic.push(medicine);
      }
    });

    setBrandedMedicines(branded);
    setGenericMedicines(generic);
    setModifiedMedicines([]);
    setEditableMedicines([]);
  };

  const handleMedicineChange = (key: string, count: number) => {
    setEditableMedicines((prev) => {
      const updated = prev.map((med) => {
        if (med.key === key) {
          // Check if this medicine has original data
          const originalData = med.originalData || { ...med, count: med.count };

          // Update modified medicines list
          const isModified = count !== originalData.count;

          setModifiedMedicines((current) => {
            if (isModified) {
              // Add or update in modified list
              const existingIndex = current.findIndex((m) => m.key === key);
              if (existingIndex >= 0) {
                const updatedModified = [...current];
                updatedModified[existingIndex] = {
                  ...updatedModified[existingIndex],
                  count,
                };
                return updatedModified;
              } else {
                return [...current, { ...med, count, originalData }];
              }
            } else {
              // Remove from modified list if count matches original
              return current.filter((m) => m.key !== key);
            }
          });

          return { ...med, count, originalData };
        }
        return med;
      });

      return updated;
    });
  };

  const handleDeleteTest = (record: LabTestItem) => {
    setModifiedLabTests(
      modifiedLabTests.map((test) =>
        test.key === record.key ? { ...test, count: 0 } : test
      )
    );
  };

  const handleResetTest = (key: number) => {
    // Find the original test data
    const originalTest = modifiedLabTests.find(
      (test) => test.key === key
    )?.originalData;

    if (originalTest) {
      // Restore original values
      setModifiedLabTests(
        modifiedLabTests.map((test) =>
          test.key === key
            ? { ...originalTest, originalData: originalTest, count: 1 }
            : test
        )
      );
    } else {
      // If no original data, remove from modified list (undo delete)
      setModifiedLabTests(modifiedLabTests.filter((test) => test.key !== key));
    }
  };

  const handleSaveTests = () => {
    // Filter out deleted tests (count = 0) and remove originalData field
    const updatedTests = modifiedLabTests
      .filter((test) => test.count !== 0)
      .map(({ originalData, count, ...test }) => test);

    setLabTests(updatedTests);
    setLabTestModalVisible(false);
  };

  const handleCancelTests = () => {
    setLabTestModalVisible(false);
  };

  // Components

  const UserInfo = () => {
    return (
      <div className="userInfo">
        <div className="action-icons">
          <HiOutlineDownload size={23} onClick={handleDownloadClick} />
          <FaEllipsisV size={20} onClick={handleMenuClick} />
        </div>
        {selectedBooking?.user?.image ? (
          <img
            src={selectedBooking?.user?.image}
            alt={selectedBooking?.user?.first_name || ""}
            className="w-full m-auto"
          />
        ) : (
          <FaUser size={50} className="m-auto" />
        )}
        <div className="d-flex flex-column gap-4">
          <p className="font-bold">
            {selectedBooking?.user?.first_name}{" "}
            {selectedBooking?.user?.last_name}
          </p>
          <p>{formatStatus(selectedBooking?.type || "")}</p>
          <p>Age : {selectedBooking?.user?.age}</p>
          <p>Phone : {selectedBooking?.user?.phone}</p>
        </div>
        <div className="d-flex flex-column gap-6">
          <p>Doctor</p>
          <p>Date</p>
          <p>Time</p>
          <p>Patient Id</p>
          <p>Address</p>
        </div>
        <div className="bkInfoGrid gap-4">
          <p>{selectedBooking?.doctor?.name}</p>
          <p>{selectedBooking?.collection_1_date}</p>
          <p>{selectedBooking?.collection_1_slot}</p>
          <p>{selectedBooking?.user?.id}</p>
          {/* <p>{selectedBooking?.address?.address || ""}</p> */}
          <Select
            placeholder="Select Address"
            className="w-full"
            style={{ maxWidth: "700px" }}
            value={selectedAddress?.id}
            onChange={handleAddressChange}
            options={allAddress?.map((addr: any) => ({
              value: addr.id,
              label: addr.address,
            }))}
          />
        </div>
      </div>
    );
  };

  const DoctorPrescribedRx = () => {
    return (
      <div>
        <h5>Doctor Prescribed Rx</h5>
        <div className="d-flex flex-row gap-4 w-full justify-content-center my-4">
          <div className="w-full">
            <div className="table-name">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069818584.png"
                alt=""
              />
              <p>Medicines</p>
              <button className="edit-button" onClick={openEditMedicinesModal}>
                <HiPencil size={16} />
                <span>Edit</span>
              </button>
            </div>
            <div className="order-section w-full">
              <Table
                dataSource={[...brandedMedicines, ...genericMedicines]}
                columns={medColumns}
                pagination={false}
                size="small"
                className="prescriptionTable"
              />
              <div className="order-summary">
                <div className="summary">
                  <div className="summary-row">
                    <span className="summary-label mr-1">
                      Total Medicines:{" "}
                    </span>
                    <span className="summary-value">
                      {brandedMedicines.length + genericMedicines.length}
                    </span>
                  </div>
                  <div className="summary-row summary-bold">
                    <span className="summary-label mr-1">MRP: </span>
                    <span className="summary-value">
                      ₹
                      {[...brandedMedicines, ...genericMedicines]
                        .reduce((sum, med: any) => sum + (med?.price || 0), 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="table-name">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png"
                alt=""
              />
              <p>Prescribed Tests</p>
              {/* <button className="edit-button" onClick={openEditTestsModal}>
                <HiPencil size={16} />
                <span>Edit</span>
              </button> */}
            </div>
            <div className="order-section w-full">
              <Table
                dataSource={labTests}
                columns={labComparisonColumns}
                pagination={false}
                size="small"
                className="prescriptionTable"
              />
              <div className="order-summary">
                <div className="summary">
                  <div className="summary-row">
                    <span className="summary-label mr-1">
                      Total Biomarkers:{" "}
                    </span>
                    <span className="summary-value">{labTests.length}</span>
                  </div>
                  <div className="summary-row summary-bold">
                    <span className="summary-label mr-1">MRP: </span>
                    <span className="summary-value">
                      ₹
                      {labTests
                        .reduce((sum, test: any) => sum + (test?.price || 0), 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RaphacureAssuredPrice = () => {
    const raphaAssuredMedicineColumns = [
      {
        title: "#",
        dataIndex: "key",
        key: "key",
        // render: (_: any, __: any, index: number) => index + 1,
        width: 40,
      },
      {
        title: "Medicine",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Quantity",
        dataIndex: "count",
        key: "count",
        render: (count: number) =>
          `${count} ${count > 1 ? "Tablets" : "Tablet"}`,
      },
      {
        title: "Availability",
        dataIndex: "category_key",
        key: "category_key",
        render: (category_key: string) =>
          category_key === "branded" ? (
            <strong>{formatStatus(category_key)}</strong>
          ) : (
            category_key
          ),
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price: number) => `₹${price}`,
      },
    ];

    const raphaAssuredPkgColumns = [
      {
        title: "#",
        dataIndex: "service_code",
        key: "service_code",
        width: 40,
      },
      {
        title: "Packages",
        dataIndex: "service_name",
        key: "service_name",
      },
      {
        title: "Additional Tests",
        dataIndex: "tests",
        key: "tests",
        render: (tests: any[]) => {
          const diff = (tests?.length || 0) - (labTests?.length || 0);
          return (
            <div
              className="d-flex flex-row gap-4 align-items-center text-underline cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTestDetails(tests);
                setShowTestDetails(true);
              }}
            >
              {diff === 0
                ? "No Additional Tests"
                : `${diff} + ${labTests?.length || 0}`}
              <FiInfo className="test-info-icon" />
            </div>
          );
        },
      },
      {
        title: "Lab Partner",
        key: "vendors",
        render: (_: any, record: any) => (
          <span
            className="text-underline cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVendor(null);
              setSelectedPackages(
                selectedPackages?.service_code === record?.service_code
                  ? null
                  : record
              );
              setSelectedPkgVendors(record?.vendors);
              setChangeVendorsModalVisible(true);
            }}
          >
            {/* {record?.vendors?.length > 0
              ? record.vendors[0].name
              : "No vendors available"} */}
            {selectedPackages?.service_code === record?.service_code // if the current record is the selected one then try to show the selected vendors name else show first vendor if available
              ? selectedVendor?.name
              : record?.vendors?.length > 0
              ? record.vendors[0].name
              : "No vendors available"}
          </span>
        ),
      },
      {
        title: "Price",
        dataIndex: "discounted_price",
        key: "discounted_price",
      },
      {
        title: "",
        key: "select",
        render: (_: any, record: any) => (
          <Button
            className={`select-btn ${
              selectedPackages?.service_code === record?.service_code
                ? "selected"
                : ""
            }`}
            type={
              selectedPackages?.service_code === record?.service_code
                ? "primary"
                : "default"
            }
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPackages(
                selectedPackages?.service_code === record?.service_code
                  ? null
                  : record
              );
            }}
          >
            {selectedPackages?.service_code === record?.service_code
              ? "Selected"
              : "Select"}
          </Button>
        ),
        width: 80,
      },
    ];

    // Use ref to track previous selected codes without causing rerenders
    const previousSelectedCodesRef = useRef<string[]>([]);

    useEffect(() => {
      console.log("selectedPackages : ", selectedPackages);
      // if (!selectedPackages) {
      //   previousSelectedCodesRef.current = [];
      //   return;
      // }

      // // Get current selected codes
      // const currentCodes = [selectedPackages.service_code];

      // // Check if the selected codes have actually changed
      // const prevCodes = previousSelectedCodesRef.current;
      // const codesChanged =
      //   prevCodes.length !== currentCodes.length ||
      //   !prevCodes.every((code) => currentCodes.includes(code));

      // // Only update vendors if selected codes have changed and we have an address
      // if (codesChanged && selectedAddress) {
      //   // updateVendorsList(currentCodes);
      //   // Update the ref without causing a rerender
      //   previousSelectedCodesRef.current = [...currentCodes];
      // }
    }, [selectedPackages]);

    useEffect(() => {
      console.log("similarMedicines : ", similarMedicines);
    }, [similarMedicines]);

    return (
      <div className="raphacureAssuredPrice">
        <h5>Raphacure Assured Price</h5>

        <div className="wrapper">
          <div className="tabs mb-4 w-fit">
            <button
              className={`tab-btn ${activeTab === "medicine" ? "active" : ""}`}
              onClick={() => setActiveTab("medicine")}
            >
              Medicine
            </button>
            <button
              className={`tab-btn ${
                activeTab === "diagnostics" ? "active" : ""
              }`}
              onClick={() => setActiveTab("diagnostics")}
            >
              Diagnostics
            </button>
          </div>

          {activeTab === "medicine" && (
            <div className="d-flex flex-row gap-4 w-full justify-content-center my-4">
              <div className="w-full">
                <div className="table-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png"
                    alt=""
                  />
                  <p>Medicine Cost Savings (Generic & Branded)</p>
                </div>
                <div className="order-section bg-white w-full">
                  <div className="tableHeader d-flex flex-row gap-4 align-items-center justify-content-between">
                    <div className="table-name">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png"
                        alt=""
                      />
                      <p>{selectedVendor?.name || "No vendor selected"}</p>
                    </div>
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm"
                      placeholder="Select date and time"
                      className="w-fit"
                      getPopupContainer={(trigger) =>
                        trigger.parentNode as HTMLElement
                      }
                      minuteStep={30}
                      onChange={(date) => setSelectedDate(date)}
                      value={selectedDate}
                    />
                  </div>
                  <Table
                    dataSource={filteredSimilarMedicines}
                    columns={raphaAssuredMedicineColumns}
                    pagination={false}
                    size="small"
                    className="prescriptionTable"
                  />
                  <div className="order-summary">
                    <div className="summary">
                      <div className="summary-row">
                        <span className="summary-label mr-1">
                          Total Biomarkers:{" "}
                        </span>
                        <span className="summary-value">
                          {
                            filteredSimilarMedicines.filter(
                              (m) => m.category_key === "generic"
                            ).length
                          }{" "}
                          Generic +{" "}
                          {
                            filteredSimilarMedicines.filter(
                              (m) => m.category_key === "branded"
                            ).length
                          }{" "}
                          Branded
                        </span>
                      </div>
                      <div className="summary-row summary-bold">
                        <span className="summary-label mr-1">MRP: </span>
                        <span className="summary-value">
                          <span className="text-decoration-line-through mr-2">
                            ₹
                            {filteredSimilarMedicines
                              .reduce(
                                (sum, med: any) =>
                                  sum + (med?.actualPrice || 0),
                                0
                              )
                              .toFixed(2)}
                          </span>
                          <span>
                            ₹
                            {filteredSimilarMedicines
                              .reduce(
                                (sum, med: any) => sum + (med?.price || 0),
                                0
                              )
                              .toFixed(2)}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="summary">
                      <div className="summary-row d-flex align-items-center gap-2">
                        <FiInfo />
                        <span className="summary-label mr-1">
                          Branded is given when Generic is not available
                        </span>
                      </div>
                      <div className="summary-row summary-bold">
                        {/* <button className="place-order-btn filled">Add</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "diagnostics" && (
            <div className="d-flex flex-row gap-4 w-full justify-content-center my-4">
              <div className="w-full">
                <div className="table-name">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741071986993.png"
                    alt=""
                  />
                  <p>
                    Diagnostics cost saving offer (Prescribed Tests + Additional
                    Tests)
                  </p>
                </div>
                <div className="order-section bg-white w-full">
                  <div className="tableHeader d-flex flex-row gap-4 align-items-center justify-content-between">
                    <div className="table-name">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1741069869092.png"
                        alt=""
                      />
                      <p>{selectedVendor?.name || "No vendor selected"}</p>
                    </div>
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm"
                      placeholder="Select date and time"
                      className="w-fit"
                      getPopupContainer={(trigger) =>
                        trigger.parentNode as HTMLElement
                      }
                      minuteStep={30}
                      onChange={(date) => setSelectedDate(date)}
                      value={selectedDate}
                    />
                  </div>
                  <Table
                    dataSource={suggestedPackages}
                    columns={raphaAssuredPkgColumns}
                    pagination={false}
                    size="small"
                    className="prescriptionTable"
                  />
                  <div className="order-summary">
                    <div className="summary">
                      <div className="summary-row">
                        <span className="summary-label mr-1">
                          Total Biomarkers:{" "}
                        </span>
                        <span className="summary-value">
                          {selectedPackages?.tests?.length || 0} Parameters
                        </span>
                      </div>
                      <div className="summary-row summary-bold">
                        <span className="summary-label mr-1">MRP: </span>
                        <span className="summary-value">
                          ₹{selectedPackages?.discounted_price || 0}
                          {/* {(selectedPackages?.tests?.reduce(
                            (sum: number, test: any) => sum + (test?.price?.discounted_price || 0),
                            0
                          ) || 0).toFixed(2)} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TestDetailsSidebar = ({
    tests,
    onClose,
  }: {
    tests: any[];
    onClose: () => void;
  }) => {
    console.log("TestDetailsSidebar tests : ", tests);
    return (
      <div
        className={`test-details-sidebar ${showTestDetails ? "visible" : ""}`}
      >
        <div className="sidebar-header">
          <h4>Packages includes {tests?.length} tests</h4>
          <button onClick={onClose}>×</button>
        </div>
        <ul className="sidebar-content p-0">
          {tests?.map((test: any, index: number) => (
            <li
              key={index}
              className="test-item d-flex flex-row gap-4 align-items-center"
            >
              <span className="bullet-point">•</span>
              <div className="test-details w-full d-flex flex-row gap-2 justify-content-between align-items-center">
                <p>{test.service_name}</p>
                {test?.price?.actual_cost &&
                  test?.price?.discount_percentage > 0 && (
                    <div className="price-info d-flex flex-row gap-2">
                      <span className="text-decoration-line-through ms-2">
                        ₹{test?.price?.actual_cost}
                      </span>
                      {test?.price?.discounted_price && (
                        <span className="discounted-price">
                          ₹{test?.price?.discounted_price}
                        </span>
                      )}
                    </div>
                  )}
                {test?.price?.actual_cost &&
                  test?.price?.discount_percentage <= 0 && (
                    <div className="price-info ms-2">
                      <span>₹{test?.price?.actual_cost}</span>
                    </div>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const handleOpenWalletDetailsModal = () => {
    if (!walletInfo?.length) {
      toast.error("No wallet details found");
      return;
    }
    // Add functionality to view wallet details
    setShowWalletModal(true); // Updated to show modal
  };

  const handleAddToCart = async (body: any) => {
    console.log("handleAddToCart body : ", body);

    const res: any = await dispatch(addToPatientCart(body));
    console.log("addToPatientCart res : ", res?.payload);

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    if (res?.payload?.success) {
      toast.success("Items Added to Patient's Cart Successfully");
      handleBookCart();
      return;
    }
  };

  const handleBookCart = async () => {
    if (!selectedBooking?.user?.id) {
      return;
    }
    const body = {
      id: selectedBooking?.user?.id,
      payload: {
        bookings: [
          {
            useWallet: true,
            attachment_ids: null,
            isCod: true,
          },
        ],
      },
      merchant: "",
      domain_name: selectedBooking?.domain_name || "",
    };
    const res: any = await dispatch(bookPatientCartAPI(body));
    console.log("res bookPatientCartAPI: ", res);

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    if (res?.payload?.success) {
      toast.success("Booking Succesful");
      return;
    }
  };

  const SelectedOption = () => {
    const [docPrescribedOptions, setDocPrescribedOptions] = useState<any>({});
    const [raphaAssuredOptions, setRaphaAssuredOptions] = useState<any>({});

    const handlePlaceOrder = (type: string) => {
      // Add functionality to place order
      console.log("selectedAddress : ", selectedAddress);
      console.log("Place order clicked");
      if (!selectedAddress?.id) {
        toast.error("Please select an address");
        return;
      }
      if (type === "doctorPrescribedRx") {
        console.log("Doctor prescribed Rx clicked");
        console.log("docPrescribedOptions : ", docPrescribedOptions);
        const docMeds = [...brandedMedicines, ...genericMedicines];
        const docLabtests = [...labTests];
        console.log("docMeds : ", docMeds);
        console.log("docLabtests : ", docLabtests);

        if (
          !docPrescribedOptions?.dateTime ||
          docPrescribedOptions?.dateTime === "N/A"
        ) {
          toast.error("Please select a date and time");
          return;
        }
        if (
          !docPrescribedOptions?.vendorName ||
          docPrescribedOptions?.vendorName === "Not Selected"
        ) {
          toast.error("Default Vendor set to Raphacure selected Vendor");
          // return;
        }

        const docPrescribedBody = {
          id: selectedBooking?.user?.id,
          payload: {
            carts: [
              {
                virtual_type: null,
                test_codes: [...labTests]?.map(
                  (test: any) => test.id || test.service_code
                ),
                useWallet: true,
                vendor_id: selectedVendor?.id || "1",
                address_id: selectedAddress?.id,
                user_id: selectedBooking?.user?.id,
                collection_1_date: null,
                collection_1_slot: null,
                attachment_ids: null,
                section_key: "labtest",
                instant_booking: null,
              },
              {
                user_id: selectedBooking?.user?.id,
                useWallet: true,
                collection_1_date: null,
                collection_1_slot: null,
                medicines: [...brandedMedicines, ...genericMedicines]?.map(
                  (code: any) => ({
                    service_code:
                      code?.key ||
                      code?.id ||
                      code?.service_code ||
                      code?.originalData?.key,
                    count: code?.count || 1,
                  })
                ),
                attachment_ids: null,
                section_key: "pharmacy",
              },
            ],
          },
        };
        handleAddToCart(docPrescribedBody);
      } else if (type === "raphaAssuredPrice") {
        console.log("raphaAssuredOptions : ", raphaAssuredOptions);
        const raphaAssuredMeds = [...filteredSimilarMedicines];
        const raphaAssuredPkg = selectedPackages;
        console.log("raphaAssuredMeds : ", raphaAssuredMeds);
        console.log("raphaAssuredPkg : ", raphaAssuredPkg);

        if (!raphaAssuredPkg?.service_code) {
          toast.error("Please select a package");
          return;
        }

        if (!raphaAssuredMeds?.length) {
          toast.error("Please add medicines");
          return;
        }

        if (
          !raphaAssuredOptions?.dateTime ||
          raphaAssuredOptions?.dateTime === "N/A"
        ) {
          toast.error("Please select a date and time");
          return;
        }
        if (
          !raphaAssuredOptions?.vendorName ||
          raphaAssuredOptions?.vendorName === "Not Selected"
        ) {
          toast.error("Default Vendor set to Raphacure selected Vendor");
          return;
        }
        console.log("Rapha assured price clicked");
        console.log("raphaAssuredOptions : ", raphaAssuredOptions);
        const raphaAssuredBody = {
          id: selectedBooking?.user?.id,
          payload: {
            carts: [
              {
                virtual_type: null,
                package_code: raphaAssuredPkg?.service_code,
                useWallet: true,
                vendor_id: selectedVendor?.id || "1",
                address_id: selectedAddress?.id,
                user_id: selectedBooking?.user?.id,
                collection_1_date: null,
                collection_1_slot: null,
                attachment_ids: null,
                section_key: "labtest",
                instant_booking: null,
              },
              {
                user_id: selectedBooking?.user?.id,
                useWallet: true,
                collection_1_date: null,
                collection_1_slot: null,
                medicines: [...raphaAssuredMeds]?.map((code: any) => ({
                  service_code:
                    code?.key ||
                    code?.id ||
                    code?.service_code ||
                    code?.originalData?.key,
                  count: code?.count || 1,
                })),
                attachment_ids: null,
                section_key: "pharmacy",
              },
            ],
          },
        };
        handleAddToCart(raphaAssuredBody);
      }
    };

    const formatDateTime = (isoDateString: string | null) => {
      if (!isoDateString) return "N/A";
      const date = new Date(isoDateString);
      const timeString = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const formattedDate = date
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        })
        .replace(/\//g, "/");
      return `${timeString} | ${formattedDate}`;
    };

    useEffect(() => {
      try {
        // Calculate wallet amount from walletInfo
        const relevantWalletTypes = [
          "ctmri_tests",
          "diagnostic_tests",
          "pharmacy",
        ];
        const walletAmount =
          walletInfo
            ?.filter((wallet: any) => relevantWalletTypes.includes(wallet.type))
            ?.reduce((sum: number, wallet: any) => {
              if (wallet.wallet_type === "wallet_amount" && wallet.amount) {
                return sum + Number(wallet.amount);
              }
              return sum;
            }, 0) || 0;

        // Calculate doctor prescribed options with fallbacks
        const docMedicines = [
          ...(brandedMedicines || []),
          ...(genericMedicines || []),
        ];
        const docTests = labTests || [];
        const docTotalPrice =
          docMedicines.reduce(
            (sum, med: any) => sum + (Number(med?.price) || 0),
            0
          ) +
          docTests.reduce(
            (sum, test: any) => sum + (Number(test?.price) || 0),
            0
          );

        setDocPrescribedOptions({
          vendorName: selectedVendor?.name || "Not Selected",
          dateTime: formatDateTime(selectedDate),
          type: "doctorPrescribedRx",
          medicineCount: docMedicines.length,
          diagnosticsCount: docTests.length,
          mrp: 0.0,
          discountedPrice: docTotalPrice.toFixed(2),
          walletAmount: walletAmount,
          pendingAmount: Math.max(0, docTotalPrice - walletAmount).toFixed(2),
          prescriptionNumber: "01",
        });

        // Calculate rapha assured options with fallbacks
        const rapMedicines = filteredSimilarMedicines || [];
        const rapTests = selectedPackages?.tests || [];
        const rapActualCost =
          rapMedicines.reduce(
            (sum, med: any) => sum + (Number(med?.actual_cost) || 0),
            0
          ) + (Number(selectedPackages?.actual_cost) || 0);
        const rapDiscountedPrice =
          rapMedicines.reduce(
            (sum, med: any) => sum + (Number(med?.price) || 0),
            0
          ) + (Number(selectedPackages?.discounted_price) || 0);

        setRaphaAssuredOptions({
          vendorName: selectedVendor?.name || "Not Selected",
          dateTime: formatDateTime(selectedDate),
          type: "raphaAssuredPrice",
          medicineCount: rapMedicines.length,
          diagnosticsCount: rapTests.length,
          mrp: rapActualCost.toFixed(2),
          discountedPrice: rapDiscountedPrice.toFixed(2),
          walletAmount: walletAmount,
          pendingAmount: Math.max(0, rapDiscountedPrice - walletAmount).toFixed(
            2
          ),
          prescriptionNumber: "02",
        });
      } catch (error) {
        console.error("Error calculating prescription options:", error);
        // Set fallback values if calculation fails
        setDocPrescribedOptions({
          vendorName: "Error loading data",
          dateTime: formatDateTime(selectedDate),
          type: "doctorPrescribedRx",
          medicineCount: 0,
          diagnosticsCount: 0,
          mrp: 0.0,
          discountedPrice: "0.00",
          walletAmount: 0,
          pendingAmount: 0,
          prescriptionNumber: "01",
        });
        setRaphaAssuredOptions({
          vendorName: "Error loading data",
          dateTime: formatDateTime(selectedDate),
          type: "raphaAssuredPrice",
          medicineCount: 0,
          diagnosticsCount: 0,
          mrp: "0.00",
          discountedPrice: "0.00",
          walletAmount: 0,
          pendingAmount: 0,
          prescriptionNumber: "02",
        });
      }
    }, [
      selectedDate,
      selectedVendor?.name,
      brandedMedicines,
      genericMedicines,
      labTests,
      filteredSimilarMedicines,
      selectedPackages,
      walletInfo,
    ]);

    return (
      <div className="selectedOption">
        <PrescriptionCard
          doctorName={docPrescribedOptions?.vendorName}
          dateTime={docPrescribedOptions?.dateTime}
          type={docPrescribedOptions?.type}
          medicineCount={docPrescribedOptions?.medicineCount}
          diagnosticsCount={docPrescribedOptions?.diagnosticsCount}
          mrp={parseFloat(docPrescribedOptions?.mrp || 0)}
          discountedPrice={parseFloat(
            docPrescribedOptions?.discountedPrice || 0
          )}
          walletAmount={parseFloat(docPrescribedOptions?.walletAmount || 0)}
          pendingAmount={parseFloat(docPrescribedOptions?.pendingAmount || 0)}
          prescriptionNumber={docPrescribedOptions?.prescriptionNumber}
          onViewDetails={handleOpenWalletDetailsModal}
          onPlaceOrder={() => {
            handlePlaceOrder(docPrescribedOptions?.type);
          }}
          walletInfo={walletInfo}
        />
        <PrescriptionCard
          doctorName={raphaAssuredOptions?.vendorName}
          dateTime={raphaAssuredOptions?.dateTime}
          type={raphaAssuredOptions?.type}
          medicineCount={raphaAssuredOptions?.medicineCount}
          diagnosticsCount={raphaAssuredOptions?.diagnosticsCount}
          mrp={parseFloat(raphaAssuredOptions?.mrp || 0)}
          discountedPrice={parseFloat(
            raphaAssuredOptions?.discountedPrice || 0
          )}
          walletAmount={parseFloat(raphaAssuredOptions?.walletAmount || 0)}
          pendingAmount={parseFloat(raphaAssuredOptions?.pendingAmount || 0)}
          prescriptionNumber={raphaAssuredOptions?.prescriptionNumber}
          onViewDetails={handleOpenWalletDetailsModal}
          onPlaceOrder={() => {
            handlePlaceOrder(raphaAssuredOptions?.type);
          }}
          walletInfo={walletInfo}
        />
        {walletInfo && (
          <WalletCostBreakdownModal
            show={showWalletModal}
            handleClose={handleCloseWalletDetailsModal}
            walletInfo={walletInfo}
            docBrandedMedicines={brandedMedicines}
            docGenericMedicines={genericMedicines}
            docLabTests={labTests}
            raphaSimilarMedicines={filteredSimilarMedicines}
            raphaPackage={selectedPackages}
            docOverallPendingAmount={
              docPrescribedOptions?.pendingAmount || "0.00"
            }
            raphaOverallPendingAmount={
              raphaAssuredOptions?.pendingAmount || "0.00"
            }
          />
        )}
      </div>
    );
  };

  return (
    <AdminEPrescriptionStyled>
      <UserInfo />
      <DoctorPrescribedRx />
      <RaphacureAssuredPrice />
      <SelectedOption />

      {showTestDetails && (
        <TestDetailsSidebar
          tests={selectedTestDetails}
          onClose={() => setShowTestDetails(false)}
        />
      )}

      {/* Modals */}

      <ChangeVendorsModal
        selectedVendor={selectedVendor}
        setSelectedVendor={setSelectedVendor}
        vendors={selectedPkgVendors}
        onClose={() => setChangeVendorsModalVisible(false)}
        visible={changeVendorsModalVisible}
        allAddress={allAddress}
        selectedPackages={selectedPackages}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />

      <EditMedicineTable
        medicines={editableMedicines}
        modifiedMedicines={modifiedMedicines}
        onIncrease={handleIncreaseCount}
        onDecrease={handleDecreaseCount}
        onDelete={handleDeleteMedicine}
        onCountChange={(key, count) => handleMedicineChange(key, count)}
        onReset={handleResetMedicine}
        onSave={handleSaveEditedMedicines}
        onCancel={() => setEditMedicinesModalVisible(false)}
        modalVisible={editMedicinesModalVisible}
        setModalVisible={setEditMedicinesModalVisible}
        totalPrice={editableMedicines.reduce(
          (sum, med: any) => sum + (med?.price || 0) * (med?.count || 1),
          0
        )}
      />
      <EditLabtestTable
        labTests={modifiedLabTests}
        modifiedTests={modifiedLabTests}
        onDelete={handleDeleteTest}
        onReset={handleResetTest}
        onSave={handleSaveTests}
        onCancel={handleCancelTests}
        modalVisible={labTestModalVisible}
        setModalVisible={setLabTestModalVisible}
        totalPrice={modifiedLabTests.reduce(
          (sum, test) => sum + (test?.price || 0),
          0
        )}
      />
    </AdminEPrescriptionStyled>
  );
};

export default AdminEPrescription;
