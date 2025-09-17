export interface ClientDetails {
  name: string;
}

export interface PackageRequest {
  id: number;
  client_id: string;
  client_level_id: number;
  user_id: number;
  email: string;
  phone: string;
  name: string;
  age: number;
  emp_id: string;
  description: string;
  gender: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  client_level_coverage_id: number;
  policy_no: string | null; // can be null
  clientDetails: ClientDetails;
}

// Response `data` wrapper
export interface ClientPackagesData {
  total: string; // API is returning as string
  page: number;
  count: number;
  package_requests: PackageRequest[];
}

// Final API response
export interface GetAllClientPackagesResponse {
  data: ClientPackagesData;
  success: boolean;
  message?: string;
}