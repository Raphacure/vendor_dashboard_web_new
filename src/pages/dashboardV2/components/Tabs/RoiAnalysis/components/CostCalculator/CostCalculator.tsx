import { useState } from "react";
import { CostCalculatorContainer } from "./CostCalculator.styled";
import CustomTab from "@/components/custom/Tab/CustomTab";
import MedicineCalculator from "./tabs/MedicineCalculator";
import ConsultationCalculator from "./tabs/ConsultationCalculator";
import LabTestCalculator from "./tabs/LabTestCalculator";

const CostCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("medicine");

  const tabs = [
    {
      value: "medicine",
      label: "Medicine Calculator",
      Component: <MedicineCalculator />,
      HeadingContent: (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Medicine Calculator
          </h1>
          <p className="mt-2 text-gray-600">
            Compare costs between generic and branded medicines to maximize your
            savings
          </p>
        </>
      ),
    },
    {
      value: "consultations",
      label: "Virtual Consultations",
      Component: <ConsultationCalculator />,
      HeadingContent: (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Virtual Consultations
          </h1>
          <p className="mt-2 text-gray-600">
            Calculate potential savings from virtual consultations
          </p>
        </>
      ),
    },
    {
      value: "Lab",
      label: "Lab Tests",
      Component: <LabTestCalculator />,
      HeadingContent: (
        <>
          <h1 className="text-2xl font-bold text-gray-900">
            Lab Test Calculator
          </h1>
          <p className="mt-2 text-gray-600">
            Compare costs and convenience of home collection vs lab visit for
            diagnostic tests
          </p>
        </>
      ),
    },
  ];

  return (
    <CostCalculatorContainer>
      <div className="mt-6">
        <>
          <h1 className="text-2xl font-bold text-gray-900">ROI Calculator</h1>
        </>
        {/* {tabs.find((tab) => tab.value === activeTab)?.HeadingContent} */}
        <CustomTab
          tabs={tabs.map((tab) => ({ value: tab.value, label: tab.label }))}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {tabs.find((tab) => tab.value === activeTab)?.Component}
      </div>
    </CostCalculatorContainer>
  );
};

export default CostCalculator;
