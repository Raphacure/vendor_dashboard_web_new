import React, { memo, useEffect } from "react";
import ExistingPatient from "./ExistingPatient";
import NewPatient from "./NewPatient";
import AutocompleteField from "@/components/Address/AddressAutoComplete/AddressAutoComplete";
import { Card, Typography, Space, Input, Button } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import BulkEmployee from "./BulkEmployee";
import { NotebookPen } from "lucide-react";
import { UserDetails, ValidationErrors } from "../types";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const { Title, Text } = Typography;

interface OrderFormCommonDetailsProps {
  formData: UserDetails;
  setFormData: React.Dispatch<React.SetStateAction<UserDetails>>;
  consultType: string;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const OrderFormCommonDetails = ({
  formData,
  setFormData,
  validationErrors,
  setValidationErrors,
}: OrderFormCommonDetailsProps) => {
  const { linkableId } = useClientLinkableId();

  useEffect(() => {
    setFormData((pre) => {
      return {
        ...pre,
        users: [],
      };
    });
  }, [formData?.userType, setFormData]);

  const handlePlaceSelected = (place: any) => {
    if (place) {
      const fullAddress = place.formatted_address;
      let latitude: any = null;
      let longitude: any = null;
      if (typeof place.geometry?.location?.lat === "function") {
        latitude = place.geometry?.location?.lat();
      } else {
        latitude = place.geometry?.location?.lat;
      }
      if (typeof place.geometry?.location?.lng === "function") {
        longitude = place.geometry?.location?.lng();
      } else {
        longitude = place.geometry?.location?.lng;
      }
      const addressComponents = place.address_components;
      const city = addressComponents?.find((component: any) =>
        component.types.includes("locality")
      )?.long_name;
      const state = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_1")
      )?.long_name;
      const postalCode = addressComponents?.find((component: any) =>
        component.types.includes("postal_code")
      )?.long_name;
      if (latitude && longitude) {
        const savedAddr = {
          fullAddress,
          detail: null,
          city,
          latitude,
          longitude,
          state,
          zip: postalCode,
        };
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          users: [
            {
              ...(prevFormData.users?.[0] || {}),
              address: savedAddr,
            },
          ],
        }));
      }
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-2 !mt-[22px]">
      <Space direction="vertical" size="large" className="w-full">
        <Card
          className={`shadow-md ${
            Object.keys(validationErrors.user || {}).length > 0
              ? "!border-red-500"
              : ""
          }`}
        >
          <Space direction="vertical" size="large" className="w-full">
            {/* Patient Type Selection */}
            <div>
              <div className="flex items-center mb-4">
                <UserOutlined className="text-blue-500 !mr-2 text-lg" />
                <Title level={4} className="m-0">
                  Employee Details
                </Title>
              </div>
              <div className="flex items-center justify-start gap-2 flex-wrap">
                <Button
                  type={
                    formData?.userType === "existing" ? "primary" : "default"
                  }
                  onClick={() =>
                    setFormData((pre: any) => ({
                      ...pre,
                      userType: "existing",
                    }))
                  }
                  className={`h-10 px-4 !rounded-full flex items-center justify-center focus:outline-none ${
                    formData?.userType === "existing"
                      ? "!bg-[#222E62] text-white"
                      : "bg-white text-[#222E62] border border-[#222E62] hover:bg-opacity-10 hover:bg-[#222E62]"
                  }`}
                >
                  <Text
                    strong
                    className={`${
                      formData?.userType === "existing"
                        ? "text-white"
                        : "text-[#222E62]"
                    }`}
                  >
                    Existing Employee
                  </Text>
                </Button>
                {linkableId === "58ac0845-98d5-411e-aa3e-9490d7fcde1f" && (
                  <>
                    <Text strong className="text-gray-600">
                      OR
                    </Text>
                    <Button
                      type={
                        formData?.userType === "bulk" ? "primary" : "default"
                      }
                      onClick={() =>
                        setFormData((pre: any) => ({
                          ...pre,
                          userType: "bulk",
                        }))
                      }
                      className={`h-10 px-4 !rounded-full flex items-center justify-center focus:outline-none ${
                        formData?.userType === "bulk"
                          ? "!bg-[#222E62] text-white"
                          : "bg-white text-[#222E62] border border-[#222E62] hover:bg-opacity-10 hover:bg-[#222E62]"
                      }`}
                    >
                      <Text
                        strong
                        className={`${
                          formData?.userType === "bulk"
                            ? "text-white"
                            : "text-[#222E62]"
                        }`}
                      >
                        Bulk Employee
                      </Text>
                    </Button>
                  </>
                )}
                <Text strong className="text-gray-600">
                  OR
                </Text>
                <Button
                  type={formData?.userType === "new" ? "primary" : "default"}
                  onClick={() =>
                    setFormData((pre: any) => ({ ...pre, userType: "new" }))
                  }
                  className={`h-10 px-4 !rounded-full flex items-center justify-center focus:outline-none ${
                    formData?.userType === "new"
                      ? "!bg-[#222E62] text-white"
                      : "bg-white text-[#222E62] border border-[#222E62] hover:bg-opacity-10 hover:bg-[#222E62]"
                  }`}
                >
                  <Text
                    strong
                    className={`${
                      formData?.userType === "new"
                        ? "text-white"
                        : "text-[#222E62]"
                    }`}
                  >
                    New Employee
                  </Text>
                </Button>
              </div>
            </div>

            {/* Patient Selection/Creation */}
            <div>
              {formData?.userType === "new" && (
                <NewPatient
                  validationErrors={validationErrors}
                  formData={formData}
                  setValidationErrors={setValidationErrors}
                  setFormData={setFormData}
                />
              )}
              {formData?.userType === "existing" && (
                <ExistingPatient
                  validationErrors={validationErrors}
                  selectedPatient={formData.users}
                  setFormData={setFormData}
                  setValidationErrors={setValidationErrors}
                />
              )}
              {formData?.userType === "bulk" && (
                <BulkEmployee
                  formData={formData.users}
                  setFormData={setFormData}
                />
              )}
            </div>
          </Space>
        </Card>

        {formData.userType !== "bulk" && (
          <Card
            className={`shadow-md ${
              validationErrors.address ? "!border-red-500" : ""
            }`}
          >
            <Space direction="vertical" size="large" className="w-full">
              <div>
                <div className="flex items-center mb-4">
                  <HomeOutlined className="text-green-500 !mr-2 text-lg" />
                  <Title level={4} className="m-0">
                    Address Information
                  </Title>
                </div>
                <Space direction="vertical" size="middle" className="w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <AutocompleteField
                      onChange={(e: any) =>
                        setFormData((pre) => {
                          const existingUser = pre.users?.[0] || {
                            user: {},
                            address: {},
                          };

                          return {
                            ...pre,
                            users: [
                              {
                                ...existingUser,
                                address: {
                                  ...existingUser.address,
                                  fullAddress: e.target.value,
                                },
                              },
                            ],
                          };
                        })
                      }
                      onAddressSelected={handlePlaceSelected}
                      placeholder="Enter users's address"
                      className={`w-full h-12 ${
                        validationErrors?.address?.fullAddress
                          ? "!border-red-500"
                          : ""
                      } !rounded-[8px]`}
                      value={formData?.users?.[0]?.address?.fullAddress ?? ""}
                    />
                    {validationErrors?.address?.city && (
                      <p className="mt-1 text-sm text-red-500">
                        {validationErrors.address.city}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Input
                        placeholder="Enter city"
                        className={`h-12 !rounded-[8px] ${
                          validationErrors?.address?.city
                            ? "!border-red-500"
                            : ""
                        }`}
                        value={formData?.users?.[0]?.address?.city ?? ""}
                        onChange={(e) =>
                          setFormData((prev: any) => ({
                            ...prev,
                            users: [
                              {
                                ...prev.users?.[0],
                                address: {
                                  ...prev.users?.[0]?.address,
                                  city: e.target.value,
                                },
                              },
                            ],
                          }))
                        }
                      />
                      {validationErrors?.address?.city && (
                        <p className="mt-1 text-sm text-red-500">
                          {validationErrors.address.city}
                        </p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <Input
                        placeholder="Enter state"
                        className={`h-12 !rounded-[8px] ${
                          validationErrors?.address?.state
                            ? "!border-red-500"
                            : ""
                        }`}
                        value={formData?.users?.[0]?.address?.state ?? ""}
                        onChange={(e) =>
                          setFormData((prev: any) => ({
                            ...prev,
                            users: [
                              {
                                ...prev.users?.[0],
                                address: {
                                  ...prev.users?.[0]?.address,
                                  state: e.target.value,
                                },
                              },
                            ],
                          }))
                        }
                      />
                      {validationErrors?.address?.state && (
                        <p className="mt-1 text-sm text-red-500">
                          {validationErrors.address.state}
                        </p>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <Input
                        placeholder="Enter ZIP code"
                        maxLength={6}
                        className={`h-12 !rounded-[8px] ${
                          validationErrors?.address?.zip
                            ? "!border-red-500"
                            : ""
                        }`}
                        value={formData?.users?.[0]?.address?.zip ?? ""}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          setFormData((prev: any) => ({
                            ...prev,
                            users: [
                              {
                                ...prev.users?.[0],
                                address: {
                                  ...prev.users?.[0]?.address,
                                  zip: value,
                                },
                              },
                            ],
                          }));
                        }}
                      />
                      {validationErrors?.address?.zip && (
                        <p className="mt-1 text-sm text-red-500">
                          {validationErrors.address.zip}
                        </p>
                      )}
                    </div>
                  </div>
                </Space>
              </div>
            </Space>
          </Card>
        )}

        {["existing", "new"].includes(formData.userType) && (
          <Card className={`shadow-md`}>
            <Space direction="vertical" size="large" className="w-full">
              <Title level={4} className="m-0">
                <NotebookPen /> Remarks
              </Title>
              <Input
                placeholder="Enter Remark"
                className={"h-12 !rounded-[8px]"}
                value={formData?.users?.[0]?.user?.remark ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prev: any) => ({
                    ...prev,
                    users: [
                      {
                        ...prev.users?.[0],
                        user: {
                          ...prev.users?.[0]?.user,
                          remark: value,
                        },
                      },
                    ],
                  }));
                }}
              />
            </Space>
          </Card>
        )}
        {/* <Card
          className={`shadow-md ${
            validationErrors?.payment?.paymentMethod ||
            validationErrors?.payment?.paymentType
              ? "!border-red-500"
              : ""
          }`}
        >
          <Space direction="vertical" size="large" className="w-full">
            <div>
              <div className="flex items-center mb-4">
                <CreditCardOutlined className="text-orange-500 !mr-2 text-lg" />
                <Title level={4} className="m-0">
                  Payment
                </Title>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Collection Method
                </label>
                <Select
                  onChange={(value) => {
                    setFormData((prev: any) => ({
                      ...prev,
                      payment: { paymentType: null, paymentMethod: value },
                    }));

                    if (validationErrors?.payment?.paymentMethod && value) {
                      setValidationErrors((prev: any) => ({
                        ...prev,
                        payment: {
                          ...prev.payment,
                          paymentMethod: null,
                        },
                      }));
                    }
                  }}
                  value={formData?.payment?.paymentMethod}
                  className="w-full !h-12"
                  placeholder="Select payment method"
                  status={
                    validationErrors?.payment?.paymentMethod ? "error" : ""
                  }
                >
                  <Select.Option value="clinic_collects">
                    <div>
                      <Text strong className="block">
                        Clinic Collection
                      </Text>
                      <Text className="text-sm text-gray-600">
                        Amount will be collected by the clinic from patient
                      </Text>
                    </div>
                  </Select.Option>
                  <Select.Option value="raphacure_collects">
                    <div>
                      <Text strong className="block">
                        Raphacure Collection
                      </Text>
                      <Text className="text-sm text-gray-600">
                        Amount to be collected by Raphacure from patient
                      </Text>
                    </div>
                  </Select.Option>
                  <Select.Option value="raphacure_bills_clinic">
                    <div>
                      <Text strong className="block">
                        Clinic Billing
                      </Text>
                      <Text className="text-sm text-gray-600">
                        Amount to be billed by Raphacure to the clinic
                      </Text>
                    </div>
                  </Select.Option>
                </Select>
                {validationErrors?.payment?.paymentMethod && (
                  <p className="mt-1 text-sm text-red-500">
                    {validationErrors.payment.paymentMethod}
                  </p>
                )}
              </div>
              {formData?.payment?.paymentMethod !== "raphacure_collects" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Type
                  </label>
                  <Select
                    onChange={(value) => {
                      setFormData((prev: any) => ({
                        ...prev,
                        payment: { ...prev.payment, paymentType: value },
                      }));

                      if (validationErrors?.payment?.paymentType && value) {
                        setValidationErrors((prev: any) => ({
                          ...prev,
                          payment: {
                            ...prev.payment,
                            paymentType: null,
                          },
                        }));
                      }
                    }}
                    value={formData?.payment?.paymentType}
                    className="w-full !h-12"
                    placeholder="Select payment type"
                    status={
                      validationErrors?.payment?.paymentType ? "error" : ""
                    }
                  >
                    {[
                      { value: "upi", label: "UPI" },
                      { value: "card", label: "Card" },
                      { value: "cash", label: "Cash" },
                      { value: "wallet", label: "Wallet" },
                      { value: "gpay", label: "GPay" },
                      { value: "phonepay", label: "PhonePay" },
                      { value: "bank_transfer", label: "Bank Transfer" },
                      { value: "online_banking", label: "Online Banking" },
                      { value: "other", label: "Other" },
                    ].map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                  {validationErrors?.payment?.paymentType && (
                    <p className="mt-1 text-sm text-red-500">
                      {validationErrors.payment.paymentType}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Space>
        </Card> */}
      </Space>
    </div>
  );
};

export default memo(OrderFormCommonDetails);
