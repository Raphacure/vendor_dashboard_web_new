import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCommunicationLinks, getCommunicationConfig, getCommunicationMap, getEmailTemplates, getSmsTemplate, getWaTemplates, waTemplateRefresh } from "./CommunicationService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  waListTenplates: any;
  waListCounts: number;
  emailListTemplates: any;
  emailListCounts: number;
  smsListTemplates: any;
  smsListCounts: number;

  paramsOptions: string[];
  communicationLinks: any[]
  communicationLinkCount: number;
  config: {
    bookingTypes: string[],
    bookingStatuses: {id: string, name: string}[],
    bookingTestTypes: string[],
    emailTemplates: {id: string, name: string}[],
    waTemplates: {id: string, name: string}[],
  }
}
const userData: string | null = localStorage.getItem("extensionUser");

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  waListCounts: 0,
  waListTenplates: [],
  emailListCounts: 0,
  emailListTemplates: [],
  smsListCounts: 0,
  smsListTemplates: [],
  paramsOptions: [],
  communicationLinks: [],
  communicationLinkCount: 0,
  config: {
    bookingStatuses: [],
    bookingTestTypes:[],
    bookingTypes:[],
    emailTemplates:[],
    waTemplates:[],
  }
  // dailyRevenueInfo: [],
};

export const communicationSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (
      state: ExtensionDashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: ExtensionDashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {

    builder.addCase(getCommunicationMap.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCommunicationMap.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.paramsOptions = action.payload?.data?.fields;
      }
    );
    builder.addCase(
      getCommunicationMap.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // whats app
    builder.addCase(getWaTemplates.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getWaTemplates.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.waListTenplates = action.payload?.data?.watemplates;
        state.waListCounts = action.payload?.data?.watemplatesCount;
      }
    );
    builder.addCase(
      getWaTemplates.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // Email
    builder.addCase(getEmailTemplates.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEmailTemplates.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.emailListTemplates = action.payload?.data?.emailtemplates;
        state.emailListCounts = action.payload?.data?.emailtemplatesCount;
      }
    );
    builder.addCase(
      getEmailTemplates.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // Sms
    builder.addCase(getSmsTemplate.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSmsTemplate.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.smsListTemplates = action.payload?.data?.results;
        state.smsListCounts = action.payload?.data?.total;
      }
    );
    builder.addCase(
      getSmsTemplate.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // Communication Link
    builder.addCase(getAllCommunicationLinks.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllCommunicationLinks.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.communicationLinks = action.payload?.data?.communicationLinks;
        state.communicationLinkCount = action.payload?.data?.communicationLinksCount;
      }
    );
    builder.addCase(
      getAllCommunicationLinks.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // getCommunicationConfig
    builder.addCase(getCommunicationConfig.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCommunicationConfig.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action, "actiopon");
        
        state.config = action.payload?.data;
      }
    );
    builder.addCase(
      getCommunicationConfig.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = communicationSlice.actions;

export default communicationSlice.reducer;
