import React, { useState } from "react";
import {
  MapPin,
  User,
  Phone,
  TestTube,
  Activity,
  Pill,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Star,
  CheckCircle,
  CreditCard,
  Video,
  MessageCircle,
  Stethoscope,
  Building2,
  Shield,
} from "lucide-react";
import ItemInfoV2 from "../ItemInfo";
import { ConsultType } from "../CreateOrder";


interface ConsultationData {
  consultType: "instant" | "call" | "chat" | "video" | "second_opinion" | "opd";
  selectedDoctor: any;
  selectedTimeSlot: string | null;
  selectedDate: string | null;
  selectedSpecialization: any;
  selectedVendor: any;
}

interface TestsData {
  selectedTest: any;
  selectedVendor: any;
  selectedTimeSlot: string | null;
  selectedDate: string | null;
}

interface PharmacyData {
  [key: string]: any;
}

interface FormData {
  consultation: ConsultationData;
  tests: TestsData;
  pharmacy: PharmacyData;
}

interface UserDetails {
  user?: any;
  paymentMethod?: {
    payment_method: string;
    payment_type: string;
  };
  address?: {
    fullAddress: string;
    detail?: string | null;
    city: string;
    latitude?: number;
    longitude?: number;
    state: string;
    zip: string;
  };
}

