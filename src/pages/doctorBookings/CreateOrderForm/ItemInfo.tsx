import React, { useState } from "react";
import { ScanDetailsStyled } from "./ScanDetailsStyled.styled";
import { formatStatus } from "@/lib/common";
import styled from "styled-components";

const SidebarStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100dvh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-x: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &.open {
    width: 600px;
    z-index: 99999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .sidebar-content {
    padding: 16px;
    overflow-y: auto;
    flex: 1;
  }

  .sidebar-close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;

    &:hover {
      color: #333;
    }
  }

  .test-list {
    margin-top: 16px;
  }

  .test-item {
    padding: 8px 0;
    border-bottom: 1px solid #f5f5f5;
  }

  .test-name {
    font-weight: 500;
  }

  .test-info {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 14px;
    color: #666;
  }
`;

const ItemInfoV2 = React.memo(({ consultType, selectedItems }: any) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (!["labpackage", "labtest", "radiology"].includes(consultType)) {
    return null;
  }

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  // Calculate total test count across all selected items
  const getTotalTestCount = () => {
    return selectedItems.reduce((total: any, item: any) => {
      return total + (item?.tests?.length || 0);
    }, 0);
  };

  return (
    <>
      <ScanDetailsStyled>
        <div className="flex flex-col gap-4">
          {selectedItems.map((item: any, index: number) => (
            <div
              key={index}
              className={`checkup-card ${
                selectedItems.length > 1 ? "border border-[#e0e0e0]" : ""
              }`}
            >
              <div className="d-flex justify-content-between">
                <h1 className="checkup-title">{item?.service_name}</h1>
              </div>

              {item?.tests?.length > 0 && (
                <div className="d-flex align-items-center">
                  <p className="sub-heading-description1 sub-heading-tests m-0">
                    {item.tests
                      .slice(0, 5)
                      .map((test: any, testIndex: number, array: any) => (
                        <span key={testIndex}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: test?.service_name,
                            }}
                          />
                          {testIndex < array.length - 1 && ", "}
                        </span>
                      ))}
                    {item.tests.length > 5 && (
                      <span className="text-muted">
                        {" "}
                        + {item.tests.length - 5} more
                      </span>
                    )}
                  </p>
                </div>
              )}

              <div className="d-flex gap-4 mt-3">
                {item?.tests?.length > 0 && (
                  <button className="checkup-button" onClick={openSidebar}>
                    Test for {item?.tests?.length || 0} Parameters
                  </button>
                )}
              </div>

              <div className="heading-description-div">
                <p className="heading-description">Description</p>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="sub-heading-description"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                </div>
              </div>

              <div className="heading-description-div ideal-for-div"></div>

              {item?.reports_within && (
                <div className="checkup-details">
                  <p>
                    <strong>Report Within:</strong>{" "}
                    {item?.reports_within || "-"}
                  </p>
                </div>
              )}

              <div className="checkup-details">
                <p>
                  <strong>Fasting Required:</strong>{" "}
                  {item?.fasting ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Visit Type:</strong>{" "}
                  {formatStatus(item?.visit_type || "")}
                </p>
              </div>

              <div className="heading-description-div mb-5">
                <p className="heading-description">Preparation</p>
                <div className="d-flex align-items-center justify-content-between">
                  <p
                    className="sub-heading-description sub-heading-preparation"
                    dangerouslySetInnerHTML={{ __html: item?.preperation }}
                  ></p>
                </div>
              </div>

              <div className="checkup-video">
                <video
                  src={
                    item?.fasting
                      ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/fasting.mp4"
                      : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/nonfasting.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  controls={false}
                ></video>
              </div>
            </div>
          ))}
        </div>
      </ScanDetailsStyled>

      {/* Custom Sidebar */}
      <SidebarStyled className={sidebarOpen ? "open" : ""}>
        <div className="sidebar-header">
          <h3>Test Parameters ({getTotalTestCount()})</h3>
          <button className="sidebar-close" onClick={closeSidebar}>
            ×
          </button>
        </div>
        <div className="sidebar-content">
          {selectedItems.map((item: any, itemIndex: any) => (
            <div key={itemIndex} className="mb-4">
              <h4 className="font-medium text-lg mb-2">{item.service_name}</h4>
              <ul className="test-list">
                {item.tests?.map((test: any, testIndex: any) => (
                  <li key={testIndex} className="test-item">
                    <div className="test-name">{test.service_name}</div>
                    <div className="test-info">
                      <span>{test.service_code}</span>
                      <span>
                        {test.fasting ? "Fasting Required" : "No Fasting"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SidebarStyled>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
          onClick={closeSidebar}
        />
      )}
    </>
  );
});

export default ItemInfoV2;
