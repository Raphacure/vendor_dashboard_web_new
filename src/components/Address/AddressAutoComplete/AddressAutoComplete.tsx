import Autocomplete from "react-google-autocomplete";
import { CSSProperties, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MAP_KEY } from "@/lib/config";
import toast from "react-hot-toast";
import CustomSpinLoader from "../../loader/SpinLoader/CustomSpinLoader";

export interface AutocompleteFieldProps {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  onAddressSelected: (place: google.maps.places.PlaceResult) => void;
  value?: string;
  autocomplete?:"on" | "off";

}

const AutocompleteField: React.FC<AutocompleteFieldProps> = (props) => {

  const [locationLoading, setLocationLoading] = useState(false);

  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {

    if (place) {
      props.onAddressSelected(place);

    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
    
    // If input is cleared, notify parent component
    if (e.target.value === "") {
      props.onAddressSelected({});
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation && !locationLoading) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLocationLoading(true);
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${MAP_KEY}`
          );
          const data = await response.json();
          if (data.results && data.results[0]) {
            handlePlaceSelected(data.results[0])
          }
        } catch (error) {
          toast.error("Failed to fetch location details.");
        } finally {
          setLocationLoading(false);
        }
      });
    }
  };

  return (
    <CustomSpinLoader spinning={locationLoading}>

    <div className="relative">
      <Autocomplete
        apiKey="AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s"
        id={props.id ?? "address1"}
        onPlaceSelected={handlePlaceSelected}
        componentRestrictions={{ country: "in" }}
        options={{
          types: ["geocode", "establishment"],
          componentRestrictions: { country: "in" },
        }}
        value={props.value}
        autocomplete="off"
        name={props.name}
        className={`${props.className ? `${props.className} input` : "input"} !pr-10`}
        placeholder={props.placeholder ? props.placeholder : "Enter Address Line 1"}
        defaultValue={props.defaultValue}
        onChange={handleInputChange}
        disabled={props.disabled || locationLoading}
        autoFocus={props.autoFocus}
        maxLength={props.maxLength}
        onBlur={handleBlur}
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "4px",
          padding: "8px",
          width: "100%",
          boxSizing: "border-box",
        } as CSSProperties}
      />
      <BiCurrentLocation
        className="absolute right-2.5 top-1/2 w-[30px] h-[30px] -translate-y-1/2 text-black cursor-pointer bg-[#cce8db] p-[5px] rounded"
        onClick={handleCurrentLocationClick}
      />
    </div>
    </CustomSpinLoader>
  );
};

export default AutocompleteField;
