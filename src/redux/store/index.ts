import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

// reducers
import authReducer from "../slices/auth/authSlice";
import appReducer from "../slices/app/Appslice"
import vendorReducer from "../slices/vendor/vendorslice"

const rootReducer = combineReducers({
  auth: authReducer,
  app:appReducer,
  vendor:vendorReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export const persistorStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
