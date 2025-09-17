import React, { useEffect, useState } from "react";
import { RFQExistingListStyled } from "./RFQExistingList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllTestsAPI } from "../../redux/slices/labtest/labtestService";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiLoader } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import SearchInputField from "./SearchInputField";
import { IoCloseOutline } from "react-icons/io5";
import RFQCardModule from "./RFQCardModule";
import { useNavigate } from "react-router";
import CommonPagination from "./CommonPagination";

const RFQExistingList = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [textSearch, setTextSearch] = useState("");
  const [selectPackagesListDetail, setSelectPackagesListDetail] = useState<any>(
    []
  );
  const [packagesListDataShow, setPackagesListDataShow] = useState(false);
  const { allTestsList } = useSelector((ReduxState: any) => ReduxState.labtest);

  const handleClose = () => setPackagesListDataShow(false);
  const handleShow = (item: any) => {
    setSelectPackagesListDetail(item);
    setPackagesListDataShow(true);
  };

  useEffect(() => {
    const requestOBj: any = {
      page: page - 1,
      searchText: textSearch,
      count: pageSize,
      type: "diagnostic",
    };
    dispatch(getAllTestsAPI(requestOBj));
  }, [dispatch, pageSize, page, textSearch]);

  const handleonFilterName = (searchByText: any) => {
    setTextSearch(searchByText);
  };
  const chunkArray = (array: any, chunkSize: any) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
  const testChunks = chunkArray(selectPackagesListDetail?.tests || [], 9);
  console.log("testChunks*****", testChunks);
  const gridTemplateColumns = testChunks.length
    ? `repeat(${testChunks.length}, 1fr)`
    : "1fr";

  const onSelectedCardsChange = (item: any) => {
    navigate("/rfq/rfqrequest");
  };

  const popUpShow = (item: any, value: any) => {
    setPackagesListDataShow(item);
    setSelectPackagesListDetail(value);
  };

  return (
    <RFQExistingListStyled>
      <>
        {isLoading && <BiLoader />}
        <div className="container">
          <div className="left-controls">
            <div className="Search-bar">
              <SearchInputField handleonFilterName={handleonFilterName} />
            </div>
            <div className="buttons-div">
              <button
                className="btn Quote-btn"
                onClick={() => navigate("/rfq/rfqrequest")}
              >
                Request for Quote
              </button>
            </div>
          </div>
          <div className="row">
            <RFQCardModule
              details={allTestsList?.tests}
              onSelectedCardsChange={onSelectedCardsChange}
              popUpShow={popUpShow}
            />
          </div>
          <div className="pagination-div">
            <CommonPagination
              onChangeHnadler={(p: any, pageS: any) => {
                setPage(p);
                setPageSize(pageS);
              }}
              defaultPage={page}
              defaultTotal={allTestsList?.testCount}
              pageSize={pageSize}
            />
          </div>
        </div>

        <Modal show={packagesListDataShow} onHide={handleClose} size="lg">
          <RFQExistingListStyled>
            <div className="wrapper">
              <div className="mainDiv">
                <div className="info">
                  <div className="logoDiv">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732790200087.png"
                      alt=""
                    />
                  </div>
                  <div className="package-container">
                    <h2 className="package-title">
                      {selectPackagesListDetail?.service_name}
                    </h2>
                    <p className="package-description">
                      {selectPackagesListDetail?.description || ""}
                    </p>
                    <div className="package-price">
                      <span>Price </span>
                      <span className="price-amount">
                        ₹{selectPackagesListDetail?.price?.discounted_price}.00
                      </span>
                      <IoIosInformationCircleOutline />
                    </div>
                    <div className="sample-required">
                      <span>Sample Required </span>
                      <span className="sample-type">
                        {selectPackagesListDetail?.type}
                      </span>
                      <span className="text-sample">Lab Visit & Test</span>
                    </div>
                    <div className="preparation">
                      <h3>Preparation</h3>
                      <li>10-12 Hours Fasting Required</li>
                      <li>Water can be consumed</li>
                    </div>
                  </div>

                  <div className="packages-detail-btn-div">
                    <button onClick={handleClose}>
                      <IoCloseOutline />
                    </button>
                  </div>
                </div>

                <div className="details">
                  {selectPackagesListDetail?.tests ? (
                    <>
                      <h1>
                        {selectPackagesListDetail?.tests?.length} Tests Include
                      </h1>
                      <div className="listWrapper">
                        {testChunks.map((chunk, index) => (
                          <p key={index}>
                            {chunk.map((test: any) => (
                              <li key={test.service_code}>
                                {test.service_name}
                              </li>
                            ))}
                          </p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h1>Tests Not Available</h1>
                    </>
                  )}
                </div>
              </div>
            </div>
          </RFQExistingListStyled>
        </Modal>
      </>
    </RFQExistingListStyled>
  );
};

export default RFQExistingList;
