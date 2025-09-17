import React, { useEffect, useState, useCallback } from "react";
import { FormSectionStyled } from "./ClientDetailsOne.styled";
import { FiUploadCloud } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { toast } from "react-hot-toast";
import {
  getCityDetailsAPI,
  getClientDetailApi,
  updateClientDetailAPI,
  updateSpocDetailsAPI,
} from "../../../redux/slices/Clients/ClientsService";
import ClientAccountManager from "../ClientAccountManager";
import useUploadToS3 from "@/hooks/useUploadToS3";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import FilePreview from "@/components/custom/FilePreview/FilePreview";

const ClientDetailsOne = ({ id, setConfigValues }: any) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    logo_url: "",
    parent_id: null,
    user_max: "",
    dependent_per_user: "",
    contract_start: "",
    contract_end: "",
    booking_key: "",
    payment_terms: "",
    other_payment_terms: "",
  });

  const [image, setImage] = useState<string | null>(null);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [clientDetails, setClientDetails] = useState(null);

  const [spocErrors, setSpocErrors] = useState([
    { firstName: "", email: "", mobile: "", lastName: "" },
  ]);
  const [isValid, setIsvalid] = useState(true);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "city") {
      const filteredCities = citySuggestions.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setCitySuggestions(filteredCities);
    }
  };

  const { uploadToS3 } = useUploadToS3();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const frontUrl = await uploadToS3(file, user?.id);
        setImage(frontUrl);
        setFormData((prevData) => ({
          ...prevData,
          url: frontUrl,
        }));
        console.log("Image uploaded and URL set:", frontUrl);
      } catch (error) {
        toast.error("Error uploading image. Please try again.");
      }
    }
  };

  const removeImage = () => {
    setImage(null);
    setFormData((prevData) => ({
      ...prevData,
      url: "",
    }));
  };

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const handleSave = async () => {
    if (!formData.name) {
      toast.error("Name is required.");
      return;
    }

    if (!formData.address) {
      toast.error("Address is required.");
      return;
    }

    if (!formData.city) {
      toast.error("City is required.");
      return;
    }
    if (!formData.state) {
      toast.error("State is required.");
      return;
    }
    if (!formData.zip) {
      toast.error("Zip is required.");
      return;
    }

    const { logo_url, ...clientData }: any = formData;

    delete clientData["booking_key"];

    const formattedContractStart = formData.contract_start
      ? new Date(formData.contract_start).toISOString().split("T")[0]
      : null;
    // const formattedContractEnd = new Date(formData.contract_end)
    //   .toISOString()
    //   .split("T")[0];

    const formattedContractEnd = formData.contract_end
      ? new Date(formData.contract_end)?.toISOString().substring(0, 10)
      : null;

    const payload = {
      client: {
        ...clientData,
        city: formData?.city?.toLowerCase() ?? null,
        contract_start: formattedContractStart ?? null,
        contract_end: formattedContractEnd ?? null,
        logo_url: image ?? null,
        payment_terms: formData?.payment_terms ?? null,
        user_max: parseInt(formData?.user_max, 10) ?? 0,
        dependent_per_user: parseInt(formData?.dependent_per_user, 10) ?? 0,
      },
    };

    delete (payload.client as any)?.url;

    try {
      const res: any = await dispatch(
        updateClientDetailAPI({
          id,
          payload,
        })
      );

      if ((res as any)?.payload?.success) {
        toast.success("Client details saved successfully.");
        const clientDetailsResponse = await dispatch(getClientDetailApi(id));

        // if ((clientDetailsResponse as any)?.payload?.data) {
        //   toast.success("Client details updated successfully.");
        // } else {
        //   toast.error("Failed to fetch updated client details.");
        // }
      } else {
        toast.error(res?.error?.message || "Failed to save client details.");
      }
    } catch (error) {
      console.error("Error saving client details:", error);
      toast.error("An error occurred while saving client details.");
    }
  };

  // const uploadImageToS3 = async (image: File) => {
  //   try {
  //     const presignBody = {
  //       id: `${id}`,
  //       ext: image.name.split(".").pop(),
  //     };
  //     const presignedRes = await dispatch(getS3PresignedUrl(presignBody));
  //     const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));
  //     console.log("presignedUrlResp", presignedUrlResp);

  //     const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
  //     const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

  //     await axios.put(presignedUrl, image, {
  //       headers: {
  //         "Content-Type": image.type,
  //       },
  //     });
  //     console.log("Uploaded Image URL:", publicUrl);
  //     return publicUrl;
  //   } catch (error) {
  //     console.error("Error uploading image to S3:", error);
  //     throw error;
  //   }
  // };

  const [spocs, setSpocs] = useState([
    {
      id: 0,
      userId: 0,
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      office: "",
      designation: "",
      active: false,
      allowed_communications: [] as string[],
    },
  ]);

  useEffect(() => {
    console.log("id : ", id);
  }, [id]);

  const { parentCompanies, loading } = useSelector(
    (state: any) => state.clients
  );

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = (await dispatch(getCityDetailsAPI())) as any;
        const cities = res?.payload?.data?.cities || [];
        const options = cities.map((city: any) => ({
          value: city?.name,
          label: city?.id,
        }));

        setCityOptions(options);
      } catch (error) {
        console.error("Error fetching city details:", error);
      }
    };

    fetchCityData();
  }, [dispatch]);

  const handleCityChange = (value: any) => {
    const selectedOption = cityOptions.find((option: any) => option.value === value);
    setSelectedCity(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      city: value || "",
    }));
  };

  const addSpoc = () => {
    setSpocs([
      ...spocs,
      {
        id: 0,
        userId: 0,
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        office: "",
        designation: "",
        active: false,
        allowed_communications: [],
      },
    ]);

    setSpocErrors([
      ...spocErrors,
      { firstName: "", email: "", mobile: "", lastName: "" },
    ]);
  };

  const removeSpoc = (index: number) => {
    const updatedSpocs = spocs.filter((_, i) => i !== index);
    const updatedErrors = spocErrors.filter((_, i) => i !== index);
    setSpocs(updatedSpocs);
    setSpocErrors(updatedErrors);
  };

  function validateSpoc(spoc: any) {
    const errors: any = {};

    // First Name: required, not number, min-length 3
    const firstName = spoc.firstName?.trim() ?? "";
    if (firstName === "") {
      errors.firstName = "First name is required";
    } else if (!isNaN(firstName)) {
      errors.firstName = "First name cannot be a number";
    } else if (firstName.length < 3) {
      errors.firstName = "First name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      errors.firstName = "First name must contain only letters";
    }

    // Last Name: optional, but must not be a number if provided
    const lastName = spoc.lastName?.trim();
    if (lastName && !isNaN(lastName)) {
      errors.lastName = "Last name cannot be a number";
    }
    if (lastName && !/^[a-zA-Z\s]+$/.test(lastName)) {
      errors.lastName = "Last name must contain only letters";
    }

    // Email validation
    const email = spoc.email?.trim() ?? "";
    const isEmailValid =
      email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (email !== "" && !isEmailValid) {
      errors.email = "Invalid email";
    }

    // Mobile number validation
    const mobile = spoc.mobile?.trim() ?? "";
    if (mobile !== "" && !/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    // Either email or mobile number is required
    if (email === "" && mobile === "") {
      errors.email = "Either email or mobile number is required";
      errors.mobile = "Either email or mobile number is required";
    }

    return errors;
  }

  const updateSpoc = (index: number, field: string, value: any) => {
    const updatedSpocs = [...spocs];
    const updatedErrors = [...spocErrors];

    if (field === "allowed_communications") {
      let communications: any[] =
        updatedSpocs[index]?.allowed_communications ?? [];

      if (communications.includes(value)) {
        communications = communications.filter((ele) => ele !== value);
      } else {
        communications.push(value);
      }
      updatedSpocs[index] = {
        ...updatedSpocs[index],
        allowed_communications: communications,
      };
    } else {
      // Update the value
      updatedSpocs[index] = { ...updatedSpocs[index], [field]: value };
    }

    updatedErrors[index] = validateSpoc(updatedSpocs[index]);
    setSpocs(updatedSpocs);
    setSpocErrors(updatedErrors);
  };

  const handleUpdate = async (index: number) => {
    const currentSpoc = spocs[index];
    const validationErrors = validateSpoc(currentSpoc);

    const updatedErrors = [...spocErrors];
    updatedErrors[index] = validationErrors;
    setSpocErrors(updatedErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please correct the errors before submitting.");
      return;
    }
    const payload = {
      spoc: {
        id: spocs[index].id,
        user: {
          phone: spocs[index].mobile || null,
          first_name: spocs[index].firstName || null,
          last_name: spocs[index].lastName || null,
          active_status: spocs[index].active ? "active" : "inactive",
          secondary_phone: spocs[index].office || null,
          designation: spocs[index].designation || null,
          email: spocs[index].email || null,
          allowed_communications: spocs[index].allowed_communications,
        },
      },
    };

    try {
      const res = (await dispatch(
        updateSpocDetailsAPI({
          id,
          payload,
        })
      )) as any;

      if (res?.payload?.success) {
        toast.success("Spoc details updated successfully.");
        handleFetch();
      } else {
        toast.error(res?.error?.message ?? "Failed to update Spoc details.");
      }
    } catch (error) {
      console.error("Error updating Spoc details:", error);
      toast.error("An error occurred while updating Spoc details.");
    }
  };

  const handleFetch = useCallback(async () => {
    try {
      const res = (await dispatch(getClientDetailApi(id))) as any;

      console.log("Response: ", res?.payload?.data);

      const clientData = res?.payload?.data?.clientById;

      const date1 = Number(clientData.contract_start);
      const date2 = Number(clientData.contract_end);

      const formattedContractStart =
        isNaN(date1) || date1 === 0
          ? ""
          : new Date(date1).toISOString().split("T")[0];
      const formattedContractEnd =
        isNaN(date2) || date2 === 0
          ? ""
          : new Date(date2).toISOString().split("T")[0];

      if (clientData) {
        setClientDetails(clientData);
        setSelectedCity({ label: clientData.city, value: clientData.city });
        setFormData((prevData) => ({
          ...prevData,
          name: clientData.name,
          address: clientData.address,
          city: clientData.city,
          state: clientData.state,
          zip: clientData.zip,
          parent_id: clientData.parent_id,
          user_max:
            clientData.user_max !== null ? clientData.user_max.toString() : "",
          dependent_per_user:
            clientData.dependent_per_user !== null
              ? clientData.dependent_per_user.toString()
              : "",
          contract_start: formattedContractStart || "",
          contract_end: formattedContractEnd || "",
          logo_url: clientData.logo_url,
          booking_key: clientData.booking_key,
          payment_terms: clientData.payment_terms,
          other_payment_terms: clientData.other_payment_terms,
        }));

        setImage(clientData.logo_url);

        const spocData = clientData.spocs.map((spoc: any) => ({
          id: spoc.id,
          userId: spoc?.user?.id,
          firstName: spoc.user.first_name,
          lastName: spoc.user.last_name,
          mobile: spoc.user.phone,
          email: spoc.user.email,
          office: spoc.user.secondary_phone,
          designation: spoc.user.designation,
          active: spoc.user.active_status === "active",
          allowed_communications: spoc.user.allowed_communications,
        }));

        setSpocs(spocData);
        setConfigValues(clientData?.config_values);
      }
    } catch (error) {
      console.error("Error fetching client details:", error);
      toast.error("An error occurred while fetching client details.");
    }
  }, [dispatch, id, setConfigValues]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <FormSectionStyled>
      <div className="details-form">
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter company name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <Select
            value={selectedCity?.value}
            onChange={handleCityChange}
            options={cityOptions}
            placeholder="Enter city"
            allowClear={true}
            showSearch={true}
            style={{ width: '100%' }}
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="zip"
            placeholder="Enter pincode"
            value={formData.zip}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Max Users</label>
          <input
            type="number"
            name="user_max"
            placeholder="Enter max users"
            value={formData.user_max}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Dependents per user</label>
          <input
            type="number"
            name="dependent_per_user"
            placeholder="Enter dependents per user"
            value={formData.dependent_per_user}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Contract Start Date</label>
          <input
            type="date"
            name="contract_start"
            value={formData.contract_start ? formData.contract_start : ""}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Contract End Date</label>
          <input
            type="date"
            name="contract_end"
            value={
              formData.contract_end
                ? new Date(formData.contract_end).toISOString().substring(0, 10)
                : ""
            }
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Booking Key</label>
          <input
            type="text"
            name="booking_key"
            readOnly
            maxLength={2}
            value={formData.booking_key || ""}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="form-group">
          <label>Parent Company</label>
          <Select
            name="parent_id"
            options={[{ value: "", label: "No Parent" }, ...companyOptions]} // Add "No Parent" option
            value={
              companyOptions.find(
                (option) => option.value === formData.parent_id
              ) || null
            } // Select current value
            onChange={(selectedOption) =>
              handleInputChange({
                target: {
                  name: "parent_id",
                  value: selectedOption?.value || "",
                },
              })
            }
            isDisabled={loading}
            isSearchable // Enables search feature
            placeholder="Search or select a parent company..."
          />
        </div> */}

        <div className="form-group">
          <label>Payment Terms</label>
          <Select
            value={formData.payment_terms}
            onChange={(value: any) => handleInputChange({
              target: {
                name: "payment_terms",
                value: value || "",
              },
            })}
            disabled={loading}
            placeholder="Select Payment Term"
            style={{ width: '100%' }}
            options={[
              { value: "", label: "Select Payment Term" },
              { value: "30days", label: "30 Days" },
              { value: "40days", label: "40 Days" },
              { value: "upfront", label: "Upfront" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>

        {formData.payment_terms === "other" && (
          <div className="form-group">
            <label>Other Payment Terms</label>
            <input
              type="text"
              name="other_payment_terms"
              value={formData.other_payment_terms || ""}
              onChange={handleInputChange}
              disabled={loading}
              placeholder="Enter custom payment term"
            />
          </div>
        )}

        <div className="form-group mb-3">
          <div className="flex gap-3">
            <div className="upload-logo">
              <label>Upload Logo</label>
              <label className="upload-button">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <div className="upload-icon">
                  <FiUploadCloud size={22} />
                </div>{" "}
                Upload
              </label>
            </div>
            {image && (
              <FilePreview
                fileContainerClassName="w-10"
                url={image}
                handleRemoveFile={removeImage}
                showPreview={true}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <PrimaryButton className="!px-20 py-2" onClick={handleSave}>
          Save
        </PrimaryButton>
      </div>

      <div className="spoc-details">
        <div className="spoc-heading items-center">
          <h3 className="m-0">Client Spoc Details</h3>
          <button className="add-button" onClick={addSpoc}>
            <FaCirclePlus size={25} />
          </button>
        </div>
        {spocs?.length > 0 ? spocs.map((spoc, index) => (
          <div key={index} className="items-center w-full border-b-[1px] mb-3">
            <p className="font-bold mb-1">Spoc {index + 1}:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="form-group">
                <label>First Name</label>
                <input
                  className={`inputContainer ${
                    spoc.firstName ? "error-container" : ""
                  }`}
                  type="text"
                  placeholder="First Name"
                  value={spoc.firstName}
                  onChange={(e) =>
                    updateSpoc(index, "firstName", e.target.value)
                  }
                />
                {spocErrors[index]?.firstName && (
                  <p className="error">{spocErrors[index].firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="inputContainer"
                  type="text"
                  placeholder="Last Name"
                  value={spoc.lastName}
                  onChange={(e) =>
                    updateSpoc(index, "lastName", e.target.value)
                  }
                />
                {spocErrors[index]?.lastName && (
                  <p className="error">{spocErrors[index].lastName}</p>
                )}
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  className={`inputContainer ${
                    spoc.mobile ? "error-container" : ""
                  } !p-[5px]`}
                  type="number"
                  placeholder="Mobile Number"
                  value={spoc.mobile}
                  onChange={(e) => updateSpoc(index, "mobile", e.target.value)}
                />
                {spocErrors[index]?.mobile && (
                  <p className="error">{spocErrors[index].mobile}</p>
                )}
              </div>
              <div className="form-group">
                <label>Email ID</label>
                <input
                  className={`inputContainer ${
                    spoc.email ? "error-container" : ""
                  }`}
                  type="email"
                  placeholder="Email ID"
                  value={spoc.email}
                  onChange={(e) => updateSpoc(index, "email", e.target.value)}
                />
                {spocErrors[index]?.email && (
                  <p className="error">{spocErrors[index].email}</p>
                )}
              </div>

              <div className="form-group">
                <label>Office Number</label>
                <input
                  className="inputContainer"
                  type="tel"
                  placeholder="Office Number"
                  value={spoc.office}
                  onChange={(e) => updateSpoc(index, "office", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input
                  className="inputContainer"
                  type="text"
                  placeholder="Designation"
                  value={spoc.designation}
                  onChange={(e) =>
                    updateSpoc(index, "designation", e.target.value)
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Active</label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.active}
                  onChange={(e) =>
                    updateSpoc(index, "active", e.target.checked)
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Marketing</label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.allowed_communications?.includes("Marketing")}
                  onChange={(e) =>
                    updateSpoc(index, "allowed_communications", "Marketing")
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Invoice</label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.allowed_communications?.includes("Invoice")}
                  onChange={(e) =>
                    updateSpoc(index, "allowed_communications", "Invoice")
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Payment</label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.allowed_communications?.includes("Payment")}
                  onChange={(e) =>
                    updateSpoc(index, "allowed_communications", "Payment")
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Daily MIS </label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.allowed_communications?.includes("Daily MIS")}
                  onChange={(e) =>
                    updateSpoc(index, "allowed_communications", "Daily MIS")
                  }
                />
              </div>
              <div className="form-group !flex-row items-center gap-3">
                <label className="mb-0 w-[150px]">Monthly MIS</label>
                <input
                  className="inputContainer flex-0"
                  type="checkbox"
                  checked={spoc.allowed_communications?.includes("Monthly MIS")}
                  onChange={(e) =>
                    updateSpoc(index, "allowed_communications", "Monthly MIS")
                  }
                />
              </div>
              <div></div>
            </div>
            <div className="d-flex w-full justify-end items-center my-3 gap-2">
              {spoc?.id == 0 && (
                <SecoundaryButton onClick={() => removeSpoc(index)}>
                  <MdDelete size={21} color="red" />
                </SecoundaryButton>
              )}
              <PrimaryButton onClick={() => handleUpdate(index)}>
                Update
              </PrimaryButton>
            </div>
          </div>
        )) : <div>
            No Spoc Added
          </div>}
      </div>
      {/* <ClientAccountManager activeSpoc={spocs?.find((spoc) => spoc?.active && spoc?.userId != 0)} selectedClient={clientDetails} /> */}
    </FormSectionStyled>
  );
};

export default ClientDetailsOne;
