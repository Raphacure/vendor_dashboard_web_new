import { useEffect, useMemo, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IndexsStyled } from "./Index.styled";
import {
  bulkUpdatePackageVendor,
  bulkUpdateTestVendor,
  getAllVendorsAPI,
} from "@/redux/slices/vendor/vendorService";
import { MdDelete } from "react-icons/md";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { Select, Switch } from "antd";
import BulkUpdate from "./BulkUpdate";
import { toast } from "react-hot-toast";
import useHasPermission from "@/hooks/useHasPermission";

export type vendorDetailsDto = {
  mor_start_Time: string;
  mor_end_Time: string;
  mor_buying_price: number;
  mor_selling_price: number;
  mor_female_available: boolean;
  mor_male_available: boolean;
  aft_start_Time: string;
  aft_end_Time: string;
  aft_buying_price: number;
  aft_selling_price: number;
  aft_female_available: boolean;
  aft_male_available: boolean;
  eve_start_Time: string;
  eve_end_Time: string;
  eve_buying_price: number;
  eve_selling_price: number;
  eve_female_available: boolean;
  eve_male_available: boolean;
  vendor_test_code?: string;
  vendor_package_code?: string;
};

export type vendorDataDto = {
  [key: number]: {
    name: string;
    id: string;
    sellingPrice: number;
    buyingPrice: number;
  };
}[];

export const morningTimeOptions = [
  {
    label: "12:00 AM",
    value: "12:00 AM",
  },
  {
    label: "12:30 AM",
    value: "12:30 AM",
  },
  {
    label: "1:00 AM",
    value: "1:00 AM",
  },
  {
    label: "1:30 AM",
    value: "1:30 AM",
  },
  {
    label: "2:00 AM",
    value: "2:00 AM",
  },
  {
    label: "2:30 AM",
    value: "2:30 AM",
  },
  {
    label: "3:00 AM",
    value: "3:00 AM",
  },
  {
    label: "3:30 AM",
    value: "3:30 AM",
  },
  {
    label: "4:00 AM",
    value: "4:00 AM",
  },
  {
    label: "4:30 AM",
    value: "4:30 AM",
  },
  {
    label: "5:00 AM",
    value: "5:00 AM",
  },
  {
    label: "5:30 AM",
    value: "5:30 AM",
  },
  {
    label: "6:00 AM",
    value: "6:00 AM",
  },
  {
    label: "6:30 AM",
    value: "6:30 AM",
  },
  {
    label: "7:00 AM",
    value: "7:00 AM",
  },
  {
    label: "7:30 AM",
    value: "7:30 AM",
  },
  {
    label: "8:00 AM",
    value: "8:00 AM",
  },
  {
    label: "8:30 AM",
    value: "8:30 AM",
  },
  {
    label: "9:00 AM",
    value: "9:00 AM",
  },
  {
    label: "9:30 AM",
    value: "9:30 AM",
  },
  {
    label: "10:00 AM",
    value: "10:00 AM",
  },
  {
    label: "10:30 AM",
    value: "10:30 AM",
  },
  {
    label: "11:00 AM",
    value: "11:00 AM",
  },
  {
    label: "11:30 AM",
    value: "11:30 AM",
  },
];

export const afternoonTimeOptions = [
  {
    label: "12:00 PM",
    value: "12:00 PM",
  },
  {
    label: "12:30 PM",
    value: "12:30 PM",
  },
  {
    label: "1:00 PM",
    value: "1:00 PM",
  },
  {
    label: "1:30 PM",
    value: "1:30 PM",
  },
  {
    label: "2:00 PM",
    value: "2:00 PM",
  },
  {
    label: "2:30 PM",
    value: "2:30 PM",
  },
  {
    label: "3:00 PM",
    value: "3:00 PM",
  },
  {
    label: "3:30 PM",
    value: "3:30 PM",
  },
  {
    label: "4:00 PM",
    value: "4:00 PM",
  },
  {
    label: "4:30 PM",
    value: "4:30 PM",
  },
  {
    label: "5:00 PM",
    value: "5:00 PM",
  },
  {
    label: "5:30 PM",
    value: "5:30 PM",
  },
];

