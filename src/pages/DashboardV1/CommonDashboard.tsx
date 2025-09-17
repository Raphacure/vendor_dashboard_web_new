import React from "react";
import { CommonDashboardStyled } from "./CommonDashboard.styled";
import {
  PieChart,
  BarChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ComposedChart,
  Area,
} from "recharts";
import TableModule from "./TableModule";
import { IoIosArrowForward } from "react-icons/io";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Divide } from "lucide-react";
import { default as DemographicsCardV2 } from "../dashboardV2/components/Tabs/HealthWallet/Cards/DemographicsCard/DemographicsCard";
import DetailedServiceCard from "../dashboardV2/components/Tabs/ServiceUtilization/Cards/DetailedServiceTable/DetailedServiceCard";
import { HealthRiskList } from "../dashboardV2/components/Tabs/HealthMetrics/Cards/HealthRiskCard/HealthRiskCard";
import CostCalculator from "../dashboardV2/components/Tabs/RoiAnalysis/components/CostCalculator/CostCalculator";

const healthRiskData = [
  {
    type: "Pharmacy Benefits",
    percentage: "₹2,34,567", // Placeholder
    bgColor: "#f9fafb",
    textColor: "#000000", // Placeholder
    numberColor: "#000000", // Placeholder
  },
  {
    type: "In-Clinic Consults",
    percentage: "₹1,75,500", // Placeholder
    bgColor: "#f9fafb",
    textColor: "#000000", // Placeholder
    numberColor: "#000000", // Placeholder
  },
  {
    type: "Diagnostic Tests",
    percentage: "₹1,23,400", // Placeholder
    bgColor: "#f9fafb",
    textColor: "#000000", // Placeholder
    numberColor: "#000000", // Placeholder
  },
];

const data = [
  { name: "Insurance Utilization", value: 400 },
  { name: "Generic Drug Adoption", value: 300 },
  { name: "Telemedicine Adoption", value: 300 },
  { name: "Preventive Health Checks", value: 200 },
  { name: "Other Savings", value: 100 },
];
const data1 = [
  { name: "Jan", utilization: 58, avgValue: 500 },
  { name: "Feb", utilization: 62, avgValue: 525 },
  { name: "Mar", utilization: 65, avgValue: 550 },
  { name: "Apr", utilization: 68, avgValue: 575 },
  { name: "May", utilization: 72, avgValue: 600 },
  { name: "Jun", utilization: 68, avgValue: 625 },
];
const data2 = [
  { location: "Mumbai", walletBalance: 85, utilizationRate: 72 },
  { location: "Delhi", walletBalance: 78, utilizationRate: 68 },
  { location: "Bangalore", walletBalance: 92, utilizationRate: 75 },
  { location: "Chennai", walletBalance: 76, utilizationRate: 65 },
  { location: "Hyderabad", walletBalance: 82, utilizationRate: 70 },
  { location: "Pune", walletBalance: 74, utilizationRate: 64 },
  { location: "Kolkata", walletBalance: 68, utilizationRate: 60 },
];
const data3 = [
  {
    quarter: "Q1",
    specialist: 65,
    gp: 35,
  },
  {
    quarter: "Q2",
    specialist: 55,
    gp: 45,
  },
  {
    quarter: "Q3",
    specialist: 45,
    gp: 55,
  },
  {
    quarter: "Q4",
    specialist: 35,
    gp: 65,
  },
];
const data4 = [
  { name: "Q1", branded: 70, generic: 30 },
  { name: "Q2", branded: 65, generic: 35 },
  { name: "Q3", branded: 55, generic: 45 },
  { name: "Q4", branded: 40, generic: 60 },
];
const data5 = [
  {
    name: "Mumbai",
    insurance: 85,
    generic: 42,
    telemedicine: 68,
    preventive: 32,
  },
  {
    name: "Delhi",
    insurance: 78,
    generic: 39,
    telemedicine: 72,
    preventive: 35,
  },
  {
    name: "Bangalore",
    insurance: 91,
    generic: 35,
    telemedicine: 75,
    preventive: 30,
  },
  {
    name: "Chennai",
    insurance: 76,
    generic: 44,
    telemedicine: 65,
    preventive: 33,
  },
  {
    name: "Hyderabad",
    insurance: 82,
    generic: 40,
    telemedicine: 69,
    preventive: 32,
  },
  {
    name: "Pune",
    insurance: 74,
    generic: 47,
    telemedicine: 61,
    preventive: 36,
  },
  {
    name: "Kolkata",
    insurance: 67,
    generic: 50,
    telemedicine: 56,
    preventive: 38,
  },
];
const data6 = [
  { ageGroup: "18-25", percentage: 15 },
  { ageGroup: "26-35", percentage: 32 },
  { ageGroup: "36-45", percentage: 28 },
  { ageGroup: "46-55", percentage: 18 },
  { ageGroup: "56-65", percentage: 5 },
  { ageGroup: "65+", percentage: 2 },
];
const data7 = [
  {
    location: "Mumbai",
    gp: 43,
    specialist: 18,
    opd: 16,
    healthChecks: 12,
    pharmacy: 6,
    others: 5,
  },
  {
    location: "Delhi",
    gp: 38,
    specialist: 23,
    opd: 17,
    healthChecks: 12,
    pharmacy: 5,
    others: 5,
  },
  {
    location: "Bangalore",
    gp: 45,
    specialist: 26,
    opd: 12,
    healthChecks: 8,
    pharmacy: 4,
    others: 5,
  },
  {
    location: "Chennai",
    gp: 36,
    specialist: 21,
    opd: 22,
    healthChecks: 11,
    pharmacy: 5,
    others: 5,
  },
  {
    location: "Hyderabad",
    gp: 40,
    specialist: 23,
    opd: 16,
    healthChecks: 13,
    pharmacy: 4,
    others: 4,
  },
];

