import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paymentInfoSlice from "./reducers/paymentInfoSlice";
import filteredSlice from "./reducers/filteredSlice";
import fixedCostsSlice from "./reducers/fixedCostsSlice";

const rootReducer = combineReducers({
  paymentInfo: paymentInfoSlice.reducer,
  filtered: filteredSlice.reducer,
  fixedCosts: fixedCostsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
