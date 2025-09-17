interface GenderCount {
    gender: string;
    total: string;
  }
  
  interface BookingCount {
    status: string;
    count: string;
  }

  export interface DashboardData {
        bookings: BookingCount[];
        genderCounts: GenderCount[];
  }
  
  export interface DashboardResponse {
    success: boolean;
    data: DashboardData
    message?: string;
  }
