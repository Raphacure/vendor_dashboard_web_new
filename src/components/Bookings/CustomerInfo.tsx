import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import AutocompleteField from "@/components/Address/AddressAutoComplete/AddressAutoComplete";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateBkAddressAPI } from "@/redux/slices/bookingScreen/bookingScreenService";

const CustomerInfo = ({
  fetchBookingDetails,
  bkDetails = {},
  userWalletDetails = {},
}: any) => {
  const { id, address, user } = bkDetails || {};
  const [editAddress, setEditAddress] = useState(false);
  const dispatch = useDispatch() as any;

  const handleAddressChange = async (addressObj: any) => {
    console.log("addressObj : ", addressObj);
    const body = {
      name:
        addressObj?.name?.trim() ||
        addressObj?.address2?.trim() ||
        addressObj?.address1?.trim() ||
        "null",
      address: addressObj?.fullAddress || "null",
      latitude: addressObj?.latitude || 0,
      longitude: addressObj?.longitude || 0,
      zip: addressObj?.postalCode || "0",
      city: addressObj?.city || null,
      state: addressObj?.state || null,
      landmark: "null",
      detail: "null",
    };
    const res = (await dispatch(
      updateBkAddressAPI({
        id,
        payload: body,
      })
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
      return;
    }
    toast.success("Address Updated Successfully");
    fetchBookingDetails();
  };

  return (
    <div>
      {/* Customer Info */}
      {user && (
        <div className="order-section customer-booking-info-sec">
          <h5>Customer</h5>
          {userWalletDetails?.clientDetails?.name && (
            <div className="customer-wallet-info-sec">
              <p>
                <span> Client Name:</span>{" "}
                {userWalletDetails?.clientDetails?.name}
              </p>
              <p>
                <span> Total Client Wallet Amount:</span>{" "}
                {userWalletDetails?.totalClientWalletAmount}
              </p>
              <p>
                <span>Total Used Amount:</span>{" "}
                {userWalletDetails?.totalUsedAmount}
              </p>
              <p>
                <span>Balance Amount: </span>
                {userWalletDetails?.balanceAmount}
              </p>
            </div>
          )}
          <div>
            <strong>Bill To:</strong>
            <p>
              {user?.first_name} {user?.last_name}, {user?.phone}, {user?.email}
            </p>
            <p>Relation: {user?.relation ?? "N/A"}</p>
            <p>Age: {user?.age ?? "N/A"}</p>
            <p>Gender: {user?.gender ?? "N/A"}</p>
          </div>

          {user?.parent?.id && (
            <div>
              <strong>Parent:</strong>
              <p>
                {user?.parent?.first_name} {user?.parent?.last_name}
              </p>
              <p>{user?.parent?.email}</p>
            </div>
          )}

          {user?.client?.name && (
            <div>
              <strong>Client:</strong>
              <p>
                {user?.client?.parentClient?.name} - {user?.client?.name}
              </p>
            </div>
          )}
          <div className="d-flex flex-column" style={{ gap: "1rem" }}>
            <div>
              <strong>Address:</strong>
              {/* <FaEdit
                size={20}
                className="ml-2 cursor-pointer"
                onClick={() => setEditAddress(!editAddress)}
              /> */}
            </div>
            {/* {editAddress && (
              <AutocompleteField
                onAddressSelected={handleAddressChange}
                autoFocus={true}
                name="fromAddress"
                id="fromAddress"
                defaultValue={""}
                placeholder="Type street address"

              />
            )} */}
            <p>
              {address?.address ?? "N/A"}, {address?.city ?? "N/A"},{" "}
              {address?.zip ?? "N/A"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomerInfo;
