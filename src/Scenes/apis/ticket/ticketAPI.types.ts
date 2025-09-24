export type getAllTicketsBody = {
  filters: {
    channel?: string;
    status?: string;
    search_text?: string;
    page?: number;
    count?: number;
    from?: string;
  };
};

export type Ticket = {
  id: number;
  booking_id: number | null;
  interaction_id: number | null;
  subject: string;
  mail_arrived_date: string | null;
  created_by: number;
  updated_by: number | null;
  assigned_to: number | null;
  priority: string | null;
  type: string | null;
  channel: string | null;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  from: string | null;
  to: string | null;
  source_id: string | null;
  parent_client_id: string;
};

export type TicketsData = {
  total: number;
  page: number;
  count: number;
  tickets: Ticket[];
};

export type TicketsResponse = {
  data: TicketsData;
  success: boolean;
};

export type TicketsErrorResponse = {
  message: string;
  success: boolean;
};


export type CreateTicketBody = {
  subject: string;
  description?: string;
}
