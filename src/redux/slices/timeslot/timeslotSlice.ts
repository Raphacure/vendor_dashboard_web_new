import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDoctorSlotsAPI,
} from "./timeslotService";

export interface timeslotState {
  loading: boolean;
  error: any;
  slots: any;
  timeSlotsObj: any;
  slotTabList: any;
}
const initialState: timeslotState = {
  loading: false,
  error: null,
  slots: null,
  timeSlotsObj: null,
  slotTabList: ["Preferred Slot 1", "Preferred Slot 2 (Optional)"],
};

export const timeslotSlice = createSlice({
  name: "timeslot",
  initialState,
  reducers: {
    setLoading: (state: timeslotState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: timeslotState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    emptySlotObj: (state: timeslotState) => {
      state.slots = null;
      state.timeSlotsObj = null;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getDoctorSlotsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorSlotsAPI.fulfilled,
      (state: timeslotState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
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
        state.slots = action.payload?.data;
        state.timeSlotsObj = { ...timeSlotsObj1 };
      }
    );
    builder.addCase(getDoctorSlotsAPI.rejected, (state: timeslotState, action: any) => {
      state.loading = false;
      state.slots = null;
    });
  },
});

export const { setLoading, updateErrorMessage, emptySlotObj } = timeslotSlice.actions;

export default timeslotSlice.reducer;
