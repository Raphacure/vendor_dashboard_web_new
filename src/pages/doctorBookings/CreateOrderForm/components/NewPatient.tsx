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

const NewPatient: React.FC<NewPatientFormProps> = memo(({
  formData,
  setFormData,
  validationErrors,
  setValidationErrors
}) => {
  // Memoize the user data to prevent unnecessary re-renders
  const userData = useMemo(() => formData.user || {}, [formData.user]);

  // Create individual handlers for each field to prevent recreation
  const handleFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, firstName: value }
    }));
    
    if (value && validationErrors.user?.firstName) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, firstName: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.firstName]);

  const handleLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, lastName: value }
    }));
    
    if (value && validationErrors.user?.lastName) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, lastName: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.lastName]);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, phone: value }
    }));
    
    if (value && validationErrors.user?.phone) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, phone: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.phone]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, email: value }
    }));
    
    if (value && validationErrors.user?.email) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, email: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.email]);

  const handleAgeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updates: any = { age: value };
    
    // Calculate DOB if age is provided
    if (value) {
      const currentDate = dayjs();
      const dob = currentDate.subtract(Number(value), 'year');
      updates.dob = dob.format('YYYY-MM-DD');
    }
    
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, ...updates }
    }));
    
    if (value && validationErrors.user?.age) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, age: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.age]);

  const handleGenderChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, gender: value }
    }));
    
    if (value && validationErrors.user?.gender) {
      setValidationErrors(prev => ({
        ...prev,
        user: { ...prev.user, gender: undefined }
      }));
    }
  }, [setFormData, setValidationErrors, validationErrors.user?.gender]);

  // Memoize field values
  const firstName = useMemo(() => userData.firstName || "", [userData.firstName]);
  const lastName = useMemo(() => userData.lastName || "", [userData.lastName]);
  const phone = useMemo(() => userData.phone || "", [userData.phone]);
  const email = useMemo(() => userData.email || "", [userData.email]);
  const age = useMemo(() => userData.age || "", [userData.age]);
  const gender = useMemo(() => userData.gender || "", [userData.gender]);

  // Memoize validation states
  const firstNameError = useMemo(() => validationErrors.user?.firstName, [validationErrors.user?.firstName]);
  const lastNameError = useMemo(() => validationErrors.user?.lastName, [validationErrors.user?.lastName]);
  const phoneError = useMemo(() => validationErrors.user?.phone, [validationErrors.user?.phone]);
  const emailError = useMemo(() => validationErrors.user?.email, [validationErrors.user?.email]);
  const ageError = useMemo(() => validationErrors.user?.age, [validationErrors.user?.age]);
  const genderError = useMemo(() => validationErrors.user?.gender, [validationErrors.user?.gender]);

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
          onChange={handleFirstNameChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {firstNameError && (
          <p className="text-red-500 mt-1">
            {firstNameError}
          </p>
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
          onChange={handleLastNameChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {lastNameError && (
          <p className="text-red-500 mt-1">{lastNameError}</p>
        )}
      </div>

      <div className="form-field">
        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700"
        >
          Number
        </label>
        <Input
          size="large"
          status={phoneError ? "error" : ""}
          id="number"
          name="phone"
          type="text"
          placeholder="Enter Employee Phone Number"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {phoneError && (
          <p className="text-red-500 mt-1">{phoneError}</p>
        )}
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
          onChange={handleEmailChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {emailError && (
          <p className="text-red-500 mt-1">{emailError}</p>
        )}
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
          onChange={handleAgeChange}
          min={0}
          max={120}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {ageError && (
          <p className="text-red-500 mt-1">{ageError}</p>
        )}
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
          onChange={handleGenderChange}
          className="mt-1 block w-full rounded-md shadow-sm sm:text-sm"
          options={GENDER_OPTIONS}
        />
        {genderError && (
          <p className="text-red-500 mt-1">{genderError}</p>
        )}
      </div>
    </div>
  );
});

NewPatient.displayName = 'NewPatient';

export default NewPatient;