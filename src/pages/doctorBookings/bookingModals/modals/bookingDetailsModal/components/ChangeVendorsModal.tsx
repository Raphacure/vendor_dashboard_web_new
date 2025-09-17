import React, { useState } from "react";
import { Select, Table } from "antd";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { Button as AntButton } from "antd";
import { AdminEPrescriptionStyled } from "../tabs/AdminEPrescription/AdminEPrescription.styled";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllCommonVendorsAPI } from "@/redux/slices/vendor/vendorService";

interface ChangeVendorsModalProps {
  vendors: any[];
  visible: boolean;
  onClose: () => void;
  selectedVendor: any;
  setSelectedVendor: (vendor: any) => void;
  allAddress: any[];
  selectedPackages: any;
  selectedAddress: any;
  setSelectedAddress: (address: any) => void;
}

const ChangeVendorsModal: React.FC<ChangeVendorsModalProps> = ({
  vendors,
  visible,
  onClose,
  selectedVendor,
  setSelectedVendor,
  allAddress,
  selectedPackages,
  selectedAddress,
  setSelectedAddress,
}) => {
  const [commonVendorsList, setCommonVendorsList] = useState([]);
  const [sortParams, setSortParams] = useState({
    sort_by: "distance",
    order: "asc",
  });

  const dispatch = useDispatch() as any;

  useEffect(() => {
    if (selectedPackages?.service_code) {
      setCommonVendorsList([])
      updateVendorsList(
        [selectedPackages.service_code],
        selectedAddress,
        sortParams
      );
    }
  }, [selectedPackages?.service_code]);

  const updateVendorsList = async (
    idArray: any,
    selectedAddress: any,
    sortParams: any = {}
  ) => {
    console.log("idArray : ", idArray);
    console.log("selectedAddress : ", selectedAddress);
    if (!idArray?.length) {
      toast.error("Tests not available");
      return;
    }
    if (!selectedAddress?.latitude || !selectedAddress?.longitude) {
      toast.error("Address not available");
      return;
    }

    try {
      const res: any = await dispatch(
        getAllCommonVendorsAPI({
          service_codes: idArray,
          lat: selectedAddress?.latitude,
          long: selectedAddress?.longitude,
          ...sortParams,
        })
      );
      console.log("updateVendorsList res : ", res?.payload?.vendors);
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }
      if (res?.payload?.vendors) {
        setCommonVendorsList(res?.payload?.vendors);
      }
    } catch (error) {
      console.error("Error fetching vendors:", error);
      toast.error("Failed to fetch vendors");
    }
  };

  const handleAddressChange = async (value: number) => {
    const selectedAddr = allAddress.find((addr: any) => addr.id === value);
    await setSelectedAddress(selectedAddr);
    console.log("Selected address:", selectedAddr);
    if (selectedPackages) {
      await updateVendorsList(
        [selectedPackages.service_code],
        selectedAddr,
        sortParams
      );
    }
  };

  const handleSortChange = async (sortField: string, value: string) => {
    const newSortParams = {
      ...sortParams,
      [sortField]: value,
    };
    setSortParams(newSortParams);
    if (selectedPackages && selectedAddress) {
      await updateVendorsList(
        [selectedPackages.service_code],
        selectedAddress,
        newSortParams
      );
    }
  };

  useEffect(() => {
    console.log("commonVendorsList : ", commonVendorsList);
  }, [commonVendorsList]);

  return (
    <BootstrapModal show={visible} onHide={onClose} centered size="xl">
      <BootstrapModal.Header>
        <BootstrapModal.Title>Choose Your Labs</BootstrapModal.Title>
        <Button variant="link" className="close" onClick={onClose}>
          <FaTimes />
        </Button>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <AdminEPrescriptionStyled>
          <div className="d-flex flex-row gap-4 mb-4 ">
            <Select
              placeholder="Select Address"
              className="w-full"
              style={{ maxWidth: "700px" }}
              value={selectedAddress?.id}
              onChange={handleAddressChange}
              options={allAddress?.map((addr: any) => ({
                value: addr.id,
                label: addr.address,
              }))}
            />
            <Select
              placeholder="Sort By"
              className="w-40"
              value={sortParams.sort_by}
              onChange={(value) => handleSortChange("sort_by", value)}
              options={[
                { value: "distance", label: "Distance" },
                { value: "price", label: "Price" },
              ]}
            />
            <Select
              placeholder="Order"
              className="w-32"
              value={sortParams.order}
              onChange={(value) => handleSortChange("order", value)}
              options={[
                { value: "asc", label: "Ascending" },
                { value: "desc", label: "Descending" },
              ]}
            />
          </div>
          <Table
            dataSource={commonVendorsList}
            className="raphacureAssuredPrice order-section"
            columns={[
              { title: "Labs Name", dataIndex: "name", key: "name" },
              {
                title: "Distance",
                dataIndex: "distance_km",
                key: "distance",
                render: (text) => (
                  <span>{text ? `${Number(text).toFixed(2)} Km` : "-"}</span>
                ),
              },
              {
                title: "Total Test",
                dataIndex: "total_test",
                key: "total_test",
                render: (text, record) => (
                  <span>{selectedPackages?.tests?.length}</span>
                ),
              },
              {
                title: "Date",
                dataIndex: "created_at",
                key: "created_at",
                render: (date: string) => new Date(date)?.toLocaleDateString(),
              },
              {
                title: "Time",
                dataIndex: "slot_start_time",
                key: "slot_start_time",
                render: (time: string) =>
                  time.split(":")?.slice(0, 2)?.join(":"),
              },
              {
                title: "Price",
                dataIndex: "mor_buying_price",
                key: "mor_buying_price",
                render: (price: number) => `₹${price?.toLocaleString("en-IN") || "-"}`,
              },
              {
                title: "Select",
                key: "select",
                render: (text, record: any) => (
                  <AntButton
                    type={
                      selectedVendor?.id === record.id ? "primary" : "default"
                    }
                    onClick={() => setSelectedVendor(record)}
                  >
                    {selectedVendor?.id === record.id ? "Selected" : "Select"}
                  </AntButton>
                ),
              },
            ]}
            pagination={false}
          />
        </AdminEPrescriptionStyled>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => onClose()}>
          Save Changes
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default ChangeVendorsModal;
