import React, { useState } from "react";
import { RFQRequestStyled } from "./RFQRequest.styled";
import { Input, Select, Button } from "antd";
import { Table } from "react-bootstrap";
import ConformPopUp from "./ConformPopUp";
import { MdDelete, MdRemoveCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { WellnesSubscriptionRFQAPI } from "@/redux/slices/generic/genericService";

const RFQRequestTable = () => {
  const dispatch = useDispatch() as any;
  const [rowData, setRowData] = useState<any>([]);
  const [productRows, setProductRows] = useState([""]);
  const [counts, setCounts] = useState([0]);
  const [selectedAmounts, setSelectedAmounts] = useState([""]);
  const [selectedYear, setSelectedYear] = useState([""]);
  const [productNames, setProductNames] = useState([""]);
  const [enteredAmounts, setEnteredAmounts] = useState([""]);
  const [validationErr, setValidationErr] = useState("");
  const [showAddedRows, setShowAddedRows] = useState(false);
  const [showConformMsg, setShowConformMsg] = useState(false);
  const [rfqName, setRfqName] = useState("");
  const [noMen, setNoMen] = useState("");
  const [noWomen, setNoWomen] = useState("");
  const [noChildren, setNoChildren] = useState("");
  const [error, setError] = useState("");
  const initialErrorFlags = {
    product: false,
    amountType: false,
    amount: false,
    count: false,
    tenure: false,
  };

  type errorDto = {
    product: boolean;
    amountType: boolean;
    amount: boolean;
    count: boolean;
    tenure: boolean;
  };
  const [errorMessage, setErrorMessage] = useState<errorDto[]>([
    initialErrorFlags,
  ]);

  const selectAmountOptions = [
    { value: "Wallet", label: "Set Wallet Amount" },
    { value: "discount", label: "Discount" },
  ];
  const tenureOptions = [
    { value: "1_year", label: "1 Year" },
    { value: "6_month", label: "6 Month" },
    { value: "3_month", label: "3 Month" },
  ];
  const handleIncrement = (index: number) => {
    setCounts((prev) => prev.map((c, i) => (i === index ? c + 1 : c)));
  };
  const handleDecrement = (index: number) => {
    setCounts((prev) => prev.map((c, i) => (i === index && c > 1 ? c - 1 : c)));
  };
  const handleSortAmount = (value: string, index: number) => {
    setSelectedAmounts((prev) => prev.map((a, i) => (i === index ? value : a)));
  };
  const handleSortMonth = (value: string, index: number) => {
    setSelectedYear((prev) => prev.map((y, i) => (i === index ? value : y)));
  };
  const handleSortProductName = (event: any, index: number) => {
    const value = event.target.value;
    setProductNames((prev) =>
      prev.map((name, i) => (i === index ? value : name))
    );
  };
  const handleAddRow = () => {
    setProductRows((prev) => [...prev, `Product ${prev.length + 1}`]);
    setCounts((prev) => [...prev, 1]);
    setSelectedAmounts((prev) => [...prev, ""]);
    setSelectedYear((prev) => [...prev, ""]);
    setProductNames((prev) => [...prev, ""]);
    setEnteredAmounts((prev) => [...prev, ""]);
    setErrorMessage((prev: any) => [...prev, initialErrorFlags]);
  };
  const handleRemoveRow = (index: number) => {
    if (productRows.length > 1) {
      setProductRows((prev) => prev.filter((_, i) => i !== index));
      setCounts((prev) => prev.filter((_, i) => i !== index));
      setSelectedAmounts((prev) => prev.filter((_, i) => i !== index));
      setEnteredAmounts((prev) => prev.filter((_, i) => i !== index));
      setSelectedYear((prev) => prev.filter((_, i) => i !== index));
      setProductNames((prev) => prev.filter((_, i) => i !== index));
    }
  };
  const handleProceed = () => {
    if (!productNames.length) return;
    let isErrorFound = false;
    let errorsStatus: errorDto[] = [];
    const uniqueData = productNames
      .map((name, index) => ({
        product: name,
        amountType: selectedAmounts[index],
        amount: enteredAmounts[index],
        count: counts[index],
        tenure: selectedYear[index],
      }))
      .filter((row, index) => {
        const isDuplicate = rowData.some(
          (existingRow: any) =>
            existingRow.product === row.product &&
            existingRow.amountType === row.amountType &&
            existingRow.amount === row.amount &&
            existingRow.count === row.count &&
            existingRow.tenure === row.tenure
        );
        const hasError =
          !row.product || !row.amountType || !row.amount || !row.tenure;
        if (!isDuplicate) {
          const errors: any = {
            product: !row.product,
            amountType: !row.amountType,
            amount: !row.amount,
            tenure: !row.tenure,
          };

          if (hasError) {
            isErrorFound = true;
          }

          errorsStatus.push(errors);
        }

        return !isDuplicate && !hasError;
      });

    if (isErrorFound) {
      setErrorMessage(errorsStatus);
      return;
    }
    if (uniqueData.length) {
      setRowData([...rowData, ...uniqueData]);
      setShowAddedRows(true);
    }
  };

  const handleToCreateQuote = async () => {
    const rfqObj = {
      rfq_name: rfqName,
      wallets: rowData?.map((item: any) => ({
        name: item?.product,
        type: item?.amountType,
        amount: item?.amountType == "discount" ? null : Number(item?.amount),
        discount_percentage:
          item?.amountType == "discount" ? Number(item?.amount) : 0,
        tenure: item?.tenure,
      })),
      no_of_men: noMen ?? null,
      no_of_women: noWomen ?? null,
      no_of_children: noChildren ?? null,
    };

    try {
      const resultAction = await dispatch(WellnesSubscriptionRFQAPI(rfqObj));
      const resultActionString = JSON.stringify(resultAction);
      const resJSON = JSON.parse(resultActionString);
      if (resJSON?.payload?.success === true) {
        setShowConformMsg(true);
      } else {
        setError(resJSON?.error?.message ?? "Failed to save!.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(rowData, "rowData");

  return (
    <RFQRequestStyled>
      {!showAddedRows && (
        <div className="ordertable">
          <p>Wellness Subscriptions</p>
          <Table responsive="sm" bordered>
            <thead>
              <tr>
                <th>Products</th>
                <th>Limit</th>
                {/* <th>Coverage</th> */}
                <th>Tenure</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productRows?.map((product, index) => (
                <tr key={index}>
                  <td>
                    <Input
                      placeholder="Enter Product is Name"
                      value={productNames[index]}
                      onChange={(e) => handleSortProductName(e, index)}
                    />

                    {!rowData?.product?.length &&
                      errorMessage?.[index]?.product && (
                        <p className="error-message-text">
                          Product name required!
                        </p>
                      )}
                  </td>
                  <td>
                    <div className="flex justify-between">
                      <Select
                        showSearch
                        placeholder="Sort By Amount"
                        className="me-3"
                        onChange={(value) => handleSortAmount(value, index)}
                        options={selectAmountOptions}
                      />

                      <Input
                        placeholder={`Enter ${selectedAmounts[index]} Amount`}
                        value={enteredAmounts[index]}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (!/^\d*$/.test(inputValue)) {
                            return;
                          }
                          if (
                            selectedAmounts[index] === "discount" &&
                            inputValue.length > 2
                          ) {
                            return;
                          }
                          setEnteredAmounts((prev) =>
                            prev.map((amt, i) =>
                              i === index ? inputValue : amt
                            )
                          );
                        }}
                      />
                      {(errorMessage?.[index]?.amount ||
                        errorMessage?.[index]?.amountType) && (
                        <div className="d-flex">
                          <p className="error-message-text ">
                            {errorMessage?.[index]?.amountType &&
                              "Amount type is required!."}
                          </p>
                          <p className="error-message-text w-100">
                            {errorMessage?.[index]?.amount &&
                              "Amount is required!."}
                          </p>
                        </div>
                      )}
                    </div>
                  </td>
                  {/* <td className="counter-container">
                    <span className="text-label">
                      Employee & Dependent {counts[index]}
                    </span>
                    <Button
                      className="counter-button decrement-button"
                      shape="circle"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </Button>
                    <Button
                      className="counter-button decrement-button"
                      shape="circle"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </Button>
                  </td> */}
                  <td>
                    <Select
                      showSearch
                      placeholder="Sort By Month"
                      className="me-3"
                      onChange={(value) => handleSortMonth(value, index)}
                      options={tenureOptions}
                    />
                    {errorMessage?.[index].tenure && (
                      <p className="error-message-text">
                        {"Tenure is required!."}
                      </p>
                    )}
                  </td>
                  <td>
                    {productRows.length > 1 && (
                      <button
                        className="btn remove-table-content me-2"
                        onClick={() => handleRemoveRow(index)}
                      >
                        <MdRemoveCircleOutline />
                      </button>
                    )}
                    {index === productRows.length - 1 && (
                      <button
                        className="btn add-table-content"
                        onClick={handleAddRow}
                      >
                        Add
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="table-to-proceed-btn">
            <Button className="btn add-more-rfq-btn" onClick={handleProceed}>
              Proceed
            </Button>
          </div>
        </div>
      )}

      {showAddedRows && (
        <>
          <p>Your wellness Subcription RFQs</p>
          <div className="show-table-wellness-subcription-div">
            <div className="show-table-wellness-subcription-fleft">
              <Table responsive="sm" bordered className="no-outer-border">
                <thead>
                  <tr className="Subscriptions-th-div">
                    <th>
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732697607463.png"
                        alt=""
                      />
                      Subscriptions
                    </th>
                    <th></th>
                    <th></th>
                    {/* <th></th> */}
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((row: any, index: any) => (
                    <tr key={index}>
                      <td>{row.product}</td>
                      <td>
                        {row.amountType}{" "}
                        {row.amountType !== "discount" && "Amount ₹"}
                        {row.amount}
                        {row.amountType == "discount" && "%"}
                      </td>

                      {/* <td>{row.count} Employee + Dependents</td> */}
                      <td>{row.tenure}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="show-table-wellness-subcription-right">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Package Name
                </label>
                <input
                  type="text"
                  className="form-control no-box-shadow"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={rfqName}
                  onChange={(e: any) => setRfqName(e.target.value)}
                />
                <p className="error-message-text">{error}</p>
              </div>
              <div className="mb-5">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Employees details
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter No. of Men"
                  value={noMen}
                  onChange={(e: any) => setNoMen(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter No. of Women"
                  value={noWomen}
                  onChange={(e: any) => setNoWomen(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter No. of Children"
                  value={noChildren}
                  onChange={(e: any) => setNoChildren(e.target.value)}
                />
              </div>
              <div>
                <button
                  className="btn back-more-rfq-btn mb-4"
                  onClick={() => setShowAddedRows(false)}
                >
                  Add More RFQ
                </button>
                <button
                  className="btn add-more-rfq-btn"
                  onClick={handleToCreateQuote}
                >
                  Request For Quote
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <ConformPopUp
        show={showConformMsg}
        onHide={() => setShowConformMsg(false)}
        conformImg={
          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732700413741.png"
        }
        title={"RFQ Submitted Successfully"}
        subTitle={"We will offer the best prices for you shortly"}
        path={"/rfq"}
      />
    </RFQRequestStyled>
  );
};

export default RFQRequestTable;
