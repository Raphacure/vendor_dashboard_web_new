export interface BookingQueryParams {
  dateRange?:
    | {
        dateType: string;
        from: string;
        to: string;
      }
    | undefined;
  from: string;
  page: number;
  pageSize: number;
  status: string;
  id: string;
  searchText?: string;
}

export type GetBookingsApiResponse = {
  data: {
    bookings: any[];
    page: number;
    count: number;
    totalCount: number;
  };
  success: boolean;
};

export type GetBookingsApiResponseError = {
  message: string;
  success: boolean;
};