export const eveningTimeOption = [
  {
    label: "6:00 PM",
    value: "6:00 PM",
  },
  {
    label: "6:30 PM",
    value: "6:30 PM",
  },
  {
    label: "7:00 PM",
    value: "7:00 PM",
  },
  {
    label: "7:30 PM",
    value: "7:30 PM",
  },
  {
    label: "8:00 PM",
    value: "8:00 PM",
  },
  {
    label: "8:30 PM",
    value: "8:30 PM",
  },
  {
    label: "9:00 PM",
    value: "9:00 PM",
  },
  {
    label: "9:30 PM",
    value: "9:30 PM",
  },
  {
    label: "10:00 PM",
    value: "10:00 PM",
  },
  {
    label: "10:30 PM",
    value: "10:30 PM",
  },
  {
    label: "11:00 PM",
    value: "11:00 PM",
  },
  {
    label: "11:30 PM",
    value: "11:30 PM",
  },
];

export const errorDataValue = {
  mor_start_Time: "Please Select Morning Start Time",
  mor_end_Time: "Please Select Morning End Time",
  mor_buying_price: "Please Select Morning Buying Price",
  mor_selling_price: "Please Select S P",
  aft_start_Time: "Please Select Afternoon Start Time",
  aft_end_Time: "Please Select Afternoon Start Time",
  aft_buying_price: "Please Select Afternoon Start Time",
  aft_selling_price: "Please Select Afternoon Start Time",
  eve_start_Time: "Please Select Evening Start Time",
  eve_end_Time: "Please Select Evening Start Time",
  eve_buying_price: "Please Select Evening Start Time",
  eve_selling_price: "Please Select Evening Start Time",
};

const AssignVendor = ({
  assignedVendors,
  setAssignedVendors,
  onSuccess,
  isBulkUpdate,
  setIsBulkUpdate,
  id,
  sectionName,
}: {
  id: any;
  assignedVendors: vendorDataDto;
  setAssignedVendors: React.Dispatch<React.SetStateAction<vendorDataDto>>;
  onSuccess: any;
  onClose: () => void;
  isBulkUpdate: boolean;
  setIsBulkUpdate: (prop: boolean) => void;
  sectionName: "TEST" | "PACKAGE";
}) => {
  const dispatch = useDispatch() as any;
  const pageSize = 500;
  // const [assignedVendors, setAssignedVendors] = useState<any>({});
  const [searchVendorName, setSearchVendorName] = useState("");
  const [selectedCity, setSelectedCity] = useState<any>({
    label: "All city",
    value: "all",
  });
  const [sectionNameFilter, setSectionNameFilter] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessageText, setShowSuccessMessageText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [page, setPage] = useState(0);

  const [vendorsBulkUpdateIds, setvendorBulkUpdateIds] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const { isAllowed } = useHasPermission();

  const codeFeild = `vendor_${sectionName?.toLowerCase()}_code`;

  const handleSearchVendorName = async (value: any) => {
    // searchVendorNameRef.current = value;
    // await dispatch(
    //   getAllVendorsAPI({
    //     // type: "labtest",
    //     count: 1000,
    //     searchText: value,
    //     page: 0,
    //     activeStatus: "approved",
    //   })
    // );

    setSearchVendorName(value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(
      getAllVendorsAPI({
        // type: "labtest",
        count: pageSize,
        searchText: searchVendorName,
        page: page,
        activeStatus: "active",
        type: sectionNameFilter == "all" ? null : sectionNameFilter,
      })
    );
  }, [dispatch, searchVendorName, sectionNameFilter, page]);

  const sectionNameOptions = [
    {
      label: "all",
      value: "all",
    },
    {
      label: "Pharmacy",
      value: "pharmacy",
    },
    {
      label: "Hospital",
      value: "hospital",
    },
    {
      label: "Clinic",
      value: "clinic",
    },
    {
      label: "Diagnostic Center",
      value: "diagnostic_center",
    },
    {
      label: "Dental Care",
      value: "dental_care",
    },
    {
      label: "Eye Care",
      value: "eye_care",
    },
    {
      label: "Lab Test",
      value: "lab_test",
    },
    {
      label: "Radiology",
      value: "radiology",
    },
    {
      label: "Ayurveda",
      value: "ayurveda",
    },
    {
      label: "Ambulance",
      value: "ambulance",
    },
    {
      label: "Blood Bank",
      value: "blood_bank",
    },
    {
      label: "Fitness",
      value: "fitness",
    },
    {
      label: "Mental Wellness",
      value: "mental_wellness",
    },
  ];

  // const [formData, setFormData] = useState();
  const [errorData, setErrorData] = useState(errorDataValue);

  const handleChange = (key: any, value: any, id: any) => {
    setAssignedVendors((prev: any) => {
      return {
        ...prev,
        [id]: {
          ...prev?.[id],
          [key]: value,
        },
      };
    });

    setPage(0);
  };

  const { vendorList, loading } = useSelector((state: any) => state?.medicines);

  const cityOptions = useMemo(() => {
    const uniqueCity = new Set();
    if (Array.isArray(vendorList?.vendors)) {
      vendorList?.vendors?.map((item: any) => {
        uniqueCity.add(item?.city);
      });
      const options = Array.from(uniqueCity)?.map((item: any) => ({
        label: item,
        value: item,
      }));
      return [{ label: "All Cities", value: "all" }, ...options];
    }
    return [];
  }, [vendorList]);
  const [vendorSearch, setVendorSearch] = useState("");

  const onChange = (vendorId: number, details: any) => {
    if (isBulkUpdate) {
      // vendorsBulkUpdateIds()
      setvendorBulkUpdateIds((prev) => {
        if (prev.includes(vendorId)) {
          return prev.filter((id) => id != vendorId);
        }
        return [...prev, vendorId];
      });
    } else {
      if (assignedVendors?.[vendorId]) {
        let prev = { ...assignedVendors };
        delete prev?.[vendorId];
        setAssignedVendors(prev);
      } else {
        setAssignedVendors({
          ...assignedVendors,
          [vendorId]: details,
        });
      }
    }
  };

  const handleCityChange = (value: any) => {
    if (value === "all") {
      setSelectedCity({ label: "All city", value: "all" });
    } else {
      setSelectedCity(value);
    }
    setPage(0);
  };

  // const handleSubmitDetails = async () => {
  //   const payload = Object.values(assignedVendors)?.map((vendor: any) => ({
  //     id: Number(vendor?.id),
  //     buying_price: Number(vendor?.buyingPrice),
  //     selling_price: Number(vendor?.sellingPrice),
  //   }));

  //   if (payload?.length === 0) return;
  //   setIsLoading(false);
  //   const res: any = onSubmit({
  //     id: id,
  //     payload: { vendors: payload },
  //   });

  //   console.log(res);

  //   if (res?.payload?.success) {
  //     setShowSuccessMessage(true);
  //     setShowSuccessMessageText("Vendor Assigned Successfully!.");
  //   } else {
  //     setErrorMessage(res?.payload?.message);
  //   }
  //   setIsLoading(true);
  // };

  const handleRemoveVendor = (id: any) => {
    const vendor = { ...assignedVendors };
    delete vendor[id];

    setAssignedVendors(vendor);
  };

  const handleBulkUpdateSubmit = async (data: any) => {
    console.log({ ...data, vendorsBulkUpdateIds });

    if (vendorsBulkUpdateIds?.length == 0) {
      toast.error("Please select vendor");
      return;
    }

    let res: any = null;
    if (sectionName == "PACKAGE") {
      res = await dispatch(
        bulkUpdatePackageVendor({
          id,
          payload: { data, vendorIds: vendorsBulkUpdateIds },
        })
      );
    } else {
      res = await dispatch(
        bulkUpdateTestVendor({
          id,
          payload: { data, vendorIds: vendorsBulkUpdateIds },
        })
      );
    }

    if (res?.payload?.success) {
      // Reset bulk update state and clear selections
      setIsBulkUpdate?.(false);
      setvendorBulkUpdateIds([]);
      setSearchVendorName("");
      
      // Call success callback
      onSuccess?.();
      
      // Show success message
      toast.success("Bulk update completed successfully");
    } else {
      // Show error message with fallbacks
      const errorMsg = res?.payload?.message || res?.error?.message || "An error occurred during bulk update";
      toast.error(errorMsg);
    }
  };

  return (
    <IndexsStyled>
      {/* {isLoading && <BiLoader />} */}
      <div className=" text-capitalize">
        <Form.Group className="delta-signup-md" controlId="vendorName">
          <Form.Control
            type="text"
            name="vendorName"
            placeholder="Search vendor by name"
            value={searchVendorName ?? ""}
            onChange={(e) => handleSearchVendorName(e?.target?.value)}
            // autoFocus={searchVendorName ? true : false}
            autoFocus={true}
          />
        </Form.Group>
        <div className="action-div2">
          {/* <IndexsStyled> */}
          <Form.Group
            className="delta-signup-md selector-info-row"
            controlId="email"
          >
            <Form.Label> Select City</Form.Label>
            <Select
              showSearch={true}
              value={selectedCity}
              placeholder="Select city"
              onChange={handleCityChange}
              options={cityOptions ?? []}
              dropdownStyle={{ textTransform: "capitalize" }}
              className="delta-select select-filter text-capitalize"
              // classNamePrefix="delta-select"
            />
          </Form.Group>
          <Form.Group
            className="delta-signup-md selector-info-row"
            controlId="email"
          >
            <Form.Label> Select Section Name</Form.Label>
            <Select
              // mode="multiple"
              value={sectionNameFilter}
              placeholder="Select Category"
              onChange={(e: any) => {
                setSectionNameFilter(e);
                setPage(0);
              }}
              options={sectionNameOptions ?? []}
              className="delta-select select-filter"
            />
          </Form.Group>
        </div>
        {/* </IndexsStyled> */}
      </div>

      <div className="mt-2 d-flex jsutify-content-start align-items-center">
        <div>
          Bulk Update
          <Switch
            className="ml-2 "
            checked={isBulkUpdate}
            onChange={(checked) => {
              setIsBulkUpdate?.(checked);
            }}
          />
        </div>
        {isBulkUpdate && (
          <div className="ml-3">
            Select All
            <input
              checked={vendorsBulkUpdateIds?.length > 0 ? true : false}
              onClick={(e: any) => {
                console.log(e?.target?.value);
                if (e?.target?.checked) {
                  setvendorBulkUpdateIds(
                    vendorList?.vendors?.map((data: any) => data?.id)
                  );
                } else {
                  setvendorBulkUpdateIds([]);
                }
              }}
              className="ml-1"
              type="checkbox"
              name=""
              id=""
            />
          </div>
        )}
      </div>
      <div className="vendorCardsParent">
        <div className="container box1">
          <div className="vendorCardDiv">
            <div>Available Vendors: ({vendorList?.vendorCount ?? 0})</div>

            {loading ? (
              <>Loading...</>
            ) : (
              vendorList?.vendors?.map((vendor: any, i: number) => {
                if (
                  (selectedCity && selectedCity?.value === "all") ||
                  vendor?.city == selectedCity
                ) {
                  return (
                    <div className="vendorCard1" key={vendor?.id}>
                      <input
                        type="checkbox"
                        onChange={() => onChange(vendor?.id, vendor)}
                        name=""
                        checked={
                          isBulkUpdate
                            ? vendorsBulkUpdateIds?.includes(vendor?.id)
                            : assignedVendors?.[vendor?.id]
                            ? true
                            : false
                        }
                        id={vendor?.id ?? i}
                      />
                      {vendor?.name} - {vendor?.city}
                    </div>
                  );
                } else {
                  return <></>;
                }
              })
            )}
            {vendorList?.vendorCount > page * pageSize && (
              <Button
                className="load-more"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Load More
              </Button>
            )}
            {/* </div> */}
          </div>
        </div>

        <div className="container">
          <div className="vendorCardDiv">
            {!isBulkUpdate ? (
              <>
                <div className="d-flex flex-row justify-content-between align-items-end selectedVendorController">
                  <div className="selectedvendorsTitleBox">
                    <div className="font-size-1">
                      Selected Vendors: (
                      {Object.values(assignedVendors)?.length})
                    </div>
                    <Form.Control
                      placeholder="Search vendor"
                      value={vendorSearch}
                      onChange={(e: any) => {
                        setVendorSearch(e?.target?.value);
                      }}
                    />
                  </div>
                  {isAllowed("reset-assign-vendor") ? (
                    <Button onClick={() => setAssignedVendors({} as any)}>
                      Reset Selection
                    </Button>
                  ) : (
                    <></>
                  )}
                </div>
                {Object.values(assignedVendors)?.map((vendor: any) => {
                  const regex = new RegExp(vendorSearch, "i");

                  if (
                    vendorSearch &&
                    !(regex.test(vendor?.name) || regex.test(vendor?.city))
                  ) {
                    return <></>;
                  }
                  return (
                    <div key={vendor?.id} className="vendorCard2">
                      <div className="action-div space-between">
                        <div className="w-100 d-flex justify-content-center align-items-center">
                          <div className="mr-2">
                            {vendor?.name} {vendor?.city}
                          </div>
                          <Form.Control
                            className="vendorsCode"
                            name={codeFeild}
                            value={vendor?.[codeFeild]}
                            placeholder={`Enter vendor ${sectionName?.toLowerCase()} code.`}
                            onChange={(e) => {
                              handleChange(
                                codeFeild,
                                e?.target?.value ?? "",
                                vendor?.id
                              );
                            }}
                          />
                        </div>
                        <MdDelete
                          className="icon"
                          onClick={() => handleRemoveVendor(vendor?.id)}
                        />
                      </div>
                      {/* <Row className="m-0 me-3">
                  <Col className="p-0">
                    <Form.Control
                      type="number"
                      name="vendorName"
                      placeholder="Buying Price"
                      value={vendor?.buyingPrice}
                      onChange={(e) =>
                        handleChangePrice(
                          vendor?.id,
                          e?.target?.value,
                          "BUYINGPRICE"
                        )
                      }
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col> 
                </Row> */}

                      <div className="formDiv">
                        {/* <Row className="mt-3 m-0 mb-1">Morning</Row> */}
                        <Row className="m-0 row-gap">
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                              value={vendor?.mor_start_Time}
                              placeholder="Select time"
                              onChange={(e) => {
                                console.log(e);

                                handleChange("mor_start_Time", e, vendor?.id);
                              }}
                              options={morningTimeOptions}
                              className="delta-select select"
                            />
                            {errorData?.mor_start_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.mor_start_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                              value={vendor?.mor_end_Time}
                              placeholder="Select time"
                              onChange={(e) =>
                                handleChange("mor_end_Time", e, vendor?.id)
                              }
                              options={morningTimeOptions}
                              className="delta-select select"
                            />
                            {errorData?.mor_end_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.mor_end_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="mor_buying_price"
                              min="0"
                              required
                              value={
                                vendor?.mor_buying_price || 0
                                //  ||
                                // vendor?.buying_price ||
                                // vendor?.buyingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  "mor_buying_price",
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.mor_start_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.mor_start_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* <Form.Group controlId="name"></Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="mor_selling_price"
                              min="0"
                              required
                              value={
                                vendor?.mor_selling_price || 0
                                //  ||
                                // vendor?.selling_price ||
                                // vendor?.sellingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.mor_selling_price && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.mor_selling_price}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="mor_female_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.mor_female_available}
                              id={`mor_female_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="mor_male_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.mor_male_available}
                              id={`mor_male_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                        </Row>
                        {/* <Row className="m-0 mt-3 mb-1">Afternoon</Row> */}
                        <Row className="m-0 me-3  row-gap">
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                              value={vendor?.aft_start_Time}
                              placeholder="Select time"
                              onChange={(e) =>
                                handleChange("aft_start_Time", e, vendor?.id)
                              }
                              options={afternoonTimeOptions}
                              className="delta-select select"
                            />
                            {errorData?.aft_start_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.aft_start_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                              value={vendor?.aft_end_Time}
                              placeholder="Select time"
                              onChange={(e) =>
                                handleChange("aft_end_Time", e, vendor?.id)
                              }
                              options={afternoonTimeOptions}
                              className="delta-select select"
                            />
                            {errorData?.aft_end_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.aft_end_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="aft_buying_price"
                              min="0"
                              required
                              value={
                                vendor?.aft_buying_price || 0
                                // ||
                                // vendor?.buying_price ||
                                // vendor?.buyingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.aft_buying_price && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.aft_buying_price}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="aft_selling_price"
                              min="0"
                              required
                              value={
                                vendor?.aft_selling_price || 0
                                // ||
                                // vendor?.selling_price ||
                                // vendor?.sellingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.aft_selling_price && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.aft_selling_price}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="aft_female_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.aft_female_available}
                              id={`aft_female_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="aft_male_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.aft_male_available}
                              id={`aft_male_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                        </Row>
                        {/* <Row className="m-0 mt-3 mb-1">Evening</Row> */}
                        <Row className="m-0 me-3  row-gap">
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Start Time</Form.Label>
                            <Select
                              value={vendor?.eve_start_Time}
                              placeholder="Select time"
                              onChange={(e) =>
                                handleChange("eve_start_Time", e, vendor?.id)
                              }
                              options={eveningTimeOption}
                              className="delta-select select"
                            />
                            {errorData?.eve_start_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.eve_start_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>End Time</Form.Label>
                            <Select
                              value={vendor?.eve_end_Time}
                              placeholder="Select time"
                              onChange={(e) =>
                                handleChange("eve_end_Time", e, vendor?.id)
                              }
                              options={eveningTimeOption}
                              className="delta-select select"
                            />
                            {errorData?.eve_end_Time && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.eve_end_Time}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Buying P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="eve_buying_price"
                              min="0"
                              required
                              value={
                                vendor?.eve_buying_price || 0
                                // ||
                                // vendor?.buying_price ||
                                // vendor?.buyingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.eve_buying_price && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.eve_buying_price}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Selling P.</Form.Label>
                            <Form.Control
                              type="number"
                              name="eve_selling_price"
                              min="0"
                              required
                              value={
                                vendor?.eve_selling_price || 0
                                // ||
                                // vendor?.selling_price ||
                                // vendor?.sellingPrice
                              }
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.value,
                                  vendor?.id
                                )
                              }
                            />
                            {errorData?.eve_selling_price && (
                              <Form.Control.Feedback type="invalid">
                                {errorDataValue?.eve_selling_price}
                              </Form.Control.Feedback>
                            )}
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Female</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="eve_female_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.eve_female_available}
                              id={`eve_female_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                          <Col className="p-0">
                            {/* <Form.Group controlId="name"> */}
                            <Form.Label>Male</Form.Label>
                            <Form.Check
                              type="switch"
                              label=""
                              name="eve_male_available"
                              onChange={(e) =>
                                handleChange(
                                  e?.target?.name,
                                  e?.target?.checked,
                                  vendor?.id
                                )
                              }
                              checked={vendor?.eve_male_available}
                              id={`eve_male_available-${vendor?.id}`}
                              // custom
                            />
                            {/* </Form.Group> */}
                          </Col>
                        </Row>
                      </div>

                      <div className="action-div2"></div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="font-size-1">
                  Selected Vendors: ({vendorsBulkUpdateIds?.length})
                </div>
                <BulkUpdate
                  totalSelectedVendors={vendorsBulkUpdateIds?.length}
                  section_name={sectionName}
                  onSubmit={handleBulkUpdateSubmit}
                />
              </>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>

      <CustomModal
        open={showSuccessMessage}
        title={showSuccessMessageText}
        handleClose={() => {
          setShowSuccessMessage(false);
          onSuccess();
        }}
      >
        <CustomModal.Body>
          <div className="text-center p-4">
            <p>{showSuccessMessageText}</p>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <Button
            className="btn btn-primary w-100"
            onClick={() => {
              setShowSuccessMessage(false);
              onSuccess();
            }}
          >
            Ok
          </Button>
        </CustomModal.Footer>
      </CustomModal>
    </IndexsStyled>
  );
};

export default AssignVendor;
