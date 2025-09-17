import React, { useState } from "react";
import { RFQRequestStyled } from "./RFQRequest.styled";

import RFQRequestTable from "./RFQRequestTable";
import RFQServiceModule from "./RFQServiceModule";

const RFQRequest = () => {
  const [activeViewModule, setActiveViewModule] = useState("service");

  return (
    <RFQRequestStyled>
      <div className="active-view-btn-div">
        <div className="active-view-sub-btn-div">
          <button
            className="btn"
            onClick={() => setActiveViewModule("service")}
            style={{
              border:
                activeViewModule === "service" ? "1px solid #9747FF" : "none",
              color: activeViewModule === "service" ? "#9747FF" : "black",
              borderRadius: "30px",
            }}
          >
            Select Service
          </button>
          <button
            className="btn"
            onClick={() => setActiveViewModule("wellness")}
            style={{
              border:
                activeViewModule === "wellness" ? "1px solid #9747FF" : "none",
              color: activeViewModule === "wellness" ? "#9747FF" : "black",
              borderRadius: "30px",
            }}
          >
            Wellness Subscription
          </button>
        </div>
      </div>

      {activeViewModule === "service" && <RFQServiceModule />}
      {activeViewModule === "wellness" && (
        <div className="Wellness-div">
          <div className="ordertable">
            <RFQRequestTable />
          </div>
        </div>
      )}
    </RFQRequestStyled>
  );
};

export default RFQRequest;
