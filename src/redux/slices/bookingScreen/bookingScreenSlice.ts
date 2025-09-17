import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllDoctorBookingsAPI,
  getDoctorSlotsAPI,
} from "./bookingScreenService";

export interface bookingScreenState {
  loading: boolean;
  error: any;
  slots: any;
  timeSlotsObj: any;
  slotTabList: any;
  doctorDetails: any;
  hospitalDetails: any;
  BookingArray: any;
  selectedUserProfiles: any;
  selectedProfileIds: any;
  consultationType: any;
  idxforDoctorChange: any;
  categoryType: any;
  doctorBookings: any;
}
const initialState: bookingScreenState = {
  loading: false,
  error: null,
  slots: null,
  timeSlotsObj: null,
  slotTabList: ["Preferred Slot 1", "Preferred Slot 2 (Optional)"],
  doctorDetails: null,
  hospitalDetails: null,
  BookingArray: [],
  selectedUserProfiles: null,
  selectedProfileIds: null,
  consultationType: null,
  idxforDoctorChange: null,
  categoryType: null,
  doctorBookings: [],
};

export const BookingReviewSlice = createSlice({
  name: "bookingReview",
  initialState,
  reducers: {
    setLoading: (state: bookingScreenState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: bookingScreenState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
    updateDoctordetails: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      console.log(
        "action.payload?.hospitalDetails",
        action.payload?.hospitalDetails
      );
      state.doctorDetails = { ...action.payload?.doctorDetails };
      state.hospitalDetails = { ...action.payload?.hospitalDetails };
      if (state.BookingArray && state.BookingArray.length) {
        let newBookingArr = [...state.BookingArray].filter((item: any) => {
          if (action.payload.categoryType === item.categoryType) {
            return true;
          } else {
            return false;
          }
        });
        if (
          newBookingArr &&
          newBookingArr.length === state.BookingArray.length
        ) {
          let selectedProfileIds = newBookingArr.map(
            (item: any) => item.patientsDetails.id
          );
          state.selectedProfileIds = selectedProfileIds;
          state.BookingArray = [...newBookingArr];
        }
      }
      if (action.payload.consultationType) {
        state.consultationType = action.payload.consultationType;
      } else {
        state.consultationType = "";
      }
      state.categoryType = action.payload.categoryType || null;
    },
    updateBookingSlot1: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].slot1 = {
        ...action.payload.slot1,
      };
    },
    updateBookingSlot2: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].slot2 = {
        ...action.payload.slot2,
      };
    },
    updateBookingDoctordetails: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].doctorDetails = {
        ...action.payload.doctorDetails,
      };
      state.BookingArray[action.payload.idx].hospitalDetails = {
        ...action.payload.hospitalDetails,
      };
      if (action.payload.consultationType) {
        state.BookingArray[action.payload.idx].consultationType =
          action.payload.consultationType;
      } else {
        state.BookingArray[action.payload.idx].consultationType = "";
      }
      state.doctorDetails = null;
      state.hospitalDetails = null;
      state.consultationType = "";
      state.categoryType = null;
    },
    updateBookingAddress: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].address = {
        ...action.payload.address,
      };
    },
    addBooking: (state: bookingScreenState, action: PayloadAction<any>) => {
      state.BookingArray.push(action.payload);
      let selectedProfileIds = state.BookingArray.map(
        (item: any) => item.patientsDetails.id
      );
      state.selectedProfileIds = selectedProfileIds;
    },
    removeBooking: (state: bookingScreenState, action: PayloadAction<any>) => {
      state.BookingArray.splice(action.payload, 1);
      let selectedProfileIds = state.BookingArray.map(
        (item: any) => item.patientsDetails.id
      );
      if (state.BookingArray && state.BookingArray.length === 0) {
        state.selectedProfileIds = [];
      } else {
        state.selectedProfileIds = [...selectedProfileIds];
      }
    },
    updateIdxforDoctorChange: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.idxforDoctorChange = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getDoctorSlotsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorSlotsAPI.fulfilled,
      (state: bookingScreenState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        let timeSlotsObj1: {
          morning: Array<object>;
          afternoon: Array<object>;
          evening: Array<object>;
          night: Array<object>;
        } = {
          morning: [],
          afternoon: [],
          evening: [],
          night: [],
        };
        for (
          let idx = 0;
          idx <= action.payload?.data?.timeslots.length;
          idx++
        ) {
          let timeobjArr =
            action.payload?.data?.timeslots[idx]?.start_time?.split(":");
          if (timeobjArr && timeobjArr.length) {
            let timeslots = action.payload.data.timeslots[idx];
            if (timeobjArr[0] >= 5 && timeobjArr[0] <= 12) {
              timeSlotsObj1.morning.push(timeslots);
            } else if (timeobjArr[0] > 12 && timeobjArr[0] <= 17) {
              timeSlotsObj1.afternoon.push(timeslots);
            } else if (timeobjArr[0] > 17 && timeobjArr[0] <= 21) {
              timeSlotsObj1.evening.push(timeslots);
            } else {
              timeSlotsObj1.night.push(timeslots);
            }
          }
        }
        state.slots = action.payload?.data;
        state.timeSlotsObj = { ...timeSlotsObj1 };
      }
    );
    builder.addCase(
      getDoctorSlotsAPI.rejected,
      (state: bookingScreenState, action: any) => {
        state.loading = false;
        state.slots = null;
      }
    );

    builder.addCase(getAllDoctorBookingsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllDoctorBookingsAPI.fulfilled,
      (state: bookingScreenState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorBookings = action.payload?.data;
      }
    );
    builder.addCase(
      getAllDoctorBookingsAPI.rejected,
      (state: bookingScreenState, action: any) => {
        state.loading = false;
        state.slots = null;
      }
    );
  },
});

export const {
  setLoading,
  updateErrorMessage,
  updateDoctordetails,
  updateBookingSlot1,
  updateBookingSlot2,
  updateBookingDoctordetails,
  addBooking,
  removeBooking,
  updateBookingAddress,
  updateIdxforDoctorChange,
} = BookingReviewSlice.actions;

export default BookingReviewSlice.reducer;