const locations = [
  { name: "Mumbai", users: 3454, color: "#0ECF9F" },
  { name: "Bangalore", users: 3454, color: "#2F80ED" },
  { name: "Delhi", users: 3454, color: "#EB5757" },
  { name: "Chennai", users: 3454, color: "#F2994A" },
  { name: "Chennai", users: 3454, color: "#27AE60" },
  { name: "Others", users: 3454, color: "#2D9CDB" },
];

const demoCardData = [
  {
    name: "Total Savings",
    price: "₹1,24,500",
    subTitle: "+12.5% from last month",
    icon: "/public/icons/wallet.svg", // Assuming an icon path
  },
  {
    name: "Monthly Spend",
    price: "₹95,167",
    subTitle: "Peak month: November",
    icon: "/public/icons/card.svg", // Assuming an icon path
  },
  {
    name: "Total Consultations",
    price: "36",
    subTitle: "",
    icon: "/public/icons/chat.svg", // Assuming an icon path
    customRender: () => (
      <div className="text-sm">
        <p>
          Virtual: <span className="text-purple-600">24</span>
        </p>
        <p>
          In-clinic: <span className="text-purple-600">12</span>
        </p>
        <p>
          Savings: <span className="text-purple-600">₹12,000</span>
        </p>
      </div>
    ),
  },
  {
    name: "Wallet Investment",
    price: "₹50,000",
    subTitle: "Current balance: ₹15,833",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1748936529358.png", // Assuming an icon path
  },
  {
    name: "Total Time Saved",
    price: "72 hours",
    subTitle: "Equivalent to 9 working days",
    icon: "/public/icons/time.svg", // Assuming an icon path
  },
  {
    name: "Virtual Consultations",
    price: "24",
    subTitle: "Travel time saved:",
    icon: "/public/icons/video-call.svg", // Assuming an icon path
    customRender: () => (
      <div className="text-sm">
        <p className="text-green-600">48 hours</p>
        <p className="text-green-600">₹9,600</p>
      </div>
    ),
  },
  {
    name: "Home Lab Tests",
    price: "12",
    subTitle: "Time saved:",
    icon: "/public/icons/shield.svg", // Assuming an icon path
    customRender: () => (
      <div className="text-sm">
        <p className="text-red-600">24 hours</p>
        <p className="text-red-600">₹3,600</p>
      </div>
    ),
  },
];

const COLORS = ["#6A5ACD", "#3CB371", "#B280FF", "#E19133", "#F56565"];

