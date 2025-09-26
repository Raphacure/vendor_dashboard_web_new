import AddressRenderer from "@/components/Address/AddressRender/AddressRender";
import { MailIcon, MapPinIcon, PhoneIcon, UserIcon } from "lucide-react";



const BookingCustomerDetails:React.FC<{bookingDetails:any}> = ({
  bookingDetails,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <UserIcon
         className="w-5 h-5 mr-2 text-green-600" />
        Customer Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 border-b border-gray-200 pb-2">
            Personal Details
          </h4>

          {bookingDetails?.user?.first_name && (
            <div className="flex items-start">
              <span className="text-gray-600 w-24 flex-shrink-0">Name:</span>
              <span className="font-medium text-gray-900">
                {bookingDetails?.user?.first_name}{" "}
                {bookingDetails?.user?.last_name || ""}
              </span>
            </div>
          )}

          {bookingDetails?.user?.employee_id && (
            <div className="flex items-start">
              <span className="text-gray-600 w-24 flex-shrink-0">
                Employee ID:
              </span>
              <span className="font-medium text-gray-900">
                {bookingDetails?.user?.employee_id}
              </span>
            </div>
          )}

          {bookingDetails?.user?.gender && (
            <div className="flex items-start">
              <span className="text-gray-600 w-24 flex-shrink-0">Gender:</span>
              <span className="font-medium text-gray-900">
                {bookingDetails?.user?.gender}
              </span>
            </div>
          )}

          {bookingDetails?.user?.dob && (
            <div className="flex items-start">
              <span className="text-gray-600 w-24 flex-shrink-0">D.O.B:</span>
              <span className="font-medium text-gray-900">
                {bookingDetails?.user?.dob}
              </span>
            </div>
          )}

          {bookingDetails?.user?.blood_group && (
            <div className="flex items-start">
              <span className="text-gray-600 w-24 flex-shrink-0">
                Blood Group:
              </span>
              <span className="font-medium text-gray-900">
                {bookingDetails?.user?.blood_group}
              </span>
            </div>
          )}
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 border-b border-gray-200 pb-2">
            Contact Details
          </h4>

          {bookingDetails?.user?.email && (
            <div className="flex items-start">
              <MailIcon className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <span className="text-gray-600 block text-sm">Email</span>
                <span className="font-medium text-gray-900">
                  {bookingDetails?.user?.email}
                </span>
              </div>
            </div>
          )}

          {bookingDetails?.user?.phone && (
            <div className="flex items-start">
              <PhoneIcon className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <span className="text-gray-600 block text-sm">Phone</span>
                <span className="font-medium text-gray-900">
                  {bookingDetails?.user?.phone}
                </span>
              </div>
            </div>
          )}

          <div className="flex items-start">
            <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <div className="flex-1">
              <span className="text-gray-600 block text-sm mb-1">Address</span>
              <div className="bg-gray-50 rounded-lg p-3">
                <AddressRenderer addressData={bookingDetails?.address} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookingCustomerDetails;