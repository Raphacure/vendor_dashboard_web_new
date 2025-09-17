const virtualConsultationIcon = (
  <svg
    className="w-6 h-6 text-purple-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
      clipRule="evenodd"
    />
  </svg>
);

// Generic Medicines SVG Icon
const genericMedicineIcon = (
  <svg
    className="w-6 h-6 text-green-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// Home Lab Tests SVG Icon
const homeLabTestIcon = (
  <svg
    className="w-6 h-6 text-orange-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);



const cardData1Month = [
  {
    iconBgColor: "bg-purple-100",
    iconSvg: virtualConsultationIcon,
    amount: "₹45,600",
    amountColor: "text-purple-600",
    title: "Virtual Consultations",
    details: [
      { label: "24 consultations", value: "vs OPD visits" },
      { label: "Time saved:", value: "72 hours" },
      { label: "Avg savings:", value: "70% per visit" },
    ],
    comparisonTitle: "Virtual vs OPD Clinic Comparison",
    comparisonItems: [
      {
        type: "Virtual Consultation",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
          { label: "Cost", value: "₹500" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "OPD Clinic Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Cost", value: "₹1,200" },
          { label: "Travel time", value: "90 mins" },
          { label: "Waiting", value: "60 mins" },
          { label: "Travel cost", value: "₹400" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,100 + 2.5 hours per consultation",
  },
  {
    iconBgColor: "bg-green-100",
    iconSvg: genericMedicineIcon,
    amount: "₹78,900",
    amountColor: "text-green-600",
    title: "Generic Medicines",
    details: [
      { label: "Generic vs branded", value: "36 purchases" },
      { label: "Avg discount:", value: "68%" },
      { label: "Quality:", value: "Same efficacy" },
    ],
    comparisonTitle: "Generic vs Branded Medicine Comparison",
    comparisonItems: [
      {
        type: "Generic Medicine",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        items: [
          { label: "Avg cost", value: "₹850" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "High" },
        ],
      },
      {
        type: "Branded Medicine",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Avg cost", value: "₹2,650" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "Medium" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,800 per purchase with same quality",
  },
  {
    iconBgColor: "bg-orange-100",
    iconSvg: homeLabTestIcon,
    amount: "₹28,400",
    amountColor: "text-orange-600",
    title: "Home Lab Tests",
    details: [
      { label: "12 home collections", value: "vs lab visits" },
      { label: "Time saved:", value: "36 hours" },
      { label: "Convenience:", value: "100%" },
    ],
    comparisonTitle: "Home Collection vs Lab Visit Comparison",
    comparisonItems: [
      {
        type: "Home Collection",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
          { label: "Test cost", value: "₹1,800" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "Lab Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Test cost", value: "₹2,200" },
          { label: "Travel time", value: "75 mins" },
          { label: "Waiting", value: "45 mins" },
          { label: "Travel cost", value: "₹300" },
        ],
      },
    ],
    savingsMessage: "You saved ₹700 + 2 hours per test with home convenience",
  },
];

// 3 Months Data
const cardData3Months = [
  {
    iconBgColor: "bg-purple-100",
    iconSvg: virtualConsultationIcon,
    amount: "₹1,36,800",
    amountColor: "text-purple-600",
    title: "Virtual Consultations",
    details: [
      { label: "72 consultations", value: "vs OPD visits" },
      { label: "Time saved:", value: "216 hours" },
      { label: "Avg savings:", value: "70% per visit" },
    ],
    comparisonTitle: "Virtual vs OPD Clinic Comparison",
    comparisonItems: [
      {
        type: "Virtual Consultation",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
          { label: "Cost", value: "₹500" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "OPD Clinic Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Cost", value: "₹1,200" },
          { label: "Travel time", value: "90 mins" },
          { label: "Waiting", value: "60 mins" },
          { label: "Travel cost", value: "₹400" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,100 + 2.5 hours per consultation",
  },
  {
    iconBgColor: "bg-green-100",
    iconSvg: genericMedicineIcon,
    amount: "₹2,36,700",
    amountColor: "text-green-600",
    title: "Generic Medicines",
    details: [
      { label: "Generic vs branded", value: "108 purchases" },
      { label: "Avg discount:", value: "68%" },
      { label: "Quality:", value: "Same efficacy" },
    ],
    comparisonTitle: "Generic vs Branded Medicine Comparison",
    comparisonItems: [
      {
        type: "Generic Medicine",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        items: [
          { label: "Avg cost", value: "₹850" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "High" },
        ],
      },
      {
        type: "Branded Medicine",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Avg cost", value: "₹2,650" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "Medium" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,800 per purchase with same quality",
  },
  {
    iconBgColor: "bg-orange-100",
    iconSvg: homeLabTestIcon,
    amount: "₹85,200",
    amountColor: "text-orange-600",
    title: "Home Lab Tests",
    details: [
      { label: "36 home collections", value: "vs lab visits" },
      { label: "Time saved:", value: "108 hours" },
      { label: "Convenience:", value: "100%" },
    ],
    comparisonTitle: "Home Collection vs Lab Visit Comparison",
    comparisonItems: [
      {
        type: "Home Collection",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
          { label: "Test cost", value: "₹1,800" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "Lab Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Test cost", value: "₹2,200" },
          { label: "Travel time", value: "75 mins" },
          { label: "Waiting", value: "45 mins" },
          { label: "Travel cost", value: "₹300" },
        ],
      },
    ],
    savingsMessage: "You saved ₹700 + 2 hours per test with home convenience",
  },
];

// 6 Months Data
const cardData6Months = [
  {
    iconBgColor: "bg-purple-100",
    iconSvg: virtualConsultationIcon,
    amount: "₹2,73,600",
    amountColor: "text-purple-600",
    title: "Virtual Consultations",
    details: [
      { label: "144 consultations", value: "vs OPD visits" },
      { label: "Time saved:", value: "432 hours" },
      { label: "Avg savings:", value: "70% per visit" },
    ],
    comparisonTitle: "Virtual vs OPD Clinic Comparison",
    comparisonItems: [
      {
        type: "Virtual Consultation",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
          { label: "Cost", value: "₹500" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "OPD Clinic Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Cost", value: "₹1,200" },
          { label: "Travel time", value: "90 mins" },
          { label: "Waiting", value: "60 mins" },
          { label: "Travel cost", value: "₹400" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,100 + 2.5 hours per consultation",
  },
  {
    iconBgColor: "bg-green-100",
    iconSvg: genericMedicineIcon,
    amount: "₹4,73,400",
    amountColor: "text-green-600",
    title: "Generic Medicines",
    details: [
      { label: "Generic vs branded", value: "216 purchases" },
      { label: "Avg discount:", value: "68%" },
      { label: "Quality:", value: "Same efficacy" },
    ],
    comparisonTitle: "Generic vs Branded Medicine Comparison",
    comparisonItems: [
      {
        type: "Generic Medicine",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        items: [
          { label: "Avg cost", value: "₹850" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "High" },
        ],
      },
      {
        type: "Branded Medicine",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Avg cost", value: "₹2,650" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "Medium" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,800 per purchase with same quality",
  },
  {
    iconBgColor: "bg-orange-100",
    iconSvg: homeLabTestIcon,
    amount: "₹1,70,400",
    amountColor: "text-orange-600",
    title: "Home Lab Tests",
    details: [
      { label: "72 home collections", value: "vs lab visits" },
      { label: "Time saved:", value: "216 hours" },
      { label: "Convenience:", value: "100%" },
    ],
    comparisonTitle: "Home Collection vs Lab Visit Comparison",
    comparisonItems: [
      {
        type: "Home Collection",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
          { label: "Test cost", value: "₹1,800" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "Lab Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Test cost", value: "₹2,200" },
          { label: "Travel time", value: "75 mins" },
          { label: "Waiting", value: "45 mins" },
          { label: "Travel cost", value: "₹300" },
        ],
      },
    ],
    savingsMessage: "You saved ₹700 + 2 hours per test with home convenience",
  },
];

// 1 Year Data
const cardData1Year = [
  {
    iconBgColor: "bg-purple-100",
    iconSvg: virtualConsultationIcon,
    amount: "₹5,47,200",
    amountColor: "text-purple-600",
    title: "Virtual Consultations",
    details: [
      { label: "288 consultations", value: "vs OPD visits" },
      { label: "Time saved:", value: "864 hours" },
      { label: "Avg savings:", value: "70% per visit" },
    ],
    comparisonTitle: "Virtual vs OPD Clinic Comparison",
    comparisonItems: [
      {
        type: "Virtual Consultation",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600",
        items: [
          { label: "Cost", value: "₹500" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "OPD Clinic Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Cost", value: "₹1,200" },
          { label: "Travel time", value: "90 mins" },
          { label: "Waiting", value: "60 mins" },
          { label: "Travel cost", value: "₹400" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,100 + 2.5 hours per consultation",
  },
  {
    iconBgColor: "bg-green-100",
    iconSvg: genericMedicineIcon,
    amount: "₹9,46,800",
    amountColor: "text-green-600",
    title: "Generic Medicines",
    details: [
      { label: "Generic vs branded", value: "432 purchases" },
      { label: "Avg discount:", value: "68%" },
      { label: "Quality:", value: "Same efficacy" },
    ],
    comparisonTitle: "Generic vs Branded Medicine Comparison",
    comparisonItems: [
      {
        type: "Generic Medicine",
        bgColor: "bg-green-50",
        textColor: "text-green-600",
        items: [
          { label: "Avg cost", value: "₹850" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "High" },
        ],
      },
      {
        type: "Branded Medicine",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Avg cost", value: "₹2,650" },
          { label: "Quality", value: "FDA approved" },
          { label: "Efficacy", value: "Same" },
          { label: "Availability", value: "Medium" },
        ],
      },
    ],
    savingsMessage: "You saved ₹1,800 per purchase with same quality",
  },
  {
    iconBgColor: "bg-orange-100",
    iconSvg: homeLabTestIcon,
    amount: "₹3,40,800",
    amountColor: "text-orange-600",
    title: "Home Lab Tests",
    details: [
      { label: "144 home collections", value: "vs lab visits" },
      { label: "Time saved:", value: "432 hours" },
      { label: "Convenience:", value: "100%" },
    ],
    comparisonTitle: "Home Collection vs Lab Visit Comparison",
    comparisonItems: [
      {
        type: "Home Collection",
        bgColor: "bg-orange-50",
        textColor: "text-orange-600",
        items: [
          { label: "Test cost", value: "₹1,800" },
          { label: "Travel time", value: "0 mins" },
          { label: "Waiting", value: "0 mins" },
          { label: "Travel cost", value: "₹0" },
        ],
      },
      {
        type: "Lab Visit",
        bgColor: "bg-red-50",
        textColor: "text-red-600",
        items: [
          { label: "Test cost", value: "₹2,200" },
          { label: "Travel time", value: "75 mins" },
          { label: "Waiting", value: "45 mins" },
          { label: "Travel cost", value: "₹300" },
        ],
      },
    ],
    savingsMessage: "You saved ₹700 + 2 hours per test with home convenience",
  },
];

// Export object with all time periods
const healthcareSavingsData = [
  {
    period: "1month",
    data: cardData1Month,
    label:"One Month"
  },
  {
    period: "3months", 
    data: cardData3Months,
    label:"Three Months"
  },
  {
    period: "6months",
    data: cardData6Months,
    label:"Six Months"
  },
  {
    period: "1year",
    data: cardData1Year,
    label:"One Year"
  }
];


export {healthcareSavingsData}