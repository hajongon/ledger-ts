import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paymentInfoSlice from "./reducers/paymentInfoSlice";
import filteredSlice from "./reducers/filteredSlice";

const rootReducer = combineReducers({
  paymentInfo: paymentInfoSlice.reducer,
  filtered: filteredSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
