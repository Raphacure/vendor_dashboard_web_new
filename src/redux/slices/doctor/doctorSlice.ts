import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDoctorsListAPI,
  getDoctorHospitalListAPI,
  getHospitalListAPI,
  doctorRegistration,
  getAllDocEmployees,
} from "./doctorService";

export interface DoctorState {
  loading: boolean;
  error: any;
  hospitalList: any;
  doctorsList: any;
  doctorHospitalsList: any;
  city: any;
  count: any;
  page: any;
  searchText: any;
  tablist: any;
  filterList: any;
  doctorId: any;
  allEmployees: any;
}
const initialState: DoctorState = {
  loading: false,
  error: null,
  hospitalList: [],
  doctorsList: [],
  doctorHospitalsList: [],
  city: "",
  count: "",
  page: "",
  searchText: "",
  tablist: ["Virtual Consultation", "OPD Consultation"],
  filterList: [
    {
      filterTitle: "Gender",
      filters: [
        {
          filterValue: "male",
          filterKey: "Male",
        },
        {
          filterValue: "female",
          filterKey: "Female",
        },
      ],
    },
    {
      filterTitle: "Experience",
      filters: [
        {
          filterValue: "5plusyearexperience",
          filterKey: "5+ Year Experience ",
        },
        {
          filterValue: "10plusyearexperience",
          filterKey: "10+ Year Experience ",
        },
        {
          filterValue: "15plusyearexperience",
          filterKey: "15+ Year Experience ",
        },
        {
          filterValue: "20plusyearexperience",
          filterKey: "20+ Year Experience ",
        },
      ],
    },
    {
      filterTitle: "Rating",
      filters: [
        {
          filterValue: "4pluspatientrating",
          filterKey: "4+ Patient Rating",
        },
        {
          filterValue: "5patientrating",
          filterKey: "5 Patient Rating",
        },
      ],
    },
    {
      filterTitle: "Sort By",
      filters: [
        {
          filterValue: "patientrating-hightolow",
          filterKey: "Patient Rating-High to Low",
        },
        {
          filterValue: "experience-highttolow",
          filterKey: "Experience-High to Low",
        },
        {
          filterValue: "consultfee-highttolow",
          filterKey: "Consult Fee-High to Low",
        },
        {
          filterValue: "consultfee-lowtohigh",
          filterKey: "Consult Fee-Low to High",
        },
      ],
    },
    {
      filterTitle: "Availability",
      filters: [
        {
          filterValue: "available-innext4hour",
          filterKey: "Available In Next 4 Hour",
        },
        {
          filterValue: "available-today",
          filterKey: "Available Today",
        },
        {
          filterValue: "available-tomorrow",
          filterKey: "Available Tomorrow",
        },
        {
          filterValue: "available-next4days",
          filterKey: "Available In Next 4 Days",
        },
      ],
    },
  ],
  doctorId: "",
  allEmployees: [],
};

export const hospitalSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setLoading: (state: DoctorState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: DoctorState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
    updateTablist: (state: DoctorState, action: PayloadAction<any>) => {
      state.tablist = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getDoctorsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorsListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorsList = action.payload?.data;
      }
    );
    builder.addCase(
      getDoctorsListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorsList = [];
      }
    );

    //get Hospital List
    builder.addCase(getDoctorHospitalListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorHospitalListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorHospitalsList = action.payload?.data?.doctorById;
      }
    );
    builder.addCase(
      getDoctorHospitalListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorHospitalsList = [];
      }
    );

    //getHealthPackagesAPI
    builder.addCase(getHospitalListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHospitalListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.hospitalList = action.payload?.data;
      }
    );
    builder.addCase(
      getHospitalListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.hospitalList = [];
      }
    );

    //doctorRegistration
    builder.addCase(doctorRegistration.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      doctorRegistration.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorId = action.payload?.data;
      }
    );
    builder.addCase(
      doctorRegistration.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorId = "";
      }
    );

    // Doctor Employees
    builder.addCase(getAllDocEmployees.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllDocEmployees.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEmployees = action.payload;
      }
    );
    builder.addCase(
      getAllDocEmployees.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allEmployees = [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage, updateTablist } =
  hospitalSlice.actions;

export default hospitalSlice.reducer;
