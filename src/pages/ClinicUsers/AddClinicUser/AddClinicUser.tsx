import { useEffect, useState } from "react";
import { AddClinicUserStyled } from "./AddClinicUser.styled";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Button, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { UploadFile } from "antd/es/upload/interface";
import { useDispatch } from "react-redux";
import { getS3PresignedUrl } from "@/redux/slices/Profile/ProfileService";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { countryCodes } from "@/lib/countryCodesData";
import moment from "moment";
import { addNewAdmin } from "@/redux/slices/doctor/doctorService";
import {
  getDoctorUserDetailsAPI,
  softDeleteUserAPI,
  updateAdminUserAPI,
} from "@/redux/slices/doctorUsers/doctorUsersService";
import Loader from "@/components/loader/loader/Loader";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";


const AddClinicUser = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { type } = useParams();
  const [loading, setLoading] = useState(type === "edit" ? true : false);

  const [formData, setFormData] = useState({
    name: "",
    employee_id: "",
    country_code: "91",
    phone: "",
    dob: "",
    joining_date: "",
    email: "",
    department: "",
    subRole: "",
    image: "",
  }) as any;

  //prefill user

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const result = (await dispatch(
        getDoctorUserDetailsAPI({ id: searchParams.get("userId") })
      )) as any;
      if (result?.error) {
        toast.error(result?.error?.message ?? "unknown error occured");
        return;
      }
      const user = result?.payload?.data?.user?.[0];
      console.log("user", user);
      const userDetails = {
        name: `${user?.first_name} ${user?.last_name}`,
        country_code: user?.country_code ?? "",
        phone: user?.phone,
        dob: user?.dob,
        joining_date: moment(user?.joining_date).format("YYYY-MM-DD"),
        email: user?.email,
        subRole: user?.roles?.[0]?.subRole,
        image: user?.image,
        employee_id: user?.employee_id,
      };
      console.log("userDetails", userDetails);
      setIsUserActive(user?.active_status === "active" ? true : false);
      setFormData(userDetails);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type === "edit" && searchParams.get("userId")) {
      getUserDetails();
    }
  }, [dispatch]);

  //

  const [errors, setErrors] = useState({}) as any;
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [showUploadFiles, setShowUploadFiles] = useState(false);

  //get user Roles
  const roleList = [
    // { label: "Nurse", value: "nurse" },
    // { label: "Doctor", value: "doctor" },
    // { label: "Receptionist", value: "receptionist" },
    // { label: "Pharmacist", value: "pharmacist" },
    // { label: "Lab Technician", value: "lab_technician" },
    { label: "Administrator", value: "administrator" },
    { label: "Hr", value: "hr" },
  ];

  //

  //validate
  function validateField(fieldName: string, value: any) {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value?.trim?.()) error = "Name is required.";
        else if(!isNaN(value?.trim())) error = "Name should not be a number";

        break;
      case "employee_id":
        if (!value?.trim?.()) error = "Employee ID is required.";
        break;
      case "country_code":
        if (!value?.trim?.()) error = "Country code is required.";
        break;
      case "phone": {
        const phoneRegex = /^\d{10,}$/;
        if (!value?.trim?.()) {
          error = "Phone number is required.";
        } else if (!phoneRegex.test(value)) {
          error =
            "Phone number must be at least 10 digits and contain only numbers.";
        }
        break;
      }
      case "dob":
        if (!value?.trim?.()) error = "Date of Birth is required.";
        break;
      case "joining_date":
        if (!value?.trim?.()) error = "Date of Join is required.";
        break;
      case "subRole":
        if (!value?.trim?.()) error = "Role is required.";
        break;
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value?.trim?.()) {
          error = "Email is required.";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email format.";
        }
        break;
      }
      case "image":
        if (!value?.trim?.()) error = "Image is required.";
        break;
      default:
        break;
    }

    return error;
  }

  //handle form change
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    const keys = name.split(".");
    setFormData((prev: any) => {
      let updatedFormData = { ...prev };
      let temp = updatedFormData;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!temp[keys[i]]) temp[keys[i]] = {};
        temp = temp[keys[i]];
      }

      temp[keys[keys.length - 1]] = value;

      return updatedFormData;
    });
    const error = validateField(name, value);
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateClinicForm = () => {
    const newErrors: any = {};
    let hasError = false;
    const requiredFields = [
      "name",
      "employee_id",
      "country_code",
      "phone",
      "dob",
      "joining_date",
      "subRole",
      "email",
      "image"
    ];
    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });
    setErrors(newErrors);
    return { hasError, errors: newErrors };
  };

  //on submit

  const handleSave = async () => {
    try {
      setLoading(true);
      const formDataCopy = {
        ...formData,
        role: "client_employee",
        department: "hr",
        password:"Raphacure@123"
      };
      console.log("formDataCopy", formDataCopy);

      const result = (await dispatch(addNewAdmin(formDataCopy))) as any;
      if (result?.meta?.requestStatus !== "fulfilled") {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }

      toast.success("User details saved successfully.");
      navigate("/manageUsers");
    } catch (error) {
      toast.error("unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    try {
      setLoading(true);
      const formDataCopy = {
        ...formData,
        department: "hr",
      };

      const result = (await dispatch(
        updateAdminUserAPI({
          payload: formDataCopy,
          id: searchParams.get("userId"),
        })
      )) as any;
      if (result?.meta?.requestStatus !== "fulfilled") {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }

      toast.success("User details Edited successfully.", {
        style: {
          fontSize: "30px",
          padding: "20px",
        },
        position: "top-center",
      });
      navigate("/manageUsers");
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    const { hasError, errors } = validateClinicForm();
    if (hasError) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (type === "new") {
      handleSave();
    } else if (type === "edit") {
      handleEdit();
    }
  };

  //handle file upload

  const uploadImageToS3 = async (image: any) => {
    console.log("image", image);
    try {
      const presignBody = {
        id: `${image?.uid}`,
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
      console.log("Uploaded Image URL:", publicUrl);
      return publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };

  const handleFileUpload = async (file: UploadFile) => {
    if (file) {
      try {
        const publicUrl = await uploadImageToS3(file);
        toast.success("image successfully uploaded");
        setFormData((pre: any) => {
          return {
            ...pre,
            image: publicUrl,
          };
        });
        if(publicUrl){
          setErrors((pre: any) => {
            return { ...pre, image: "" };
          });
        }
        setFileList([file]);
      } catch (error) {
        toast.error("Error uploading front image. Please try again.");
      }
    }
    return false;
  };

  const renderFilePreview = (url: string, className?: string) => {
    return <img src={url} alt="preview" className={className} />;
  };

  //

  // user status

  const [isUserActive, setIsUserActive] = useState(false);

  const handleUserStatus = async (status:boolean) => {
    if (searchParams.get("userId")) {
      try {
        setLoading(true);
        const result = await dispatch(
          softDeleteUserAPI({
            id: searchParams.get("userId"),
            payload:{
              status:status?"active":"inactive"
            }
          })
        );
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error");
          return;
        }
        toast.success("User InActive");
        setIsUserActive(status);
      } catch (error) {
        toast.error("unknown error");
      } finally {
        setLoading(false);
      }
    }
  };

  //

  console.log("formData", formData);
  console.log("errors", errors);

  return (
    <AddClinicUserStyled>
      {loading && <Loader />}
      <h2 className="clinic-heading">Manage Users</h2>
      <CommonBreadCrumbs
        items={[
          { name: "Manage User", link: "/manageUsers" },
          {
            name: `${
              type === "new" ? "Add" : type === "edit" ? "Edit" : ""
            } User`,
          },
        ]}
      />
      <div className="my-3  flex justify-between items-center">
        <h6 className="m-0">{type === "edit" ? "Edit" : "Add"} User Details</h6>
        {type === "edit" && (
          <div className="p-2 bg-[#edf8f3] rounded-2">
            <Switch
              value={isUserActive}
              onChange={handleUserStatus}
            />{" "}
            User {isUserActive ? "Active" : "InActive"}
          </div>
        )}
      </div>
      <div>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicClinicName">
              <Form.Label>
                Name<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData?.name}
                placeholder="Enter User Name"
                onChange={handleFormChange}
                isInvalid={Boolean(errors?.name)}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicClinicName">
              <Form.Label>
                Employee Id<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="employee_id"
                value={formData?.employee_id}
                placeholder="Enter Employee Id"
                onChange={handleFormChange}
                isInvalid={Boolean(errors?.employee_id)}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.employee_id}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicAlternateContact">
              <Form.Label className="truncate w-[100%] !mb-[.3rem]">
                Contact number<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <InputGroup hasValidation>
                {/* <Form.Select
                  className="!grow-[.3]"
                  value={formData?.country_code}
                  name="country_code"
                  onChange={handleFormChange}
                  isInvalid={errors?.country_code}
                >
                  <option value="">
                    country code
                  </option>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      +{country.code} ( {country.flag} )
                    </option>
                  ))}
                </Form.Select> */}
                <Form.Control
                  name="phone"
                  maxLength={10}
                  type="number"
                  onChange={(e) => {
                    if (e.target.value.length <= 10) {
                      handleFormChange(e);
                    }
                  }}
                  value={formData?.phone}
                  placeholder="Enter contact number"
                  isInvalid={Boolean(errors?.phone)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.country_code} {errors?.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Date of Birth<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Control
                name="dob"
                type="date"
                onChange={handleFormChange}
                onClick={(e: any) => {
                  e.currentTarget?.showPicker?.();
                }}
                value={formData?.dob}
                max={moment().format("YYYY-MM-DD")}
                isInvalid={Boolean(errors?.dob)}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.dob}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Date of Join<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Control
                name="joining_date"
                type="date"
                onChange={handleFormChange}
                onClick={(e: any) => {
                  e.currentTarget?.showPicker?.();
                }}
                value={formData?.joining_date}
                isInvalid={Boolean(errors?.joining_date)}
                max={moment().format("YYYY-MM-DD")}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.joining_date}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>
                Email<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Control
                name="email"
                onChange={handleFormChange}
                value={formData?.email}
                type="text"
                placeholder="Email address"
                isInvalid={Boolean(errors?.email)}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicPincode">
              <Form.Label>
                Role<b className="text-red-500 text-[14px]"> *</b>
              </Form.Label>
              <Form.Select
                name="subRole"
                onChange={handleFormChange}
                value={formData?.subRole}
                aria-label="Role"
                isInvalid={Boolean(errors?.subRole)}
              >
                <option value="" disabled>
                  Select Role
                </option>
                {roleList?.map?.((role) => {
                  return (
                    <option key={role?.value} value={role?.value}>
                      {role?.label}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors?.subRole}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            <Form.Label className="truncate w-[100%]">
              Upload Profile{<b className="text-red-500 text-[14px]"> *</b>}
            </Form.Label>
            <div className={`${errors?.image ? "!border-red-500" : ""} border-1 rounded-[8px]`}>
              <Upload
                accept="image/*"
                maxCount={1}
                name="registration_certificate"
                className={`block `}
                beforeUpload={handleFileUpload}
                fileList={fileList}
                showUploadList={false}
                onRemove={() => setFileList([])}
              >
                <div className="flex gap-2 border justify-between rounded">
                  <div className="grow truncate w-[100%]  flex items-center">
                    {fileList?.[0]?.name ?? "Profile Photo"}
                  </div>
                  <Button className="upload-btn" icon={<UploadOutlined />}>
                    Upload
                  </Button>
                </div>
              </Upload>
            </div>
            {errors?.image && <p className="text-[var(--bs-form-invalid-color)] text-[.875em]">{errors?.image}</p>}
            <CustomModal
              open={showUploadFiles && formData?.image}
              handleClose={() => setShowUploadFiles(false)}
              title="Uploaded File"
            >
              <CustomModal.Body>
                <div className="file-preview mt-[10px] text-center">
                  {renderFilePreview(formData?.image, "h-32 w-32")}
                </div>
              </CustomModal.Body>
            </CustomModal>
          </Col>
          {formData?.image && (
            <Col md={3}>
              <Form.Label className="truncate w-[100%] !mb-[11px]">Preview</Form.Label>
              <Button onClick={() => setShowUploadFiles(true)}>
                show Preview
              </Button>
            </Col>
          )}
        </Row>

        <div className="flex justify-end">
          <div className="flex gap-2">
            <SecoundaryButton
              type="button"
              onClick={() => navigate("/manageUsers")}
              className="form-btns"
            >
              cancel
            </SecoundaryButton>
            <PrimaryButton
              type="button"
              className="form-btns"
              onClick={() => onSubmit()}
            >
              save
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AddClinicUserStyled>
  );
};

export default AddClinicUser;
