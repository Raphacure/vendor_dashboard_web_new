import { useEffect, useState } from "react";
import { PromotionalDataStyled } from "./PromotionalDataComponent.styled";
import { Pagination, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import PromotionalBulkUpload from "../../BulkUpload/BulkUpload";
import PromotionalDataTable from "./promotinalDataTable/PromotionalDataTable";
import { getAllPromotinalDataAPI } from "../../../../redux/slices/promotionalData/promotionalDataService";
import PromotionalFilter from "./filter/PromotionalFilter";
import { RootState } from "../../../../redux/store";
import { toast } from "react-hot-toast";
import PromotionalModal from "./promotionalDataModal/PromotionalModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { checkIsMobile } from "@/lib/common";

const PromotionalDataComponent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(50) as any;

  const dispatch = useDispatch() as any;

  const { promotionalData, error } = useSelector(
    (state: RootState) => state?.promotions
  );

  if (pageNumber > promotionalData?.pagination?.totalPages) {
    setPageNumber(1);
  }

  const [uploadPDFlag, setUploadPDFlag] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    city: [],
    state: [],
    pincode: [],
    section: [],
  }) as any;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // promotional data logic and filter logic

  useEffect(() => {
    const filteredBody = Object.keys(selectedFilters).reduce(
      (acc: any, key: any) => {
        if (selectedFilters[key].length > 0) {
          acc[key] = selectedFilters[key];
        }
        return acc;
      },
      {}
    );
    const getAllUsersCall = () => {
      dispatch(
        getAllPromotinalDataAPI({
          count: pageSize,
          page: pageNumber,
          ...filteredBody,
        })
      );
    };
    getAllUsersCall();
  }, [pageNumber, pageSize, selectedFilters, dispatch]);

  const handlePageChange = (val: any, val1: any) => {
    setPageSize(val1);
    setPageNumber(val);
  };

  //

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedAction("");
    setData(null);
  };

  const handleSoftClose = () => {
    setShow(false);
    setSelectedAction("");
    setData(null);
  };
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null);
  const [selectedAction, setSelectedAction] = useState("");

  const instituteAction = (action: any, data?: any) => {
    const allowedActons = ["promotional"];
    if (allowedActons?.includes(action)) {
      setSelectedAction(action);
      if (data) {
        setData(data);
      } else {
        setData(null);
      }
      handleShow();
    } else {
      console.log("action not allowed");
    }
  };

  const [toolTipShow, setToolTipShow] = useState(false);
  const anySelectedFilters = Object.values(selectedFilters)?.some(
    (value: any) => value.length > 0
  );

  return (
    <>
      <PromotionalDataStyled>
        <div className="freshbag-wrapper">
          <div className="content getinTouchPage">
            {uploadPDFlag ? (
              <>
                <div className="back-arrow-btn-sec-con">
                  <span onClick={() => setUploadPDFlag(false)}>
                    {`<- Back`}
                  </span>
                </div>
                <PromotionalBulkUpload />
              </>
            ) : (
              <div>
                <div>
                  <div className="profileinfoHeader">
                    <div className="top-sec-header-sec mb-3 mt-2 flex justify-between">
                      <span className="edit-p-text">
                        Manage Promotional Data
                      </span>
                      {/* <div>
                        <PrimaryButton
                          onClick={() => setUploadPDFlag(true)}
                        >
                          Upload Promotional Data{" "}
                        </PrimaryButton>
                      </div> */}
                    </div>
                  </div>
                </div>
                <PromotionalFilter
                  setFilter={setSelectedFilters}
                  selectedFilters={selectedFilters}
                />
                <div className="flex justify-end">
                  <div className="send-promotional-mail-btn">
                    <Tooltip
                      title="please select any filters"
                      color="orange"
                      open={toolTipShow && !anySelectedFilters}
                    >
                      <span
                        onMouseEnter={() => {
                          setToolTipShow(true);
                        }}
                        onMouseLeave={() => setToolTipShow(false)}
                      >
                        <PrimaryButton
                          className="py-2"
                          onClick={() =>
                            instituteAction("promotional", selectedFilters)
                          }
                          disabled={!anySelectedFilters}
                        >
                          send promotions
                        </PrimaryButton>
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div
                  className={`all-institutes-data deltape-table-view ${
                    !checkIsMobile() ? "max-w-[89vw]" : ""
                  }`}
                >
                  <PromotionalDataTable
                    current={pageNumber}
                    total={promotionalData?.pagination?.totalCount}
                    onChange={handlePageChange}
                    pageSize={pageSize}
                    allPromotionalData={promotionalData}
                  />
                </div>
              </div>
            )}
          </div>

          <PromotionalModal
            selectedAction={selectedAction}
            data={data}
            handleClose={handleClose}
            show={show}
            handleSoftClose={handleSoftClose}
          />
        </div>
      </PromotionalDataStyled>
    </>
  );
};

export default PromotionalDataComponent;
