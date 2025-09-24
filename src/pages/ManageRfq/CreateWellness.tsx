import React, { useCallback, useEffect, useState } from "react";
import { IndexsStyled } from "./Index.styled";
import { Input, Select, Button } from "antd";
import { Table } from "react-bootstrap";
import ConformPopUp from "./ConformPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../../../hr_dashboard_web_new/src/redux/slices/Clients/ClientsService";
import { WellnesSubscriptionRFQAPI } from "../../../../hr_dashboard_web_new/src/redux/slices/rfq/rfqService";
import { useSearchParams } from "react-router";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { Trash } from "lucide-react";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import WellnessReportsSummary, {
  WellnessSummary,
} from "@/components/AiReports/WellnessReportSummary";

// Define a type for a single product item for better type safety
type ProductItem = {
  id: number;
  product: string;
  amountType: string;
  amount: string;
  tenure: string;
  count: number; // Kept for consistency with original handleProceed logic
};

// Define a type for the error state of a single row
type ErrorDto = {
  product: boolean;
  amountType: boolean;
  amount: boolean;
  tenure: boolean;
};

const CreateWellness = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { pop, push, activeTypes } = useCustomModalRenderer(["ai_suggest"]);

  // --- Consolidated State for Table Rows ---
  const createNewItem = (): ProductItem => ({
    id: Date.now(),
    product: "",
    amountType: "",
    amount: "",
    tenure: "",
    count: 1,
  });

  const initialErrorFlags: ErrorDto = {
    product: false,
    amountType: false,
    amount: false,
    tenure: false,
  };

  const [productItems, setProductItems] = useState<ProductItem[]>([
    createNewItem(),
  ]);
  const [errors, setErrors] = useState<ErrorDto[]>([initialErrorFlags]);

  // --- Other Component States ---
  const [rowData, setRowData] = useState<ProductItem[]>([]);
  const [showAddedRows, setShowAddedRows] = useState(false);
  const [showConformMsg, setShowConformMsg] = useState(false);
  const [rfqName, setRfqName] = useState("");
  const [noMen, setNoMen] = useState<any>(null);
  const [noWomen, setNoWomen] = useState<any>(null);
  const [noChildren, setNoChildren] = useState<any>(null);
  const [clientError, setClientError] = useState(""); // Renamed from 'error' for clarity

  const clientId = searchParams.get("clientId");
  const [selectedClint, setSelectedClint] = useState<any>(
    clientId ? { value: clientId } : ""
  );

  const { allClients } = useSelector((state: any) => state?.clients);

  const selectAmountOptions = [
    { value: "Wallet", label: "Set Wallet Amount" },
    { value: "discount", label: "Discount" },
  ];
  const tenureOptions = [
    { value: "1_year", label: "1 Year" },
    { value: "6_month", label: "6 Month" },
    { value: "3_month", label: "3 Month" },
  ];

  // --- Refactored Handler Functions ---

  const handleItemChange = (
    index: number,
    field: keyof ProductItem,
    value: any
  ) => {
    const updatedItems = [...productItems];
    const currentItem = { ...updatedItems[index], [field]: value };

    // Input validation logic from original component
    if (field === "amount") {
      if (!/^\d*$/.test(value)) return; // Allow only digits
      if (currentItem.amountType === "discount" && value.length > 2) return; // Discount percentage <= 99
    }

    updatedItems[index] = currentItem;
    setProductItems(updatedItems);
  };

  const handleAddRow = () => {
    setProductItems((prev) => [...prev, createNewItem()]);
    setErrors((prev) => [...prev, initialErrorFlags]);
  };

  const handleRemoveRow = (index: number) => {
    if (productItems.length > 1) {
      setProductItems((prev) => prev.filter((_, i) => i !== index));
      setErrors((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleProceed = () => {
    if (!productItems.length) return;

    let isErrorFound = false;
    const errorsStatus: ErrorDto[] = productItems.map((item) => {
      const rowErrors: ErrorDto = {
        product: !item.product,
        amountType: !item.amountType,
        amount: !item.amount,
        tenure: !item.tenure,
      };
      if (Object.values(rowErrors).some(Boolean)) {
        isErrorFound = true;
      }
      return rowErrors;
    });

    setErrors(errorsStatus);

    if (isErrorFound) {
      return;
    }

    // Filter out duplicates and add to the final review list
    const uniqueData = productItems.filter(
      (item) =>
        !rowData.some(
          (existingRow) =>
            existingRow.product === item.product &&
            existingRow.amountType === item.amountType &&
            existingRow.amount === item.amount &&
            existingRow.tenure === item.tenure
        )
    );

    if (uniqueData.length > 0) {
      setRowData((prev) => [...prev, ...uniqueData]);
      setShowAddedRows(true);
      // Reset the form for the next entry
      setProductItems([createNewItem()]);
      setErrors([initialErrorFlags]);
    }
  };

  const handleToCreateQuote = async () => {
    const rfqObj = {
      rfq_name: rfqName,
      client_id: selectedClint?.value,
      wallets: rowData.map((item: ProductItem) => ({
        name: item.product,
        type: item.amountType,
        amount: item.amountType === "discount" ? null : Number(item.amount),
        discount_percentage:
          item.amountType === "discount" ? Number(item.amount) : 0,
        tenure: item.tenure,
      })),
      no_of_men: noMen ?? null,
      no_of_women: noWomen ?? null,
      no_of_children: noChildren ?? null,
    };

    try {
      const resultAction = await dispatch(
        WellnesSubscriptionRFQAPI(rfqObj) as any
      );
      if (resultAction?.payload?.success) {
        setShowConformMsg(true);
      } else {
        setClientError(resultAction?.error?.message ?? "Failed to save!");
      }
    } catch (error) {
      console.log(error);
      setClientError("An unexpected error occurred.");
    }
  };

  const handleFilterChange = (value: any, label: any) => {
    setSelectedClint(label?.[0]);
  };

  const getAllClientsApi = useCallback(() => {
    dispatch(getAllClients({ page: 0, count: 1000 }) as any);
  }, [dispatch]);

  useEffect(() => {
    getAllClientsApi();
  }, [getAllClientsApi]);

  const onSummaryComplete = (summary: WellnessSummary) => {
    setNoChildren(summary.employees.children);
    setNoWomen(summary.employees.female);
    setNoMen(summary.employees.male);

    const newItems: ProductItem[] = summary.services.map((service) => ({
      id: Date.now() + Math.random(), // Ensure unique ID
      product: service.productName,
      amountType: service.limit.type,
      amount: service.limit.amount?.toString() ?? "",
      tenure: service.tenure,
      count: 1,
    }));

    const newErrors = newItems.map(() => initialErrorFlags);

    setProductItems(newItems.length > 0 ? newItems : [createNewItem()]);
    setErrors(newErrors.length > 0 ? newErrors : [initialErrorFlags]);
    const hasIncompleteRows = newItems.some((item) => {
      return !item.product || !item.amountType || !item.amount || !item.tenure;
    });

    // if (!hasIncompleteRows) {
    //   setShowAddedRows(true);
    // }
  };

  return (
    <IndexsStyled>
      {!showAddedRows && (
        <div>
          <div className="flex justify-between items-center gap-2">
            <p className="m-0">Wellness Subscriptions</p>
            <PrimaryButton onClick={() => push("ai_suggest")}>
              AI Suggest
            </PrimaryButton>
          </div>
          <CustomTable
            showingName="Wellness Subscriptions"
            pagination={false}
            columns={[
              {
                key: "product",
                label: "Products",
                render: (value, record, index) => (
                  <>
                    <Input
                      placeholder="Enter Product Name"
                      value={record.product}
                      onChange={(e) =>
                        handleItemChange(index, "product", e.target.value)
                      }
                    />
                    {errors?.[index]?.product && (
                      <p className="error-message-text">
                        Product name required!
                      </p>
                    )}
                  </>
                ),
              },
              {
                key: "limit",
                label: "Limit",
                render: (value, record, index) => (
                  <>
                    <div className="flex justify-between">
                      <Select
                        showSearch
                        placeholder="Sort By Amount"
                        value={record.amountType || undefined}
                        onChange={(value) =>
                          handleItemChange(index, "amountType", value)
                        }
                        options={selectAmountOptions}
                      />
                      <Input
                        placeholder={`Enter ${
                          record.amountType || "..."
                        } Amount`}
                        value={record.amount}
                        onChange={(e) =>
                          handleItemChange(index, "amount", e.target.value)
                        }
                      />
                      {(errors?.[index]?.amount ||
                        errors?.[index]?.amountType) && (
                        <div className="d-flex">
                          <p className="error-message-text">
                            {errors?.[index]?.amountType &&
                              "Amount type required."}
                          </p>
                          <p className="error-message-text w-100">
                            {errors?.[index]?.amount && "Amount required."}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ),
              },
              {
                key: "tenure",
                label: "Tenure",
                render: (value, record, index) => (
                  <>
                    <Select
                      showSearch
                      placeholder="Sort By Month"
                      className="me-3"
                      value={record.tenure || undefined}
                      onChange={(value) =>
                        handleItemChange(index, "tenure", value)
                      }
                      options={tenureOptions}
                    />
                    {errors?.[index]?.tenure && (
                      <p className="error-message-text">Tenure is required.</p>
                    )}
                  </>
                ),
              },
              {
                key: "action",
                label: "Action",
                render: (value, record, index) => (
                  <div className="flex gap-1 items-center h-full">
                    {productItems.length > 1 && (
                      <SecoundaryButton onClick={() => handleRemoveRow(index)}>
                        <Trash size={18} color="red" />
                      </SecoundaryButton>
                    )}
                    {index === productItems.length - 1 && (
                      <PrimaryButton onClick={handleAddRow}>Add</PrimaryButton>
                    )}
                  </div>
                ),
              },
            ]}
            data={productItems}
            rowKey="id"
          />
        </div>
      )}
      <div className="text-end mt-3">
        <PrimaryButton onClick={handleProceed} disabled={showAddedRows}>
          Proceed
        </PrimaryButton>
      </div>

      {showAddedRows && (
        <>
          <p>Your wellness Subscription RFQs</p>
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
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((row: ProductItem) => (
                    <tr key={row.id}>
                      <td>{row.product}</td>
                      <td>
                        {row.amountType}{" "}
                        {row.amountType !== "discount" && "Amount ₹"}
                        {row.amount}
                        {row.amountType === "discount" && "%"}
                      </td>
                      <td>{row.tenure}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="show-table-wellness-subcription-right">
              <div className="mb-3">
                <label htmlFor="packageNameInput" className="form-label">
                  Package Name
                </label>
                <input
                  type="text"
                  className="form-control no-box-shadow"
                  id="packageNameInput"
                  value={rfqName}
                  onChange={(e: any) => setRfqName(e.target.value)}
                />
                <p className="error-message-text">{clientError}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="clientSelect" className="form-label">
                  Select Client
                </label>
                <Select
                  id="clientSelect"
                  value={selectedClint?.value}
                  placeholder="Select Category"
                  onChange={(e: any, ...rest) => handleFilterChange(e, rest)}
                  options={
                    allClients?.data?.clients?.map((item: any) => ({
                      label: item?.name,
                      value: item?.id,
                    })) ?? []
                  }
                  className="delta-select select-filter"
                />
              </div>
              <div className="mb-5">
                <label className="form-label mb-3">Employees details</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter No. of Men"
                  value={noMen}
                  onChange={(e: any) => setNoMen(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter No. of Women"
                  value={noWomen}
                  onChange={(e: any) => setNoWomen(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
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

      <CustomModalRenderer
        activeTypes={activeTypes}
        modals={[
          {
            type: "ai_suggest",
            component: (
              <CustomModal
                open={true}
                handleClose={() => pop("ai_suggest")}
                title="Intelligent Data Suggestion"
              >
                <WellnessReportsSummary
                  onClose={() => pop("ai_suggest")}
                  onSummaryComplete={onSummaryComplete}
                />
              </CustomModal>
            ),
          },
        ]}
      />

      <ConformPopUp
        show={showConformMsg}
        onHide={() => setShowConformMsg(false)}
        conformImg={
          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732700413741.png"
        }
        title={"RFQ Wellness Subscription Created Successfully"}
        subTitle={"We will offer the best prices for you shortly"}
        path={`/rfq?type=2`}
      />
    </IndexsStyled>
  );
};

export default CreateWellness;
