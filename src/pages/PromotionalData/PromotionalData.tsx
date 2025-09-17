import PromotionalDataComponent from "./promotionalTabs/promotionalData/PromotionalDataComponent";
import PromotionalLogsComponent from "./promotionalTabs/promotionalLogs/PromotionalLogsComponent";
import { checkIsMobile } from "@/lib/common";
import CustomTab from "@/components/custom/Tab/CustomTab";

const PromotionalData = () => {
  const tabItems = [
    {
      value: "1",
      label: "Promotional Data",
      children: <PromotionalDataComponent />,
    },
    {
      value: "2",
      label: "Promotional Logs",
      children: <PromotionalLogsComponent />,
    },
  ];

  return (
    <>
      <div className={`px-4 py-3 ${checkIsMobile() ? "!p-2" : ""}`}>
        <CustomTab
          tabs={tabItems}
         />
      </div>
    </>
  );
};

export default PromotionalData;
