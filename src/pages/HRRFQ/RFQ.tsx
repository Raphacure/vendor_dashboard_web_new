import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RFQStyled } from "./RFQ.styled";
import { Modal, Table } from "react-bootstrap";
import {
  getRfqById,
  getRFQListAPI,
  negotiateRFQAPI,
  toggleRfqStatus,
} from "@/redux/slices/generic/genericService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SearchInputField from "./SearchInputField";
import CommonPagination from "./CommonPagination";
import { toast } from "react-hot-toast";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import Loader from "../../components/loader/loader/Loader";

const RFQ = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();
  const [RFQDetailShow, setRFQDetailShow] = useState(false);
  const [renegotiateDetailShow, setRenegotiateDetailShow] = useState(false);
  const [RFQDetails, setRFQDetails] = useState<any>("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedRfq, setSelectedRfq] = useState(null as any);
  const [showSuccessMessage, setShowMessage] = useState(false);
  const [showSuccessMessageText, setShowMessageText] = useState("");
  const [userComments, setUserComments] = useState("");
  const [showRfqModel, setShowRfqModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rfqListData,setRfqListData] = useState([]) as any
  const [allRFQList,setAllRFQList] = useState(0) as any;

  const handleClose = () => {
    setRFQDetailShow(false);
    setRenegotiateDetailShow(false);
  };
  const handleonFilterName = (searchByText: any) => {
    setSearchText(searchByText);
  };
  const handleShowRFQDetails = (item: any) => {
    setRFQDetails(item);
    setRFQDetailShow(true);
  };
  const getAllUsersCall = useCallback(async () => {
    setIsLoading(true);
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText || "";
    }
    body.count = pageSize;
    body.page = page;

    const res = await dispatch(getRFQListAPI(body));
    if(res?.error){
      toast.error(res?.error?.data?.message);
    }
    console.log(res, "res");
    setAllRFQList(res?.payload?.data?.RfqCount);
    setRfqListData(res?.payload?.data?.rfqs);
    setIsLoading(false);
  }, [searchText, pageSize, page, dispatch]);

  useEffect(() => {
    getAllUsersCall();
  }, [dispatch, searchText, pageSize, page]);

  const handleCancel = () => {
    setSelectedRfq(null);
    setShowRfqModel(false);
    setShowMessage(false);
    setShowMessageText("");
    setRenegotiateDetailShow(false);
  };

  const handleActionBtnClick = (
    id: any,
    name: string,
    status: "approved" | "rejected" | "negotiate",
    amount?: number
  ) => {
    if (!id || !status) return;

    if (status == "negotiate" || status == "rejected") {
      setRenegotiateDetailShow(true);
      setSelectedRfq({
        id,
        status,
        name,
        amount,
      });
    } else {
      setSelectedRfq({
        id,
        status,
      });
      setShowMessage(true);
      setShowMessageText(`Sure do you want to ${name ?? ""} Approve`);
    }
  };

  const handleToggleRqfStatusApiCall = async () => {
    setIsLoading(true);
    const { id, status } = selectedRfq;
    if (!id || !status) return;
    const res: any = await dispatch(
      toggleRfqStatus({
        id: id,
        data: {
          status: status,
          comments: userComments,
        },
      })
    );
    if (res?.payload?.success) {
      getAllUsersCall();
      toast.success("RFQ status updated successfully!.");
      handleCancel();
    } else {
      toast.error("Failed to update RFQ status!.");
    }
    setIsLoading(false);
  };

  const handleNegotiateSend = async () => {
    setIsLoading(true);
    const negotiateObj = {
      id: selectedRfq?.id,
      comments: userComments,
    };
    try {
      const resultAction = await dispatch(negotiateRFQAPI(negotiateObj));
      const resultActionString = JSON.stringify(resultAction);
      const resJSON = JSON.parse(resultActionString);
      if (resJSON?.payload?.success === true) {
        setRenegotiateDetailShow(false);
      } else {
        setRenegotiateDetailShow(true);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
    setIsLoading(false);
  };



  return (
    <RFQStyled>
      {isLoading && <Loader />}
      <div>
        <h2 className="sectionHeading">RFQ List</h2>
        <div className="left-controls">
          <SearchInputField handleonFilterName={handleonFilterName} />
          <div className="buttons-div">
            <button
              className="btn Package-btn"
              onClick={() => navigate("/rfq/rfqexistinglist")}
            >
              Existing Package
            </button>
            <button
              className="btn Quote-btn"
              onClick={() => navigate("/rfq/rfqrequest")}
            >
              Request for Quote
            </button>
          </div>
        </div>
        <div className="ordertable">
          <table className="ordertable-thead">
            <thead>
              <tr>
                <th style={{ cursor: "pointer" }} title="View more details">
                  Type
                </th>
                <th style={{ cursor: "pointer" }}>RFQ ID</th>
                <th style={{ cursor: "pointer" }}>Submission Date</th>
                <th style={{ cursor: "pointer" }}>Submission Time</th>
                <th style={{ cursor: "pointer" }}>Status</th>

                <th>Total Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(rfqListData) &&
                rfqListData?.map((item: any, i: number) => (
                  <tr>
                    <td
                      className="rfq-name"
                      title="View more details"
                      onClick={() => handleShowRFQDetails(item)}
                    >
                      {item?.rfq_name}
                    </td>
                    <td>{item?.id}</td>
                    <td>
                      {new Date(item?.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </td>
                    <td>
                      {new Date(item?.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </td>
                    <td>{item?.status || "Open"}</td>
                    <td>{item?.total_amount}</td>
                    <td>
                      {item?.status !== "approved" &&
                        item?.status !== "rejected" && (
                          <button
                            type="button"
                            className="rapha-color-btn btn-flex-expand btn btn-primary btn-sm me-2"
                            onClick={() => {
                              handleActionBtnClick(
                                item?.id,
                                item?.rfq_name,
                                "approved"
                              );
                            }}
                          >
                            Approve
                          </button>
                        )}

                      {item?.status !== "approved" &&
                        item?.status !== "rejected" && (
                          <button
                            type="button"
                            className="rapha-color-btn btn-flex-expand btn btn-primary btn-sm me-2"
                            onClick={() => {
                              handleActionBtnClick(
                                item?.id,
                                item?.rfq_name,
                                "negotiate",
                                item?.total_amount
                              );
                            }}
                          >
                            Negotiate
                          </button>
                        )}

                      {item?.status !== "rejected" &&
                        item?.status !== "approved" && (
                          <button
                            type="button"
                            className="btn-flex-expand btn btn-danger btn-sm"
                            onClick={() => {
                              handleActionBtnClick(
                                item?.id,
                                item?.rfq_name,
                                "rejected"
                              );
                            }}
                          >
                            Reject
                          </button>
                        )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="pagination-div">
            <p className="pagination-count-text">{`Total ${
              allRFQList?.RfqCount || 0
            } RFQ `}</p>
            <CommonPagination
              onChangeHnadler={(p: any, pageS: any) => {
                setPage(p);
                setPageSize(pageS);
              }}
              defaultPage={page}
              defaultTotal={allRFQList?.RfqCount}
              pageSize={pageSize}
            />
          </div>
        </div>
        {RFQDetailShow && (
          <RfqDetails id={RFQDetails?.id} handleClose={handleClose} />
        )}
        <Modal show={renegotiateDetailShow} onHide={handleClose}>
          <RFQStyled>
            <Modal.Header
              className="display-contents"
              closeButton
            ></Modal.Header>
            <div className="appointment-details">
              <div className="renegotiate-header"></div>

              {selectedRfq?.status == "rejected" ? (
                <h5 className="rfq-status-text">{`Sure do you want to reject ${selectedRfq?.name} `}</h5>
              ) : (
                <div className="">
                  <label className="mb-1">Price</label>
                  <input
                    className="form-control shadow-none"
                    id="floatingTextarea"
                    value={selectedRfq?.amount}
                    readOnly
                  />
                </div>
              )}

              <div className="">
                {selectedRfq?.status == "rejected" ? (
                  <label className="mb-1">Reson for rejection</label>
                ) : (
                  <label className="mb-1">Comments</label>
                )}

                <textarea
                  className="form-control shadow-none"
                  placeholder="Enter Comments"
                  id="floatingTextarea"
                  onChange={(e: any) => setUserComments(e.target.value)}
                />
                <div className="renegotiate-btn-div">
                  {selectedRfq?.status == "rejected" ? (
                    <button
                      className="btn"
                      onClick={handleToggleRqfStatusApiCall}
                    >
                      Reject
                    </button>
                  ) : (
                    <button className="btn" onClick={handleNegotiateSend}>
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </RFQStyled>
        </Modal>

        <CustomModal
          open={showSuccessMessage}
          title={showSuccessMessageText}
          handleClose={handleCancel}
        >
          <CustomModal.Body>
            <div className="text-center p-4">
              <p>Are you sure you want to {selectedRfq?.status == "approved" ? "approve" : "reject"} this RFQ?</p>
            </div>
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="d-flex justify-content-end gap-2">
              <button 
                className="btn btn-secondary" 
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button 
                className={`btn ${selectedRfq?.status == "approved" ? "btn-success" : "btn-danger"}`}
                onClick={handleToggleRqfStatusApiCall}
              >
                {selectedRfq?.status == "approved" ? "Approve" : "Reject"}
              </button>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      </div>
    </RFQStyled>
  );
};

export default RFQ;

const RfqDetails = ({ id, handleClose }: { id: number; handleClose: any }) => {
  const [data, setData] = useState<any>([]);

  const [packageDetails, setPackageDetails] = useState<string[]>([]);
  const [testDetails, setTestDetails] = useState<any>([]);
  const [cityDetails, setCityDetails] = useState<any>({});

  const dispatch = useDispatch() as any;

  const getRfqDetails = useCallback(async () => {
    if (!id) return;
    const res: any = await dispatch(getRfqById(id));
    const rfq = res?.payload?.data?.rfq;

    setData(rfq);
    const tests = new Set<any>();
    const packages = new Set<any>();
    const city: any = {};

    rfq?.items?.forEach((test: any) => {
      city[test?.city_id] = {
        service_id: test?.service_id,
        no_of_men: test?.no_of_men,
        no_of_women: test?.no_of_women,
        no_of_children: test?.no_of_children,
      };

      console.log(test, "123");

      packages.add(test?.package?.service_name);
      tests.add(test?.test?.service_name);
    });

    setPackageDetails(Array.from(packages) as any);
    setTestDetails(Array.from(tests) as any);
    setCityDetails(city);
  }, [id]);

  useEffect(() => {
    getRfqDetails();
  }, [getRfqById]);
  return (
    <>
      <RFQStyled>
        <Modal show={true} size="lg" onHide={handleClose}>
          <RFQStyled>
            <Modal.Header
              className="display-contents"
              closeButton
            ></Modal.Header>
            <div className="profile-card chk1">
              <div className="profile-info">
                <div className="profile-details">
                  <div className="profile-details-text">
                    <h2>{data?.rfq_name}</h2>
                    <p>
                      Status: <span>{data?.status ?? "Open"}</span>
                    </p>
                  </div>
                  <p>
                    RFQ ID: <span>{data?.id}</span>
                  </p>
                  <p>
                    Submission Date:
                    {new Date(data?.created_at).toLocaleDateString("en-IN", {
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
                {Object.keys(cityDetails)?.map((city: string) => {
                  return (
                    <>
                      <div className="appointment-mode">
                        City:<span className="cityTitle"> {city}</span>
                      </div>
                      <div className="appointment-item d-flex justify-content-between align-items-center mt-1 pb-1">
                        <div>
                          <label className="mr-1">Number Of Men:</label>
                          <span>
                            {" "}
                            {cityDetails?.[city]?.no_of_men || "N/A"}
                          </span>
                        </div>
                        <div>
                          <label className="mr-1">Number Of Women: </label>
                          <span>
                            {" "}
                            {cityDetails?.[city]?.no_of_women || "N/A"}
                          </span>
                        </div>
                        <div>
                          <label className="mr-1">Number Of Children :</label>
                          <span>
                            {cityDetails?.[city]?.no_of_children || "N/A"}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="">
              <label>Test Details:</label>
              <div className="appointment-comments-details">
                <div className="appointment-comment-info">
                  {testDetails.length > 0 ? (
                    testDetails?.map((item: any, index: number) => {
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
            <div className="">
              <label>Pacakges Details:</label>
              <div className="appointment-comments-details">
                <div className="appointment-comment-info">
                  {packageDetails.length > 0 ? (
                    packageDetails?.map((item: any, index: number) => {
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
                <span>Total Amount: {data?.total_amount} /-</span>
              </div>
            </div>
          </RFQStyled>
        </Modal>
      </RFQStyled>
    </>
  );
};
