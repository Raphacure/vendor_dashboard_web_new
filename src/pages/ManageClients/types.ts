export type clientsFormDataDto = {
  companyName: string | undefined;
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  pincode: string | undefined;
  maxUsers: string | undefined;
  dependentsPerUser: string | undefined;
  contractStartDate: string | undefined;
  contractEndDate: string | undefined;
  parentCompany: string | undefined;
  uploadLogo: string | undefined;
  booking_key: string | undefined;
};

export type clientsFormDatakeysDto =
  | "companyName"
  | "address"
  | "city"
  | "state"
  | "pincode"
  | "maxUsers"
  | "dependentsPerUser"
  | "contractStartDate"
  | "contractEndDate"
  | "parentCompany"
  | "uploadLogo";

export type clientErrorDto = {
  companyName: boolean;
  address: boolean;
  city: boolean;
  state: boolean;
  pincode: boolean;
  maxUsers: boolean;
  dependentsPerUser: boolean;
  contractStartDate: boolean;
  contractEndDate: boolean;
  booking_key: boolean;
  uploadLogo: boolean;
};

export type clientFormPropDto = {
  onSuccess: () => void;
  handleCancel: () => void;
  selectedUser: Record<string, any> | null; // Allow null for new client
  isEdit?: boolean; // Make isEdit optional
  addUserSuccess?: () => void; 
  getAllUsersCall?: () => void;
  dynamicClassName?: string;
};
