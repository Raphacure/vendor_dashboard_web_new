import React from "react";

type AddressRendererProps = {
  addressData: {
    address: string;
    city: string;
    state: string;
    zip: number;
    latitude: number;
    longitude: number;
  };
};

const AddressRenderer: React.FC<AddressRendererProps> = ({ addressData }) => {
  return (
    <div className="inline-block">
        {
            addressData?.latitude || addressData?.longitude ? (
                <p>{addressData?.address ?? ""}</p>
            ):<p>{`${addressData?.address ?? ""},${addressData?.city ?? ""},${addressData?.state ?? ""},${addressData?.zip ?? ""}`}</p>
        }
    </div>
  )
};

export default AddressRenderer;
