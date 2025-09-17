import React, { memo, useCallback, useMemo } from "react";
import { UserDetails, ValidationErrors } from "../CreateOrder";
import { Input, Select } from "antd";
import dayjs from "dayjs";

interface NewPatientFormProps {
  formData: UserDetails;
  setFormData: React.Dispatch<React.SetStateAction<UserDetails>>;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

// Extract gender options to prevent recreation on each render
const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const NewPatient: React.FC<NewPatientFormProps> = memo(
  ({ formData, setFormData, validationErrors, setValidationErrors }) => {
    // Memoize the user data to prevent unnecessary re-renders
    const userData = formData.users?.[0]?.user;

    const validateField = (
      fieldName: string,
      value: any
    ): string | undefined => {
      switch (fieldName) {
        case "firstName":
          return value?.trim() ? undefined : "First name is required.";
        case "lastName":
          return value?.trim() ? undefined : "Last name is required.";
        case "phone":
          if (!value) return "Phone number is required.";
          if (!/^\d{10}$/.test(value)) return "Phone number must be 10 digits.";
          return undefined;
        case "email":
          if (!value) return "Email is required.";
          if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format.";
          return undefined;
        case "age": {
          if (!value) return "Age is required.";
          const ageNum = Number(value);
          if (isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
            return "Please enter a valid age.";
          }
          return undefined;
        }
        case "gender":
          return value ? undefined : "Gender is required.";
        default:
          return undefined;
      }
    };

    const handleFieldChange = (fieldName: string, value: any) => {
      const updates: any = { [fieldName]: value };

      if (fieldName === "age" && value) {
        const currentDate = dayjs();
        const dob = currentDate.subtract(Number(value), "year");
        updates.dob = dob.format("YYYY-MM-DD");
      }

      setFormData((pre) => {
        const user0 = pre?.users?.[0] || { user: {},address:{} };

        return {
          ...pre,
          users: [
            {
              ...user0,
              user: {
                ...user0.user,
                ...updates,
              },
            },
          ],
        };
      });

      const error = validateField(fieldName, value);
      setValidationErrors((prev: any) => {
        const updatedUser = { ...(prev.user || {}) };
        if (error) {
          updatedUser[fieldName] = error;
        } else {
          delete updatedUser[fieldName];
        }
        return {
          ...prev,
          user: updatedUser,
        };
      });
    };

    // Direct field value references
    const firstName = userData?.firstName || "";
    const lastName = userData?.lastName || "";
    const phone = userData?.phone || "";
    const email = userData?.email || "";
    const age = userData?.age || "";
    const gender = userData?.gender || "";
    const employeeid = userData?.employeeid || "";

    // Direct validation error references
    const firstNameError = validationErrors.user?.firstName;
    const lastNameError = validationErrors.user?.lastName;
    const phoneError = validationErrors.user?.phone;
    const emailError = validationErrors.user?.email;
    const ageError = validationErrors.user?.age;
    const genderError = validationErrors.user?.gender;
    const employeeidError = validationErrors.user?.employeeid;

    return (
      <div className="patientTypeContainer grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-field">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <Input
            size="large"
            status={firstNameError ? "error" : ""}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => handleFieldChange("firstName", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {firstNameError && (
            <p className="text-red-500 mt-1">{firstNameError}</p>
          )}
        </div>

        <div className="form-field">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input
            size="large"
            status={lastNameError ? "error" : ""}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => handleFieldChange("lastName", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {lastNameError && (
            <p className="text-red-500 mt-1">{lastNameError}</p>
          )}
        </div>

        <div className="form-field">
          <label
            htmlFor="employeeid"
            className="block text-sm font-medium text-gray-700"
          >
            Employee Id
          </label>
          <Input
            size="large"
            status={employeeidError ? "error" : ""}
            id="employeeid"
            name="employeeid"
            type="text"
            placeholder="Enter Employeeid"
            value={employeeid}
            onChange={(e) => handleFieldChange("employeeid", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {employeeidError && (
            <p className="text-red-500 mt-1">{employeeidError}</p>
          )}
        </div>

        <div className="form-field">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <Input
            size="large"
            status={phoneError ? "error" : ""}
            id="number"
            name="phone"
            type="text"
            placeholder="Enter Employee Phone Number"
            value={phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            maxLength={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {phoneError && <p className="text-red-500 mt-1">{phoneError}</p>}
        </div>

        <div className="form-field">
          <label
            htmlFor="emailId"
            className="block text-sm font-medium text-gray-700"
          >
            Email Id
          </label>
          <Input
            size="large"
            status={emailError ? "error" : ""}
            id="emailId"
            name="email"
            type="email"
            placeholder="Enter Employee Email Id"
            value={email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>

        <div className="form-field">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <Input
            size="large"
            status={ageError ? "error" : ""}
            id="age"
            name="age"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => handleFieldChange("age", e.target.value)}
            min={0}
            max={120}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {ageError && <p className="text-red-500 mt-1">{ageError}</p>}
        </div>

        <div className="form-field">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <Select
            size="large"
            status={genderError ? "error" : ""}
            id="gender"
            placeholder="Select Gender"
            value={gender}
            onChange={(value) => handleFieldChange("gender", value)}
            className="mt-1 block w-full rounded-md shadow-sm sm:text-sm"
            options={GENDER_OPTIONS}
          />
          {genderError && <p className="text-red-500 mt-1">{genderError}</p>}
        </div>
      </div>
    );
  }
);

NewPatient.displayName = "NewPatient";

export default NewPatient;
