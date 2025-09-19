

export type GetBookingsApiResponse =  {
  data: {
    bookings: any[];
    page: number;
    count: number;
    totalCount: number;
  };
  success: boolean;
}

export type GetBookingsApiResponseError =  {
  message:string
  success: boolean;
}



