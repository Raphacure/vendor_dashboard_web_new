import React, { useState, useEffect } from "react";

const HealthcareVendorSystem = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [notifications, setNotifications] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);
  const [acceptedLead, setAcceptedLead] = useState(null);
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState(null);
  const [veinSpyEnabled, setVeinSpyEnabled] = useState(false);
  const [selectedTubes, setSelectedTubes] = useState([]);
  const [captureNotes, setCaptureNotes] = useState("");
  const [completedOrders, setCompletedOrders] = useState([]);
  const [selectedDocumentType, setSelectedDocumentType] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [profileData, setProfileData] = useState({
    name: "Dr. Rajesh Kumar",
    specialization: "Senior Phlebotomist",
    experience: "8 years",
    rating: 4.8,
    completedOrders: 1247,
    phone: "+91 98765 43210",
    email: "rajesh.kumar@healthcare.com",
    address: "Koramangala, Bangalore - 560095",
    profileImage: "👨‍⚕️",
    certifications: [
      "Certified Phlebotomist",
      "CPR Certified",
      "First Aid Certified",
    ],
    // Service Details
    isAvailable: true,
    coverageArea: "15 km radius",
    avgResponseTime: "2.5 min",
    costPerSample: 150,
    costPerOnsiteCamp: 2500,
    serviceAreas: [
      "Koramangala",
      "HSR Layout",
      "BTM Layout",
      "JP Nagar",
      "Jayanagar",
    ],
    workingHours: {
      start: "08:00",
      end: "20:00",
    },
  });
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: "APP001",
      patientName: "Mrs. Priya Sharma",
      service: "Blood Collection",
      time: "10:00 AM",
      date: "Today",
      location: "HSR Layout",
      contact: "+91 98765 11111",
      status: "Confirmed",
    },
    {
      id: "APP002",
      patientName: "Mr. Anil Gupta",
      service: "Health Checkup",
      time: "2:30 PM",
      date: "Today",
      location: "Indiranagar",
      contact: "+91 98765 22222",
      status: "Pending",
    },
    {
      id: "APP003",
      patientName: "Ms. Kavya Reddy",
      service: "Diabetes Test",
      time: "9:00 AM",
      date: "Tomorrow",
      location: "Whitefield",
      contact: "+91 98765 33333",
      status: "Confirmed",
    },
    {
      id: "APP004",
      patientName: "Corporate Health Camp",
      service: "Team Health Screening",
      time: "8:00 AM",
      date: "15 Oct",
      location: "Tech Park",
      contact: "+91 98765 44444",
      status: "Scheduled",
    },
  ]);
  const [earningsData, setEarningsData] = useState({
    totalEarnings: 85650,
    thisMonth: 12400,
    completedOrders: 127,
    pendingPayments: 3200,
    averagePerOrder: 675,
    monthlyTarget: 15000,
    achievements: [
      { title: "Top Performer", icon: "🏆", date: "September 2024" },
      { title: "1000+ Collections", icon: "🎯", date: "August 2024" },
      { title: "Perfect Rating", icon: "⭐", date: "July 2024" },
    ],
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  // Color palette
  const colors = {
    primary: "#252B61",
    secondary: {
      golden: "#F0DA69",
      mint: "#A3DAC2",
      rose: "#E7C2D4",
      sky: "#92BDF6",
    },
  };

  // Mock data
  const mockLeads = [
    {
      id: "LD001",
      serviceType: "Phlebotomy",
      location: "Koramangala",
      priority: "High",
      status: "Pending",
      time: "09:30 AM",
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
    },
    {
      id: "LD002",
      serviceType: "Ambulance",
      location: "Whitefield",
      priority: "Emergency",
      status: "Active",
      time: "10:15 AM",
      spoc: "Emergency Dispatch",
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
        serviceType: "Advanced Life Support",
        vehicleType: "ALS Ambulance",
        equipment: [
          "Defibrillator",
          "Ventilator",
          "Cardiac Monitor",
          "IV Fluids",
        ],
        estimatedTime: "15 minutes",
        instructions: "Patient in critical condition. Ensure rapid response.",
      },
    },
  ];

  // Notification system
  const addNotification = (message, type = "info") => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date(),
    };
    setNotifications((prev) => [...prev, newNotification]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== newNotification.id)
      );
    }, 3000);
  };

  const Calendar = () => {
    const getDaysInMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ padding: "8px" }}></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today &&
        currentDate.getMonth() === currentMonth &&
        currentDate.getFullYear() === currentYear;
      const hasEvent = [5, 12, 18, 25].includes(day);

      days.push(
        <div
          key={day}
          style={{
            padding: "8px",
            textAlign: "center",
            backgroundColor: isToday
              ? colors.secondary.golden
              : hasEvent
              ? colors.secondary.mint
              : "transparent",
            borderRadius: "4px",
            cursor: "pointer",
            color: isToday ? colors.primary : "#333",
            fontWeight: isToday ? "bold" : "normal",
            fontSize: "14px",
          }}
          onClick={() => addNotification(`Selected date: ${day}`, "info")}
        >
          {day}
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
              )
            }
            style={{
              background: colors.primary,
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            ←
          </button>
          <h3 style={{ color: colors.primary, margin: 0 }}>
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h3>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
              )
            }
            style={{
              background: colors.primary,
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            →
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "2px",
            marginBottom: "10px",
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              style={{
                padding: "8px",
                textAlign: "center",
                fontWeight: "bold",
                color: colors.primary,
                fontSize: "12px",
              }}
            >
              {day}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "2px",
          }}
        >
          {days}
        </div>
      </div>
    );
  };

  // Vein Spy Modal
  const VeinSpyModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "30px",
          width: "500px",
          maxWidth: "90vw",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
          🔍 Vein Spy Scanner
        </h3>
        <div
          style={{
            backgroundColor: colors.secondary.sky,
            height: "200px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            border: "3px dashed " + colors.primary,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "10px" }}>🔍</div>
            <div style={{ fontWeight: "bold", color: colors.primary }}>
              Vein Scanning Active
            </div>
            <div style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}>
              Position device over injection site
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <button
            onClick={() =>
              addNotification("Vein scan completed successfully", "success")
            }
            style={{
              backgroundColor: colors.secondary.mint,
              color: colors.primary,
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ✅ Scan Complete
          </button>
          <button
            onClick={() => addNotification("Retrying vein scan...", "info")}
            style={{
              backgroundColor: colors.secondary.golden,
              color: colors.primary,
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🔄 Retry Scan
          </button>
        </div>

        <button
          onClick={() => setCurrentWorkflowStep(null)}
          style={{
            backgroundColor: colors.primary,
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Continue to Sample Collection
        </button>
      </div>
    </div>
  );

  // Capture Order Photo Modal
  const CaptureOrderModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          width: "600px",
          maxWidth: "95vw",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #eee",
          }}
        >
          <h3 style={{ color: colors.primary, margin: 0 }}>
            📸 Capture Order Photo
          </h3>
          <button
            onClick={() => setCurrentWorkflowStep(null)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "30px" }}>
          {/* Photo Capture Section */}
          <div
            style={{
              border: "3px dashed #ccc",
              borderRadius: "8px",
              padding: "40px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <div
              style={{ fontSize: "48px", marginBottom: "15px", color: "#ccc" }}
            >
              📷
            </div>
            <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
              Take Photo
            </h4>
            <p style={{ color: "#666", marginBottom: "20px" }}>
              Capture order details or delivery confirmation
            </p>
            <button
              onClick={() =>
                addNotification("Camera opened for photo capture", "info")
              }
              style={{
                backgroundColor: "#4285f4",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              📸 Open Camera
            </button>
          </div>

          {/* Service Type */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                fontWeight: "bold",
                color: colors.primary,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Service Type
            </label>
            <select
              style={{
                width: "100%",
                padding: "10px",
                border: "2px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
              }}
            >
              <option>Lab Test - Home Collection</option>
              <option>Emergency Sample Collection</option>
              <option>Corporate Health Camp</option>
            </select>
          </div>

          {/* Blood Collection Tubes */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                fontWeight: "bold",
                color: colors.primary,
                display: "block",
                marginBottom: "15px",
              }}
            >
              Blood Collection Tubes Required
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              {[
                { name: "EDTA (Purple)", color: "#8B5CF6" },
                { name: "SST (Gold)", color: "#F59E0B" },
                { name: "Fluoride (Gray)", color: "#6B7280" },
                { name: "Plain (Red)", color: "#EF4444" },
                { name: "Citrate (Blue)", color: "#3B82F6" },
                { name: "Heparin (Green)", color: "#10B981" },
              ].map((tube) => (
                <label
                  key={tube.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "6px",
                    backgroundColor: selectedTubes.includes(tube.name)
                      ? "#f0f9ff"
                      : "transparent",
                  }}
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
                    style={{ transform: "scale(1.2)" }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: tube.color,
                    }}
                  ></div>
                  <span style={{ fontSize: "14px" }}>{tube.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                fontWeight: "bold",
                color: colors.primary,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Notes
            </label>
            <textarea
              value={captureNotes}
              onChange={(e) => setCaptureNotes(e.target.value)}
              placeholder="Add any additional notes about the capture..."
              style={{
                width: "100%",
                minHeight: "80px",
                padding: "10px",
                border: "2px solid #ddd",
                borderRadius: "6px",
                fontSize: "14px",
                resize: "vertical",
              }}
            />
          </div>

          {/* Action Buttons */}
          <div
            style={{ display: "flex", gap: "15px", justifyContent: "flex-end" }}
          >
            <button
              onClick={() => setCurrentWorkflowStep(null)}
              style={{
                backgroundColor: "#6B7280",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                addNotification(
                  "Order photo captured and saved successfully!",
                  "success"
                );
                setCurrentWorkflowStep("document_scan");
              }}
              style={{
                backgroundColor: colors.secondary.mint,
                color: colors.primary,
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              💾 Save Capture
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // AI Document Scanner Modal
  const DocumentScannerModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          width: "550px",
          maxWidth: "95vw",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid #eee",
          }}
        >
          <h3 style={{ color: colors.primary, margin: 0 }}>
            🤖 AI Document Scanner
          </h3>
          <button
            onClick={() => {
              setCurrentWorkflowStep(null);
              setSelectedDocumentType(null);
              setPatientName("");
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#666",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: "30px" }}>
          {!selectedDocumentType ? (
            /* Document Type Selection */
            <>
              <h4
                style={{
                  color: colors.primary,
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Select Document Type to Scan
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {/* TRF Forms */}
                <div
                  onClick={() => setSelectedDocumentType("trf")}
                  style={{
                    backgroundColor: colors.secondary.sky,
                    borderRadius: "12px",
                    padding: "30px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.1)";
                    e.currentTarget.style.border = `2px solid ${colors.primary}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      marginBottom: "15px",
                      color: colors.primary,
                    }}
                  >
                    📋
                  </div>
                  <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
                    TRF Forms
                  </h4>
                  <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
                    Test Request Forms and Lab Orders
                  </p>
                </div>

                {/* Camp Sheets */}
                <div
                  onClick={() => setSelectedDocumentType("camp")}
                  style={{
                    backgroundColor: colors.secondary.mint,
                    borderRadius: "12px",
                    padding: "30px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,0,0,0.1)";
                    e.currentTarget.style.border = `2px solid ${colors.primary}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.border = "2px solid transparent";
                  }}
                >
                  <div
                    style={{
                      fontSize: "48px",
                      marginBottom: "15px",
                      color: colors.primary,
                    }}
                  >
                    👥
                  </div>
                  <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
                    Camp Sheets
                  </h4>
                  <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
                    Corporate Health Camp Documents
                  </p>
                </div>
              </div>
            </>
          ) : (
            /* Scanning Interface */
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedDocumentType(null)}
              >
                <span style={{ fontSize: "20px" }}>←</span>
                <span style={{ color: colors.primary, fontWeight: "bold" }}>
                  Back to Document Selection
                </span>
              </div>

              <h4
                style={{
                  color: colors.primary,
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {selectedDocumentType === "trf"
                  ? "📋 Scan TRF Form"
                  : "👥 Scan Camp Sheet"}
              </h4>

              {/* Scan Section */}
              <div
                style={{
                  border: "3px dashed #ccc",
                  borderRadius: "8px",
                  padding: "40px",
                  textAlign: "center",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "15px",
                    color: "#8B5CF6",
                  }}
                >
                  {selectedDocumentType === "trf" ? "📄" : "👥"}
                </div>
                <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
                  {selectedDocumentType === "trf"
                    ? "Scan TRF Form"
                    : "Scan Camp Sheet"}
                </h4>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "20px",
                    fontSize: "14px",
                  }}
                >
                  AI will automatically extract data from your document
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() =>
                      addNotification("Document scanning started...", "info")
                    }
                    style={{
                      backgroundColor: "#8B5CF6",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    📱 Scan Document
                  </button>
                  <button
                    onClick={() =>
                      addNotification("File upload started...", "info")
                    }
                    style={{
                      backgroundColor: "#6B7280",
                      color: "white",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    📁 Upload File
                  </button>
                </div>
              </div>

              {/* Patient Name Capture */}
              <div style={{ marginBottom: "25px" }}>
                <label
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
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
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "2px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                />
              </div>

              {/* AI Features Info */}
              <div
                style={{
                  backgroundColor: "#EBF8FF",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "25px",
                  border: "1px solid #BEE3F8",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>🤖</div>
                  <strong style={{ color: colors.primary }}>
                    AI OCR Features:
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "#4A5568" }}>
                  Automatic text extraction, form field recognition, and data
                  validation
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => {
                    setCurrentWorkflowStep(null);
                    setSelectedDocumentType(null);
                    setPatientName("");
                  }}
                  style={{
                    backgroundColor: "#6B7280",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (!patientName.trim()) {
                      addNotification(
                        "Please enter the patient/contact person name",
                        "warning"
                      );
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
                    addNotification(
                      `Document processed successfully with AI! Order closed for ${patientName}`,
                      "success"
                    );
                    setCurrentWorkflowStep("order_complete");
                  }}
                  disabled={!patientName.trim()}
                  style={{
                    backgroundColor: patientName.trim() ? "#8B5CF6" : "#ccc",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    cursor: patientName.trim() ? "pointer" : "not-allowed",
                    fontWeight: "bold",
                  }}
                >
                  🤖 Process with AI
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // Order Complete Modal
  const OrderCompleteModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "40px",
          width: "500px",
          maxWidth: "90vw",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>🎉</div>
        <h2 style={{ color: colors.primary, marginBottom: "15px" }}>
          Order Completed Successfully!
        </h2>
        <p style={{ color: "#666", marginBottom: "25px", fontSize: "16px" }}>
          Sample collection and documentation completed for:
        </p>

        <div
          style={{
            backgroundColor: colors.secondary.golden,
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ color: colors.primary, margin: "0 0 5px 0" }}>
            👤 {patientName || "Patient"}
          </h3>
          <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
            Lead ID: {acceptedLead?.id} | {acceptedLead?.location}
          </p>
        </div>

        <div
          style={{
            backgroundColor: colors.secondary.mint,
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "25px",
          }}
        >
          <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
            Summary:
          </h4>
          <div style={{ fontSize: "14px", color: "#666", textAlign: "left" }}>
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

        <button
          onClick={() => {
            setCurrentWorkflowStep(null);
            setAcceptedLead(null);
            setSelectedTubes([]);
            setCaptureNotes("");
            setVeinSpyEnabled(false);
            setSelectedDocumentType(null);
            setPatientName("");
            addNotification(
              `Order successfully closed for ${patientName}. Returning to dashboard.`,
              "success"
            );
          }}
          style={{
            backgroundColor: colors.primary,
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          🏠 Return to Dashboard
        </button>
      </div>
    </div>
  );

  // Workflow Control Panel
  const WorkflowControlPanel = () => {
    if (!acceptedLead) return null;

    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: colors.primary,
          borderRadius: "12px",
          padding: "20px",
          color: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        <h4 style={{ margin: "0 0 15px 0" }}>
          🚀 Active Lead: {acceptedLead.id}
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={() => {
              setVeinSpyEnabled(true);
              setCurrentWorkflowStep("vein_spy");
            }}
            style={{
              backgroundColor: colors.secondary.sky,
              color: colors.primary,
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            🔍 Use Vein Spy (Optional)
          </button>
          <button
            onClick={() => setCurrentWorkflowStep("photo_capture")}
            style={{
              backgroundColor: colors.secondary.golden,
              color: colors.primary,
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            📸 Capture Order Photo
          </button>
          <button
            onClick={() => setCurrentWorkflowStep("document_scan")}
            style={{
              backgroundColor: colors.secondary.mint,
              color: colors.primary,
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            📄 Scan Documents
          </button>
          <button
            onClick={() => setCurrentWorkflowStep("order_complete")}
            style={{
              backgroundColor: colors.secondary.rose,
              color: colors.primary,
              border: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            ✅ Complete Order
          </button>
        </div>
      </div>
    );
  };

  // Detailed Lead Modal
  const LeadDetailModal = ({ lead }) => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          width: "900px",
          maxWidth: "95vw",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: colors.primary,
            color: "white",
            padding: "20px",
            borderRadius: "12px 12px 0 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 5px 0" }}>Lead Details - {lead.id}</h2>
            <p style={{ margin: 0, opacity: 0.8 }}>
              {lead.serviceType} | {lead.location}
            </p>
          </div>
          <button
            onClick={() => setSelectedLead(null)}
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "6px",
              padding: "8px 15px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ✕ Close
          </button>
        </div>

        <div style={{ padding: "30px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
            }}
          >
            {/* Left Column */}
            <div>
              {/* Corporate Location Details */}
              <div
                style={{
                  backgroundColor: colors.secondary.sky,
                  borderRadius: "8px",
                  padding: "20px",
                  marginBottom: "20px",
                  opacity: 0.9,
                }}
              >
                <h3
                  style={{
                    color: colors.primary,
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  📍 Corporate Site Location
                </h3>

                <div style={{ marginBottom: "15px" }}>
                  <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                    Complete Address
                  </h4>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "4px",
                      whiteSpace: "pre-line",
                      fontSize: "14px",
                    }}
                  >
                    {lead.corporateDetails.companyName}
                    {"\n"}
                    {lead.corporateDetails.completeAddress}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                      Building & Floor
                    </h4>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      {lead.corporateDetails.buildingFloor}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                      Room/Hall Details
                    </h4>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      {lead.corporateDetails.roomHall}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                      Nearby Landmarks
                    </h4>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      {lead.corporateDetails.landmarks}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                      Parking Instructions
                    </h4>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      {lead.corporateDetails.parkingInstructions}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                    GPS Coordinates
                  </h4>
                  <div
                    style={{
                      backgroundColor: "white",
                      padding: "8px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                    }}
                  >
                    {lead.corporateDetails.gpsCoordinates}
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div
                style={{
                  backgroundColor: colors.secondary.mint,
                  borderRadius: "8px",
                  padding: "20px",
                  opacity: 0.9,
                }}
              >
                <h3
                  style={{
                    color: colors.primary,
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  📦{" "}
                  {lead.serviceType === "Phlebotomy"
                    ? "Package & Test Details"
                    : "Service Details"}
                </h3>

                {lead.serviceType === "Phlebotomy" ? (
                  <>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "15px",
                        marginBottom: "15px",
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: colors.primary, margin: "0 0 5px 0" }}
                        >
                          Test Name
                        </h4>
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "8px",
                            borderRadius: "4px",
                            fontSize: "14px",
                          }}
                        >
                          {lead.packageDetails.testName}
                        </div>
                      </div>
                      <div>
                        <h4
                          style={{ color: colors.primary, margin: "0 0 5px 0" }}
                        >
                          Test Code
                        </h4>
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "8px",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontFamily: "monospace",
                          }}
                        >
                          {lead.packageDetails.testCode}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        🧪 Vaccutainer Tube Details
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "15px",
                          borderRadius: "6px",
                          border: "2px solid #e0e0e0",
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <div>
                            <strong style={{ color: colors.primary }}>
                              Tube Type:
                            </strong>
                            <div style={{ fontSize: "14px" }}>
                              {lead.packageDetails.vaccutainerTube.type}
                            </div>
                          </div>
                          <div>
                            <strong style={{ color: colors.primary }}>
                              Color:
                            </strong>
                            <div style={{ fontSize: "14px" }}>
                              {lead.packageDetails.vaccutainerTube.color}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <div>
                            <strong style={{ color: colors.primary }}>
                              Volume:
                            </strong>
                            <div style={{ fontSize: "14px" }}>
                              {lead.packageDetails.vaccutainerTube.volume}
                            </div>
                          </div>
                          <div>
                            <strong style={{ color: colors.primary }}>
                              Additives:
                            </strong>
                            <div style={{ fontSize: "14px" }}>
                              {lead.packageDetails.vaccutainerTube.additives}
                            </div>
                          </div>
                        </div>
                        <div>
                          <strong style={{ color: colors.primary }}>
                            Tube Code:
                          </strong>
                          <div
                            style={{
                              fontSize: "14px",
                              fontFamily: "monospace",
                              fontWeight: "bold",
                            }}
                          >
                            {lead.packageDetails.vaccutainerTube.code}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        Special Instructions
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.instructions}
                      </div>
                    </div>
                  </>
                ) : lead.serviceType === "Ambulance" ? (
                  <>
                    <div style={{ marginBottom: "15px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 5px 0" }}
                      >
                        Service Type
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.serviceType || "Emergency Service"}
                      </div>
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        Equipment
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.equipment
                          ? lead.packageDetails.equipment.join(", ")
                          : "Standard Emergency Equipment"}
                      </div>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        Instructions
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.instructions ||
                          "Standard emergency response protocol"}
                      </div>
                    </div>
                  </>
                ) : lead.serviceType === "Pharmacy" ? (
                  <>
                    <div style={{ marginBottom: "15px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 5px 0" }}
                      >
                        Service Type
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.serviceType ||
                          "Medication Delivery"}
                      </div>
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        Medications
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.medications
                          ? lead.packageDetails.medications.join(", ")
                          : "Standard medications"}
                      </div>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <h4
                        style={{ color: colors.primary, margin: "0 0 8px 0" }}
                      >
                        Instructions
                      </h4>
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {lead.packageDetails.instructions ||
                          "Standard delivery instructions"}
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ marginBottom: "15px" }}>
                    <h4 style={{ color: colors.primary, margin: "0 0 8px 0" }}>
                      Service Details
                    </h4>
                    <div
                      style={{
                        backgroundColor: "white",
                        padding: "8px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      Service information will be displayed here based on the
                      service type.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - SPOC Details */}
            <div>
              <div
                style={{
                  backgroundColor: colors.secondary.rose,
                  borderRadius: "8px",
                  padding: "20px",
                  opacity: 0.9,
                }}
              >
                <h3
                  style={{
                    color: colors.primary,
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  👤 Single Point of Contact (SPOC)
                </h3>

                {/* Primary SPOC */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "15px",
                    marginBottom: "20px",
                    border: "2px solid #e0f7e0",
                  }}
                >
                  <h4
                    style={{
                      color: colors.primary,
                      margin: "0 0 15px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    🟢 Primary SPOC
                  </h4>

                  <div style={{ marginBottom: "10px" }}>
                    <strong style={{ color: colors.primary }}>Name:</strong>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {lead.corporateDetails.primarySpoc.name}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <strong style={{ color: colors.primary }}>
                        Designation:
                      </strong>
                      <div style={{ fontSize: "14px" }}>
                        {lead.corporateDetails.primarySpoc.designation}
                      </div>
                    </div>
                    <div>
                      <strong style={{ color: colors.primary }}>
                        Department:
                      </strong>
                      <div style={{ fontSize: "14px" }}>
                        {lead.corporateDetails.primarySpoc.department}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <strong style={{ color: colors.primary }}>
                      Mobile Number:
                    </strong>
                    <div
                      style={{
                        fontSize: "14px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      {lead.corporateDetails.primarySpoc.mobile}
                    </div>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: colors.primary }}>Email:</strong>
                    <div style={{ fontSize: "14px", color: "#0066cc" }}>
                      {lead.corporateDetails.primarySpoc.email}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() =>
                        addNotification(
                          `Calling ${lead.corporateDetails.primarySpoc.mobile}`,
                          "info"
                        )
                      }
                      style={{
                        backgroundColor: colors.secondary.golden,
                        color: colors.primary,
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      📞 Call
                    </button>
                    <button
                      onClick={() =>
                        addNotification(
                          `Email sent to ${lead.corporateDetails.primarySpoc.email}`,
                          "success"
                        )
                      }
                      style={{
                        backgroundColor: colors.secondary.sky,
                        color: colors.primary,
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      ✉️ Email
                    </button>
                  </div>
                </div>

                {/* Secondary SPOC */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "15px",
                    border: "2px solid #e0f0ff",
                  }}
                >
                  <h4
                    style={{
                      color: colors.primary,
                      margin: "0 0 15px 0",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    🔵 Secondary SPOC
                  </h4>

                  <div style={{ marginBottom: "10px" }}>
                    <strong style={{ color: colors.primary }}>Name:</strong>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {lead.corporateDetails.secondarySpoc.name}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div>
                      <strong style={{ color: colors.primary }}>
                        Designation:
                      </strong>
                      <div style={{ fontSize: "14px" }}>
                        {lead.corporateDetails.secondarySpoc.designation}
                      </div>
                    </div>
                    <div>
                      <strong style={{ color: colors.primary }}>
                        Department:
                      </strong>
                      <div style={{ fontSize: "14px" }}>
                        {lead.corporateDetails.secondarySpoc.department}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <strong style={{ color: colors.primary }}>
                      Mobile Number:
                    </strong>
                    <div
                      style={{
                        fontSize: "14px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      {lead.corporateDetails.secondarySpoc.mobile}
                    </div>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: colors.primary }}>Email:</strong>
                    <div style={{ fontSize: "14px", color: "#0066cc" }}>
                      {lead.corporateDetails.secondarySpoc.email}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      onClick={() =>
                        addNotification(
                          `Calling ${lead.corporateDetails.secondarySpoc.mobile}`,
                          "info"
                        )
                      }
                      style={{
                        backgroundColor: colors.secondary.golden,
                        color: colors.primary,
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      📞 Call
                    </button>
                    <button
                      onClick={() =>
                        addNotification(
                          `Email sent to ${lead.corporateDetails.secondarySpoc.email}`,
                          "success"
                        )
                      }
                      style={{
                        backgroundColor: colors.secondary.sky,
                        color: colors.primary,
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      ✉️ Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "30px",
              padding: "20px 0",
              borderTop: "2px solid #f0f0f0",
            }}
          >
            <button
              onClick={() => {
                addNotification(
                  `Lead ${lead.id} accepted successfully!`,
                  "success"
                );
                setAcceptedLead(lead);
                setSelectedLead(null);
              }}
              style={{
                backgroundColor: colors.secondary.mint,
                color: colors.primary,
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ✅ Accept Lead
            </button>
            <button
              onClick={() => {
                addNotification(
                  `Modification requested for ${lead.id}`,
                  "info"
                );
                setSelectedLead(null);
              }}
              style={{
                backgroundColor: colors.secondary.golden,
                color: colors.primary,
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ✏️ Request Modification
            </button>
            <button
              onClick={() => setActiveModal("gps")}
              style={{
                backgroundColor: colors.secondary.sky,
                color: colors.primary,
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              📍 View GPS Location
            </button>
            <button
              onClick={() => {
                addNotification(`Lead ${lead.id} rejected`, "warning");
                setSelectedLead(null);
              }}
              style={{
                backgroundColor: "#ff6b6b",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              ❌ Reject Lead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const GPSModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "30px",
          width: "500px",
          maxWidth: "90vw",
        }}
      >
        <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
          Live GPS Tracking
        </h3>
        <div
          style={{
            backgroundColor: colors.secondary.mint,
            height: "200px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "10px" }}>📍</div>
            <div style={{ fontWeight: "bold" }}>Vendor Location</div>
            <div style={{ color: colors.primary }}>ETA: 15 minutes</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={() => addNotification("Calling vendor...", "info")}
            style={{
              backgroundColor: colors.secondary.golden,
              color: colors.primary,
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📞 Call Vendor
          </button>
          <button
            onClick={() => addNotification("Message sent", "success")}
            style={{
              backgroundColor: colors.secondary.sky,
              color: colors.primary,
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            💬 Send Message
          </button>
          <button
            onClick={() => addNotification("Location shared", "success")}
            style={{
              backgroundColor: colors.secondary.mint,
              color: colors.primary,
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            📍 Share Location
          </button>
        </div>
        <button
          onClick={() => setActiveModal(null)}
          style={{
            backgroundColor: colors.primary,
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "15px",
            width: "100%",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );

  // My Calendar View
  const MyCalendar = () => (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: colors.primary, marginBottom: "10px" }}>
          📅 My Calendar
        </h2>
        <p style={{ color: "#666", margin: 0 }}>
          Manage your upcoming appointments and schedule
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {/* Left Column - Calendar */}
        <div>
          <Calendar />
        </div>

        {/* Right Column - Upcoming Appointments */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            height: "fit-content",
          }}
        >
          <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
            🕒 Upcoming Appointments
          </h3>

          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                borderLeft: `4px solid ${
                  appointment.status === "Confirmed"
                    ? colors.secondary.mint
                    : appointment.status === "Pending"
                    ? colors.secondary.golden
                    : colors.secondary.sky
                }`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <h4 style={{ color: colors.primary, margin: "0 0 5px 0" }}>
                    👤 {appointment.patientName}
                  </h4>
                  <p
                    style={{
                      margin: "0 0 5px 0",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    🩺 {appointment.service}
                  </p>
                  <p
                    style={{
                      margin: "0 0 5px 0",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    📍 {appointment.location}
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor:
                      appointment.status === "Confirmed"
                        ? colors.secondary.mint
                        : appointment.status === "Pending"
                        ? colors.secondary.golden
                        : colors.secondary.sky,
                    color: colors.primary,
                    padding: "4px 8px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    fontWeight: "bold",
                  }}
                >
                  {appointment.status}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  🕐 {appointment.time} - {appointment.date}
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    onClick={() =>
                      addNotification(`Calling ${appointment.contact}`, "info")
                    }
                    style={{
                      backgroundColor: colors.secondary.golden,
                      color: colors.primary,
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "11px",
                    }}
                  >
                    📞 Call
                  </button>
                  <button
                    onClick={() =>
                      addNotification(
                        `Viewing details for ${appointment.id}`,
                        "info"
                      )
                    }
                    style={{
                      backgroundColor: colors.secondary.sky,
                      color: colors.primary,
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "11px",
                    }}
                  >
                    📋 Details
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() =>
              addNotification("New appointment form opened", "info")
            }
            style={{
              backgroundColor: colors.primary,
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            ➕ Add New Appointment
          </button>
        </div>
      </div>
    </div>
  );

  // My Profile View
  const MyProfile = () => {
    const [editMode, setEditMode] = useState(false);
    const [tempProfile, setTempProfile] = useState({ ...profileData });

    const handleSave = () => {
      setProfileData(tempProfile);
      setEditMode(false);
      addNotification("Profile updated successfully!", "success");
    };

    return (
      <div style={{ padding: "20px" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ color: colors.primary, margin: 0 }}>👤 My Profile</h2>
            <button
              onClick={() => (editMode ? handleSave() : setEditMode(true))}
              style={{
                backgroundColor: editMode
                  ? colors.secondary.mint
                  : colors.secondary.golden,
                color: colors.primary,
                border: "none",
                padding: "8px 15px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {editMode ? "💾 Save Changes" : "✏️ Edit Profile"}
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "20px",
          }}
        >
          {/* Left Column - Profile Card */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              height: "fit-content",
            }}
          >
            <div style={{ fontSize: "80px", marginBottom: "15px" }}>
              {profileData.profileImage}
            </div>
            <h3 style={{ color: colors.primary, margin: "0 0 5px 0" }}>
              {profileData.name}
            </h3>
            <p style={{ color: "#666", margin: "0 0 10px 0" }}>
              {profileData.specialization}
            </p>

            {/* Availability Toggle */}
            <div
              style={{
                backgroundColor: profileData.isAvailable
                  ? colors.secondary.mint
                  : colors.secondary.rose,
                color: colors.primary,
                padding: "8px 15px",
                borderRadius: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                margin: "10px 0",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: profileData.isAvailable
                    ? "#10B981"
                    : "#EF4444",
                }}
              ></div>
              {profileData.isAvailable ? "Available" : "Offline"}
            </div>

            <div
              style={{
                backgroundColor: colors.secondary.golden,
                color: colors.primary,
                padding: "5px 15px",
                borderRadius: "15px",
                display: "inline-block",
                margin: "5px 0",
                fontWeight: "bold",
              }}
            >
              {profileData.rating} Rating
            </div>
            <p style={{ color: "#666", fontSize: "14px", margin: "5px 0" }}>
              {profileData.completedOrders}+ Completed Orders
            </p>

            {/* Quick Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "10px",
                marginTop: "15px",
                fontSize: "12px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    fontSize: "16px",
                  }}
                >
                  4.8
                </div>
                <div style={{ color: "#666" }}>Rating</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    fontSize: "16px",
                  }}
                >
                  156
                </div>
                <div style={{ color: "#666" }}>Completed</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    fontSize: "16px",
                  }}
                >
                  2.5Y
                </div>
                <div style={{ color: "#666" }}>Experience</div>
              </div>
            </div>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() =>
                  addNotification("Calling Dr. Rajesh Kumar", "info")
                }
                style={{
                  backgroundColor: "#10B981",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Call
              </button>
              <button
                onClick={() => addNotification("WhatsApp chat opened", "info")}
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div>
            {/* Personal Information */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
                Personal Information
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Full Name
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      value={tempProfile.name}
                      onChange={(e) =>
                        setTempProfile({ ...tempProfile, name: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p style={{ margin: "0", padding: "8px 0" }}>
                      {profileData.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Specialization
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      value={tempProfile.specialization}
                      onChange={(e) =>
                        setTempProfile({
                          ...tempProfile,
                          specialization: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p style={{ margin: "0", padding: "8px 0" }}>
                      {profileData.specialization}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      value={tempProfile.phone}
                      onChange={(e) =>
                        setTempProfile({
                          ...tempProfile,
                          phone: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p style={{ margin: "0", padding: "8px 0" }}>
                      {profileData.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Email Address
                  </label>
                  {editMode ? (
                    <input
                      type="email"
                      value={tempProfile.email}
                      onChange={(e) =>
                        setTempProfile({
                          ...tempProfile,
                          email: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p style={{ margin: "0", padding: "8px 0" }}>
                      {profileData.email}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginTop: "15px" }}>
                <label
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Address
                </label>
                {editMode ? (
                  <textarea
                    value={tempProfile.address}
                    onChange={(e) =>
                      setTempProfile({
                        ...tempProfile,
                        address: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "2px solid #ddd",
                      borderRadius: "4px",
                      minHeight: "60px",
                    }}
                  />
                ) : (
                  <p style={{ margin: "0", padding: "8px 0" }}>
                    {profileData.address}
                  </p>
                )}
              </div>
            </div>

            {/* Service Information & Pricing */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
                Service Information & Pricing
              </h3>

              {/* Availability Toggle */}
              <div
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <label style={{ fontWeight: "bold", color: colors.primary }}>
                    Service Availability
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        color: profileData.isAvailable ? "#10B981" : "#EF4444",
                      }}
                    >
                      {profileData.isAvailable
                        ? "Accepting Requests"
                        : "Not Available"}
                    </span>
                    <label
                      style={{
                        position: "relative",
                        display: "inline-block",
                        width: "50px",
                        height: "24px",
                        cursor: editMode ? "pointer" : "not-allowed",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={
                          editMode
                            ? tempProfile.isAvailable
                            : profileData.isAvailable
                        }
                        onChange={(e) =>
                          editMode &&
                          setTempProfile({
                            ...tempProfile,
                            isAvailable: e.target.checked,
                          })
                        }
                        disabled={!editMode}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          cursor: editMode ? "pointer" : "not-allowed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: (
                            editMode
                              ? tempProfile.isAvailable
                              : profileData.isAvailable
                          )
                            ? "#10B981"
                            : "#ccc",
                          borderRadius: "24px",
                          transition: "0.4s",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "18px",
                            width: "18px",
                            left: (
                              editMode
                                ? tempProfile.isAvailable
                                : profileData.isAvailable
                            )
                              ? "29px"
                              : "3px",
                            bottom: "3px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            transition: "0.4s",
                          }}
                        ></div>
                      </span>
                    </label>
                  </div>
                </div>
                {!profileData.isAvailable && (
                  <div
                    style={{
                      backgroundColor: "#FEE2E2",
                      color: "#DC2626",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    While offline, you will not receive any new service requests
                  </div>
                )}
              </div>

              {/* Pricing Section */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Cost per Sample
                  </label>
                  {editMode ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                        ₹
                      </span>
                      <input
                        type="number"
                        value={tempProfile.costPerSample}
                        onChange={(e) =>
                          setTempProfile({
                            ...tempProfile,
                            costPerSample: parseInt(e.target.value) || 0,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "8px",
                          border: "2px solid #ddd",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  ) : (
                    <p
                      style={{
                        margin: "0",
                        padding: "8px 0",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: colors.secondary.golden,
                      }}
                    >
                      ₹{profileData.costPerSample}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Cost per Onsite Camp
                  </label>
                  {editMode ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                        ₹
                      </span>
                      <input
                        type="number"
                        value={tempProfile.costPerOnsiteCamp}
                        onChange={(e) =>
                          setTempProfile({
                            ...tempProfile,
                            costPerOnsiteCamp: parseInt(e.target.value) || 0,
                          })
                        }
                        style={{
                          width: "100%",
                          padding: "8px",
                          border: "2px solid #ddd",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  ) : (
                    <p
                      style={{
                        margin: "0",
                        padding: "8px 0",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: colors.secondary.mint,
                      }}
                    >
                      ₹{profileData.costPerOnsiteCamp}
                    </p>
                  )}
                </div>
              </div>

              {/* Coverage and Response */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Coverage Area
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      value={tempProfile.coverageArea}
                      onChange={(e) =>
                        setTempProfile({
                          ...tempProfile,
                          coverageArea: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "2px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p style={{ margin: "0", padding: "8px 0" }}>
                      {profileData.coverageArea}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    style={{
                      fontWeight: "bold",
                      color: colors.primary,
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Avg Response Time
                  </label>
                  <p
                    style={{
                      margin: "0",
                      padding: "8px 0",
                      color: colors.secondary.sky,
                      fontWeight: "bold",
                    }}
                  >
                    {profileData.avgResponseTime}
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Service Areas
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {profileData.serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: colors.secondary.sky,
                        color: colors.primary,
                        padding: "6px 12px",
                        borderRadius: "15px",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <label
                  style={{
                    fontWeight: "bold",
                    color: colors.primary,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Working Hours
                </label>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <div
                    style={{
                      backgroundColor: colors.secondary.mint,
                      color: colors.primary,
                      padding: "8px 15px",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {profileData.workingHours.start} -{" "}
                    {profileData.workingHours.end}
                  </div>
                  <span style={{ fontSize: "14px", color: "#666" }}>
                    (12 hours daily service)
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: colors.primary, marginBottom: "15px" }}>
                Certifications
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {profileData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: colors.secondary.mint,
                      color: colors.primary,
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // My Rewards View
  const MyRewards = () => (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: colors.primary, marginBottom: "10px" }}>
          💰 My Rewards & Earnings
        </h2>
        <p style={{ color: "#666", margin: 0 }}>
          Track your earnings, achievements, and financial progress
        </p>
      </div>

      {/* Earnings Overview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {[
          {
            title: "Total Earnings",
            amount: `₹${earningsData.totalEarnings.toLocaleString()}`,
            icon: "💰",
            color: colors.secondary.golden,
          },
          {
            title: "This Month",
            amount: `₹${earningsData.thisMonth.toLocaleString()}`,
            icon: "📈",
            color: colors.secondary.mint,
          },
          {
            title: "Completed Orders",
            amount: earningsData.completedOrders,
            icon: "✅",
            color: colors.secondary.sky,
          },
          {
            title: "Average per Order",
            amount: `₹${earningsData.averagePerOrder}`,
            icon: "💵",
            color: colors.secondary.rose,
          },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              borderTop: `4px solid ${stat.color}`,
            }}
          >
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>
              {stat.icon}
            </div>
            <h3
              style={{
                color: colors.primary,
                margin: "0 0 5px 0",
                fontSize: "24px",
              }}
            >
              {stat.amount}
            </h3>
            <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}
      >
        {/* Monthly Progress */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
            📊 Monthly Progress
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                Monthly Target Progress
              </span>
              <span style={{ color: colors.primary }}>
                {Math.round(
                  (earningsData.thisMonth / earningsData.monthlyTarget) * 100
                )}
                %
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                height: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: colors.secondary.mint,
                  height: "100%",
                  width: `${Math.min(
                    (earningsData.thisMonth / earningsData.monthlyTarget) * 100,
                    100
                  )}%`,
                  borderRadius: "10px",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              <span>₹{earningsData.thisMonth.toLocaleString()}</span>
              <span>
                Target: ₹{earningsData.monthlyTarget.toLocaleString()}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h4 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
              💳 Payment Status
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "14px",
                    color: "#666",
                  }}
                >
                  Pending Payments
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: colors.secondary.golden,
                  }}
                >
                  ₹{earningsData.pendingPayments.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() =>
                  addNotification("Payment request submitted", "success")
                }
                style={{
                  backgroundColor: colors.secondary.golden,
                  color: colors.primary,
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                💸 Request Payment
              </button>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: colors.primary, marginBottom: "20px" }}>
            🏆 Achievements
          </h3>

          {earningsData.achievements.map((achievement, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.secondary.mint,
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                opacity: 0.9,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "5px",
                }}
              >
                <span style={{ fontSize: "24px" }}>{achievement.icon}</span>
                <h4 style={{ color: colors.primary, margin: 0 }}>
                  {achievement.title}
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                {achievement.date}
              </p>
            </div>
          ))}

          <button
            onClick={() => addNotification("Viewing all achievements", "info")}
            style={{
              backgroundColor: colors.primary,
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            🎯 View All Achievements
          </button>
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const Dashboard = () => (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div>
          <h2 style={{ color: colors.primary, margin: "0 0 10px 0" }}>
            Healthcare Vendor Management
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                backgroundColor: colors.secondary.golden,
                color: colors.primary,
                padding: "5px 15px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              ⭐ 4.20 System Rating
            </div>
            <span style={{ color: "#666" }}>Welcome back, Admin</span>
          </div>
        </div>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}
      >
        {/* Left Column */}
        <div>
          {/* Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            {[
              {
                title: "Active Vendors",
                count: 24,
                color: colors.secondary.mint,
                icon: "👥",
              },
              {
                title: "Pending Leads",
                count: 8,
                color: colors.secondary.golden,
                icon: "📋",
              },
              {
                title: "Completed Today",
                count: 12,
                color: colors.secondary.sky,
                icon: "✅",
              },
              {
                title: "Emergency Calls",
                count: 3,
                color: colors.secondary.rose,
                icon: "🚨",
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  borderLeft: `5px solid ${stat.color}`,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: colors.primary,
                    marginBottom: "5px",
                  }}
                >
                  {stat.count}
                </div>
                <div style={{ color: "#666", fontSize: "14px" }}>
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        {/* <div>
          <Calendar />
        </div> */}
      </div>

      {/* Active Leads Table */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h3 style={{ color: colors.primary, margin: 0 }}>Active Leads</h3>
          <div
            style={{
              backgroundColor: colors.secondary.sky,
              color: colors.primary,
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            💡 Click on any row to view detailed information
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: colors.primary }}>
                {[
                  "Lead ID",
                  "Service Type",
                  "Location",
                  "Priority",
                  "Status",
                  "Time",
                  "SPOC",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    style={{
                      padding: "12px",
                      color: "white",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
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
                  style={{
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onClick={() => setSelectedLead(lead)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f8f9fa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {lead.id}
                  </td>
                  <td style={{ padding: "12px" }}>{lead.serviceType}</td>
                  <td style={{ padding: "12px" }}>{lead.location}</td>
                  <td style={{ padding: "12px" }}>
                    <div
                      style={{
                        backgroundColor:
                          lead.priority === "Emergency"
                            ? "#ff4444"
                            : lead.priority === "High"
                            ? "#ff4444"
                            : colors.secondary.golden,
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                    >
                      {lead.priority}
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <div
                      style={{
                        backgroundColor:
                          lead.status === "Active"
                            ? colors.secondary.mint
                            : colors.secondary.sky,
                        color: colors.primary,
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                    >
                      {lead.status}
                    </div>
                  </td>
                  <td style={{ padding: "12px" }}>{lead.time}</td>
                  <td style={{ padding: "12px" }}>{lead.spoc}</td>
                  <td style={{ padding: "12px" }}>
                    <div
                      style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addNotification(`Calling ${lead.contact}`, "info");
                        }}
                        style={{
                          backgroundColor: colors.secondary.golden,
                          color: colors.primary,
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "11px",
                        }}
                      >
                        📞
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addNotification("WhatsApp opened", "info");
                        }}
                        style={{
                          backgroundColor: colors.secondary.mint,
                          color: colors.primary,
                          border: "none",
                          padding: "5px 10px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "11px",
                        }}
                      >
                        💬
                      </button>
                      {lead.status === "Pending" ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addNotification(
                              `Lead ${lead.id} accepted`,
                              "success"
                            );
                            setAcceptedLead(lead);
                          }}
                          style={{
                            backgroundColor: colors.secondary.sky,
                            color: colors.primary,
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                          }}
                        >
                          Accept
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLead(lead);
                          }}
                          style={{
                            backgroundColor: colors.secondary.rose,
                            color: colors.primary,
                            border: "none",
                            padding: "5px 10px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                          }}
                        >
                          View
                        </button>
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
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <h3 style={{ color: colors.primary, margin: 0 }}>
            🚀 Nearby Leads - Fastest Finger First
          </h3>
          <div
            style={{
              backgroundColor: colors.secondary.mint,
              color: colors.primary,
              padding: "5px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            💡 Click on any lead card to view full details
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
          }}
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
              corporateDetails: {
                companyName: "HealthTech Industries",
                completeAddress:
                  "HSR Layout, Sector 3, Block A\nBangalore, Karnataka - 560102\nIndia",
                buildingFloor: "Tower B, 2nd Floor",
                roomHall: "Medical Room 201",
                landmarks: "Near HSR BDA Complex, Central Mall",
                parkingInstructions: "Ground Floor, Visitor Section",
                gpsCoordinates: "12.9116°N, 77.6456°E",
                primarySpoc: {
                  name: "Dr. Anjali Mehra",
                  designation: "Medical Officer",
                  department: "Health & Safety",
                  mobile: "+91 98765 11111",
                  email: "anjali.mehra@healthtech.com",
                },
                secondarySpoc: {
                  name: "Mr. Vikram Singh",
                  designation: "HR Executive",
                  department: "Human Resources",
                  mobile: "+91 87654 22222",
                  email: "vikram.singh@healthtech.com",
                },
              },
              packageDetails: {
                testName: "Lipid Profile",
                testCode: "LP001",
                packageType: "Executive Health Package",
                sampleType: "Blood",
                fasting: "Required (12 hours)",
                vaccutainerTube: {
                  type: "SST Tube",
                  color: "Gold/Yellow",
                  volume: "5 ml",
                  additives: "Clot Activator",
                  code: "SST-001",
                },
                instructions:
                  "Patient must fast for 12 hours. Collect early morning sample.",
              },
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
              corporateDetails: {
                companyName: "MediCorp Solutions",
                completeAddress:
                  "100 Feet Road, Indiranagar\nBangalore, Karnataka - 560038\nIndia",
                buildingFloor: "Ground Floor, Medical Wing",
                roomHall: "Pharmacy Counter",
                landmarks: "Near Indiranagar Metro, Garuda Mall",
                parkingInstructions: "Street Parking Available",
                gpsCoordinates: "12.9716°N, 77.6412°E",
                primarySpoc: {
                  name: "Pharmacist Kumar",
                  designation: "Chief Pharmacist",
                  department: "Pharmacy Services",
                  mobile: "+91 98765 33333",
                  email: "kumar@medicorp.com",
                },
                secondarySpoc: {
                  name: "Ms. Rekha Patel",
                  designation: "Store Manager",
                  department: "Operations",
                  mobile: "+91 87654 44444",
                  email: "rekha.patel@medicorp.com",
                },
              },
              packageDetails: {
                serviceType: "Medication Delivery",
                medications: [
                  "Insulin Pen",
                  "Blood Pressure Tablets",
                  "Vitamin D3",
                ],
                urgency: "High Priority",
                estimatedTime: "30 minutes",
                instructions:
                  "Patient requires immediate insulin delivery. Handle with care.",
              },
            },
          ].map((lead) => (
            <div
              key={lead.id}
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                padding: "20px",
                border: `3px solid ${
                  lead.priority === "High"
                    ? "#ff4444"
                    : lead.priority === "Medium"
                    ? colors.secondary.golden
                    : colors.secondary.mint
                }`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onClick={() => setSelectedLead(lead)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor:
                    lead.priority === "High"
                      ? "#ff4444"
                      : lead.priority === "Medium"
                      ? colors.secondary.golden
                      : colors.secondary.mint,
                  color: "white",
                  padding: "5px 15px",
                  borderBottomLeftRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {lead.priority}
              </div>

              <div style={{ marginBottom: "15px" }}>
                <h4 style={{ color: colors.primary, margin: "0 0 5px 0" }}>
                  {lead.service} - {lead.id}
                </h4>
                <p
                  style={{
                    margin: "0 0 5px 0",
                    color: "#666",
                    fontSize: "14px",
                  }}
                >
                  📍 {lead.location} ({lead.distance})
                </p>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    color: "#666",
                    fontSize: "12px",
                  }}
                >
                  📌 {lead.coordinates}
                </p>
                <p style={{ margin: "0 0 10px 0", fontSize: "13px" }}>
                  {lead.details}
                </p>
                {lead.veinSpy && (
                  <div
                    style={{
                      backgroundColor: colors.secondary.sky,
                      color: colors.primary,
                      padding: "3px 8px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      display: "inline-block",
                      marginBottom: "10px",
                    }}
                  >
                    Vein Spy Required
                  </div>
                )}
              </div>

              <div
                style={{ display: "flex", gap: "8px", marginBottom: "15px" }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addNotification(`Calling for ${lead.id}`, "info");
                  }}
                  style={{
                    backgroundColor: colors.secondary.golden,
                    color: colors.primary,
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  📞 Call
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addNotification(`WhatsApp for ${lead.id}`, "info");
                  }}
                  style={{
                    backgroundColor: colors.secondary.mint,
                    color: colors.primary,
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                >
                  💬 WhatsApp
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addNotification(
                    `🎉 Lead ${lead.id} grabbed successfully!`,
                    "success"
                  );
                  setAcceptedLead(lead);
                }}
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  width: "100%",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.secondary.golden;
                  e.target.style.color = colors.primary;
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.primary;
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1)";
                }}
              >
                🚀 GRAB LEAD
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Notification System
  const NotificationSystem = () => (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        width: "300px",
      }}
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            backgroundColor:
              notification.type === "success"
                ? colors.secondary.mint
                : notification.type === "warning"
                ? colors.secondary.golden
                : notification.type === "error"
                ? "#ff4444"
                : colors.secondary.sky,
            color: notification.type === "error" ? "white" : colors.primary,
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "slideIn 0.3s ease",
          }}
        >
          <div>
            {notification.type === "success" && "✅"}
            {notification.type === "warning" && "⚠️"}
            {notification.type === "error" && "❌"}
            {notification.type === "info" && "ℹ️"}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              {notification.message}
            </div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>
              {notification.timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
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
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(300px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div style={{ flex: 1, overflow: "auto" }}>{renderCurrentView()}</div>

      <NotificationSystem />
      <WorkflowControlPanel />
      {activeModal === "gps" && <GPSModal />}
      {selectedLead && <LeadDetailModal lead={selectedLead} />}
      {currentWorkflowStep === "vein_spy" && <VeinSpyModal />}
      {currentWorkflowStep === "photo_capture" && <CaptureOrderModal />}
      {currentWorkflowStep === "document_scan" && <DocumentScannerModal />}
      {currentWorkflowStep === "order_complete" && <OrderCompleteModal />}
    </div>
  );
};

export default HealthcareVendorSystem;
