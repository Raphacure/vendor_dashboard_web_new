export interface OrderClients {
  data: {
    clients: {
      id: string;
      name: string;
      packages: {
        is_corporate: boolean;
        service_code: string;
        service_name: string;
        image: string | null;
        price: {
          discounted_price: number;
          actual_cost: number;
          discount_percentage: number;
        };
        tests: {
          service_code: string;
          service_name: string;
        }[];
        vendors:
          {
            address:string;
            city:string;
            id:string;
            name:string;
          }[];
      }[];
    }[];
  };
  error?: string;
}
