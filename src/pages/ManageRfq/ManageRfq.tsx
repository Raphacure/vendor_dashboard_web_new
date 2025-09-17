import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader/Loader";

import { IndexsStyled } from "./Index.styled";
import AllRFQTable from "./AllRFQTable";
import {
  getAllRfqs,
} from "@/redux/slices/rfq/rfqService";
import { useNavigate } from "react-router";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTab from "@/components/custom/Tab/CustomTab";
import dayjs from "dayjs";
import { RootState } from "@/redux/store";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import ManageRfqModals from "./ManageRfqModals";
import { render } from "@react-pdf/renderer";
import { formatStatus } from "@/lib/common";

const ManageRfq = ({
  clientId,
}: {
  clientId?: string;
  sectionName?: string;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeTypes, pop, push } = useCustomModalRenderer([
    "rfqDetails",
    "negotiateRfqStatus",
    "toggleRfqStatus",
  ]);
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState<number>(1);
  const [selectedRfq, setSelectedRfq] = useState(null as any);
  const { loading } = useSelector((state: any) => state?.auth);
  const {
    rfqList,
    rfqTotalRecord,
    loading: rfqLoading,
  } = useSelector((state: RootState) => state?.rfq);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeTab, setActiveTab] = useState("1");
  const SubscriptionType: any = true;

  const getAllServiesRfqApiCall = useCallback(async () => {
    const filters: any = {};
    if (searchText) {
      filters.searchText = searchText;
    }
    dispatch(
      getAllRfqs({
        count: pageSize,
        page: pageNo,
        ...filters,
        isSubscription: false,
        clientId: clientId,
      })
    );
  }, [searchText, pageSize, pageNo, dispatch, clientId]);

  const getAllWellnessRfqApiCall = useCallback(async () => {
    const filters: any = {};
    if (searchText) {
      filters.searchText = searchText;
    }
    dispatch(
      getAllRfqs({
        count: pageSize,
        page: pageNo,
        ...filters,
        isSubscription: SubscriptionType,
        clientId: clientId,
      })
    );
  }, [searchText, pageSize, pageNo, SubscriptionType, dispatch, clientId]);

  const getAllRfqApiCall = useCallback(() => {
    if (activeTab === "1") {
      getAllServiesRfqApiCall();
    } else if (activeTab === "2") {
      getAllWellnessRfqApiCall();
    }
  }, [activeTab, getAllServiesRfqApiCall, getAllWellnessRfqApiCall]);

  useEffect(() => {
    getAllRfqApiCall();
  }, [getAllRfqApiCall]);

  const handleChangeValue = (value: string) => {
    if (searchTimeoutRef.current) {
      if (activeTab === "1") {
        clearTimeout(searchTimeoutRef.current);
      } else if (activeTab === "2") {
        clearTimeout(searchTimeoutRef.current);
      }
    }
    searchTimeoutRef.current = setTimeout(() => {
      setPageNo(1);
      setSearchText(value);
    }, 1000);

    setPageNo(1);
  };

  const handleActionBtnClick = (
    id: any,
    name: string,
    status: "approved" | "rejected" | "negotiate",
    amount?: number,
    comments?: string
  ) => {
    if (!id || !status) return;

    if (status == "negotiate") {
      push("negotiateRfqStatus");
      setSelectedRfq({
        id,
        status,
        name,
        amount,
        comments,
      });
    } else {
      setSelectedRfq({
        id,
        status,
        name,
        amount,
        comments,
      });
      push("toggleRfqStatus");
    }
  };

  const handleViewRFQ = (data: any) => {
    setSelectedRfq(data);
    push("rfqDetails");
  };

  const columns = [
    {
      label: "RFQ ID",
      render: (allServiesData: any, allWellnessData: any) => {
        return (
          <>
            {activeTab === "1" && (
              <div className="serviceCodeWrapper">
                <div onClick={() => handleViewRFQ(allServiesData)}>
                  {allServiesData?.id}
                </div>
                {allServiesData?.is_corporate && (
                  <span className="isCorp">C</span>
                )}
              </div>
            )}
            {activeTab === "2" && (
              <div className="serviceCodeWrapper">
                <div onClick={() => handleViewRFQ(allWellnessData)}>
                  {allWellnessData?.id}
                </div>
                {allWellnessData?.is_corporate && (
                  <span className="isCorp">C</span>
                )}
              </div>
            )}
          </>
        );
      },
    },
    {
      label: "RFQ Name",
      key: "rfq_name",
      dataIndex: "rfq_name",
      render: (item: any) => {
        return formatStatus(item)
      }
    },
    {
      label: "Submittion Date",
      render: (item: any) => {
        return <>{dayjs(item?.created_at).format("YYYY-MM-DD")}</>;
      },
    },
    {
      label: "Submittion Time",
      render: (item: any) => {
        return <>{dayjs(item?.created_at).format("HH:mm:ss")}</>;
      },
    },
    {
      label: "Status",
      render: (item: any) => {
        return <>{item?.status ?? "N/A"}</>;
      },
    },
    {
      label: "Total Amount",
      key: "total_amount",
      dataIndex: "total_amount",
    },
    {
      label: "Action",
      render: (itemV: any) => {
        return (
          <>
            <div className="action-icons-sec-new">
              {!itemV?.status ? (
                <div className="flex items-center justify-center gap-2">
                  {itemV?.status != "rejected" && (
                    <SecoundaryButton
                      onClick={() => {
                        handleActionBtnClick(
                          itemV?.id,
                          itemV?.rfq_name,
                          "approved"
                        );
                      }}
                      className="!border-green-600 !text-green-600"
                    >
                      Approve
                    </SecoundaryButton>
                  )}

                  {/* negotiate */}
                  <SecoundaryButton
                    onClick={() => {
                      handleActionBtnClick(
                        itemV?.id,
                        itemV?.rfq_name,
                        "negotiate",
                        itemV?.total_amount
                      );
                    }}
                    className="!border-[#252b61"
                  >
                    Negotiate
                  </SecoundaryButton>

                  {/* reject */}
                  <SecoundaryButton
                    onClick={() => {
                      handleActionBtnClick(
                        itemV?.id,
                        itemV?.rfq_name,
                        "rejected"
                      );
                    }}
                    className="!border-red-500 text-red-500"
                  >
                    Reject
                  </SecoundaryButton>
                </div>
              ) : (
                <p
                  className={`capitalize ${
                  itemV?.status === "approved" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {itemV?.status}
                </p>
              )}
            </div>
          </>
        );
      },
    },
  ] as any;

  return (
    <>
      <IndexsStyled>
        <div className="freshbag-wrapper px-2 py-2 sm:py-2 sm:px-3">
          {loading && <Loader />}
          <div className="content getinTouchPage">
            <h2>RFQ</h2>
            <div className="create-new-institute-sec-content-all d-flex align-items-end justify-content-between">
              <div className="student-fields-sec-content-all deltape-form w-50 d-flex flex-column">
                <div className="student-info-row w-100 ">
                  <CommonSearchBox
                    className="h-10"
                    onSearch={handleChangeValue}
                  />
                </div>
              </div>
              <div>
                <PrimaryButton
                  className="py-2"
                  onClick={() => navigate(`/rfq/rfqcreate?type=${activeTab}`)}
                >
                  Request for Quote
                </PrimaryButton>
              </div>
            </div>

            <div className="mt-4">
              <CustomTab
                onChange={(key) => {
                  setPageNo(1);
                  setActiveTab(key);
                  setSearchText("");
                }}
                tabs={[
                  {
                    label: "Service Subscription",
                    value: "1",
                    children: (
                      <>
                        <AllRFQTable
                          columns={columns}
                          rfqList={rfqList}
                          isLoading={rfqLoading}
                          page={pageNo}
                          total={rfqTotalRecord}
                          pageSize={pageSize}
                          onPageChange={(page: number, pageSize: number) => {
                            setPageNo(page);
                            setPageSize(pageSize);
                          }}
                        />
                      </>
                    ),
                  },
                  {
                    label: "Wellness Subscription",
                    value: "2",
                    children: (
                      <AllRFQTable
                        pageSize={pageSize}
                        rfqList={rfqList}
                        columns={columns}
                        isLoading={rfqLoading}
                        page={pageNo}
                        total={rfqTotalRecord}
                        onPageChange={(page: number, pageSize: number) => {
                          setPageNo(page);
                          setPageSize(pageSize);
                        }}
                      />
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <ManageRfqModals
          activeTypes={activeTypes}
          pop={pop}
          selectedRfq={selectedRfq}
          activeTab={activeTab}
          onRefresh={getAllRfqApiCall}
        />
      </IndexsStyled>
    </>
  );
};

export default ManageRfq;
