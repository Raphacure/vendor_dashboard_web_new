import React from "react";
import HealthRiskCardStyled from "./HealthRiskCard.styled";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";

interface HealthRiskData {
  type: string;
  employees?: number;
  percentage: string;
  bgColor: string;
  textColor: string;
  numberColor: string;
}

interface HealthRiskCardProps {
  cardData: HealthRiskData;
}

interface HealthRiskListProps {
  riskData?: HealthRiskData[];
  loading?:boolean
}

const sampleRiskData = [
  {
    type: "Diabetes Risk",
    employees: 156,
    percentage: "6.5%",
    bgColor: "#FEF2F2",
    textColor: "text-red-900",
    numberColor: "text-red-600",
  },
  {
    type: "Hypertension Risk",
    employees: 89,
    percentage: "3.7%",
    bgColor: "#FFF7ED",
    textColor: "text-orange-900",
    numberColor: "text-orange-600",
  },
  {
    type: "Obesity Risk",
    employees: 234,
    percentage: "9.8%",
    bgColor: "#FEFCE8",
    textColor: "text-yellow-900",
    numberColor: "text-yellow-600",
  },
  {
    type: "Mental Health Risk",
    employees: 67,
    percentage: "2.8%",
    bgColor: "#FAF5FF",
    textColor: "text-purple-900",
    numberColor: "text-purple-600",
  },
];

export const HealthRiskCard: React.FC<HealthRiskCardProps> = ({ cardData }) => {
  const { type, employees, percentage, bgColor, textColor, numberColor } =
    cardData;

  return (
    <HealthRiskCardStyled bgColor={bgColor}>
      <div>
        <p className={`text-sm font-medium ${textColor} m-0`}>{type}</p>
        {employees && <p className={`text-xs ${numberColor} m-0`}>{employees} employees</p>}
      </div>
      <span className={`text-sm font-bold ${numberColor}`}>{percentage}</span>
    </HealthRiskCardStyled>
  );
};


export const HealthRiskList: React.FC<HealthRiskListProps> = ({
  riskData = sampleRiskData,
  loading = false
}) => {

  return (
    <CustomSpinLoader spinning={loading}>
      <div className="w-full flex gap-3 flex-col">
        {riskData.map((data, index) => (
          <HealthRiskCard key={index} cardData={data} />
        ))}
      </div>
    </CustomSpinLoader>
  );
};

