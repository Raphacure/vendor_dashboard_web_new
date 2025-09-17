import { useState } from "react";
import { IndexsStyled } from "./Index.styled";
import CreateService from "./CreateService";
import CreateWellness from "./CreateWellness";
import { useSearchParams } from "react-router";
import CustomTab from "@/components/custom/Tab/CustomTab";

const CreateRFQ = () => {
  const [searchParams] = useSearchParams();
  const typeValue = searchParams.get("type");

  const [activeViewModule, setActiveViewModule] = useState(
    typeValue === "1" ? "service" : "wellness"
  );

  return (
    <IndexsStyled className="px-3">
      <CustomTab
        activeTab={activeViewModule}
        setActiveTab={setActiveViewModule}
        tabs={[
          {
            value: "service",
            label: "Select Service",
            children: <CreateService />,
          },
          {
            value: "wellness",
            label: "Wellness Subscription",
            children: (
              <div className="Wellness-div mt-3">
                <div className="ordertable !p-0">
                  <CreateWellness />
                </div>
              </div>
            ),
          },
        ]}
      />
    </IndexsStyled>
  );
};

export default CreateRFQ;
