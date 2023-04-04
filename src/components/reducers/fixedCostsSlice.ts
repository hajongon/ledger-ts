import { createSlice } from "@reduxjs/toolkit";

const fixedCostsSlice = createSlice({
  name: "fixedCosts",
  initialState: [
    {
      id: "1",
      name: "",
      amount: 0,
      date: "",
    },
  ],
  reducers: {
    setFixedCosts: (state, action) => {
      return action.payload;
    },
    deleteFixedCosts: (state, action) => {
      console.log(action.payload);
      return state.filter((payment) => payment.id !== action.payload);
    },
  },
});

export const { setFixedCosts, deleteFixedCosts } = fixedCostsSlice.actions;

export default fixedCostsSlice;
