import React, { useCallback, useEffect, useState } from "react";
import { ClinicWalletsStyled } from "./ClinicWallets.styled";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Select, Switch, Table } from "antd";
import { toast } from "react-hot-toast";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  createWalletDetailsAPI,
  deleteClinicWalletAPI,
  getClinicWalletsApi,
  getDoctorspecializations,
  getWalletType,
  updateClinicWalletsAPI,
} from "../../../redux/slices/Clients/ClientsService";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import { formatStatus } from "@/lib/common";

interface WalletData {
  id: string;
  walletName: string;
  walletType: string;
  walletAmount: string | number;
  discountDetails: string;
}

const ClinicWallets = ({ id }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [packagesPageSize, setPackagesPageSize] = useState(10);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<WalletData[]>([]);
  const [searchText, setSearchText] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null);

  const [walletForm, setWalletForm] = useState<any>({
    id: "",
    walletName: "",
    walletType: "",
    customWalletType: "",
    walletAmount: "",
    discountPercentage: "",
    discountLimit: "",
    doctorSepcialization: "",
  });

  const [walletTypeOptions, setWalletTypeOptions] = useState([]);
  const [doctorSpecializationOptions, setDoctorSpecializationOptions] =
    useState([]);

  const getWalletTypeOption = useCallback(async () => {
    const res: any = await dispatch(getWalletType());

    if (res?.payload?.success) {
      setWalletTypeOptions(
        res?.payload?.data?.walletTypes?.map((d: any) => ({
          label: d?.name,
          value: d?.value,
        }))
      );
    }
  }, [dispatch]);

  const getDoctorspecializationsApi = useCallback(async () => {
    const res: any = await dispatch(getDoctorspecializations());
    if (res?.payload?.success) {
      setDoctorSpecializationOptions(
        res?.payload?.data?.specializations?.map((d: any) => ({
          label: d,
          value: d,
        }))
      );
    }
  }, [dispatch]);

  useEffect(() => {
    getDoctorspecializationsApi();
    getWalletTypeOption();
  }, [getDoctorspecializationsApi, getWalletTypeOption]);

  const [offerType, setOfferType] = React.useState("");
  const [viewMode, setViewMode] = useState<"create" | "edit" | "details">(
    "create"
  );

  const walletTypeToShowSpec = [
    "opd_consultation",
    "virtual_consultation",
    "virtual_consultation_specific",
  ];

  const handleEditClick = (itemV: any) => {
    console.log(itemV, "12121212121");

    setWalletForm({
      id: itemV?.id,
      walletName: itemV.walletName,
      walletType: itemV.walletType,
      customWalletType:
        itemV.walletType === "others" ? itemV.customWalletType : "",
      walletAmount: itemV.walletAmount || "",
      discountPercentage: itemV.discountPercentage || "",
      discountLimit: itemV.discountLimit || "",
      include_ctrmi: itemV?.include_ctrmi || false,
      doctorSepcialization: itemV?.doctorSepcialization || false,
    });
    setOfferType(itemV.walletAmount ? "Amount" : "Discount");
    setViewMode("edit");
    setIsModalOpen(true);
  };

  // const handleDetailsClick = (itemV: any) => {
  //   setWalletForm({
  //     walletName: itemV.walletName,
  //     walletType: itemV.walletType,
  //     customWalletType:
  //       itemV.walletType === "others" ? itemV.customWalletType : "",
  //     walletAmount: itemV.walletAmount || "",
  //     discountPercentage: itemV.discountPercentage || "",
  //     discountLimit: itemV.discountLimit || "",
  //   });
  //   setOfferType(itemV.walletAmount ? "Amount" : "Discount");
  //   setViewMode("details");
  //   setIsModalOpen(true);
  // };

  const handleDeleteClick = (walletId: string) => {
    setSelectedWalletId(walletId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedWalletId) return;

    try {
      const body = {
        clientId: id,
        walletId: selectedWalletId,
      };

      const res: any = await dispatch(deleteClinicWalletAPI(body));

      if (res?.payload?.success) {
        toast.success("Clinic wallet deleted successfully!");
        fetchClinicWallets();
      } else {
        toast.error(res?.error?.message || "Failed to delete clinic wallet.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the wallet.");
      console.error("Error deleting wallet:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedWalletId(null);
    }
  };

  const columns: any = [
    {
      label: "Wallet Name",
      width: 150,
      dataIndex: "walletName",
      key: "walletName",
      render:(value:string)=>{
        return <span className="capitalize">{value}</span>
      }
    },
    {
      label: "Type",
      width: 150,
      dataIndex: "walletType",
      key: "walletType",
      render:(value:string)=>{
        return formatStatus(value)
      }
    },
    {
      label: "Amount",
      width: 150,
      dataIndex: "walletAmount",
      key: "walletAmount",
    },
    {
      label: "Discount and Limits",
      width: 150,
      dataIndex: "discountDetails",
      key: "discountDetails",
    },
    // {
    //   label: "Edit",
    //   width: 100,
    //   key: "edit",
    //   render: (itemV: any) => {
    //     return (
    //       <>
    //         <div className="action-icons-sec-new">
    //           <div className="action-buttons">
    //             <PrimaryButton
    //               onClick={() => handleEditClick(itemV)}
    //             >
    //               Edit
    //             </PrimaryButton>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   },
    // },
    // {
    //   label: "Delete",
    //   width: 100,
    //   key: "details",
    //   render: (itemV: any) => {
    //     return (
    //       <>
    //         <div className="action-icons-sec-new">
    //           {/* <div className="action-buttons">
    //             <button onClick={() => handleDetailsClick(itemV)}>
    //               Detail
    //             </button>
    //           </div> */}
    //           <div className="action-buttons">
    //             <SecoundaryButton onClick={() => handleDeleteClick(itemV?.id)}>
    //               <MdDelete size={20} color="red" />
    //             </SecoundaryButton>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   },
    // },
  ];

  const filteredTableData = tableData.filter(
    (item) =>
      item.walletName.toLowerCase().includes(searchText) ||
      item.walletType.toLowerCase().includes(searchText) ||
      item.walletAmount.toString().toLowerCase().includes(searchText) ||
      item.discountDetails.toLowerCase().includes(searchText)
  );

  const handleChangeValue = (value:string) => {
    setSearchText(value);
  };

  const openModal = () => {
    setWalletForm({
      walletName: "",
      walletType: "",
      customWalletType: "",
      walletAmount: "",
      discountPercentage: "",
      discountLimit: "",
    });
    setOfferType("");
    setViewMode("create");
    setIsModalOpen(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    let val = value;
    if (name === "discountPercentage" && value > 100) {
      val = 100;
    }

    if (name === "discountLimit" && value > 9999) {
      val = 9999;
    }
    setWalletForm((prevState: any) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const handleOfferTypeChange = (e: any) => {
    setOfferType(e.target.value);
  };

  const validateForm = () => {
    if (!walletForm.walletName) return false;
    if (!walletForm.walletType) return false;
    if (walletForm.walletType === "others" && !walletForm.customWalletType)
      return false;
    if (!offerType) return false;
    if (offerType === "Amount" && !walletForm.walletAmount) return false;
    if (offerType === "Discount") {
      if (!walletForm.discountPercentage) return false;
      if (!walletForm.discountLimit) return false;
    }
    if (walletTypeToShowSpec.includes(walletForm?.walletType)) {
      if (!walletForm?.doctorSepcialization) return false;
    }
    return true;
  };

  const isFormValid = validateForm();

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const allowedTypes = [
      "opd_consultation",
      "virtual_consultation",
      "dental_consultation",
      "eye_consultation",
      "diagnostic_tests",
      "pharmacy",
      "gym_subscription",
      "ambulance",
      "ctmri_tests",
      "virtual_consultation_specific",
      "panchakarma",
      "ds_tests",
      "others",
    ];

    if (!allowedTypes.includes(walletForm.walletType)) {
      toast.error("Invalid wallet type selected.");
      return;
    }

    let payload: any = {};

    if (offerType === "Amount") {
      payload = {
        wallet: {
          name: walletForm.walletName,
          type: walletForm.walletType,
          amount: walletForm.walletAmount
            ? parseInt(walletForm.walletAmount, 10)
            : undefined,
          // specialization: walletForm?.doctorSepcialization,
          include_ctrmi: false,
          // limits: null,
          // discount_percentage: null
        },
      };
    } else if (offerType === "Discount") {
      payload = {
        wallet: {
          name: walletForm.walletName,
          type: walletForm.walletType,
          limits: parseInt(walletForm.discountLimit, 10),
          discount_percentage: parseInt(walletForm.discountPercentage, 10),
          // specialization: walletForm?.doctorSepcialization ?? "",
          include_ctrmi: false,
          // amount: null,
        },
      };
    }

    if (walletTypeToShowSpec?.includes(walletForm.walletType)) {
      payload["wallet"]["specialization"] = walletForm?.doctorSepcialization;
    }
    if (walletForm?.walletType == "diagnostic_tests") {
      payload["wallet"]["include_ctrmi"] = walletForm?.include_ctrmi ?? false;
    }

    try {
      if (viewMode === "create") {
        const res: any = await dispatch(
          createWalletDetailsAPI({
            id,
            payload,
          })
        );

        if ((res as any)?.payload?.success) {
          toast.success("Clinic wallet created successfully!");
          fetchClinicWallets();
          resetForm();
        } else {
          toast.error(res?.error?.message || "Failed to create clinic wallet.");
        }
      } else if (viewMode === "edit") {
        const res: any = await dispatch(
          updateClinicWalletsAPI({
            client: { id: id },
            wallet: { id: walletForm?.id },
            payload,
          })
        );

        if ((res as any)?.payload?.success) {
          toast.success("Clinic wallet updated successfully!");
          fetchClinicWallets();
          // setTableData((prevData) =>
          //   prevData.map((wallet) =>
          //     wallet?.id === walletForm?.id
          //       ? {
          //         ...wallet,
          //         walletName: walletForm.walletName,
          //         walletType: walletForm.walletType,
          //         walletAmount: walletForm.walletAmount,
          //         discountDetails:
          //           walletForm.walletType === "Discount"
          //             ? `Discount: ${walletForm.discountPercentage}% Limit: ${walletForm.discountLimit}`
          //             : "N/A",
          //         discountPercentage: itemV.discountPercentage || "",
          //         discountLimit: itemV.discountLimit || "",
          //         include_ctrmi: itemV?.include_ctrmi || false,
          //         doctorSepcialization: itemV?.specialization || false
          //       }
          //       : wallet
          //   )
          // );
          resetForm();
        } else {
          toast.error(res?.error?.message || "Failed to update clinic wallet.");
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting wallet details:", error);
    }
  };

  console.log(walletForm, "walletForm");

  const resetForm = () => {
    setWalletForm({
      walletName: "",
      walletType: "",
      walletAmount: "",
      discountPercentage: "",
      discountLimit: "",
      customWalletType: "",
    });
    setOfferType("");
    setIsModalOpen(false);
  };

  const handlePageChange = (data: any) => {
    const { current, pageSize } = data;
    setPackagesPageSize(pageSize);
    setPage(current);
  };

  const fetchClinicWallets = useCallback(async () => {
    setLoading(true);
    try {
      const res = (await dispatch(getClinicWalletsApi(id))) as any;
      console.log("API Response: ", res);
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }

      const formattedData =
        res?.payload?.data?.clientWallets?.map((wallet: any) => ({
          id: wallet?.id,
          walletName: wallet.name,
          walletType: wallet.type,
          walletAmount: wallet.amount,
          discountDetails:
            wallet.discount_percentage !== null && wallet.limits !== null
              ? `Discount: ${wallet.discount_percentage}% Limit: ${wallet.limits}`
              : "N/A",

          discountPercentage: wallet.discount_percentage || "",
          discountLimit: wallet.limits || "",
          include_ctrmi: wallet?.include_ctrmi || false,
          doctorSepcialization: wallet?.specialization || false,
        })) ?? [];

      setTableData(formattedData);
    } catch (error) {
      console.error("Error fetching clinic wallets:", error);
    } finally {
      setLoading(false);
    }
  }, [id, dispatch]);

  useEffect(() => {
    fetchClinicWallets();
  }, [fetchClinicWallets]);

  return (
    <ClinicWalletsStyled>
      <div className="clinic-wallet-section">
        <div className="heading">
          <h3>
            Client Wallet Details{" "}
            {/* <button className="add-button" onClick={openModal}>
              <FaCirclePlus size={25} />
            </button> */}
          </h3>
          {/* <p>Total Client Wallet Detail - {tableData.length}</p> */}
        </div>
        <div className="mb-2">
          <CommonSearchBox 
            onSearch={handleChangeValue}
            placeHolder="Search Client details by wallet name, type, amount or discount & limit."
            searchText={searchText}
          />
        </div>
        <div className="wallet-table">
          <CustomTable
            columns={columns}
            data={filteredTableData}
            page={page}
            pageSize={packagesPageSize}
            total={filteredTableData?.length}
            pagination={true}
            showingName="Client Wallet"
            isLoading={loading}
            onPageChange={handlePageChange}
          />
        </div>

        {isModalOpen && (
          <CustomModal
            headerClassName="!px-1"
            open={isModalOpen}
            handleClose={() => setIsModalOpen(false)}
            title={
              viewMode === "details"
                ? "Client Wallet Details"
                : viewMode === "edit"
                ? "Edit Client Wallet"
                : "Create Client Wallet"
            }
          >
            <CustomModal.Body>
              <div className="form-group my-3">
                <label>Wallet Name</label>
                <input
                  type="text"
                  name="walletName"
                  placeholder="Wallet Name"
                  value={walletForm.walletName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"
                />
              </div>
              <div className="form-group my-3">
                <label>Wallet Type</label>
                <Select
                  allowClear
                  showSearch={true}
                  options={walletTypeOptions}
                  onChange={(e) => {
                    setWalletForm({ ...walletForm, walletType: e });
                  }}
                  value={walletForm.walletType}
                />
              </div>

              {walletForm?.walletType == "diagnostic_tests" && (
                <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                  <label htmlFor="">Include CTMRI</label>
                  <Switch
                    checked={walletForm?.include_ctrmi}
                    onChange={(e) => {
                      setWalletForm({ ...walletForm, include_ctrmi: e });
                    }}
                  />
                </div>
              )}

              {walletTypeToShowSpec?.includes(walletForm.walletType) && (
                <div className="form-group my-3">
                  <label>Doctor Specialization</label>
                  <Select
                    allowClear
                    showSearch={true}
                    options={doctorSpecializationOptions}
                    getPopupContainer={(trigger) => trigger.parentElement}
                    onChange={(e) => {
                      setWalletForm({ ...walletForm, doctorSepcialization: e });
                    }}
                    value={walletForm.doctorSepcialization}
                  />
                </div>
              )}

              {walletForm.walletType === "others" && (
                <div className="form-group my-3">
                  <label>Custom Wallet Type Name</label>
                  <input
                    type="text"
                    name="customWalletType"
                    placeholder="Enter Custom Wallet Type"
                    value={walletForm.customWalletType || ""}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {walletForm.walletType && (
                <>
                  <div className="offer-type-group">
                    <label>Offer Type</label>
                    <div className="offer-group my-1">
                      <label>
                        <input
                          type="radio"
                          name="offerType"
                          value="Amount"
                          checked={offerType === "Amount"}
                          onChange={handleOfferTypeChange}
                        />
                        Amount
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="offerType"
                          value="Discount"
                          checked={offerType === "Discount"}
                          onChange={handleOfferTypeChange}
                        />
                        Discount
                      </label>
                    </div>
                  </div>
                  {offerType === "Amount" && (
                    <div className="Amount-group">
                      <label>Wallet Amount</label>
                      <input
                        type="text"
                        placeholder="Decimal not allowed"
                        name="walletAmount"
                        value={walletForm.walletAmount}
                        onChange={handleInputChange}
                        className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"
                      />
                    </div>
                  )}
                  {offerType === "Discount" && (
                    <div>
                      {walletForm?.discountDetails ?? ""}
                      <div className="Discount-group">
                        <div className="discounts">
                          <label>Discount Percentage</label>
                          <input
                            type="number"
                            placeholder="Max 100"
                            max={100}
                            name="discountPercentage"
                            value={walletForm.discountPercentage}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"
                          />
                        </div>
                        <div className="discounts">
                          <label>Limit</label>
                          <input
                            type="number"
                            placeholder="Unlimited - 9999"
                            max={9999}
                            name="discountLimit"
                            value={walletForm.discountLimit}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm placeholder-gray-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CustomModal.Body>
            <CustomModal.Footer>
              <div className="flex gap-2 justify-end items-center">
                {viewMode !== "details" && (
                  <div className="flex justify-end items-center gap-2">
                    <SecoundaryButton onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </SecoundaryButton>
                    <PrimaryButton
                      onClick={handleFormSubmit}
                      disabled={!isFormValid}
                    >
                      {viewMode === "edit"
                        ? "Update Client Wallet"
                        : "Create Client Wallet"}
                    </PrimaryButton>
                  </div>
                )}
              </div>
            </CustomModal.Footer>
          </CustomModal>
        )}
      </div>

      <CustomModal
        open={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deletion"
      >
        <CustomModal.Body>
          Are you sure you want to delete this client wallet detail?
        </CustomModal.Body>
        <CustomModal.Footer>
          <Button
            variant="secondary"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </CustomModal.Footer>
      </CustomModal>
    </ClinicWalletsStyled>
  );
};

export default ClinicWallets;
