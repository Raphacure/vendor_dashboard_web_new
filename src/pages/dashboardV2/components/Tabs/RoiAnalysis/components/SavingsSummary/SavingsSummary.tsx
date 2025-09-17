import React, { useEffect, useState } from "react";
import SavingsCard from "./SavingsCard"; // Adjust the import path as needed
import { healthcareSavingsData } from "./constant";

const SavingsSummary = () => {
  const [savingsData, setSavingsData] = useState<any[]>([]);

  const [filters, setFilters] = useState({
    dateType: "1month",
  });

  useEffect(() => {
    const filterdSavingsData = healthcareSavingsData.find((item) => {
      return item.period === filters.dateType;
    });
    setSavingsData(filterdSavingsData?.data || []);
  }, [filters]);

  return (
    <>
      <div className="!mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Savings Summary
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Your comprehensive healthcare savings overview and achievements
          </p>
          <select
            value={filters.dateType}
            onChange={(e) =>
              setFilters({ ...filters, dateType: e.target.value })
            }
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
          >
            {healthcareSavingsData.map((item) => (
              <option key={item.period} value={item.period}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {savingsData.map((card, index) => (
          <SavingsCard
            key={index}
            iconBgColor={card.iconBgColor}
            iconSvg={card.iconSvg}
            amount={card.amount}
            amountColor={card.amountColor}
            title={card.title}
            details={card.details}
            comparisonTitle={card.comparisonTitle}
            comparisonItems={card.comparisonItems}
            savingsMessage={card.savingsMessage}
          />
        ))}
      </div>
    </>
  );
};

export default SavingsSummary;
