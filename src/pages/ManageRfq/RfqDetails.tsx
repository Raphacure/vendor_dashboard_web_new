import React from "react";
import { RFQStyled } from "./RFQ_Details.styles";

interface RfqDetailsProps {
  details: any;
  tests: any;
  packages: any;
  cityDetails: any;
  activeTab: any;
  data: any;
}

const RfqDetails: React.FC<RfqDetailsProps> = ({
  details,
  packages,
  tests,
  cityDetails,
  activeTab,
  data,
}) => {
  console.log(data, "data");

  return (
    <RFQStyled>
      <div className="profile-card chk1">
        <div className="profile-info">
          <div className="profile-details">
            <div className="profile-details-text">
              <h2>{details?.rfq_name}</h2>
              <p>
                Status: <span>{details?.status ?? "Open"}</span>
              </p>
            </div>
            <p>
              RFQ ID: <span>{details?.id}</span>
            </p>
            <p>
              Submission Date:
              {new Date(details?.created_at).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <div className="profile-details-text">
              <p>Diagnostic Center: N/A</p>
              <p>Hospital: N/A</p>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-details">
        {/* <div className="header">
          <p>RFQ Details</p>
        </div> */}

        <div className="appointment-info">
          {Object.keys(cityDetails)?.map((city: string, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className="appointment-mode">
                  City:<span className="cityTitle"> {city}</span>
                </div>
                <div className="appointment-item d-flex justify-content-between align-items-center mt-1 pb-1">
                  <div>
                    <label className="mr-1">Number Of Men:</label>
                    <span> {cityDetails?.[city]?.no_of_men || "N/A"}</span>
                  </div>
                  <div>
                    <label className="mr-1">Number Of Women: </label>
                    <span> {cityDetails?.[city]?.no_of_women || "N/A"}</span>
                  </div>
                  <div>
                    <label className="mr-1">Number Of Children :</label>
                    <span>{cityDetails?.[city]?.no_of_children || "N/A"}</span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {activeTab !== "2" && (
        <div className="">
          <label>Test Details:</label>
          <div className="appointment-comments-details">
            <div className="appointment-comment-info">
              {tests.length > 0 ? (
                tests?.map((item: any, index: number) => {
                  return (
                    <div className="appointment-comment-item" key={index}>
                      <li>{item}</li>
                    </div>
                  );
                })
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="">
        <label>Pacakges Details:</label>
        <div className="appointment-comments-details">
          <div className="appointment-comment-info">
            {packages.length > 0 ? (
              packages?.map((item: any, index: number) => {
                return (
                  <div className="appointment-comment-item" key={index}>
                    <li>{item}</li>
                  </div>
                );
              })
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
        <div className="appointment-mode">
          <span>Total Amount: {details?.total_amount} /-</span>
        </div>
      </div>
    </RFQStyled>
  );
};

export default RfqDetails;
