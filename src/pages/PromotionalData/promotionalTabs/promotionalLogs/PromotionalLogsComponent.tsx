import React, { useEffect, useState } from "react";
import { PromotionalDataStyled } from "../promotionalData/PromotionalDataComponent.styled";
import { Pagination, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";
import { toast } from "react-hot-toast";
import PromotionalLogsTable from "./promotionalLogsTable/PromotionalLogsTable";
import { getAllPromotinalLogsAPI } from "../../../../redux/slices/promotionalLogs/promotionalLogsService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const PromotionalLogsComponent = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(50) as any;
  const { linkableId: clientId } = useClientLinkableId();
  const [promotionalType, setPromotionalType] = useState(
    "promotional_mails"
  ) as any;

  const dispatch = useDispatch() as any;

  const { promotionalLogs, error } = useSelector(
    (state: RootState) => state?.promotionsLogs
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    const getAllLogsCall = () => {
      dispatch(
        getAllPromotinalLogsAPI({
          count: pageSize,
          page: pageNumber,
          type: promotionalType,
          linkable_id: clientId,
        })
      );
    };
    getAllLogsCall();
  }, [pageNumber, pageSize, dispatch, promotionalType]);

  const handlePageChange = (val: any, val1: any) => {
    setPageSize(val1);
    setPageNumber(val);
  };

  return (
    <>
      <PromotionalDataStyled>
        <div className="freshbag-wrapper">
          <div className="content getinTouchPage">
            {
              <div>
                <div>
                  <div className="profileinfoHeader">
                    <div className="top-sec-header-sec">
                      <span className="edit-p-text">
                        Manage Promotional Logs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="!my-2">
                  <label className="!text-lg !mr-2">Promotional Type</label>
                  <Select
                    onChange={(value) => {
                      setPromotionalType(value);
                    }}
                    value={promotionalType}
                    placeholder="Select Promotional Type"
                  >
                    <option value="promotional_mails">Promotional Mails</option>
                    <option value="promotional_whatsapp">
                      Promotional Whatsapp
                    </option>
                    <option value="promotional_rcs">Promotional RCS</option>
                    <option value="promotional_sms">Promotional SMS</option>
                  </Select>
                </div>
                <div className="all-institutes-data deltape-table-view max-w-[89vw]">
                  <PromotionalLogsTable
                    current={pageNumber}
                    total={promotionalLogs?.pagination?.totalRecords}
                    onChange={handlePageChange}
                    pageSize={pageSize}
                    allPromotionalData={promotionalLogs}
                  />
                </div>
              </div>
            }
          </div>
        </div>
      </PromotionalDataStyled>
    </>
  );
};

export default PromotionalLogsComponent;
