import React, { useState } from "react";
import toast from "react-hot-toast";
import { Minus, Maximize2 } from "lucide-react";
import CustomModal from "../../components/custom/modal/CustomModal/CustomModal";

// Define types for better TypeScript support
type WorkflowStep =
  | "vein_spy"
  | "capture_order"
  | "document_scanner"
  | "document_scan"
  | "order_complete"
  | "selfie_capture"
  | "tube_photos"
  | "trf_upload"
  | null;
type DocumentType = "trf" | "camp" | null;
type ModalType = "gps" | "lead_details" | null;
type ServiceType = "Home collection" | "Onsite";
type LeadStatus =
  | "Pending to accept"
  | "Accepted"
  | "Active"
  | "Completed"
  | "Rejected";
type PaymentType = "Credit" | "Cash";

// Comprehensive tube types configuration for medical sample collection
const TUBE_TYPES = [
  // Blood Collection Tubes
  {
    name: "EDTA (Purple)",
    color: "#8B5CF6",
    description: "For CBC, blood count, and hematology tests",
    category: "Blood Collection",
    volume: "2-5ml",
    additives: "EDTA K2/K3",
  },
  {
    name: "SST (Gold)",
    color: "#F59E0B",
    description: "For serum chemistry, hormones, and immunology",
    category: "Blood Collection",
    volume: "3-10ml",
    additives: "Clot activator + gel separator",
  },
  {
    name: "Fluoride (Gray)",
    color: "#6B7280",
    description: "For glucose, lactate, and alcohol testing",
    category: "Blood Collection",
    volume: "2-4ml",
    additives: "Sodium fluoride + potassium oxalate",
  },
  {
    name: "Plain (Red)",
    color: "#EF4444",
    description: "For serum tests without gel separator",
    category: "Blood Collection",
    volume: "3-10ml",
    additives: "Clot activator (no gel)",
  },
  {
    name: "Citrate (Blue)",
    color: "#3B82F6",
    description: "For coagulation studies (PT, PTT, INR)",
    category: "Blood Collection",
    volume: "2.7ml",
    additives: "Sodium citrate 3.2%",
  },
  {
    name: "Heparin (Green)",
    color: "#10B981",
    description: "For plasma chemistry and blood gas analysis",
    category: "Blood Collection",
    volume: "2-10ml",
    additives: "Lithium/sodium heparin",
  },
  {
    name: "Black - ESR",
    color: "#1F2937",
    description: "For ESR (Erythrocyte Sedimentation Rate)",
    category: "Blood Collection",
    volume: "2ml",
    additives: "Sodium citrate 3.8%",
  },
  {
    name: "Blood Culture",
    color: "#DC2626",
    description: "For bacterial and fungal culture testing",
    category: "Culture",
    volume: "8-10ml",
    additives: "Culture medium",
  },
  // Specialized Collection Containers
  {
    name: "Urine Container",
    color: "#F59E0B",
    description: "For urine sample collection and analysis",
    category: "Urine Collection",
    volume: "30-100ml",
    additives: "Sterile container",
  },
  {
    name: "Stool Container",
    color: "#92400E",
    description: "For stool sample collection and analysis",
    category: "Stool Collection",
    volume: "5-10g",
    additives: "Sterile container with preservative",
  },
  {
    name: "Sputum Container",
    color: "#059669",
    description: "For sputum and respiratory sample collection",
    category: "Respiratory",
    volume: "5-10ml",
    additives: "Sterile wide-mouth container",
  },
  {
    name: "Swab (Viral Transport)",
    color: "#7C3AED",
    description: "For viral sample collection (COVID, flu, etc.)",
    category: "Viral Collection",
    volume: "1-3ml",
    additives: "Viral transport medium",
  },
  // Specialized Blood Tubes
  {
    name: "Trace Elements (Navy)",
    color: "#1E40AF",
    description: "For trace element analysis (zinc, copper, etc.)",
    category: "Blood Collection",
    volume: "3-6ml",
    additives: "Metal-free tube",
  },
  {
    name: "Lead (Tan)",
    color: "#A16207",
    description: "For lead level testing",
    category: "Blood Collection",
    volume: "3ml",
    additives: "EDTA K2 (lead-free)",
  },
  {
    name: "Glucose Tolerance (Yellow)",
    color: "#EAB308",
    description: "For glucose tolerance testing",
    category: "Blood Collection",
    volume: "2ml",
    additives: "Sodium fluoride",
  },
];

interface PatientDetails {
  name: string;
  age: number;
  gender: string;
  contactDetails: string;
  altContactDetails: string;
  completeAddress: string;
  landmark: string;
  pincode: string;
}

interface TestDetails {
  testName: string;
  packageName: string;
  tubeDetails: string;
  testCode: string;
  vaccutainerTubeDetails: {
    type: string;
    color: string;
    volume: string;
    additives: string;
    code: string;
  };
}

interface HomeCollectionDetails {
  patientDetails: PatientDetails;
  timeAndDate: string;
  testDetails: TestDetails;
  paymentType: PaymentType;
  sampleDropLocation: string;
  specialInstruction: string;
}

interface OnsiteDetails {
  campName: string;
  location: string;
  date: string;
  timings: string;
  tubes: string[];
}

interface CorporateDetails {
  companyName: string;
  completeAddress: string;
  buildingFloor: string;
  roomHall: string;
  landmarks: string;
  parkingInstructions: string;
  gpsCoordinates: string;
  primarySpoc: {
    name: string;
    designation: string;
    department: string;
    mobile: string;
    email: string;
  };
  secondarySpoc: {
    name: string;
    designation: string;
    department: string;
    mobile: string;
    email: string;
  };
}

interface PackageDetails {
  testName: string;
  testCode: string;
  packageType: string;
  sampleType: string;
  fasting: string;
  vaccutainerTube: {
    type: string;
    color: string;
    volume: string;
    additives: string;
    code: string;
  };
  instructions: string;
}

interface Lead {
  id: string;
  serviceType: ServiceType;
  location: string;
  priority: string;
  status: LeadStatus;
  time: string;
  date: string;
  pincode: string;
  spoc: string;
  contact: string;
  corporateDetails: CorporateDetails;
  packageDetails: PackageDetails;
  homeCollectionDetails?: HomeCollectionDetails;
  onsiteDetails?: OnsiteDetails;
}

interface CompletedOrder {
  id: string;
  serviceType: string;
  location: string;
  patientName: string;
  documentType: DocumentType;
  timestamp: Date;
  veinSpyUsed: boolean;
  tubesCollected: string[];
  notes: string;
}