const OrderDetails: React.FC<{
  userDetails: UserDetails;
  formData: FormData;
  consultType: ConsultType;
}> = ({ userDetails, formData, consultType }) => {
  // Helper function to calculate total price
  const calculateTotal = () => {
    switch (consultType) {
      case "virtual":
        return formData.consultation.selectedDoctor?.fee || 0;
      case "labtest":
      case "labpackage":
      case "radiology":
        if (Array.isArray(formData.tests.selectedTest)) {
          return formData.tests.selectedTest.reduce(
            (total: number, test: any) => total + (test.price || 0),
            0
          );
        }
        return formData.tests.selectedTest?.price || 0;
      case "pharmacy":
        return formData.pharmacy.totalAmount || 0;
      default:
        return 0;
    }
  };

  const getConsultTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "call":
        return <Phone className="w-4 h-4" />;
      case "chat":
        return <MessageCircle className="w-4 h-4" />;
      case "opd":
        return <Building2 className="w-4 h-4" />;
      case "second_opinion":
        return <Shield className="w-4 h-4" />;
      default:
        return <Stethoscope className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const renderConsultationDetails = () => (
    <div className="space-y-4">
      {/* Doctor Info */}
      {formData.consultation.selectedDoctor && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-semibold text-gray-900">
                {formData.consultation.selectedDoctor.name}
              </h4>
              <p className="text-sm text-gray-600">
                {formData.consultation.selectedDoctor.specialization ||
                  formData.consultation.selectedSpecialization?.name}
              </p>
              {formData.consultation.selectedDoctor.rating && (
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {formData.consultation.selectedDoctor.rating}
                    {formData.consultation.selectedDoctor.experience &&
                      ` • ${formData.consultation.selectedDoctor.experience}`}
                  </span>
                </div>
              )}
            </div>
            <div className="text-right">
              <p className="font-semibold text-lg text-blue-600">
                ₹
                {formData.consultation.selectedDoctor.fee ||
                  formData.consultation.selectedDoctor.price ||
                  0}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm bg-white p-2 rounded">
            <div className="flex items-center">
              {getConsultTypeIcon(formData.consultation.consultType)}
              <span className="ml-2 capitalize">
                {formData.consultation.consultType === "opd"
                  ? "OPD Visit"
                  : formData.consultation.consultType === "second_opinion"
                  ? "Second Opinion"
                  : `${formData.consultation.consultType} Consultation`}
              </span>
            </div>
          </div>

          {/* Vendor info for OPD */}
          {formData.consultation.consultType === "opd" &&
            formData.consultation.selectedVendor && (
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Building2 className="w-4 h-4 mr-1" />
                <span>{formData.consultation.selectedVendor.name}</span>
              </div>
            )}
        </div>
      )}

      {/* Appointment Details */}
      {(formData.consultation.selectedDate ||
        formData.consultation.selectedTimeSlot) && (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="ml-2 text-sm text-gray-700">
              {formData.consultation.selectedDate &&
                formatDate(formData.consultation.selectedDate)}
            </span>
          </div>
          {formData.consultation.selectedTimeSlot && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="ml-2 text-sm text-gray-700">
                {formData.consultation.selectedTimeSlot}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderTestDetails = () => {
    // Ensure selectedTest is always an array and handle the object with specific keys
    const selectedTests = Array.isArray(formData.tests.selectedTest)
      ? formData.tests.selectedTest
      : formData.tests.selectedTest
      ? [formData.tests.selectedTest]
      : [];

    return (
      <div className="space-y-4">
        {/* Tests/Package Info */}

        {Array.isArray(selectedTests) && (
          <ItemInfoV2 consultType={consultType} selectedItems={selectedTests} />
        )}

        {/* Test Schedule */}
        {(formData.tests.selectedDate || formData.tests.selectedTimeSlot) && (
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="ml-2 text-sm text-gray-700">
                {formData.tests.selectedDate &&
                  formatDate(formData.tests.selectedDate)}
              </span>
            </div>
            {formData.tests.selectedTimeSlot && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="ml-2 text-sm text-gray-700">
                  {formData.tests.selectedTimeSlot}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderPharmacyDetails = () => (
    <div className="space-y-4">
      {formData.pharmacy && Object.keys(formData.pharmacy).length > 0 && (
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Pill className="w-4 h-4 mr-2" />
            Medicines
          </h4>

          {/* If medicines array exists */}
          {formData.pharmacy.medicines &&
            Array.isArray(formData.pharmacy.medicines) && (
              <div className="space-y-2">
                {formData.pharmacy.medicines.map(
                  (medicine: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-white rounded"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {medicine.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          Qty: {medicine.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-purple-600">
                        ₹{medicine.price}
                      </p>
                    </div>
                  )
                )}
              </div>
            )}

          {/* If it's a different pharmacy data structure */}
          {!formData.pharmacy.medicines && (
            <div className="space-y-2">
              {Object.entries(formData.pharmacy).map(
                ([key, value]: [string, any], index: number) => {
                  if (key === "totalAmount") return null;
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-white rounded"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {value?.name || key}
                        </p>
                        {value?.quantity && (
                          <p className="text-xs text-gray-600">
                            Qty: {value.quantity}
                          </p>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-purple-600">
                        ₹{value?.price || value?.total || 0}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          )}

          <div className="border-t mt-3 pt-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-semibold text-lg text-purple-600">
                ₹{formData.pharmacy.totalAmount || calculateTotal()}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white shadow-md rounded-[8px] mt-3">
      <div className="!p-6 space-y-6">
        {/* Header */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Order Summary
          </h3>
          <div className="flex items-center">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="ml-2 text-sm text-gray-600 capitalize">
              {consultType} Service
            </span>
          </div>
        </div>

        {/* Service Details */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Service Details</h4>
          {consultType === "virtual" && renderConsultationDetails()}
          {(consultType === "labtest" ||
            consultType === "labpackage" ||
            consultType === "radiology") &&
            renderTestDetails()}
          {consultType === "pharmacy" && renderPharmacyDetails()}
        </div>

        {/* User Details */}
        {userDetails.user && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Patient Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-4 h-4 text-gray-500" />
                <span className="ml-2 text-sm text-gray-700">
                  {userDetails.user.name}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="ml-2 text-sm text-gray-700">
                  {userDetails.user.phone}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Address */}
        {userDetails.address && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Address</h4>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 text-gray-500 mt-1" />
              <div className="ml-2 text-sm text-gray-700">
                <p>{userDetails.address.fullAddress}</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Method */}
        {userDetails.paymentMethod && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Payment Method</h4>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <CreditCard className="w-4 h-4 text-gray-500" />
              <span className="ml-2 text-sm text-gray-700">
                {userDetails.paymentMethod.payment_method}
              </span>
            </div>
          </div>
        )}

        {/* Total Amount */}
        {calculateTotal() > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">
                Total Amount
              </span>
              <span className="text-xl font-bold text-blue-600">
                ₹{calculateTotal()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
