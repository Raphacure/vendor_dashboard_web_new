import { AddPatientFormStyled } from "./AddPatientForm.styled";
import { RxCross2 } from "react-icons/rx";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  getPatientDetails,
} from "../../../redux/slices/PatientDoctor/PatientService";
import { toast } from "react-hot-toast";
import AutocompleteField from "../../../components/Address/AddressAutoComplete/AddressAutoComplete";
import moment from "moment";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import {
  addNewClientEmpoyeeAPI,
  updateClientEmpoyeeAPI,
} from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

interface AddPatientFormProps {
  closeForm: () => void;
  editMode?: boolean;
  defaultData?: any;
  patientId?: any;
  reload?: () => void;
}

const AddPatientForm: React.FC<AddPatientFormProps> = ({
  closeForm,
  defaultData,
  editMode = false,
  patientId,
  reload,
}) => {

  const [selectedGender, setSelectedGender] = useState(
    defaultData?.gender
      ? defaultData.gender.charAt(0).toUpperCase() + defaultData.gender.slice(1)
      : ""
  );


  console.log("defalutData: ", defaultData);
  const dispatch = useDispatch() as any;
  const [formData, setFormData] = useState({
    first_name: defaultData?.first_name || "",
    last_name: defaultData?.last_name || "",
    email: defaultData?.email || "",
    phone: defaultData?.phone || "",
    gender: defaultData?.gender || "",
    age: defaultData?.age || "",
    address: {
      name: defaultData?.address?.name || "",
      address: defaultData?.address?.address || "",
      state: defaultData?.address?.state || "",
      city: defaultData?.address?.city || "",
      zip: defaultData?.address?.zip || "",
      latitude: defaultData?.address?.latitude || 0,
      longitude: defaultData?.address?.longitude || 0,
    },
    employee_id: defaultData?.employee_id || "",
  });


  console.log("formData : ", formData);

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
    address: "",
    phone: "",
    email: "",
  });
  const { linkableId } = useClientLinkableId();

  const validateField = (name: string, value: any) => {
    console.log("value : ", value);
    console.log("name : ", name);

    let error = "";
    switch (name) {
      case "first_name":
        if (!value?.trim()) {
          error = "First name is required";
        } else if (!isNaN(value?.trim())) {
          error = "First name should not be a number";
        }
        break;
      case "last_name":
        if (!value?.trim()) {
          error = "Last name is required";
        } else if (!isNaN(value?.trim())) {
          error = "Last name should not be a number";
        }
        break;
      case "gender":
        error = !value ? "Gender is required" : "";
        break;
      case "age":
        error = !value ? "Age is required" : "";
        break;
      case "address.address":
        error = !value?.trim() ? "Address is required" : "";
        break;
      case "phone":
        console.log("value : ", value);
        if (!value?.trim()) {
          error = "Contact number is required";
        } else if (!/^\d{10}$/.test(value.trim())) {
          error = "Please enter a valid 10-digit phone number";
        }
        break;
      case "email":
        if (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log("name : ", name);
    console.log("input value : ", value);

    const nestedName: string[] = name.split(".") ?? [];

    if (nestedName.length === 1) {
      setFormData((prev: any) => ({ ...prev, [name]: value }));
      validateField(name, value);
    } else {
      // @ts-ignore
      function helper(obj: any, keys: string[], index: number): any {
        const key = keys[index];

        if (index === keys.length - 1) {
          return { ...obj, [key]: value };
        }

        return {
          ...obj,
          [key]: helper(obj[key] ?? {}, keys, index + 1),
        };
      }

      setFormData((prev: any) => helper(prev, nestedName, 0));
      validateField(name, value);
    }

    if (name === "address.address" && value?.trim()) {
      setErrors((prev) => ({ ...prev, address: "" }));
    }
  };

  const [isValid, setIsValid] = useState(false);
  // useEffect(() => {
  const checkFormValidity = () => {
    const requiredFields = {
      first_name: formData?.first_name,
      last_name: formData?.last_name,
      gender: formData?.gender,
      age: formData?.age,
      address: formData?.address?.address,
      phone: formData?.phone,
      email: formData?.email,
    };

    let valid = true;
    Object.entries(requiredFields)?.forEach(([key, value]) => {
      validateField(key === "address" ? "address.address" : key, value);
      if (!value) valid = false;
    });

    if (!formData?.address?.address) {
      setErrors((prev) => ({ ...prev, address: "Address is required" }));
      valid = false;
    }

    setIsValid(valid);
    return valid;
  };
  // }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid = checkFormValidity();
    if (!valid) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!formData?.address?.address?.trim()) {
      setErrors((prev) => ({ ...prev, address: "Address is required" }));
      toast.error("Please fill all required fields");
      return;
    }

    try {
      let res: any = null;

      if (editMode) {
        const { address, first_name, last_name, ...body } = formData;
        const payload = {
          clientId: linkableId,
          data: {
            user:{
              ...body,
              first_name: first_name,
              last_name: last_name,
              address: address,
              id:defaultData?.id?.toString?.() ,
              employee_id: formData?.employee_id ? formData?.employee_id : null,
              dob: moment().subtract(formData?.age, 'years').format('YYYY-MM-DD'),
            }
          },
        };
        res = await dispatch(updateClientEmpoyeeAPI(payload));
      } else {
        const payload = {
          user: {
            ...formData,
            employee_id: formData?.employee_id ? formData?.employee_id : null,
            dob: moment().subtract(formData?.age, 'years').format('YYYY-MM-DD'),
          },
        };
        res = await dispatch(
          addNewClientEmpoyeeAPI({ data: payload, clientId: linkableId })
        );
      }
      if (res?.error) {
        toast.error(res?.error?.message ?? "Something went wrong");
        return;
      }
      await dispatch(getPatientDetails());
      if (reload) {
        console.log("reload");
        reload();
      }
      toast.success(`Employee ${editMode ? "edited" : "added"} successfully`);
      closeForm();
    } catch (error) {
      console.error("Error adding Employee:", error);
      toast.error("unknown error occured");
    }
  };

  const onAddressSelected = (place: any) => {
    console.log("place : ", place);
    const address = place?.formatted_address;
    const state = place?.address_components?.find((item: any) =>
      item.types.includes("administrative_area_level_1")
    )?.long_name;
    const city = place?.address_components?.find((item: any) =>
      item.types.includes("locality")
    )?.long_name;
    const pincode = place?.address_components?.find((item: any) =>
      item.types.includes("postal_code")
    )?.long_name;
    setFormData((pre: any) => ({
      ...pre,
      address: {
        ...pre.address,
        address,
        city,
        zip: pincode,
        state,
      },
    }));

    if (address?.trim()) {
      setErrors((prev) => ({ ...prev, address: "" }));
    }
  };

  return (
    <>
      <CustomModal.Body>
        <AddPatientFormStyled>
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Row className="form-row">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label className="label">First Name<b className="text-red-500">*</b></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="first_name"
                      value={formData?.first_name}
                      onChange={handleInputChange}
                      isInvalid={!!errors.first_name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.first_name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label className="label"> Last Name<b className="text-red-500">*</b></Form.Label>
                    <Form.Control
                      type="text"
                      name="last_name"
                      placeholder="Enter last name"
                      value={formData?.last_name}
                      onChange={handleInputChange}
                      isInvalid={!!errors.last_name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.last_name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="form-row">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label className="label"> Employee Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="employee_id"
                      placeholder="Enter Employee Id"
                      value={formData?.employee_id}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="gender">
                    <Form.Label className="label">Gender<b className="text-red-500">*</b></Form.Label>
                    <div className="gender-buttons">
                      <Button
                        className={selectedGender === "Male" ? "active" : ""}
                        variant={selectedGender === "Male" ? "" : ""}
                        name="gender"
                        onClick={() => {
                          setSelectedGender("Male");
                          setFormData((prev: any) => ({
                            ...prev,
                            gender: "male",
                          }));
                          validateField("gender", "male");
                        }}
                      >
                        Male
                      </Button>
                      <Button
                        className={selectedGender === "Female" ? "active" : ""}
                        variant={selectedGender === "Female" ? "" : ""}
                        name="gender"
                        onClick={() => {
                          setSelectedGender("Female");
                          setFormData((prev: any) => ({
                            ...prev,
                            gender: "female",
                          }));
                          validateField("gender", "female");
                        }}
                      >
                        Female
                      </Button>
                      <Button
                        className={selectedGender === "Other" ? "active" : ""}
                        variant={selectedGender === "Other" ? "" : ""}
                        name="gender"
                        onClick={() => {
                          setSelectedGender("Other");
                          setFormData((prev: any) => ({
                            ...prev,
                            gender: "null",
                          }));
                          validateField("gender", "null");
                        }}
                      >
                        Other
                      </Button>
                    </div>
                    {errors.gender && (
                      <div className="text-danger mt-1">{errors.gender}</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row className="form-row">
                <Col md={6}>
                  <Form.Group controlId="contact">
                    <Form.Label className="label">Contact Number<b className="text-red-500">*</b></Form.Label>
                    <Form.Control
                      type="tel"
                      maxLength={10}
                      placeholder="Enter phone number"
                      value={formData?.phone}
                      name="phone"
                      onChange={handleInputChange}
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label className="label">Email ID<b className="text-red-500">*</b></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData?.email}
                      onChange={handleInputChange}
                      isInvalid={Boolean(errors.email)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="form-row">
                {/* <Col md={6}>
                  <Form.Group controlId="dob">
                    <Form.Label className="label">Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      max={moment().format("YYYY-MM-DD")}
                      onFocus={(e: any) =>
                        e.target?.showPicker && e.target?.showPicker?.()
                      }
                      value={formData?.dob}
                      onChange={(e: any) => {
                        setFormData((prev: any) => ({
                          ...prev,
                          dob: e.target.value,
                        }));
                      }}
                    />
                  </Form.Group>
                </Col> */}
                <Col md={6}>
                  <Form.Group controlId="age">
                    <Form.Label className="label">Age<b className="text-red-500">*</b></Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter your Age"
                      value={formData?.age}
                      name="age"
                      onChange={(e: any) => {
                        if (
                          Number(e.target.value) < 120 &&
                          Number(e.target.value) >= 0
                        ) {
                          handleInputChange(e);
                        }
                      }}
                      isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.age}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Form.Group controlId="address" className=" position-relative">
                  <Form.Label className="label">Address<b className="text-red-500">*</b></Form.Label>
                  <div className="input-container">
                    <Form.Control
                      type="text"
                      className="!hidden"
                      isInvalid={!!errors.address}
                    />
                    <AutocompleteField
                      onChange={(e: any) => {
                        setFormData((prev: any) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            address: e.target.value,
                          },
                        }));
                      }}
                      className={`${errors.address ? "!border-red-500" : ""}`}
                      onAddressSelected={onAddressSelected}
                      value={formData?.address?.address}
                    />
                  </div>
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="form-row">
                <Col md={6}>
                  <Form.Group controlId="city">
                    <Form.Label className="label">City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the city name"
                      value={formData?.address?.city}
                      name="address.city"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="state">
                    <Form.Label className="label">State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the State name"
                      value={formData?.address?.state}
                      name="address.state"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="form-row">
                <Col md={6}>
                  <Form.Group controlId="pincode">
                    <Form.Label className="label">Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the Pincode/Zipcode"
                      name="address.zip"
                      value={formData?.address?.zip}
                      onChange={(e) => {
                        if (e.target.value.length <= 6) {
                          handleInputChange(e);
                        }
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </AddPatientFormStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={closeForm}>Cancel</SecoundaryButton>
          <PrimaryButton onClick={handleSubmit}>
            {editMode ? "Update" : "Save"}
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </>
  );
};

export default AddPatientForm;