const HealthcareVendorSystem = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [acceptedLead, setAcceptedLead] = useState<Lead | null>(null);
  const [currentWorkflowStep, setCurrentWorkflowStep] =
    useState<WorkflowStep>(null);
  const [veinSpyEnabled, setVeinSpyEnabled] = useState(false);
  const [selectedTubes, setSelectedTubes] = useState<string[]>([]);
  const [captureNotes, setCaptureNotes] = useState("");
  const [completedOrders, setCompletedOrders] = useState<CompletedOrder[]>([]);
  const [selectedDocumentType, setSelectedDocumentType] =
    useState<DocumentType>(null);
  const [patientName, setPatientName] = useState("");

  // Panel state
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Mock data (updated with enhanced structure)
  const mockLeads = [
    {
      id: "LD001",
      serviceType: "Home collection" as ServiceType,
      location: "Koramangala",
      priority: "High",
      status: "Pending to accept" as LeadStatus,
      time: "09:30 AM",
      date: "2024-01-15",
      pincode: "560095",
      spoc: "John Doe",
      contact: "+91 98765 43250",
      corporateDetails: {
        companyName: "TechCorp Solutions Pvt Ltd",
        completeAddress:
          "Plot No. 45, Sector 18, Cyber City\nKoramangala, Karnataka - 560095\nIndia",
        buildingFloor: "Tower A, 3rd Floor",
        roomHall: "Conference Hall A & B",
        landmarks: "Near Metro Station, Forum Mall",
        parkingInstructions: "Basement Level 2, Visitor Parking",
        gpsCoordinates: "12.9352°N, 77.6245°E",
        primarySpoc: {
          name: "Mr. Rajesh Kumar",
          designation: "HR Manager",
          department: "Human Resources",
          mobile: "+91 98765 43210",
          email: "rajesh.kumar@techcorp.com",
        },
        secondarySpoc: {
          name: "Ms. Priya Sharma",
          designation: "Admin Executive",
          department: "Administration",
          mobile: "+91 87654 32109",
          email: "priya.sharma@techcorp.com",
        },
      },
      packageDetails: {
        testName: "Complete Blood Count (CBC)",
        testCode: "CBC001",
        packageType: "Basic Health Checkup",
        sampleType: "Blood",
        fasting: "Not Required",
        vaccutainerTube: {
          type: "EDTA Tube",
          color: "Purple/Lavender",
          volume: "3-5 ml",
          additives: "K2EDTA",
          code: "EDT-001",
        },
        instructions:
          "Collect sample in morning hours. Store at room temperature.",
      },
      homeCollectionDetails: {
        patientDetails: {
          name: "Rajesh Kumar",
          age: 35,
          gender: "Male",
          contactDetails: "+91 98765 43210",
          altContactDetails: "+91 87654 32109",
          completeAddress:
            "Plot No. 45, Sector 18, Cyber City, Koramangala, Karnataka",
          landmark: "Near Metro Station, Forum Mall",
          pincode: "560095",
        },
        timeAndDate: "2024-01-15 09:30 AM",
        testDetails: {
          testName: "Complete Blood Count (CBC)",
          packageName: "Basic Health Checkup",
          tubeDetails: "EDTA Tube - Purple/Lavender",
          testCode: "CBC001",
          vaccutainerTubeDetails: {
            type: "EDTA Tube",
            color: "Purple/Lavender",
            volume: "3-5 ml",
            additives: "K2EDTA",
            code: "EDT-001",
          },
        },
        paymentType: "Credit" as PaymentType,
        sampleDropLocation: "TechCorp Lab Center, Koramangala",
        specialInstruction:
          "Patient is fasting. Collect sample in morning hours.",
      },
    },
    {
      id: "LD002",
      serviceType: "Onsite" as ServiceType,
      location: "Whitefield",
      priority: "Medium",
      status: "Accepted" as LeadStatus,
      time: "10:15 AM",
      date: "2024-01-15",
      pincode: "560066",
      spoc: "Dr. Emergency Coordinator",
      contact: "+91 98765 43260",
      corporateDetails: {
        companyName: "Emergency Medical Center",
        completeAddress:
          "ITPL Main Road, Whitefield\nBangalore, Karnataka - 560066\nIndia",
        buildingFloor: "Ground Floor, Emergency Wing",
        roomHall: "Emergency Bay 1",
        landmarks: "Near ITPL, Prestige Tech Park",
        parkingInstructions: "Emergency Vehicle Bay",
        gpsCoordinates: "12.9698°N, 77.7500°E",
        primarySpoc: {
          name: "Dr. Emergency Coordinator",
          designation: "Emergency Physician",
          department: "Emergency Services",
          mobile: "+91 98765 43260",
          email: "emergency@medcenter.com",
        },
        secondarySpoc: {
          name: "Nurse Station",
          designation: "Head Nurse",
          department: "Emergency Care",
          mobile: "+91 87654 32109",
          email: "nursing@medcenter.com",
        },
      },
      packageDetails: {
        testName: "Corporate Health Camp",
        testCode: "CHC001",
        packageType: "Corporate Screening",
        sampleType: "Blood",
        fasting: "Required",
        vaccutainerTube: {
          type: "Multiple Tubes",
          color: "Various",
          volume: "Multiple",
          additives: "Various",
          code: "MUL-001",
        },
        instructions:
          "Corporate health screening camp. Multiple tests required.",
      },
      onsiteDetails: {
        campName: "Annual Health Screening Camp 2024",
        location: "ITPL Main Road, Whitefield, Bangalore",
        date: "2024-01-15",
        timings: "09:00 AM - 05:00 PM",
        tubes: [
          "EDTA (Purple)",
          "SST (Gold)",
          "Fluoride (Gray)",
          "Plain (Red)",
          "Urine Container",
        ],
      },
    },
    {
      id: "LD003",
      serviceType: "Home collection" as ServiceType,
      location: "Indiranagar",
      priority: "High",
      status: "Active" as LeadStatus,
      time: "11:00 AM",
      date: "2024-01-15",
      pincode: "560038",
      spoc: "Priya Sharma",
      contact: "+91 98765 43270",
      corporateDetails: {
        companyName: "Individual Patient",
        completeAddress: "123 Main Street, Indiranagar, Bangalore",
        buildingFloor: "2nd Floor",
        roomHall: "Apartment 2B",
        landmarks: "Near 100 Feet Road",
        parkingInstructions: "Street parking available",
        gpsCoordinates: "12.9719°N, 77.6412°E",
        primarySpoc: {
          name: "Priya Sharma",
          designation: "Patient",
          department: "N/A",
          mobile: "+91 98765 43270",
          email: "priya.sharma@email.com",
        },
        secondarySpoc: {
          name: "N/A",
          designation: "N/A",
          department: "N/A",
          mobile: "N/A",
          email: "N/A",
        },
      },
      packageDetails: {
        testName: "Lipid Profile",
        testCode: "LP001",
        packageType: "Cardiac Health",
        sampleType: "Blood",
        fasting: "Required - 12 hours",
        vaccutainerTube: {
          type: "SST Tube",
          color: "Gold",
          volume: "5 ml",
          additives: "Clot Activator",
          code: "SST-001",
        },
        instructions:
          "Patient must fast for 12 hours before sample collection.",
      },
      homeCollectionDetails: {
        patientDetails: {
          name: "Priya Sharma",
          age: 28,
          gender: "Female",
          contactDetails: "+91 98765 43270",
          altContactDetails: "+91 87654 32110",
          completeAddress: "123 Main Street, Indiranagar, Bangalore, Karnataka",
          landmark: "Near 100 Feet Road",
          pincode: "560038",
        },
        timeAndDate: "2024-01-15 11:00 AM",
        testDetails: {
          testName: "Lipid Profile",
          packageName: "Cardiac Health Package",
          tubeDetails: "SST Tube - Gold",
          testCode: "LP001",
          vaccutainerTubeDetails: {
            type: "SST Tube",
            color: "Gold",
            volume: "5 ml",
            additives: "Clot Activator",
            code: "SST-001",
          },
        },
        paymentType: "Cash" as PaymentType,
        sampleDropLocation: "Central Lab, Indiranagar",
        specialInstruction:
          "Patient has been fasting for 12 hours. Handle with care.",
      },
    },
  ];

  // VeinSpy Modal using CustomModal
  const VeinSpyModal = () => (
    <CustomModal
      open={currentWorkflowStep === "vein_spy"}
      handleClose={() => setCurrentWorkflowStep(null)}
      title="🔍 Vein Spy Scanner"
      width="500px"
    >
      <CustomModal.Body>
        <div className="text-center">
          <div className="bg-blue-300 h-[200px] rounded-lg flex items-center justify-center mb-5 border-[3px] border-dashed border-slate-800">
            <div className="text-center">
              <div className="text-5xl mb-2.5">🔍</div>
              <div className="font-bold text-slate-800">
                Vein Scanning Active
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Position device over injection site
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-4">
            <button
              onClick={() => toast.success("Vein scan completed successfully")}
              className="bg-emerald-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-emerald-400 transition-colors"
            >
              ✅ Scan Complete
            </button>
            <button
              onClick={() => toast("Retrying vein scan...")}
              className="bg-yellow-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-yellow-400 transition-colors"
            >
              🔄 Retry Scan
            </button>
          </div>

          <button
            onClick={() => setCurrentWorkflowStep(null)}
            className="bg-slate-800 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-slate-700 transition-colors"
          >
            Continue to Sample Collection
          </button>
        </div>
      </CustomModal.Body>
    </CustomModal>
  );

  // Selfie Capture Modal
  const SelfieModal = () => (
    <CustomModal
      open={currentWorkflowStep === "selfie_capture"}
      handleClose={() => setCurrentWorkflowStep(null)}
      title="🤳 Phlebo Reached - Capture Selfie"
      width="600px"
    >
      <CustomModal.Body>
        {/* Selfie Capture Section */}
        <div className="border-[3px] border-dashed border-gray-300 rounded-lg p-10 text-center mb-8">
          <div className="text-5xl mb-4 text-gray-300">🤳</div>
          <h4 className="text-slate-800 m-0 mb-2.5 text-lg font-semibold">
            Capture Selfie
          </h4>
          <p className="text-gray-600 mb-5">
            Take a selfie to confirm you have reached the location
          </p>
          <button
            onClick={() => toast("Camera opened for selfie capture")}
            className="bg-blue-500 text-white border-none py-3 px-6 rounded-lg cursor-pointer font-bold text-sm hover:bg-blue-600 transition-colors"
          >
            📸 Open Camera
          </button>
        </div>

        {/* Location Confirmation */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">
            Location Confirmation
          </label>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              📍 Current Location: {acceptedLead?.location || "Unknown"}
            </p>
            <p className="text-sm text-gray-700">
              🏠 Address:{" "}
              {acceptedLead?.corporateDetails?.completeAddress ||
                acceptedLead?.homeCollectionDetails?.patientDetails
                  ?.completeAddress ||
                "Not available"}
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">Notes</label>
          <textarea
            value={captureNotes}
            onChange={(e) => setCaptureNotes(e.target.value)}
            placeholder="Add any notes about your arrival..."
            className="w-full min-h-[80px] p-2.5 border-2 border-gray-300 rounded-md text-sm resize-y focus:border-blue-500 focus:outline-none"
          />
        </div>
      </CustomModal.Body>

      <CustomModal.Footer>
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => setCurrentWorkflowStep(null)}
            className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.success(
                "Selfie captured successfully! Phlebo arrival confirmed."
              );
              setCurrentWorkflowStep(null);
            }}
            className="bg-emerald-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-emerald-400 transition-colors"
          >
            ✅ Confirm Arrival
          </button>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );

  // Tube Photos Upload Modal
  const TubePhotosModal = () => (
    <CustomModal
      open={currentWorkflowStep === "tube_photos"}
      handleClose={() => setCurrentWorkflowStep(null)}
      title="🧪 Upload Tube Photos"
      width="700px"
    >
      <CustomModal.Body>
        {/* Photo Upload Section */}
        <div className="border-[3px] border-dashed border-gray-300 rounded-lg p-10 text-center mb-8">
          <div className="text-5xl mb-4 text-gray-300">📷</div>
          <h4 className="text-slate-800 m-0 mb-2.5 text-lg font-semibold">
            Upload Tube Photos
          </h4>
          <p className="text-gray-600 mb-5">
            Take photos of all collected sample tubes
          </p>
          <button
            onClick={() => toast("Camera opened for tube photo capture")}
            className="bg-blue-500 text-white border-none py-3 px-6 rounded-lg cursor-pointer font-bold text-sm hover:bg-blue-600 transition-colors"
          >
            📸 Capture Tube Photos
          </button>
        </div>

        {/* Required Tubes Checklist */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-4">
            Required Sample Collection Containers
          </label>
          <div className="grid grid-cols-1 gap-3">
            {TUBE_TYPES.map((tube) => (
              <div
                key={tube.name}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tube.color }}
                  ></div>
                  <div>
                    <span className="font-medium text-sm">{tube.name}</span>
                    <p className="text-xs text-gray-600 m-0">
                      {tube.description}
                    </p>
                    <p className="text-xs text-gray-500 m-0">
                      {tube.volume} • {tube.additives}
                    </p>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTubes.includes(tube.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTubes([...selectedTubes, tube.name]);
                      } else {
                        setSelectedTubes(
                          selectedTubes.filter((t) => t !== tube.name)
                        );
                      }
                    }}
                    className="transform scale-125 accent-blue-500"
                  />
                  <span className="text-xs text-gray-600">Collected</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">
            Collection Notes
          </label>
          <textarea
            value={captureNotes}
            onChange={(e) => setCaptureNotes(e.target.value)}
            placeholder="Add notes about sample collection..."
            className="w-full min-h-[80px] p-2.5 border-2 border-gray-300 rounded-md text-sm resize-y focus:border-blue-500 focus:outline-none"
          />
        </div>
      </CustomModal.Body>

      <CustomModal.Footer>
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => setCurrentWorkflowStep(null)}
            className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.success("Tube photos uploaded successfully!");
              setCurrentWorkflowStep("trf_upload");
            }}
            className="bg-emerald-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-emerald-400 transition-colors"
          >
            📤 Upload Photos
          </button>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );

  // TRF Upload Modal
  const TRFUploadModal = () => (
    <CustomModal
      open={currentWorkflowStep === "trf_upload"}
      handleClose={() => setCurrentWorkflowStep(null)}
      title="📋 Upload TRF (Test Requisition Form)"
      width="600px"
    >
      <CustomModal.Body>
        {/* TRF Upload Section */}
        <div className="border-[3px] border-dashed border-gray-300 rounded-lg p-10 text-center mb-8">
          <div className="text-5xl mb-4 text-gray-300">📋</div>
          <h4 className="text-slate-800 m-0 mb-2.5 text-lg font-semibold">
            Upload TRF Document
          </h4>
          <p className="text-gray-600 mb-5">
            Capture or upload the Test Requisition Form
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => toast("Camera opened for TRF capture")}
              className="bg-blue-500 text-white border-none py-3 px-6 rounded-lg cursor-pointer font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              📸 Capture TRF
            </button>
            <button
              onClick={() => toast("File picker opened for TRF upload")}
              className="bg-green-500 text-white border-none py-3 px-6 rounded-lg cursor-pointer font-bold text-sm hover:bg-green-600 transition-colors"
            >
              📁 Upload File
            </button>
          </div>
        </div>

        {/* TRF Information */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">
            TRF Information
          </label>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              📄 Document Type: Test Requisition Form
            </p>
            <p className="text-sm text-blue-800 mb-2">
              🆔 Lead ID: {acceptedLead?.id || "Unknown"}
            </p>
            <p className="text-sm text-blue-800">
              👤 Patient:{" "}
              {acceptedLead?.homeCollectionDetails?.patientDetails?.name ||
                acceptedLead?.corporateDetails?.companyName ||
                "Unknown"}
            </p>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">
            TRF Notes
          </label>
          <textarea
            value={captureNotes}
            onChange={(e) => setCaptureNotes(e.target.value)}
            placeholder="Add notes about the TRF document..."
            className="w-full min-h-[80px] p-2.5 border-2 border-gray-300 rounded-md text-sm resize-y focus:border-blue-500 focus:outline-none"
          />
        </div>
      </CustomModal.Body>

      <CustomModal.Footer>
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => setCurrentWorkflowStep(null)}
            className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.success(
                "TRF uploaded successfully! Sample collection workflow completed."
              );
              setCurrentWorkflowStep("order_complete");
            }}
            className="bg-emerald-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-emerald-400 transition-colors"
          >
            📤 Upload TRF
          </button>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );

  // Capture Order Photo Modal using CustomModal
  const CaptureOrderModal = () => (
    <CustomModal
      open={currentWorkflowStep === "capture_order"}
      handleClose={() => setCurrentWorkflowStep(null)}
      title="📸 Capture Order Photo"
      width="600px"
    >
      <CustomModal.Body>
        {/* Photo Capture Section */}
        <div className="border-[3px] border-dashed border-gray-300 rounded-lg p-10 text-center mb-8">
          <div className="text-5xl mb-4 text-gray-300">📷</div>
          <h4 className="text-slate-800 m-0 mb-2.5 text-lg font-semibold">
            Take Photo
          </h4>
          <p className="text-gray-600 mb-5">
            Capture order details or delivery confirmation
          </p>
          <button
            onClick={() => toast("Camera opened for photo capture")}
            className="bg-blue-500 text-white border-none py-3 px-6 rounded-lg cursor-pointer font-bold text-sm hover:bg-blue-600 transition-colors"
          >
            📸 Open Camera
          </button>
        </div>

        {/* Service Type */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">
            Service Type
          </label>
          <select className="w-full p-2.5 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none">
            <option>Lab Test - Home Collection</option>
            <option>Emergency Sample Collection</option>
            <option>Corporate Health Camp</option>
          </select>
        </div>

        {/* Blood Collection Tubes */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-4">
            Blood Collection Tubes Required
          </label>
          <div className="grid grid-cols-2 gap-4">
            {TUBE_TYPES.filter(
              (tube) => tube.category === "Blood Collection"
            ).map((tube) => (
              <label
                key={tube.name}
                className={`flex items-center gap-2 cursor-pointer p-2 rounded-md transition-colors ${
                  selectedTubes.includes(tube.name)
                    ? "bg-blue-500 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTubes.includes(tube.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTubes([...selectedTubes, tube.name]);
                    } else {
                      setSelectedTubes(
                        selectedTubes.filter((t) => t !== tube.name)
                      );
                    }
                  }}
                  className="transform scale-125 accent-blue-500"
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tube.color }}
                ></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{tube.name}</span>
                  <span className="text-xs text-gray-600">
                    {tube.volume} - {tube.additives}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="font-bold text-slate-800 block mb-2">Notes</label>
          <textarea
            value={captureNotes}
            onChange={(e) => setCaptureNotes(e.target.value)}
            placeholder="Add any additional notes about the capture..."
            className="w-full min-h-[80px] p-2.5 border-2 border-gray-300 rounded-md text-sm resize-y focus:border-blue-500 focus:outline-none"
          />
        </div>
      </CustomModal.Body>

      <CustomModal.Footer>
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => setCurrentWorkflowStep(null)}
            className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.success("Order photo captured and saved successfully!");
              setCurrentWorkflowStep("document_scan");
            }}
            className="bg-emerald-300 text-slate-800 border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-emerald-400 transition-colors"
          >
            💾 Save Capture
          </button>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );

  // AI Document Scanner Modal
  const DocumentScannerModal = () => (
    <CustomModal
      open={currentWorkflowStep === "document_scanner"}
      handleClose={() => {
        setCurrentWorkflowStep(null);
        setSelectedDocumentType(null);
        setPatientName("");
      }}
      title="🤖 AI Document Scanner"
      width="550px"
    >
      <CustomModal.Body>
        {!selectedDocumentType ? (
          /* Document Type Selection */
          <>
            <h4 className="text-slate-800 mb-5 text-center text-lg font-semibold">
              Select Document Type to Scan
            </h4>
            <div className="grid grid-cols-2 gap-5">
              {/* TRF Forms */}
              <div
                onClick={() => setSelectedDocumentType("trf")}
                className="bg-blue-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-200 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-800"
              >
                <div className="text-5xl mb-4 text-slate-800">📋</div>
                <h4 className="text-slate-800 m-0 mb-2.5 font-semibold">
                  TRF Forms
                </h4>
                <p className="text-gray-600 text-sm m-0">
                  Test Request Forms and Lab Orders
                </p>
              </div>

              {/* Camp Sheets */}
              <div
                onClick={() => setSelectedDocumentType("camp")}
                className="bg-emerald-300 rounded-xl p-8 text-center cursor-pointer transition-all duration-200 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-800"
              >
                <div className="text-5xl mb-4 text-slate-800">👥</div>
                <h4 className="text-slate-800 m-0 mb-2.5 font-semibold">
                  Camp Sheets
                </h4>
                <p className="text-gray-600 text-sm m-0">
                  Corporate Health Camp Documents
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Scanning Interface */
          <>
            <div
              className="flex items-center gap-2.5 mb-5 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => setSelectedDocumentType(null)}
            >
              <span className="text-xl">←</span>
              <span className="text-slate-800 font-bold">
                Back to Document Selection
              </span>
            </div>

            <h4 className="text-slate-800 mb-4 text-center text-lg font-semibold">
              {selectedDocumentType === "trf"
                ? "📋 Scan TRF Form"
                : "👥 Scan Camp Sheet"}
            </h4>

            {/* Scan Section */}
            <div className="border-[3px] border-dashed border-gray-300 rounded-lg p-10 text-center mb-6">
              <div className="text-5xl mb-4 text-purple-600">
                {selectedDocumentType === "trf" ? "📄" : "👥"}
              </div>
              <h4 className="text-slate-800 m-0 mb-2.5 font-semibold">
                {selectedDocumentType === "trf"
                  ? "Scan TRF Form"
                  : "Scan Camp Sheet"}
              </h4>
              <p className="text-gray-600 mb-5 text-sm">
                AI will automatically extract data from your document
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => toast("Document scanning started...")}
                  className="bg-purple-600 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-purple-700 transition-colors"
                >
                  📱 Scan Document
                </button>
                <button
                  onClick={() => toast("File upload started...")}
                  className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
                >
                  📁 Upload File
                </button>
              </div>
            </div>

            {/* Patient Name Capture */}
            <div className="mb-6">
              <label className="font-bold text-slate-800 block mb-2">
                Patient Name / Contact Person *
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder={
                  selectedDocumentType === "trf"
                    ? "Enter patient name..."
                    : "Enter contact person name..."
                }
                className="w-full p-3 border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* AI Features Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="text-xl">🤖</div>
                <strong className="text-slate-800">AI OCR Features:</strong>
              </div>
              <p className="m-0 text-sm text-gray-700">
                Automatic text extraction, form field recognition, and data
                validation
              </p>
            </div>
          </>
        )}
      </CustomModal.Body>

      {selectedDocumentType && (
        <CustomModal.Footer>
          <button
            onClick={() => {
              setCurrentWorkflowStep(null);
              setSelectedDocumentType(null);
              setPatientName("");
            }}
            className="bg-gray-500 text-white border-none py-2.5 px-5 rounded-md cursor-pointer font-bold hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!patientName.trim()) {
                toast.error("Please enter the patient/contact person name");
                return;
              }

              if (!acceptedLead) {
                toast.error("No accepted lead found");
                return;
              }

              const completedOrder = {
                id: acceptedLead.id,
                serviceType: acceptedLead.serviceType,
                location: acceptedLead.location,
                patientName: patientName,
                documentType: selectedDocumentType,
                timestamp: new Date(),
                veinSpyUsed: veinSpyEnabled,
                tubesCollected: selectedTubes,
                notes: captureNotes,
              };

              setCompletedOrders((prev) => [completedOrder, ...prev]);
              toast.success(
                `Document processed successfully with AI! Order closed for ${patientName}`
              );
              setCurrentWorkflowStep("order_complete");
            }}
            disabled={!patientName.trim()}
            className={`${
              patientName.trim()
                ? "bg-purple-600 cursor-pointer hover:bg-purple-700"
                : "bg-gray-300 cursor-not-allowed"
            } text-white border-none py-2.5 px-5 rounded-md font-bold transition-colors`}
          >
            🤖 Process with AI
          </button>
        </CustomModal.Footer>
      )}
    </CustomModal>
  );

  // Order Complete Modal
  const OrderCompleteModal = () => (
    <CustomModal
      open={currentWorkflowStep === "order_complete"}
      handleClose={() => {
        setCurrentWorkflowStep(null);
        setAcceptedLead(null);
        setSelectedTubes([]);
        setCaptureNotes("");
        setVeinSpyEnabled(false);
        setSelectedDocumentType(null);
        setPatientName("");
      }}
      title="Order Completed Successfully!"
      width="500px"
    >
      <CustomModal.Body>
        <div className="text-center">
          <div className="text-7xl mb-5">🎉</div>
          <h2 className="text-slate-800 mb-4 text-2xl font-bold">
            Order Completed Successfully!
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            Sample collection and documentation completed for:
          </p>

          <div className="bg-yellow-300 rounded-lg p-4 mb-5">
            <h3 className="text-slate-800 m-0 mb-1 font-semibold">
              👤 {patientName || "Patient"}
            </h3>
            <p className="text-gray-600 m-0 text-sm">
              Lead ID: {acceptedLead?.id} | {acceptedLead?.location}
            </p>
          </div>

          <div className="bg-emerald-300 rounded-lg p-4 mb-6">
            <h4 className="text-slate-800 m-0 mb-2.5 font-semibold">
              Summary:
            </h4>
            <div className="text-sm text-gray-600 text-left">
              • Document Type:{" "}
              {selectedDocumentType === "trf" ? "TRF Forms" : "Camp Sheets"}
              <br />• Vein Spy: {veinSpyEnabled ? "Used" : "Not Required"}
              <br />• Tubes Collected:{" "}
              {selectedTubes.length > 0
                ? selectedTubes.join(", ")
                : "As per protocol"}
              <br />
              • Photos: Captured
              <br />• Documents: Scanned with AI
            </div>
          </div>
        </div>
      </CustomModal.Body>

      <CustomModal.Footer>
        <button
          onClick={() => {
            setCurrentWorkflowStep(null);
            setAcceptedLead(null);
            setSelectedTubes([]);
            setCaptureNotes("");
            setVeinSpyEnabled(false);
            setSelectedDocumentType(null);
            setPatientName("");
            toast.success(
              `Order successfully closed for ${patientName}. Returning to dashboard.`
            );
          }}
          className="bg-slate-800 text-white border-none py-4 px-8 rounded-lg cursor-pointer font-bold text-base hover:bg-slate-700 transition-colors"
        >
          🏠 Return to Dashboard
        </button>
      </CustomModal.Footer>
    </CustomModal>
  );

  // Workflow Control Panel
  const WorkflowControlPanel = () => {
    if (!acceptedLead) return null;

    return (
      <div
        className="fixed bg-[#252B61] rounded-xl text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-[1] select-none"
        style={{
          bottom: "20px",
          right: "20px",
          width: isMinimized ? "auto" : "280px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {/* Header with controls */}
        <div className="flex items-center justify-between p-3 border-b border-[#3A4374]">
          <div className="flex items-center gap-2">
            <h4 className="m-0 text-sm font-semibold">
              {`🚀 Active Lead: ${acceptedLead.id}`}
            </h4>
          </div>
          <button
            onClick={toggleMinimize}
            className="p-1 hover:bg-[#3A4374] rounded transition-colors"
            title={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minus size={16} />}
          </button>
        </div>

        {/* Content - only show when not minimized */}
        {!isMinimized && (
          <div className="p-4">
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => setCurrentWorkflowStep("selfie_capture")}
                className="bg-[#FF6B6B] text-white border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#FF5252] transition-colors"
              >
                🤳 Phlebo Reached - Capture Selfie
              </button>
              <button
                onClick={() => {
                  setVeinSpyEnabled(true);
                  setCurrentWorkflowStep("vein_spy");
                }}
                className="bg-[#92BDF6] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#7FAEF5] transition-colors"
              >
                🔍 Use Vein Spy (Optional)
              </button>
              <button
                onClick={() => setCurrentWorkflowStep("capture_order")}
                className="bg-[#F0DA69] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#EED558] transition-colors"
              >
                📸 Capture Order Photo
              </button>
              <button
                onClick={() => setCurrentWorkflowStep("tube_photos")}
                className="bg-[#4ECDC4] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#3DBEB5] transition-colors"
              >
                🧪 Upload Tube Photos
              </button>
              <button
                onClick={() => setCurrentWorkflowStep("trf_upload")}
                className="bg-[#45B7D1] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#34A8C2] transition-colors"
              >
                📋 Upload TRF
              </button>
              <button
                onClick={() => setCurrentWorkflowStep("document_scanner")}
                className="bg-[#A3DAC2] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#92CBB3] transition-colors"
              >
                📄 Scan Documents
              </button>
              <button
                onClick={() => setCurrentWorkflowStep("order_complete")}
                className="bg-[#E7C2D4] text-[#252B61] border-none py-2 px-4 rounded-md cursor-pointer text-xs font-bold hover:bg-[#DEB3C5] transition-colors"
              >
                ✅ Complete Order
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Detailed Lead Modal
  const LeadDetailModal = ({ lead }: { lead: Lead }) => (
    <CustomModal
      open={selectedLead !== null}
      handleClose={() => setSelectedLead(null)}
      title={
        <div>
          <h2 className="m-0 mb-1">Lead Details - {lead.id}</h2>
          <p className="m-0 opacity-80">
            {lead.serviceType} | {lead.date} | {lead.pincode}
          </p>
        </div>
      }
      width="900px"
      headerClassName="bg-[#252B61] text-white px-5 py-5 rounded-t-xl"
    >
      <CustomModal.Body>
        {lead.serviceType === "Home collection" &&
        lead.homeCollectionDetails ? (
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Patient Details */}
            <div>
              <div className="bg-blue-100 rounded-lg p-5 mb-5 opacity-90">
                <h3 className="text-[#252B61] mb-4 flex items-center gap-2.5">
                  👤 Patient Details
                </h3>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">Name & Basic Info</h4>
                  <div className="bg-white p-2.5 rounded text-sm">
                    <div className="font-bold text-lg">
                      {lead.homeCollectionDetails.patientDetails.name}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <strong>Age:</strong>{" "}
                        {lead.homeCollectionDetails.patientDetails.age}
                      </div>
                      <div>
                        <strong>Gender:</strong>{" "}
                        {lead.homeCollectionDetails.patientDetails.gender}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">Contact Details</h4>
                  <div className="bg-white p-2.5 rounded text-sm">
                    <div>
                      <strong>Primary:</strong>{" "}
                      {lead.homeCollectionDetails.patientDetails.contactDetails}
                    </div>
                    <div>
                      <strong>Alternate:</strong>{" "}
                      {
                        lead.homeCollectionDetails.patientDetails
                          .altContactDetails
                      }
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">Complete Address</h4>
                  <div className="bg-white p-2.5 rounded text-sm whitespace-pre-line">
                    {lead.homeCollectionDetails.patientDetails.completeAddress}
                    {"\n"}
                    <strong>Landmark:</strong>{" "}
                    {lead.homeCollectionDetails.patientDetails.landmark}
                    {"\n"}
                    <strong>Pincode:</strong>{" "}
                    {lead.homeCollectionDetails.patientDetails.pincode}
                  </div>
                </div>

                <div>
                  <h4 className="text-[#252B61] mb-2">Time & Date</h4>
                  <div className="bg-white p-2 rounded text-sm font-mono font-bold">
                    {lead.homeCollectionDetails.timeAndDate}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Test & Service Details */}
            <div>
              <div className="bg-emerald-100 rounded-lg p-5 mb-5 opacity-90">
                <h3 className="text-[#252B61] mb-4 flex items-center gap-2.5">
                  🧪 Test & Package Details
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Test Name</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.homeCollectionDetails.testDetails.testName}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Package Name</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.homeCollectionDetails.testDetails.packageName}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Test Code</h4>
                    <div className="bg-white p-2 rounded text-sm font-mono">
                      {lead.homeCollectionDetails.testDetails.testCode}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Tube Details</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.homeCollectionDetails.testDetails.tubeDetails}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">
                    🧪 Vaccutainer Tube Details
                  </h4>
                  <div className="bg-white p-4 rounded-md border-2 border-[#e0e0e0]">
                    <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                      <div>
                        <strong className="text-[#252B61]">Type:</strong>
                        <div className="text-sm">
                          {
                            lead.homeCollectionDetails.testDetails
                              .vaccutainerTubeDetails.type
                          }
                        </div>
                      </div>
                      <div>
                        <strong className="text-[#252B61]">Color:</strong>
                        <div className="text-sm">
                          {
                            lead.homeCollectionDetails.testDetails
                              .vaccutainerTubeDetails.color
                          }
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                      <div>
                        <strong className="text-[#252B61]">Volume:</strong>
                        <div className="text-sm">
                          {
                            lead.homeCollectionDetails.testDetails
                              .vaccutainerTubeDetails.volume
                          }
                        </div>
                      </div>
                      <div>
                        <strong className="text-[#252B61]">Additives:</strong>
                        <div className="text-sm">
                          {
                            lead.homeCollectionDetails.testDetails
                              .vaccutainerTubeDetails.additives
                          }
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#252B61]">Code:</strong>
                      <div className="text-sm font-mono font-bold">
                        {
                          lead.homeCollectionDetails.testDetails
                            .vaccutainerTubeDetails.code
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Payment Type</h4>
                    <div
                      className={`bg-white p-2 rounded text-sm font-semibold ${
                        lead.homeCollectionDetails.paymentType === "Credit"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {lead.homeCollectionDetails.paymentType}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">
                      Sample Drop Location
                    </h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.homeCollectionDetails.sampleDropLocation}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#252B61] mb-2">Special Instructions</h4>
                  <div className="bg-white p-2 rounded text-sm">
                    {lead.homeCollectionDetails.specialInstruction}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : lead.serviceType === "Onsite" && lead.onsiteDetails ? (
          <div className="grid grid-cols-1 gap-8">
            {/* Onsite Details */}
            <div className="bg-green-100 rounded-lg p-5 opacity-90">
              <h3 className="text-[#252B61] mb-4 flex items-center gap-2.5">
                🏕️ Onsite Camp Details
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-[#252B61] mb-2">Camp Name</h4>
                  <div className="bg-white p-2.5 rounded text-sm font-bold">
                    {lead.onsiteDetails.campName}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#252B61] mb-2">Location</h4>
                  <div className="bg-white p-2.5 rounded text-sm">
                    {lead.onsiteDetails.location}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-[#252B61] mb-2">Date</h4>
                  <div className="bg-white p-2 rounded text-sm font-mono font-bold">
                    {lead.onsiteDetails.date}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#252B61] mb-2">Timings</h4>
                  <div className="bg-white p-2 rounded text-sm font-mono font-bold">
                    {lead.onsiteDetails.timings}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[#252B61] mb-2">Required Tubes</h4>
                <div className="bg-white p-4 rounded-md border-2 border-[#e0e0e0]">
                  <div className="grid grid-cols-3 gap-2">
                    {lead.onsiteDetails.tubes.map((tube, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-2 rounded text-sm text-center font-semibold"
                      >
                        {tube}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Fallback for old corporate leads
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {/* Corporate Location Details */}
              <div className="bg-sky-100 rounded-lg p-5 mb-5 opacity-90">
                <h3 className="text-[#252B61] mb-4 flex items-center gap-2.5">
                  📍 Corporate Site Location
                </h3>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">Complete Address</h4>
                  <div className="bg-white p-2.5 rounded text-sm whitespace-pre-line">
                    {lead.corporateDetails.companyName}
                    {"\n"}
                    {lead.corporateDetails.completeAddress}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-2">Building & Floor</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.corporateDetails.buildingFloor}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-2">Room/Hall Details</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.corporateDetails.roomHall}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-2">Nearby Landmarks</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.corporateDetails.landmarks}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-2">
                      Parking Instructions
                    </h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.corporateDetails.parkingInstructions}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#252B61] mb-2">GPS Coordinates</h4>
                  <div className="bg-white p-2 rounded text-sm font-mono font-bold">
                    {lead.corporateDetails.gpsCoordinates}
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="bg-emerald-100 rounded-lg p-5 opacity-90">
                <h3 className="text-[#252B61] mb-4 flex items-center gap-2.5">
                  📦 Package & Test Details
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Test Name</h4>
                    <div className="bg-white p-2 rounded text-sm">
                      {lead.packageDetails.testName}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#252B61] mb-1.5">Test Code</h4>
                    <div className="bg-white p-2 rounded text-sm font-mono">
                      {lead.packageDetails.testCode}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-[#252B61] mb-2">
                    🧪 Vaccutainer Tube Details
                  </h4>
                  <div className="bg-white p-4 rounded-md border-2 border-[#e0e0e0]">
                    <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                      <div>
                        <strong className="text-[#252B61]">Tube Type:</strong>
                        <div className="text-sm">
                          {lead.packageDetails.vaccutainerTube.type}
                        </div>
                      </div>
                      <div>
                        <strong className="text-[#252B61]">Color:</strong>
                        <div className="text-sm">
                          {lead.packageDetails.vaccutainerTube.color}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                      <div>
                        <strong className="text-[#252B61]">Volume:</strong>
                        <div className="text-sm">
                          {lead.packageDetails.vaccutainerTube.volume}
                        </div>
                      </div>
                      <div>
                        <strong className="text-[#252B61]">Additives:</strong>
                        <div className="text-sm">
                          {lead.packageDetails.vaccutainerTube.additives}
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#252B61]">Tube Code:</strong>
                      <div className="text-sm font-mono font-bold">
                        {lead.packageDetails.vaccutainerTube.code}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-2.5">
                  <h4 className="text-[#252B61] mb-2">Special Instructions</h4>
                  <div className="bg-white p-2 rounded text-sm">
                    {lead.packageDetails.instructions}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - SPOC Details */}
            <div>
              <div className="bg-[#E7C2D4] rounded-lg p-5 opacity-90">
                <h3 className="flex items-center gap-2.5 mb-5 text-[#252B61]">
                  👤 Single Point of Contact (SPOC)
                </h3>

                {/* Primary SPOC */}
                <div className="bg-white rounded-lg p-4 mb-5 border-2 border-green-100">
                  <h4 className="flex items-center gap-2 mb-4 text-[#252B61]">
                    🟢 Primary SPOC
                  </h4>

                  <div className="mb-2.5">
                    <strong className="text-[#252B61]">Name:</strong>
                    <div className="text-base font-bold">
                      {lead.corporateDetails.primarySpoc.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                    <div>
                      <strong className="text-[#252B61]">Designation:</strong>
                      <div className="text-sm">
                        {lead.corporateDetails.primarySpoc.designation}
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#252B61]">Department:</strong>
                      <div className="text-sm">
                        {lead.corporateDetails.primarySpoc.department}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2.5">
                    <strong className="text-[#252B61]">Mobile Number:</strong>
                    <div className="text-sm font-mono font-bold">
                      {lead.corporateDetails.primarySpoc.mobile}
                    </div>
                  </div>

                  <div className="mb-4">
                    <strong className="text-[#252B61]">Email:</strong>
                    <div className="text-sm text-blue-600">
                      {lead.corporateDetails.primarySpoc.email}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        toast(
                          `Calling ${lead.corporateDetails.primarySpoc.mobile}`
                        )
                      }
                      className="bg-[#F0DA69] text-[#252B61] border-none px-3 py-2 rounded-md cursor-pointer text-xs font-bold"
                    >
                      📞 Call
                    </button>
                    <button
                      onClick={() =>
                        toast.success(
                          `Email sent to ${lead.corporateDetails.primarySpoc.email}`
                        )
                      }
                      className="bg-[#92BDF6] text-[#252B61] border-none px-3 py-2 rounded-md cursor-pointer text-xs font-bold"
                    >
                      ✉️ Email
                    </button>
                  </div>
                </div>

                {/* Secondary SPOC */}
                <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                  <h4 className="flex items-center gap-2 mb-4 text-[#252B61]">
                    🔵 Secondary SPOC
                  </h4>

                  <div className="mb-2.5">
                    <strong className="text-[#252B61]">Name:</strong>
                    <div className="text-base font-bold">
                      {lead.corporateDetails.secondarySpoc.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                    <div>
                      <strong className="text-[#252B61]">Designation:</strong>
                      <div className="text-sm">
                        {lead.corporateDetails.secondarySpoc.designation}
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#252B61]">Department:</strong>
                      <div className="text-sm">
                        {lead.corporateDetails.secondarySpoc.department}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2.5">
                    <strong className="text-[#252B61]">Mobile Number:</strong>
                    <div className="text-sm font-mono font-bold">
                      {lead.corporateDetails.secondarySpoc.mobile}
                    </div>
                  </div>

                  <div className="mb-4">
                    <strong className="text-[#252B61]">Email:</strong>
                    <div className="text-sm text-blue-600">
                      {lead.corporateDetails.secondarySpoc.email}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        toast(
                          `Calling ${lead.corporateDetails.secondarySpoc.mobile}`
                        )
                      }
                      className="bg-[#F0DA69] text-[#252B61] border-none px-3 py-2 rounded-md cursor-pointer text-xs font-bold"
                    >
                      📞 Call
                    </button>
                    <button
                      onClick={() =>
                        toast.success(
                          `Email sent to ${lead.corporateDetails.secondarySpoc.email}`
                        )
                      }
                      className="bg-[#92BDF6] text-[#252B61] border-none px-3 py-2 rounded-md cursor-pointer text-xs font-bold"
                    >
                      ✉️ Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CustomModal.Body>
      <CustomModal.Footer>
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center py-5 border-t-2 border-gray-200">
          {lead.status === "Pending to accept" && (
            <>
              <button
                onClick={() => {
                  toast.success(`Lead ${lead.id} accepted successfully!`);
                  setAcceptedLead(lead);
                  setSelectedLead(null);
                }}
                className="bg-[#A3DAC2] text-[#252B61] border-none px-6 py-3 rounded-lg cursor-pointer font-bold text-sm"
              >
                ✅ Accept Lead
              </button>
              <button
                onClick={() => {
                  toast.error(`Lead ${lead.id} rejected`);
                  setSelectedLead(null);
                }}
                className="bg-red-500 text-white border-none px-6 py-3 rounded-lg cursor-pointer font-bold text-sm"
              >
                ❌ Reject Lead
              </button>
            </>
          )}
          <button
            onClick={() => {
              toast(`Modification requested for ${lead.id}`);
              setSelectedLead(null);
            }}
            className="bg-[#F0DA69] text-[#252B61] border-none px-6 py-3 rounded-lg cursor-pointer font-bold text-sm"
          >
            ✏️ Request Modification
          </button>
          <button
            onClick={() => setActiveModal("gps")}
            className="bg-[#92BDF6] text-[#252B61] border-none px-6 py-3 rounded-lg cursor-pointer font-bold text-sm"
          >
            📍 View GPS Location
          </button>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
  const GPSModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-xl p-8 w-[500px] max-w-[90vw]">
        <h3 className="text-[#252B61] mb-5">Live GPS Tracking</h3>
        <div className="bg-[#A3DAC2] h-[200px] rounded-lg flex items-center justify-center mb-5">
          <div className="text-center">
            <div className="text-5xl mb-2.5">📍</div>
            <div className="font-bold">Vendor Location</div>
            <div className="text-[#252B61]">ETA: 15 minutes</div>
          </div>
        </div>
        <div className="flex gap-2.5 flex-wrap">
          <button
            onClick={() => toast("Calling vendor...")}
            className="bg-[#F0DA69] text-[#252B61] border-none py-2.5 px-5 rounded-md cursor-pointer font-bold"
          >
            📞 Call Vendor
          </button>
          <button
            onClick={() => toast.success("Message sent")}
            className="bg-[#92BDF6] text-[#252B61] border-none py-2.5 px-5 rounded-md cursor-pointer font-bold"
          >
            💬 Send Message
          </button>
          <button
            onClick={() => toast.success("Location shared")}
            className="bg-[#A3DAC2] text-[#252B61] border-none py-2.5 px-5 rounded-md cursor-pointer font-bold"
          >
            📍 Share Location
          </button>
        </div>
        <button
          onClick={() => setActiveModal(null)}
          className="bg-[#252B61] text-white border-none py-2.5 px-5 rounded-md cursor-pointer mt-4 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );

  // Dashboard View
  const Dashboard = () => (
    <div className="p-5">
      {/* Header */}
      <div className="bg-white rounded-xl p-5 mb-5 shadow-lg">
        <div>
          <h2 className="text-[#252B61] m-0 mb-2.5">
            Healthcare Vendor Management
          </h2>
          <div className="flex items-center gap-2.5">
            <div className="bg-[#F0DA69] text-[#252B61] py-1 px-4 rounded-full font-bold text-sm">
              ⭐ 4.20 System Rating
            </div>
            <span className="text-gray-500">Welcome back, Admin</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {/* Left Column */}
        <div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[
              {
                title: "Active Vendors",
                count: 24,
                color: "#A3DAC2",
                icon: "👥",
              },
              {
                title: "Pending Leads",
                count: 8,
                color: "#F0DA69",
                icon: "📋",
              },
              {
                title: "Completed Today",
                count: 12,
                color: "#92BDF6",
                icon: "✅",
              },
              {
                title: "Emergency Calls",
                count: 3,
                color: "#E7C2D4",
                icon: "🚨",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-lg text-center border-l-4"
                style={{ borderColor: stat.color }} // Border color is dynamic, so style is cleaner here
              >
                <div className="text-2xl mb-2.5">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1.5 text-[#252B61]">
                  {stat.count}
                </div>
                <div className="text-gray-500 text-sm">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Leads Table */}
      <div className="bg-white rounded-xl p-5 mt-5 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-[#252B61]">Active Leads</h3>
          <div className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#92BDF6] text-[#252B61]">
            💡 Click on any row to view detailed information
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#252B61]">
                {[
                  "Lead ID",
                  "Date",
                  "Pincode",
                  "Service Type",
                  "Status",
                  "Time",
                  "Location",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-3 text-white text-left text-sm font-bold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-gray-200 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-50"
                  onClick={() => setSelectedLead(lead)}
                >
                  <td className="p-3 font-bold text-gray-700">{lead.id}</td>
                  <td className="p-3 font-semibold text-gray-600">
                    {lead.date}
                  </td>
                  <td className="p-3 font-mono text-gray-600">
                    {lead.pincode}
                  </td>
                  <td className="p-3">
                    <div
                      className={`px-2 py-1 rounded-full text-xs text-center inline-block font-semibold ${
                        lead.serviceType === "Home collection"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {lead.serviceType}
                    </div>
                  </td>
                  <td className="p-3">
                    <div
                      className={`px-2 py-1 rounded-full text-xs text-center inline-block font-semibold ${
                        lead.status === "Pending to accept"
                          ? "bg-yellow-100 text-yellow-800"
                          : lead.status === "Accepted"
                          ? "bg-blue-100 text-blue-800"
                          : lead.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : lead.status === "Completed"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {lead.status}
                    </div>
                  </td>
                  <td className="p-3">{lead.time}</td>
                  <td className="p-3">{lead.location}</td>
                  <td className="p-3">
                    <div className="flex gap-1.5 flex-wrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLead(lead);
                        }}
                        className="border-none px-2.5 py-1.5 rounded cursor-pointer text-xs bg-[#E7C2D4] text-[#252B61] font-semibold"
                      >
                        View
                      </button>
                      {lead.status === "Pending to accept" && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.success(
                                `Lead ${lead.id} accepted successfully!`
                              );
                              setAcceptedLead(lead);
                            }}
                            className="border-none px-2.5 py-1.5 rounded cursor-pointer text-xs bg-[#A3DAC2] text-[#252B61] font-semibold"
                          >
                            Accept
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.error(`Lead ${lead.id} rejected`);
                            }}
                            className="border-none px-2.5 py-1.5 rounded cursor-pointer text-xs bg-red-200 text-red-800 font-semibold"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nearby Leads - Fastest Finger First */}
      <div className="bg-white rounded-xl p-5 mt-5 shadow-lg">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2.5">
          <h3 className="text-[#252B61] m-0">
            🚀 Nearby Leads - Fastest Finger First
          </h3>
          <div className="bg-[#A3DAC2] text-[#252B61] py-1 px-2.5 rounded-lg text-xs font-bold">
            💡 Click on any lead card to view full details
          </div>
        </div>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }} // Using style for complex grid setup is fine
        >
          {[
            {
              id: "FF001",
              service: "Phlebotomy",
              location: "HSR Layout",
              coordinates: "12.9116, 77.6456",
              distance: "1.2 km",
              priority: "High",
              veinSpy: true,
              details: "Elderly patient, requires experienced phlebotomist",
              // ... full details for modal
            },
            {
              id: "FF002",
              service: "Pharmacy",
              location: "Indiranagar",
              coordinates: "12.9716, 77.6412",
              distance: "2.8 km",
              priority: "Medium",
              veinSpy: false,
              details: "Urgent medication delivery needed",
              // ... full details for modal
            },
          ].map((lead) => (
            <div
              key={lead.id}
              className={`bg-gray-50 rounded-xl p-5 relative overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl border-2 ${
                lead.priority === "High"
                  ? "border-red-500"
                  : lead.priority === "Medium"
                  ? "border-[#F0DA69]"
                  : "border-[#A3DAC2]"
              }`}
              onClick={() => setSelectedLead({ ...lead, ...mockLeads[0] })} // Merging with mock for full details
            >
              <div
                className={`absolute top-0 right-0 text-white px-4 py-1.5 border-b-l-xl text-xs font-bold ${
                  lead.priority === "High"
                    ? "bg-red-500"
                    : lead.priority === "Medium"
                    ? "bg-[#F0DA69]"
                    : "bg-[#A3DAC2]"
                }`}
              >
                {lead.priority}
              </div>

              <div className="mb-4">
                <h4 className="text-[#252B61] m-0 mb-1 font-bold">
                  {lead.service} - {lead.id}
                </h4>
                <p className="m-0 mb-1 text-gray-600 text-sm">
                  📍 {lead.location} ({lead.distance})
                </p>
                <p className="m-0 mb-2 text-gray-500 text-xs font-mono">
                  📌 {lead.coordinates}
                </p>
                <p className="m-0 mb-2 text-sm text-gray-700">{lead.details}</p>
                {lead.veinSpy && (
                  <div className="bg-[#92BDF6] text-[#252B61] py-1 px-2 rounded-lg text-xs inline-block mb-2 font-semibold">
                    Vein Spy Required
                  </div>
                )}
              </div>

              <div className="flex gap-2 mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toast(`Calling for ${lead.id}`);
                  }}
                  className="bg-[#F0DA69] text-[#252B61] border-none py-2 px-3 rounded-md cursor-pointer text-xs font-semibold"
                >
                  📞 Call
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toast(`WhatsApp for ${lead.id}`);
                  }}
                  className="bg-[#A3DAC2] text-[#252B61] border-none py-2 px-3 rounded-md cursor-pointer text-xs font-semibold"
                >
                  💬 WhatsApp
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAcceptedLead({ ...lead, ...mockLeads[0] });
                    toast.success(`🎉 Lead ${lead.id} grabbed successfully!`);
                  }}
                  className="bg-orange-500 text-white border-none py-2 px-4 rounded-md cursor-pointer font-bold text-sm hover:bg-orange-600 transition-colors"
                >
                  🎯 Grab Lead
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toast.success(`🎉 Lead ${lead.id} grabbed successfully!`);
                  setAcceptedLead({ ...lead, ...mockLeads[0] });
                }}
                className="bg-[#252B61] text-white border-none py-3 px-5 rounded-lg cursor-pointer text-sm font-bold w-full transition-all duration-200 ease-in-out hover:bg-[#F0DA69] hover:text-[#252B61] hover:scale-105"
              >
                🚀 GRAB LEAD
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Main render logic
  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex">
      {/* 
        This style tag is necessary for the custom 'slideIn' animation 
        without modifying tailwind.config.js or a global CSS file.
        It is not an inline style on a specific element.
      */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="flex-1 overflow-auto relative">{renderCurrentView()}</div>

      <WorkflowControlPanel />
      {activeModal === "gps" && <GPSModal />}
      {selectedLead && <LeadDetailModal lead={selectedLead} />}
      {currentWorkflowStep === "vein_spy" && <VeinSpyModal />}
      {currentWorkflowStep === "capture_order" && <CaptureOrderModal />}
      {currentWorkflowStep === "selfie_capture" && <SelfieModal />}
      {currentWorkflowStep === "tube_photos" && <TubePhotosModal />}
      {currentWorkflowStep === "trf_upload" && <TRFUploadModal />}
      {currentWorkflowStep === "document_scanner" && <DocumentScannerModal />}
      {currentWorkflowStep === "order_complete" && <OrderCompleteModal />}
    </div>
  );
};

export default HealthcareVendorSystem;
