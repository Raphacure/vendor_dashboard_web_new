export interface ClientDocumentFile {
  id: number;
  title: string;
  url: string;
  file_uploaded: boolean;
  ext: string;
  uploaded_by: string;
  client_id: string;
  vendor_id: string | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
  type: string;
  other_type_text: string | null;
}

export interface AgreedService {
  to: string;
  name: string;
}

export interface AgreedServices {
  about_us: string;
  hide_opd: boolean;
  services: AgreedService[];
  allow_sso: boolean;
  hide_city: boolean;
  booking_extra: any[]; // Adjust if known
  package_details: any[]; // Adjust if known
  book_appointment: any; // Adjust if known
  allow_retail_login: boolean;
}

export interface ClientData {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  city: string;
  state: string;
  zip: number;
  logo_url: string;
  parent_id: string | null;
  type: string;
  user_max: number;
  dependent_per_user: number | null;
  booking_key: string;
  status: string;
  mapping_id: string | null;
  old_users_data: any; // Adjust if structure is known
  created_at: string;
  updated_at: string;
  opd_restricted: boolean;
  subdomain_key: string;
  agreed_services: AgreedServices;
  user_count: number;
  contract_start: string;
  contract_end: string;
  block_retail: boolean;
  allowed_email_domains: string[] | null;
  payment_terms: string | null;
  other_payment_terms: string | null;
  background_color: string;
  text_color: string;
  created_by: string | null;
  marketplace_name: string;
  config_values: any; // Adjust if known
  client_level_id: string | null;
  client_invoice_id: string | null;
  service_types: any; // Adjust if known
  scope_of_work: any; // Adjust if known
  client_user_count: string;
  parentClient: any; // Adjust if known
  documentFiles: ClientDocumentFile[];
}
