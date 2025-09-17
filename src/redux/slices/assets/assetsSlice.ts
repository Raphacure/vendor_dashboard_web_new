import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAssets, deleteAssets, getAssets, updateAssets } from "./assetsService";


export interface assetsState {
  loading: boolean;
  error: any;
  assetsList: any;
}
const initialState: assetsState = {
  loading: false,
  error: null,
  assetsList: null,
};

export const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setLoading: (state: assetsState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: assetsState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAssets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAssets.fulfilled,
      (state: assetsState, action: PayloadAction<any>) => {
        state.assetsList = action?.payload
        state.error = null
        state.loading = false
      }
    );
    builder.addCase(getAssets.rejected, (state: assetsState, action: any) => {
      state.loading = false;
      state.assetsList = null;
    });
    
    // create assets
    builder.addCase(createAssets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createAssets.fulfilled,
      (state: assetsState, action: PayloadAction<any>) => {
        state.error = null
        state.loading = false
      }
    );
    builder.addCase(createAssets.rejected, (state: assetsState, action: any) => {
      state.loading = false;
      state.assetsList = null;
    });

    // update assets
    builder.addCase(updateAssets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateAssets.fulfilled,
      (state: assetsState, action: PayloadAction<any>) => {
        state.error = null
        state.loading = false
      }
    );
    builder.addCase(updateAssets.rejected, (state: assetsState, action: any) => {
      state.loading = false;
    });
    
    // delete assests
    builder.addCase(deleteAssets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      deleteAssets.fulfilled,
      (state: assetsState, action: PayloadAction<any>) => {
        state.error = null
        state.loading = false
      }
    );
    builder.addCase(deleteAssets.rejected, (state: assetsState, action: any) => {
      state.loading = false;
    });
  },
});

export const { setLoading, updateErrorMessage } = assetsSlice.actions;

export default assetsSlice.reducer;
