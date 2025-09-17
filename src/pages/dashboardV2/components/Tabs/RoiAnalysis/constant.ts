const kpiDataPeriods = {
    // 1 Month Data
    "1month": [
      { 
        name: "Total Savings", 
        price: "₹174", 
        percent: "4.2%", 
        mark: "3",
        bgColor: "#92BDF633",
        borderColor: "#92BDF6",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936077691.png",
        dateType:"month"
      },
      { 
        name: "Per Employee Savings", 
        price: "₹4.17", 
        percent: "1.1%", 
        mark: "4",
        bgColor: "#D7EFE496",
        borderColor: "#A3D9C2",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748935987026.png" ,
        dateType:"month"
      },
      { 
        name: "Program ROI", 
        price: "36%", 
        percent: "8.5%", 
        mark: "6",
        bgColor: "#FFD9001A",
        borderColor: "#FFD900",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936017883.png" ,
        dateType:"month"
      },
      {
        name: "Premium Reduction",
        price: "0.35%",
        percent: "3.1%",
        mark: "4",
        bgColor: "#E7C2D433",
        borderColor: "#E7C2D4",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936048854.png",
        dateType:"month"
      },
    ],
  
    // 3 Months Data
    "3months": [
      { 
        name: "Total Savings", 
        price: "₹521", 
        percent: "8.5%", 
        mark: "5",
        bgColor: "#92BDF633",
        borderColor: "#92BDF6",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936077691.png",
        dateType:"3 months"
      },
      { 
        name: "Per Employee Savings", 
        price: "₹12.52", 
        percent: "2.1%", 
        dateType:"3 months",
        mark: "8",
        bgColor: "#D7EFE496",
        borderColor: "#A3D9C2",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748935987026.png" 
      },
      { 
        name: "Program ROI", 
        price: "108%", 
        percent: "12.2%", 
        dateType:"3 months",
        mark: "12",
        bgColor: "#FFD9001A",
        borderColor: "#FFD900",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936017883.png" 
      },
      {
        name: "Premium Reduction",
        price: "1.04%",
        percent: "6.8%",
        dateType:"3 months",
        mark: "8",
        bgColor: "#E7C2D433",
        borderColor: "#E7C2D4",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936048854.png"
      },
    ],
  
    // 6 Months Data
    "6months": [
      { 
        name: "Total Savings", 
        price: "₹1250", 
        percent: "14.7%", 
        mark: "8",
        dateType:"6 months",
        bgColor: "#92BDF633",
        borderColor: "#92BDF6",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936077691.png"
      },
      { 
        name: "Per Employee Savings", 
        price: "₹30.05", 
        percent: "2.8%", 
        mark: "15",
        dateType:"6 months",
        bgColor: "#D7EFE496",
        borderColor: "#A3D9C2",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748935987026.png" 
      },
      { 
        name: "Program ROI", 
        price: "259%", 
        percent: "15.9%", 
        mark: "16",
        dateType:"6 months",
        bgColor: "#FFD9001A",
        borderColor: "#FFD900",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936017883.png" 
      },
      {
        name: "Premium Reduction",
        price: "2.51%",
        percent: "13.1%",
        mark: "14",
        dateType:"6 months",
        bgColor: "#E7C2D433",
        borderColor: "#E7C2D4",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936048854.png"
      },
    ],
  
    // 1 Year Data (Original + Enhanced)
    "1year": [
      { 
        name: "Total Savings", 
        price: "₹2085", 
        percent: "18.3%", 
        mark: "10",
        dateType:"9 months",
        bgColor: "#92BDF633",
        borderColor: "#92BDF6",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936077691.png"
      },
      { 
        name: "Per Employee Savings", 
        price: "₹50.09", 
        percent: "3.2%", 
        dateType:"9 months",
        mark: "20",
        bgColor: "#D7EFE496",
        borderColor: "#A3D9C2",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748935987026.png" 
      },
      { 
        name: "Program ROI", 
        price: "432%", 
        percent: "18.3%",
        dateType:"9 months",
        mark: "20",
        bgColor: "#FFD9001A",
        borderColor: "#FFD900",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936017883.png" 
      },
      {
        name: "Premium Reduction",
        price: "4.18%",
        percent: "18.3%",
        dateType:"9 months",
        mark: "20",
        bgColor: "#E7C2D433",
        borderColor: "#E7C2D4",
        icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936048854.png"
      },
    ]
  };
  
  // Alternative structure - Array with period identifier
  const kpiDataWithPeriods = [
    {
      period: "1month",
      label: "1 Month",
      data: kpiDataPeriods["1month"]
    },
    {
      period: "3months",
      label: "3 Months",
      data: kpiDataPeriods["3months"]
    },
    {
      period: "6months", 
      label: "6 Months",
      data: kpiDataPeriods["6months"]
    },
    {
      period: "1year",
      label: "1 Year", 
      data: kpiDataPeriods["1year"]
    }
  ];
  
  // Export both structures
  export { kpiDataPeriods, kpiDataWithPeriods };