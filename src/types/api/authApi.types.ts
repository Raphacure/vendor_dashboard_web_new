type Role = {
  id: number;
  user_id: string;
  role: string;
  linkable_id: string;
  linkable_type: string;
  created_at: string;
  services: any; // adjust if structure is known
  subRole: string | null;
  created_by: string | null;
  client_level_id: string | null;
  client_branch_id: string | null;
  client_level_coverage_id: string | null;
  status: string;
  client: any; // adjust if structure is known
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  secondary_email: string | null;
  country_code: string | null;
  phone: string;
  secondary_phone: string;
  gender: string | null;
  employee_id: string | null;
  corp_email_id: string | null;
  dob: string | null;
  blood_group: string | null;
  relation: string;
  head_id: number | null;
  active_status: string;
  patient_id: number | null;
  created_at: string;
  updated_at: string;
  age: number | null;
  designation: string;
  image: string | null;
  last_period_date: string | null;
  average_period_cycle: string | null;
  bmi: string | null;
  first_login_completed: boolean;
  isRaphaplus: boolean;
  joining_date: string | null;
  department: string | null;
  aadhar_front: string | null;
  aadhar_back: string | null;
  pan: string | null;
  source: string | null;
  marketplace_name: string;
  parent_doctor_id: number | null;
  hypersite_name: string | null;
  ref_url: string | null;
  allowed_communications: any; // adjust if structure is known
  parent_client_id: number | null;
  floor: string | null;
  tl_name: string | null;
  tl_phone: string | null;
  linked_client_id: number | null;
  height: string | null;
  weight: string | null;
  bp: string | null;
  abha_number: string | null;
  roles: Role[];
  accessToken: string;
  refreshToken: string;
};

export type LoginResponseApi = {
    data?: User,
    success: boolean,
    message?: string,
} 