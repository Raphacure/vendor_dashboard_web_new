export interface ReportsSummaryResponse {
  success: boolean;
  data: {
    totalTimeSaving: number;
    totalBokingsCount: number;
    totalSavingAmoount: number;
    virtualSavingsAmount: number;
    virtualBookings: number;
    virtualSavingTime: number;
    homeVisitLabTestsCount: number;
    homeVisitLabTestSavingAmount: number;
    homeVisitLabTestSavingTime: number;
  } ;
  message?:string
}
