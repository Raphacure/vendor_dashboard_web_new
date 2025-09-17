
export interface ClientOrderResponse {
  data: {
    clientOrdersCount: number;
    clientOrders: Array<{
      collection_1_date: string;
      collection_1_slot: string;
      final_amount: number;
      id: string;
      status: string;
      invoice_date: string | null;
      bookings_count: number;
      created_at: string;
      client: {
        id: string;
        name: string;
      };
    }>;
  };
  error?: string;
}