const CommonDashboard = (props: any) => {
  const {
    kpiData,
    sectionName,
    tableHead,
    tableBody,
    reportData,
    costData,
    empData,
  } = props;

  const roiCardName = [
    {
      name: "Total Savings",
    },
    {
      name: "Per Employee Savings",
    },
    {
      name: "Program ROI",
    },
    {
      name: "Premium Reduction",
    },
  ];
  const costDataName = [
    {
      name: "Total Utilization",
    },
    {
      name: "Active Users",
    },
    {
      name: "Average Service/ User ",
    },
    {
      name: "Average Service/ User ",
    },
  ];
  const empDataName = [
    {
      name: "Employees",
    },
    {
      name: "Spouses ",
    },
    {
      name: "Children ",
    },
  ];

  const ConsultsCard = (props: any) => {
    const { data, index } = props;

    // Determine image based on index
    const cardImage =
      index === 0
        ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747973522989.png"
        : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747973871306.png";

    return (
      <div className="kpi-card">
        <p className="kpi-card-title">
          {roiCardName[index]?.name}
          <img src={cardImage} alt="" />
        </p>
        <p
          className={
            sectionName == "locationinsight"
              ? "kpi-card-sub-title kpi-card-sub-title1"
              : "kpi-card-sub-title"
          }
        >
          {index > 1
            ? `${data?.price}%`
            : ` ${sectionName == "locationinsight" ? "" : "₹"}${data?.price}`}
        </p>

        <div className="d-flex align-items-center gap-3">
          <p className="kpi-card-subs-title">{data?.percent} from last month</p>
          <p
            className={
              data?.key === "1"
                ? "kpi-card-subs-title percent-text"
                : "percent-text1 percent-text"
            }
          >
            {data?.mark}%
            {data?.key === "1" ? (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1745565237874.png"
                alt=""
              />
            ) : (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747974215437.png"
                alt=""
              />
            )}
          </p>
        </div>
      </div>
    );
  };
  const UserSavingGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="30%" // Positions the center of the pie toward the left
            cy="50%"
            innerRadius="50%" // Relative to container
            outerRadius="90%" // Relative to container
            paddingAngle={0}
            dataKey="value"
          >
            {data?.map((entry: any, index: any) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };
  const UserServiceGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data6}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="ageGroup"
            label={{ value: "Age Group", position: "bottom", offset: 10 }}
          />
          <YAxis
            label={{
              value: "Percentage (%)",
              angle: -90,
              position: "center",
              dx: -30,
            }}
            domain={[0, 40]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="percentage" fill="rgba(104, 116, 245, 0.8)" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  const CustomizedTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            padding: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p>{`${payload[0].payload.quarter}`}</p>
          <p
            style={{ color: "#f27474" }}
          >{`Specialist Consultations: ${payload[0].value}%`}</p>
          <p
            style={{ color: "#4cc29e" }}
          >{`GP Consultations: ${payload[1].value}%`}</p>
        </div>
      );
    }

    return null;
  };
  const UserSpecialistGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data3}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip content={<CustomizedTooltip />} />
          <Legend />
          <Bar
            dataKey="specialist"
            stackId="a"
            fill="#f27474"
            name="Specialist Consultations"
          />
          <Bar
            dataKey="gp"
            stackId="a"
            fill="#4cc29e"
            name="GP Consultations"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  const UserUtilizationGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data1}
          margin={{ top: 10, right: 50, left: 50, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Month", position: "insideBottom", offset: -10 }}
          />
          <YAxis
            yAxisId="left"
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
            label={{
              value: "Utilization Rate (%)",
              angle: -90,
              position: "insideLeft",
              dx: -10,
              dy: 10, // vertically center the label
              style: { textAnchor: "middle" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 700]}
            tickFormatter={(tick) => `₹${tick}`}
            label={{
              value: "Avg. Transaction Value (₹)",
              angle: 90,
              position: "insideRight",
              dx: 10,
              dy: 10, // vertically center the label
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="utilization"
            stroke="#4285F4"
            fill="#4285F4"
            fillOpacity={0.1}
            strokeWidth={2}
            name="Utilization Rate"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgValue"
            stroke="#00C49F"
            strokeWidth={2}
            name="Avg. Transaction Value"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  const UserDrugGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data4}
          margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Quarter", position: "insideBottom", offset: -10 }}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
            label={{
              value: "Percentage (%)",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip />
          <Legend verticalAlign="top" />

          {/* Branded Drugs Line */}
          <Line
            type="monotone"
            dataKey="branded"
            stroke="#FF4C4C"
            strokeWidth={2}
            name="Branded Drugs"
            dot={{ r: 3 }}
          />

          {/* Generic Drugs Line */}
          <Line
            type="monotone"
            dataKey="generic"
            stroke="#00C49F"
            strokeWidth={2}
            name="Generic Drugs"
            dot={{ r: 3 }}
          />

          {/* Area fill between the lines - optional for background color */}
          <Area
            type="monotone"
            dataKey="branded"
            stroke={"false"}
            fill="#FF4C4C"
            fillOpacity={0.1}
          />
          <Area
            type="monotone"
            dataKey="generic"
            stroke={"false"}
            fill="#00C49F"
            fillOpacity={0.1}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  const UserLocationGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data2}
          margin={{ top: 20, right: 50, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="location"
            label={{ value: "Location", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            yAxisId="left"
            label={{
              value: "Wallet Balance (₹ Lakhs)",
              angle: -90,
              dy: 10,
              dx: -10,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Utilization Rate (%)",
              dy: 10,
              position: "insideRight",
              angle: -90,
              dx: -10,
              style: { textAnchor: "middle" },
            }}
            domain={[0, 100]}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="walletBalance"
            barSize={40}
            fill="#90caf9"
            name="Wallet Balance"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="utilizationRate"
            stroke="#26a69a"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Utilization Rate"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  };
  const UserLocationWiseGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data2}
          margin={{ top: 20, right: 50, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="location"
            label={{ value: "Location", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            yAxisId="left"
            label={{
              value: "Wallet Balance (₹ Lakhs)",
              angle: -90,
              dy: 10,
              dx: -10,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Utilization Rate (%)",
              dy: 10,
              position: "insideRight",
              angle: -90,
              dx: -10,
              style: { textAnchor: "middle" },
            }}
            domain={[0, 100]}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="walletBalance"
            barSize={40}
            fill="#90caf9"
            name="Wallet Balance"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="utilizationRate"
            stroke="#26a69a"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Utilization Rate"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  };
  const UserROILocationGraph = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data5}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{ value: "Location", position: "bottom", offset: 20 }}
          />
          <YAxis
            label={{
              value: "Savings (₹ Lakhs)",
              angle: -90,
              position: "center",
              dx: -20,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="insurance"
            fill="#6f63ff"
            name="Insurance Utilization"
          />
          <Bar dataKey="generic" fill="#3cb371" name="Generic Drug Adoption" />
          <Bar
            dataKey="telemedicine"
            fill="#d38dff"
            name="Telemedicine Adoption"
          />
          <Bar
            dataKey="preventive"
            fill="#ed8936"
            name="Preventive Health Checks"
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  const ReportCards = (props: any) => {
    const { reportData } = props;
    console.log(reportData, "reportData");
    return (
      <div className="report-card-div w-100">
        <p className="report-card-title">
          High Limit ({reportData?.price}){" "}
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747974215437.png"
            alt=""
          />
        </p>
        <p className="report-card-price">{reportData?.finalPrice}</p>

        <div className="d-flex align-items-center justify-content-between mb-0">
          <p className="report-card-emp">{reportData?.percent}% of employees</p>
          <p className="report-card-emp-grp">{reportData?.avg}%</p>
        </div>

        <div>
          <p className="d-flex align-items-center justify-content-between mb-0">
            <span className="report-card-emp">Utilization</span>
            <span className="report-card-emp-grp">{reportData?.grp}%</span>
          </p>
          <ProgressBar now={reportData?.grp} />
        </div>
      </div>
    );
  };
  const DemographicsCard = (props: any) => {
    const { costData, index, keyName } = props;
    return (
      <div className="demographics-card-div">
        <p className=" report-card-title const-card-title">
          <p className="kpi-card-title">
            {keyName == "emp"
              ? empDataName[index]?.name
              : costDataName[index]?.name}
          </p>
          <img
            src="	https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747981499421.png"
            alt=""
          />
        </p>
        <p className="report-card-price cost-card-price">{costData?.price}</p>

        <div className="d-flex align-items-center justify-content-between">
          <p className="kpi-card-subs-title cost-kpi-card-subs-title">
            V/S previous Quarter
          </p>
          <p className={"percent-text1 percent-text"}>
            {costData?.percent} %
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747974215437.png"
              alt=""
            />
          </p>
        </div>
      </div>
    );
  };

  const LocationWiseSavings = () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data7}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <YAxis
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
            label={{
              value: "Percentage (%)",
              angle: -90,
              position: "insideLeft",
              dx: -10,
              dy: 10, // vertically center the label
              style: { textAnchor: "middle" },
            }}
          />

          <XAxis dataKey="location" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar
            dataKey="gp"
            stackId="a"
            fill="#4F9DED"
            name="Telemedicine (GP)"
          />
          <Bar
            dataKey="specialist"
            stackId="a"
            fill="#A284EB"
            name="Telemedicine (Specialist)"
          />
          <Bar
            dataKey="opd"
            stackId="a"
            fill="#4EC29E"
            name="OPD Consultations"
          />
          <Bar
            dataKey="healthChecks"
            stackId="a"
            fill="#F8A84C"
            name="Health Checks"
          />
          <Bar dataKey="pharmacy" stackId="a" fill="#F06565" name="Pharmacy" />
          <Bar dataKey="others" stackId="a" fill="#8C8C8C" name="Others" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <CommonDashboardStyled>
      {sectionName == "demographics" || sectionName == "costsaving" ? (
        <>
          <div className="d-flex align-items-center gap-4">
            {costData?.map((item: any, idx: number) => {
              return <DemographicsCard costData={item} key={idx} index={idx} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="kpi-card-div">
            <p className="card-heading-title">KPI Cards</p>
            <div className="kpi-card-map">
              {kpiData?.map((item: any, idx: number) => {
                return <ConsultsCard data={item} key={idx} index={idx} />;
              })}
            </div>
          </div>
        </>
      )}

      {/* {sectionName !== "locationinsight" && (
        <div className="d-flex gap-5">
          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Savings Breakdown</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  Anually
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div ">
              {sectionName == "demographics" ? (
                <>
                  <UserServiceGraph />
                </>
              ) : (
                <>
                  <UserSavingGraph />
                </>
              )}
            </div>
          </div>

          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Service Utilization Trends</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  6Months
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  1 Year
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  2 Years
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div">
              {sectionName == "demographics" ? (
                <>
                  <UserDrugGraph />
                </>
              ) : (
                <>
                  <UserUtilizationGraph />
                </>
              )}
            </div>
          </div>
        </div>
      )} */}

      {sectionName === "roi" && (
        <div className="!mt-[54px]">
          <DemographicsCardV2 cardData={demoCardData} />
        </div>
      )}

      {sectionName === "roi" && (
        <DetailedServiceCard title="Top Spending Categories">
          <HealthRiskList riskData={healthRiskData} />
        </DetailedServiceCard>
      )}

      {sectionName === "roi" && (
        <CostCalculator />
      )}



      {sectionName !== "roi" &&
        sectionName !== "demographics" &&
        sectionName !== "costsaving" &&
        sectionName !== "locationinsight" && (
          <div className="table-grap-div">
            <div className="age-graph-div w-100">
              <div className="age-heading-graph-div bg-color-remove">
                <p className="">Spend Limit Distribution</p>
                <div className=" graph-filter-btn-div">
                  <button className="btn view-report-btn">
                    View Detailed Report <IoIosArrowForward />
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center w-100 parent-graph-div gap-4">
                {reportData?.map((item: any) => {
                  return <ReportCards reportData={item} />;
                })}
              </div>
            </div>
          </div>
        )}
      <div className="table-grap-div">
        <div className="age-graph-div w-100">
          <div className="age-heading-graph-div bg-color-remove">
            <p className="">Service Type Utilization</p>
            <div className=" graph-filter-btn-div">
              <button className="btn view-report-btn">
                View Detailed Report <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center w-100 parent-graph-div ">
            <TableModule tableHead={tableHead} tableBody={tableBody} />
          </div>
        </div>
      </div>

      {sectionName == "demographics" && (
        <div className="table-grap-div">
          <div className="age-graph-div w-100">
            <div className="age-heading-graph-div bg-color-remove">
              <p className="">User Type Distribution</p>
              <div className=" graph-filter-btn-div">
                <button className="btn view-report-btn">
                  View Detailed Report <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div  gap-4">
              {empData?.map((item: any, idx: number) => {
                return (
                  <DemographicsCard
                    costData={item}
                    key={idx}
                    index={idx}
                    keyName={"emp"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* {sectionName == "roi" && (
        <div className="d-flex gap-5">
          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Specialist to GP Shift</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  Anually
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div ">
              <UserSpecialistGraph />
            </div>
          </div>

          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Generic Drug Adoption</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  Anually
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div">
              <UserDrugGraph />
            </div>
          </div>
        </div>
      )} */}

      {sectionName !== "demographics" && sectionName !== "locationinsight" && (
        <div className="location-grap-div">
          <div className="age-graph-div w-100">
            <div className="age-heading-graph-div">
              <p className="">
                {sectionName == "costsaving"
                  ? "Utilization By Location"
                  : "Location-wise Wallet Utilization"}
              </p>

              {sectionName == "roi" && (
                <div className=" graph-filter-btn-div">
                  <button className="btn graph-filter-btn ">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1747996785456.png"
                      alt=""
                    />
                  </button>
                </div>
              )}
            </div>
            {sectionName == "roi" || sectionName == "costsaving" ? (
              <div className="d-flex align-items-center w-100 parent-graph-div ">
                <UserROILocationGraph />
              </div>
            ) : sectionName == "locationinsight" ? (
              <UserLocationWiseGraph />
            ) : (
              <div className="d-flex align-items-center w-100 parent-graph-div ">
                <UserLocationGraph />
              </div>
            )}
          </div>
        </div>
      )}

      {sectionName == "locationinsight" && (
        <div className="d-flex gap-5">
          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Top 5 Locations by Utilization</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  Anually
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div ">
              <>
                <UserServiceGraph />
              </>
            </div>
          </div>

          <div className="age-graph-div w-50">
            <div className="age-heading-graph-div">
              <p className="">Top 5 Locations by Utilization</p>

              <div className=" graph-filter-btn-div">
                <button className="btn graph-filter-btn activeBtn">
                  Anually
                </button>
                <button className="btn graph-filter-btn activeBtn">
                  Quarterly
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div ">
              <>
                <UserServiceGraph />
              </>
            </div>
          </div>
        </div>
      )}

      {sectionName == "locationinsight" && (
        <div className="location-grap-div">
          <div className="age-graph-div w-100">
            <div className="age-heading-graph-div">
              <p className="">Location-wise Savings</p>
            </div>
            <div className="d-flex align-items-center w-100 parent-graph-div ">
              <LocationWiseSavings />
            </div>
          </div>
        </div>
      )}

      {(sectionName == "demographics" || sectionName == "locationinsight") && (
        <div className="d-flex gap-5">
          <div className="age-graph-div  demographics-table-grap-div">
            <div className="age-heading-graph-div bg-color-remove">
              <p className="">Regional Distribution</p>
            </div>
            <div className="demographics-upload-div">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1748002952999.png"
                alt=""
              />
              <p>Interactive map showing Distribution across India</p>
              <p>Hover over regions to see detailed statistics</p>
            </div>
          </div>

          <div className="top-locations-container age-graph-div">
            <h3>Top Locations</h3>
            {locations.map((location, index) => (
              <div key={index} className="location-row">
                <div className="location-info">
                  <div
                    className="location-color-bar"
                    style={{ backgroundColor: location.color }}
                  ></div>
                  <div className="location-text">
                    <div className="location-name">{location.name}</div>
                    <div className="location-users">{location.users} Users</div>
                  </div>
                </div>
                <div className="location-stats">
                  <div className="percentage">29%</div>
                  <div className="growth">
                    <span>20%</span>
                    <span className="arrow">↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </CommonDashboardStyled>
  );
};

export default CommonDashboard;
