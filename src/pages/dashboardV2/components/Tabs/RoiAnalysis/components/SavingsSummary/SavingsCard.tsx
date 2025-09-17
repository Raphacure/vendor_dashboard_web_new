import React from "react";

interface SavingsCardProps {
  iconBgColor: string;
  iconSvg: React.ReactNode;
  amount: string;
  amountColor: string; // Added this prop
  title: string;
  details: {
    label: string;
    value: string;
  }[];
  comparisonTitle: string;
  comparisonItems: {
    type: string;
    bgColor: string;
    textColor: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
  savingsMessage: string;
}

const SavingsCard: React.FC<SavingsCardProps> = ({
  iconBgColor,
  iconSvg,
  amount,
  amountColor, // Added this prop
  title,
  details,
  comparisonTitle,
  comparisonItems,
  savingsMessage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)] !p-6">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          {iconSvg}
        </div>
        <span className={`text-2xl font-bold ${amountColor}`}>{amount}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-2 text-sm text-gray-600">
        {details.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.label}</span>
            <span className={item.label.includes("vs") ? "" : "font-medium"}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">
          {comparisonTitle}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {comparisonItems.map((comparison, index) => (
            <div key={index} className={`${comparison.bgColor} p-3 rounded-lg`}>
              <p className={`text-xs ${comparison.textColor} font-medium mb-1`}>
                {comparison.type}
              </p>
              <div className="space-y-1 text-xs text-gray-600">
                {comparison.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <span>{item.label}:</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-2 bg-green-50 rounded-lg">
          <p className="text-xs text-green-700 font-medium">{savingsMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default SavingsCard;
