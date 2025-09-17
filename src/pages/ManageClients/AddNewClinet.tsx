import { useEffect, useRef, useState } from "react";
import { ManageUsersStyled } from "./ManageClients.styled";
import { getS3PresignedUrl } from "../../redux/slices/auth/authService";
import { Form } from "react-bootstrap";
import { Button as AntdButton, Image } from "antd";
import { FiUpload } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/loader/Loader";

// import ProductCard from "./../../components/ProductCard";
import {
  clientErrorDto,
  clientFormPropDto,
  clientsFormDataDto,
  clientsFormDatakeysDto,
} from "./types";
import { Upload } from "antd";
import axios from "axios";
import {
  createClientAPI,
  updateClientDetailsAPI,
} from "../../redux/slices/Clients/ClientsService";

import { getAllParentCompany } from "../../redux/slices/Clients/ClientsService";
import AutocompleteField from "../../components/Address/AddressAutoComplete/AddressAutoComplete";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
const initValStore: clientsFormDataDto = {
  address: undefined,
  city: undefined,
  companyName: undefined,
  dependentsPerUser: undefined,
  maxUsers: undefined,
  pincode: undefined,
  state: undefined,
  contractStartDate: undefined,
  contractEndDate: undefined,
  parentCompany: undefined,
  uploadLogo: undefined,
  booking_key: undefined,
};
const initValError: clientErrorDto = {
  companyName: false,
  address: false,
  city: false,
  state: false,
  pincode: false,
  maxUsers: false,
  dependentsPerUser: false,
  contractStartDate: false,
  contractEndDate: false,
  booking_key: false,
  // parentCompany: false,
  uploadLogo: false,
};
const initErrorDataValue = {
  fullName: "Please Enter First name",
  email: "Please Enter Phone number",
  phoneNumber: "Please Enter Last name",
  role: "Please Enter Last name",

  companyName: "Please Enter Company Name",
  address: "Please Enter Address",
  city: "Please Enter city",
  state: "Please Enter state",
  pincode: "Please Enter pin code",
  maxUsers: "Please Enter max users",
  dependentsPerUser: "Please Enter dependents per user",
  contractStartDate: "Please Enter contract start date",
  contractEndDate: "Please Enter contarct end date",
  parentCompany: "Please Enter parent company",
  uploadLogo: "Please Enter upload Logo",
  booking_key: "Please Enter Booking Key",
};
const AddNewClinet = (props: clientFormPropDto) => {
  // Use clientFormPropDto directly
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<any>(initValStore);
  const [errorData, setErrorData] = useState(initValError);
  const [errorDataValue, setErrorDataValue] = useState(initErrorDataValue);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // const query = useQuery();
  // const selectedTab = query.get("selectedTab");
  const isEdit = props?.isEdit ?? false; // Use the passed isEdit prop, default to false
  const userId = null;
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state?.auth);

  const { linkableId } = useClientLinkableId();

  useEffect(() => {
    if (props?.selectedUser) {
      setFormData(props?.selectedUser);
    }
  }, [props?.selectedUser]);

  const handleChangeValue = (e: any) => {
    setErrorMessage("");
    let { name, value } = e.target;
    var value1 = value;
    if (value && value?.trim() == "") {
      value1 = value?.trim();
    }
    const addr = { ...formData };
    const addr_error = { ...errorData };

    setFormData({
      ...addr,
      [name]: value1,
    });
    setErrorData({
      ...addr_error,
      [name]: false,
    });
  };

  const handleSaveClick = async () => {
    setShowErrorMessage(true);
    setErrorMessage("");
    var isValid = true;
    var errornew: any = { ...initValError };

    for (var key in errornew) {
      if (["address", "city", "state", "pincode", "zip"].includes(key)) {
        if (key == "zip" || key == "pincode") {
          if (!addressData?.zip) {
            errornew[key] = true;
            isValid = false;
          }
        } else if (key == "uploadLogo") {
          if (!imageUrl) {
            errornew[key] = true;
            isValid = false;
          }
        } else if (!(addressData as any)?.[key]) {
          errornew[key] = true;
          isValid = false;
        }
      } else if (
        formData[key as clientsFormDatakeysDto] === "" ||
        !formData[key as clientsFormDatakeysDto]
      ) {
        // @ts-ignore
        errornew[key] = true;
        isValid = false;
      }
    }

    setErrorData({ ...errornew });
    console.log(errornew);

    if (isValid) {
      //   , _id: user?._id
      // const jBody = { ...formData, instituteId: user?._id };
      const jBody = {
        name: formData?.companyName ?? null,
        address: addressData?.address ?? null,
        state: addressData?.state ?? null,
        city: addressData?.city?.toLowerCase() ?? null,
        zip: addressData?.zip ?? null,
        logo_url: imageUrl ?? null,
        parent_id: linkableId ?? null,
        user_max: formData?.maxUsers ?? null,
        dependent_per_user: formData?.dependentsPerUser ?? null,
        booking_key: "-",
        contract_start: formData?.contractStartDate ?? null,
        contract_end: formData?.contractEndDate ?? null,
      };

      setIsLoading(true);
      if (props?.selectedUser) {
        const body = { ...jBody };
        const resp = (await dispatch(updateClientDetailsAPI(body))) as any;
        setIsLoading(false);
        if (resp?.payload?.success) {
          props?.onSuccess();
        } else if (resp?.payload?.error) {
          setErrorMessage(resp?.payload?.error);
        }
      } else {
        const body = { ...jBody };
        const resp = (await dispatch(createClientAPI(body))) as any;
        setIsLoading(false);
        if (resp?.payload?.success) {
          props?.onSuccess();
        } else if (resp?.error) {
          setErrorMessage(resp?.error?.message ?? "");
        }
      }
    }
  };
  const handleCancel = () => {
    props?.handleCancel();
  };
  const isEditText = isEdit ? "edit" : "";

  const uploadImageToS3 = async (image: File) => {
    try {
      const presignBody = {
        id: `${user?.id}`,
        ext: ".png",
      };
      const presignedRes = await dispatch(getS3PresignedUrl(presignBody));
      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));

      const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

      await axios.put(presignedUrl, image, {
        headers: {
          "Content-Type": "image/png", // Ensure the correct content type is set
        },
      });
      return publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };

  const handleImgFileChange = async (info: any) => {
    const file = info.file.originFileObj;
    if (file) {
      try {
        const url = await uploadImageToS3(file);
        setImageUrl(url);
        setFormData((prev: any) => ({ ...prev, uploadLogo: url }));
        setErrorData((prev) => ({ ...prev, uploadLogo: false }));
        // handleUploadSuccess(url);
        // handleModalClose();
      } catch (error) {
        setErrorData((prev) => ({ ...prev, uploadLogo: true }));
      }
    }
  };

  const [allCompanies, setAllClients] = useState<
    { id: string; name: string }[]
  >([]);

  const companyOptions = allCompanies?.map((company) => ({
    value: company.id,
    label: company.name,
  }));

  useEffect(() => {
    const getCompanies = async () => {
      const res = (await dispatch(getAllParentCompany("parent"))) as any;
      setAllClients(res?.payload?.data?.clients);
    };
    getCompanies();
  }, [dispatch]);

  const [addressData, setAddressData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    latitude: "",
    longitude: "",
  });

  const handleAddressChange = (addressObj: any) => {
    const updatedAddress: any = {
      address: addressObj?.fullAddress || addressObj?.formatted_address || "",
      city: addressObj?.city,
      state: addressObj?.state,
      zip: addressObj?.postalCode,
      latitude: parseFloat(addressObj?.latitude || 0),
      longitude: parseFloat(addressObj?.longitude || 0),
      // address1: addressObj?.address1,
      // address2: addressObj?.address2,
    };
    setAddressData(updatedAddress);
  };

  return (
    <>
      <CustomModal.Body>
        <ManageUsersStyled>
          <div
            className={`create-new-institute-sec create-new-institute-sec-${isEditText}`}
          >
            {isLoading && <Loader />}
            <div className="create-new-institute-sec-content">
              <div className="student-info-values">
                <div>
                  <br />
                  <div className="student-fields-sec-content deltape-form">
                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          {" "}
                          Company Name{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          // autoFocus
                          isInvalid={errorData?.companyName}
                          name="companyName"
                          type="text"
                          value={formData?.companyName}
                          onChange={(e) => handleChangeValue(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.companyName ? (
                            <>{errorDataValue?.companyName}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group
                        className="delta-signup-md"
                        controlId="address"
                      >
                        <Form.Label>
                          Address{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          // autoFocus
                          disabled
                          hidden
                          className="hidden "
                          isInvalid={errorData?.address}
                          name="address"
                          type="text"
                          maxLength={10}
                          value={formData?.address}
                          onChange={(e) => handleChangeValue(e)}
                        />
                        <ManageUsersStyled>
                          <AutocompleteField
                            // isInvalid
                            className={`${
                              errorData?.address
                                ? "!border !border-red-500"
                                : ""
                            }`}
                            onAddressSelected={(place: any) => {
                              if (place) {
                                const addressComponents =
                                  place.address_components;
                                let city = "";
                                let state = "";
                                let zip = "";

                                console.log(place, "addressData");

                                addressComponents?.forEach((component: any) => {
                                  const types = component.types;
                                  if (types.includes("locality")) {
                                    city = component.long_name;
                                  }
                                  if (
                                    types.includes(
                                      "administrative_area_level_1"
                                    )
                                  ) {
                                    state = component.long_name;
                                  }
                                  if (types.includes("postal_code")) {
                                    zip = component.long_name;
                                  }
                                });

                                setAddressData((prevData: any) => ({
                                  ...prevData,
                                  address: place.formatted_address,
                                  city,
                                  state,
                                  zip,
                                }));
                              }
                            }}
                            autoFocus={true}
                            name="fromAddress"
                            id="fromAddress"
                            placeholder="Type street address"
                            onChange={handleAddressChange}
                            value={addressData?.address}
                          />
                        </ManageUsersStyled>
                        <Form.Control.Feedback type="invalid">
                          {errorData?.address ? (
                            <>{errorDataValue?.address}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          City{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        {/* <Form.Control
                          // autoFocus
                          isInvalid={errorData?.city}
                          name="city"
                          type="text"
                          value={formData?.city}
                          onChange={(e) => handleChangeValue(e)}
                        /> */}
                        <Form.Control
                          type="text"
                          name="city"
                          isInvalid={errorData?.city}
                          value={addressData?.city ?? ""}
                          onChange={() => {
                            // setAddressData({
                            //   ...formData,
                            //   city: e.target.value,
                            // });
                          }}
                        />
                        {errorData?.city ? (
                          <Form.Control.Feedback type="invalid">
                            <>{errorDataValue?.city}</>
                          </Form.Control.Feedback>
                        ) : null}
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          State{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        {/* <Form.Control
                          // autoFocus
                          isInvalid={errorData?.state}
                          name="state"
                          type="text"
                          value={formData?.state}
                          onChange={(e) => handleChangeValue(e)}
                        /> */}
                        <Form.Control
                          type="text"
                          name="state"
                          isInvalid={errorData?.city}
                          value={addressData?.state ?? ""}
                          onChange={() => {
                            // setAddressData({
                            //   ...formData,
                            //   state: e.target.value,
                            // });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.state ? (
                            <>{errorDataValue?.state}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Pincode{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        {/* <Form.Control
                          // autoFocus
                          isInvalid={errorData?.pincode}
                          name="pincode"
                          type="number"
                          value={formData?.pincode}
                          onChange={(e) => handleChangeValue(e)}
                        /> */}
                        <Form.Control
                          type="text"
                          name="zip"
                          isInvalid={errorData?.pincode}
                          value={addressData?.zip ?? ""}
                          onChange={() => {
                            // setAddressData({
                            //   ...formData,
                            //   pincode: e.target.value,
                            // });
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.pincode ? (
                            <>{errorDataValue?.pincode}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Max Users{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          min={0}
                          isInvalid={errorData?.maxUsers}
                          name="maxUsers"
                          type="number"
                          value={formData?.maxUsers}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0) {
                              handleChangeValue(e);
                            }
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.maxUsers ? (
                            <>{errorDataValue?.maxUsers}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Department Per User{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          min={0}
                          isInvalid={errorData?.dependentsPerUser}
                          name="dependentsPerUser"
                          type="number"
                          value={formData?.dependentsPerUser}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0) {
                              handleChangeValue(e);
                            }
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.dependentsPerUser ? (
                            <>{errorDataValue?.dependentsPerUser}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Contarct Start Date{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          // autoFocus
                          isInvalid={errorData?.contractStartDate}
                          name="contractStartDate"
                          type="date"
                          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                            const target = e.target as HTMLInputElement & {
                              showPicker?: () => void;
                            };
                            target.showPicker?.();
                          }}
                          value={formData?.contractStartDate}
                          onChange={(e) => handleChangeValue(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.contractStartDate ? (
                            <>{errorDataValue?.contractStartDate}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Contarct End Date{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          // autoFocus
                          isInvalid={errorData?.contractEndDate}
                          name="contractEndDate"
                          type="date"
                          min={formData?.contractStartDate}
                          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                            const target = e.target as HTMLInputElement & {
                              showPicker?: () => void;
                            };
                            target.showPicker?.();
                          }}
                          value={formData?.contractEndDate}
                          onChange={(e) => handleChangeValue(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.contractEndDate ? (
                            <>{errorDataValue?.contractEndDate}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="student-info-row">
                      <Form.Group
                        className="delta-signup-md"
                        controlId="bookingKey"
                      >
                        <Form.Label>
                          Booking Key{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <Form.Control
                          // autoFocus
                          isInvalid={errorData?.booking_key}
                          name="booking_key"
                          type="text"
                          placeholder="Ex: RC"
                          value={formData?.booking_key}
                          onChange={(e) => handleChangeValue(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errorData?.booking_key ? (
                            <>{errorDataValue?.booking_key}</>
                          ) : null}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    {/* <div className="student-info-row">
                      <Form.Group
                        className="delta-signup-md"
                        controlId="parentCompany"
                      >
                        <Form.Label>
                          Parent Company{" "}
                        </Form.Label>

                        <Select
                          name="parentCompany"
                          options={[
                            { value: null, label: "No Parent" },
                            ...(companyOptions ?? []),
                          ]}
                          value={
                            companyOptions?.find(
                              (option) => option.value === formData?.parentCompany
                            ) || ""
                          }
                          onChange={(selectedOption: any) =>
                            handleChangeValue({
                              target: {
                                name: "parentCompany",
                                value: selectedOption?.value || null,
                              },
                            })
                          }
                          isDisabled={loading}
                          isSearchable // Enables search
                          placeholder="Search or select a parent company..."
                        />

  {errorData?.parentCompany && (
                          <Form.Control.Feedback
                            type="invalid"
                            style={{ display: "block" }}
                          >
                            {errorDataValue?.parentCompany}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </div> */}

                    <div className="student-info-row">
                      <Form.Group className="delta-signup-md" controlId="email">
                        <Form.Label>
                          Upload Logo{" "}
                          <span className="mand-sign-field text-red-500">
                            *
                          </span>
                        </Form.Label>
                        <br />
                        <Upload
                          accept="image/png"
                          showUploadList={false}
                          onChange={handleImgFileChange}
                        >
                          <AntdButton
                            icon={<FiUpload />}
                            className="min-w-[200px] w-full mb-3"
                          >
                            Upload Image
                          </AntdButton>
                        </Upload>
                        {imageUrl && (
                          <div className="image-preview">
                            <Image
                              width={200}
                              src={imageUrl}
                              alt="Uploaded Image"
                            />
                          </div>
                        )}

                        {errorData?.uploadLogo ? (
                          <div className="text-red-500 text-sm mt-1">
                            Logo is required
                          </div>
                        ) : null}
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {errorMessage && <p className="error_message"> {errorMessage} </p>}
          </div>
        </ManageUsersStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="actions-btn-sec align-center">
          <SecoundaryButton className="!py-2" onClick={handleCancel}>
            Cancel
          </SecoundaryButton>
          <PrimaryButton
            className="!bg-[#262b61] !py-2 text-white"
            onClick={handleSaveClick}
          >
            {userId || isEdit ? "Update User" : "Create User"}
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </>
  );
};

export default AddNewClinet;
