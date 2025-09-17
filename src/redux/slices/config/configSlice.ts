import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getConfigInfoAPI,
} from "./configService";

export interface ConfigState {
  loading: boolean;
  error: any;
  configInfo: any;
  defaultTimeSlotsObj: any;
}
const userData: string | null = localStorage.getItem("user");
const initialState: ConfigState = {
  loading: false,
  error: null,
  configInfo: {},
  defaultTimeSlotsObj: null,
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: ConfigState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  
    updateErrorMessage: (state: ConfigState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getConfigInfoAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getConfigInfoAPI.fulfilled,
      (state: ConfigState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.configInfo = action.payload?.data;

        let timeSlotsObj1: { morning: Array<object>; afternoon: Array<object>, evening: Array<object>, night: Array<object> } = {
          morning: [],
          afternoon: [],
          evening: [],
          night: [],
        }
        for (let idx = 0; idx <= action.payload?.data?.timeslots.length; idx++) {
          let timeobjArr = action.payload?.data?.timeslots[idx]?.start_time?.split(':');
          if (timeobjArr && timeobjArr.length) {
            let timeslots = action.payload.data.timeslots[idx];
            if (timeobjArr[0] >= 5 && timeobjArr[0] <= 12) {
              timeSlotsObj1.morning.push(timeslots);
            }
            else if (timeobjArr[0] > 12 && timeobjArr[0] <= 17) {
              timeSlotsObj1.afternoon.push(timeslots);
            }
            else if (timeobjArr[0] > 17 && timeobjArr[0] <= 21) {
              timeSlotsObj1.evening.push(timeslots);
            }
            else {
              timeSlotsObj1.night.push(timeslots);
            }
          }

        }
        // state.slots = action.payload?.data;
        state.defaultTimeSlotsObj = { ...timeSlotsObj1 };

      }
    );
    builder.addCase(getConfigInfoAPI.rejected, (state: ConfigState, action: any) => {
      state.loading = false;
      state.configInfo = {};
    });



    
  },
});

export const { setLoading , updateErrorMessage} = authSlice.actions;

export default authSlice.reducer;
